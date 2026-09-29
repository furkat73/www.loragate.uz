# API для управления планами этажей

Этот endpoint позволяет загружать, сохранять и удалять планы этажей с размещением датчиков.

## 📁 Установка

### Для удалённого сервера (lgdemo.loragate.uz)

1. Скопируйте файл `index.php` в директорию `backend/api/floor-plans/` на сервере
2. Убедитесь, что директория доступна через веб-сервер
3. Создайте директорию `backend/data/` с правами на запись для хранения данных в демо-режиме:
   ```bash
   mkdir -p /path/to/backend/data
   chmod 777 /path/to/backend/data
   ```

### Для базы данных

Если используете реальную базу данных, выполните SQL миграцию:

```bash
mysql -u username -p database_name < backend/sql/floor_plans.sql
```

## 🔌 API Endpoints

### GET - Получение планов этажей

**URL:** `/backend/api/floor-plans/index.php`

**Параметры:**
- `user_id` (опционально) - ID пользователя для фильтрации

**Пример запроса:**
```http
GET /backend/api/floor-plans/index.php?user_id=1
```

**Пример ответа:**
```json
{
  "status": 200,
  "success": true,
  "message": "Планы этажей получены успешно",
  "data": [
    {
      "id": 1,
      "user_id": 1,
      "image_url": "data:image/jpeg;base64,...",
      "sensors": [
        {
          "device_id": "TAG-08B-82257480",
          "x": 100,
          "y": 150
        }
      ],
      "font_size": 14,
      "created_at": "2026-01-22 11:00:00",
      "updated_at": "2026-01-22 11:30:00"
    }
  ],
  "source": "demo_data",
  "timestamp": "2026-01-22 12:00:00"
}
```

### POST - Сохранение плана этажа

**URL:** `/backend/api/floor-plans/index.php`

**Тело запроса (JSON):**
```json
{
  "user_id": 1,
  "id": null,
  "image_url": "data:image/jpeg;base64,...",
  "sensors": [
    {
      "device_id": "TAG-08B-82257480",
      "x": 100,
      "y": 150
    }
  ],
  "font_size": 14
}
```

**Параметры:**
- `user_id` - ID пользователя (обязательно)
- `id` - ID плана для обновления (null для создания нового)
- `image_url` - Base64 изображение плана этажа
- `sensors` - Массив с позициями датчиков
- `font_size` - Размер шрифта (по умолчанию 14)

**Пример ответа:**
```json
{
  "status": 200,
  "success": true,
  "message": "План этажа успешно сохранен",
  "data": {
    "id": 1738064599,
    "user_id": 1,
    "image_url": "data:image/jpeg;base64,...",
    "sensors": [...],
    "font_size": 14,
    "created_at": "2026-01-22 11:00:00",
    "updated_at": "2026-01-22 11:00:00"
  },
  "source": "demo_data",
  "timestamp": "2026-01-22 11:00:00"
}
```

### DELETE - Удаление плана этажа

**URL:** `/backend/api/floor-plans/index.php?id=123`

**Параметры:**
- `id` - ID плана для удаления (обязательно)

**Пример запроса:**
```http
DELETE /backend/api/floor-plans/index.php?id=1
```

**Пример ответа:**
```json
{
  "status": 200,
  "success": true,
  "message": "План этажа успешно удален",
  "data": null,
  "source": "demo_data",
  "timestamp": "2026-01-22 12:00:00"
}
```

## 🔧 Режимы работы

### Демо-режим
Если база данных не подключена (`DB_HOST === 'localhost_demo'`), API работает в демо-режиме:
- Данные хранятся в файле `backend/data/floor-plans.json`
- Не требует подключения к БД
- Идеально для тестирования и разработки

### Режим с базой данных
При наличии подключения к БД:
- Данные сохраняются в таблицу `floor_plans`
- Требуется выполнить миграцию из `backend/sql/floor_plans.sql`
- Поддерживает все стандартные операции CRUD

## ⚠️ Важно

1. **Размер изображений:** Лимит размера запроса увеличен до 10MB для поддержки больших изображений
2. **CORS:** API настроен на прием запросов с любых доменов
3. **Права доступа:** Убедитесь, что директория `backend/data/` имеет права на запись
4. **Формат данных:** Поле `sensors` должно быть JSON массивом

## 🐛 Отладка

Для отладки на сервере проверьте логи PHP:
- Демо-режим: проверьте наличие файла `backend/data/floor-plans.json`
- Режим БД: проверьте подключение и наличие таблицы `floor_plans`

### Проверка работоспособности

```bash
# Тест GET запроса
curl http://lgdemo.loragate.uz/backend/api/floor-plans/index.php?user_id=1

# Тест POST запроса
curl -X POST http://lgdemo.loragate.uz/backend/api/floor-plans/index.php \
  -H "Content-Type: application/json" \
  -d '{"user_id":1,"image_url":"test","sensors":[],"font_size":14}'
```
