<?php
/**
 * Lora Gate — Telegram-бот: конфигурация
 *
 * Значения берутся из переменных окружения (.env на хостинге).
 * Подключение напрямую через браузер запрещено.
 */
if (basename(isset($_SERVER['SCRIPT_FILENAME']) ? $_SERVER['SCRIPT_FILENAME'] : '') === basename(__FILE__)) {
    http_response_code(403);
    exit('Forbidden');
}

date_default_timezone_set('Asia/Tashkent');

/**
 * Чтение переменной: сначала окружение, затем корневой .env файл
 * (на shared-хостинге .env сам по себе в окружение не попадает).
 */
function lg_env($key) {
    $v = getenv($key);
    if ($v !== false && $v !== '') return $v;
    static $dotenv = null;
    if ($dotenv === null) {
        $dotenv = array();
        $f = dirname(__DIR__) . '/.env';
        if (is_file($f)) {
            foreach (file($f, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
                $line = trim($line);
                if ($line === '' || $line[0] === '#') continue;
                $pos = strpos($line, '=');
                if ($pos === false) continue;
                $k = trim(substr($line, 0, $pos));
                $val = trim(substr($line, $pos + 1));
                if (strlen($val) >= 2 && $val[0] === '"' && $val[strlen($val) - 1] === '"') {
                    $val = substr($val, 1, -1);
                }
                $dotenv[$k] = $val;
            }
        }
    }
    return isset($dotenv[$key]) ? $dotenv[$key] : '';
}

define('LG_BOT_TOKEN', lg_env('TELEGRAM_BOT_TOKEN'));
define('LG_SALES_CHAT_ID', lg_env('TELEGRAM_CHAT_ID'));
define('LG_ADMIN_ID', lg_env('TELEGRAM_ADMIN_ID'));

// Секрет для webhook: https://loragate.uz/bot/webhook.php?secret=XXX
define('LG_WEBHOOK_SECRET', lg_env('BOT_WEBHOOK_SECRET'));
// Секрет для cron по HTTP: https://loragate.uz/bot/cron.php?key=XXX
define('LG_CRON_SECRET', lg_env('BOT_CRON_SECRET'));

define('LG_BOT_DIR', __DIR__);
define('LG_BOT_DATA_DIR', __DIR__ . '/data');
define('LG_BOT_DB', __DIR__ . '/data/leads.db');
define('LG_BOT_CHECKLIST_PDF', __DIR__ . '/assets/checklist-gxp.pdf');

define('LG_API_URL', 'https://api.telegram.org/bot');

// Статусы лидов
$GLOBALS['LG_STATUSES'] = array(
    'new'             => '🆕 Новый',
    'work'            => '🔧 В работе',
    'audit_wait'      => '📅 Ожидание даты аудита',
    'audit_scheduled' => '📅 Аудит назначен',
    'audit_done'      => '✔ Аудит проведён',
    'kp_sent'         => '📄 КП отправлено',
    'closed'          => '💰 Сделка закрыта',
    'spam'            => '❌ Спам',
);
