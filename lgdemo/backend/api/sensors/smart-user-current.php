<?php
// MARKER_TEST_20260121_1500 - Это новая версия файла!
// Демо-версия smart-user-current.php
// Работает без базы данных, возвращает демо-данные датчиков в формате smart API

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Подключаем функцию получения демо-датчиков
// Используем буферизацию вывода, чтобы предотвратить вывод JSON из demo-current.php
ob_start();
require_once __DIR__ . '/demo-current.php';
ob_end_clean();

try {
    // Получаем демо-датчики
    $sensors = getDemoSensors();
    
    // Загружаем обновленные данные устройств, если они есть
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
        // Преобразуем числовые ключи в строки для единообразия
        $normalizedUpdates = [];
        foreach ($deviceUpdates as $key => $value) {
            if (!is_array($value)) {
                continue; // Пропускаем некорректные записи
            }
            // Используем device_id из обновления как основной ключ, если он есть
            $normalizedKey = strval($value['device_id'] ?? $value['serial_number'] ?? $value['sn'] ?? $key);
            $normalizedUpdates[$normalizedKey] = $value;
            // Также добавляем по другим возможным ключам для быстрого поиска
            if (isset($value['serial_number'])) {
                $normalizedUpdates[strval($value['serial_number'])] = $value;
            }
            if (isset($value['sn'])) {
                $normalizedUpdates[strval($value['sn'])] = $value;
            }
            if (isset($value['id'])) {
                $normalizedUpdates[strval($value['id'])] = $value;
            }
        }
        $deviceUpdates = $normalizedUpdates;
        $debugInfo['normalized_keys'] = array_keys($deviceUpdates);
    }
    
    // Применяем обновления к датчикам
    $appliedUpdates = [];
    foreach ($sensors as &$sensor) {
        // Пробуем найти обновления по разным возможным ключам
        $deviceId = strval($sensor['device_id'] ?? $sensor['sn'] ?? $sensor['serial_number'] ?? '');
        $update = null;
        $foundKey = null;
        
        // Ищем обновления по device_id, serial_number, sn или id (все как строки)
        if ($deviceId && isset($deviceUpdates[$deviceId])) {
            $update = $deviceUpdates[$deviceId];
            $foundKey = $deviceId;
        } elseif (isset($sensor['serial_number']) && isset($deviceUpdates[strval($sensor['serial_number'])])) {
            $update = $deviceUpdates[strval($sensor['serial_number'])];
            $foundKey = strval($sensor['serial_number']);
        } elseif (isset($sensor['sn']) && isset($deviceUpdates[strval($sensor['sn'])])) {
            $update = $deviceUpdates[strval($sensor['sn'])];
            $foundKey = strval($sensor['sn']);
        } elseif (isset($sensor['id']) && isset($deviceUpdates[strval($sensor['id'])])) {
            $update = $deviceUpdates[strval($sensor['id'])];
            $foundKey = strval($sensor['id']);
        }
        
        if ($update) {
            $oldDeviceType = $sensor['device_type'] ?? 'unknown';
            // Объединяем базовые данные с обновлениями (обновления имеют приоритет)
            // Важно: сначала базовые данные, потом обновления, чтобы обновления перезаписали базовые
            $sensor = array_merge($sensor, $update);
            
            // Принудительно устанавливаем критические поля из обновлений
            if (isset($update['device_type'])) {
                $sensor['device_type'] = $update['device_type'];
                $sensor['type'] = $update['device_type']; // Синхронизируем type с device_type
            }
            if (isset($update['name'])) {
                $sensor['name'] = $update['name'];
                $sensor['device_name'] = $update['name'];
            }
            if (isset($update['location'])) {
                $sensor['location'] = $update['location'];
            }
            // Убеждаемся, что serial_number и sn синхронизированы
            if (isset($update['serial_number'])) {
                $sensor['serial_number'] = $update['serial_number'];
                $sensor['sn'] = $update['serial_number'];
            }
            // Убеждаемся, что device_id установлен правильно
            if (isset($update['device_id'])) {
                $sensor['device_id'] = $update['device_id'];
            }
            
            $appliedUpdates[] = [
                'device_id' => $deviceId,
                'found_key' => $foundKey,
                'old_device_type' => $oldDeviceType,
                'new_device_type' => $sensor['device_type'] ?? 'unknown'
            ];
        }
    }
    unset($sensor); // Сбрасываем ссылку
    
    $debugInfo['applied_updates'] = $appliedUpdates;
    
    // Подсчитываем статистику
    $total_sensors = count($sensors);
    $online_sensors = count(array_filter($sensors, function($s) { return $s['is_connected']; }));
    
    // Формат ответа для smart API (соответствует формату из demo-current.php)
    echo json_encode([
        'status' => 200,
        'success' => true,
        'message' => 'Демо-данные датчиков получены успешно',
        'data' => $sensors,
        'user_role' => 'viewer',
        'sensors_count' => $total_sensors,
        'source' => 'demo_data',
        'database_available' => false,
        'statistics' => [
            'total' => $total_sensors,
            'online' => $online_sensors,
            'offline' => $total_sensors - $online_sensors,
            'warning' => 0,
            'critical' => 0
        ],
        'timestamp' => date('Y-m-d H:i:s'),
        '_debug' => $debugInfo // Временная отладочная информация
    ], JSON_UNESCAPED_UNICODE);
    exit;
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Ошибка получения демо-данных: ' . $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
