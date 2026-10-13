/** Трёхъязычный контент страницы «Логистика и транспорт» */

export type Trilang = { ru: string; uz: string; en: string }

export const logisticsHero = {
  subtitle: {
    ru: 'Контроль холодовой цепи: склады, транспорт, перевалка — без слепых зон. Вы видите, что происходит с грузом в пути, а не узнаёте об этом на выгрузке.',
    uz: 'Sovuq zanjir nazorati: omborlar, transport, qayta yuklash — ko‘r joylarsiz. Yuk bilan yo‘lda nima bo‘layotganini ko‘rasiz, tushirishda bilib qolmaysiz.',
    en: 'Cold chain control: warehouses, transport, transshipment — with no blind spots. You see what happens to cargo en route instead of learning about it at unloading.',
  } as Trilang,
  primaryBtn: {
    ru: 'Получить бесплатный аудит цепи',
    uz: 'Zanjirning bepul auditini olish',
    en: 'Get a free chain audit',
  } as Trilang,
  secondaryBtn: {
    ru: 'Посмотреть, как выглядит контроль рейса',
    uz: 'Reys nazorati qanday ko‘rinishini ko‘rish',
    en: 'See what trip monitoring looks like',
  } as Trilang,
  perks: [
    {
      ru: 'Температура в реальном времени',
      uz: 'Real vaqtda harorat',
      en: 'Real-time temperature',
    },
    {
      ru: 'Уведомления водителю и диспетчеру',
      uz: 'Haydovchi va dispetcherga xabarnomalar',
      en: 'Alerts to driver and dispatcher',
    },
    {
      ru: 'Готовый отчёт по каждому рейсу',
      uz: 'Har bir reys bo‘yicha tayyor hisobot',
      en: 'Ready report for every trip',
    },
  ] as Trilang[],
}

export const logisticsPains = {
  title: {
    ru: 'Узнаёте свою логистику?',
    uz: 'Logistikangizni taniysizmi?',
    en: 'Recognize your logistics?',
  } as Trilang,
  items: {
    ru: [
      { title: 'Слепые зоны в пути', desc: 'Между погрузкой и выгрузкой — чёрный ящик. Неизвестно, что происходило с грузом: перегрев, разморозка, долгая остановка с открытыми дверями.' },
      { title: 'Споры о виновнике порчи', desc: 'Груз пришёл повреждённым. Кто виноват — склад, перевозчик или перевалка? Без непрерывных данных доказать почти невозможно.' },
      { title: 'Требования GDP к перевозке', desc: 'Фармгрузы требуют документированного контроля температуры в пути. Бумажные журналы и разовые логгеры всё чаще не принимаются.' },
      { title: 'Разрозненные данные', desc: 'Логгеры-флешки снимаются вручную, данные сводятся в таблицы днями. К моменту, когда всё собрали, реакция уже бесполезна.' },
    ],
    uz: [
      { title: 'Yo‘ldagi ko‘r joylar', desc: 'Yuklash va tushirish orasida — qora quti. Yuk bilan nima bo‘lgani noma’lum: qizish, erish, eshiklar ochiq uzoq to‘xtash.' },
      { title: 'Buzilish aybdori bo‘yicha nizolar', desc: 'Yuk shikastlangan holda keldi. Kim aybdor — ombor, tashuvchi yoki qayta yuklash? Uzluksiz ma’lumotlarsiz isbotlash deyarli imkonsiz.' },
      { title: 'Tashishga GDP talablari', desc: 'Farm yuklar yo‘lda haroratning hujjatlashtirilgan nazoratini talab qiladi. Qog‘oz jurnallar va bir martalik loggerlar tobora qabul qilinmayapti.' },
      { title: 'Tarqoq ma’lumotlar', desc: 'Logger-fleshkalar qo‘lda olinadi, ma’lumotlar kunlab jadvallarga kiritiladi. Hamma narsa yig‘ilgunga qadar reaksiya foydasiz.' },
    ],
    en: [
      { title: 'Blind spots en route', desc: 'Between loading and unloading — a black box. Unknown what happened to the cargo: overheating, thawing, a long stop with open doors.' },
      { title: 'Disputes over who is at fault', desc: 'Cargo arrived damaged. Who is to blame — warehouse, carrier or transshipment? Nearly impossible to prove without continuous data.' },
      { title: 'GDP transport requirements', desc: 'Pharma cargo requires documented in-transit temperature control. Paper logs and one-off loggers are increasingly rejected.' },
      { title: 'Scattered data', desc: 'Logger flash drives are collected manually, data tabulated over days. By the time it is assembled, reacting is pointless.' },
    ],
  } as Record<string, { title: string; desc: string }[]>,
}

