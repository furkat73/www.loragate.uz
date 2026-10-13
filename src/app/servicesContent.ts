/** Трёхъязычный контент страницы «Услуги» */

export type Trilang = { ru: string; uz: string; en: string }

export const servicesHero = {
  title: {
    ru: 'Услуги Lora Gate',
    uz: 'Lora Gate xizmatlari',
    en: 'Lora Gate services',
  } as Trilang,
  subtitle: {
    ru: 'Мы не просто ставим датчики. Мы запускаем систему, учим персонал, готовим документы для инспекций и остаёмся на связи 24/7.',
    uz: 'Biz shunchaki datchik o‘rnatmaymiz. Tizimni ishga tushiramiz, xodimlarni o‘rgatamiz, inspeksiyalar uchun hujjatlar tayyorlaymiz va 24/7 aloqada qolamiz.',
    en: 'We don’t just install sensors. We launch the system, train your staff, prepare inspection documents and stay in touch 24/7.',
  } as Trilang,
  auditBtn: {
    ru: 'Получить бесплатный аудит',
    uz: 'Bepul audit olish',
    en: 'Get a free audit',
  } as Trilang,
  discussBtn: {
    ru: 'Обсудить задачу с инженером',
    uz: 'Muhandis bilan vazifani muhokama qilish',
    en: 'Discuss your task with an engineer',
  } as Trilang,
  micro: {
    ru: 'От первого выезда до валидированной системы — один подрядчик.',
    uz: 'Birinchi chiqishdan validatsiyalangan tizimgacha — bitta pudratchi.',
    en: 'From first visit to validated system — one contractor.',
  } as Trilang,
}

export const servicesResults = {
  title: {
    ru: 'После наших услуг у вас будет',
    uz: 'Xizmatlarimizdan keyin sizda bo‘ladi',
    en: 'After our services you will have',
  } as Trilang,
  items: {
    ru: [
      { title: 'Работающая система', desc: 'Работающая, валидированная и соответствующая GxP.' },
      { title: 'Обученный персонал', desc: 'Сотрудники уверенно работают с системой каждый день.' },
      { title: 'Документы для инспектора', desc: 'Полный пакет, который проходит проверки с первого раза.' },
      { title: 'Спокойствие 24/7', desc: 'Мы на связи. Решаем вопросы быстро, пока они не стали проблемой.' },
      { title: 'Один подрядчик', desc: 'От аудита до поддержки — вся ответственность на нас.' },
    ],
    uz: [
      { title: 'Ishlaydigan tizim', desc: 'Ishlaydigan, validatsiyalangan va GxP ga mos.' },
      { title: 'O‘qitilgan xodimlar', desc: 'Xodimlar tizim bilan har kuni ishonchli ishlaydi.' },
      { title: 'Inspektor uchun hujjatlar', desc: 'Birinchi urinishdayoq tekshiruvdan o‘tadigan to‘liq paket.' },
      { title: '24/7 xotirjamlik', desc: 'Aloqadamiz. Muammolarni ular kattalashmasdan tez hal qilamiz.' },
      { title: 'Bitta pudratchi', desc: 'Auditdan qo‘llab-quvvatlashgacha — barcha mas’uliyat bizda.' },
    ],
    en: [
      { title: 'Working system', desc: 'Running, validated and GxP-compliant.' },
      { title: 'Trained staff', desc: 'Employees work the system confidently every day.' },
      { title: 'Inspector-ready documents', desc: 'Full package that passes checks first time.' },
      { title: '24/7 peace of mind', desc: 'We stay in touch. We solve issues fast, before they grow.' },
      { title: 'One contractor', desc: 'From audit to support — all responsibility on us.' },
    ],
  } as Record<string, { title: string; desc: string }[]>,
}

