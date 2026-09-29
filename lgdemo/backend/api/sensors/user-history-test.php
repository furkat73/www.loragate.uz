<?php
// Тестовая версия user-history.php для диагностики ошибок

// Включаем отображение ошибок
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

try {
    // Простая версия для тестирования
    $device_id = isset($_GET['device_id']) ? $_GET['device_id'] : null;
    $hours = isset($_GET['hours']) ? intval($_GET['hours']) : 24;
    $user_id = isset($_GET['user_id']) ? intval($_GET['user_id']) : null;
    
    // Генерируем простые тестовые данные
    $history = [];
    $now = time();
    
    for ($i = 0; $i < min($hours, 24); $i++) {
        $timestamp = $now - ($i * 3600);
        $history[] = [
            'id' => $i + 1,
            'device_id' => $device_id ? $device_id : 'TAG-08B-82257480',
            'sensor_id' => $device_id ? $device_id : 'TAG-08B-82257480',
            'temperature' => round(4.5 + ($i * 0.1), 1),
            'humidity' => round(45.0 + ($i * 0.2), 1),
            'timestamp' => date('Y-m-d H:i:s', $timestamp),
            'time' => date('H:i', $timestamp),
            'date' => date('Y-m-d', $timestamp)
        ];
    }
    
    echo json_encode([
        'status' => 200,
        'success' => true,
        'message' => 'Тестовая история получена успешно',
        'data' => $history,
        'device_id' => $device_id,
        'user_id' => $user_id,
        'hours' => $hours,
        'count' => count($history),
        'timestamp' => date('Y-m-d H:i:s'),
        'source' => 'test_data'
    ], JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'success' => false,
        'error' => 'Ошибка: ' . $e->getMessage(),
        'file' => $e->getFile(),
        'line' => $e->getLine(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
} catch (Error $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'success' => false,
        'error' => 'Fatal Error: ' . $e->getMessage(),
        'file' => $e->getFile(),
        'line' => $e->getLine(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}
?>
