<?php
// Простой тест доступности API сервера
// Используется для проверки подключения к серверу

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Возвращаем простой успешный ответ
echo json_encode([
    'status' => 200,
    'success' => true,
    'message' => 'Сервер доступен',
    'server' => 'demo',
    'timestamp' => date('Y-m-d H:i:s'),
    'php_version' => phpversion()
], JSON_UNESCAPED_UNICODE);
?>
