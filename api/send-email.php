<?php
/**
 * Простой PHP скрипт для отправки email с формы обратной связи
 * Просто загрузите этот файл на ваш сервер в папку api/
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Обработка OPTIONS запроса для CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Проверяем, что это POST запрос
// GET запросы разрешены только для тестирования
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Для тестирования - возвращаем информацию о API
    echo json_encode([
        'status' => 'ok',
        'message' => 'API работает. Используйте POST запрос для отправки email.',
        'endpoint' => '/api/send-email.php',
        'method' => 'POST',
        'required_fields' => ['name', 'email', 'message'],
        'optional_fields' => ['phone']
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Метод не разрешен. Используйте POST.']);
    exit;
}

// Получаем данные из запроса
$data = json_decode(file_get_contents('php://input'), true);

// Валидация
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Поля имя, email и сообщение обязательны']);
    exit;
}

$name = htmlspecialchars($data['name'], ENT_QUOTES, 'UTF-8');
$email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
$phone = isset($data['phone']) ? htmlspecialchars($data['phone'], ENT_QUOTES, 'UTF-8') : '';
$message = htmlspecialchars($data['message'], ENT_QUOTES, 'UTF-8');

if (!$email) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Некорректный email адрес']);
    exit;
}

// Настройки email
$to = 'fkurganbaev@gmail.com'; // Основной email получателя
$cc = 'rajabovinha@gmail.com'; // Дополнительный email для копий
$subject = "Новое сообщение с формы обратной связи от {$name}";
$replyTo = $email;

// HTML версия письма
$htmlMessage = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #4f46e5; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
        .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #4f46e5; }
        .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #4f46e5; }
        .footer { margin-top: 20px; padding: 10px; text-align: center; color: #6b7280; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Новое сообщение с формы обратной связи</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Имя:</div>
                <div class='value'>{$name}</div>
            </div>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'>{$email}</div>
            </div>
            " . ($phone ? "
            <div class='field'>
                <div class='label'>Телефон:</div>
                <div class='value'>{$phone}</div>
            </div>
            " : "") . "
            <div class='field'>
                <div class='label'>Сообщение:</div>
                <div class='value'>" . nl2br($message) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Дата и время:</div>
                <div class='value'>" . date('d.m.Y H:i') . "</div>
            </div>
        </div>
        <div class='footer'>
            <p>Это сообщение отправлено автоматически с сайта LORA GATE</p>
            <p>Для ответа используйте кнопку \"Ответить\" в вашем почтовом клиенте</p>
        </div>
    </div>
</body>
</html>
";

// Текстовая версия письма
$textMessage = "
Новое сообщение с формы обратной связи

Имя: {$name}
Email: {$email}
" . ($phone ? "Телефон: {$phone}\n" : "") . "
Сообщение:
{$message}

Дата и время: " . date('d.m.Y H:i') . "
";

// Заголовки письма
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: LORA GATE <noreply@loragate.uz>',
    'Reply-To: ' . $replyTo,
    'Cc: ' . $cc, // Копия на второй email
    'X-Mailer: PHP/' . phpversion()
];

$headersString = implode("\r\n", $headers);

// Отправка email (оба получателя получат письмо)
$success = mail($to, $subject, $htmlMessage, $headersString);

if ($success) {
    echo json_encode([
        'success' => true,
        'message' => 'Сообщение успешно отправлено'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Ошибка при отправке сообщения. Попробуйте позже.'
    ]);
}
?>

