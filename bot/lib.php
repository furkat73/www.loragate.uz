<?php
/**
 * Lora Gate — Telegram-бот: общая библиотека
 * БД (SQLite), Telegram Bot API, тексты RU/UZ, карточка лида.
 * PHP 7.4 compatible.
 */
if (basename(isset($_SERVER['SCRIPT_FILENAME']) ? $_SERVER['SCRIPT_FILENAME'] : '') === basename(__FILE__)) {
    http_response_code(403);
    exit('Forbidden');
}

require_once __DIR__ . '/config.php';

/* ------------------------- Утилиты ------------------------- */

function lg_esc($s) {
    return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8');
}

function lg_bot_configured() {
    if (LG_BOT_TOKEN === '' || LG_SALES_CHAT_ID === '') return false;
    // Незаполненные плейсхолдеры из .env — не считаем настройкой
    foreach (array(LG_BOT_TOKEN, LG_SALES_CHAT_ID) as $v) {
        if (stripos($v, 'YOUR_') !== false || stripos($v, 'HERE') !== false || stripos($v, 'XXX') !== false) {
            return false;
        }
    }
    return true;
}

/* ------------------------- БД (SQLite) ------------------------- */

function lg_db() {
    static $pdo = null;
    if ($pdo !== null) return $pdo;
    if (!is_dir(LG_BOT_DATA_DIR)) {
        mkdir(LG_BOT_DATA_DIR, 0775, true);
    }
    $pdo = new PDO('sqlite:' . LG_BOT_DB);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        source TEXT NOT NULL DEFAULT 'site',
        name TEXT DEFAULT '',
        phone TEXT DEFAULT '',
        username TEXT DEFAULT '',
        tg_user_id INTEGER DEFAULT 0,
        object_type TEXT DEFAULT '',
        object_label TEXT DEFAULT '',
        q1 TEXT DEFAULT '', q2 TEXT DEFAULT '', q3 TEXT DEFAULT '',
        lang TEXT DEFAULT 'ru',
        status TEXT DEFAULT 'new',
        audit_at INTEGER DEFAULT 0,
        message_id INTEGER DEFAULT 0,
        checklist_sent INTEGER DEFAULT 0,
        followup_24_sent INTEGER DEFAULT 0,
        followup_48_sent INTEGER DEFAULT 0,
        pending_reminded INTEGER DEFAULT 0,
        audit_reminded INTEGER DEFAULT 0,
        created_at INTEGER DEFAULT 0,
        updated_at INTEGER DEFAULT 0
    )");
    $pdo->exec("CREATE TABLE IF NOT EXISTS bot_state (
        tg_user_id INTEGER PRIMARY KEY,
        state TEXT DEFAULT '',
        data TEXT DEFAULT '{}',
        lang TEXT DEFAULT 'ru',
        updated_at INTEGER DEFAULT 0
    )");
    return $pdo;
}

