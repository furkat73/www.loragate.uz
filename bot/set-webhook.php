<?php
/**
 * Lora Gate — установка Telegram webhook
 *
 *   CLI:  php bot/set-webhook.php https://loragate.uz/bot/webhook.php?secret=XXX
 *   HTTP: https://loragate.uz/bot/set-webhook.php?key=CRON_SECRET&url=...
 */
require_once __DIR__ . '/lib.php';
header('Content-Type: application/json; charset=utf-8');

$isCli = (php_sapi_name() === 'cli');
$url = '';
if ($isCli) {
    $url = isset($argv[1]) ? $argv[1] : '';
} else {
    if (LG_CRON_SECRET !== '' && (!isset($_GET['key']) || $_GET['key'] !== LG_CRON_SECRET)) {
        http_response_code(403);
        echo json_encode(array('ok' => false, 'error' => 'forbidden'));
        exit;
    }
    $url = isset($_GET['url']) ? $_GET['url'] : '';
}

if ($url === '') {
    http_response_code(400);
    echo json_encode(array('ok' => false, 'error' => 'URL не указан'));
    exit;
}

$res = lg_tg('setWebhook', array('url' => $url, 'allowed_updates' => array('message', 'callback_query')));
echo json_encode(array('ok' => true, 'telegram' => $res), JSON_UNESCAPED_UNICODE);
