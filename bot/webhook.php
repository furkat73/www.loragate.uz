<?php
/**
 * Lora Gate — Telegram-бот: webhook
 * URL: https://loragate.uz/bot/webhook.php?secret=XXX
 *
 * 1) Квиз-воронка внутри Telegram (/start → язык → 3 вопроса → имя → контакт → чек-лист PDF)
 * 2) Кнопки карточки лида в чате продаж (статусы, дата аудита)
 * 3) Команды менеджера: /audit ID YYYY-MM-DD HH:MM
 */
require_once __DIR__ . '/lib.php';

header('Content-Type: application/json; charset=utf-8');

// --- Секрет webhook ---
if (LG_WEBHOOK_SECRET !== '') {
    $given = isset($_GET['secret']) ? $_GET['secret'] : '';
    if ($given !== LG_WEBHOOK_SECRET) {
        http_response_code(403);
        echo json_encode(array('ok' => false, 'error' => 'forbidden'));
        exit;
    }
}

if (!lg_bot_configured()) {
    http_response_code(500);
    echo json_encode(array('ok' => false, 'error' => 'bot not configured'));
    exit;
}

$update = json_decode(file_get_contents('php://input'), true);
if (!is_array($update)) {
    echo json_encode(array('ok' => true));
    exit;
}

function lg_is_sales_chat($chatId) {
    return (string)$chatId === (string)LG_SALES_CHAT_ID;
}

/* ================= Кнопки вопросов квиза ================= */

function lg_quiz_kb($q, $lang) {
    if ($q === 1) {
        return lg_inline_kb(array(
            array(array('text' => lg_t($lang, 'opt_manual'), 'callback_data' => 'q:1:manual')),
            array(array('text' => lg_t($lang, 'opt_logger'), 'callback_data' => 'q:1:logger')),
            array(array('text' => lg_t($lang, 'opt_auto'), 'callback_data' => 'q:1:auto')),
            array(array('text' => lg_t($lang, 'opt_other'), 'callback_data' => 'q:1:other')),
        ));
    }
    if ($q === 2) {
        return lg_inline_kb(array(
            array(array('text' => lg_t($lang, 'opt_morning'), 'callback_data' => 'q:2:morning')),
            array(array('text' => lg_t($lang, 'opt_duty'), 'callback_data' => 'q:2:duty')),
            array(array('text' => lg_t($lang, 'opt_notify'), 'callback_data' => 'q:2:notify')),
        ));
    }
    return lg_inline_kb(array(
        array(array('text' => lg_t($lang, 'opt_yes_docs'), 'callback_data' => 'q:3:yes_docs')),
        array(array('text' => lg_t($lang, 'opt_no_docs'), 'callback_data' => 'q:3:no_docs')),
        array(array('text' => lg_t($lang, 'opt_unknown'), 'callback_data' => 'q:3:unknown')),
    ));
}

function lg_send_question($chatId, $q, $lang) {
    $key = 'q' . $q;
    lg_send_text($chatId, lg_t($lang, $key), lg_quiz_kb($q, $lang));
}

function lg_quiz_labels($lang) {
    return array(
        'manual' => lg_t($lang, 'opt_manual'), 'logger' => lg_t($lang, 'opt_logger'),
        'auto' => lg_t($lang, 'opt_auto'), 'other' => lg_t($lang, 'opt_other'),
        'morning' => lg_t($lang, 'opt_morning'), 'duty' => lg_t($lang, 'opt_duty'),
        'notify' => lg_t($lang, 'opt_notify'),
        'yes_docs' => lg_t($lang, 'opt_yes_docs'), 'no_docs' => lg_t($lang, 'opt_no_docs'),
        'unknown' => lg_t($lang, 'opt_unknown'),
    );
}

/* ================= Финал квиза: лид + чек-лист ================= */

