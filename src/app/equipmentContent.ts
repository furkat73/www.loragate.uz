/** Трёхъязычный контент страницы «Оборудование» */

export type Trilang = { ru: string; uz: string; en: string }

export const equipmentHero = {
  subtitle: {
    ru: 'Профессиональное оборудование для непрерывного контроля температуры и влажности. Датчики + шлюз + удобная платформа — всё работает как единая система.',
    uz: 'Harorat va namlikni uzluksiz nazorat qilish uchun professional uskunalar. Datchiklar + shlyuz + qulay platforma — hammasi yagona tizim sifatida ishlaydi.',
    en: 'Professional hardware for continuous temperature and humidity control. Sensors + gateway + convenient platform — everything works as one system.',
  } as Trilang,
  specsBtn: {
    ru: 'Запросить технические спецификации',
    uz: 'Texnik spetsifikatsiyalarni so‘rash',
    en: 'Request technical specifications',
  } as Trilang,
  consultBtn: {
    ru: 'Получить консультацию инженера',
    uz: 'Muhandis maslahatini olish',
    en: 'Get an engineer consultation',
  } as Trilang,
}

export const equipmentArch = {
  title: {
    ru: 'Как устроена система',
    uz: 'Tizim qanday tuzilgan',
    en: 'How the system is built',
  } as Trilang,
  text: {
    ru: 'Три простых уровня, которые закрывают объект любой сложности.',
    uz: 'Har qanday murakkablikdagi obyektni yopadigan uch oddiy daraja.',
    en: 'Three simple layers covering a facility of any complexity.',
  } as Trilang,
  nodes: [
    {
      name: { ru: 'Датчики', uz: 'Datchiklar', en: 'Sensors' },
      lines: {
        ru: ['Температура', 'Влажность'],
        uz: ['Harorat', 'Namlik'],
        en: ['Temperature', 'Humidity'],
      } as Record<string, string[]>,
    },
    {
      name: { ru: 'Шлюз LoRa/Wi-Fi', uz: 'LoRa/Wi-Fi shlyuzi', en: 'LoRa/Wi-Fi gateway' },
      lines: {
        ru: ['Сбор данных', 'Передача'],
        uz: ['Ma’lumot yig‘ish', 'Uzatish'],
        en: ['Data collection', 'Transmission'],
      } as Record<string, string[]>,
    },
    {
      name: { ru: 'Облако / Веб-платформа', uz: 'Bulut / Veb-platforma', en: 'Cloud / Web platform' },
      lines: {
        ru: ['Мониторинг 24/7', 'Отчёты и алерты'],
        uz: ['24/7 monitoring', 'Hisobotlar va alerlar'],
        en: ['24/7 monitoring', 'Reports and alerts'],
      } as Record<string, string[]>,
    },
  ],
  bullets: {
    ru: [
      'Датчики измеряют и передают данные по радиоканалу',
      'Шлюз собирает информацию со всех датчиков и отправляет в систему',
      'Вы видите всё на экране компьютера или телефона',
    ],
    uz: [
      'Datchiklar radiokanal orqali o‘lchaydi va uzatadi',
      'Shlyuz barcha datchiklardan ma’lumot yig‘ib tizimga yuboradi',
      'Hamma narsani kompyuter yoki telefon ekranida ko‘rasiz',
    ],
    en: [
      'Sensors measure and transmit over radio',
      'The gateway collects data from all sensors and sends it to the system',
      'You see everything on a computer or phone screen',
    ],
  } as Record<string, string[]>,
}

