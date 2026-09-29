<?php
// Скрипт для заполнения таблицы sensor_data тестовыми данными
// Использование: откройте этот файл в браузере или запустите через CLI: php fill-sensor-data.php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

// Настройки подключения к базе данных
// ИЗМЕНИТЕ ЭТИ ЗНАЧЕНИЯ НА ВАШИ РЕАЛЬНЫЕ ПАРАМЕТРЫ ПОДКЛЮЧЕНИЯ
$db_host = 'localhost';
$db_name = 'lora_gate';
$db_user = 'root'; // ИЗМЕНИТЕ на ваше имя пользователя
$db_pass = ''; // ИЗМЕНИТЕ на ваш пароль
$db_charset = 'utf8mb4';

try {
    // Подключение к базе данных
    $dsn = "mysql:host={$db_host};dbname={$db_name};charset={$db_charset}";
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];
    
    $pdo = new PDO($dsn, $db_user, $db_pass, $options);
    
    // Проверка существования таблицы sensor_data
    $checkTable = $pdo->query("SHOW TABLES LIKE 'sensor_data'");
    if ($checkTable->rowCount() == 0) {
        // Создание таблицы, если она не существует
        $createTableSQL = "
        CREATE TABLE IF NOT EXISTS `sensor_data` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `device_id` varchar(50) NOT NULL,
            `sensor_id` varchar(50) DEFAULT NULL,
            `temperature` decimal(5,2) DEFAULT NULL,
            `humidity` decimal(5,2) DEFAULT NULL,
            `battery_level` int(11) DEFAULT NULL,
            `battery_voltage` decimal(4,2) DEFAULT NULL,
            `signal_strength` int(11) DEFAULT NULL,
            `timestamp` datetime NOT NULL,
            `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`),
            KEY `idx_device_id` (`device_id`),
            KEY `idx_timestamp` (`timestamp`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ";
        $pdo->exec($createTableSQL);
    }
    
    // Проверка, есть ли уже данные в таблице
    $countQuery = $pdo->query("SELECT COUNT(*) as count FROM sensor_data");
    $countResult = $countQuery->fetch();
    $existingCount = $countResult['count'];
    
    if ($existingCount > 0) {
        echo json_encode([
            'status' => 200,
            'success' => false,
            'message' => 'В таблице sensor_data уже есть данные (' . $existingCount . ' записей)',
            'existing_count' => $existingCount,
            'action' => 'skipped'
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }
    
    // Генерация тестовых данных
    $device_ids = [
        'TAG-08B-82257480',
        'TAG-08B-82257481',
        'TAG-08B-82257482',
        'TAG-08B-82257483',
        'TAG-08B-82257484',
        'TAG-08B-82257485'
    ];
    
    // Генерируем данные за последние 7 дней (по одному значению каждый час)
    $hours = 24 * 7; // 7 дней
    $now = time();
    
    $insertSQL = "INSERT INTO sensor_data 
        (device_id, sensor_id, temperature, humidity, battery_level, battery_voltage, signal_strength, timestamp) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = $pdo->prepare($insertSQL);
    
    $totalInserted = 0;
    
    foreach ($device_ids as $device_id) {
        // Базовые значения для каждого устройства (разные для разнообразия)
        $device_hash = abs(crc32($device_id)) % 10;
        $base_temp = 4.5 + ($device_hash / 2);
        $base_humidity = 45.0 + ($device_hash * 1.5);
        $base_battery = 85 - ($device_hash * 2);
        
        for ($i = 0; $i < $hours; $i++) {
            $timestamp = $now - ($i * 3600); // Каждый час назад
            
            // Вариация значений для реалистичности
            $temp_variation = ($i % 10) * 0.1 + ($device_hash / 10);
            $humidity_variation = ($i % 10) * 0.2 + ($device_hash / 5);
            $battery_variation = ($i % 24) * 0.1; // Суточные колебания
            
            $temperature = round($base_temp + $temp_variation + sin($i / 10) * 2, 1);
            $humidity = round($base_humidity + $humidity_variation + cos($i / 12) * 3, 1);
            $battery_level = max(20, min(100, round($base_battery - ($i / 100) + $battery_variation, 0)));
            $battery_voltage = round(3.0 + ($battery_level / 50), 2);
            $signal_strength = -65 - ($device_hash * 2) + (($i % 20) - 10);
            
            $stmt->execute([
                $device_id,
                $device_id,
                $temperature,
                $humidity,
                $battery_level,
                $battery_voltage,
                $signal_strength,
                date('Y-m-d H:i:s', $timestamp)
            ]);
            
            $totalInserted++;
        }
    }
    
    echo json_encode([
        'status' => 200,
        'success' => true,
        'message' => 'Таблица sensor_data успешно заполнена тестовыми данными',
        'records_inserted' => $totalInserted,
        'devices' => count($device_ids),
        'hours_per_device' => $hours,
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'success' => false,
        'error' => 'Ошибка базы данных: ' . $e->getMessage(),
        'code' => $e->getCode()
    ], JSON_UNESCAPED_UNICODE);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'success' => false,
        'error' => 'Ошибка: ' . $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}
?>
