<?php
// Демо-версия API получения данных отчета (работает без базы данных)

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
            'name' => 'Датчик #1',
            'location' => 'Холодильная камера A',
            'temperature' => 4.5,
            'humidity' => 45.2
        ],
        [
            'id' => 2,
            'device_id' => 'TAG-08B-82257481',
            'device_name' => 'Датчик температуры и влажности #2',
            'name' => 'Датчик #2',
            'location' => 'Холодильная камера B',
            'temperature' => 5.2,
            'humidity' => 48.5
        ],
        [
            'id' => 3,
            'device_id' => 'TAG-08B-82257482',
            'device_name' => 'Датчик температуры и влажности #3',
            'name' => 'Датчик #3',
            'location' => 'Складской отсек 1',
            'temperature' => 22.3,
            'humidity' => 55.8
        ],
        [
            'id' => 4,
            'device_id' => 'TAG-08B-82257483',
            'device_name' => 'Датчик температуры и влажности #4',
            'name' => 'Датчик #4',
            'location' => 'Складской отсек 2',
            'temperature' => 23.1,
            'humidity' => 52.3
        ],
        [
            'id' => 5,
            'device_id' => 'TAG-08B-82257484',
            'device_name' => 'Датчик температуры и влажности #5',
            'name' => 'Датчик #5',
            'location' => 'Транспортный отсек',
            'temperature' => 21.8,
            'humidity' => 50.5
        ],
        [
            'id' => 6,
            'device_id' => 'TAG-08B-82257485',
            'device_name' => 'Датчик температуры и влажности #6',
            'name' => 'Датчик #6',
            'location' => 'Зона приемки',
            'temperature' => 20.5,
            'humidity' => 48.9
        ]
    ];
}

try {
    $reportType = isset($_GET['type']) ? $_GET['type'] : 'all';
    $startDate = isset($_GET['start_date']) ? $_GET['start_date'] : null;
    $endDate = isset($_GET['end_date']) ? $_GET['end_date'] : null;
    $sensorId = isset($_GET['sensor_id']) ? $_GET['sensor_id'] : null;
    $zone = isset($_GET['zone']) ? $_GET['zone'] : null;
    
    if (!$startDate || !$endDate) {
        throw new Exception('Не указаны даты начала и окончания периода');
    }
    
    $sensors = getDemoSensors();
    
    // Фильтруем датчики
    $filteredSensors = $sensors;
    if ($sensorId && $sensorId !== 'all') {
        $filteredSensors = array_filter($sensors, function($s) use ($sensorId) {
            return $s['id'] == $sensorId || 
                   $s['device_id'] === $sensorId ||
                   $s['device_id'] === 'SENSOR-00' . $sensorId ||
                   $s['device_id'] === 'SENSOR-0' . $sensorId;
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
    $startTime = strtotime($startDate);
    $endTime = strtotime($endDate);
    $hoursDiff = ceil(($endTime - $startTime) / 3600);
    $pointsCount = min($hoursDiff, 168); // Максимум 168 точек (7 дней по часу)
    
    $reportData = [];
    foreach ($filteredSensors as $sensor) {
        // Создаем уникальный seed для каждого датчика
        $sensorSeed = abs(crc32($sensor['device_id'])) % 10;
        $baseTemp = floatval($sensor['temperature']);
        $baseHum = floatval($sensor['humidity']);
        
        // Амплитуда колебаний зависит от типа датчика
        $tempAmplitude = ($baseTemp < 10) ? 0.8 : 1.5;
        $humAmplitude = ($baseTemp < 10) ? 3 : 5;
        
        for ($i = 0; $i < $pointsCount; $i++) {
            $timestamp = $startTime + ($i * ($endTime - $startTime) / max(1, ($pointsCount - 1)));
            
            // Генерируем температуру с синусоидальными колебаниями + небольшой шум
            $timeFactor = sin(($i * 0.1) + ($sensorSeed * pi() / 5));
            $tempWave = $timeFactor * $tempAmplitude;
            $tempNoise = (mt_rand(-50, 50) / 100);
            $temp = round($baseTemp + $tempWave + $tempNoise, 1);
            
            // Генерируем влажность с синусоидальными колебаниями + небольшой шум
            $humFactor = cos(($i * 0.15) + ($sensorSeed * pi() / 4));
            $humWave = $humFactor * $humAmplitude;
            $humNoise = (mt_rand(-150, 150) / 100);
            $hum = round($baseHum + $humWave + $humNoise, 1);
            
            // Определяем статус на основе пороговых значений для фармацевтического склада
            // Норма: температура 15-25°C, влажность 35-65% (стандартные условия хранения)
            // Предупреждение: температура 10-30°C или 2-35°C, влажность 30-70%
            // Критично: температура <2°C или >35°C, влажность <30% или >70%
            $status = 'Норма';
            if ($temp < 15 || $temp > 25 || $hum < 35 || $hum > 65) {
                if ($temp < 2 || $temp > 35 || $hum < 30 || $hum > 70) {
                    $status = 'Критично';
                } else {
                    $status = 'Предупреждение';
                }
            }
            
            $reportData[] = [
                'Дата и время' => date('d.m.Y H:i:s', $timestamp),
                'Датчик' => $sensor['device_id'],
                'Название' => $sensor['device_name'],
                'Расположение' => $sensor['location'],
                'Температура (°C)' => $temp,
                'Влажность (%)' => $hum,
                'Норма' => $status,
                'timestamp' => date('Y-m-d\TH:i:s\Z', $timestamp)
            ];
        }
    }
    
    echo json_encode([
        'status' => 200,
        'success' => true,
        'message' => 'Данные отчета получены успешно',
        'data' => $reportData,
        'total' => count($reportData),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'status' => 400,
        'success' => false,
        'error' => 'Ошибка: ' . $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}
?>
