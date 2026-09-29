<?php
// Демо-версия user-sensors.php - список датчиков пользователя

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

try {
    $user_id = isset($_GET['user_id']) ? intval($_GET['user_id']) : null;
    
    // Определяем функцию getDemoSensors() если её еще нет
    if (!function_exists('getDemoSensors')) {
        function getDemoSensors() {
            $now = date('Y-m-d H:i:s');
            
            return [
                [
                    'id' => 1,
                    'device_id' => 'TAG-08B-82257480',
                    'sensor_id' => 'TAG-08B-82257480',
                    'device_name' => 'Датчик температуры и влажности #1',
                    'name' => 'Датчик #1',
                    'location' => 'Холодильная камера A',
                    'type' => 'combined',
                    'temperature' => 4.5,
                    'humidity' => 45.2,
                    'battery_level' => 85,
                    'battery_voltage' => 3.2,
                    'signal_strength' => -65,
                    'is_connected' => true,
                    'status' => 'active',
                    'last_reading' => $now,
                    'last_update' => $now,
                    'sensor_time' => $now,
                    'sn' => 'TAG-08B-82257480',
                    'created_at' => $now,
                    'timestamp' => $now
                ],
                [
                    'id' => 2,
                    'device_id' => 'TAG-08B-82257481',
                    'sensor_id' => 'TAG-08B-82257481',
                    'device_name' => 'Датчик температуры и влажности #2',
                    'name' => 'Датчик #2',
                    'location' => 'Холодильная камера B',
                    'type' => 'combined',
                    'temperature' => 5.2,
                    'humidity' => 48.5,
                    'battery_level' => 92,
                    'battery_voltage' => 3.4,
                    'signal_strength' => -58,
                    'is_connected' => true,
                    'status' => 'active',
                    'last_reading' => $now,
                    'last_update' => $now,
                    'sensor_time' => $now,
                    'sn' => 'TAG-08B-82257481',
                    'created_at' => $now,
                    'timestamp' => $now
                ],
                [
                    'id' => 3,
                    'device_id' => 'TAG-08B-82257482',
                    'sensor_id' => 'TAG-08B-82257482',
                    'device_name' => 'Датчик температуры и влажности #3',
                    'name' => 'Датчик #3',
                    'location' => 'Складской отсек 1',
                    'type' => 'combined',
                    'temperature' => 22.3,
                    'humidity' => 55.8,
                    'battery_level' => 78,
                    'battery_voltage' => 3.1,
                    'signal_strength' => -72,
                    'is_connected' => true,
                    'status' => 'active',
                    'last_reading' => $now,
                    'last_update' => $now,
                    'sensor_time' => $now,
                    'sn' => 'TAG-08B-82257482',
                    'created_at' => $now,
                    'timestamp' => $now
                ],
                [
                    'id' => 4,
                    'device_id' => 'TAG-08B-82257483',
                    'sensor_id' => 'TAG-08B-82257483',
                    'device_name' => 'Датчик температуры и влажности #4',
                    'name' => 'Датчик #4',
                    'location' => 'Складской отсек 2',
                    'type' => 'combined',
                    'temperature' => 23.1,
                    'humidity' => 52.3,
                    'battery_level' => 88,
                    'battery_voltage' => 3.3,
                    'signal_strength' => -62,
                    'is_connected' => true,
                    'status' => 'active',
                    'last_reading' => $now,
                    'last_update' => $now,
                    'sensor_time' => $now,
                    'sn' => 'TAG-08B-82257483',
                    'created_at' => $now,
                    'timestamp' => $now
                ],
                [
                    'id' => 5,
                    'device_id' => 'TAG-08B-82257484',
                    'sensor_id' => 'TAG-08B-82257484',
                    'device_name' => 'Датчик температуры и влажности #5',
                    'name' => 'Датчик #5',
                    'location' => 'Транспортный отсек',
                    'type' => 'combined',
                    'temperature' => 21.8,
                    'humidity' => 50.5,
                    'battery_level' => 75,
                    'battery_voltage' => 3.0,
                    'signal_strength' => -75,
                    'is_connected' => true,
                    'status' => 'active',
                    'last_reading' => $now,
                    'last_update' => $now,
                    'sensor_time' => $now,
                    'sn' => 'TAG-08B-82257484',
                    'created_at' => $now,
                    'timestamp' => $now
                ],
                [
                    'id' => 6,
                    'device_id' => 'TAG-08B-82257485',
                    'sensor_id' => 'TAG-08B-82257485',
                    'device_name' => 'Датчик температуры и влажности #6',
                    'name' => 'Датчик #6',
                    'location' => 'Зона приемки',
                    'type' => 'combined',
                    'temperature' => 20.5,
                    'humidity' => 48.9,
                    'battery_level' => 90,
                    'battery_voltage' => 3.5,
                    'signal_strength' => -55,
                    'is_connected' => true,
                    'status' => 'active',
                    'last_reading' => $now,
                    'last_update' => $now,
                    'sensor_time' => $now,
                    'sn' => 'TAG-08B-82257485',
                    'created_at' => $now,
                    'timestamp' => $now
                ]
            ];
        }
    }
    
    // Получаем демо-датчики
    $sensors = getDemoSensors();
    
    echo json_encode([
        'status' => 200,
        'success' => true,
        'message' => 'Датчики пользователя получены успешно',
        'data' => [
            'sensors' => $sensors
        ],
        'user_id' => $user_id,
        'count' => count($sensors),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'success' => false,
        'error' => 'Ошибка получения датчиков: ' . $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}
?>
