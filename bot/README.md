# Lora Gate — Telegram-бот (квиз-воронка + CRM)

Серверная логика бота на PHP (совместимо с текущим хостингом, PHP 7.4+).

## Что умеет

1. **Квиз внутри Telegram** — `/start` → выбор языка → 3 вопроса с кнопками → имя → кнопка «📱 Поделиться контактом» → автоматическая отправка Чек-листа GxP (PDF) → карточка лида в чат продаж.
2. **Приём заявок с сайта** — `api/send-quiz.php` сохраняет лид в SQLite и публикует оформленную карточку с кнопками быстрых действий.
3. **Карточка лида** — кнопки: 📞 Быстрый звонок (tel:), 💬 Написать в Telegram, ✅ В работу, 📅 Дата аудита, ✔ Аудит проведён, 📄 КП отправлено, 💰 Сделка закрыта, ❌ Спам.
4. **Статусы**: `new → work → audit_wait → audit_scheduled → audit_done → kp_sent → closed` (+ `spam`).
5. **Напоминания (cron)**: лид без ответа > 30 мин; аудит через ~2 часа.
6. **Фоллоу-ап**: через 24ч — кейс Rubikon Lek; через 48ч — свободные слоты (только лиды из бота).

## Настройка

### 1. Создать бота
- Написать [@BotFather](https://t.me/BotFather) → `/newbot` → получить токен.

### 2. Переменные окружения (`.env` на хостинге)
```
TELEGRAM_BOT_TOKEN=123456:ABC...      # токен от BotFather
TELEGRAM_CHAT_ID=-1001234567890       # ID закрытого чата продаж
TELEGRAM_ADMIN_ID=123456789           # (необязательно) ID администратора
BOT_WEBHOOK_SECRET=случайная_строка_1 # секрет для webhook
BOT_CRON_SECRET=случайная_строка_2    # секрет для cron/set-webhook по HTTP
```
Узнать ID чата: добавить [@userinfobot](https://t.me/userinfobot) или [@getmyid_bot](https://t.me/getmyid_bot) в чат продаж.

### 3. Установить webhook
```
https://loragate.uz/bot/set-webhook.php?key=BOT_CRON_SECRET&url=https://loragate.uz/bot/webhook.php?secret=BOT_WEBHOOK_SECRET
```
Или через CLI: `php bot/set-webhook.php "https://loragate.uz/bot/webhook.php?secret=..."`

### 4. Cron (каждые 5–10 минут)
```
*/7 * * * * /usr/bin/php /path/to/site/bot/cron.php >/dev/null 2>&1
```
Либо HTTP-вариант через внешний cron-сервис:
```
https://loragate.uz/bot/cron.php?key=BOT_CRON_SECRET
```

### 5. Чек-лист GxP (PDF)
Положить файл сюда: `bot/assets/checklist-gxp.pdf` — бот отправит его клиенту автоматически после прохождения теста.

### 6. Команда даты аудита (в чате продаж)
```
/audit 12 2026-09-25 15:00
```
где `12` — номер заявки `#12` из карточки.

## Структура
```
bot/
├── config.php        # конфиг (env), часовой пояс Asia/Tashkent
├── lib.php           # БД SQLite, Telegram API, тексты RU/UZ, карточка лида
├── webhook.php       # обработка updates: квиз, кнопки, /audit
├── cron.php          # напоминания + фоллоу-апы
├── set-webhook.php   # установка webhook
├── assets/           # сюда положить checklist-gxp.pdf
├── data/             # leads.db (закрыто от веба через .htaccess)
└── README.md
```

## БД (SQLite, создаётся автоматически)
- `leads` — все заявки (сайт + бот): контакты, ответы, статус, дата аудита, флаги напоминаний, message_id карточки.
- `bot_state` — промежуточное состояние квиза пользователя в боте.
