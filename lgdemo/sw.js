// Service Worker для обработки push уведомлений
// Фармацевтический склад - Система мониторинга

const CACHE_NAME = 'pharmacy-monitoring-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Установка');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Кэширование файлов');
        return cache.addAll(urlsToCache);
      })
  );
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Активация');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Удаление старого кэша', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Обработка push уведомлений
self.addEventListener('push', (event) => {
  console.log('Service Worker: Получено push уведомление');
  
  let notificationData = {
    title: 'Система мониторинга',
    body: 'Новое уведомление от системы',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    tag: 'pharmacy-monitoring',
    requireInteraction: true,
    actions: [
      {
        action: 'open',
        title: 'Открыть',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Закрыть',
        icon: '/icons/xmark.png'
      }
    ],
    data: {
      url: '/',
      timestamp: Date.now()
    }
  };

  // Парсинг данных из push события
  if (event.data) {
    try {
      const pushData = event.data.json();
      notificationData = {
        ...notificationData,
        ...pushData
      };
    } catch (e) {
      console.error('Service Worker: Ошибка парсинга push данных:', e);
      notificationData.body = event.data.text() || notificationData.body;
    }
  }

  // Показ уведомления
  event.waitUntil(
    self.registration.showNotification(notificationData.title, notificationData)
  );
});

// Обработка кликов по уведомлениям
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Клик по уведомлению');
  
  event.notification.close();

  if (event.action === 'close') {
    return;
  }

  // Открытие приложения
  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then((clientList) => {
      // Если приложение уже открыто, фокусируемся на нем
      for (const client of clientList) {
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      
      // Иначе открываем новое окно
      if (clients.openWindow) {
        const url = event.notification.data?.url || '/';
        return clients.openWindow(url);
      }
    })
  );
});

// Обработка закрытия уведомлений
self.addEventListener('notificationclose', (event) => {
  console.log('Service Worker: Уведомление закрыто');
  
  // Здесь можно отправить аналитику о закрытии уведомления
  if (event.notification.data) {
    console.log('Service Worker: Данные уведомления:', event.notification.data);
  }
});

// Обработка сообщений от основного приложения
self.addEventListener('message', (event) => {
  console.log('Service Worker: Получено сообщение:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Обработка fetch запросов (для кэширования)
self.addEventListener('fetch', (event) => {
  // Кэшируем только GET запросы
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Возвращаем кэшированную версию или загружаем из сети
        return response || fetch(event.request);
      })
  );
});

// Обработка ошибок
self.addEventListener('error', (event) => {
  console.error('Service Worker: Ошибка:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker: Необработанная ошибка Promise:', event.reason);
});

console.log('Service Worker: Загружен успешно');
