/** Трёхъязычный контент страницы «Пищевые склады» */

export type Trilang = { ru: string; uz: string; en: string }

export const foodHero = {
  subtitle: {
    ru: 'Контроль температуры и влажности на складах, в камерах и морозильниках. Меньше порчи продукции. Меньше переплаты за энергию. Спокойные санитарные проверки.',
    uz: 'Omborlar, kameralar va muzlatgichlarda harorat va namlik nazorati. Kamroq mahsulot buzilishi. Energiya uchun kamroq ortiqcha to‘lov. Xotirjam sanitariya tekshiruvlari.',
    en: 'Temperature and humidity control across warehouses, chambers and freezers. Less spoiled product. Lower energy overpayments. Calm sanitary inspections.',
  } as Trilang,
  primaryBtn: {
    ru: 'Получить бесплатный аудит склада',
    uz: 'Omborning bepul auditini olish',
    en: 'Get a free warehouse audit',
  } as Trilang,
  secondaryBtn: {
    ru: 'Посмотреть, как работает система',
    uz: 'Tizim qanday ishlashini ko‘rish',
    en: 'See how the system works',
  } as Trilang,
  perks: [
    {
      ru: '24/7 контроль всех зон',
      uz: 'Barcha zonalarni 24/7 nazorat',
      en: '24/7 control of every zone',
    },
    {
      ru: 'Мгновенные уведомления о сбоях',
      uz: 'Nosozliklar haqida tezkor xabarnomalar',
      en: 'Instant failure alerts',
    },
    {
      ru: 'Готовые отчёты для проверяющих',
      uz: 'Tekshiruvchilar uchun tayyor hisobotlar',
      en: 'Ready reports for inspectors',
    },
  ] as Trilang[],
}

export const foodPains = {
  title: {
    ru: 'Узнаёте свой склад?',
    uz: 'Omboringizni taniysizmi?',
    en: 'Recognize your warehouse?',
  } as Trilang,
  items: {
    ru: [
      { title: 'Порча партий', desc: 'Разморозка или перегрев. Тысячи килограммов продукции могут быть потеряны, потому что отклонение заметили слишком поздно.' },
      { title: 'Санитарные проверки', desc: 'Требуют доказательств соблюдения режима за весь период. Точечные записи и «красивые» журналы доверия не добавляют.' },
      { title: 'Большие площади', desc: 'Обход склада с ручным термометром занимает часы и даёт только точку в момент измерения. Что было ночью — неизвестно.' },
      { title: 'Перерасход энергии', desc: 'Холодильное оборудование работает «вслепую». Без понимания реальных режимов легко переплачивать за электричество.' },
    ],
    uz: [
      { title: 'Partiyalarning buzilishi', desc: 'Erish yoki qizish. Minglab kilo mahsulot yo‘qolishi mumkin, chunki og‘ish juda kech aniqlandi.' },
      { title: 'Sanitariya tekshiruvlari', desc: 'Butun davr uchun rejimga rioya dalillarini talab qiladi. Nuqtaviy yozuvlar va «chiroyli» jurnallar ishonch qo‘shmaydi.' },
      { title: 'Katta maydonlar', desc: 'Omborni qo‘l termometri bilan aylanish soatlarni oladi va faqat o‘lchov paytidagi nuqtani beradi. Kechasi nima bo‘lgani noma’lum.' },
      { title: 'Energiya isrofi', desc: 'Sovutish uskunalari «ko‘r-ko‘rona» ishlaydi. Real rejimlarni tushunmasdan elektr uchun ortiqcha to‘lash oson.' },
    ],
    en: [
      { title: 'Spoiled batches', desc: 'Thawing or overheating. Thousands of kilos of product can be lost because the deviation was noticed too late.' },
      { title: 'Sanitary inspections', desc: 'They demand proof of regime compliance for the whole period. Spot records and “pretty” logbooks inspire little confidence.' },
      { title: 'Huge areas', desc: 'Walking the warehouse with a handheld thermometer takes hours and gives only a point-in-time reading. What happened at night is unknown.' },
      { title: 'Energy overspend', desc: 'Refrigeration runs “blind”. Without understanding real operating regimes, overpaying for electricity is easy.' },
    ],
  } as Record<string, { title: string; desc: string }[]>,
}

