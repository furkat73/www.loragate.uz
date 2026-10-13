/** Трёхъязычный контент страницы «Фармацевтический склад» */

export type Trilang = { ru: string; uz: string; en: string }

export const pharmaHero = {
  subtitle: {
    ru: 'GMP / GDP-контроль складов: автоматический учёт температуры и влажности, валидация и готовые документы для инспекций',
    uz: 'Omborlarning GMP / GDP nazorati: harorat va namlikning avtomatik hisobi, validatsiya va inspeksiyalar uchun tayyor hujjatlar',
    en: 'GMP / GDP warehouse control: automatic temperature and humidity logging, validation and inspection-ready documents',
  } as Trilang,
  primaryBtn: {
    ru: 'Пройти бесплатный аудит GxP',
    uz: 'Bepul GxP auditidan o‘tish',
    en: 'Get a free GxP audit',
  } as Trilang,
  secondaryBtn: {
    ru: 'Смотреть, как работает система',
    uz: 'Tizim qanday ishlashini ko‘rish',
    en: 'See how the system works',
  } as Trilang,
  perks: [
    {
      ru: 'Непрерывный мониторинг 24/7',
      uz: 'Uzluksiz 24/7 monitoring',
      en: 'Continuous 24/7 monitoring',
    },
    {
      ru: 'Отчёты для инспектора в 1 клик',
      uz: 'Inspektor uchun 1 klikda hisobotlar',
      en: 'Inspector reports in 1 click',
    },
    {
      ru: 'Полный пакет валидации (IQ / OQ / PQ)',
      uz: 'To‘liq validatsiya to‘plami (IQ / OQ / PQ)',
      en: 'Full validation package (IQ / OQ / PQ)',
    },
  ] as Trilang[],
}

export const pharmaBenefits = {
  titleA: {
    ru: 'Автоматизация контроля среды по нормативам GMP.',
    uz: 'GMP normalari bo‘yicha muhit nazoratini avtomatlashtirish.',
    en: 'Automated environmental control per GMP norms.',
  } as Trilang,
  titleB: {
    ru: 'Снижение рисков брака продукции.',
    uz: 'Mahsulot nuqsoni xavfini kamaytirish.',
    en: 'Reduced product defect risks.',
  } as Trilang,
  items: {
    ru: [
      'Соответствие GDP / GMP стандартам',
      'Автоматические отчёты для аудита и инспекций',
      'Снижение потерь продукции из-за отклонений температуры',
      'Поддержание качества продукции в соответствии с требованиями',
      'Готовый пакет валидационных документов',
      'Картирование склада и устранение слепых зон',
    ],
    uz: [
      'GDP / GMP standartlariga muvofiqlik',
      'Audit va inspeksiyalar uchun avtomatik hisobotlar',
      'Harorat og‘ishlari tufayli mahsulot yo‘qotishlarini kamaytirish',
      'Talablarga muvofiq mahsulot sifatini saqlash',
      'Tayyor validatsiya hujjatlari to‘plami',
      'Omborni kartalash va ko‘r joylarni bartaraf etish',
    ],
    en: [
      'GDP / GMP standards compliance',
      'Automatic reports for audits and inspections',
      'Reduced product losses from temperature deviations',
      'Maintained product quality per requirements',
      'Ready validation document package',
      'Warehouse mapping and blind-spot elimination',
    ],
  } as Record<string, string[]>,
  numbers: [
    { value: '99,9 %', label: { ru: 'доступность данных', uz: 'ma’lumotlar mavjudligi', en: 'data availability' } },
    { value: '≤ 5 мин', label: { ru: 'время реакции на отклонение', uz: 'og‘ishga reaksiya vaqti', en: 'deviation response time' } },
    { value: '1 клик', label: { ru: 'готовый отчёт для инспектора', uz: 'inspektor uchun tayyor hisobot', en: 'inspector-ready report' } },
  ] as { value: string; label: Trilang }[],
}

