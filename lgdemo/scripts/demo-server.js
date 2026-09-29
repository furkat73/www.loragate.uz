// Простой Express сервер для демо-режима
// Эмулирует PHP API для работы без базы данных

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8000;

// Хранилище для пороговых значений в демо-режиме (в памяти)
// В реальном приложении данные хранятся в базе данных
const deviceThresholdsStorage = new Map();

// Хранилище для датчиков в демо-режиме (в памяти)
// При обновлении устройств данные сохраняются здесь
const sensorsStorage = new Map();

// Middleware
app.use(cors());
// Увеличиваем лимит размера тела запроса для больших изображений (например, планы этажей)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Функция для получения демо-пользователя
function getDemoUser(username = 'demo') {
  const users = {
    'demo': {
      id: 1,
      username: 'demo',
      email: 'demo@example.com',
      full_name: 'Демо Пользователь',
      role: 'viewer',
      status: 'active',
      department: 'Демонстрация',
      phone: '+7 (999) 000-00-00',
      last_login: new Date().toISOString().slice(0, 19).replace('T', ' '),
      password_changed: true,
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      permissions: ['dashboard:read', 'reports:read', 'devices:read']
    },
    'admin': {
      id: 2,
      username: 'admin',
      email: 'admin@pharma.com',
      full_name: 'Администратор Системы',
      role: 'admin',
      status: 'active',
      department: 'IT Отдел',
      phone: '+7 (495) 123-45-67',
      last_login: new Date().toISOString().slice(0, 19).replace('T', ' '),
      password_changed: true,
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      permissions: ['all']
    },
    'operator': {
      id: 3,
      username: 'operator',
      email: 'operator@pharma.com',
      full_name: 'Иван Петров',
      role: 'operator',
      status: 'active',
      department: 'Склад А',
      phone: '+7 (495) 234-56-78',
      last_login: new Date().toISOString().slice(0, 19).replace('T', ' '),
      password_changed: true,
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      permissions: ['devices:read', 'devices:manage', 'alerts:read', 'alerts:manage', 'reports:read', 'dashboard:read', 'settings:read']
    },
    'auditor': {
      id: 4,
      username: 'auditor',
      email: 'auditor@pharma.com',
      full_name: 'Анна Иванова',
      role: 'auditor',
      status: 'active',
      department: 'Отдел контроля качества',
      phone: '+7 (495) 345-67-89',
      last_login: new Date().toISOString().slice(0, 19).replace('T', ' '),
      password_changed: true,
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      permissions: ['reports:read', 'audit:read', 'compliance:read', 'dashboard:read']
    }
  };
  
  return users[username] || users['demo'];
}

