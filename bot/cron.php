<?php
/**
 * Lora Gate — Telegram-бот: cron-задачи
 *
 * Запуск:
 *   CLI:  php bot/cron.php
 *   HTTP: https://loragate.uz/bot/cron.php?key=XXX  (BOT_CRON_SECRET)
 *   Cron на хостинге: каждые 5–10 минут
 *
 * 1) Лид без ответа > 30 минут → ⚠️ напоминание в чат продаж
 * 2) Аудит через ~2 часа → ⏰ напоминание
 * 3) Фоллоу-ап 24ч (кейс) и 48ч (слоты) — только лиды из бота (есть tg_user_id)
 */
require_once __DIR__ . '/lib.php';

header('Content-Type: application/json; charset=utf-8');

$isCli = (php_sapi_name() === 'cli');
if (!$isCli && LG_CRON_SECRET !== '') {
    $given = isset($_GET['key']) ? $_GET['key'] : '';
    if ($given !== LG_CRON_SECRET) {
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

$now = time();
$report = array('pending' => 0, 'audit' => 0, 'followup_24' => 0, 'followup_48' => 0);
$db = lg_db();

/* 1) Подвисшие лиды: статус new, старше 30 минут */
$st = $db->prepare("SELECT * FROM leads WHERE status = 'new' AND pending_reminded = 0 AND created_at < :t");
$st->execute(array(':t' => $now - 1800));
foreach ($st->fetchAll(PDO::FETCH_ASSOC) as $lead) {
    $id = (int)$lead['id'];
    lg_send_text(LG_SALES_CHAT_ID,
        "⚠️ <b>Лид #{$id} без ответа уже 30+ минут!</b>\n" .
        "👤 " . lg_esc($lead['name']) . " • 📞 " . lg_esc($lead['phone']) . "\n" .
        "Свяжитесь с клиентом по поводу бесплатного аудита GxP.");
    lg_update_lead($id, array('pending_reminded' => 1));
    $report['pending']++;
}

/* 2) Аудит в ближайшие 2 часа */
$st = $db->prepare("SELECT * FROM leads WHERE status = 'audit_scheduled'
    AND audit_reminded = 0 AND audit_at > :now AND audit_at <= :soon");
$st->execute(array(':now' => $now, ':soon' => $now + 7200));
foreach ($st->fetchAll(PDO::FETCH_ASSOC) as $lead) {
    $id = (int)$lead['id'];
    lg_send_text(LG_SALES_CHAT_ID,
        "⏰ <b>Напоминание: аудит через ~2 часа!</b>\n" .
        "🗓 " . date('d.m.Y H:i', (int)$lead['audit_at']) . "\n" .
        "👤 " . lg_esc($lead['name']) . " • 📞 " . lg_esc($lead['phone']));
    lg_update_lead($id, array('audit_reminded' => 1));
    $report['audit']++;
}

/* 3) Фоллоу-ап 24ч — кейс (лиды из бота, есть tg_user_id) */
$st = $db->prepare("SELECT * FROM leads WHERE source = 'bot' AND tg_user_id > 0
    AND followup_24_sent = 0 AND status IN ('new','work') AND created_at < :t");
$st->execute(array(':t' => $now - 86400));
foreach ($st->fetchAll(PDO::FETCH_ASSOC) as $lead) {
    lg_send_text((int)$lead['tg_user_id'], lg_t($lead['lang'], 'followup_24'));
    lg_update_lead((int)$lead['id'], array('followup_24_sent' => 1));
    $report['followup_24']++;
}

/* 4) Фоллоу-ап 48ч — свободные слоты */
$st = $db->prepare("SELECT * FROM leads WHERE source = 'bot' AND tg_user_id > 0
    AND followup_48_sent = 0 AND status IN ('new','work') AND created_at < :t");
$st->execute(array(':t' => $now - 172800));
foreach ($st->fetchAll(PDO::FETCH_ASSOC) as $lead) {
    lg_send_text((int)$lead['tg_user_id'], lg_t($lead['lang'], 'followup_48'));
    lg_update_lead((int)$lead['id'], array('followup_48_sent' => 1));
    $report['followup_48']++;
}

echo json_encode(array('ok' => true, 'report' => $report, 'time' => date('d.m.Y H:i')));
