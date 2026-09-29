<?php
// Роутер для демо-режима
// Этот файл перенаправляет запросы на демо-версии API

require_once __DIR__ . '/config/demo-mode.php';

// Получаем путь запроса
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Определяем, какой API endpoint запрашивается
$path_parts = explode('/', trim($path, '/'));
$api_index = array_search('api', $path_parts);

if ($api_index !== false && isset($path_parts[$api_index + 1])) {
    $endpoint = $path_parts[$api_index + 1];
    $sub_endpoint = isset($path_parts[$api_index + 2]) ? $path_parts[$api_index + 2] : null;
    
    // Перенаправляем на демо-версии
    $demo_file = null;
    
    if ($endpoint === 'auth') {
        if ($sub_endpoint === 'login.php') {
            $demo_file = __DIR__ . '/auth/demo-login.php';
        } elseif ($sub_endpoint === 'change-password.php') {
            $demo_file = __DIR__ . '/auth/change-password.php';
        }
    } elseif ($endpoint === 'sensors') {
        if ($sub_endpoint === 'current.php' || $sub_endpoint === 'smart-current.php' || $sub_endpoint === 'smart-user-current.php') {
            $demo_file = __DIR__ . '/sensors/demo-current.php';
        } elseif ($sub_endpoint === 'history.php' || $sub_endpoint === 'user-history.php') {
            // Для user-history.php используем специальный файл, если он есть, иначе demo-history.php
            $user_history_file = __DIR__ . '/sensors/user-history.php';
            if (file_exists($user_history_file)) {
                $demo_file = $user_history_file;
            } else {
                $demo_file = __DIR__ . '/sensors/demo-history.php';
            }
        }
    } elseif ($endpoint === 'groups') {
        if ($sub_endpoint === 'index.php' || !$sub_endpoint) {
            $demo_file = __DIR__ . '/groups/demo-index.php';
        } elseif ($sub_endpoint === 'sensors.php') {
            $demo_file = __DIR__ . '/groups/demo-sensors.php';
        } elseif ($sub_endpoint === 'user-groups-list.php') {
            $demo_file = __DIR__ . '/groups/user-groups-list.php';
        }
    } elseif ($endpoint === 'users' && ($sub_endpoint === 'current.php' || !$sub_endpoint)) {
        $demo_file = __DIR__ . '/users/demo-current.php';
    } elseif ($endpoint === 'alerts' && ($sub_endpoint === 'index.php' || !$sub_endpoint)) {
        $demo_file = __DIR__ . '/alerts/demo-index.php';
    } elseif ($endpoint === 'events' && ($sub_endpoint === 'index.php' || !$sub_endpoint)) {
        $demo_file = __DIR__ . '/events/index.php';
    } elseif ($endpoint === 'devices' && $sub_endpoint === 'verification-check.php') {
        $demo_file = __DIR__ . '/devices/verification-check.php';
    } elseif ($endpoint === 'sensors' && $sub_endpoint === 'thresholds.php') {
        $demo_file = __DIR__ . '/sensors/thresholds.php';
    } elseif ($endpoint === 'reports') {
        if ($sub_endpoint === 'create-group-report.php') {
            $demo_file = __DIR__ . '/reports/create-group-report.php';
        } elseif ($sub_endpoint === 'user-reports.php') {
            $demo_file = __DIR__ . '/reports/user-reports.php';
        } elseif ($sub_endpoint === 'data.php') {
            $demo_file = __DIR__ . '/reports/data.php';
        }
    }
    
    if ($demo_file && file_exists($demo_file)) {
        require $demo_file;
        exit;
    }
}

// Если демо-файл не найден, возвращаем ошибку
http_response_code(404);
echo json_encode([
    'status' => 404,
    'error' => 'Демо-версия API не найдена',
    'timestamp' => date('Y-m-d H:i:s')
], JSON_UNESCAPED_UNICODE);
?>