export const logisticsSolutions = {
  title: {
    ru: 'Как мы убираем слепые зоны',
    uz: 'Ko‘r joylarni qanday yo‘qotamiz',
    en: 'How we eliminate blind spots',
  } as Trilang,
  items: {
    ru: [
      { title: 'Цепь под контролем', desc: 'Склады, рефрижераторы и перевалка — единая картина в реальном времени. Вы видите весь путь груза, а не отдельные куски.' },
      { title: 'Доказательная база', desc: 'Непрерывный трек температуры груза — сильный аргумент в спорах с клиентом, страховой и водителем.' },
      { title: 'Автоотчёты по рейсам', desc: 'Отчёт по каждому рейсу и клиенту формируется автоматически. Не нужно ничего сводить вручную.' },
      { title: 'Уведомления в пути', desc: 'Водитель и диспетчер узнают об отклонении сразу, а не на выгрузке, когда уже поздно.' },
    ],
    uz: [
      { title: 'Zanjir nazoratda', desc: 'Omborlar, refrijeratorlar va qayta yuklash — real vaqtda yagona manzara. Yukning butun yo‘lini ko‘rasiz, alohida parchalarni emas.' },
      { title: 'Isbot bazasi', desc: 'Yuk haroratining uzluksiz treki — mijoz, sug‘urta va haydovchi bilan nizolarda kuchli dalil.' },
      { title: 'Reyslar bo‘yicha avtohisobotlar', desc: 'Har bir reys va mijoz bo‘yicha hisobot avtomatik shakllanadi. Qo‘lda hech narsa jamlash shart emas.' },
      { title: 'Yo‘lda bildirishnomalar', desc: 'Haydovchi va dispetcher chetga chiqishni darhol biladi — kech bo‘lgan tushirishda emas.' },
    ],
    en: [
      { title: 'Chain under control', desc: 'Warehouses, reefers and transshipment — one real-time picture. You see the cargo’s entire journey, not fragments.' },
      { title: 'Evidence base', desc: 'A continuous cargo temperature track — a strong argument in disputes with clients, insurers and drivers.' },
      { title: 'Auto-reports per trip', desc: 'A report per trip and client is generated automatically. Nothing to compile by hand.' },
      { title: 'En-route notifications', desc: 'Driver and dispatcher learn of deviations at once — not at unloading, when it is too late.' },
    ],
  } as Record<string, { title: string; desc: string }[]>,
}

export const logisticsBenefits = {
  title: {
    ru: 'Стабильный мониторинг температурных режимов на всех этапах логистики',
    uz: 'Logistikaning barcha bosqichlarida harorat rejimlarining barqaror monitoringi',
    en: 'Stable temperature monitoring at every logistics stage',
  } as Trilang,
  items: {
    ru: [
      'Контроль всей холодовой цепи',
      'Автоматические отчёты для инспекций и клиентов',
      'Мгновенные уведомления о нарушениях',
    ],
    uz: [
      'Butun sovuq zanjir nazorati',
      'Inspeksiyalar va mijozlar uchun avtomatik hisobotlar',
      'Buzilishlar haqida tezkor xabarnomalar',
    ],
    en: [
      'Full cold chain control',
      'Automatic reports for inspectors and clients',
      'Instant violation notifications',
    ],
  } as Record<string, string[]>,
  results: {
    ru: [
      'Больше не гадаете, что было с грузом в пути',
      'Споры о порче решаются данными, а не словами',
      'Диспетчер реагирует во время рейса, а не после',
      'Клиенты получают прозрачный отчёт без задержек',
    ],
    uz: [
      'Yuk bilan yo‘lda nima bo‘lganini taxmin qilmaysiz',
      'Buzilish bo‘yicha nizolar so‘z bilan emas, ma’lumotlar bilan hal qilinadi',
      'Dispetcher reysdan keyin emas, reys paytida reaksiya qiladi',
      'Mijozlar shaffof hisobotni kechikishsiz oladi',
    ],
    en: [
      'No more guessing what happened to cargo en route',
      'Spoilage disputes settled with data, not words',
      'Dispatchers react during the trip, not after',
      'Clients get a transparent report without delays',
    ],
  } as Record<string, string[]>,
}

