<?php
// Демо-версия API текущего пользователя (работает без базы данных)

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

try {
    // Демо-пользователь: наблюдатель
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
        'updated_at' => date('Y-m-d H:i:s'),
        'permissions' => ['dashboard:read', 'reports:read', 'devices:read']
    ];
    
    echo json_encode([
        'status' => 200,
        'message' => 'Демо-пользователь получен успешно',
        'data' => $demo_user,
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'error' => 'Ошибка получения демо-пользователя: ' . $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}
?>
