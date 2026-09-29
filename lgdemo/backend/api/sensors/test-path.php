<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

echo json_encode([
    'real_file_path' => __FILE__,
    'real_dir_path' => __DIR__,
    'script_filename' => $_SERVER['SCRIPT_FILENAME'],
    'document_root' => $_SERVER['DOCUMENT_ROOT'],
    'pwd' => getcwd(),
    'smart_user_current_exists' => file_exists(__DIR__ . '/smart-user-current.php'),
    'smart_user_current_path' => realpath(__DIR__ . '/smart-user-current.php')
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);