export const logisticsResults = {
  ru: [
    'Больше не гадаете, что было с грузом в пути',
    'Споры о порче решаются данными, а не словами',
    'Диспетчер реагирует во время рейса, а не после',
    'Клиенты получают прозрачный отчёт без задержек',
  ],
  uz: [
    'Yuk bilan yo‘lda nima bo‘lganini taxmin qilmaysiz',
    'Buzilish bo‘yicha nizolar so‘z bilan emas, ma’lumotlar bilan hal qilinadi',
    'Dispetcher reysdan keyin emas, reys paytida reaksiya qiladi',
    'Mijozlar shaffof hisobotni kechikishsiz oladi',
  ],
  en: [
    'No more guessing what happened to cargo en route',
    'Spoilage disputes settled with data, not words',
    'Dispatchers react during the trip, not after',
    'Clients get a transparent report without delays',
  ],
} as Record<string, string[]>

export const logisticsNumbers = [  { value: { ru: 'В пути', uz: 'Yo‘lda', en: 'En route' }, label: { ru: 'а не на выгрузке', uz: 'tushirishda emas', en: 'not at unloading' } },
  { value: { ru: '1 отчёт', uz: '1 hisobot', en: '1 report' }, label: { ru: 'вместо дней сведения таблиц', uz: 'kunlab jadval yig‘ish o‘rniga', en: 'instead of days of spreadsheets' } },
  { value: { ru: 'Вся цепь', uz: 'Butun zanjir', en: 'Entire chain' }, label: { ru: 'в одном окне', uz: 'bitta oynada', en: 'in one window' } },
] as { value: Trilang; label: Trilang }[]

export const logisticsChain = {
  title: {
    ru: 'Склад → Перевалка → Транспорт → Склад',
    uz: 'Ombor → Qayta yuklash → Transport → Ombor',
    en: 'Warehouse → Transshipment → Transport → Warehouse',
  } as Trilang,
  text: {
    ru: 'Одна система закрывает все этапы. Вы видите, где груз находится сейчас и какая температура была на каждом участке пути.',
    uz: 'Bitta tizim barcha bosqichlarni yopadi. Yuk hozir qayerdaligini va yo‘lning har bir qismida harorat qanday bo‘lganini ko‘rasiz.',
    en: 'One system covers every stage. You see where the cargo is now and what the temperature was on each leg of the journey.',
  } as Trilang,
  steps: [
    { icon: 'warehouse', label: { ru: 'Склад отгрузки', uz: 'Yuklash ombori', en: 'Loading warehouse' } },
    { icon: 'loading', label: { ru: 'Погрузка', uz: 'Yuklash', en: 'Loading' } },
    { icon: 'reefer', label: { ru: 'Рефрижератор на маршруте', uz: 'Marshrutdagi refrijerator', en: 'Reefer en route' } },
    { icon: 'transfer', label: { ru: 'Перевалка', uz: 'Qayta yuklash', en: 'Transshipment' } },
    { icon: 'warehouse', label: { ru: 'Склад назначения', uz: 'Belgilangan ombor', en: 'Destination warehouse' } },
  ] as { icon: string; label: Trilang }[],
}

export const logisticsEvidence = {
  title: {
    ru: 'Когда есть данные — спорить легче',
    uz: 'Ma’lumot bo‘lsa — bahslashish oson',
    en: 'With data, disputes get easier',
  } as Trilang,
  text: {
    ru: 'Непрерывный трек температуры — это не просто график. Это документ, который можно показать клиенту, страховой или проверяющему.',
    uz: 'Haroratning uzluksiz treki — shunchaki grafik emas. Bu mijoz, sug‘urta yoki tekshiruvchiga ko‘rsatish mumkin bo‘lgan hujjat.',
    en: 'A continuous temperature track is not just a chart. It is a document you can show a client, an insurer or an inspector.',
  } as Trilang,
  items: [
    {
      ru: 'Понятно, на каком участке произошёл сбой',
      uz: 'Nosozlik qaysi uchastkada bo‘lgani tushunarli',
      en: 'Clear which leg the failure happened on',
    },
    {
      ru: 'Легче защитить свою позицию',
      uz: 'O‘z pozitsiyangizni himoya qilish osonroq',
      en: 'Easier to defend your position',
    },
    {
      ru: 'Меньше затяжных разборов и взаимных обвинений',
      uz: 'Cho‘zilgan muhokamalar va o‘zaro ayblovlar kamroq',
      en: 'Fewer drawn-out disputes and mutual accusations',
    },
  ] as Trilang[],
}

