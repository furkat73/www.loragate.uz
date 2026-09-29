<?php
/**
 * Lora Gate — простая форма связи (Имя + Телефон)
 * POST /api/send-lead.php  { name, phone, lang? }
 *
 * 1) Сохраняет лид в БД (bot/data/leads.db, source = contact-form)
 * 2) Отправляет карточку с кнопкой звонка в Telegram (если настроен)
 * 3) Если Telegram недоступен — дублирует письмом на рабочую почту
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

$name = isset($data['name']) ? mb_substr(trim($data['name']), 0, 120) : '';
$phone = isset($data['phone']) ? mb_substr(trim($data['phone']), 0, 40) : '';
$lang = (isset($data['lang']) && $data['lang'] === 'en') ? 'en' : ((isset($data['lang']) && $data['lang'] === 'uz') ? 'uz' : 'ru');
$digits = preg_replace('/\D/', '', $phone);

if ($name === '' || strlen($digits) < 12) {
    http_response_code(400);
    $msg = array(
        'ru' => 'Укажите имя и корректный номер телефона',
        'uz' => 'Ism va to‘g‘ri telefon raqamini ko‘rsating',
        'en' => 'Please provide your name and a valid phone number',
    );
    echo json_encode(['success' => false, 'error' => $msg[$lang]]);
    exit;
}

// 1) Лид в БД
try {
    $leadId = lg_save_lead([
        'source' => 'contact-form',
        'name' => $name,
        'phone' => $phone,
        'lang' => $lang,
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Ошибка сохранения заявки']);
    exit;
}

// 2) Telegram
$sent = false;
if (lg_bot_configured()) {
    $sent = lg_send_simple_lead($leadId) !== null;
}

// 3) Fallback: письмо, если Telegram не настроен или не отправился
if (!$sent) {
    $to = lg_env('QUIZ_NOTIFY_EMAIL') !== '' ? lg_env('QUIZ_NOTIFY_EMAIL') : 'fkurganbaev@gmail.com';
    $safe = function ($s) { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); };
    $date = date('d.m.Y H:i');
    $html = "<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body style='font-family:Arial,sans-serif;color:#333'>"
        . "<div style='max-width:600px;margin:0 auto'>"
        . "<div style='background:#1d4ed8;color:#fff;padding:16px 20px;border-radius:8px 8px 0 0'>"
        . "<h2 style='margin:0'>Новая заявка с формы связи #{$leadId}</h2></div>"
        . "<div style='background:#f9fafb;padding:20px;border:1px solid #e5e7eb'>"
        . "<p><b>Имя:</b> {$safe($name)}</p>"
        . "<p><b>Телефон:</b> <a href='tel:+{$safe($digits)}'>{$safe($phone)}</a></p>"
        . "<hr><p style='color:#b91c1c'><b>Перезвоните клиенту!</b></p>"
        . "<p style='color:#6b7280;font-size:12px'>Дата: {$date}</p>"
        . "</div></div></body></html>";
    $headers = implode("\r\n", [
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'From: LORA GATE <noreply@loragate.uz>',
        'X-Mailer: PHP/' . phpversion(),
    ]);
    $sent = @mail($to, "Новая заявка с формы связи #{$leadId} — {$name}", $html, $headers);
}

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Заявка отправлена', 'lead_id' => $leadId]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Ошибка отправки. Позвоните нам напрямую.']);
}
