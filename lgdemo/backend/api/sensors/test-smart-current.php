<?php
// Копия smart-user-current.php с дополнительной диагностикой
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$debug_log = [];
$debug_log[] = 'Начало выполнения test-smart-current.php';

// Подключаем функцию получения демо-датчиков
ob_start();
require_once __DIR__ . '/demo-current.php';
$require_output = ob_get_clean();

$debug_log[] = 'После require_once demo-current.php';
$debug_log[] = 'Длина вывода: ' . strlen($require_output);
$debug_log[] = 'Вывод является JSON: ' . (json_decode($require_output) !== null ? 'Да' : 'Нет');
$debug_log[] = 'Функция getDemoSensors существует: ' . (function_exists('getDemoSensors') ? 'Да' : 'Нет');

if (strlen($require_output) > 0) {
    $debug_log[] = 'ПРОБЛЕМА: demo-current.php вывел данные при require_once!';
    $debug_log[] = 'Первые 200 символов вывода: ' . substr($require_output, 0, 200);
}

try {
    if (!function_exists('getDemoSensors')) {
        throw new Exception('Функция getDemoSensors не найдена после require_once');
    }
    
    $sensors = getDemoSensors();
    $debug_log[] = 'getDemoSensors() выполнен успешно, получено датчиков: ' . count($sensors);
    
    // Загружаем обновленные данные устройств
    $storageFile = __DIR__ . '/device-updates.json';
    $deviceUpdates = [];
    $debugInfo = [
        'file_exists' => file_exists($storageFile),
        'file_readable' => file_exists($storageFile) ? is_readable($storageFile) : false,
        'file_path' => $storageFile,
        'raw_keys' => [],
        'normalized_keys' => []
    ];
    
    if (file_exists($storageFile)) {
        $content = file_get_contents($storageFile);
        $deviceUpdates = json_decode($content, true);
        if (!$deviceUpdates) {
            $deviceUpdates = [];
            $debugInfo['json_error'] = json_last_error_msg();
        } else {
            $debugInfo['raw_keys'] = array_keys($deviceUpdates);
        }
    }
    
    $debug_log[] = 'device-updates.json загружен, ключей: ' . count($deviceUpdates);
    
    // Применяем обновления
    $appliedUpdates = [];
    foreach ($sensors as &$sensor) {
        $deviceId = strval($sensor['device_id'] ?? $sensor['sn'] ?? $sensor['serial_number'] ?? '');
        if (isset($deviceUpdates[$deviceId])) {
            $oldDeviceType = $sensor['device_type'] ?? 'unknown';
            $sensor = array_merge($sensor, $deviceUpdates[$deviceId]);
            if (isset($deviceUpdates[$deviceId]['device_type'])) {
                $sensor['device_type'] = $deviceUpdates[$deviceId]['device_type'];
                $sensor['type'] = $deviceUpdates[$deviceId]['device_type'];
            }
            $appliedUpdates[] = [
                'device_id' => $deviceId,
                'old_device_type' => $oldDeviceType,
                'new_device_type' => $sensor['device_type'] ?? 'unknown'
            ];
        }
    }
    unset($sensor);
    
    $debugInfo['applied_updates'] = $appliedUpdates;
    $debug_log[] = 'Применено обновлений: ' . count($appliedUpdates);
    
    // Формат ответа
    echo json_encode([
        'status' => 200,
        'success' => true,
        'message' => 'Демо-данные датчиков получены успешно',
        'data' => $sensors,
        'user_role' => 'viewer',
        'sensors_count' => count($sensors),
        'source' => 'demo_data',
        'database_available' => false,
        'statistics' => [
            'total' => count($sensors),
            'online' => count(array_filter($sensors, function($s) { return $s['is_connected']; })),
            'offline' => 0,
            'warning' => 0,
            'critical' => 0
        ],
        'timestamp' => date('Y-m-d H:i:s'),
        '_debug' => $debugInfo,
        '_debug_log' => $debug_log,
        '_require_output_length' => strlen($require_output),
        '_require_output_preview' => substr($require_output, 0, 200)
    ], JSON_UNESCAPED_UNICODE);
    exit;
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Ошибка получения демо-данных: ' . $e->getMessage(),
        'debug_log' => $debug_log,
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
