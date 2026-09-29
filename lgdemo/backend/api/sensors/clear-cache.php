<?php
header('Content-Type: text/plain; charset=utf-8');

echo "=== Очистка кеша PHP ===\n\n";

// Очистка OPcache
if (function_exists('opcache_reset')) {
    $result = opcache_reset();
    echo $result ? "✓ OPcache успешно очищен\n" : "✗ Ошибка очистки OPcache\n";
} else {
    echo "✗ OPcache не доступен\n";
}

// Очистка realpath cache
clearstatcache(true);
echo "✓ Stat cache очищен\n";

echo "\n=== Информация о PHP ===\n";
echo "PHP Version: " . phpversion() . "\n";
echo "OPcache: " . (function_exists('opcache_get_status') ? 'Включен' : 'Отключен') . "\n";

if (function_exists('opcache_get_status')) {
    $status = opcache_get_status(false);
    if ($status) {
        echo "OPcache статус: " . ($status['opcache_enabled'] ? 'Активен' : 'Неактивен') . "\n";
        echo "Кешированных файлов: " . $status['opcache_statistics']['num_cached_scripts'] . "\n";
    }
}

echo "\n✓ Готово! Теперь обновите страницу smart-user-current.php\n";