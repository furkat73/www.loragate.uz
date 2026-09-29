<?php
// API истории датчиков
// Возвращает историю показаний датчиков с уникальными значениями для каждого датчика
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
    
    // Валидация параметров
    if ($hours <= 0) {
        $hours = 24;
    }
    if ($hours > 720) { // Максимум 30 дней
        $hours = 720;
    }
    
    // Если указаны start_date и end_date, используем их
    // Иначе используем hours для расчета периода
    if ($start_date && $end_date) {
        $start = strtotime($start_date);
        $end = strtotime($end_date . ' 23:59:59');
        
        // Проверка валидности дат
        if ($start === false || $end === false) {
            throw new Exception('Неверный формат даты');
        }
        
        if ($start > $end) {
            throw new Exception('Начальная дата больше конечной');
        }
        
        // Рассчитываем количество часов для генерации данных
        $hours = ceil(($end - $start) / 3600);
        if ($hours > 720) {
            $hours = 720;
        }
        $now = $end;
    } else {
        // Используем hours для расчета периода (по умолчанию 24 часа)
        $now = time();
        $start = $now - ($hours * 3600);
        $end = $now;
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
    $record_id = 1;
    
    // Генерируем данные для каждого устройства
    foreach ($device_ids_to_process as $dev_id) {
        // Ограничиваем количество записей
        $max_records = min($hours, 720);
        
        // Определяем базовые значения для каждого демонстрационного датчика
        // ВАЖНО: Каждый датчик имеет свои уникальные базовые значения!
        $base_temp = 22.0; // Значение по умолчанию
        $base_humidity = 50.0; // Значение по умолчанию
        
        if ($dev_id === 'TAG-08B-82257480') { 
            $base_temp = 4.5; 
            $base_humidity = 45.2; 
        }
        elseif ($dev_id === 'TAG-08B-82257481') { 
            $base_temp = 5.2; 
            $base_humidity = 48.5; 
        }
        elseif ($dev_id === 'TAG-08B-82257482') { 
            $base_temp = 22.3; 
            $base_humidity = 55.8; 
        }
        elseif ($dev_id === 'TAG-08B-82257483') { 
            $base_temp = 23.1; 
            $base_humidity = 52.3; 
        }
        elseif ($dev_id === 'TAG-08B-82257484') { 
            $base_temp = 21.8; 
            $base_humidity = 50.5; 
        }
        elseif ($dev_id === 'TAG-08B-82257485') { 
            $base_temp = 20.5; 
            $base_humidity = 48.9; 
        }
        
        // Логируем базовые значения для отладки
        error_log("📊 История для $dev_id: baseTemp={$base_temp}°C, baseHum={$base_humidity}%");
        
        // Генерируем данные с уникальными вариациями для каждого датчика
        for ($i = 0; $i < $max_records; $i++) {
            $timestamp = $end - ($i * 3600);
            
            // Создаем уникальный seed для каждого датчика на основе device_id
            $device_hash = 0;
            if (function_exists('crc32')) {
                $device_hash = abs(crc32($dev_id)) % 10;
            } else {
                $device_hash = abs(ord($dev_id[0]) + ord($dev_id[strlen($dev_id)-1])) % 10;
            }
            
            // Вариации во времени (синусоида для реалистичности)
            // Используем разные параметры для каждого датчика
            $tempFrequency = 0.1 + ($device_hash % 10) / 100;
            $humFrequency = 0.15 + ($device_hash % 15) / 100;
            $tempPhase = ($device_hash % 360) * M_PI / 180;
            $humPhase = (($device_hash * 2) % 360) * M_PI / 180;
            
            $time_factor = sin($i * $tempFrequency + $tempPhase);
            $hum_factor = cos($i * $humFrequency + $humPhase);
            
            // Амплитуда колебаний зависит от типа датчика
            $tempAmplitude = ($base_temp < 10) ? 0.8 : 1.5;
            $humAmplitude = ($base_temp < 10) ? 3 : 5;
            
            $temp_variation = $time_factor * $tempAmplitude;
            $humidity_variation = $hum_factor * $humAmplitude;
            
            // Добавляем небольшой шум
            $temp_noise = (mt_rand(-50, 50) / 100);
            $hum_noise = (mt_rand(-150, 150) / 100);
            
            $history[] = [
                'id' => $record_id++,
                'device_id' => $dev_id,
                'sensor_id' => $dev_id,
                'temperature' => round($base_temp + $temp_variation + $temp_noise, 1),
                'humidity' => round($base_humidity + $humidity_variation + $hum_noise, 1),
                'timestamp' => date('Y-m-d H:i:s', $timestamp),
                'time' => date('H:i', $timestamp),
                'date' => date('Y-m-d', $timestamp)
            ];
        }
    }
    
    // Сортируем по timestamp (от старых к новым)
    usort($history, function($a, $b) {
        return strtotime($a['timestamp']) - strtotime($b['timestamp']);
    });
    
    echo json_encode([
        'status' => 200,
        'success' => true,
        'message' => 'История получена успешно',
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
        'error' => 'Ошибка получения истории: ' . $e->getMessage(),
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