export const foodSolutions = {
  title: {
    ru: 'Как мы закрываем эти риски',
    uz: 'Bu xavflarni qanday yopamiz',
    en: 'How we close these risks',
  } as Trilang,
  items: {
    ru: [
      { title: 'Контроль режимов 24/7', desc: 'Датчики во всех зонах: склады, камеры, холодильники и морозильники. Температура и влажность записываются постоянно.' },
      { title: 'Мгновенные алерты', desc: 'Разморозка, перегрев или сбой оборудования — уведомление приходит сразу ответственным. Даже ночью.' },
      { title: 'История для проверяющих', desc: 'Температурные кривые и данные за любой период выгружаются в PDF или Excel за минуту. Без ручного сбора.' },
      { title: 'Меньше потерь и затрат', desc: 'Раннее обнаружение отклонений спасает партии и помогает не гонять оборудование вхолостую.' },
    ],
    uz: [
      { title: 'Rejimlarni 24/7 nazorat', desc: 'Barcha zonalarda datchiklar: omborlar, kameralar, muzlatgichlar va morozilniklar. Harorat va namlik doimiy yoziladi.' },
      { title: 'Tezkor ogohlantirishlar', desc: 'Erish, qizish yoki uskuna nosozligi — xabarnoma darhol mas’ullarga keladi. Hattoki kechasi ham.' },
      { title: 'Tekshiruvchilar uchun tarix', desc: 'Istalgan davr uchun harorat egri chiziqlari va ma’lumotlar bir daqiqada PDF yoki Excel ga yuklanadi. Qo‘lda yig‘ishsiz.' },
      { title: 'Kamroq yo‘qotish va xarajat', desc: 'Og‘ishlarni erta aniqlash partiyalarni saqlaydi va uskunani behuda ishlatmaslikka yordam beradi.' },
    ],
    en: [
      { title: '24/7 regime control', desc: 'Sensors in every zone: warehouses, chambers, fridges and freezers. Temperature and humidity logged continuously.' },
      { title: 'Instant alerts', desc: 'Thawing, overheating or equipment failure — the responsible staff are notified at once. Even at night.' },
      { title: 'History for inspectors', desc: 'Temperature curves and data for any period export to PDF or Excel in a minute. No manual collection.' },
      { title: 'Fewer losses and costs', desc: 'Early deviation detection saves batches and stops equipment running idle.' },
    ],
  } as Record<string, { title: string; desc: string }[]>,
}

export const foodBenefits = {
  title: {
    ru: 'Контроль температуры и влажности, который реально влияет на результат',
    uz: 'Natijaga real ta’sir qiladigan harorat va namlik nazorati',
    en: 'Temperature and humidity control that actually moves the needle',
  } as Trilang,
  items: {
    ru: [
      'Соблюдение температурных режимов хранения',
      'Предотвращение порчи продуктов',
      'Соответствие санитарным нормам',
      'Автоматические уведомления о нарушениях',
    ],
    uz: [
      'Saqlash harorat rejimlariga rioya qilish',
      'Mahsulotlar buzilishining oldini olish',
      'Sanitariya normalariga muvofiqlik',
      'Buzilishlar haqida avtomatik xabarnomalar',
    ],
    en: [
      'Storage temperature regime compliance',
      'Preventing food spoilage',
      'Sanitary norms compliance',
      'Automatic violation notifications',
    ],
  } as Record<string, string[]>,
  results: {
    ru: [
      'Партии больше не «внезапно» портятся ночью',
      'Обходить склад с термометром больше не нужно',
      'Появляется понимание, где реально перерасходуется энергия',
      'К проверкам можно готовиться спокойно, а не в аврале',
    ],
    uz: [
      'Partiyalar endi tunda «kutilmaganda» buzilmaydi',
      'Omborni termometr bilan aylanish shart emas',
      'Energiya qayerda real isrof bo‘layotgani tushunarli bo‘ladi',
      'Tekshiruvlarga shoshilinch emas, xotirjam tayyorlanish mumkin',
    ],
    en: [
      'Batches no longer spoil “suddenly” at night',
      'No more walking the warehouse with a thermometer',
      'You finally see where energy is really wasted',
      'Prepare for inspections calmly, not in a rush',
    ],
  } as Record<string, string[]>,
}