// Функция для получения демо-датчиков
// Базовые демо-датчики (используются для инициализации)
// Соответствуют данным из backend/api/sensors/demo-current.php
function getBaseDemoSensors() {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
  
  return [
    {
      id: 1,
      device_id: 'TAG-08B-82257480',
      device_name: 'Датчик температуры и влажности #1',
      name: 'Датчик #1',
      location: 'Холодильная камера A',
      type: 'combined',
      device_type: 'cold_chain_2_8',
      temperature: 4.5,
      humidity: 45.2,
      battery_level: 85,
      battery_voltage: 3.2,
      signal_strength: -65,
      is_connected: true,
      status: 'active',
      last_reading: now,
      last_update: now,
      sensor_time: now,
      sn: 'TAG-08B-82257480',
      serial_number: 'TAG-08B-82257480',
      created_at: now,
      timestamp: now
    },
    {
      id: 2,
      device_id: 'TAG-08B-82257481',
      device_name: 'Датчик температуры и влажности #2',
      name: 'Датчик #2',
      location: 'Холодильная камера B',
      type: 'combined',
      device_type: 'cold_chain_2_8',
      temperature: 5.2,
      humidity: 48.5,
      battery_level: 92,
      battery_voltage: 3.4,
      signal_strength: -58,
      is_connected: true,
      status: 'active',
      last_reading: now,
      last_update: now,
      sensor_time: now,
      sn: 'TAG-08B-82257481',
      serial_number: 'TAG-08B-82257481',
      created_at: now,
      timestamp: now
    },
    {
      id: 3,
      device_id: 'TAG-08B-82257482',
      device_name: 'Датчик температуры и влажности #3',
      name: 'Датчик #3',
      location: 'Складской отсек 1',
      type: 'combined',
      device_type: 'room_temperature',
      temperature: 22.3,
      humidity: 55.8,
      battery_level: 78,
      battery_voltage: 3.1,
      signal_strength: -72,
      is_connected: true,
      status: 'active',
      last_reading: now,
      last_update: now,
      sensor_time: now,
      sn: 'TAG-08B-82257482',
      serial_number: 'TAG-08B-82257482',
      created_at: now,
      timestamp: now
    },
    {
      id: 4,
      device_id: 'TAG-08B-82257483',
      device_name: 'Датчик температуры и влажности #4',
      name: 'Датчик #4',
      location: 'Складской отсек 2',
      type: 'combined',
      device_type: 'room_temperature',
      temperature: 23.1,
      humidity: 52.3,
      battery_level: 88,
      battery_voltage: 3.3,
      signal_strength: -62,
      is_connected: true,
      status: 'active',
      last_reading: now,
      last_update: now,
      sensor_time: now,
      sn: 'TAG-08B-82257483',
      serial_number: 'TAG-08B-82257483',
      created_at: now,
      timestamp: now
    },
    {
      id: 5,
      device_id: 'TAG-08B-82257484',
      device_name: 'Датчик температуры и влажности #5',
      name: 'Датчик #5',
      location: 'Транспортный отсек',
      type: 'combined',
      device_type: 'room_temperature',
      temperature: 21.8,
      humidity: 50.5,
      battery_level: 75,
      battery_voltage: 3.0,
      signal_strength: -75,
      is_connected: true,
      status: 'active',
      last_reading: now,
      last_update: now,
      sensor_time: now,
      sn: 'TAG-08B-82257484',
      serial_number: 'TAG-08B-82257484',
      created_at: now,
      timestamp: now
    },
    {
      id: 6,
      device_id: 'TAG-08B-82257485',
      device_name: 'Датчик температуры и влажности #6',
      name: 'Датчик #6',
      location: 'Зона приемки',
      type: 'combined',
      device_type: 'room_temperature',
      temperature: 20.5,
      humidity: 48.9,
      battery_level: 90,
      battery_voltage: 3.5,
      signal_strength: -55,
      is_connected: true,
      status: 'active',
      last_reading: now,
      last_update: now,
      sensor_time: now,
      sn: 'TAG-08B-82257485',
      serial_number: 'TAG-08B-82257485',
      created_at: now,
      timestamp: now
    }
  ];
}

// Получение датчиков с учетом обновлений из хранилища
function getDemoSensors() {
  // Инициализируем хранилище при первом вызове
  if (sensorsStorage.size === 0) {
    const baseSensors = getBaseDemoSensors();
    baseSensors.forEach(sensor => {
      sensorsStorage.set(sensor.device_id, { ...sensor });
    });
  }
  
  // Возвращаем все датчики из хранилища
  return Array.from(sensorsStorage.values());
}

// API Routes
app.post('/backend/api/auth/login.php', (req, res) => {
  const { username, password } = req.body;
  
  // Демонстрационные учетные записи
  const demoAccounts = {
    'demo': { password: 'demo123', username: 'demo' },
    'admin': { password: 'admin123', username: 'admin' },
    'operator': { password: 'operator123', username: 'operator' },
    'auditor': { password: 'auditor123', username: 'auditor' }
  };
  
  const account = demoAccounts[username];
  
  if (account && password === account.password) {
    const user = getDemoUser(username);
    const tokenData = {
      user_id: user.id,
      username: user.username,
      role: user.role,
      exp: Math.floor(Date.now() / 1000) + (8 * 60 * 60)
    };
    const token = Buffer.from(JSON.stringify(tokenData)).toString('base64');
    
    res.json({
      status: 200,
      message: 'Авторизация успешна',
      data: {
        user: user,
        token: token,
        expires_at: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' '),
        must_change_password: false
      },
      timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    });
  } else {
    res.status(401).json({
      status: 401,
      message: 'Ошибка авторизации: Неверное имя пользователя или пароль',
      timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    });
  }
});

