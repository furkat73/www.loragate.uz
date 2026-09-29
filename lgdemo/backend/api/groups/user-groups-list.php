<?php
// Демо-версия user-groups-list.php - список групп пользователя

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

try {
    $user_id = isset($_GET['user_id']) ? intval($_GET['user_id']) : null;
    
    // В демо-режиме возвращаем одну группу для всех пользователей
    $groups = [
        [
            'id' => 1,
            'name' => 'Демонстрационная группа',
            'description' => 'Группа для демонстрации системы',
            'user_id' => $user_id,
            'created_at' => date('Y-m-d H:i:s')
        ]
    ];
    
    echo json_encode([
        'status' => 200,
        'success' => true,
        'message' => 'Группы пользователя получены успешно',
        'data' => $groups,
        'user_id' => $user_id,
        'count' => count($groups),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'success' => false,
        'error' => 'Ошибка получения групп: ' . $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}
?>
