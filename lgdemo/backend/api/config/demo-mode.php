<?php
// Конфигурация демо-режима
// Установите DEMO_MODE в true для работы без базы данных

define('DEMO_MODE', true); // true = демо-режим, false = обычный режим с БД

// Демо-данные
define('DEMO_USER_ID', 1);
define('DEMO_USERNAME', 'demo');
define('DEMO_PASSWORD', 'demo123');
define('DEMO_USER_ROLE', 'viewer'); // Наблюдатель

// Функция для проверки демо-режима
function isDemoMode() {
    return defined('DEMO_MODE') && DEMO_MODE === true;
}

// Функция для получения демо-пользователя
function getDemoUser() {
    return [
        'id' => DEMO_USER_ID,
        'username' => DEMO_USERNAME,
        'email' => 'demo@example.com',
        'full_name' => 'Демо Пользователь',
        'role' => DEMO_USER_ROLE,
        'status' => 'active',
        'department' => 'Демонстрация',
        'phone' => '+7 (999) 000-00-00',
        'last_login' => date('Y-m-d H:i:s'),
        'password_changed' => true,
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
        'permissions' => ['dashboard:read', 'reports:read', 'devices:read']
    ];
}
?>