export const foodNumbers = [
  { value: { ru: '24/7', uz: '24/7', en: '24/7' }, label: { ru: 'контроль даже когда склад пустой', uz: 'ombor bo‘sh bo‘lganda ham nazorat', en: 'control even when the warehouse is empty' } },
  { value: { ru: 'минуты', uz: 'daqiqalar', en: 'minutes' }, label: { ru: 'а не часы обхода', uz: 'aylanish soatlari emas', en: 'not hours of walkarounds' } },
  { value: { ru: 'меньше потерь', uz: 'kamroq yo‘qotish', en: 'fewer losses' }, label: { ru: 'и меньше счетов за электричество', uz: 'va elektr uchun kamroq hisoblar', en: 'and lower electricity bills' } },
] as { value: { ru: string; uz: string; en: string }; label: Trilang }[]

export const foodAreas = {
  title: {
    ru: 'Один склад — десятки зон под контролем',
    uz: 'Bitta ombor — o‘nlab zonalar nazoratda',
    en: 'One warehouse — dozens of zones under control',
  } as Trilang,
  text: {
    ru: 'Вместо обхода с ручным прибором вы видите все зоны на одном экране. Камеры, морозильники, зоны хранения — у каждой свой график и свои границы нормы.',
    uz: 'Qo‘l asbobi bilan aylanish o‘rniga barcha zonalarni bitta ekranda ko‘rasiz. Kameralar, muzlatgichlar, saqlash zonalari — har birining o‘z grafigi va norma chegaralari bor.',
    en: 'Instead of walking around with a handheld device, you see every zone on one screen. Chambers, freezers, storage zones — each with its own chart and norm limits.',
  } as Trilang,
  extra: {
    ru: 'Слепые зоны исчезают. Вы точно знаете, где температура держится стабильно, а где есть риск.',
    uz: 'Ko‘r joylar yo‘qoladi. Harorat qayerda barqaror, qayerda xavf borligini aniq bilasiz.',
    en: 'Blind spots disappear. You know exactly where temperature holds steady and where the risk is.',
  } as Trilang,
}

export const foodEnergy = {
  title: {
    ru: 'Меньше порчи — меньше переплаты за энергию',
    uz: 'Kamroq buzilish — energiya uchun kamroq ortiqcha to‘lov',
    en: 'Less spoilage — less energy overpayment',
  } as Trilang,
  text: {
    ru: 'Когда оборудование работает без обратной связи, оно часто перестраховывается и тратит лишнее электричество. С непрерывным мониторингом вы видите реальную картину и можете оптимизировать режимы.',
    uz: 'Uskuna teskari aloqasiz ishlaganda, u ko‘pincha o‘zini sug‘urtalab ortiqcha elektr sarflaydi. Uzluksiz monitoring bilan real manzarani ko‘rasiz va rejimlarni optimallashtira olasiz.',
    en: 'When equipment runs without feedback, it often plays it safe and wastes electricity. Continuous monitoring shows the real picture so you can optimize regimes.',
  } as Trilang,
  perks: [
    {
      ru: 'Раньше замечаете сбои',
      uz: 'Nosozliklarni erta sezasiz',
      en: 'You spot failures earlier',
    },
    {
      ru: 'Меньше потерянных партий',
      uz: 'Kamroq yo‘qolgan partiyalar',
      en: 'Fewer lost batches',
    },
    {
      ru: 'Понятно, где можно снизить нагрузку на холодильное оборудование',
      uz: 'Sovutish uskunalariga yuklamani qayerda kamaytirish mumkinligi tushunarli',
      en: 'Clear where to ease the load on refrigeration',
    },
  ] as Trilang[],
}

export const foodDocs = {
  title: {
    ru: 'Данные, которым можно доверять',
    uz: 'Ishonish mumkin bo‘lgan ma’lumotlar',
    en: 'Data you can trust',
  } as Trilang,
  text: {
    ru: 'Санитарный врач или проверяющий просит историю хранения — вы открываете систему и выгружаете отчёт. Всё прозрачно: дата, время, значение, зона.',
    uz: 'Sanitariya vrachi yoki tekshiruvchi saqlash tarixini so‘raydi — siz tizimni ochib hisobotni yuklab olasiz. Hammasi shaffof: sana, vaqt, qiymat, zona.',
    en: 'A sanitary doctor or inspector asks for storage history — you open the system and export the report. Fully transparent: date, time, value, zone.',
  } as Trilang,
  items: [
    {
      ru: 'Полная история температуры и влажности',
      uz: 'Harorat va namlikning to‘liq tarixi',
      en: 'Full temperature and humidity history',
    },
    {
      ru: 'Фиксация всех отклонений',
      uz: 'Barcha og‘ishlarni qayd etish',
      en: 'Every deviation logged',
    },
    {
      ru: 'Отчёты в PDF и Excel',
      uz: 'PDF va Excel da hisobotlar',
      en: 'PDF and Excel reports',
    },
    {
      ru: 'Никаких «допишем потом» и пробелов в журнале',
      uz: '«Keyin yozamiz» va jurnaldagi bo‘shliqlar yo‘q',
      en: 'No “we’ll fill it in later” or logbook gaps',
    },
  ] as Trilang[],
}

