<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Проверяем содержимое файла smart-user-current.php
$filePath = __DIR__ . '/smart-user-current.php';

$result = [
    'file_exists' => file_exists($filePath),
    'file_path' => $filePath,
    'file_readable' => file_exists($filePath) ? is_readable($filePath) : false,
    'file_size' => file_exists($filePath) ? filesize($filePath) : 0,
    'has_success_true' => false,
    'has_debug' => false,
    'has_database_available' => false,
    'line_with_success' => null,
    'line_with_debug' => null,
    'line_with_database_available' => null,
];

if (file_exists($filePath)) {
    $content = file_get_contents($filePath);
    $lines = explode("\n", $content);
    
    foreach ($lines as $lineNum => $line) {
        $lineNum1 = $lineNum + 1; // Нумерация с 1
        
        if (strpos($line, "'success' => true") !== false || strpos($line, '"success" => true') !== false) {
            $result['has_success_true'] = true;
            $result['line_with_success'] = $lineNum1;
        }
        
        if (strpos($line, "'_debug'") !== false || strpos($line, '"_debug"') !== false) {
            $result['has_debug'] = true;
            $result['line_with_debug'] = $lineNum1;
        }
        
        if (strpos($line, "'database_available'") !== false || strpos($line, '"database_available"') !== false) {
            $result['has_database_available'] = true;
            $result['line_with_database_available'] = $lineNum1;
        }
    }
    
    // Показываем строки вокруг найденных маркеров
    if ($result['has_success_true']) {
        $start = max(0, $result['line_with_success'] - 3);
        $end = min(count($lines), $result['line_with_success'] + 2);
        $result['context_success'] = array_slice($lines, $start, $end - $start);
    }
    
    if ($result['has_debug']) {
        $start = max(0, $result['line_with_debug'] - 3);
        $end = min(count($lines), $result['line_with_debug'] + 2);
        $result['context_debug'] = array_slice($lines, $start, $end - $start);
    }
}

echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