function lg_finish_quiz($chatId, $tgUserId, $username, $contactPhone, $contactName) {
    $st = lg_get_state($tgUserId);
    $lang = $st['lang'];
    $d = $st['data'];
    $labels = lg_quiz_labels($lang);

    $name = isset($d['name']) ? $d['name'] : '';
    if ($name === '' && $contactName !== '') $name = $contactName;

    $leadId = lg_save_lead(array(
        'source' => 'bot',
        'name' => $name,
        'phone' => $contactPhone,
        'username' => $username,
        'tg_user_id' => $tgUserId,
        'object_type' => '',
        'object_label' => ($lang === 'ru' ? 'Не указан (бот)' : 'Ko‘rsatilmagan (bot)'),
        'q1' => isset($labels[$d['a1']]) ? $labels[$d['a1']] : '',
        'q2' => isset($labels[$d['a2']]) ? $labels[$d['a2']] : '',
        'q3' => isset($labels[$d['a3']]) ? $labels[$d['a3']] : '',
        'lang' => $lang,
    ));

    lg_send_lead_card($leadId);

    // Чек-лист PDF (если загружен в bot/assets/)
    if (is_file(LG_BOT_CHECKLIST_PDF)) {
        $ch = curl_init(LG_API_URL . LG_BOT_TOKEN . '/sendDocument');
        curl_setopt_array($ch, array(
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => array(
                'chat_id' => $chatId,
                'caption' => lg_t($lang, 'checklist_caption'),
                'parse_mode' => 'HTML',
                'document' => new CURLFile(LG_BOT_CHECKLIST_PDF, 'application/pdf', 'checklist-gxp.pdf'),
            ),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 30,
        ));
        curl_exec($ch);
        curl_close($ch);
        lg_update_lead($leadId, array('checklist_sent' => 1));
    }

    lg_send_text($chatId, lg_t($lang, 'thanks'), lg_remove_keyboard());
    lg_clear_state($tgUserId);
}

/* ================= MESSAGE ================= */

if (isset($update['message'])) {
    $msg = $update['message'];
    $chatId = $msg['chat']['id'];
    $tgUserId = isset($msg['from']['id']) ? (int)$msg['from']['id'] : 0;
    $username = isset($msg['from']['username']) ? $msg['from']['username'] : '';
    $text = isset($msg['text']) ? trim($msg['text']) : '';

    // --- Команда /start ---
    if ($text === '/start' || strpos($text, '/start ') === 0) {
        lg_clear_state($tgUserId);
        lg_send_text($chatId, lg_t('ru', 'choose_lang'), lg_inline_kb(array(
            array(
                array('text' => '🇷🇺 Русский', 'callback_data' => 'lang:ru'),
                array('text' => '🇺🇿 O‘zbekcha', 'callback_data' => 'lang:uz'),
            ),
        )));
        echo json_encode(array('ok' => true));
        exit;
    }

    // --- Команда менеджера /audit (только в чате продаж) ---
    if (strpos($text, '/audit') === 0 && lg_is_sales_chat($chatId)) {
        if (preg_match('/\/audit\s+(\d+)\s+(\d{4}-\d{2}-\d{2})\s+(\d{1,2}:\d{2})/', $text, $m)) {
            $lead = lg_get_lead($m[1]);
            if ($lead) {
                $ts = strtotime($m[2] . ' ' . $m[3]);
                if ($ts && $ts > time()) {
                    lg_update_lead((int)$m[1], array('audit_at' => $ts, 'audit_reminded' => 0, 'status' => 'audit_scheduled'));
                    lg_refresh_lead_card((int)$m[1]);
                    lg_send_text($chatId, "✅ Аудит по заявке #{$m[1]} назначен: <b>" . date('d.m.Y H:i', $ts) . "</b>");
                } else {
                    lg_send_text($chatId, "⚠️ Некорректная дата. Дата должна быть в будущем.");
                }
            } else {
                lg_send_text($chatId, "⚠️ Заявка #{$m[1]} не найдена.");
            }
        } else {
            lg_send_text($chatId, "📅 Формат: <code>/audit ID YYYY-MM-DD HH:MM</code>\nПример: <code>/audit 12 2026-09-25 15:00</code>");
        }
        echo json_encode(array('ok' => true));
        exit;
    }

    // --- Контакт от пользователя (кнопка «Поделиться контактом») ---
    if (isset($msg['contact'])) {
        $st = lg_get_state($tgUserId);
        if ($st['state'] === 'wait_contact') {
            $c = $msg['contact'];
            $phone = isset($c['phone_number']) ? $c['phone_number'] : '';
            if (strpos($phone, '+') !== 0) $phone = '+' . $phone;
            $cname = trim((isset($c['first_name']) ? $c['first_name'] : '') . ' ' . (isset($c['last_name']) ? $c['last_name'] : ''));
            lg_finish_quiz($chatId, $tgUserId, $username, $phone, $cname);
        }
        echo json_encode(array('ok' => true));
        exit;
    }

    // --- Текст: имя компании (шаг wait_name) ---
    if ($text !== '') {
        $st = lg_get_state($tgUserId);
        if ($st['state'] === 'wait_name' && strpos($text, '/') !== 0) {
            $d = $st['data'];
            $d['name'] = mb_substr($text, 0, 120);
            lg_set_state($tgUserId, 'wait_contact', $d, $st['lang']);
            lg_send_text($chatId, lg_t($st['lang'], 'ask_contact'), lg_contact_keyboard($st['lang']));
        }
        echo json_encode(array('ok' => true));
        exit;
    }

    echo json_encode(array('ok' => true));
    exit;
}

