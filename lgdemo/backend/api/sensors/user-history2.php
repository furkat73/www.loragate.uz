<?php
// Демо-версия user-history.php
// Возвращает историю датчиков для пользователя с поддержкой start_date/end_date
// Использует упрощенную логику на основе рабочего тестового файла

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
        
        // Генерируем простые тестовые данные (как в тестовом файле)
        for ($i = 0; $i < $max_records; $i++) {
            $timestamp = $end - ($i * 3600);
            
            // Простая генерация значений без сложных функций
            $base_temp = 4.5;
            $base_humidity = 45.0;
            
            // Добавляем небольшие вариации на основе индекса и device_id
            $device_offset = abs(crc32($dev_id)) % 10;
            $temp_variation = ($i % 10) * 0.1 + ($device_offset / 10);
            $humidity_variation = ($i % 10) * 0.2 + ($device_offset / 5);
            
            $history[] = [
                'id' => $record_id++,
                'device_id' => $dev_id,
                'sensor_id' => $dev_id,
                'temperature' => round($base_temp + $temp_variation, 1),
                'humidity' => round($base_humidity + $humidity_variation, 1),
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