export const logisticsGdp = {
  title: {
    ru: 'Готовы к требованиям GDP',
    uz: 'GDP talablariga tayyormiz',
    en: 'Ready for GDP requirements',
  } as Trilang,
  text: {
    ru: 'Для фармацевтических грузов документированный контроль температуры в пути — обязательное требование. Система автоматически собирает данные и формирует отчёты, которые можно предъявлять.',
    uz: 'Farmatsevtika yuklari uchun yo‘lda haroratning hujjatlashtirilgan nazorati — majburiy talab. Tizim ma’lumotlarni avtomatik yig‘adi va taqdim etish mumkin bo‘lgan hisobotlarni shakllantiradi.',
    en: 'For pharmaceutical cargo, documented in-transit temperature control is mandatory. The system automatically collects data and builds presentable reports.',
  } as Trilang,
  points: {
    ru: ['Непрерывная запись температуры в пути', 'Отчёты, готовые к предъявлению', 'Документы для GDP-инспекций'],
    uz: ['Yo‘lda haroratning uzluksiz yozuvi', 'Taqdim etishga tayyor hisobotlar', 'GDP inspeksiyalari uchun hujjatlar'],
    en: ['Continuous in-transit temperature logging', 'Presentation-ready reports', 'Documents for GDP inspections'],
  } as Record<string, string[]>,
  cta: {
    ru: 'Получить консультацию по GDP',
    uz: 'GDP bo‘yicha maslahat olish',
    en: 'Get a GDP consultation',
  } as Trilang,
}

export const logisticsTrip = {
  title: {
    ru: 'Рейс под контролем — от погрузки до выгрузки',
    uz: 'Reys nazoratda — yuklashdan tushirishgacha',
    en: 'Trip under control — from loading to unloading',
  } as Trilang,
  text: {
    ru: 'Температура, маршрут, отклонения, статус дверей (если подключено). Всё в одном окне для диспетчера и ответственного за груз.',
    uz: 'Harorat, marshrut, og‘ishlar, eshiklar statusi (ulangan bo‘lsa). Dispetcher va yuk uchun mas’ul uchun hammasi bitta oynada.',
    en: 'Temperature, route, deviations, door status (if connected). All in one window for the dispatcher and cargo owner.',
  } as Trilang,
  tripNo: {
    ru: 'Рейс A-214 · Ташкент → Самарканд',
    uz: 'A-214 reysi · Toshkent → Samarqand',
    en: 'Trip A-214 · Tashkent → Samarkand',
  } as Trilang,
  status: {
    ru: 'в пути',
    uz: 'yo‘lda',
    en: 'en route',
  } as Trilang,
  eventsTitle: {
    ru: 'События рейса',
    uz: 'Reys voqealari',
    en: 'Trip events',
  } as Trilang,
  events: {
    ru: [
      { time: '09:12', text: 'Погрузка завершена, двери закрыты' },
      { time: '11:47', text: 'Кратковременное превышение +8,4 °C — норма' },
      { time: '13:05', text: 'Остановка 12 мин, двери закрыты' },
    ],
    uz: [
      { time: '09:12', text: 'Yuklash yakunlandi, eshiklar yopildi' },
      { time: '11:47', text: '+8,4 °C qisqa oshish — norma' },
      { time: '13:05', text: '12 daqiqa to‘xtash, eshiklar yopiq' },
    ],
    en: [
      { time: '09:12', text: 'Loading complete, doors closed' },
      { time: '11:47', text: 'Brief exceedance +8.4 °C — normal' },
      { time: '13:05', text: '12-min stop, doors closed' },
    ],
  } as Record<string, { time: string; text: string }[]>,
}

