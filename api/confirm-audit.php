<?php
/**
 * Lora Gate — подтверждение записи на бесплатный аудит
 * POST /api/confirm-audit.php  { lead_id: int }
 *
 * Меняет статус лида на audit_wait и шлёт уведомление на почту.
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/../bot/lib.php';

$data = json_decode(file_get_contents('php://input'), true);
$leadId = isset($data['lead_id']) ? (int)$data['lead_id'] : 0;
if ($leadId <= 0) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Некорректный lead_id']);
    exit;
}

$lead = lg_get_lead($leadId);
if (!$lead) {
    http_response_code(404);
    echo json_encode(['success' => false, 'error' => 'Заявка не найдена']);
    exit;
}

lg_update_lead($leadId, ['status' => 'audit_wait']);

// Письмо-уведомление
$to = lg_env('QUIZ_NOTIFY_EMAIL') !== '' ? lg_env('QUIZ_NOTIFY_EMAIL') : 'fkurganbaev@gmail.com';
$cc = lg_env('QUIZ_NOTIFY_CC') !== '' ? lg_env('QUIZ_NOTIFY_CC') : 'rajabovinha@gmail.com';
$subject = "Клиент #{$leadId} подтвердил запись на бесплатный аудит — {$lead['name']}";
$safe = function ($s) { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); };
$html = "<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body style='font-family:Arial,sans-serif;color:#333'>"
    . "<div style='max-width:600px;margin:0 auto'>"
    . "<div style='background:#16a34a;color:#fff;padding:16px 20px;border-radius:8px 8px 0 0'>"
    . "<h2 style='margin:0'>Запись на бесплатный аудит подтверждена!</h2></div>"
    . "<div style='background:#f9fafb;padding:20px;border:1px solid #e5e7eb'>"
    . "<p><b>Заявка:</b> #{$leadId}</p>"
    . "<p><b>Имя / Компания:</b> {$safe($lead['name'])}</p>"
    . "<p><b>Телефон:</b> <a href='tel:{$safe(preg_replace('/\\D/', '', $lead['phone']))}'>{$safe($lead['phone'])}</a></p>"
    . "<p><b>Тип объекта:</b> {$safe($lead['object_label'])}</p>"
    . "<hr><p style='color:#b91c1c'><b>Согласуйте дату и время выезда инженера!</b></p>"
    . "<p style='color:#6b7280;font-size:12px'>Дата: " . date('d.m.Y H:i') . "</p>"
    . "</div></div></body></html>";
$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: LORA GATE <noreply@loragate.uz>',
    'Cc: ' . $cc,
    'X-Mailer: PHP/' . phpversion(),
]);
@mail($to, $subject, $html, $headers);

// Дубль в Telegram, если настроен
if (lg_bot_configured()) {
    lg_send_text(LG_SALES_CHAT_ID, "✅ <b>Клиент #{$leadId} подтвердил запись на бесплатный аудит!</b>\n👤 {$safe($lead['name'])} • 📞 {$safe($lead['phone'])}\nСогласуйте дату выезда.");
    lg_refresh_lead_card($leadId);
}

echo json_encode(['success' => true, 'message' => 'Запись подтверждена']);
