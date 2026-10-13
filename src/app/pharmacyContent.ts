/** Трёхъязычный контент страницы «Аптека и медицина» (v2) */

export type Trilang = { ru: string; uz: string; en: string }

export const pharmacyHero = {
  subtitle: {
    ru: 'Все холодильники и склады вашей сети — на одном экране. Вакцины под контролем. Ночные сюрпризы — под контролем. Проверки — без стресса.',
    uz: 'Tarmog‘ingizdagi barcha muzlatgich va omborlar — bitta ekranda. Vaksinalar nazoratda. Tungi kutilmagan holatlar — nazoratda. Tekshiruvlar — stressiz.',
    en: 'Every fridge and warehouse in your chain — on one screen. Vaccines under control. Night surprises — under control. Inspections — stress-free.',
  } as Trilang,
  primaryBtn: {
    ru: 'Получить бесплатный аудит сети',
    uz: 'Tarmoqning bepul auditini olish',
    en: 'Get a free chain audit',
  } as Trilang,
  secondaryBtn: {
    ru: 'Посмотреть экран заведующей',
    uz: 'Mudira ekranini ko‘rish',
    en: 'See the manager’s screen',
  } as Trilang,
  perks: [
    {
      ru: 'Вся сеть в одном окне',
      uz: 'Butun tarmoq bitta oynada',
      en: 'Entire chain in one window',
    },
    {
      ru: 'Тревога приходит заведующей за минуты',
      uz: 'Xavf signali mudiraga daqiqalarda yetadi',
      en: 'The manager is alerted within minutes',
    },
    {
      ru: 'Отчёты для инспекции готовы в один клик',
      uz: 'Inspeksiya hisobotlari bir klikda tayyor',
      en: 'Inspection reports ready in one click',
    },
  ] as Trilang[],
}

export const pharmacyPains = {
  title: {
    ru: 'Узнаёте свою аптечную сеть?',
    uz: 'Dorixona tarmog‘ingizni taniysizmi?',
    en: 'Recognize your pharmacy chain?',
  } as Trilang,
  items: {
    ru: [
      { title: 'Вакцины и термолабильные препараты', desc: 'Режим +2…+8 °C нарушился ночью — а вы узнали об этом только утром. Партия уже под вопросом.' },
      { title: 'Ночь и выходные — самые опасные часы', desc: 'Холодильник мог отключиться в 2 часа ночи. Утром в журнале будет стоять «нормальная» температура — потому что её просто записали после открытия аптеки.' },
      { title: 'Инспекция требует доказательства', desc: '«Покажите, что температура соблюдалась». Бумажные журналы с пробелами, исправлениями и одинаковыми цифрами доверия не добавляют.' },
      { title: 'Ручная запись в бумажный журнал', desc: 'Ответственный смотрит на аналоговый гигрометр, прикидывает значение и записывает ручкой. Иногда забывает. Иногда ставит «удобную» цифру. Ночью и в выходные записей нет совсем.' },
    ],
    uz: [
      { title: 'Vaksinalar va termolabil preparatlar', desc: '+2…+8 °C rejim tungi buzildi — buni faqat ertalab bildingiz. Partiya allaqachon savol ostida.' },
      { title: 'Tun va dam olish — eng xavfli soatlar', desc: 'Muzlatgich tungi soat 2 da o‘chgan bo‘lishi mumkin. Ertalab jurnalda «normal» harorat turadi — chunki u dorixona ochilgandan keyin yozilgan.' },
      { title: 'Inspeksiya dalil talab qiladi', desc: '«Harorat saqlanganini ko‘rsating». Bo‘shliqlar, tuzatishlar va bir xil raqamli qog‘oz jurnallar ishonch qo‘shmaydi.' },
      { title: 'Qog‘oz jurnalga qo‘lda yozish', desc: 'Mas’ul xodim analog gigrometrga qaraydi, qiymatni chamalab ruchkada yozadi. Ba’zan unutadi. Ba’zan «qulay» raqam qo‘yadi. Tun va dam olishda yozuvlar umuman yo‘q.' },
    ],
    en: [
      { title: 'Vaccines and thermo-sensitive drugs', desc: 'The +2…+8 °C regime broke at night — and you only learned about it in the morning. The batch is already compromised.' },
      { title: 'Nights and weekends are the riskiest hours', desc: 'A fridge could have gone off at 2 AM. The morning log will show a “normal” temperature — because it was written down after the pharmacy opened.' },
      { title: 'Inspections demand proof', desc: '“Show us the temperature was maintained.” Paper logs with gaps, corrections and identical figures inspire little confidence.' },
      { title: 'Manual paper log entries', desc: 'The responsible employee glances at an analog hygrometer, estimates the value and writes it down by hand. Sometimes forgets. Sometimes writes a “convenient” figure. At night and on weekends there are no entries at all.' },
    ],
  } as Record<string, { title: string; desc: string }[]>,
}

