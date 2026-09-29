<?php
// Демо-версия thresholds.php - пороги температуры и влажности для датчиков

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

try {
    // В демо-режиме возвращаем пороги для всех демо-датчиков
    $device_ids = [
        'TAG-08B-82257480',
        'TAG-08B-82257481',
        'TAG-08B-82257482',
        'TAG-08B-82257483',
        'TAG-08B-82257484',
        'TAG-08B-82257485'
    ];
    
    $thresholds = [];
    foreach ($device_ids as $device_id) {
        $thresholds[$device_id] = [
            'device_id' => $device_id,
            'min_temperature' => 2,
            'max_temperature' => 8,
            'min_humidity' => 30,
            'max_humidity' => 60,
            'critical_min_temperature' => 0,
            'critical_max_temperature' => 10,
            'warning_min_temperature' => 1,
            'warning_max_temperature' => 9
        ];
    }
    
    echo json_encode([
        'status' => 200,
        'success' => true,
        'message' => 'Пороги датчиков получены успешно',
        'data' => $thresholds,
        'count' => count($thresholds),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'success' => false,
        'error' => 'Ошибка получения порогов: ' . $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}
?>