export const servicesList = {
  title: {
    ru: 'Что именно мы делаем',
    uz: 'Aniq nima qilamiz',
    en: 'Exactly what we do',
  } as Trilang,
  items: {
    ru: [
      { title: 'Установка и настройка', desc: 'Профессиональный монтаж и конфигурация.', result: 'Результат: система сразу работает как единое целое — датчики, шлюз и платформа.' },
      { title: 'Техподдержка 24/7', desc: 'Круглосуточная поддержка и мониторинг работы системы.', result: 'Результат: если что-то случилось — вы узнаёте от нас, а не от инспектора.' },
      { title: 'Обслуживание и замена датчиков', desc: 'Регулярное ТО и своевременная замена.', result: 'Результат: точность и надёжность сохраняются годами.' },
      { title: 'Обучение персонала', desc: 'Практическое обучение работе с системой.', result: 'Результат: сотрудники не боятся платформы и правильно реагируют на тревоги.' },
      { title: 'Резервное копирование и хранение данных', desc: 'Надёжное хранение всей истории.', result: 'Результат: данные не пропадут даже при сбоях.' },
      { title: 'Валидация компьютеризированных систем', desc: 'Полный пакет документов по требованиям GMP / GDP.', result: 'Результат: система не просто работает — она документально подтверждена.' },
    ],
    uz: [
      { title: 'O‘rnatish va sozlash', desc: 'Professional montaj va konfiguratsiya.', result: 'Natija: tizim darhol yagona butunlikda ishlaydi — datchiklar, shlyuz va platforma.' },
      { title: '24/7 texnik yordam', desc: 'Kecha-kunduz yordam va tizim monitoringi.', result: 'Natija: biror narsa bo‘lsa — inspektordan emas, bizdan bilasiz.' },
      { title: 'Xizmat ko‘rsatish va datchiklarni almashtirish', desc: 'Muntazam TXK va o‘z vaqtida almashtirish.', result: 'Natija: aniqlik va ishonchlilik yillar davomida saqlanadi.' },
      { title: 'Xodimlarni o‘qitish', desc: 'Tizim bilan ishlash bo‘yicha amaliy o‘qitish.', result: 'Natija: xodimlar platformadan qo‘rqmaydi va signallarga to‘g‘ri reaksiya qiladi.' },
      { title: 'Zaxiralash va ma’lumotlarni saqlash', desc: 'Butun tarixni ishonchli saqlash.', result: 'Natija: nosozliklarda ham ma’lumotlar yo‘qolmaydi.' },
      { title: 'Kompyuterlashgan tizimlarni validatsiya qilish', desc: 'GMP / GDP talablari bo‘yicha to‘liq hujjatlar to‘plami.', result: 'Natija: tizim shunchaki ishlamaydi — u hujjat bilan tasdiqlangan.' },
    ],
    en: [
      { title: 'Installation and setup', desc: 'Professional mounting and configuration.', result: 'Result: the system works as one whole from day one — sensors, gateway, platform.' },
      { title: '24/7 technical support', desc: 'Round-the-clock support and system monitoring.', result: 'Result: if something happens — you hear it from us, not from an inspector.' },
      { title: 'Maintenance and sensor replacement', desc: 'Regular servicing and timely replacement.', result: 'Result: accuracy and reliability last for years.' },
      { title: 'Staff training', desc: 'Hands-on training on the system.', result: 'Result: employees are not afraid of the platform and respond to alarms correctly.' },
      { title: 'Backup and data storage', desc: 'Reliable storage of the entire history.', result: 'Result: data survives even failures.' },
      { title: 'Computerized systems validation', desc: 'Full document package per GMP / GDP requirements.', result: 'Result: the system doesn’t just work — it is documented and proven.' },
    ],
  } as Record<string, { title: string; desc: string; result: string }[]>,
}

export const servicesProcess = {
  title: {
    ru: 'От аудита до поддержки — один понятный процесс',
    uz: 'Auditdan qo‘llab-quvvatlashgacha — bitta tushunarli jarayon',
    en: 'From audit to support — one clear process',
  } as Trilang,
  steps: {
    ru: [
      { title: 'Бесплатный аудит', desc: 'Оцениваем объект, риски и требования GxP.' },
      { title: 'Проект и смета', desc: 'Предлагаем оптимальное решение и прозрачную стоимость.' },
      { title: 'Монтаж и запуск', desc: 'Устанавливаем, настраиваем и выводим систему в работу.' },
      { title: 'Обучение', desc: 'Обучаем персонал и передаём эксплуатационные знания.' },
      { title: 'Валидация (по желанию)', desc: 'Готовим и выполняем протоколы DQ/IQ/OQ/PQ и SOP.' },
      { title: 'Поддержка 24/7', desc: 'Техподдержка, мониторинг и быстрое решение вопросов.' },
    ],
    uz: [
      { title: 'Bepul audit', desc: 'Obyekt, risklar va GxP talablarini baholaymiz.' },
      { title: 'Loyiha va smeta', desc: 'Optimal yechim va shaffof narxni taklif qilamiz.' },
      { title: 'Montaj va ishga tushirish', desc: 'O‘rnatamiz, sozlaymiz va tizimni ishga tushiramiz.' },
      { title: 'O‘qitish', desc: 'Xodimlarni o‘rgatamiz va ekspluatatsiya bilimlarini topshiramiz.' },
      { title: 'Validatsiya (xohishga ko‘ra)', desc: 'DQ/IQ/OQ/PQ va SOP protokollarini tayyorlaymiz va bajaramiz.' },
      { title: '24/7 yordam', desc: 'Texnik yordam, monitoring va masalalarni tez hal qilish.' },
    ],
    en: [
      { title: 'Free audit', desc: 'We assess the site, risks and GxP requirements.' },
      { title: 'Design and estimate', desc: 'We propose the optimal solution and transparent pricing.' },
      { title: 'Mounting and launch', desc: 'We install, configure and bring the system live.' },
      { title: 'Training', desc: 'We train staff and hand over operating knowledge.' },
      { title: 'Validation (optional)', desc: 'We prepare and execute DQ/IQ/OQ/PQ and SOP protocols.' },
      { title: '24/7 support', desc: 'Tech support, monitoring and fast issue resolution.' },
    ],
  } as Record<string, { title: string; desc: string }[]>,
}