export const pharmacySolutions = {
  title: {
    ru: 'Как мы убираем эти головные боли',
    uz: 'Bu bosh og‘riqlarni qanday yo‘qotamiz',
    en: 'How we remove these headaches',
  } as Trilang,
  items: {
    ru: [
      { title: 'Вся сеть — как на ладони', desc: 'Открыли один экран и видите все холодильники, склады и залы всех филиалов. Статусы, графики, тревоги — в реальном времени. Больше не нужно обходить точки с ручкой и тетрадью.' },
      { title: 'Заведующая узнаёт первой', desc: 'Отклонение? Сразу SMS и Telegram: какая точка, какое значение, во сколько произошло. Даже в 3 часа ночи — когда бумажный журнал всё равно никто не заполняет.' },
      { title: 'Отчёт для инспектора за 30 секунд', desc: 'Больше не нужно подходить к гигрометру с ручкой. Система сама записывает температуру и влажность круглосуточно. При проверке вы просто выгружаете файл.' },
      { title: 'Новая аптека — за несколько часов', desc: 'Поставили датчик, добавили точку на карту — и филиал уже в общей системе. Растите сеть без лишней бюрократии и новых бумажных журналов.' },
    ],
    uz: [
      { title: 'Butun tarmoq — kaftdagidek', desc: 'Bitta ekranni ochdingiz va barcha filiallarning muzlatgichlari, omborlari va zallarini ko‘rasiz. Statuslar, grafiklar, signallar — real vaqtda. Endi nuqtalarni ruchka-daftar bilan aylanish shart emas.' },
      { title: 'Mudira birinchi bo‘lib biladi', desc: 'Og‘ishmi? Darhol SMS va Telegram: qaysi nuqta, qanday qiymat, qachon sodir bo‘ldi. Hatto tungi soat 3 da ham — qog‘oz jurnal baribir hech kim to‘ldirmaydigan paytda.' },
      { title: 'Inspektor uchun 30 soniyada hisobot', desc: 'Endi gigrometr oldiga ruchka bilan borish shart emas. Tizim harorat va namlikni kecha-kunduz o‘zi yozadi. Tekshiruvda shunchaki faylni yuklab olasiz.' },
      { title: 'Yangi dorixona — bir necha soatda', desc: 'Datchik o‘rnatildi, xaritaga nuqta qo‘shildi — filial umumiy tizimda. Tarmoqni ortiqcha qog‘ozbozlik va yangi qog‘oz jurnallarsiz kengaytiring.' },
    ],
    en: [
      { title: 'The entire chain at a glance', desc: 'Open one screen and see every fridge, warehouse and hall across all branches. Statuses, charts, alarms — in real time. No more walking the locations with pen and notebook.' },
      { title: 'The manager learns first', desc: 'A deviation? Instant SMS and Telegram: which location, what value, when it happened. Even at 3 AM — when nobody fills in the paper log anyway.' },
      { title: 'Inspector report in 30 seconds', desc: 'No more walking up to the hygrometer with a pen. The system records temperature and humidity around the clock by itself. At inspection you simply export the file.' },
      { title: 'A new pharmacy in hours', desc: 'Install a sensor, add a point to the map — and the branch is in the shared system. Grow the chain without extra bureaucracy or new paper logs.' },
    ],
  } as Record<string, { title: string; desc: string }[]>,
}

