<?php
// Демо-версия API алертов (работает без базы данных)

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

try {
    // В демо-режиме алертов нет (все датчики в норме)
    $alerts = [];
    
    echo json_encode([
        'status' => 200,
        'message' => 'Демо-алерты получены успешно',
        'data' => $alerts,
        'count' => 0,
        'timestamp' => date('Y-m-d H:i:s'),
        'source' => 'demo_data'
    ], JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'error' => 'Ошибка получения демо-алертов: ' . $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}
?>
