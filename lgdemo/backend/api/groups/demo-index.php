<?php
// Демо-версия API групп (работает без базы данных)
// 1 демонстрационная группа

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Обработка preflight запросов
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            // Получение списка групп
            $now = date('Y-m-d H:i:s');
            
            $demo_group = [
                'id' => 1,
                'name' => 'Демонстрационная группа',
                'description' => 'Группа для демонстрации системы мониторинга',
                'site' => 'Демо-склад',
                'created_at' => $now,
                'updated_at' => $now,
                'created_by_username' => 'demo',
                'created_by_full_name' => 'Демо Пользователь',
                'member_count' => 1,
                'sensor_count' => 6
            ];
            
            // Если запрашивается конкретная группа
            if (isset($_GET['id'])) {
                $group_id = (int)$_GET['id'];
                if ($group_id === 1) {
                    echo json_encode([
                        'success' => true,
                        'data' => $demo_group,
                        'timestamp' => $now
                    ], JSON_UNESCAPED_UNICODE);
                } else {
                    http_response_code(404);
                    echo json_encode([
                        'success' => false,
                        'error' => 'Группа не найдена',
                        'timestamp' => $now
                    ], JSON_UNESCAPED_UNICODE);
                }
            } else {
                // Список всех групп
                echo json_encode([
                    'success' => true,
                    'data' => [
                        'groups' => [$demo_group],
                        'pagination' => [
                            'page' => 1,
                            'limit' => 20,
                            'total' => 1,
                            'total_pages' => 1
                        ],
                        'sites' => ['Демо-склад']
                    ],
                    'timestamp' => $now
                ], JSON_UNESCAPED_UNICODE);
            }
            break;
            
        case 'POST':
            // Создание группы - в демо-режиме возвращаем ошибку
            http_response_code(403);
            echo json_encode([
                'success' => false,
                'error' => 'Создание групп недоступно в демо-режиме',
                'timestamp' => date('Y-m-d H:i:s')
            ], JSON_UNESCAPED_UNICODE);
            break;
            
        case 'PUT':
        case 'DELETE':
            // Изменение/удаление группы - в демо-режиме возвращаем ошибку
            http_response_code(403);
            echo json_encode([
                'success' => false,
                'error' => 'Изменение групп недоступно в демо-режиме',
                'timestamp' => date('Y-m-d H:i:s')
            ], JSON_UNESCAPED_UNICODE);
            break;
            
        default:
            http_response_code(405);
            echo json_encode([
                'success' => false,
                'error' => 'Метод не поддерживается',
                'timestamp' => date('Y-m-d H:i:s')
            ], JSON_UNESCAPED_UNICODE);
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Ошибка: ' . $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}
?>