function lg_save_lead($d) {
    $now = time();
    $st = lg_db()->prepare("INSERT INTO leads
        (source,name,phone,username,tg_user_id,object_type,object_label,q1,q2,q3,lang,status,created_at,updated_at)
        VALUES (:source,:name,:phone,:username,:tg_user_id,:object_type,:object_label,:q1,:q2,:q3,:lang,'new',:now,:now)");
    $st->execute(array(
        ':source'      => isset($d['source']) ? $d['source'] : 'site',
        ':name'        => isset($d['name']) ? $d['name'] : '',
        ':phone'       => isset($d['phone']) ? $d['phone'] : '',
        ':username'    => isset($d['username']) ? $d['username'] : '',
        ':tg_user_id'  => isset($d['tg_user_id']) ? (int)$d['tg_user_id'] : 0,
        ':object_type' => isset($d['object_type']) ? $d['object_type'] : '',
        ':object_label'=> isset($d['object_label']) ? $d['object_label'] : '',
        ':q1'          => isset($d['q1']) ? $d['q1'] : '',
        ':q2'          => isset($d['q2']) ? $d['q2'] : '',
        ':q3'          => isset($d['q3']) ? $d['q3'] : '',
        ':lang'        => isset($d['lang']) ? $d['lang'] : 'ru',
        ':now'         => $now,
    ));
    return (int)lg_db()->lastInsertId();
}

function lg_get_lead($id) {
    $st = lg_db()->prepare("SELECT * FROM leads WHERE id = :id LIMIT 1");
    $st->execute(array(':id' => (int)$id));
    $row = $st->fetch(PDO::FETCH_ASSOC);
    return $row ? $row : null;
}

function lg_update_lead($id, $fields) {
    $set = array();
    $params = array(':id' => (int)$id);
    foreach ($fields as $k => $v) {
        $set[] = "{$k} = :{$k}";
        $params[":{$k}"] = $v;
    }
    $set[] = "updated_at = :now";
    $params[':now'] = time();
    $st = lg_db()->prepare("UPDATE leads SET " . implode(', ', $set) . " WHERE id = :id");
    return $st->execute($params);
}

/* ------------------------- Состояние диалога в боте ------------------------- */

function lg_get_state($tgId) {
    $st = lg_db()->prepare("SELECT * FROM bot_state WHERE tg_user_id = :id LIMIT 1");
    $st->execute(array(':id' => (int)$tgId));
    $row = $st->fetch(PDO::FETCH_ASSOC);
    if (!$row) return array('state' => '', 'data' => array(), 'lang' => 'ru');
    $data = json_decode(isset($row['data']) ? $row['data'] : '{}', true);
    return array(
        'state' => isset($row['state']) ? $row['state'] : '',
        'data'  => is_array($data) ? $data : array(),
        'lang'  => isset($row['lang']) ? $row['lang'] : 'ru',
    );
}

function lg_set_state($tgId, $state, $data = array(), $lang = null) {
    $cur = lg_get_state($tgId);
    if ($lang === null) $lang = $cur['lang'];
    $st = lg_db()->prepare("INSERT OR REPLACE INTO bot_state (tg_user_id,state,data,lang,updated_at)
        VALUES (:id,:state,:data,:lang,:now)");
    $st->execute(array(
        ':id' => (int)$tgId,
        ':state' => $state,
        ':data' => json_encode($data, JSON_UNESCAPED_UNICODE),
        ':lang' => $lang,
        ':now' => time(),
    ));
}

function lg_clear_state($tgId) {
    $st = lg_db()->prepare("DELETE FROM bot_state WHERE tg_user_id = :id");
    $st->execute(array(':id' => (int)$tgId));
}

/* ------------------------- Telegram Bot API ------------------------- */

function lg_tg($method, $params = array()) {
    if (!lg_bot_configured()) return null;
    $ch = curl_init(LG_API_URL . LG_BOT_TOKEN . '/' . $method);
    curl_setopt_array($ch, array(
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($params, JSON_UNESCAPED_UNICODE),
        CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
    ));
    $res = curl_exec($ch);
    curl_close($ch);
    if ($res === false) return null;
    return json_decode($res, true);
}

function lg_send_text($chatId, $text, $keyboard = null, $parseMode = 'HTML') {
    $p = array('chat_id' => $chatId, 'text' => $text, 'parse_mode' => $parseMode,
        'disable_web_page_preview' => true);
    if ($keyboard !== null) $p['reply_markup'] = $keyboard;
    return lg_tg('sendMessage', $p);
}

function lg_inline_kb($rows) {
    return array('inline_keyboard' => $rows);
}

function lg_answer_cb($cbId, $text = '') {
    $p = array('callback_query_id' => $cbId);
    if ($text !== '') { $p['text'] = $text; $p['show_alert'] = false; }
    return lg_tg('answerCallbackQuery', $p);
}

/* ------------------------- Тексты бота RU/UZ ------------------------- */

function lg_t($lang, $key) {
    static $T = null;
    if ($T === null) {
        $T = array(
            'choose_lang' => array(
                'ru' => 'Выберите язык / Tilni tanlang:',
                'uz' => 'Tilni tanlang / Выберите язык:',
            ),
            'greeting' => array(
                'ru' => "👋 <b>Здравствуйте!</b>\n\nЯ — бот компании <b>Lora Gate</b>.\n\n🎁 Пройдите экспресс-тест из 3 вопросов (1 минута), выявите скрытые риски в зонах хранения и получите <b>Чек-лист подготовки к фарминспекции GxP/GDP</b> в подарок.\n\nА также — возможность записаться на <b>бесплатный выездной аудит</b> вашего объекта!",
                'uz' => "👋 <b>Assalomu alaykum!</b>\n\nMen — <b>Lora Gate</b> kompaniyasi botiman.\n\n🎁 3 ta savoldan iborat ekspress-testni (1 daqiqa) o‘ting, saqlash zonalaridagi yashirin xavflarni aniqlang va <b>GxP/GDP dorixona tekshiruviga tayyorgarlik chek-listini</b> sovg‘a sifatida oling.\n\nShuningdek — ob‘yektingizga <b>bepul chiqish auditi</b>ga yozilish imkoniyati!",
            ),
            'btn_start_quiz' => array('ru' => '▶ Пройти экспресс-тест', 'uz' => '▶ Ekspress-testni o‘tish'),
            'q1' => array(
                'ru' => '❓ <b>Вопрос 1 из 3.</b> Как сейчас фиксируется температура и влажность на вашем объекте?',
                'uz' => '❓ <b>1-savol.</b> Hozir ob‘yektingizda harorat va namlik qanday qayd etiladi?',
            ),
            'q2' => array(
                'ru' => '❓ <b>Вопрос 2 из 3.</b> Что происходит, если ночью или в выходные отключится кондиционер/электричество?',
                'uz' => '❓ <b>2-savol.</b> Kechasi yoki dam olish kunlarida konditsioner/elektr uzilsa nima bo‘ladi?',
            ),
            'q3' => array(
                'ru' => '❓ <b>Вопрос 3 из 3.</b> Есть ли у вас подготовленный комплект документов по Валидации (URS, FS, DQ, OQ)?',
                'uz' => '❓ <b>3-savol.</b> Sizda Validatsiya hujjatlari (URS, FS, DQ, OQ) to‘plami tayyormi?',
            ),
            'opt_manual' => array('ru' => '📝 Вручную в журналы', 'uz' => '📝 Qo‘lda jurnallarga'),
            'opt_logger' => array('ru' => '💾 Логгерами-флешками', 'uz' => '💾 Logger-flashkalar'),
            'opt_auto'   => array('ru' => '📡 Автосистемой 24/7', 'uz' => '📡 Avtotizim 24/7'),
            'opt_other'  => array('ru' => '❔ Другой / не ведётся', 'uz' => '❔ Boshqa / yuritilmaydi'),
            'opt_morning'=> array('ru' => '🌅 Узнаем только утром', 'uz' => '🌅 Faqat ertalab bilamiz'),
            'opt_duty'   => array('ru' => '👮 Есть дежурный', 'uz' => '👮 Navbatchi bor'),
            'opt_notify' => array('ru' => '🔔 SMS/Telegram сразу', 'uz' => '🔔 Darhol SMS/Telegram'),
            'opt_yes_docs' => array('ru' => '✅ Да, пакет готов', 'uz' => '✅ Ha, tayyor'),
            'opt_no_docs'  => array('ru' => '🚫 Нет документов', 'uz' => '🚫 Hujjatlar yo‘q'),
            'opt_unknown'  => array('ru' => '❓ Не знаем / нужна консультация', 'uz' => '❓ Bilmaymiz / maslahat kerak'),
            'ask_name' => array(
                'ru' => "✅ <b>Спасибо!</b> Отчёт о рисках и Чек-лист GxP почти готовы.\n\n👤 Напишите, пожалуйста, <b>ваше имя или название компании</b>:",
                'uz' => "✅ <b>Rahmat!</b> Xavflar hisoboti va GxP chek-listi deyarli tayyor.\n\n👤 Iltimos, <b>ismingiz yoki kompaniya nomini</b> yozing:",
            ),
            'ask_contact' => array(
                'ru' => "📱 Теперь нажмите кнопку <b>«📱 Поделиться контактом»</b> — и мы сразу отправим вам Чек-лист GxP:",
                'uz' => "📱 Endi <b>«📱 Kontaktni ulashish»</b> tugmasini bosing — va biz darhol GxP chek-listini yuboramiz:",
            ),
            'btn_share_contact' => array('ru' => '📱 Поделиться контактом', 'uz' => '📱 Kontaktni ulashish'),
            'thanks' => array(
                'ru' => "🎉 <b>Заявка принята!</b> Чек-лист отправлен выше ☝️\n\nМы свяжемся с вами в течение 15 минут.\n\n🎁 <b>Спецпредложение:</b> бесплатный выездной аудит зон хранения (20 минут, ни к чему не обязывает). Напишите нам — согласуем дату!",
                'uz' => "🎉 <b>Ariza qabul qilindi!</b> Chek-list yuqorida yuborildi ☝️\n\n15 daqiqa ichida siz bilan bog‘lanamiz.\n\n🎁 <b>Maxsus taklif:</b> saqlash zonalarining bepul chiqish auditi (20 daqiqa, hech qanday majburiyat yo‘q). Bizga yozing — sanani kelishamiz!",
            ),
            'checklist_caption' => array(
                'ru' => '📋 Ваш Чек-лист подготовки к фарминспекции GxP/GDP',
                'uz' => '📋 GxP/GDP dorixona tekshiruviga tayyorgarlik chek-listingiz',
            ),
            'followup_24' => array(
                'ru' => "📌 <b>Кейс Lora Gate:</b> в ООО «Rubikon Lek» мы установили 12 датчиков LoRaWAN — теперь температура и влажность всех зон под контролем 24/7, а отчёты для инспекции формируются в один клик.\n\nХотите так же? Запишитесь на бесплатный аудит — покажем слепые зоны именно вашего объекта.",
                'uz' => "📌 <b>Lora Gate keys:</b> «Rubikon Lek» MChJ da 12 ta LoRaWAN datchik o‘rnatdik — endi barcha zonalarning harorati va namligi 24/7 nazoratda, inspeksiya hisobotlari esa bir klikda tayyorlanadi.\n\nShunday bo‘lishini xohlaysizmi? Bepul auditga yoziling — aynan sizning ob‘yektingizdagi ko‘r joylarni ko‘rsatamiz.",
            ),
            'followup_48' => array(
                'ru' => "👋 Добрый день! До конца недели у нас осталось <b>2 свободных слота</b> на бесплатный выезд инженера. Забронировать за вами? Ответьте «Да» — и мы согласуем время.",
                'uz' => "👋 Xayrli kun! Hafta oxirigacha muhandisning bepul chiqishi uchun <b>2 ta bo‘sh slot</b> qoldi. Sizga bron qilaylikmi? «Ha» deb javob bering — vaqtni kelishamiz.",
            ),
        );
    }
    if (!isset($T[$key])) return $key;
    return isset($T[$key][$lang]) ? $T[$key][$lang] : $T[$key]['ru'];
}

/* Подписи вариантов ответов для карточки лида */
function lg_opt_label($key, $lang = 'ru') {
    $map = array(
        'manual' => array('ru' => 'Вручную в бумажные журналы', 'uz' => 'Qolda qogoz jurnallarga'),
        'logger' => array('ru' => 'Автономными логгерами-флешками', 'uz' => 'Avtomatik loggerlar orqali'),
        'auto'   => array('ru' => 'Автоматической беспроводной системой 24/7', 'uz' => 'Avtomatik simsiz tizim 24/7'),
        'other'  => array('ru' => 'Другой вариант / Пока не ведется', 'uz' => 'Boshqa variant / Yuritilmayapti'),
        'morning'=> array('ru' => 'Узнаем только утром', 'uz' => 'Faqat ertalab bilamiz'),
        'duty'   => array('ru' => 'Есть дежурный сотрудник / сторож', 'uz' => 'Navbatchi xodim bor'),
        'notify' => array('ru' => 'SMS / Telegram-уведомление сразу', 'uz' => 'Darhol SMS / Telegram xabar'),
        'yes_docs' => array('ru' => 'Да, полный пакет готов', 'uz' => 'Ha, toliq toplam tayyor'),
        'no_docs'  => array('ru' => 'Нет, документы отсутствуют', 'uz' => 'Yoq, hujjatlar yoq'),
        'unknown'  => array('ru' => 'Не знаем / Нужна консультация', 'uz' => 'Bilmaymiz / Maslahat kerak'),
    );
    if (isset($map[$key])) return isset($map[$key][$lang]) ? $map[$key][$lang] : $map[$key]['ru'];
    return (string)$key;
}

/* ------------------------- Карточка лида ------------------------- */

function lg_object_emoji($type) {
    if ($type === 'pharmacy') return '💊';
    if ($type === 'pharma_warehouse') return '🏭';
    if ($type === 'food_production') return '🍔';
    return '🏢';
}

function lg_status_label($status) {
    $s = $GLOBALS['LG_STATUSES'];
    return isset($s[$status]) ? $s[$status] : $status;
}

/** Текст карточки лида (формат из ТЗ) */
function lg_build_lead_text($lead) {
    $id = (int)$lead['id'];
    $src = ($lead['source'] === 'bot') ? 'ИЗ TELEGRAM-БОТА' : 'С САЙТА LORAGATE.UZ (КВИЗ-ВОРОНКА)';
    $t = "🔔 <b>НОВАЯ ЗАЯВКА {$src}</b> #{$id}\n";
    $t .= "━━━━━━━━━━━━━━━━━━━━━\n\n";
    $t .= "👤 <b>Контактные данные:</b>\n";
    $t .= "• Имя / Компания: " . lg_esc($lead['name']) . "\n";
    $t .= "• Телефон: " . lg_esc($lead['phone']) . "\n";
    $objLabel = $lead['object_label'] !== '' ? $lead['object_label'] : $lead['object_type'];
    $t .= "• Тип объекта: " . lg_object_emoji($lead['object_type']) . " " . lg_esc($objLabel) . "\n";
    if ($lead['username'] !== '') {
        $t .= "• Telegram: @" . lg_esc($lead['username']) . "\n";
    }
    $t .= "\n📊 <b>Ответы на тест:</b>\n";
    $t .= "1. Способ учета: " . lg_esc($lead['q1']) . "\n";
    $t .= "2. При сбое ночью/выходные: " . lg_esc($lead['q2']) . "\n";
    $t .= "3. Валидационные документы: " . lg_esc($lead['q3']) . "\n\n";
    $t .= "🎯 <b>СТАТУС: Требуется бесплатный аудит GxP!</b>\n";
    $t .= "━━━━━━━━━━━━━━━━━━━━━\n";
    $t .= "📅 " . date('d.m.Y H:i', (int)$lead['created_at']) . "\n";
    $t .= "📌 Статус: " . lg_status_label($lead['status']) . "\n";
    if ((int)$lead['audit_at'] > 0) {
        $t .= "🗓 Аудит: " . date('d.m.Y H:i', (int)$lead['audit_at']) . "\n";
    }
    return $t;
}

/** Клавиатура карточки лида */
function lg_build_lead_keyboard($lead) {
    $id = (int)$lead['id'];
    $rows = array();
    // Быстрый звонок
    $digits = preg_replace('/\D/', '', $lead['phone']);
    if ($digits !== '') {
        $rows[] = array(array('text' => '📞 Быстрый звонок', 'url' => 'tel:+' . $digits));
    }
    // Написать в Telegram (если есть tg id / username)
    if ((int)$lead['tg_user_id'] > 0) {
        $rows[] = array(array('text' => '💬 Написать в Telegram', 'url' => 'tg://user?id=' . (int)$lead['tg_user_id']));
    } elseif ($lead['username'] !== '') {
        $rows[] = array(array('text' => '💬 Написать в Telegram', 'url' => 'https://t.me/' . $lead['username']));
    }
    $rows[] = array(
        array('text' => '✅ В работу', 'callback_data' => "lead:work:{$id}"),
        array('text' => '📅 Дата аудита', 'callback_data' => "lead:auditask:{$id}"),
    );
    $rows[] = array(
        array('text' => '✔ Аудит проведён', 'callback_data' => "lead:done:{$id}"),
        array('text' => '📄 КП отправлено', 'callback_data' => "lead:kp:{$id}"),
    );
    $rows[] = array(
        array('text' => '💰 Сделка закрыта', 'callback_data' => "lead:closed:{$id}"),
        array('text' => '❌ Спам', 'callback_data' => "lead:spam:{$id}"),
    );
    return lg_inline_kb($rows);
}

/** Отправить карточку лида в чат продаж, сохранить message_id */
function lg_send_lead_card($leadId) {
    $lead = lg_get_lead($leadId);
    if (!$lead || !lg_bot_configured()) return null;
    $res = lg_send_text(LG_SALES_CHAT_ID, lg_build_lead_text($lead), lg_build_lead_keyboard($lead));
    if (is_array($res) && isset($res['ok']) && $res['ok'] && isset($res['result']['message_id'])) {
        lg_update_lead($leadId, array('message_id' => (int)$res['result']['message_id']));
        return (int)$res['result']['message_id'];
    }
    return null;
}

/** Обновить карточку лида (текст + кнопки) после смены статуса */
function lg_refresh_lead_card($leadId) {
    $lead = lg_get_lead($leadId);
    if (!$lead || (int)$lead['message_id'] <= 0 || !lg_bot_configured()) return null;
    return lg_tg('editMessageText', array(
        'chat_id' => LG_SALES_CHAT_ID,
        'message_id' => (int)$lead['message_id'],
        'text' => lg_build_lead_text($lead),
        'parse_mode' => 'HTML',
        'disable_web_page_preview' => true,
        'reply_markup' => lg_build_lead_keyboard($lead),
    ));
}

/** Простая карточка лида с формы связи (имя + телефон) */
function lg_send_simple_lead($leadId) {
    $lead = lg_get_lead($leadId);
    if (!$lead || !lg_bot_configured()) return null;
    $id = (int)$lead['id'];
    $t = "🔔 <b>Новая заявка с сайта LORAGATE.UZ (форма связи)</b> #{$id}\n";
    $t .= "━━━━━━━━━━━━━━━━━━━━━\n\n";
    $t .= "👤 Имя: " . lg_esc($lead['name']) . "\n";
    $t .= "📞 Телефон: " . lg_esc($lead['phone']) . "\n\n";
    $t .= "🎯 <b>СТАТУС: Перезвонить клиенту!</b>\n";
    $t .= "━━━━━━━━━━━━━━━━━━━━━\n";
    $t .= "📅 " . date('d.m.Y H:i', (int)$lead['created_at']) . "\n";
    $t .= "📌 Статус: " . lg_status_label($lead['status']);
    $rows = array();
    $digits = preg_replace('/\D/', '', $lead['phone']);
    if ($digits !== '') {
        $rows[] = array(array('text' => '📞 Позвонить', 'url' => 'tel:+' . $digits));
    }
    if ((int)$lead['tg_user_id'] > 0) {
        $rows[] = array(array('text' => '💬 Написать в Telegram', 'url' => 'tg://user?id=' . (int)$lead['tg_user_id']));
    }
    $rows[] = array(
        array('text' => '✅ В работу', 'callback_data' => "lead:work:{$id}"),
        array('text' => '❌ Спам', 'callback_data' => "lead:spam:{$id}"),
    );
    $res = lg_send_text(LG_SALES_CHAT_ID, $t, lg_inline_kb($rows));
    if (is_array($res) && isset($res['ok']) && $res['ok'] && isset($res['result']['message_id'])) {
        lg_update_lead($leadId, array('message_id' => (int)$res['result']['message_id']));
        return (int)$res['result']['message_id'];
    }
    return null;
}

/** Клавиатура «поделиться контактом» */
function lg_contact_keyboard($lang) {
    return array(
        'keyboard' => array(array(array(
            'text' => lg_t($lang, 'btn_share_contact'),
            'request_contact' => true,
        ))),
        'resize_keyboard' => true,
        'one_time_keyboard' => true,
    );
}

function lg_remove_keyboard() {
    return array('remove_keyboard' => true);
}
