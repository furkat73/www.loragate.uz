<?php
// Демо-версия update-device.php
// Обновление параметров устройства в демо-режиме

// Включаем буферизацию вывода с самого начала, чтобы перехватить любые случайные выводы
ob_start();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    ob_end_clean();
    exit(0);
}

// Подключаем функцию получения демо-датчиков
// Используем буферизацию вывода, чтобы предотвратить вывод JSON из demo-current.php
ob_start();
require_once __DIR__ . '/demo-current.php';
ob_end_clean();

// Файл для хранения обновленных данных устройств
$storageFile = __DIR__ . '/device-updates.json';

// Функция для загрузки обновленных данных из файла
function loadDeviceUpdates($storageFile) {
    if (file_exists($storageFile)) {
        $content = file_get_contents($storageFile);
        $data = json_decode($content, true);
        return $data ? $data : [];
    }
    return [];
}

// Функция для сохранения обновленных данных в файл
function saveDeviceUpdates($storageFile, $updates) {
    // Убеждаемся, что директория существует и доступна для записи
    $dir = dirname($storageFile);
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
    // Сохраняем данные в файл
    $result = @file_put_contents($storageFile, json_encode($updates, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
    // Если не удалось сохранить, пробуем создать файл с правами на запись
    if ($result === false) {
        @chmod($storageFile, 0666);
        $result = @file_put_contents($storageFile, json_encode($updates, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
    }
    return $result !== false;
}

try {
    // Получаем данные из тела запроса
    $input = file_get_contents('php://input');
    $deviceData = json_decode($input, true);
    
    if (!$deviceData) {
        // Пробуем получить из POST, если JSON не пришел
        $deviceData = $_POST;
    }
    
    // Проверяем наличие обязательных полей
    if (empty($deviceData['id']) && empty($deviceData['serial_number']) && empty($deviceData['device_id'])) {
        http_response_code(400);
        echo json_encode([
            'status' => 400,
            'success' => false,
            'error' => 'Не указан ID устройства (id, serial_number или device_id)',
            'timestamp' => date('Y-m-d H:i:s')
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }
    
    // Определяем идентификатор устройства (приоритет: device_id > serial_number > id)
    // Всегда используем строку для единообразия ключей
    $deviceId = strval($deviceData['device_id'] ?? $deviceData['serial_number'] ?? $deviceData['id']);
    
    // Загружаем базовые демо-датчики
    $baseSensors = getDemoSensors();
    
    // Загружаем обновленные данные из файла
    $deviceUpdates = loadDeviceUpdates($storageFile);
    
    // Находим базовое устройство
    $baseSensor = null;
    foreach ($baseSensors as $sensor) {
        if ($sensor['device_id'] === $deviceId || 
            $sensor['id'] == $deviceId || 
            ($sensor['sn'] ?? '') === $deviceId ||
            ($sensor['serial_number'] ?? '') === $deviceId) {
            $baseSensor = $sensor;
            break;
        }
    }
    
    // Если устройство не найдено в базовых данных, создаем новое
    if (!$baseSensor) {
        $baseSensor = [
            'id' => is_numeric($deviceId) ? (int)$deviceId : 0,
            'device_id' => $deviceId,
            'device_name' => $deviceData['name'] ?? 'Новое устройство',
            'name' => $deviceData['name'] ?? 'Новое устройство',
            'location' => $deviceData['location'] ?? '',
            'type' => $deviceData['device_type'] ?? 'combined',
            'temperature' => $deviceData['temperature'] ?? 20,
            'humidity' => $deviceData['humidity'] ?? 50,
            'battery_level' => $deviceData['battery_level'] ?? 100,
            'status' => $deviceData['status'] ?? 'active',
            'is_connected' => true,
            'sn' => $deviceId,
            'serial_number' => $deviceId,
            'created_at' => date('Y-m-d H:i:s'),
            'last_update' => date('Y-m-d H:i:s'),
            'timestamp' => date('Y-m-d H:i:s')
        ];
    }
    
    // Получаем существующие обновления для этого устройства
    // Ищем по разным возможным ключам
    $existingUpdate = [];
    if (isset($deviceUpdates[$deviceId])) {
        $existingUpdate = $deviceUpdates[$deviceId];
    } elseif (isset($deviceData['device_id']) && isset($deviceUpdates[$deviceData['device_id']])) {
        $existingUpdate = $deviceUpdates[$deviceData['device_id']];
    } elseif (isset($deviceData['serial_number']) && isset($deviceUpdates[$deviceData['serial_number']])) {
        $existingUpdate = $deviceUpdates[$deviceData['serial_number']];
    }
    
    // Объединяем базовые данные с существующими обновлениями и новыми данными
    // Важно: сначала базовые, потом существующие обновления, потом новые данные (новые имеют приоритет)
    $updatedSensor = array_merge($baseSensor, $existingUpdate, $deviceData);
    
    // Обновляем обязательные поля
    $updatedSensor['id'] = $deviceData['id'] ?? $baseSensor['id'] ?? (is_numeric($deviceId) ? (int)$deviceId : 0);
    $updatedSensor['device_id'] = $deviceData['device_id'] ?? $deviceData['serial_number'] ?? $baseSensor['device_id'] ?? $deviceId;
    $updatedSensor['serial_number'] = $deviceData['serial_number'] ?? $baseSensor['serial_number'] ?? $deviceId;
    $updatedSensor['sn'] = $updatedSensor['serial_number'];
    $updatedSensor['device_name'] = $deviceData['name'] ?? $deviceData['device_name'] ?? $baseSensor['device_name'] ?? 'Датчик ' . $deviceId;
    $updatedSensor['name'] = $deviceData['name'] ?? $updatedSensor['device_name'];
    $updatedSensor['device_type'] = $deviceData['device_type'] ?? $baseSensor['device_type'] ?? 'room_temperature';
    $updatedSensor['type'] = $updatedSensor['device_type'];
    $updatedSensor['location'] = $deviceData['location'] ?? $baseSensor['location'] ?? '';
    $updatedSensor['status'] = $deviceData['status'] ?? $baseSensor['status'] ?? 'active';
    $updatedSensor['is_connected'] = $deviceData['is_connected'] ?? $baseSensor['is_connected'] ?? true;
    $updatedSensor['battery_level'] = $deviceData['battery_level'] ?? $baseSensor['battery_level'] ?? 100;
    
    // Сохраняем температуру и влажность, если они не переданы, используем базовые значения
    if (!isset($deviceData['temperature']) && isset($baseSensor['temperature'])) {
        $updatedSensor['temperature'] = $baseSensor['temperature'];
    }
    if (!isset($deviceData['humidity']) && isset($baseSensor['humidity'])) {
        $updatedSensor['humidity'] = $baseSensor['humidity'];
    }
    
    // Обновляем пороговые значения, если они переданы
    if (isset($deviceData['temperature_min'])) {
        $updatedSensor['temperature_min'] = $deviceData['temperature_min'];
    }
    if (isset($deviceData['temperature_max'])) {
        $updatedSensor['temperature_max'] = $deviceData['temperature_max'];
    }
    if (isset($deviceData['humidity_min'])) {
        $updatedSensor['humidity_min'] = $deviceData['humidity_min'];
    }
    if (isset($deviceData['humidity_max'])) {
        $updatedSensor['humidity_max'] = $deviceData['humidity_max'];
    }
    
    // Обновляем другие поля
    if (isset($deviceData['description'])) {
        $updatedSensor['description'] = $deviceData['description'];
    }
    if (isset($deviceData['is_wireless'])) {
        $updatedSensor['is_wireless'] = $deviceData['is_wireless'];
    }
    if (isset($deviceData['availability_check_interval_minutes'])) {
        $updatedSensor['availability_check_interval_minutes'] = $deviceData['availability_check_interval_minutes'];
    }
    if (isset($deviceData['verification_expiration_date'])) {
        $updatedSensor['verification_expiration_date'] = $deviceData['verification_expiration_date'];
    }
    
    // Обновляем временные метки
    $now = date('Y-m-d H:i:s');
    $updatedSensor['updated_at'] = $now;
    $updatedSensor['last_update'] = $now;
    $updatedSensor['timestamp'] = $now;
    
    // Сохраняем обновления в файл
    // Используем device_id из обновленных данных как ключ для единообразия
    $storageKey = strval($updatedSensor['device_id'] ?? $updatedSensor['serial_number'] ?? $updatedSensor['sn'] ?? $deviceId);
    
    // Удаляем старые записи с другими ключами для этого устройства
    $keysToRemove = [];
    foreach ($deviceUpdates as $key => $value) {
        if (is_array($value)) {
            $valueDeviceId = strval($value['device_id'] ?? $value['serial_number'] ?? $value['sn'] ?? '');
            if ($valueDeviceId === $storageKey || 
                (isset($value['device_id']) && strval($value['device_id']) === $storageKey) ||
                (isset($value['serial_number']) && strval($value['serial_number']) === $storageKey) ||
                (isset($value['sn']) && strval($value['sn']) === $storageKey)) {
                if ($key !== $storageKey) {
                    $keysToRemove[] = $key;
                }
            }
        }
    }
    foreach ($keysToRemove as $key) {
        unset($deviceUpdates[$key]);
    }
    
    // Сохраняем обновление с правильным ключом
    $deviceUpdates[$storageKey] = $updatedSensor;
    saveDeviceUpdates($storageFile, $deviceUpdates);
    
    // Возвращаем успешный ответ
    echo json_encode([
        'status' => 200,
        'success' => true,
        'message' => 'Устройство успешно обновлено',
        'data' => $updatedSensor,
        'timestamp' => $now
    ], JSON_UNESCAPED_UNICODE);
    exit;
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'success' => false,
        'error' => 'Ошибка обновления устройства: ' . $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