/* ================= CALLBACK_QUERY ================= */

if (isset($update['callback_query'])) {
    $cb = $update['callback_query'];
    $cbId = $cb['id'];
    $data = isset($cb['data']) ? $cb['data'] : '';
    $msg = isset($cb['message']) ? $cb['message'] : null;
    $chatId = $msg ? $msg['chat']['id'] : 0;
    $msgId = $msg ? $msg['message_id'] : 0;
    $tgUserId = isset($cb['from']['id']) ? (int)$cb['from']['id'] : 0;
    $parts = explode(':', $data);
    $action = isset($parts[0]) ? $parts[0] : '';

    // --- Выбор языка ---
    if ($action === 'lang') {
        $lang = (isset($parts[1]) && $parts[1] === 'uz') ? 'uz' : 'ru';
        lg_set_state($tgUserId, 'greeted', array(), $lang);
        lg_tg('editMessageText', array(
            'chat_id' => $chatId, 'message_id' => $msgId,
            'text' => lg_t($lang, 'greeting'), 'parse_mode' => 'HTML',
            'reply_markup' => lg_inline_kb(array(
                array(array('text' => lg_t($lang, 'btn_start_quiz'), 'callback_data' => 'quiz:start')),
            )),
        ));
        lg_answer_cb($cbId);
        echo json_encode(array('ok' => true));
        exit;
    }

    // --- Старт квиза ---
    if ($action === 'quiz' && isset($parts[1]) && $parts[1] === 'start') {
        $st = lg_get_state($tgUserId);
        $lang = $st['lang'];
        lg_set_state($tgUserId, 'q1', array(), $lang);
        lg_tg('editMessageText', array(
            'chat_id' => $chatId, 'message_id' => $msgId,
            'text' => lg_t($lang, 'q1'), 'parse_mode' => 'HTML',
            'reply_markup' => lg_quiz_kb(1, $lang),
        ));
        lg_answer_cb($cbId);
        echo json_encode(array('ok' => true));
        exit;
    }

    // --- Ответы q:1:key / q:2:key / q:3:key ---
    if ($action === 'q' && count($parts) === 3) {
        $qn = (int)$parts[1];
        $key = $parts[2];
        $st = lg_get_state($tgUserId);
        $lang = $st['lang'];
        $d = $st['data'];
        $d['a' . $qn] = $key;
        lg_answer_cb($cbId);
        if ($qn === 1 || $qn === 2) {
            $next = $qn + 1;
            lg_set_state($tgUserId, 'q' . $next, $d, $lang);
            lg_tg('editMessageText', array(
                'chat_id' => $chatId, 'message_id' => $msgId,
                'text' => lg_t($lang, 'q' . $next), 'parse_mode' => 'HTML',
                'reply_markup' => lg_quiz_kb($next, $lang),
            ));
        } else {
            lg_set_state($tgUserId, 'wait_name', $d, $lang);
            lg_tg('editMessageText', array(
                'chat_id' => $chatId, 'message_id' => $msgId,
                'text' => lg_t($lang, 'ask_name'), 'parse_mode' => 'HTML',
            ));
        }
        echo json_encode(array('ok' => true));
        exit;
    }

    // --- Кнопки карточки лида (только чат продаж) ---
    if ($action === 'lead' && count($parts) === 3 && lg_is_sales_chat($chatId)) {
        $op = $parts[1];
        $leadId = (int)$parts[2];
        $lead = lg_get_lead($leadId);
        if (!$lead) {
            lg_answer_cb($cbId, 'Заявка не найдена');
            echo json_encode(array('ok' => true));
            exit;
        }
        if ($op === 'auditask') {
            lg_update_lead($leadId, array('status' => 'audit_wait'));
            lg_refresh_lead_card($leadId);
            lg_send_text($chatId, "📅 Укажите дату аудита по заявке <b>#{$leadId}</b> ({$lead['name']}, {$lead['phone']}):\n<code>/audit {$leadId} YYYY-MM-DD HH:MM</code>");
            lg_answer_cb($cbId, 'Отправьте дату командой /audit');
        } else {
            $map = array('work' => 'work', 'done' => 'audit_done', 'kp' => 'kp_sent',
                'closed' => 'closed', 'spam' => 'spam');
            if (isset($map[$op])) {
                lg_update_lead($leadId, array('status' => $map[$op]));
                lg_refresh_lead_card($leadId);
                lg_answer_cb($cbId, 'Статус: ' . lg_status_label($map[$op]));
            } else {
                lg_answer_cb($cbId);
            }
        }
        echo json_encode(array('ok' => true));
        exit;
    }

    lg_answer_cb($cbId);
    echo json_encode(array('ok' => true));
    exit;
}

echo json_encode(array('ok' => true));
