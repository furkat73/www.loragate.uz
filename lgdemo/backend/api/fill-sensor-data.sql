-- SQL скрипт для заполнения таблицы sensor_data тестовыми данными
-- Использование: импортируйте этот файл в phpMyAdmin или выполните через MySQL CLI

-- Сначала проверьте, существует ли таблица, если нет - создайте её:
CREATE TABLE IF NOT EXISTS `sensor_data` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `device_id` varchar(50) NOT NULL,
    `sensor_id` varchar(50) DEFAULT NULL,
    `temperature` decimal(5,2) DEFAULT NULL,
    `humidity` decimal(5,2) DEFAULT NULL,
    `battery_level` int(11) DEFAULT NULL,
    `battery_voltage` decimal(4,2) DEFAULT NULL,
    `signal_strength` int(11) DEFAULT NULL,
    `timestamp` datetime NOT NULL,
    `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_device_id` (`device_id`),
    KEY `idx_timestamp` (`timestamp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Очистка существующих данных (ОСТОРОЖНО: удалит все данные!)
-- Раскомментируйте следующую строку, если хотите очистить таблицу перед заполнением:
-- TRUNCATE TABLE sensor_data;

-- Добавление тестовых данных за последние 7 дней
-- Данные для устройства TAG-08B-82257480
INSERT INTO sensor_data (device_id, sensor_id, temperature, humidity, battery_level, battery_voltage, signal_strength, timestamp) VALUES
('TAG-08B-82257480', 'TAG-08B-82257480', 4.5, 45.2, 85, 3.20, -65, DATE_SUB(NOW(), INTERVAL 168 HOUR)),
('TAG-08B-82257480', 'TAG-08B-82257480', 4.6, 45.4, 85, 3.20, -64, DATE_SUB(NOW(), INTERVAL 167 HOUR)),
('TAG-08B-82257480', 'TAG-08B-82257480', 4.4, 45.1, 84, 3.19, -66, DATE_SUB(NOW(), INTERVAL 166 HOUR)),
('TAG-08B-82257480', 'TAG-08B-82257480', 4.7, 45.6, 84, 3.19, -65, DATE_SUB(NOW(), INTERVAL 165 HOUR)),
('TAG-08B-82257480', 'TAG-08B-82257480', 4.5, 45.3, 83, 3.18, -67, DATE_SUB(NOW(), INTERVAL 164 HOUR));

-- Данные для устройства TAG-08B-82257481
INSERT INTO sensor_data (device_id, sensor_id, temperature, humidity, battery_level, battery_voltage, signal_strength, timestamp) VALUES
('TAG-08B-82257481', 'TAG-08B-82257481', 5.2, 48.5, 92, 3.40, -58, DATE_SUB(NOW(), INTERVAL 168 HOUR)),
('TAG-08B-82257481', 'TAG-08B-82257481', 5.3, 48.7, 92, 3.40, -57, DATE_SUB(NOW(), INTERVAL 167 HOUR)),
('TAG-08B-82257481', 'TAG-08B-82257481', 5.1, 48.4, 91, 3.39, -59, DATE_SUB(NOW(), INTERVAL 166 HOUR)),
('TAG-08B-82257481', 'TAG-08B-82257481', 5.4, 48.9, 91, 3.39, -58, DATE_SUB(NOW(), INTERVAL 165 HOUR)),
('TAG-08B-82257481', 'TAG-08B-82257481', 5.2, 48.6, 90, 3.38, -60, DATE_SUB(NOW(), INTERVAL 164 HOUR));

-- Данные для устройства TAG-08B-82257482
INSERT INTO sensor_data (device_id, sensor_id, temperature, humidity, battery_level, battery_voltage, signal_strength, timestamp) VALUES
('TAG-08B-82257482', 'TAG-08B-82257482', 22.3, 55.8, 78, 3.10, -72, DATE_SUB(NOW(), INTERVAL 168 HOUR)),
('TAG-08B-82257482', 'TAG-08B-82257482', 22.4, 56.0, 78, 3.10, -71, DATE_SUB(NOW(), INTERVAL 167 HOUR)),
('TAG-08B-82257482', 'TAG-08B-82257482', 22.2, 55.7, 77, 3.09, -73, DATE_SUB(NOW(), INTERVAL 166 HOUR)),
('TAG-08B-82257482', 'TAG-08B-82257482', 22.5, 56.2, 77, 3.09, -72, DATE_SUB(NOW(), INTERVAL 165 HOUR)),
('TAG-08B-82257482', 'TAG-08B-82257482', 22.3, 55.9, 76, 3.08, -74, DATE_SUB(NOW(), INTERVAL 164 HOUR));

-- Примечание: 
-- Этот скрипт добавляет только несколько примеров записей.
-- Для полного заполнения данных рекомендуется использовать PHP-скрипт fill-sensor-data.php,
-- который автоматически генерирует данные за последние 7 дней (по одной записи каждый час).
