<?php
/**
 * Тестовый файл для диагностики
 * Проверяет, работает ли PHP и можно ли записывать файлы
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$tests = [];

// Тест 1: PHP работает
$tests['php_works'] = true;
$tests['php_version'] = phpversion();

// Тест 2: Можно ли создать директорию
$dataDir = __DIR__ . '/../../data';
$tests['data_dir_exists'] = file_exists($dataDir);

if (!$tests['data_dir_exists']) {
    $tests['data_dir_created'] = @mkdir($dataDir, 0777, true);
} else {
    $tests['data_dir_created'] = true;
}

// Тест 3: Можно ли записать файл
$testFile = $dataDir . '/test.txt';
$tests['can_write'] = @file_put_contents($testFile, 'test') !== false;

if ($tests['can_write']) {
    @unlink($testFile); // Удаляем тестовый файл
}

// Тест 4: Права доступа
$tests['data_dir_writable'] = is_writable($dataDir);
$tests['data_dir_permissions'] = file_exists($dataDir) ? substr(sprintf('%o', fileperms($dataDir)), -4) : 'N/A';

// Тест 5: Путь к файлу данных
$dataFile = $dataDir . '/floor-plans.json';
$tests['data_file'] = $dataFile;
$tests['data_file_exists'] = file_exists($dataFile);
$tests['data_file_readable'] = file_exists($dataFile) && is_readable($dataFile);
$tests['data_file_writable'] = file_exists($dataFile) ? is_writable($dataFile) : is_writable($dataDir);

// Тест 6: JSON функции
$tests['json_encode_works'] = function_exists('json_encode');
$tests['json_decode_works'] = function_exists('json_decode');

// Результат
$allPassed = $tests['php_works'] && 
             $tests['data_dir_created'] && 
             $tests['can_write'] && 
             $tests['data_dir_writable'] &&
             $tests['json_encode_works'] &&
             $tests['json_decode_works'];

echo json_encode([
    'status' => 200,
    'success' => $allPassed,
    'message' => $allPassed ? 'Все тесты пройдены' : 'Некоторые тесты не прошли',
    'tests' => $tests,
    'ready_for_floor_plans' => $allPassed,
    'timestamp' => date('Y-m-d H:i:s')
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