export const equipmentGateway = {
  title: {
    ru: 'Шлюз Lora Gate',
    uz: 'Lora Gate shlyuzi',
    en: 'Lora Gate gateway',
  } as Trilang,
  subtitle: {
    ru: 'Надёжный центр сбора данных',
    uz: 'Ma’lumot yig‘ishning ishonchli markazi',
    en: 'Reliable data collection hub',
  } as Trilang,
  specs: {
    ru: [
      'Поддержка LoRaWAN',
      'Подключение по Wi-Fi и Ethernet',
      'Устойчивый приём сигналов от датчиков',
      'Дальность связи с датчиками — до 300 метров (в зависимости от условий)',
      'Стабильная работа на объектах с металлическими стеллажами и холодильным оборудованием',
    ],
    uz: [
      'LoRaWAN qo‘llab-quvvatlash',
      'Wi-Fi va Ethernet orqali ulanish',
      'Datchiklardan barqaror signal qabul qilish',
      'Datchiklar bilan aloqa masofasi — 300 metrgacha (sharoitga qarab)',
      'Metall stellajlar va sovutish uskunalari bo‘lgan obyektlarda barqaror ishlash',
    ],
    en: [
      'LoRaWAN support',
      'Wi-Fi and Ethernet connectivity',
      'Stable signal reception from sensors',
      'Sensor link range up to 300 meters (depending on conditions)',
      'Stable operation around metal racks and refrigeration equipment',
    ],
  } as Record<string, string[]>,
  advantages: {
    ru: [
      'Один шлюз обслуживает множество датчиков',
      'Гибкое подключение к существующей сети',
      'Минимальное вмешательство в инфраструктуру объекта',
    ],
    uz: [
      'Bitta shlyuz ko‘plab datchiklarni xizmat qiladi',
      'Mavjud tarmoqqa moslashuvchan ulanish',
      'Obyekt infratuzilmasiga minimal aralashuv',
    ],
    en: [
      'One gateway serves many sensors',
      'Flexible connection to the existing network',
      'Minimal interference with facility infrastructure',
    ],
  } as Record<string, string[]>,
  cta: {
    ru: 'Скачать спецификацию шлюза',
    uz: 'Shlyuz spetsifikatsiyasini yuklab olish',
    en: 'Download gateway specs',
  } as Trilang,
}

export const equipmentSensors = {
  title: {
    ru: 'Датчики температуры и влажности',
    uz: 'Harorat va namlik datchiklari',
    en: 'Temperature and humidity sensors',
  } as Trilang,
  subtitle: {
    ru: 'Точные, автономные, беспроводные',
    uz: 'Aniq, avtonom, simsiz',
    en: 'Accurate, autonomous, wireless',
  } as Trilang,
  specs: {
    ru: [
      'Измерение температуры: от −40 °C до +125 °C',
      'Измерение влажности: от 0 % до 100 %',
      'Беспроводная передача данных (LoRa)',
      'Автономная работа от батареи — до 2 лет',
      'Надёжная связь со шлюзом на расстоянии до 300 м',
      'Простой монтаж без прокладки кабелей',
    ],
    uz: [
      'Harorat o‘lchash: −40 °C dan +125 °C gacha',
      'Namlik o‘lchash: 0 % dan 100 % gacha',
      'Simsiz ma’lumot uzatish (LoRa)',
      'Batareyadan avtonom ishlash — 2 yilgacha',
      '300 m gacha masofada shlyuz bilan ishonchli aloqa',
      'Kabel yotqizmasdan oddiy montaj',
    ],
    en: [
      'Temperature range: −40 °C to +125 °C',
      'Humidity range: 0% to 100%',
      'Wireless data transmission (LoRa)',
      'Battery autonomy up to 2 years',
      'Reliable gateway link up to 300 m',
      'Simple mounting with no cabling',
    ],
  } as Record<string, string[]>,
  advantages: {
    ru: [
      'Не требуют проводки',
      'Легко масштабируются (добавили точку — поставили датчик)',
      'Подходят для холодильников, морозильников, складов и рефрижераторов',
    ],
    uz: [
      'Sim tortish talab qilinmaydi',
      'Oson kengayadi (nuqta qo‘shildi — datchik o‘rnatildi)',
      'Muzlatgich, morozilnik, ombor va refrijeratorlarga mos',
    ],
    en: [
      'No wiring required',
      'Easily scalable (add a point — place a sensor)',
      'Fit fridges, freezers, warehouses and reefers',
    ],
  } as Record<string, string[]>,
  cta: {
    ru: 'Скачать спецификацию датчика',
    uz: 'Datchik spetsifikatsiyasini yuklab olish',
    en: 'Download sensor specs',
  } as Trilang,
}