export const pharmacyBenefits = {
  title: {
    ru: 'Спокойствие вместо постоянной тревоги',
    uz: 'Doimiy xavotir o‘rniga xotirjamlik',
    en: 'Peace of mind instead of constant worry',
  } as Trilang,
  items: {
    ru: [
      'Температура и влажность записываются автоматически 24/7 — без ручки и журнала',
      'Любое отклонение сразу приходит ответственным',
      'Отчёты для проверок собираются сами',
      'Аналоговые гигрометры и бумажные тетради больше не нужны',
    ],
    uz: [
      'Harorat va namlik 24/7 avtomatik yoziladi — ruchka va journalsiz',
      'Har qanday og‘ish darhol mas’ullarga yetadi',
      'Tekshiruvlar uchun hisobotlar o‘zi yig‘iladi',
      'Analog gigrometrlar va qog‘oz daftarlar endi kerak emas',
    ],
    en: [
      'Temperature and humidity logged automatically 24/7 — no pen, no logbook',
      'Every deviation reaches the responsible staff instantly',
      'Inspection reports assemble themselves',
      'Analog hygrometers and paper notebooks no longer needed',
    ],
  } as Record<string, string[]>,
  results: {
    ru: [
      'Заведующая видит всю сеть прямо с телефона',
      'Ночные и выходные перестают быть источником стресса',
      'Больше не нужно помнить, записали температуру или забыли',
      'К проверкам можно готовиться спокойно, а не в панике',
    ],
    uz: [
      'Mudira butun tarmoqni bevosita telefondan ko‘radi',
      'Tun va dam olish kunlari stress manbai bo‘lmay qoladi',
      'Harorat yozildimi yoki unutilganini eslash shart emas',
      'Tekshiruvlarga vahima bilan emas, xotirjam tayyorlanish mumkin',
    ],
    en: [
      'The manager sees the entire chain right from her phone',
      'Nights and weekends stop being a source of stress',
      'No more wondering whether the temperature was logged or forgotten',
      'Prepare for inspections calmly, not in a panic',
    ],
  } as Record<string, string[]>,
}

export const pharmacyNumbers = [
  { value: '24/7', label: { ru: 'контроль даже когда все спят', uz: 'hamma uxlaganda ham nazorat', en: 'control even while everyone sleeps' } },
  { value: 'минуты', label: { ru: 'а не утро следующего дня', uz: 'ertasi kuni ertalab emas', en: 'not the next morning' } },
  { value: '0', label: { ru: 'ручных записей в журнале', uz: 'jurnalda qo‘l yozuvlari', en: 'manual logbook entries' } },
] as { value: string; label: Trilang }[]

export const pharmacyScreen = {
  title: {
    ru: 'Один экран вместо десятка тетрадей и гигрометров',
    uz: 'O‘nlab daftar va gigrometrlar o‘rniga bitta ekran',
    en: 'One screen instead of a dozen notebooks and hygrometers',
  } as Trilang,
  text: {
    ru: 'Все точки сети перед глазами. Зелёный — всё в норме. Жёлтый или красный — сразу видно, где проблема. История, графики и отчёты — тоже здесь. Ручка и бумажный журнал больше не нужны.',
    uz: 'Tarmoqning barcha nuqtalari ko‘z oldingizda. Yashil — hammasi normada. Sariq yoki qizil — muammo qayerdaligi darhol ko‘rinadi. Tarix, grafiklar va hisobotlar — ham shu yerda. Ruchka va qog‘oz jurnal endi kerak emas.',
    en: 'Every network location before your eyes. Green means all good. Yellow or red shows instantly where the problem is. History, charts and reports live here too. No pen or paper log needed.',
  } as Trilang,
  caption: {
    ru: 'Так выглядит рабочий стол заведующей или руководителя сети.',
    uz: 'Mudira yoki tarmoq rahbarining ish stoli shunday ko‘rinadi.',
    en: 'This is what the manager’s or chain head’s workspace looks like.',
  } as Trilang,
  demoBtn: {
    ru: 'Посмотреть демо-интерфейс',
    uz: 'Demo-interfeysni ko‘rish',
    en: 'View the demo interface',
  } as Trilang,
}

