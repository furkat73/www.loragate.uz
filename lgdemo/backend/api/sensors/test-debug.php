<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Тест 1: Проверяем, что происходит при require demo-current.php
ob_start();
require_once __DIR__ . '/demo-current.php';
$output = ob_get_clean();

$result = [
    'test' => 'Проверка require demo-current.php',
    'output_buffer_length' => strlen($output),
    'output_buffer_content' => $output,
    'output_is_json' => json_decode($output) !== null,
    'function_exists' => function_exists('getDemoSensors'),
    'script_filename' => $_SERVER['SCRIPT_FILENAME'] ?? 'not set',
    'request_uri' => $_SERVER['REQUEST_URI'] ?? 'not set',
    'php_self' => $_SERVER['PHP_SELF'] ?? 'not set',
];

// Тест 2: Проверяем, что возвращает getDemoSensors
if (function_exists('getDemoSensors')) {
    $sensors = getDemoSensors();
    $result['getDemoSensors_works'] = true;
    $result['sensors_count'] = count($sensors);
    $result['first_sensor_device_type'] = $sensors[0]['device_type'] ?? 'not found';
} else {
    $result['getDemoSensors_works'] = false;
}

// Тест 3: Проверяем device-updates.json
$storageFile = __DIR__ . '/device-updates.json';
$result['device_updates_file_exists'] = file_exists($storageFile);
$result['device_updates_file_readable'] = file_exists($storageFile) ? is_readable($storageFile) : false;
$result['device_updates_file_path'] = $storageFile;

if (file_exists($storageFile)) {
    $content = file_get_contents($storageFile);
    $updates = json_decode($content, true);
    $result['device_updates_json_valid'] = $updates !== null;
    $result['device_updates_keys'] = $updates ? array_keys($updates) : [];
}

echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