export const foodCta = {
  title: {
    ru: 'Хотите понять, где на складе теряются продукты и деньги?',
    uz: 'Omborda mahsulot va pullar qayerda yo‘qolayotganini bilmoqchimisiz?',
    en: 'Want to see where your warehouse loses product and money?',
  } as Trilang,
  desc: {
    ru: 'Инженер приедет, замерит сигнал, найдёт слепые зоны и покажет, как лучше расставить датчики. Бесплатно и без обязательств.',
    uz: 'Muhandis keladi, signalni o‘lchaydi, ko‘r joylarni topadi va datchiklarni qanday joylashtirishni ko‘rsatadi. Bepul va majburiyatsiz.',
    en: 'An engineer will visit, measure the signal, find blind spots and show the best sensor placement. Free, no obligations.',
  } as Trilang,
  cta: {
    ru: 'Получить экспресс-аудит склада',
    uz: 'Ombor ekspress-auditini olish',
    en: 'Get a warehouse express audit',
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

export const foodFaq = {
  title: {
    ru: 'Частые вопросы',
    uz: 'Ko‘p so‘raladigan savollar',
    en: 'Frequently asked questions',
  } as Trilang,
  items: {
    ru: [
      { q: 'Можно ли контролировать и склады, и морозильные камеры в одной системе?', a: 'Да. Все зоны отображаются на одном экране — склады, камеры, холодильники и морозильники.' },
      { q: 'Как быстро приходят уведомления при отклонении?', a: 'В течение нескольких минут. Можно настроить SMS, Telegram или оба канала.' },
      { q: 'Подойдут ли отчёты для санитарных проверок?', a: 'Да. Система формирует полную историю с точными данными за любой период.' },
      { q: 'Помогает ли система снижать расходы на электричество?', a: 'Да. Вы видите реальные режимы работы оборудования и можете убрать лишнюю нагрузку.' },
      { q: 'Что входит в бесплатный аудит?', a: 'Выезд инженера, проверка сигнала, поиск слепых зон и рекомендация по размещению датчиков. Без обязательств.' },
    ],
    uz: [
      { q: 'Omborlar va muzlatgichlarni bitta tizimda nazorat qilish mumkinmi?', a: 'Ha. Barcha zonalar bitta ekranda ko‘rinadi — omborlar, kameralar, muzlatgichlar va morozilniklar.' },
      { q: 'Og‘ishda xabarnomalar qanchalik tez keladi?', a: 'Bir necha daqiqa ichida. SMS, Telegram yoki ikkalasini sozlash mumkin.' },
      { q: 'Hisobotlar sanitariya tekshiruvlariga mos keladimi?', a: 'Ha. Tizim istalgan davr uchun aniq ma’lumotlar bilan to‘liq tarixni shakllantiradi.' },
      { q: 'Tizim elektr xarajatlarini kamaytirishga yordam beradimi?', a: 'Ha. Uskunaning real ish rejimlarini ko‘rasiz va ortiqcha yuklamani olib tashlashingiz mumkin.' },
      { q: 'Bepul audit nimalarni o‘z ichiga oladi?', a: 'Muhandis chiqishi, signal tekshiruvi, ko‘r joylarni qidirish va datchiklarni joylashtirish bo‘yicha tavsiya. Majburiyatsiz.' },
    ],
    en: [
      { q: 'Can warehouses and freezers be monitored in one system?', a: 'Yes. Every zone appears on one screen — warehouses, chambers, fridges and freezers.' },
      { q: 'How fast do deviation alerts arrive?', a: 'Within minutes. You can set up SMS, Telegram, or both channels.' },
      { q: 'Are the reports suitable for sanitary inspections?', a: 'Yes. The system builds a complete history with precise data for any period.' },
      { q: 'Does the system help cut electricity costs?', a: 'Yes. You see the real operating regimes and can remove excess load.' },
      { q: 'What is included in the free audit?', a: 'Engineer visit, signal check, blind-spot search and sensor placement recommendations. No obligations.' },
    ],
  } as Record<string, { q: string; a: string }[]>,
}