export const pharmaFeatures = {
  title: {
    ru: 'Всё, что нужно фармскладу для прохождения инспекций',
    uz: 'Inspeksiyalardan o‘tish uchun farmomborga kerak bo‘lgan hamma narsa',
    en: 'Everything a pharma warehouse needs to pass inspections',
  } as Trilang,
  items: {
    ru: [
      'Непрерывный мониторинг температуры и влажности с записью каждые 1–5 минут',
      'Мгновенные оповещения (SMS, Telegram, Email, звонок)',
      'Защита данных от изменений (аудит-трейл)',
      'Автоматическое формирование отчётов за любой период',
      'Температурное картирование склада',
      'Интеграция с существующими системами (по необходимости)',
      'Облачный доступ + локальное хранение данных',
    ],
    uz: [
      'Harorat va namlikni har 1–5 daqiqada yozuv bilan uzluksiz monitoring qilish',
      'Tezkor ogohlantirishlar (SMS, Telegram, Email, qo‘ng‘iroq)',
      'Ma’lumotlarni o‘zgartirishdan himoya qilish (audit-trail)',
      'Istalgan davr uchun avtomatik hisobotlar',
      'Omborni harorat kartalash',
      'Mavjud tizimlar bilan integratsiya (zarurat bo‘yicha)',
      'Bulutli kirish + lokal ma’lumot saqlash',
    ],
    en: [
      'Continuous temperature and humidity monitoring with 1–5 minute logging',
      'Instant alerts (SMS, Telegram, Email, call)',
      'Tamper-proof data (audit trail)',
      'Automatic reports for any period',
      'Warehouse temperature mapping',
      'Integration with existing systems (if needed)',
      'Cloud access + local data storage',
    ],
  } as Record<string, string[]>,
}

export const pharmaDocs = {
  title: {
    ru: 'Полный пакет документов под GxP',
    uz: 'GxP uchun to‘liq hujjatlar to‘plami',
    en: 'Full GxP document package',
  } as Trilang,
  text: {
    ru: 'Мы разрабатываем и внедряем полный комплект валидационной документации, который принимают инспекторы:',
    uz: 'Inspektorlar qabul qiladigan validatsiya hujjatlarining to‘liq to‘plamini ishlab chiqamiz va joriy qilamiz:',
    en: 'We develop and deploy the full validation documentation package that inspectors accept:',
  } as Trilang,
  items: [
    { code: 'URS', name: { ru: 'User Requirement Specification', uz: 'User Requirement Specification', en: 'User Requirement Specification' } },
    { code: 'DQ', name: { ru: 'Квалификация проекта', uz: 'Loyiha malakasi', en: 'Design qualification' } },
    { code: 'IQ', name: { ru: 'Квалификация монтажа', uz: 'Montaj malakasi', en: 'Installation qualification' } },
    { code: 'OQ', name: { ru: 'Квалификация функционирования', uz: 'Funksionallash malakasi', en: 'Operational qualification' } },
    { code: 'PQ', name: { ru: 'Квалификация эксплуатации', uz: 'Ekspluatatsiya malakasi', en: 'Performance qualification' } },
    { code: 'SOP', name: { ru: 'СОП по эксплуатации и калибровке', uz: 'Ekspluatatsiya va kalibrlash bo‘yicha SOP', en: 'Operation and calibration SOPs' } },
    { code: 'MAP', name: { ru: 'Протоколы температурного картирования', uz: 'Harorat kartalash protokollari', en: 'Temperature mapping protocols' } },
  ] as { code: string; name: Trilang }[],
  orderBtn: {
    ru: 'Заказать разработку документов',
    uz: 'Hujjatlarni ishlab chiqishni buyurtma qilish',
    en: 'Order document development',
  } as Trilang,
}

