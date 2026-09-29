<?php
// Демо-версия API создания отчета с учетом групп (работает без базы данных)

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Функция для получения демо-датчиков
function getDemoSensors() {
    $now = date('Y-m-d H:i:s');
    
    return [
        [
            'id' => 1,
            'device_id' => 'TAG-08B-82257480',
            'device_name' => 'Датчик температуры и влажности #1',
            'name' => 'Датчик #1',
            'location' => 'Холодильная камера A',
            'type' => 'combined',
            'temperature' => 4.5,
            'humidity' => 45.2,
            'battery_level' => 85,
            'is_connected' => true,
            'status' => 'active',
            'last_update' => $now
        ],
        [
            'id' => 2,
            'device_id' => 'TAG-08B-82257481',
            'device_name' => 'Датчик температуры и влажности #2',
            'name' => 'Датчик #2',
            'location' => 'Холодильная камера B',
            'type' => 'combined',
            'temperature' => 5.2,
            'humidity' => 48.5,
            'battery_level' => 92,
            'is_connected' => true,
            'status' => 'active',
            'last_update' => $now
        ],
        [
            'id' => 3,
            'device_id' => 'TAG-08B-82257482',
            'device_name' => 'Датчик температуры и влажности #3',
            'name' => 'Датчик #3',
            'location' => 'Складской отсек 1',
            'type' => 'combined',
            'temperature' => 22.3,
            'humidity' => 55.8,
            'battery_level' => 78,
            'is_connected' => true,
            'status' => 'active',
            'last_update' => $now
        ],
        [
            'id' => 4,
            'device_id' => 'TAG-08B-82257483',
            'device_name' => 'Датчик температуры и влажности #4',
            'name' => 'Датчик #4',
            'location' => 'Складской отсек 2',
            'type' => 'combined',
            'temperature' => 23.1,
            'humidity' => 52.3,
            'battery_level' => 88,
            'is_connected' => true,
            'status' => 'active',
            'last_update' => $now
        ],
        [
            'id' => 5,
            'device_id' => 'TAG-08B-82257484',
            'device_name' => 'Датчик температуры и влажности #5',
            'name' => 'Датчик #5',
            'location' => 'Транспортный отсек',
            'type' => 'combined',
            'temperature' => 21.8,
            'humidity' => 50.5,
            'battery_level' => 75,
            'is_connected' => true,
            'status' => 'active',
            'last_update' => $now
        ],
        [
            'id' => 6,
            'device_id' => 'TAG-08B-82257485',
            'device_name' => 'Датчик температуры и влажности #6',
            'name' => 'Датчик #6',
            'location' => 'Зона приемки',
            'type' => 'combined',
            'temperature' => 20.5,
            'humidity' => 48.9,
            'battery_level' => 90,
            'is_connected' => true,
            'status' => 'active',
            'last_update' => $now
        ]
    ];
}

try {
    // Получаем данные из POST запроса
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    if (!$data) {
        throw new Exception('Неверный формат данных');
    }
    
    $user_id = isset($data['user_id']) ? intval($data['user_id']) : 1;
    $report_type = isset($data['report_type']) ? $data['report_type'] : 'all';
    $start_date = isset($data['start_date']) ? $data['start_date'] : null;
    $end_date = isset($data['end_date']) ? $data['end_date'] : null;
    $sensor_id = isset($data['sensor_id']) ? $data['sensor_id'] : null;
    $zone = isset($data['zone']) ? $data['zone'] : null;
    
    if (!$start_date || !$end_date) {
        throw new Exception('Не указаны даты начала и окончания периода');
    }
    
    $sensors = getDemoSensors();
    
    // Фильтруем датчики по выбранным критериям
    $filteredSensors = $sensors;
    if ($sensor_id && $sensor_id !== 'all') {
        $filteredSensors = array_filter($sensors, function($s) use ($sensor_id) {
            return $s['id'] == $sensor_id || 
                   $s['device_id'] === $sensor_id ||
                   $s['device_id'] === 'SENSOR-00' . $sensor_id ||
                   $s['device_id'] === 'SENSOR-0' . $sensor_id;
        });
        $filteredSensors = array_values($filteredSensors);
    }
    if ($zone && $zone !== 'all') {
        $filteredSensors = array_filter($filteredSensors, function($s) use ($zone) {
            return $s['location'] === $zone;
        });
        $filteredSensors = array_values($filteredSensors);
    }
    
    // Генерируем демо-данные для отчета
    $startTime = strtotime($start_date);
    $endTime = strtotime($end_date);
    $hoursDiff = ceil(($endTime - $startTime) / 3600);
    $recordsCount = max(10, min($hoursDiff * count($filteredSensors), 1000));
    
    echo json_encode([
        'status' => 200,
        'message' => 'Отчет успешно создан',
        'data' => [
            'report_id' => time(),
            'report_type' => $report_type ?: 'all',
            'user_group' => [
                'group_name' => 'Демонстрационная группа',
                'group_id' => 1
            ],
            'total_records' => $recordsCount,
            'sensors_count' => count($filteredSensors),
            'period' => [
                'start_date' => $start_date,
                'end_date' => $end_date
            ]
        ],
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'status' => 400,
        'error' => $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}
?>