export const servicesValidation = {
  title: {
    ru: 'Валидация — без боли и «сами разберётесь»',
    uz: 'Validatsiya — og‘riqsiz va «o‘zingiz hal qiling»siz',
    en: 'Validation — no pain, no “figure it out yourself”',
  } as Trilang,
  text: {
    ru: 'Многие клиенты приходят именно за валидацией. Мы готовим полный комплект документов, который принимают инспекторы:',
    uz: 'Ko‘plab mijozlar aynan validatsiya uchun keladi. Biz inspektorlar qabul qiladigan to‘liq hujjatlar to‘plamini tayyorlaymiz:',
    en: 'Many clients come specifically for validation. We prepare the full document package that inspectors accept:',
  } as Trilang,
  docs: [
    'DQ – Design Qualification',
    'IQ – Installation Qualification',
    'OQ – Operational Qualification',
    'PQ – Performance Qualification',
    'SOP – Standard Operating Procedures',
  ],
  result: {
    ru: 'Вы получаете: готовый пакет, а не список того, что нужно сделать самим.',
    uz: 'Olasiz: o‘zingiz qilishingiz kerak bo‘lgan ro‘yxat emas, tayyor paket.',
    en: 'You get a ready package — not a to-do list.',
  } as Trilang,
  cta: {
    ru: 'Заказать валидацию',
    uz: 'Validatsiyani buyurtma qilish',
    en: 'Order validation',
  } as Trilang,
  sampleBtn: {
    ru: 'Получить пример пакета',
    uz: 'Namuna paketni olish',
    en: 'Get a sample package',
  } as Trilang,
}

export const servicesSupport = {
  title: {
    ru: 'Система работает — мы рядом',
    uz: 'Tizim ishlaydi — biz yoningizdamiz',
    en: 'The system runs — we stay close',
  } as Trilang,
  text: {
    ru: 'После запуска вы не остаётесь один на один с оборудованием.',
    uz: 'Ishga tushirilgandan keyin uskuna bilan yolg‘iz qolmaysiz.',
    en: 'After launch you are never left alone with the hardware.',
  } as Trilang,
  items: {
    ru: [
      'Круглосуточная техподдержка',
      'Мониторинг работоспособности',
      'Замена датчиков и обслуживание',
      'Помощь при проверках и инспекциях',
    ],
    uz: [
      'Kecha-kunduz texnik yordam',
      'Ish qobiliyatini monitoring qilish',
      'Datchiklarni almashtirish va xizmat ko‘rsatish',
      'Tekshiruv va inspeksiyalarda yordam',
    ],
    en: [
      'Round-the-clock tech support',
      'Health monitoring',
      'Sensor replacement and maintenance',
      'Help during checks and inspections',
    ],
  } as Record<string, string[]>,
  closing: {
    ru: 'Ваша задача — бизнес. Наша — чтобы система мониторинга не создавала проблем.',
    uz: 'Sizning vazifangiz — biznes. Bizniki — monitoring tizimi muammo tug‘dirmasligi.',
    en: 'Your job is business. Ours is making sure monitoring never becomes a problem.',
  } as Trilang,
}

