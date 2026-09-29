<?php
// Демо-версия verification-check.php
// Возвращает пустой список устройств с приближающимся сроком поверки

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

try {
    $user_id = isset($_GET['user_id']) ? intval($_GET['user_id']) : null;
    $days = isset($_GET['days']) ? intval($_GET['days']) : 30;
    
    // В демо-режиме возвращаем пустой список
    echo json_encode([
        'status' => 200,
        'success' => true,
        'data' => [],
        'message' => 'Демо-режим: нет устройств с приближающимся сроком поверки',
        'user_id' => $user_id,
        'days' => $days,
        'count' => 0,
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'success' => false,
        'error' => 'Ошибка получения данных: ' . $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}
?>
