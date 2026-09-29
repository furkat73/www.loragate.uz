<?php
/**
 * PHP скрипт для отправки email через SMTP
 * Используйте эту версию, если функция mail() не работает на вашем хостинге
 * 
 * Требуется: PHPMailer
 * Скачайте: https://github.com/PHPMailer/PHPMailer
 */

// Подключите PHPMailer (раскомментируйте и укажите правильный путь)
// require_once __DIR__ . '/PHPMailer/src/Exception.php';
// require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
// require_once __DIR__ . '/PHPMailer/src/SMTP.php';

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Метод не разрешен']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

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

// ============================================
// НАСТРОЙКИ SMTP (заполните своими данными)
// ============================================

// Вариант 1: Gmail
$smtp_host = 'smtp.gmail.com';
$smtp_port = 587;
$smtp_secure = 'tls'; // 'tls' или 'ssl'
$smtp_user = 'your-email@gmail.com';
$smtp_password = 'your-app-password'; // App Password для Gmail

// Вариант 2: Другой SMTP сервер (раскомментируйте и заполните)
// $smtp_host = 'smtp.yourdomain.com';
// $smtp_port = 587;
// $smtp_secure = 'tls';
// $smtp_user = 'noreply@yourdomain.com';
// $smtp_password = 'your-password';

$to_email = 'fkurganbaev@gmail.com'; // Основной получатель
$cc_email = 'rajabovinha@gmail.com'; // Дополнительный получатель (копия)
$from_email = 'noreply@loragate.uz';
$from_name = 'LORA GATE';

// ============================================
// КОД ОТПРАВКИ (раскомментируйте после установки PHPMailer)
// ============================================

/*
try {
    $mail = new PHPMailer(true);
    
    // Настройки SMTP
    $mail->isSMTP();
    $mail->Host = $smtp_host;
    $mail->SMTPAuth = true;
    $mail->Username = $smtp_user;
    $mail->Password = $smtp_password;
    $mail->SMTPSecure = $smtp_secure;
    $mail->Port = $smtp_port;
    $mail->CharSet = 'UTF-8';
    
    // Отправитель и получатель
    $mail->setFrom($from_email, $from_name);
    $mail->addAddress($to_email);
    $mail->addCC($cc_email); // Копия на второй email
    $mail->addReplyTo($email, $name);
    
    // Содержимое письма
    $mail->isHTML(true);
    $mail->Subject = "Новое сообщение с формы обратной связи от {$name}";
    
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
                " . ($phone ? "<div class='field'><div class='label'>Телефон:</div><div class='value'>{$phone}</div></div>" : "") . "
                <div class='field'>
                    <div class='label'>Сообщение:</div>
                    <div class='value'>" . nl2br($message) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>Дата и время:</div>
                    <div class='value'>" . date('d.m.Y H:i') . "</div>
                </div>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $mail->Body = $htmlMessage;
    $mail->AltBody = "Имя: {$name}\nEmail: {$email}\n" . ($phone ? "Телефон: {$phone}\n" : "") . "Сообщение: {$message}";
    
    $mail->send();
    
    echo json_encode([
        'success' => true,
        'message' => 'Сообщение успешно отправлено'
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Ошибка при отправке: ' . $mail->ErrorInfo
    ]);
}
*/

// Временный ответ (удалите после настройки PHPMailer)
http_response_code(501);
echo json_encode([
    'success' => false,
    'error' => 'PHPMailer не настроен. См. инструкцию в файле.'
]);
?>