export const pharmaEquipment = {
  title: {
    ru: 'Оборудование Lora Gate для фармацевтических складов',
    uz: 'Farmatsevtika omborlari uchun Lora Gate uskunalari',
    en: 'Lora Gate hardware for pharmaceutical warehouses',
  } as Trilang,
  moreBtn: {
    ru: 'Подробнее',
    uz: 'Batafsil',
    en: 'Learn more',
  } as Trilang,
  cards: [
    {
      name: { ru: 'Датчик температуры и влажности', uz: 'Harorat va namlik datchigi', en: 'Temperature and humidity sensor' },
      specs: {
        ru: ['Высокая точность измерений', 'Длительная автономность', 'Защита корпуса для складских условий'],
        uz: ['Yuqori o‘lchov aniqligi', 'Uzoq avtonomlik', 'Ombor sharoitlari uchun himoyalangan korpus'],
        en: ['High measurement accuracy', 'Long battery autonomy', 'Warehouse-grade rugged housing'],
      } as Record<string, string[]>,
    },
    {
      name: { ru: 'Шлюз / концентратор', uz: 'Shlyuz / konsentrator', en: 'Gateway / concentrator' },
      specs: {
        ru: ['Надёжная передача данных', 'Поддержка большого количества датчиков', 'Резервирование связи'],
        uz: ['Ishonchli ma’lumot uzatish', 'Ko‘plab datchiklarni qo‘llab-quvvatlash', 'Aloqani zaxiralash'],
        en: ['Reliable data transmission', 'Support for many sensors', 'Connection redundancy'],
      } as Record<string, string[]>,
    },
    {
      name: { ru: 'Программное обеспечение / облачная платформа', uz: 'Dasturiy ta’minot / bulut platforma', en: 'Software / cloud platform' },
      specs: {
        ru: ['Удобный интерфейс мониторинга', 'Автоматические отчёты', 'Разграничение прав доступа'],
        uz: ['Qulay monitoring interfeysi', 'Avtomatik hisobotlar', 'Kirish huquqlarini ajratish'],
        en: ['Convenient monitoring interface', 'Automatic reports', 'Role-based access control'],
      } as Record<string, string[]>,
    },
  ],
}

export const pharmaResults = {
  title: {
    ru: 'Результаты внедрения',
    uz: 'Joriy qilish natijalari',
    en: 'Deployment results',
  } as Trilang,
  proof: {
    ru: 'Уже провели более 80 аудитов GxP',
    uz: '80 dan ortiq GxP auditini o‘tkazdik',
    en: '80+ GxP audits already completed',
  } as Trilang,
  clientLabel: { ru: 'Клиент', uz: 'Mijoz', en: 'Client' } as Trilang,
  taskLabel: { ru: 'Задача', uz: 'Vazifa', en: 'Challenge' } as Trilang,
  resultLabel: { ru: 'Результат', uz: 'Natija', en: 'Result' } as Trilang,
  client: {
    ru: 'Фармацевтический дистрибьютор',
    uz: 'Farmatsevtika distribyutori',
    en: 'Pharmaceutical distributor',
  } as Trilang,
  task: {
    ru: 'Подготовка к инспекции GDP',
    uz: 'GDP inspeksiyasiga tayyorgarlik',
    en: 'Preparing for a GDP inspection',
  } as Trilang,
  result: {
    ru: 'Полный пакет валидации + устранение слепых зон за 14 дней',
    uz: '14 kun ichida to‘liq validatsiya to‘plami + ko‘r joylarni bartaraf etish',
    en: 'Full validation package + blind-spot elimination in 14 days',
  } as Trilang,
  allCases: {
    ru: 'Смотреть все кейсы',
    uz: 'Barcha keyslarni ko‘rish',
    en: 'View all cases',
  } as Trilang,
}

export const pharmaMeasurable = {
  title: {
    ru: 'Измеримый результат',
    uz: 'O‘lchanadigan natija',
    en: 'Measurable results',
  } as Trilang,
  stats: [
    { value: '99,9 %', label: { ru: 'Гарантия uptime системы', uz: 'Tizim uptime kafolati', en: 'System uptime guarantee' } },
    { value: '≤ 5 мин', label: { ru: 'Реакция на отклонения', uz: 'Og‘ishga reaksiya', en: 'Deviation response' } },
    { value: '1 клик', label: { ru: 'Доступ к отчётам и статусам', uz: 'Hisobot va statuslarga kirish', en: 'Reports & status access' } },
  ] as { value: string; label: Trilang }[],
}