export const pharmacyScaling = {
  title: {
    ru: 'От одной аптеки до большой сети — без боли',
    uz: 'Bitta dorixonadan katta tarmoqqa — og‘riqsiz',
    en: 'From one pharmacy to a big chain — painlessly',
  } as Trilang,
  text: {
    ru: 'Открыли новый филиал? Просто добавили датчик и точку на карту. Вся история, права доступа и отчёты уже работают в единой системе.',
    uz: 'Yangi filial ochdingizmi? Shunchaki datchik va xaritaga nuqta qo‘shdingiz. Butun tarix, kirish huquqlari va hisobotlar yagona tizimda ishlab turibdi.',
    en: 'Opened a new branch? Just add a sensor and a point on the map. All history, access rights and reports already run in one system.',
  } as Trilang,
  perks: [
    {
      ru: 'Один аккаунт на всю сеть',
      uz: 'Butun tarmoqqa bitta akkaunt',
      en: 'One account for the whole chain',
    },
    {
      ru: 'Разные роли: заведующая, руководитель, технический специалист',
      uz: 'Turli rollar: mudira, rahbar, texnik mutaxassis',
      en: 'Different roles: manager, head, technician',
    },
    {
      ru: 'Данные не теряются и не размазываются по разным таблицам',
      uz: 'Ma’lumotlar yo‘qolmaydi va turli jadvallarga sochilib ketmaydi',
      en: 'Data never gets lost or scattered across spreadsheets',
    },
  ] as Trilang[],
}

export const pharmacyDocs = {
  title: {
    ru: 'К проверке можно быть готовым заранее',
    uz: 'Tekshiruvga oldindan tayyor bo‘lish mumkin',
    en: 'Be ready for inspection in advance',
  } as Trilang,
  text: {
    ru: 'Инспектор просит данные — вы открываете систему и выгружаете отчёт. Никаких срочных дописываний в журнал и поиска «куда делась запись за вторник».',
    uz: 'Inspektor ma’lumot so‘raydi — siz tizimni ochib hisobotni yuklab olasiz. Jurnalga shoshilinch qo‘shimchalar va «seshanba kungi yozuv qani» izlash yo‘q.',
    en: 'The inspector asks for data — you open the system and export the report. No frantic logbook top-ups, no hunting for “where did Tuesday’s entry go”.',
  } as Trilang,
  items: [
    {
      ru: 'Полная история температуры и влажности без пропусков',
      uz: 'O‘tkazib yuborishlarsiz harorat va namlikning to‘liq tarixi',
      en: 'Complete gap-free temperature and humidity history',
    },
    {
      ru: 'Фиксация каждого отклонения с точным временем',
      uz: 'Har bir og‘ishni aniq vaqti bilan qayd etish',
      en: 'Every deviation logged with exact time',
    },
    {
      ru: 'Готовые отчёты в PDF и Excel',
      uz: 'PDF va Excel da tayyor hisobotlar',
      en: 'Ready PDF and Excel reports',
    },
    {
      ru: 'Данные, которым можно доверять, а не «удобные» цифры из тетради',
      uz: 'Daftardagi «qulay» raqamlar emas, ishonchli ma’lumotlar',
      en: 'Trustworthy data, not “convenient” notebook figures',
    },
  ] as Trilang[],
}