export const equipmentPlatform = {
  title: {
    ru: 'Удобная платформа мониторинга',
    uz: 'Qulay monitoring platformasi',
    en: 'Convenient monitoring platform',
  } as Trilang,
  lead: {
    ru: 'Оборудование — только половина системы. Главное — то, что вы видите на экране.',
    uz: 'Uskuna — tizimning yarmi xolos. Asosiysi — ekranda ko‘rganingiz.',
    en: 'Hardware is only half the system. What matters is what you see on screen.',
  } as Trilang,
  items: {
    ru: [
      'Мониторинг всех точек в реальном времени',
      'Графики температуры и влажности',
      'Мгновенные уведомления (SMS / Telegram / Email)',
      'Автоматические отчёты в PDF и Excel',
      'История данных для проверок и валидации',
      'Доступ с компьютера и телефона',
    ],
    uz: [
      'Barcha nuqtalarni real vaqtda monitoring qilish',
      'Harorat va namlik grafiklari',
      'Tezkor xabarnomalar (SMS / Telegram / Email)',
      'PDF va Excel da avtomatik hisobotlar',
      'Tekshiruv va validatsiya uchun ma’lumotlar tarixi',
      'Kompyuter va telefondan kirish',
    ],
    en: [
      'Real-time monitoring of every point',
      'Temperature and humidity charts',
      'Instant notifications (SMS / Telegram / Email)',
      'Automatic PDF and Excel reports',
      'Data history for inspections and validation',
      'Access from computer and phone',
    ],
  } as Record<string, string[]>,
}

export const equipmentWhy = {
  title: {
    ru: 'Почему выбирают оборудование Lora Gate',
    uz: 'Nega Lora Gate uskunalarini tanlashadi',
    en: 'Why customers choose Lora Gate hardware',
  } as Trilang,
  items: {
    ru: [
      { h: 'Беспроводное', p: 'Не нужно тянуть кабели по складу' },
      { h: 'Долгая автономность', p: 'Датчики работают годами от батареи' },
      { h: 'Дальность', p: 'Уверенная связь даже на больших площадях' },
      { h: 'Точность', p: 'Данные, которым можно доверять при проверках' },
      { h: 'Масштабируемость', p: 'Легко добавить новые точки' },
      { h: 'Готовность к GxP', p: 'Данные защищены и подходят для валидации' },
    ],
    uz: [
      { h: 'Simsiz', p: 'Ombor bo‘ylab kabel tortish shart emas' },
      { h: 'Uzoq avtonomlik', p: 'Datchiklar batareyadan yillar davomida ishlaydi' },
      { h: 'Masofa', p: 'Katta maydonlarda ham ishonchli aloqa' },
      { h: 'Aniqlik', p: 'Tekshiruvlarda ishonish mumkin bo‘lgan ma’lumotlar' },
      { h: 'Masshtablanuvchanlik', p: 'Yangi nuqtalarni oson qo‘shish' },
      { h: 'GxP ga tayyorlik', p: 'Ma’lumotlar himoyalangan va validatsiyaga mos' },
    ],
    en: [
      { h: 'Wireless', p: 'No cables across the warehouse' },
      { h: 'Long autonomy', p: 'Sensors run for years on battery' },
      { h: 'Range', p: 'Solid link even across large areas' },
      { h: 'Accuracy', p: 'Data you can trust at inspections' },
      { h: 'Scalability', p: 'Easily add new points' },
      { h: 'GxP-ready', p: 'Protected data fit for validation' },
    ],
  } as Record<string, { h: string; p: string }[]>,
}

export const equipmentUsage = {
  title: {
    ru: 'Где применяется',
    uz: 'Qayerda qo‘llaniladi',
    en: 'Where it is used',
  } as Trilang,
  items: [
    { label: { ru: 'Фармацевтические склады', uz: 'Farmatsevtika omborlari', en: 'Pharmaceutical warehouses' }, to: '/pharma' },
    { label: { ru: 'Аптечные сети', uz: 'Dorixona tarmoqlari', en: 'Pharmacy chains' }, to: '/pharmacy' },
    { label: { ru: 'Пищевые склады и производство', uz: 'Oziq-ovqat omborlari va ishlab chiqarish', en: 'Food warehouses and production' }, to: '/food' },
    { label: { ru: 'Логистика и рефрижераторы', uz: 'Logistika va refrijeratorlar', en: 'Logistics and reefers' }, to: '/logistics' },
    { label: { ru: 'Холодильные и морозильные камеры', uz: 'Sovutgich va muzlatgich kameralari', en: 'Cold rooms and freezers' }, to: '/cases' },
  ] as { label: Trilang; to: string }[],
}