export const pharmaValidationMini = {
  title: {
    ru: 'Валидационные документы',
    uz: 'Validatsiya hujjatlari',
    en: 'Validation documents',
  } as Trilang,
  rows: [
    { code: 'URS', name: { ru: 'Требования пользователя', uz: 'User talablari', en: 'User Requirements Specification' } },
    { code: 'IQ', name: { ru: 'Квалификация монтажа', uz: 'Montaj malakasi', en: 'Installation Qualification' } },
    { code: 'OQ', name: { ru: 'Квалификация функционирования', uz: 'Funksionallash malakasi', en: 'Operational Qualification' } },
    { code: 'PQ', name: { ru: 'Квалификация эксплуатации', uz: 'Ekspluatatsiya malakasi', en: 'Performance Qualification' } },
  ] as { code: string; name: Trilang }[],
  moreBtn: {
    ru: 'Состав документов и примеры',
    uz: 'Hujjatlar tarkibi va namunalar',
    en: 'Documents and samples',
  } as Trilang,
}

export const pharmaAdvantagesTitle = {
  ru: 'Преимущества Lora Gate',
  uz: 'Lora Gate afzalliklari',
  en: 'Lora Gate advantages',
} as Trilang

export const pharmaFaq = {
  title: {
    ru: 'Частые вопросы',
    uz: 'Ko‘p so‘raladigan savollar',
    en: 'Frequently asked questions',
  } as Trilang,
  items: {
    ru: [
      { q: 'Подходит ли система для требований GDP и GMP?', a: 'Да. Система обеспечивает непрерывный мониторинг, защиту данных и формирование отчётов, необходимых для соответствия GDP и GMP.' },
      { q: 'Сколько времени занимает внедрение на складе?', a: 'В среднем от 3 до 10 рабочих дней в зависимости от площади и количества зон.' },
      { q: 'Нужна ли валидация при установке?', a: 'Да. Мы предоставляем полный пакет документов: URS, IQ, OQ, PQ и протоколы картирования.' },
      { q: 'Можно ли получить отчёты в формате, который принимают инспекторы?', a: 'Да. Отчёты формируются в PDF и Excel с графиками и таблицами за любой период.' },
      { q: 'Что входит в бесплатный аудит?', a: 'Выезд инженера, замер сигнала, поиск слепых зон и рекомендация по расстановке датчиков. Без обязательств.' },
    ],
    uz: [
      { q: 'Tizim GDP va GMP talablariga mos keladimi?', a: 'Ha. Tizim GDP va GMP muvofiqligi uchun zarur uzluksiz monitoring, ma’lumotlar himoyasi va hisobotlarni ta’minlaydi.' },
      { q: 'Omborda joriy qilish qancha vaqt oladi?', a: 'O‘rtacha maydon va zonalar soniga qarab 3 kundan 10 ish kunigacha.' },
      { q: 'O‘rnatishda validatsiya kerakmi?', a: 'Ha. Biz to‘liq hujjatlar to‘plamini beramiz: URS, IQ, OQ, PQ va kartalash protokollari.' },
      { q: 'Inspektorlar qabul qiladigan formatda hisobot olish mumkinmi?', a: 'Ha. Hisobotlar istalgan davr uchun grafik va jadvallar bilan PDF va Excel da shakllanadi.' },
      { q: 'Bepul audit nimalarni o‘z ichiga oladi?', a: 'Muhandis chiqishi, signal o‘lchash, ko‘r joylarni qidirish va datchiklarni joylashtirish bo‘yicha tavsiya. Majburiyatsiz.' },
    ],
    en: [
      { q: 'Does the system meet GDP and GMP requirements?', a: 'Yes. The system provides continuous monitoring, data protection and reporting required for GDP and GMP compliance.' },
      { q: 'How long does warehouse deployment take?', a: 'On average 3 to 10 business days depending on the area and number of zones.' },
      { q: 'Is validation required on installation?', a: 'Yes. We provide the full document package: URS, IQ, OQ, PQ and mapping protocols.' },
      { q: 'Can we get reports in an inspector-friendly format?', a: 'Yes. Reports come in PDF and Excel with charts and tables for any period.' },
      { q: 'What is included in the free audit?', a: 'Engineer visit, signal measurement, blind-spot search and sensor placement recommendations. No obligations.' },
    ],
  } as Record<string, { q: string; a: string }[]>,
}
