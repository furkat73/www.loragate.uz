import { Pill, Truck, UtensilsCrossed, Warehouse, type LucideIcon } from 'lucide-react'

export type LangText = { title: string; desc: string }
export type AudienceSlug = 'pharma' | 'pharmacy' | 'food' | 'logistics'

export type Audience = {
  slug: AudienceSlug
  route: string
  icon: LucideIcon
  /** Ключ кейса в translations (cases.*) — заголовок, описание, выгоды */
  caseKey: string
  benefitKeys: string[]
  subtitle: { ru: string; uz: string; en: string }
  pains: { ru: LangText[]; uz: LangText[]; en: LangText[] }
  solutions: { ru: LangText[]; uz: LangText[]; en: LangText[] }
}

export const AUDIENCES: Record<AudienceSlug, Audience> = {
  pharma: {
    slug: 'pharma',
    route: '/pharma',
    icon: Warehouse,
    caseKey: 'pharma',
    benefitKeys: [
      'cases.pharma.benefit1',
      'cases.pharma.benefit2',
      'cases.pharma.benefit3',
      'cases.pharma.benefit4',
    ],
    subtitle: {
      ru: 'GMP / GDP-контроль складов: автоматический учёт, валидация и документы для инспекций',
      uz: 'Omborlarning GMP / GDP nazorati: avtomatik hisob, validatsiya va inspeksiyalar uchun hujjatlar',
      en: 'GMP / GDP warehouse control: automatic logging, validation and inspection documents',
    },
    pains: {
      ru: [
        { title: 'Проверки GMP / GDP', desc: 'Ручные журналы 2–3 раза в день не доказывают соблюдение режимов — риск штрафов и приостановки.' },
        { title: 'Порча дорогих препаратов', desc: 'Ночное отклонение температуры обнаруживается утром, когда партия уже испорчена.' },
        { title: 'Нет валидационных документов', desc: 'URS, IQ / OQ / PQ отсутствуют — инспектору нечего предъявить.' },
        { title: 'Слепые зоны склада', desc: 'Датчики стоят «где удобно», а не в критических точках — картирование не проводилось.' },
      ],
      uz: [
        { title: 'GMP / GDP tekshiruvlari', desc: 'Kuniga 2–3 marta qo‘lda yuritiladigan jurnallar rejimga rioya qilinganini isbotlamaydi — jarima va to‘xtatish xavfi.' },
        { title: 'Qimmat preparatlarning buzilishi', desc: 'Kechasi konditsioner o‘chishi ertalab aniqlanadi — partiya allaqachon buzilgan bo‘ladi.' },
        { title: 'Validatsiya hujjatlari yo‘q', desc: 'URS, IQ / OQ / PQ mavjud emas — inspektorga ko‘rsatadigan narsa yo‘q.' },
        { title: 'Omborning «ko‘r joylari»', desc: 'Datchiklar kritik nuqtalarda emas, «qulay joyda» turibdi — kartalash o‘tkazilmagan.' },
      ],
      en: [
        { title: 'GMP / GDP inspections', desc: 'Manual logs taken 2–3 times a day prove nothing — fines and shutdowns loom.' },
        { title: 'Spoiled expensive drugs', desc: 'A nighttime HVAC failure is discovered in the morning, when the batch is already ruined.' },
        { title: 'No validation documents', desc: 'URS, IQ / OQ / PQ are missing — there is nothing to show the inspector.' },
        { title: 'Warehouse blind spots', desc: 'Sensors sit where convenient, not at critical points — mapping was never done.' },
      ],
    },
    solutions: {
      ru: [
        { title: 'Автоматический учёт 24/7', desc: 'Непрерывная запись температуры и влажности с защитой данных от редактирования.' },
        { title: 'Уведомления за 5 минут', desc: 'SMS / Telegram ответственным при выходе за пределы — днём, ночью и в выходные.' },
        { title: 'Отчёты для инспектора', desc: 'Графики и таблицы за любой период в PDF / Excel в один клик.' },
        { title: 'Валидация под ключ', desc: 'URS, IQ / OQ / PQ, SOP и проверка средств измерения из Госреестра.' },
      ],
      uz: [
        { title: '24/7 avtomatik hisob', desc: 'Harorat va namlikning uzluksiz yozuvi, ma’lumotlar tahrirdan himoyalangan.' },
        { title: '5 daqiqada xabarnoma', desc: 'Chegaradan chiqishda mas’ullarga SMS / Telegram — kunduzi, kechasi va dam olishda.' },
        { title: 'Inspektor uchun hisobotlar', desc: 'Istalgan davr uchun grafik va jadvallar PDF / Excel da bir klikda.' },
        { title: 'Kalit taslim validatsiya', desc: 'URS, IQ / OQ / PQ, SOP va Davlat reyestridagi o‘lchov vositalari.' },
      ],
      en: [
        { title: 'Automatic 24/7 logging', desc: 'Continuous temperature and humidity recording with tamper-proof data.' },
        { title: 'Alerts within 5 minutes', desc: 'SMS / Telegram to responsible staff on threshold breaches — day, night and weekends.' },
        { title: 'Reports for the inspector', desc: 'Charts and tables for any period in PDF / Excel in one click.' },
        { title: 'Turnkey validation', desc: 'URS, IQ / OQ / PQ, SOPs and State Register measuring instruments.' },
      ],
    },
  },
  pharmacy: {
    slug: 'pharmacy',
    route: '/pharmacy',
    icon: Pill,
    caseKey: 'medicine',
    benefitKeys: [
      'cases.medicine.benefit1',
      'cases.medicine.benefit2',
      'cases.medicine.benefit3',
      'cases.medicine.benefit4',
    ],
    subtitle: {
      ru: 'Контроль всех точек аптечной сети с одного экрана: вакцины, холодильники, склады',
      uz: 'Dorixona tarmog‘ining barcha nuqtalarini bir ekrandan nazorat: vaksinalar, muzlatgichlar, omborlar',
      en: 'Control every pharmacy chain location from one screen: vaccines, fridges, warehouses',
    },
    pains: {
      ru: [
        { title: 'Вакцины и термолабильные препараты', desc: 'Режим +2…+8 °C нарушился ночью — а вы узнали об этом только утром. Партия уже под вопросом.' },
        { title: 'Ночь и выходные — самые опасные часы', desc: 'Холодильник мог отключиться в 2 часа ночи. Утром в журнале будет стоять «нормальная» температура — потому что её просто записали после открытия аптеки.' },
        { title: 'Инспекция требует доказательства', desc: '«Покажите, что температура соблюдалась». Бумажные журналы с пробелами, исправлениями и одинаковыми цифрами доверия не добавляют.' },
        { title: 'Ручная запись в бумажный журнал', desc: 'Ответственный смотрит на аналоговый гигрометр, прикидывает значение и записывает ручкой. Иногда забывает. Иногда ставит «удобную» цифру. Ночью и в выходные записей нет совсем.' },
      ],
      uz: [
        { title: 'Termolabil preparatlar va vaksinalar', desc: '+2...+8 °C sovuq zanjir buzilishi uzluksiz nazoratsiz sezilmaydi.' },
        { title: 'Tungi va dam olish xavflari', desc: 'Yopiq dorixonada muzlatgich o‘chishi faqat ertalab bilinadi.' },
        { title: 'Dorixona inspeksiyasi tekshiruvlari', desc: 'Har bir nuqta bo‘yicha saqlash shartlariga rioya dalillarini talab qiladi.' },
        { title: 'Filiallarda qo‘l jurnallari', desc: 'Tarmoq bo‘yicha o‘nlab qog‘oz jurnallar: xatolar, o‘tkazib yuborish, mehnat sarfi.' },
      ],
      en: [
        { title: 'Thermo-sensitive drugs and vaccines', desc: '+2...+8 °C cold chain breaches go unnoticed without continuous control.' },
        { title: 'Night and weekend risks', desc: 'A fridge failure in a closed pharmacy is discovered only in the morning.' },
        { title: 'Pharmacy inspections', desc: 'Inspectors demand proof of storage compliance for every location.' },
        { title: 'Paper logs across branches', desc: 'Dozens of paper logs network-wide: errors, gaps, labor costs.' },
      ],
    },
    solutions: {
      ru: [
        { title: 'Вся сеть — как на ладони', desc: 'Открыли один экран и видите все холодильники, склады и залы всех филиалов. Статусы, графики, тревоги — в реальном времени. Больше не нужно обходить точки с ручкой и тетрадью.' },
        { title: 'Заведующая узнаёт первой', desc: 'Отклонение? Сразу SMS и Telegram: какая точка, какое значение, во сколько произошло. Даже в 3 часа ночи — когда бумажный журнал всё равно никто не заполняет.' },
        { title: 'Отчёт для инспектора за 30 секунд', desc: 'Больше не нужно подходить к гигрометру с ручкой. Система сама записывает температуру и влажность круглосуточно. При проверке вы просто выгружаете файл.' },
        { title: 'Новая аптека — за несколько часов', desc: 'Поставили датчик, добавили точку на карту — и филиал уже в общей системе. Растите сеть без лишней бюрократии и новых бумажных журналов.' },
      ],
      uz: [
        { title: 'Butun tarmoq bir ekranda', desc: 'Barcha filiallarning muzlatgichlari, omborlari va zallari — statuslar, grafiklar, signallar.' },
        { title: 'Mudiraga xabarnoma', desc: 'Chetga chiqishda SMS / Telegram: aniq nuqta, qiymat, vaqt.' },
        { title: 'Tekshiruvlar uchun avtohisobotlar', desc: 'Har bir nuqta bo‘yicha istalgan davr tarixi — qo‘l kiritishsiz.' },
        { title: 'Oson kengaytirish', desc: 'Yangi dorixona soatlarda ulanadi: datchik + xaritada nuqta.' },
      ],
      en: [
        { title: 'Entire chain on one screen', desc: 'Fridges, warehouses and halls of all branches — statuses, charts, alarms.' },
        { title: 'Alerts to the manager', desc: 'SMS / Telegram on deviation: exact location, value, time.' },
        { title: 'Auto-reports for inspections', desc: 'History per location for any period — no manual entry.' },
        { title: 'Easy scaling', desc: 'A new pharmacy connects in hours: a sensor plus a map point.' },
      ],
    },
  },
  food: {
    slug: 'food',
    route: '/food',
    icon: UtensilsCrossed,
    caseKey: 'foodWarehouse',
    benefitKeys: [
      'cases.foodWarehouse.benefit1',
      'cases.foodWarehouse.benefit2',
      'cases.foodWarehouse.benefit3',
      'cases.foodWarehouse.benefit4',
    ],
    subtitle: {
      ru: 'Соблюдение температурных режимов и саннорм: склады, производство, морозильники',
      uz: 'Harorat rejimlari va sanitariya me’yorlariga rioya: omborlar, ishlab chiqarish, muzlatgichlar',
      en: 'Temperature regimes and sanitary norms: warehouses, production, freezers',
    },
    pains: {
      ru: [
        { title: 'Порча партий', desc: 'Разморозка или перегрев. Тысячи килограммов продукции могут быть потеряны, потому что отклонение заметили слишком поздно.' },
        { title: 'Санитарные проверки', desc: 'Требуют доказательств соблюдения режима за весь период. Точечные записи и «красивые» журналы доверия не добавляют.' },
        { title: 'Большие площади', desc: 'Обход склада с ручным термометром занимает часы и даёт только точку в момент измерения. Что было ночью — неизвестно.' },
        { title: 'Перерасход энергии', desc: 'Холодильное оборудование работает «вслепую». Без понимания реальных режимов легко переплачивать за электричество.' },
      ],
      uz: [
        { title: 'Partiyalarning buzilishi', desc: 'Kech aniqlanishi sababli minglab kilo mahsulotning erishi yoki qizishi.' },
        { title: 'Sanitariya tekshiruvlari', desc: 'Butun davr uchun saqlash rejimlariga rioya dalillari kerak.' },
        { title: 'Katta maydonlar', desc: 'Omborlarni qo‘l termometri bilan aylanish soatlarni oladi va nuqtaviy ma’lumot beradi.' },
        { title: 'Energiya isrofi', desc: 'Sovutish uskunalari real rejimlar tahlilisiz ko‘r-ko‘rona ishlaydi.' },
      ],
      en: [
        { title: 'Spoiled batches', desc: 'Thawing or overheating of thousands of kilos due to late detection.' },
        { title: 'Sanitary inspections', desc: 'Proof of storage regime compliance for the whole period is required.' },
        { title: 'Huge areas', desc: 'Walking warehouses with a handheld thermometer takes hours and gives spot data.' },
        { title: 'Energy overspend', desc: 'Refrigeration runs blind, with no analysis of real operating regimes.' },
      ],
    },
    solutions: {
      ru: [
        { title: 'Контроль режимов 24/7', desc: 'Датчики во всех зонах: склады, камеры, холодильники и морозильники. Температура и влажность записываются постоянно.' },
        { title: 'Мгновенные алерты', desc: 'Разморозка, перегрев или сбой оборудования — уведомление приходит сразу ответственным. Даже ночью.' },
        { title: 'История для проверяющих', desc: 'Температурные кривые и данные за любой период выгружаются в PDF или Excel за минуту. Без ручного сбора.' },
        { title: 'Меньше потерь и затрат', desc: 'Раннее обнаружение отклонений спасает партии и помогает не гонять оборудование вхолостую.' },
      ],
      uz: [
        { title: 'Rejimlarni 24/7 nazorat', desc: 'Barcha zonalarda datchiklar: omborlar, sexlar, muzlatgich va morozilniklar.' },
        { title: 'Tezkor ogohlantirishlar', desc: 'Erish, qizish va uskuna nosozliklarida bildirishnomalar.' },
        { title: 'Tekshiruvchilar uchun tarix', desc: 'Istalgan davr harorat egri chiziqlari — PDF / Excel da.' },
        { title: 'Kamroq yo‘qotish', desc: 'Chetga chiqishlarni erta aniqlash partiyalarni saqlaydi va energiya hisobini kamaytiradi.' },
      ],
      en: [
        { title: '24/7 regime control', desc: 'Sensors in every zone: warehouses, shops, fridges and freezers.' },
        { title: 'Instant alerts', desc: 'Notifications on thawing, overheating and equipment failures.' },
        { title: 'History for inspectors', desc: 'Temperature curves for any period — in PDF / Excel.' },
        { title: 'Fewer losses', desc: 'Early deviation detection saves batches and cuts energy bills.' },
      ],
    },
  },
  logistics: {
    slug: 'logistics',
    route: '/logistics',
    icon: Truck,
    caseKey: 'logistics',
    benefitKeys: [
      'cases.logistics.benefit1',
      'cases.logistics.benefit2',
      'cases.logistics.benefit3',
    ],
    subtitle: {
      ru: 'Контроль холодовой цепи: склады, транспорт, перевалка — без слепых зон',
      uz: 'Sovuq zanjir nazorati: omborlar, transport, qayta yuklash — ko‘r joylarsiz',
      en: 'Cold chain control: warehouses, transport, transshipment — no blind spots',
    },
    pains: {
      ru: [
        { title: 'Слепые зоны в пути', desc: 'Между погрузкой и выгрузкой — чёрный ящик. Неизвестно, что происходило с грузом: перегрев, разморозка, долгая остановка с открытыми дверями.' },
        { title: 'Споры о виновнике порчи', desc: 'Груз пришёл повреждённым. Кто виноват — склад, перевозчик или перевалка? Без непрерывных данных доказать почти невозможно.' },
        { title: 'Требования GDP к перевозке', desc: 'Фармгрузы требуют документированного контроля температуры в пути. Бумажные журналы и разовые логгеры всё чаще не принимаются.' },
        { title: 'Разрозненные данные', desc: 'Логгеры-флешки снимаются вручную, данные сводятся в таблицы днями. К моменту, когда всё собрали, реакция уже бесполезна.' },
      ],
      uz: [
        { title: 'Yo‘ldagi ko‘r joylar', desc: 'Yuklash va tushirish orasida yuk bilan nima bo‘lgani noma’lum.' },
        { title: 'Buzilish aybdori bo‘yicha nizolar', desc: 'Uzluksiz ma’lumotlarsiz rejim qayerda buzilganini isbotlab bo‘lmaydi.' },
        { title: 'Tashishga GDP talablari', desc: 'Farm yuklar yo‘lda haroratning hujjatlashtirilgan nazoratini talab qiladi.' },
        { title: 'Tarqoq ma’lumotlar', desc: 'Logger-flashkalar qo‘lda olinadi va kunlab jadvallarga kiritiladi.' },
      ],
      en: [
        { title: 'Blind spots in transit', desc: 'No one knows what happened to the cargo between loading and unloading.' },
        { title: 'Disputes over who is at fault', desc: 'Without continuous data you cannot prove where the regime broke.' },
        { title: 'GDP transport requirements', desc: 'Pharma cargo requires documented in-transit temperature control.' },
        { title: 'Scattered data', desc: 'Logger flash drives are collected manually and tabulated over days.' },
      ],
    },
    solutions: {
      ru: [
        { title: 'Цепь под контролем', desc: 'Склады, рефрижераторы и перевалка — единая картина в реальном времени. Вы видите весь путь груза, а не отдельные куски.' },
        { title: 'Доказательная база', desc: 'Непрерывный трек температуры груза — сильный аргумент в спорах с клиентом, страховой и водителем.' },
        { title: 'Автоотчёты по рейсам', desc: 'Отчёт по каждому рейсу и клиенту формируется автоматически. Не нужно ничего сводить вручную.' },
        { title: 'Уведомления в пути', desc: 'Водитель и диспетчер узнают об отклонении сразу, а не на выгрузке, когда уже поздно.' },
      ],
      uz: [
        { title: 'Zanjir nazoratda', desc: 'Omborlar, refrijeratorlar va qayta yuklash — real vaqtda yagona manzara.' },
        { title: 'Isbot bazasi', desc: 'Yuk haroratining uzluksiz treki — nizolar va sug‘urta uchun dalil.' },
        { title: 'Reyslar bo‘yicha avtohisobotlar', desc: 'Har bir reys va mijoz bo‘yicha hisobot avtomatik shakllanadi.' },
        { title: 'Yo‘lda bildirishnomalar', desc: 'Haydovchi va dispetcher chetga chiqishni darhol biladi, tushirishda emas.' },
      ],
      en: [
        { title: 'Chain under control', desc: 'Warehouses, reefers and transshipment — one real-time picture.' },
        { title: 'Evidence base', desc: 'Continuous cargo temperature track — leverage in disputes and insurance.' },
        { title: 'Auto-reports per trip', desc: 'A report per trip and client is generated automatically.' },
        { title: 'En-route notifications', desc: 'Driver and dispatcher learn of deviations at once, not at unloading.' },
      ],
    },
  },
}

export const AUDIENCE_LIST: Audience[] = [
  AUDIENCES.pharma,
  AUDIENCES.pharmacy,
  AUDIENCES.food,
  AUDIENCES.logistics,
]
