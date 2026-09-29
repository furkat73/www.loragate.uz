<?php
// Демо-версия API истории датчиков (работает без базы данных)
// Поддерживает параметры: device_id, hours, start_date, end_date, user_id, timezone

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

try {
    $device_id = isset($_GET['device_id']) ? $_GET['device_id'] : null;
    $hours = isset($_GET['hours']) ? intval($_GET['hours']) : 24;
    $user_id = isset($_GET['user_id']) ? intval($_GET['user_id']) : null;
    $start_date = isset($_GET['start_date']) ? $_GET['start_date'] : null;
    $end_date = isset($_GET['end_date']) ? $_GET['end_date'] : null;
    
    // Если указаны start_date и end_date, используем их
    // Иначе используем hours для расчета периода
    if ($start_date && $end_date) {
        $start = strtotime($start_date);
        $end = strtotime($end_date . ' 23:59:59');
    } else {
        // Используем hours для расчета периода (по умолчанию 24 часа)
        $end = time();
        $start = $end - ($hours * 3600);
    }
    
    // Если device_id не указан, генерируем данные для всех демо-датчиков
    $demo_device_ids = [
        'TAG-08B-82257480',
        'TAG-08B-82257481',
        'TAG-08B-82257482',
        'TAG-08B-82257483',
        'TAG-08B-82257484',
        'TAG-08B-82257485'
    ];
    
    $device_ids_to_process = $device_id ? [$device_id] : $demo_device_ids;
    
    $history = [];
    
    // Генерируем данные для каждого устройства
    foreach ($device_ids_to_process as $dev_id) {
        // Генерируем данные каждый час
        $current = $start;
        $device_history = [];
        
        // Определяем базовые значения для каждого демонстрационного датчика
        $base_temp = 4.5;
        $base_humidity = 45.0;
        
        if ($dev_id === 'TAG-08B-82257480') { $base_temp = 4.5; $base_humidity = 45.2; }
        elseif ($dev_id === 'TAG-08B-82257481') { $base_temp = 5.2; $base_humidity = 48.5; }
        elseif ($dev_id === 'TAG-08B-82257482') { $base_temp = 22.3; $base_humidity = 55.8; }
        elseif ($dev_id === 'TAG-08B-82257483') { $base_temp = 23.1; $base_humidity = 52.3; }
        elseif ($dev_id === 'TAG-08B-82257484') { $base_temp = 21.8; $base_humidity = 50.5; }
        elseif ($dev_id === 'TAG-08B-82257485') { $base_temp = 20.5; $base_humidity = 48.9; }
        
        while ($current <= $end) {
            // Генерируем реалистичные значения с небольшими вариациями для каждого устройства
            $device_hash = abs(crc32($dev_id)) % 10;
            
            // Вариации во времени (синусоида для реалистичности)
            $time_factor = sin($current / 14400); // Цикл 4 часа
            $temp_variation = $time_factor * 0.5 + ($device_hash * 0.1);
            $humidity_variation = cos($current / 14400) * 2.0 + ($device_hash * 0.5);
            
            $device_history[] = [
                'id' => count($history) + count($device_history) + 1,
                'device_id' => $dev_id,
                'sensor_id' => $dev_id,
                'temperature' => round($base_temp + $temp_variation, 1),
                'humidity' => round($base_humidity + $humidity_variation, 1),
                'timestamp' => date('Y-m-d H:i:s', $current),
                'time' => date('H:i', $current),
                'date' => date('Y-m-d', $current)
            ];
            
            $current += 3600; // +1 час
        }
        
        $history = array_merge($history, $device_history);
    }
    
    // Сортируем по timestamp
    usort($history, function($a, $b) {
        return strtotime($a['timestamp']) - strtotime($b['timestamp']);
    });
    
    echo json_encode([
        'status' => 200,
        'success' => true,
        'message' => 'Демо-история получена успешно',
        'data' => $history,
        'device_id' => $device_id,
        'user_id' => $user_id,
        'hours' => $hours,
        'start_date' => date('Y-m-d', $start),
        'end_date' => date('Y-m-d', $end),
        'count' => count($history),
        'timestamp' => date('Y-m-d H:i:s'),
        'source' => 'demo_data'
    ], JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'success' => false,
        'error' => 'Ошибка получения демо-истории: ' . $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}
?>
