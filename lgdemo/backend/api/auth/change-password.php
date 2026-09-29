<?php
// Демо-версия API для смены пароля
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Обработка preflight запросов
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Проверяем метод запроса
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 405,
        'message' => 'Метод не разрешен',
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Получаем данные из запроса
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode([
        'status' => 400,
        'message' => 'Неверный формат данных',
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$user_id = isset($data['user_id']) ? intval($data['user_id']) : 0;
$current_password = isset($data['current_password']) ? trim($data['current_password']) : '';
$new_password = isset($data['new_password']) ? trim($data['new_password']) : '';

// Валидация
if (!$user_id || $user_id === 0) {
    http_response_code(400);
    echo json_encode([
        'status' => 400,
        'message' => 'Некорректный ID пользователя',
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if (empty($current_password)) {
    http_response_code(400);
    echo json_encode([
        'status' => 400,
        'message' => 'Текущий пароль обязателен для заполнения',
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if (empty($new_password)) {
    http_response_code(400);
    echo json_encode([
        'status' => 400,
        'message' => 'Новый пароль обязателен для заполнения',
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if (strlen($new_password) < 6) {
    http_response_code(400);
    echo json_encode([
        'status' => 400,
        'message' => 'Новый пароль должен содержать минимум 6 символов',
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Демонстрационные учетные записи
$demoAccounts = [
    'admin' => 'admin123',
    'operator' => 'operator123',
    'auditor' => 'auditor123',
    'viewer' => 'viewer123'
];

// Определяем username по user_id
// Соответствие ID из AuthContext.tsx:
// admin: id=1, operator: id=2, auditor: id=3, viewer: id=4
$username = 'admin'; // По умолчанию
if ($user_id === 1) $username = 'admin';
elseif ($user_id === 2) $username = 'operator';
elseif ($user_id === 3) $username = 'auditor';
elseif ($user_id === 4) $username = 'viewer';

// Отладочная информация (можно убрать в production)
$debug_info = [
    'user_id' => $user_id,
    'username' => $username,
    'current_password_length' => strlen($current_password),
    'expected_password' => isset($demoAccounts[$username]) ? $demoAccounts[$username] : 'NOT_FOUND',
    'password_match' => isset($demoAccounts[$username]) && $current_password === $demoAccounts[$username]
];

// Проверяем текущий пароль
if (!isset($demoAccounts[$username])) {
    http_response_code(400);
    echo json_encode([
        'status' => 400,
        'message' => 'Пользователь не найден: ' . $username,
        'debug' => $debug_info,
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($current_password !== $demoAccounts[$username]) {
    http_response_code(400);
    echo json_encode([
        'status' => 400,
        'message' => 'Текущий пароль неверен',
        'debug' => $debug_info,
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// В демо-режиме просто возвращаем успех
// В реальной системе здесь была бы обновлена база данных
echo json_encode([
    'status' => 200,
    'message' => 'Пароль успешно изменен',
    'data' => [
        'user_id' => $user_id,
        'username' => $username
    ],
    'timestamp' => date('Y-m-d H:i:s')
], JSON_UNESCAPED_UNICODE);
?>