export const servicesCta = {
  title: {
    ru: 'Хотите понять, какие услуги нужны именно вам?',
    uz: 'Aynan sizga qanday xizmatlar kerakligini bilmoqchimisiz?',
    en: 'Want to figure out which services you actually need?',
  } as Trilang,
  desc: {
    ru: 'Инженер приедет, оценит объект и предложит оптимальный набор работ — от монтажа до валидации.',
    uz: 'Muhandis keladi, obyektni baholaydi va optimal ishlar to‘plamini taklif qiladi — montajdan validatsiyagacha.',
    en: 'An engineer will visit, assess the facility and suggest the optimal work package — from mounting to validation.',
  } as Trilang,
  cta: {
    ru: 'Пройти бесплатный аудит',
    uz: 'Bepul auditdan o‘tish',
    en: 'Get a free audit',
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

export const servicesSupportStats = {
  title: {
    ru: 'Система работает. Мы рядом.',
    uz: 'Tizim ishlaydi. Biz yoningizdamiz.',
    en: 'The system runs. We stay close.',
  } as Trilang,
  text: {
    ru: 'Мы не исчезаем после запуска. Мы остаёмся вашим техническим тылом.',
    uz: 'Ishga tushirilgandan keyin g‘oyib bo‘lmaymiz. Texnik tayanchingiz bo‘lib qolamiz.',
    en: 'We don’t disappear after launch. We remain your technical backbone.',
  } as Trilang,
  items: {
    ru: [
      'Среднее время реакции — менее 15 минут',
      'Выезд специалиста — в день обращения',
      'Прозрачная система SLA и приоритетов',
      'Постоянный мониторинг и отчёты',
    ],
    uz: [
      'O‘rtacha reaksiya vaqti — 15 daqiqadan kam',
      'Mutaxassis chiqishi — murojaat kunidayoq',
      'Shaffof SLA va ustuvorliklar tizimi',
      'Doimiy monitoring va hisobotlar',
    ],
    en: [
      'Average response time — under 15 minutes',
      'On-site visit on the day you call',
      'Transparent SLA and priority system',
      'Continuous monitoring and reports',
    ],
  } as Record<string, string[]>,
}

export const servicesFaq2 = {
  title: {
    ru: 'Часто задаваемые вопросы',
    uz: 'Ko‘p so‘raladigan savollar',
    en: 'Frequently asked questions',
  } as Trilang,
  items: {
    ru: [
      { q: 'Сколько времени занимает запуск системы под ключ?', a: 'Обычно от нескольких дней до 1–2 недель: монтаж, настройка, обучение. Валидация планируется отдельно и не задерживает запуск.' },
      { q: 'Вы работаете по GxP (GMP, GDP, GCP) и с регуляторными требованиями?', a: 'Да. Проектируем систему и готовим документы с учётом GMP, GDP и требований регуляторов.' },
      { q: 'Что входит в поддержку 24/7?', a: 'Круглосуточная помощь, мониторинг системы, выезды и сопровождение при проверках.' },
    ],
    uz: [
      { q: 'Kalit taslim tizimni ishga tushirish qancha vaqt oladi?', a: 'Odatda bir necha kundan 1–2 haftagacha: montaj, sozlash, o‘qitish. Validatsiya alohida rejalashtiriladi va ishga tushirishni kechiktirmaydi.' },
      { q: 'GxP (GMP, GDP, GCP) va tartibga solish talablari bo‘yicha ishlaysizlarmi?', a: 'Ha. Tizimni loyihalash va hujjatlarni GMP, GDP hamda regulyatorlar talablari hisobga olingan holda tayyorlaymiz.' },
      { q: '24/7 qo‘llab-quvvatlash nimalarni o‘z ichiga oladi?', a: 'Kecha-kunduz yordam, tizim monitoringi, chiqishlar va tekshiruvlarda kuzatuv.' },
    ],
    en: [
      { q: 'How long does turnkey launch take?', a: 'Usually a few days to 1–2 weeks: mounting, setup, training. Validation is planned separately and doesn’t delay launch.' },
      { q: 'Do you work to GxP (GMP, GDP, GCP) and regulatory requirements?', a: 'Yes. We design the system and prepare documents with GMP, GDP and regulator requirements in mind.' },
      { q: 'What is included in 24/7 support?', a: 'Round-the-clock help, system monitoring, on-site visits and inspection support.' },
    ],
  } as Record<string, { q: string; a: string }[]>,
}

export const servicesFinalCta = {
  title: {
    ru: 'Хотите понять, какой набор услуг нужен именно вам?',
    uz: 'Qaysi xizmatlar to‘plami kerakligini bilmoqchimisiz?',
    en: 'Want to figure out which service set you actually need?',
  } as Trilang,
  desc: {
    ru: 'Проведём бесплатный аудит и предложим точный план под ваши задачи и бюджет.',
    uz: 'Bepul audit o‘tkazamiz va vazifalaringiz hamda byudjetingizga aniq reja taklif qilamiz.',
    en: 'We’ll run a free audit and propose a precise plan for your tasks and budget.',
  } as Trilang,
  auditBtn: {
    ru: 'Получить бесплатный аудит',
    uz: 'Bepul audit olish',
    en: 'Get a free audit',
  } as Trilang,
  callBtn: {
    ru: 'Позвонить инженеру',
    uz: 'Muhandisga qo‘ng‘iroq qilish',
    en: 'Call an engineer',
  } as Trilang,
  hours: {
    ru: 'Пн–Пт с 9:00 до 18:00 (Tashkent time)',
    uz: 'Dush–Jum 9:00–18:00 (Toshkent vaqti)',
    en: 'Mon–Fri 9:00–18:00 (Tashkent time)',
  } as Trilang,
  badge: {
    ru: 'Более 80 аудитов успешно проведено в 2023–2025 гг.',
    uz: '2023–2025 yillarda 80 dan ortiq audit muvaffaqiyatli o‘tkazildi',
    en: '80+ audits successfully completed in 2023–2025',
  } as Trilang,
}
