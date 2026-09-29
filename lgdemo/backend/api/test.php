<?php
// Демо-версия test.php - API работает БЕЗ базы данных

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// ДЕМО-РЕЖИМ: База данных не используется
// Все данные генерируются динамически
echo json_encode([
    'status' => 200,
    'success' => true,
    'message' => 'API работает корректно',
    'server' => 'demo',
    'timestamp' => date('Y-m-d H:i:s'),
    'php_version' => phpversion(),
    'demo_mode' => true,
    'database' => [
        'status' => 'demo',
        'mode' => 'demo',
        'connected' => false,
        'name' => 'demo',
        'total_records' => 0,
        'message' => 'Демо-режим: база данных не требуется'
    ]
], JSON_UNESCAPED_UNICODE);
?>