export const logisticsCta = {
  title: {
    ru: 'Хотите убрать слепые зоны в своей холодовой цепи?',
    uz: 'Sovuq zanjiringizdagi ko‘r joylarni yo‘qotmoqchimisiz?',
    en: 'Want to eliminate blind spots in your cold chain?',
  } as Trilang,
  desc: {
    ru: 'Инженер поможет понять, где сейчас теряются данные и как закрыть контроль на складах, в транспорте и на перевалке. Бесплатно и без обязательств.',
    uz: 'Muhandis ma’lumotlar hozir qayerda yo‘qolayotganini va omborlar, transport hamda qayta yuklashda nazoratni qanday yopishni tushunishga yordam beradi. Bepul va majburiyatsiz.',
    en: 'An engineer will help pinpoint where data is lost today and how to close control across warehouses, transport and transshipment. Free, no obligations.',
  } as Trilang,
  cta: {
    ru: 'Получить экспресс-аудит цепи',
    uz: 'Zanjir ekspress-auditini olish',
    en: 'Get a chain express audit',
  } as Trilang,
  perks: {
    ru: ['Бесплатно', 'Около 20 минут', 'Ничего подписывать не нужно'],
    uz: ['Bepul', 'Taxminan 20 daqiqa', 'Hech narsa imzolash shart emas'],
    en: ['Free', 'About 20 minutes', 'Nothing to sign'],
  } as Record<string, string[]>,
  micro: {
    ru: 'Обычно отвечаем в течение 15 минут',
    uz: 'Odatda 15 daqiqa ichida javob beramiz',
    en: 'We usually reply within 15 minutes',
  } as Trilang,
  badge: {
    ru: 'Более 80 аудитов уже проведено',
    uz: '80 dan ortiq audit o‘tkazilgan',
    en: '80+ audits already conducted',
  } as Trilang,
}

export const logisticsFaq = {
  items: {
    ru: [
      { q: 'Можно ли видеть и склады, и транспорт в одной системе?', a: 'Да. Система закрывает всю цепь: склады, перевалку и рефрижераторы.' },
      { q: 'Когда приходят уведомления об отклонении?', a: 'Сразу в пути — водителю и диспетчеру. Не нужно ждать выгрузки.' },
      { q: 'Подойдут ли отчёты для GDP и споров с клиентами?', a: 'Да. Непрерывный трек температуры — сильная доказательная база.' },
      { q: 'Нужно ли что-то делать с логгерами-флешками?', a: 'Нет. Данные собираются автоматически и сразу попадают в систему.' },
      { q: 'Что входит в бесплатный аудит?', a: 'Разбор текущей схемы контроля, поиск слепых зон и рекомендация, как закрыть цепь.' },
    ],
    uz: [
      { q: 'Omborlar va transportni bitta tizimda ko‘rish mumkinmi?', a: 'Ha. Tizim butun zanjirni yopadi: omborlar, qayta yuklash va refrijeratorlar.' },
      { q: 'Og‘ish haqida xabarnomalar qachon keladi?', a: 'Darhol yo‘lda — haydovchi va dispetcherga. Tushirishni kutish shart emas.' },
      { q: 'Hisobotlar GDP va mijozlar bilan nizolarga mos keladimi?', a: 'Ha. Haroratning uzluksiz treki — kuchli isbot bazasi.' },
      { q: 'Logger-fleshkalar bilan biror narsa qilish kerakmi?', a: 'Yo‘q. Ma’lumotlar avtomatik yig‘iladi va darhol tizimga tushadi.' },
      { q: 'Bepul audit nimalarni o‘z ichiga oladi?', a: 'Joriy nazorat sxemasini tahlil qilish, ko‘r joylarni qidirish va zanjirni qanday yopish bo‘yicha tavsiya.' },
    ],
    en: [
      { q: 'Can warehouses and transport be seen in one system?', a: 'Yes. The system covers the entire chain: warehouses, transshipment and reefers.' },
      { q: 'When do deviation alerts arrive?', a: 'Immediately en route — to the driver and dispatcher. No need to wait for unloading.' },
      { q: 'Are reports suitable for GDP and client disputes?', a: 'Yes. A continuous temperature track is strong evidence.' },
      { q: 'Do we need to do anything with logger flash drives?', a: 'No. Data is collected automatically and lands in the system at once.' },
      { q: 'What is included in the free audit?', a: 'Review of the current control setup, blind-spot search and recommendations on closing the chain.' },
    ],
  } as Record<string, { q: string; a: string }[]>,
}