export const equipmentCta = {
  title: {
    ru: 'Хотите подобрать оборудование под ваш объект?',
    uz: 'Obyektingizga uskunani tanlashni xohlaysizmi?',
    en: 'Want hardware matched to your facility?',
  } as Trilang,
  desc: {
    ru: 'Инженер поможет рассчитать количество датчиков и шлюзов, учесть особенности помещения и дать рекомендации.',
    uz: 'Muhandis datchik va shlyuzlar sonini hisoblashda, xona xususiyatlarini hisobga olishda yordam beradi va tavsiyalar beradi.',
    en: 'An engineer will help calculate sensor and gateway counts, account for room specifics and give recommendations.',
  } as Trilang,
  specsBtn: {
    ru: 'Запросить технические спецификации',
    uz: 'Texnik spetsifikatsiyalarni so‘rash',
    en: 'Request technical specifications',
  } as Trilang,
  auditBtn: {
    ru: 'Получить бесплатный аудит объекта',
    uz: 'Obyektning bepul auditini olish',
    en: 'Get a free facility audit',
  } as Trilang,
}

export const equipmentFaq = {
  items: {
    ru: [
      { q: 'Сколько датчиков можно подключить к одному шлюзу?', a: 'Зависит от объекта. Обычно один шлюз уверенно обслуживает десятки датчиков.' },
      { q: 'Нужна ли прокладка кабелей?', a: 'Нет. Датчики беспроводные, шлюз подключается к существующей сети (Wi-Fi или Ethernet).' },
      { q: 'Как долго работают датчики от батареи?', a: 'До 2 лет в типичном режиме работы.' },
      { q: 'Можно ли использовать систему для валидации и GxP?', a: 'Да. Данные защищены, история сохраняется, отчёты формируются автоматически.' },
      { q: 'Можно ли получить подробные технические спецификации?', a: 'Да. Нажмите кнопку «Запросить технические спецификации» на этой странице — PDF-документ скачается сразу.' },
    ],
    uz: [
      { q: 'Bitta shlyuzga nechta datchik ulash mumkin?', a: 'Obyektga bog‘liq. Odatda bitta shlyuz o‘nlab datchiklarni ishonchli xizmat qiladi.' },
      { q: 'Kabel yotqizish kerakmi?', a: 'Yo‘q. Datchiklar simsiz, shlyuz mavjud tarmoqqa ulanadi (Wi-Fi yoki Ethernet).' },
      { q: 'Datchiklar batareyadan qancha ishlaydi?', a: 'Tipik ish rejimida 2 yilgacha.' },
      { q: 'Tizimni validatsiya va GxP uchun ishlatsa bo‘ladimi?', a: 'Ha. Ma’lumotlar himoyalangan, tarix saqlanadi, hisobotlar avtomatik shakllanadi.' },
      { q: 'Batafsil texnik spetsifikatsiyalarni olish mumkinmi?', a: 'Ha. Shu sahifadagi «Texnik spetsifikatsiyalarni so‘rash» tugmasini bosing — PDF hujjat darhol yuklab olinadi.' },
    ],
    en: [
      { q: 'How many sensors can one gateway handle?', a: 'Depends on the facility. Typically one gateway reliably serves dozens of sensors.' },
      { q: 'Is cabling required?', a: 'No. Sensors are wireless; the gateway connects to the existing network (Wi-Fi or Ethernet).' },
      { q: 'How long do sensors run on battery?', a: 'Up to 2 years in typical operation.' },
      { q: 'Can the system be used for validation and GxP?', a: 'Yes. Data is protected, history is stored, reports generate automatically.' },
      { q: 'Can we get detailed technical specifications?', a: 'Yes. Click “Request technical specifications” on this page — the PDF downloads immediately.' },
    ],
  } as Record<string, { q: string; a: string }[]>,
}