export const pharmacyCta = {
  title: {
    ru: 'Хотите понять, где у вашей сети слабые места?',
    uz: 'Tarmog‘ingizning zaif joylari qayerdaligini bilmoqchimisiz?',
    en: 'Want to find your chain’s weak spots?',
  } as Trilang,
  desc: {
    ru: 'Инженер приедет, проверит сигнал, найдёт зоны риска и покажет, как лучше расставить датчики. Бесплатно и без обязательств.',
    uz: 'Muhandis keladi, signalni tekshiradi, xavf zonalarni topadi va datchiklarni qanday joylashtirishni ko‘rsatadi. Bepul va majburiyatsiz.',
    en: 'An engineer will visit, check the signal, find risk zones and show the best sensor placement. Free, no obligations.',
  } as Trilang,
  cta: {
    ru: 'Получить экспресс-аудит сети',
    uz: 'Tarmoq ekspress-auditini olish',
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

export const pharmacyFaq = {
  title: {
    ru: 'Вопросы, которые нам задают чаще всего',
    uz: 'Bizga eng ko‘p beriladigan savollar',
    en: 'Questions we’re asked most often',
  } as Trilang,
  items: {
    ru: [
      { q: 'Можно ли видеть все аптеки в одном месте?', a: 'Да. Вся сеть отображается на одном экране. Вы сразу понимаете, где всё в порядке, а где нужно вмешательство.' },
      { q: 'Кто получает тревожные сообщения?', a: 'Те, кого вы укажете: заведующая, руководитель сети или несколько человек сразу. Сообщения приходят в SMS и Telegram.' },
      { q: 'Как быстро подключается новый филиал?', a: 'Обычно в течение нескольких часов. Установили датчик — точка появилась в системе.' },
      { q: 'Подойдут ли ваши отчёты для фарминспекции?', a: 'Да. Система отдаёт полную историю с точными данными. Многие клиенты именно так и проходят проверки.' },
      { q: 'Что будет на бесплатном аудите?', a: 'Инженер посмотрит покрытие сигналом, найдёт потенциально опасные места и предложит схему размещения датчиков. Ничего покупать сразу не нужно.' },
    ],
    uz: [
      { q: 'Barcha dorixonalarni bir joyda ko‘rish mumkinmi?', a: 'Ha. Butun tarmoq bitta ekranda ko‘rinadi. Qayerda hammasi joyida, qayerda aralashuv kerakligini darhol tushunasiz.' },
      { q: 'Xavfli xabarlarni kim oladi?', a: 'Siz ko‘rsatganlar: mudira, tarmoq rahbari yoki bir nechta odam bir vaqtda. Xabarlar SMS va Telegram orqali keladi.' },
      { q: 'Yangi filial qanchalik tez ulanadi?', a: 'Odatda bir necha soatda. Datchik o‘rnatildi — nuqta tizimda paydo bo‘ldi.' },
      { q: 'Hisobotlaringiz dorixona inspeksiyasiga mos keladimi?', a: 'Ha. Tizim aniq ma’lumotlar bilan to‘liq tarixni beradi. Ko‘plab mijozlar tekshiruvlardan aynan shunday o‘tadi.' },
      { q: 'Bepul auditda nima bo‘ladi?', a: 'Muhandis signal qoplamini ko‘radi, potentsial xavfli joylarni topadi va datchiklarni joylashtirish sxemasini taklif qiladi. Darhol hech narsa sotib olish shart emas.' },
    ],
    en: [
      { q: 'Can all pharmacies be seen in one place?', a: 'Yes. The whole chain appears on one screen. You immediately see where things are fine and where intervention is needed.' },
      { q: 'Who receives the alarm messages?', a: 'Whoever you designate: the manager, the chain head, or several people at once. Messages arrive via SMS and Telegram.' },
      { q: 'How fast is a new branch connected?', a: 'Usually within a few hours. The sensor is installed — and the location appears in the system.' },
      { q: 'Will your reports satisfy a pharmacy inspection?', a: 'Yes. The system provides full history with precise data. Many clients pass inspections exactly this way.' },
      { q: 'What happens during the free audit?', a: 'The engineer will check signal coverage, find potentially risky spots and suggest a sensor placement map. No need to buy anything on the spot.' },
    ],
  } as Record<string, { q: string; a: string }[]>,
}