// Смена пароля пользователя
app.post('/backend/api/auth/change-password.php', (req, res) => {
  const { user_id, current_password, new_password } = req.body;
  
  // Демонстрационные учетные записи
  const demoAccounts = {
    'admin': { password: 'admin123', username: 'admin' },
    'operator': { password: 'operator123', username: 'operator' },
    'auditor': { password: 'auditor123', username: 'auditor' },
    'viewer': { password: 'viewer123', username: 'viewer' }
  };
  
  // Получаем пользователя по ID
  // Соответствие ID из AuthContext.tsx:
  // admin: id=1, operator: id=2, auditor: id=3, viewer: id=4
  let username = 'admin'; // По умолчанию
  
  // Определяем username по user_id
  if (user_id === 1) username = 'admin';
  else if (user_id === 2) username = 'operator';
  else if (user_id === 3) username = 'auditor';
  else if (user_id === 4) username = 'viewer';
  
  const account = demoAccounts[username];
  
  // Проверяем текущий пароль
  if (!account || current_password !== account.password) {
    res.status(400).json({
      status: 400,
      message: 'Текущий пароль неверен',
      timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    });
    return;
  }
  
  // Проверяем новый пароль
  if (!new_password || new_password.length < 6) {
    res.status(400).json({
      status: 400,
      message: 'Новый пароль должен содержать минимум 6 символов',
      timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    });
    return;
  }
  
  // В демо-режиме просто возвращаем успех
  // В реальной системе здесь была бы обновлена база данных
  res.json({
    status: 200,
    message: 'Пароль успешно изменен',
    data: {
      user_id: user_id,
      username: username
    },
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

app.get('/backend/api/sensors/current.php', (req, res) => {
  res.json({
    status: 200,
    message: 'Данные получены успешно',
    data: getDemoSensors(),
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

app.get('/backend/api/sensors/smart-current.php', (req, res) => {
  res.json({
    status: 200,
    message: 'Данные получены успешно',
    data: getDemoSensors(),
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

app.get('/backend/api/sensors/history.php', (req, res) => {
  const sensors = getDemoSensors();
  const deviceId = req.query.device_id;
  const hours = parseInt(req.query.hours) || 24;
  const history = [];
  
  // Если указан device_id, фильтруем по нему
  const sensorsToProcess = deviceId 
    ? sensors.filter(s => s.device_id === deviceId)
    : sensors;
  
  // Генерируем историю для каждого датчика
  sensorsToProcess.forEach(sensor => {
    const pointsCount = hours; // Количество точек за указанное количество часов
    for (let i = 0; i < pointsCount; i++) {
      const timestamp = new Date(Date.now() - (pointsCount - 1 - i) * 60 * 60 * 1000);
      history.push({
        device_id: sensor.device_id,
        temperature: parseFloat((sensor.temperature + (Math.random() - 0.5) * 2).toFixed(1)),
        humidity: parseFloat((sensor.humidity + (Math.random() - 0.5) * 5).toFixed(1)),
        timestamp: timestamp.toISOString()
      });
    }
  });
  
  res.json({
    status: 200,
    message: 'История получена успешно',
    data: history,
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// История датчиков пользователя (с учетом групп)
app.get('/backend/api/sensors/user-history.php', (req, res) => {
  const sensors = getDemoSensors();
  const deviceId = req.query.device_id;
  const hours = parseInt(req.query.hours) || 24;
  const startDate = req.query.start_date;
  const endDate = req.query.end_date;
  const history = [];
  
  // Определяем диапазон времени
  let startTime, endTime;
  if (startDate && endDate) {
    startTime = new Date(startDate);
    endTime = new Date(endDate);
  } else {
    endTime = new Date();
    startTime = new Date(endTime.getTime() - hours * 60 * 60 * 1000);
  }
  
  // Если указан device_id, фильтруем по нему (может быть числом или строкой)
  let sensorsToProcess = sensors;
  if (deviceId) {
    // Проверяем и по числовому ID, и по device_id
    sensorsToProcess = sensors.filter(s => 
      s.id === parseInt(deviceId) || 
      s.device_id === deviceId || 
      s.device_id === `SENSOR-00${deviceId}` ||
      s.device_id === `SENSOR-0${deviceId}`
    );
  }
  
  // Генерируем историю для каждого датчика
  sensorsToProcess.forEach(sensor => {
    const timeDiff = endTime.getTime() - startTime.getTime();
    const hoursDiff = timeDiff / (60 * 60 * 1000);
    
    // Ограничиваем количество точек: максимум 168 точек (для 168 часов = одна точка в час)
    // Для меньших диапазонов - больше точек
    const pointsCount = hoursDiff > 48 
      ? Math.min(168, Math.floor(hoursDiff)) // Для больших диапазонов - одна точка в час
      : Math.max(24, Math.floor(hoursDiff * 2)); // Для малых диапазонов - две точки в час
    
    for (let i = 0; i < pointsCount; i++) {
      const timestamp = new Date(startTime.getTime() + (i * timeDiff / (pointsCount - 1 || 1)));
      history.push({
        device_id: sensor.device_id,
        temperature: parseFloat((sensor.temperature + (Math.random() - 0.5) * 2).toFixed(1)),
        humidity: parseFloat((sensor.humidity + (Math.random() - 0.5) * 5).toFixed(1)),
        timestamp: timestamp.toISOString()
      });
    }
  });
  
  res.json({
    status: 200,
    message: 'История получена успешно',
    data: history,
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

app.get('/backend/api/groups/index.php', (req, res) => {
  res.json({
    status: 200,
    message: 'Группы получены успешно',
    data: [
      {
        id: 1,
        name: 'Демонстрационная группа',
        description: 'Группа для демонстрации системы',
        site: 'Демо-склад',
        created_by: 1
      }
    ],
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

app.get('/backend/api/groups/sensors.php', (req, res) => {
  const groupId = req.query.group_id || 1;
  res.json({
    status: 200,
    message: 'Датчики группы получены успешно',
    data: getDemoSensors().map(s => ({ ...s, group_id: parseInt(groupId) })),
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

app.get('/backend/api/users/current.php', (req, res) => {
  res.json({
    status: 200,
    message: 'Данные пользователя получены успешно',
    data: getDemoUser(),
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

app.get('/backend/api/alerts/index.php', (req, res) => {
  res.json({
    status: 200,
    message: 'Уведомления получены успешно',
    data: [],
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Простой тест API
app.get('/backend/api/simple-test.php', (req, res) => {
  res.json({
    status: 'success',
    message: 'Simple PHP test working',
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Тестовый эндпоинт
app.get('/backend/api/test.php', (req, res) => {
  res.json({
    status: 200,
    message: 'API работает корректно',
    server_info: {
      php_version: '8.0+',
      server: 'Demo Express Server',
      timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    database: {
      status: 'demo', // Демо-режим (не подключена реальная БД)
      connected: false,
      mode: 'demo'
    }
  });
});

// Умные данные пользователя
app.get('/backend/api/sensors/smart-user-current.php', (req, res) => {
  const userId = req.query.user_id || 1;
  const sensors = getDemoSensors();
  
  // Подсчитываем статистику
  const totalSensors = sensors.length;
  const onlineSensors = sensors.filter(s => s.is_connected).length;
  
  res.json({
    status: 200,
    message: 'Демо-данные датчиков получены успешно',
    data: sensors,
    user_role: 'viewer',
    sensors_count: totalSensors,
    statistics: {
      total: totalSensors,
      online: onlineSensors,
      offline: totalSensors - onlineSensors,
      warning: 0,
      critical: 0
    },
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
    source: 'demo_data'
  });
});

// Пороги датчиков
// Получение пороговых значений для всех датчиков
app.get('/backend/api/sensors/thresholds.php', (req, res) => {
  const sensors = getDemoSensors();
  const thresholds = {};
  
  sensors.forEach(sensor => {
    // Проверяем, есть ли сохраненные пороги для этого датчика
    const savedThresholds = deviceThresholdsStorage.get(sensor.device_id);
    
    thresholds[sensor.device_id] = savedThresholds || {
      sensor_id: sensor.device_id,
      temperature: {
        min: 15,
        max: 25,
        warning_min: 17,
        warning_max: 23,
        critical_min: 2,
        critical_max: 35
      },
      humidity: {
        min: 35,
        max: 65,
        warning_min: 40,
        warning_max: 60,
        critical_min: 30,
        critical_max: 70
      },
      notification_enabled: true,
      email_alerts: true,
      sms_alerts: false
    };
  });
  
  res.json({
    status: 200,
    message: 'Пороги получены успешно',
    data: thresholds,
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Сохранение пороговых значений для датчика
app.post('/backend/api/sensors/thresholds.php', (req, res) => {
  const { sensor_id, temperature, humidity, notification_enabled, email_alerts, sms_alerts } = req.body;
  
  console.log('💾 Сохранение порогов для датчика:', {
    sensor_id,
    temperature,
    humidity,
    notification_enabled,
    email_alerts,
    sms_alerts
  });
  
  if (!sensor_id) {
    res.status(400).json({
      status: 400,
      message: 'Не указан sensor_id',
      timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    });
    return;
  }
  
  // Сохраняем пороги в памяти (в реальном приложении - в базе данных)
  deviceThresholdsStorage.set(sensor_id, {
    sensor_id,
    temperature: temperature || {
      min: 15,
      max: 25,
      warning_min: 17,
      warning_max: 23,
      critical_min: 2,
      critical_max: 35
    },
    humidity: humidity || {
      min: 35,
      max: 65,
      warning_min: 40,
      warning_max: 60,
      critical_min: 30,
      critical_max: 70
    },
    notification_enabled: notification_enabled !== undefined ? notification_enabled : true,
    email_alerts: email_alerts !== undefined ? email_alerts : true,
    sms_alerts: sms_alerts !== undefined ? sms_alerts : false
  });
  
  res.json({
    status: 200,
    message: 'Пороги успешно сохранены',
    data: {
      sensor_id,
      saved: true
    },
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Удаление пороговых значений для датчика
app.delete('/backend/api/sensors/thresholds.php', (req, res) => {
  const sensorId = req.query.sensor_id;
  
  if (!sensorId) {
    res.status(400).json({
      status: 400,
      message: 'Не указан sensor_id',
      timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    });
    return;
  }
  
  // Удаляем пороги из памяти
  deviceThresholdsStorage.delete(sensorId);
  
  res.json({
    status: 200,
    message: 'Пороги успешно удалены',
    data: {
      sensor_id: sensorId,
      deleted: true
    },
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Список групп пользователя
app.get('/backend/api/groups/user-groups-list.php', (req, res) => {
  const userId = req.query.user_id || 1;
  
  res.json({
    status: 200,
    message: 'Группы пользователя получены успешно',
    data: [
      {
        id: 1,
        name: 'Демонстрационная группа',
        description: 'Группа для демонстрации системы',
        site: 'Демо-склад',
        created_by: userId,
        member_count: 1,
        sensor_count: 6
      }
    ],
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Журнал событий
app.get('/backend/api/events/index.php', (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  
  // Генерируем демо-события
  const events = [];
  for (let i = 0; i < Math.min(limit, 5); i++) {
    events.push({
      id: i + 1,
      type: ['temperature', 'humidity', 'connection', 'alert'][i % 4],
      device_id: `SENSOR-00${i + 1}`,
      message: `Демо-событие ${i + 1}`,
      severity: ['info', 'warning', 'critical'][i % 3],
      timestamp: new Date(Date.now() - i * 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' ')
    });
  }
  
  res.json({
    status: 200,
    message: 'События получены успешно',
    data: events,
    total: events.length,
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Проверка поверки устройств
app.get('/backend/api/devices/verification-check.php', (req, res) => {
  const userId = req.query.user_id || 1;
  const days = parseInt(req.query.days) || 30;
  
  res.json({
    success: true,
    notifications_enabled: true,
    days_before: days,
    devices: [],
    count: 0,
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Планы этажей
// Получение планов этажей
app.get('/backend/api/floor-plans/index.php', (req, res) => {
  res.json({
    status: 200,
    message: 'Планы этажей получены',
    data: [], // В демо-режиме возвращаем пустой массив
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Сохранение плана этажа
app.post('/backend/api/floor-plans/index.php', (req, res) => {
  const { image_url, sensors, font_size } = req.body;
  
  console.log('💾 Сохранение плана этажа:', {
    hasImage: !!image_url,
    imageLength: image_url ? image_url.length : 0,
    sensorsCount: sensors ? sensors.length : 0,
    fontSize: font_size
  });
  
  // В демо-режиме просто подтверждаем сохранение
  // В реальном приложении здесь была бы запись в базу данных
  res.json({
    status: 200,
    message: 'План этажа успешно сохранен',
    data: {
      id: Date.now(), // Демо ID
      image_url: image_url || null,
      sensors: sensors || [],
      font_size: font_size || 14,
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Удаление плана этажа
app.delete('/backend/api/floor-plans/index.php', (req, res) => {
  // В демо-режиме просто подтверждаем удаление
  res.json({
    status: 200,
    message: 'План этажа успешно удален',
    data: null,
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Датчики пользователя
app.get('/backend/api/sensors/user-sensors.php', (req, res) => {
  const userId = req.query.user_id || 1;
  const sensors = getDemoSensors();
  
  res.json({
    status: 200,
    message: 'Датчики пользователя получены успешно',
    data: sensors,
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Функция обработки обновления устройства (используется для PUT и POST)
const handleUpdateDevice = (req, res) => {
  const deviceData = req.body;
  
  console.log('💾 Обновление устройства:', deviceData);
  
  // Проверяем наличие обязательных полей
  if (!deviceData.id && !deviceData.serial_number && !deviceData.device_id) {
    res.status(400).json({
      status: 400,
      message: 'Не указан ID устройства (id, serial_number или device_id)',
      timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    });
    return;
  }
  
  // Определяем идентификатор устройства (приоритет: device_id > serial_number > id)
  const deviceId = deviceData.device_id || deviceData.serial_number || deviceData.id?.toString();
  
  // Инициализируем хранилище, если оно пустое
  if (sensorsStorage.size === 0) {
    const baseSensors = getBaseDemoSensors();
    baseSensors.forEach(sensor => {
      sensorsStorage.set(sensor.device_id, { ...sensor });
    });
  }
  
  // Получаем текущие данные устройства из хранилища или создаем новый
  const existingSensor = sensorsStorage.get(deviceId) || {};
  
  // Обновляем данные устройства, сохраняя существующие значения для полей, которые не переданы
  const updatedSensor = {
    ...existingSensor,
    ...deviceData,
    id: deviceData.id || existingSensor.id || parseInt(deviceId.replace(/[^0-9]/g, '')) || 0,
    device_id: deviceData.device_id || existingSensor.device_id || deviceId,
    serial_number: deviceData.serial_number || existingSensor.serial_number || deviceId,
    device_name: deviceData.name || deviceData.device_name || existingSensor.device_name || `Датчик ${deviceId}`,
    device_type: deviceData.device_type || existingSensor.device_type || 'room_temperature',
    type: deviceData.device_type || deviceData.type || existingSensor.device_type || existingSensor.type || 'room_temperature',
    location: deviceData.location || existingSensor.location || '',
    temperature: existingSensor.temperature !== undefined ? existingSensor.temperature : (deviceData.temperature || 20),
    humidity: existingSensor.humidity !== undefined ? existingSensor.humidity : (deviceData.humidity || 50),
    status: deviceData.status || existingSensor.status || 'normal',
    is_connected: deviceData.is_connected !== undefined ? deviceData.is_connected : (existingSensor.is_connected !== undefined ? existingSensor.is_connected : true),
    battery_level: deviceData.battery_level !== undefined ? deviceData.battery_level : (existingSensor.battery_level !== undefined ? existingSensor.battery_level : 100),
    updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
    last_update: new Date().toISOString()
  };
  
  // Сохраняем обновленное устройство в хранилище
  sensorsStorage.set(deviceId, updatedSensor);
  
  console.log('✅ Устройство обновлено и сохранено в хранилище:', updatedSensor);
  
  res.json({
    status: 200,
    success: true,
    message: 'Устройство успешно обновлено',
    data: updatedSensor,
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
};

// Обновление устройства (PUT)
app.put('/backend/api/sensors/update-device.php', handleUpdateDevice);

// Обновление устройства (POST) - для совместимости
app.post('/backend/api/sensors/update-device.php', handleUpdateDevice);

// Создание отчета с учетом групп
app.post('/backend/api/reports/create-group-report.php', (req, res) => {
  const { user_id, report_type, start_date, end_date, sensor_id, zone } = req.body;
  const sensors = getDemoSensors();
  
  // Фильтруем датчики по выбранным критериям
  let filteredSensors = sensors;
  if (sensor_id && sensor_id !== 'all') {
    filteredSensors = sensors.filter(s => 
      s.id === parseInt(sensor_id) || 
      s.device_id === sensor_id ||
      s.device_id === `SENSOR-00${sensor_id}` ||
      s.device_id === `SENSOR-0${sensor_id}`
    );
  }
  if (zone && zone !== 'all') {
    filteredSensors = filteredSensors.filter(s => s.location === zone);
  }
  
  // Генерируем демо-данные для отчета
  const startTime = new Date(start_date);
  const endTime = new Date(end_date);
  const hoursDiff = Math.ceil((endTime.getTime() - startTime.getTime()) / (60 * 60 * 1000));
  const recordsCount = Math.max(10, Math.min(hoursDiff * filteredSensors.length, 1000));
  
  res.json({
    status: 200,
    message: 'Отчет успешно создан',
    data: {
      report_id: Date.now(),
      report_type: report_type || 'all',
      user_group: {
        group_name: 'Демонстрационная группа',
        group_id: 1
      },
      total_records: recordsCount,
      sensors_count: filteredSensors.length,
      period: {
        start_date: start_date,
        end_date: end_date
      }
    },
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Получение отчетов пользователя
app.get('/backend/api/reports/user-reports.php', (req, res) => {
  const userId = req.query.user_id || 1;
  const startDate = req.query.start_date;
  const endDate = req.query.end_date;
  const sensors = getDemoSensors();
  
  // Генерируем демо-отчеты для каждого датчика
  const reportData = sensors.slice(0, 3).map((sensor, index) => ({
    sensor_id: sensor.device_id,
    last_update: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toISOString()
  }));
  
  res.json({
    status: 200,
    message: 'Отчеты пользователя получены успешно',
    data: {
      access_level: 'group',
      user_group: {
        group_name: 'Демонстрационная группа',
        group_id: 1
      },
      available_sensors: sensors.map(s => s.device_id),
      report_data: reportData
    },
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Получение данных отчета
app.get('/backend/api/reports/data.php', (req, res) => {
  const reportType = req.query.type || 'all';
  const startDate = req.query.start_date;
  const endDate = req.query.end_date;
  const sensorId = req.query.sensor_id;
  const zone = req.query.zone;
  const sensors = getDemoSensors();
  
  // Фильтруем датчики
  let filteredSensors = sensors;
  if (sensorId && sensorId !== 'all') {
    filteredSensors = sensors.filter(s => 
      s.id === parseInt(sensorId) || 
      s.device_id === sensorId ||
      s.device_id === `SENSOR-00${sensorId}` ||
      s.device_id === `SENSOR-0${sensorId}`
    );
  }
  if (zone && zone !== 'all') {
    filteredSensors = filteredSensors.filter(s => s.location === zone);
  }
  
  // Генерируем демо-данные для отчета
  const startTime = new Date(startDate);
  const endTime = new Date(endDate);
  const hoursDiff = Math.ceil((endTime.getTime() - startTime.getTime()) / (60 * 60 * 1000));
  const pointsCount = Math.min(hoursDiff, 168); // Максимум 168 точек (7 дней по часу)
  
  const reportData = [];
  filteredSensors.forEach(sensor => {
    for (let i = 0; i < pointsCount; i++) {
      const timestamp = new Date(startTime.getTime() + (i * (endTime.getTime() - startTime.getTime()) / (pointsCount - 1 || 1)));
      const temp = parseFloat((sensor.temperature + (Math.random() - 0.5) * 2).toFixed(1));
      const hum = parseFloat((sensor.humidity + (Math.random() - 0.5) * 5).toFixed(1));
      
      // Определяем статус на основе пороговых значений для фармацевтического склада
      // Норма: температура 15-25°C, влажность 35-65% (стандартные условия хранения)
      // Предупреждение: температура 10-30°C или 2-35°C, влажность 30-70%
      // Критично: температура <2°C или >35°C, влажность <30% или >70%
      let status = 'Норма';
      if (temp < 15 || temp > 25 || hum < 35 || hum > 65) {
        if (temp < 2 || temp > 35 || hum < 30 || hum > 70) {
          status = 'Критично';
        } else {
          status = 'Предупреждение';
        }
      }
      
      reportData.push({
        'Дата и время': timestamp.toLocaleString('ru-RU'),
        'Датчик': sensor.device_id,
        'Название': sensor.device_name,
        'Расположение': sensor.location,
        'Температура (°C)': temp,
        'Влажность (%)': hum,
        'Норма': status,
        timestamp: timestamp.toISOString()
      });
    }
  });
  
  res.json({
    status: 200,
    message: 'Данные отчета получены успешно',
    data: reportData,
    total: reportData.length,
    timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Демо-сервер запущен на http://localhost:${PORT}`);
  console.log(`\n📝 Доступные учетные записи:`);
  console.log(`   👤 Администратор: admin / admin123 (роль: admin, полный доступ)`);
  console.log(`   👤 Оператор: operator / operator123 (роль: operator, управление устройствами)`);
  console.log(`   👤 Аудитор: auditor / auditor123 (роль: auditor, просмотр отчетов)`);
  console.log(`   👤 Наблюдатель: demo / demo123 (роль: viewer, только просмотр)`);
  console.log(`\n`);
});
