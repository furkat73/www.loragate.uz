# Lora Gate — исходники сайта

Восстановленный исходный код лендинга [loragate.uz](https://loragate.uz) из production-сборки.

## Стек

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- lucide-react
- i18n: русский / узбекский

## Запуск

```bash
cd loragate-src
npm install
npm run dev
```

Сборка:

```bash
npm run build
```

Результат в `loragate-src/dist/`. На хостинг дополнительно скопируйте из корня сайта:

- `api/` — PHP отправка формы
- `lgdemo/` — демо-приложение (или используйте `http://lgdemo.loragate.uz/`)
- `.htaccess` при необходимости

Картинки подключены через junction `public/images` → `../images`.

## Структура

```
src/
  app/
    App.tsx
    components/   # секции лендинга
  i18n/           # переводы RU/UZ
  lib/site.ts     # контакты, API, аналитика
```
