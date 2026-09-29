<?php
/**
 * Lora Gate — приём заявки с квиз-воронки сайта (схема БЕЗ Telegram)
 * POST /api/send-quiz.php
 *
 * 1) Сохраняет лид в БД (bot/data/leads.db)
 * 2) Отправляет письмо с расшифровкой на рабочую почту
 * 3) (опционально) Пересылает лид в CRM-webhook (Bitrix24 / Make / AmoCRM)
 * 4) (опционально) Дублирует карточку в Telegram — только если задан BOT_TOKEN
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

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data || empty($data['name']) || empty($data['phone']) || empty($data['objectType']) || empty($data['answers'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Заполните все обязательные поля']);
    exit;
}

$name = mb_substr(trim($data['name']), 0, 120);
$phone = mb_substr(trim($data['phone']), 0, 40);
$lang = (isset($data['lang']) && $data['lang'] === 'uz') ? 'uz' : 'ru';

if ($lang === 'en') {
    $objectLabels = [
        'pharma_warehouse' => 'Pharmaceutical warehouse',
        'pharmacy' => 'Pharmacy / Pharmacy chain',
        'food_production' => 'Food / Production facility',
    ];
} elseif ($lang === 'ru') {
    $objectLabels = [
        'pharma_warehouse' => 'Фармацевтический склад',
        'pharmacy' => 'Аптека / Аптечная сеть',
        'food_production' => 'Пищевое / Производственное помещение',
    ];
} else {
    $objectLabels = [
        'pharma_warehouse' => 'Dorixona ombori',
        'pharmacy' => 'Dorixona / Dorixona tarmog\'i',
        'food_production' => 'Oziq-ovqat / Ishlab chiqarish binosi',
    ];
}
$objectKey = isset($data['objectType']) ? $data['objectType'] : '';
$objectLabel = isset($objectLabels[$objectKey]) ? $objectLabels[$objectKey] : $objectKey;

$answers = $data['answers'];
$a1 = isset($answers['q1']) ? mb_substr($answers['q1'], 0, 300) : '-';
$a2 = isset($answers['q2']) ? mb_substr($answers['q2'], 0, 300) : '-';
$a3 = isset($answers['q3']) ? mb_substr($answers['q3'], 0, 300) : '-';
$date = date('d.m.Y H:i');

// ---------- 1) Лид в БД ----------
try {
    $leadId = lg_save_lead([
        'source' => 'site',
        'name' => $name,
        'phone' => $phone,
        'object_type' => $objectKey,
        'object_label' => $objectLabel,
        'q1' => $a1, 'q2' => $a2, 'q3' => $a3,
        'lang' => $lang,
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Ошибка сохранения заявки']);
    exit;
}

// ---------- 2) Письмо на рабочую почту ----------
$to = lg_env('QUIZ_NOTIFY_EMAIL') !== '' ? lg_env('QUIZ_NOTIFY_EMAIL') : 'fkurganbaev@gmail.com';
$cc = lg_env('QUIZ_NOTIFY_CC') !== '' ? lg_env('QUIZ_NOTIFY_CC') : 'rajabovinha@gmail.com';
$subject = "Новая заявка с квиза #{$leadId} — {$name}";

$safe = function ($s) { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); };
$html = "<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body style='font-family:Arial,sans-serif;color:#333'>"
    . "<div style='max-width:600px;margin:0 auto'>"
    . "<div style='background:#4f46e5;color:#fff;padding:16px 20px;border-radius:8px 8px 0 0'>"
    . "<h2 style='margin:0'>Новая заявка с квиз-воронки #{$leadId}</h2></div>"
    . "<div style='background:#f9fafb;padding:20px;border:1px solid #e5e7eb'>"
    . "<p><b>Имя / Компания:</b> {$safe($name)}</p>"
    . "<p><b>Телефон:</b> <a href='tel:{$safe(preg_replace('/\\D/', '', $phone))}'>{$safe($phone)}</a></p>"
    . "<p><b>Тип объекта:</b> {$safe($objectLabel)}</p>"
    . "<hr><p><b>1. Способ учета:</b> {$safe($a1)}</p>"
    . "<p><b>2. При сбое ночью/выходные:</b> {$safe($a2)}</p>"
    . "<p><b>3. Валидационные документы:</b> {$safe($a3)}</p>"
    . "<hr><p style='color:#b91c1c'><b>Требуется звонок в течение 15 минут + бесплатный аудит GxP!</b></p>"
    . "<p style='color:#6b7280;font-size:12px'>Дата: {$date}</p>"
    . "</div></div></body></html>";

$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: LORA GATE <noreply@loragate.uz>',
    'Cc: ' . $cc,
    'X-Mailer: PHP/' . phpversion(),
]);
@mail($to, $subject, $html, $headers);

// ---------- 3) CRM-webhook (Bitrix24 / Make / AmoCRM) — опционально ----------
$crmUrl = lg_env('QUIZ_CRM_WEBHOOK');
if ($crmUrl !== '') {
    $ch = curl_init($crmUrl);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode([
            'lead_id' => $leadId, 'source' => 'quiz-site',
            'name' => $name, 'phone' => $phone,
            'object_type' => $objectKey, 'object_label' => $objectLabel,
            'q1' => $a1, 'q2' => $a2, 'q3' => $a3,
            'lang' => $lang, 'created_at' => $date,
        ], JSON_UNESCAPED_UNICODE),
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 10,
    ]);
    curl_exec($ch);
    curl_close($ch);
}

// ---------- 4) Telegram-дубль — только если настроен токен (этап 2) ----------
if (lg_bot_configured()) {
    lg_send_lead_card($leadId);
}

echo json_encode(['success' => true, 'message' => 'Заявка отправлена', 'lead_id' => $leadId]);
