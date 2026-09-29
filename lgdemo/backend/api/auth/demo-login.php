<?php
// Демо-версия авторизации (работает без базы данных)
// Один пользователь-наблюдатель для демонстрации

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Обработка preflight запросов
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Метод не поддерживается');
    }
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        throw new Exception('Неверные данные запроса');
    }
    
    // Валидация обязательных полей
    if (empty($input['username']) || empty($input['password'])) {
        throw new Exception('Имя пользователя и пароль обязательны');
    }
    
    $username = $input['username'];
    $password = $input['password'];
    
    // Демо-пользователь: наблюдатель
    // Логин: demo
    // Пароль: demo123
    $demo_user = [
        'id' => 1,
        'username' => 'demo',
        'email' => 'demo@example.com',
        'full_name' => 'Демо Пользователь',
        'role' => 'viewer', // Наблюдатель
        'status' => 'active',
        'department' => 'Демонстрация',
        'phone' => '+7 (999) 000-00-00',
        'last_login' => date('Y-m-d H:i:s'),
        'password_changed' => true,
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s')
    ];
    
    // Проверка логина и пароля
    if ($username !== 'demo' || $password !== 'demo123') {
        throw new Exception('Неверное имя пользователя или пароль');
    }
    
    // Генерация JWT токена (упрощенная версия)
    $token_data = [
        'user_id' => $demo_user['id'],
        'username' => $demo_user['username'],
        'role' => $demo_user['role'],
        'exp' => time() + (8 * 60 * 60) // 8 часов
    ];
    
    $token = base64_encode(json_encode($token_data));
    
    echo json_encode([
        'status' => 200,
        'message' => 'Авторизация успешна',
        'data' => [
            'user' => $demo_user,
            'token' => $token,
            'expires_at' => date('Y-m-d H:i:s', $token_data['exp']),
            'must_change_password' => false
        ],
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(401);
    echo json_encode([
        'status' => 401,
        'message' => 'Ошибка авторизации: ' . $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}
?>
