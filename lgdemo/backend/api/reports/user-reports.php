<?php
// Демо-версия API получения отчетов пользователя (работает без базы данных)

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
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
            'location' => 'Холодильная камера A'
        ],
        [
            'id' => 2,
            'device_id' => 'TAG-08B-82257481',
            'device_name' => 'Датчик температуры и влажности #2',
            'location' => 'Холодильная камера B'
        ],
        [
            'id' => 3,
            'device_id' => 'TAG-08B-82257482',
            'device_name' => 'Датчик температуры и влажности #3',
            'location' => 'Складской отсек 1'
        ],
        [
            'id' => 4,
            'device_id' => 'TAG-08B-82257483',
            'device_name' => 'Датчик температуры и влажности #4',
            'location' => 'Складской отсек 2'
        ],
        [
            'id' => 5,
            'device_id' => 'TAG-08B-82257484',
            'device_name' => 'Датчик температуры и влажности #5',
            'location' => 'Транспортный отсек'
        ],
        [
            'id' => 6,
            'device_id' => 'TAG-08B-82257485',
            'device_name' => 'Датчик температуры и влажности #6',
            'location' => 'Зона приемки'
        ]
    ];
}

try {
    $userId = isset($_GET['user_id']) ? intval($_GET['user_id']) : 1;
    $startDate = isset($_GET['start_date']) ? $_GET['start_date'] : null;
    $endDate = isset($_GET['end_date']) ? $_GET['end_date'] : null;
    
    $sensors = getDemoSensors();
    
    // Генерируем демо-отчеты для каждого датчика
    $reportData = [];
    $sensorsToShow = array_slice($sensors, 0, 3);
    foreach ($sensorsToShow as $index => $sensor) {
        $reportData[] = [
            'sensor_id' => $sensor['device_id'],
            'last_update' => date('Y-m-d\TH:i:s\Z', time() - ($index * 24 * 60 * 60))
        ];
    }
    
    echo json_encode([
        'status' => 200,
        'message' => 'Отчеты пользователя получены успешно',
        'data' => [
            'access_level' => 'group',
            'user_group' => [
                'group_name' => 'Демонстрационная группа',
                'group_id' => 1
            ],
            'available_sensors' => array_map(function($s) {
                return $s['device_id'];
            }, $sensors),
            'report_data' => $reportData
        ],
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'error' => 'Ошибка: ' . $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}
?>
