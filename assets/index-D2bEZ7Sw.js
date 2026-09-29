import {
  r as m,
  j as e,
  S as xe,
  P as E,
  X as ee,
  M as ue,
  A as J,
  C as ge,
  F as M,
  a as fe,
  W as te,
  b as be,
  c as O,
  d as se,
  e as pe,
  R as H,
  f as ve,
  N as ae,
  Z as je,
  G as ie,
  g as we,
  h as X,
  i as ye,
  B as re,
  k as Ne,
  l as ke,
  L as ze,
  m as $,
  T as Se,
  n as Ce,
  o as V,
  p as qe,
  q as K,
  D as Z,
  E as Pe,
  s as Ie,
  t as Ee,
  H as Le,
  u as De,
  v as Me,
  w as Ge,
  x as Te,
  y as Ae,
  z as Re,
  I as Be,
  J as _,
  K as Oe,
  O as Fe,
  Q as G,
  U as _e,
  V as We,
  Y as He,
  _ as Ve,
  $ as Ue,
  a0 as Je,
  a1 as Xe,
  a2 as Ke,
  a3 as U,
  a4 as Ze,
  a5 as $e,
  a6 as Qe,
  a7 as Ye,
  a8 as et,
  a9 as F,
  aa as Q,
  ab as tt,
  ac as le,
  ad as st,
  ae as at,
} from "./react-vendor-DvH9DnfZ.js";
import { t as it, c as rt, a as lt } from "./vendor-DbILsbV5.js";
import "./radix-vendor-DW48STyt.js";
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) n(c);
  new MutationObserver((c) => {
    for (const r of c)
      if (r.type === "childList")
        for (const a of r.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(c) {
    const r = {};
    return (
      c.integrity && (r.integrity = c.integrity),
      c.referrerPolicy && (r.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    );
  }
  function n(c) {
    if (c.ep) return;
    c.ep = !0;
    const r = i(c);
    fetch(c.href, r);
  }
})();
const ne = m.createContext(void 0),
  nt = {
    ru: {
      header: {
        home: "Главная",
        equipment: "О системе",
        services: "Услуги",
        cases: "Кейсы",
        contacts: "Контакты",
        demo: "Посмотреть демо",
        order: "Заказать внедрение",
      },
      hero: {
        badge: "Инновационные технологии LoRa для мониторинга микроклимата",
        title:
          "Валидированная система мониторинга микроклимата для фармацевтических и пищевых предприятий",
        description:
          "Непрерывный мониторинг температуры и влажности с хранением данных, автоматическими оповещениями и отчётами разработанными в соответствии с требованиями GMP, GDP, GPP, GSP и FDA.",
        about:
          "Lora Gate — это не просто датчики и программа. Мы внедряем, валидируем и сопровождаем компьютеризированную систему мониторинга на протяжении периода эксплуатации, хранения и транспортировки продукции, которая принимается регуляторами и используется при GMP / GDP инспекциях.",
        advantage1: "Соответствие требованиям GMP, GDP, GPP, GSP и FDA",
        advantage2: "История измерений и отчёты для аудита в формате PDF/Excel",
        advantage3:
          "Автоматические уведомления по SMS/Email/Push при отклонениях",
        advantage4: "Защита и неизменность данных",
        advantage5:
          "24/7 мониторинг всех зон хранения включая морозильные камеры и холодильные камеры",
        advantage6: "Долгий срок работы датчиков, до 2 лет без замены батарей",
        orderButton: "Заказать внедрение",
        demoButton: "Посмотреть демо",
        downloadKP: "Скачать Коммерческое предложение",
        statsClients: "Клиентов",
        statsReliability: "Надёжность",
        statsSupport: "Поддержка",
        monitoring24: "24/7 Контроль для GMP, GDP, GPP, GSP и FDA",
        monitoringDesc: "Круглосуточный контроль температуры и влажности",
        supportDays: "При заказе системы мониторинга",
        supportDesc: "- Бесплатный аудит соответствия GxP",
        supportDesc2: "- 90 дней - Бесплатной технической поддержки",
      },
      gmpSolution: {
        title: "GMP-решение под ключ",
        description:
          "Lora Gate — это не просто датчики и программа. Мы предоставляем:",
        design: "Проектирование системы",
        installation: "Установку датчиков и шлюзов",
        platform: "Облачную платформу",
        validation: "IQ / OQ / PQ валидацию",
        documents: "Полный пакет документов",
        support: "Сопровождение при проверках GMP, GDP, GPP, GSP и FDA",
      },
      validation: {
        title: "Валидация системы Lora Gate",
        weDo: "Мы выполняем:",
        youGet: "Вы получаете:",
        iq: "IQ — квалификация установки",
        oq: "OQ — квалификация функционирования",
        pq: "PQ — квалификация производительности",
        protocols: "Протоколы",
        reports: "Отчёты",
        signatures: "Подписи",
        inspectorDocs: "Документы для инспектора",
      },
      benefits: {
        title: "Преимущество системы Lora Gate",
        wireless: {
          title: "Беспроводная система мониторинга",
          desc: "Полностью беспроводное решение без необходимости прокладки кабелей",
        },
        sensors: {
          title: "Беспроводные датчики",
          desc: "Автономные датчики с передачей данных по LoRa на расстояние до 300м",
        },
        connection: {
          title: "Соединение шлюза с сервером через Wi-Fi и Ethernet",
          desc: "Гибкое подключение к интернету: беспроводной Wi-Fi или проводной Ethernet",
        },
        easyInstall: {
          title: "Простота в установке",
          desc: "Быстрый монтаж без сложных настроек и специальных инструментов",
        },
        scalable: {
          title: "Масштабируемость до больших площадей",
          desc: "Легкое расширение системы для мониторинга больших складов и комплексов",
        },
        webInterface: {
          title: "Web-интерфейс — доступ с любого устройства",
          desc: "Доступ с любого устройства с любой точки мира, где имеется интернет",
        },
        ownDev: {
          title:
            "Собственная разработка валидированного облачного web-приложения",
          desc: "Разработано с учетом требований стандартов GMP и прошедшая валидацию",
        },
        realTime: {
          title: "Реальное время",
          desc: "Данные обновляются мгновенно",
        },
        notifications: {
          title: "Автоматические уведомления",
          desc: "SMS/Email/Push при отклонениях",
        },
        reports: { title: "Отчёты и архив", desc: "Для аудита и валидации" },
        flexible: {
          title: "Гибкая настройка",
          desc: "Зоны контроля, пороги, расписания",
        },
        security: {
          title: "Безопасность данных",
          desc: "Защищённое хранение и доступ",
        },
      },
      aboutSystem: {
        title: "О системе",
        subtitle:
          "Полный цикл внедрения системы климат-мониторинга от проектирования до запуска в эксплуатацию",
        fullCycle: {
          title: "Полный цикл внедрения системы климат-мониторинга под ключ",
          desc: "От проектирования до запуска в эксплуатацию",
        },
        setup: {
          title: "Настройка, установка и сервисное обслуживание",
          desc: "Профессиональная поддержка на всех этапах",
        },
        integration: {
          title: "Интеграция с корпоративными системами",
          desc: "Подключение к информационным системам и системам уведомлений",
        },
        training: {
          title: "Обучение персонала",
          desc: "Комплексное обучение работе с системой",
        },
      },
      howItWorks: {
        title: "Как работает решение",
        subtitle: "Архитектура системы",
        advantagesTitle: "Преимущества LoRa",
        coverage: {
          title: "Большой радиус покрытия",
          desc: "До 300 метров в городских условиях",
        },
        lowPower: {
          title: "Низкое энергопотребление датчиков",
          desc: "Работа от батарей до 2  лет",
        },
        interference: {
          title: "Устойчивость к помехам",
          desc: "Надежная связь даже в сложных условиях",
        },
        scalability: {
          title: "Масштабируемость",
          desc: "Легкое расширение системы",
        },
      },
      equipment: {
        title: "Что входит в систему мониторинга Lora Gate?",
        subtitle:
          "Профессиональное оборудование для мониторинга температуры и влажности",
        gateway: {
          title: "Шлюз Wi-Fi",
          loraSupport: {
            title: "Поддержка LoRaWAN",
            desc: "Стандарт связи для IoT устройств",
          },
          connection: {
            title: "Соединение через Wi-Fi и Ethernet",
            desc: "Гибкое подключение к интернету: беспроводной Wi-Fi или проводной Ethernet",
          },
          reception: {
            title: "Устойчивый приём от датчиков",
            desc: "Надежная связь на расстоянии до 300 метров",
          },
        },
        sensors: {
          title: "Безпроводные Датчики температуры и влажности",
          wireless: {
            title: "Беспроводные датчики",
            desc: "Полностью беспроводное решение без кабелей",
          },
          measurement: {
            title: "Измерение температуры и влажности",
            desc: "Высокая точность измерений от -40°C до +125°C и влажности от 0% до 100%",
          },
          battery: {
            title: "Длительная работа от батарей",
            desc: "До 2 лет автономной работы",
          },
          reliable: {
            title: "Надёжная связь с LoRa-шлюзом",
            desc: "Стабильная передача данных на расстояние до 300м",
          },
        },
        specs: "Запросить технические спецификации",
      },
      services: {
        title: "Услуги",
        subtitle: "Полный спектр услуг для вашего бизнеса",
        installation: {
          title: "Установка и настройка",
          desc: "Профессиональный монтаж и конфигурация всех компонентов системы",
        },
        support: {
          title: "Техподдержка 24/7",
          desc: "Круглосуточная поддержка пользователей и мониторинг работы системы",
        },
        maintenance: {
          title: "Обслуживание и замена датчиков",
          desc: "Регулярное техническое обслуживание и своевременная замена оборудования",
        },
        integration: {
          title: "Интеграция с информационными системами",
          desc: "Подключение к корпоративным информационным системам",
        },
        training: {
          title: "Обучение персонала",
          desc: "Комплексное обучение работе с системой мониторинга",
        },
        backup: {
          title: "Резервное копирование и хранение данных системы",
          desc: "Надёжное резервное копирование и безопасное хранение всех данных",
        },
        validation: {
          title: "Валидация компьютеризированных систем",
          desc: "Валидация систем в соответствии с требованиями GMP и международными стандартами",
        },
        learnMore: "Узнать подробнее",
      },
      contacts: {
        title: "Контакты",
        subtitle: "Свяжитесь с нами любым удобным способом",
        ourContacts: "Наши контакты",
        address: "Адрес",
        addressValue:
          "Узбекистан, г. Ташкент Мирзо-Улугбекский р-н. ул. Ялангач -15",
        phone: "Телефон",
        email: "Email",
        socialMedia: "Социальные сети",
        mapTitle: "Карта проезда",
        formTitle: "Форма обратной связи",
        name: "Имя *",
        namePlaceholder: "Введите ваше имя",
        emailPlaceholder: "your@email.com",
        phonePlaceholder: "+998 (XX) XXX-XX-XX",
        message: "Сообщение *",
        messagePlaceholder: "Опишите ваш запрос...",
        submit: "Отправить",
        successMessage:
          "Спасибо за обращение! Мы свяжемся с вами в ближайшее время.",
      },
      footer: {
        description: "Система мониторинга температуры и влажности на базе LoRa",
        aboutCompany: "О компании",
        cases: "Кейсы",
        certifications: "Сертификаты",
        products: "Продукция и Услуги",
        allProducts: "О системе",
        temperatureSensors: "Датчики температуры",
        wifiGateways: "Шлюзы Wi-Fi",
        services: "Услуги",
        contacts: "Контакты",
        product: "GDP",
        download: "GPP",
        feedback: "FDA",
        copyright: "Все права защищены.",
      },
      stats: {
        reliability: {
          value: "Качеством и надежностью",
          label: "Надёжность системы",
          desc: "Время работы без сбоев",
        },
        clients: {
          value: "150+",
          label: "Довольных клиентов",
          desc: "Компаний используют систему",
        },
        experience: {
          value: "5 лет",
          label: "Опыт работы",
          desc: "На рынке мониторинга",
        },
        support: {
          value: "24/7",
          label: "Техподдержка",
          desc: "Круглосуточная помощь",
        },
      },
      promoBanner: {
        sensors: {
          title: "Датчики TAG 08 / TAG 08B",
          subtitle: "Точность измерений и долговечность",
          description:
            "Беспроводные датчики температуры и влажности с автономной работой батареи до 2 лет. Высокая точность измерений для фармацевтики и пищевой промышленности.",
          badge: "Зона покрытия до 300 метров",
          feature1: "Автономная работа батареи до 2 лет",
          feature2: "Высокая точность измерений",
          feature3: "Устойчивость к внешним воздействиям",
          feature4: "Простая установка и настройка",
        },
        gateway: {
          title: "Шлюз Wi-Fi RD07",
          subtitle: "Надёжная связь для вашего бизнеса",
          description:
            "Современный LoRa Gate шлюз с поддержкой Wi-Fi. Обеспечивает стабильную передачу данных от датчиков на расстоянии до 300 метров.",
          badge: "Стабильность",
          feature1: "Поддержка стандарта LoRaWAN",
          feature2: "Простое подключение через Wi-Fi",
          feature3: "Работа 24/7 без перерывов",
          feature4: "Удалённый мониторинг и управление",
        },
        dashboard: {
          title: "Веб-приложение мониторинга",
          subtitle: "Полный контроль в реальном времени",
          description:
            "Интуитивный интерфейс для мониторинга всех датчиков. Графики, отчёты, уведомления и экспорт данных в один клик.",
          badge: "Бесплатно",
          feature1: "Дашборд в реальном времени",
          feature2: "Интерфейс на русском и узбекском языках",
          feature3: "Схема расположения датчиков на территории",
          feature4: "История и аналитика",
          feature5: "Автоматические уведомления",
          feature6: "Экспорт отчётов PDF/Excel",
        },
        orderNow: "Заказать сейчас",
        learnMore: "Подробнее",
      },
      cases: {
        title: "Кейсы использования",
        subtitle: "Примеры внедрения решений в различных отраслях",
        pharma: {
          title: "Фармацевтический склад",
          description:
            "Автоматизация контроля среды по нормативам GMP. Снижение рисков брака продукции.",
          benefit1: "Соответствие GDP стандартам",
          benefit2: "Автоматические отчёты для аудита",
          benefit3: "Снижение потерь продукции",
          benefit4:
            "Поддержание качества продукции в соответствии с GDP стандартами",
        },
        logistics: {
          title: "Логистика и транспорт",
          description:
            "Стабильный мониторинг температурных режимов на всех этапах логистики.",
          benefit1: "Контроль всей холодильной цепи",
          benefit2: "Автоматические отчёты для инспекций",
          benefit3: "Мгновенные уведомления о нарушениях",
        },
        medicine: {
          title: "Аптека и медицина",
          description:
            "Надёжный контроль условий хранения медицинских препаратов и вакцин.",
          benefit1: "Соответствие требованиям хранения",
          benefit2: "Непрерывный мониторинг 24/7",
          benefit3: "Автоматические отчёты для инспекций",
          benefit4: "Отсутвие ручного ввода данных в журнале и в системе",
        },
        foodWarehouse: {
          title: "Пищевые склады",
          description:
            "Контроль температуры и влажности на складах пищевых продуктов для сохранения качества и безопасности.",
          benefit1: "Соблюдение температурных режимов хранения",
          benefit2: "Предотвращение порчи продуктов",
          benefit3: "Соответствие санитарным нормам",
          benefit4: "Автоматические уведомления о нарушениях",
        },
        freezer: {
          title: "Морозильные камеры",
          description:
            "Непрерывный мониторинг температуры в морозильных камерах для сохранения качества замороженных продуктов.",
          benefit1: "Контроль критических температурных зон",
          benefit2: "Предотвращение размораживания",
          benefit3: "Экономия энергии и снижение потерь",
          benefit4: "Круглосуточный мониторинг без перерывов",
        },
        greenhouse: {
          title: "Теплицы",
          description:
            "Контроль микроклимата в теплицах для оптимального роста растений и максимальной урожайности.",
          benefit1: "Поддержание оптимальной температуры и влажности",
          benefit2: "Предупреждение о критических изменениях микроклимата",
          benefit3: "Повышение урожайности и качества продукции",
          benefit4: "Автоматизация контроля условий выращивания",
        },
      },
      webApp: {
        title: "Облачное Web-приложение мониторинга",
        description1:
          "Собственная разработка облачного web-приложения, руководствуясь требованиям стандартов GMP и прошедшая валидацию.",
        description2:
          "Доступ с любого устройства с любой точки мира, где имеется интернет.",
        mainFunctions: "Основные функции:",
        validation: {
          title: "Валидация GMP",
          desc: "Web-приложение разработано с учетом требований стандартов GMP и прошло валидацию",
        },
        access: {
          title: "Доступ с любого устройства",
          desc: "Web-интерфейс доступен с любого устройства с любой точки мира, где имеется интернет",
        },
        dashboard: {
          title: "Дашборд текущих измерений",
          desc: "Мгновенный обзор всех датчиков",
        },
        history: {
          title: "История и графики",
          desc: "Температура и влажность за любой период",
        },
        alerts: {
          title: "Настройка тревог и уведомлений",
          desc: "Гибкие правила оповещений",
        },
        points: {
          title: "Управление точками контроля",
          desc: "Удобная организация датчиков",
        },
        export: {
          title: "Экспорт отчетов (PDF / Excel)",
          desc: "Данные для аудита и анализа",
        },
        demoButton: "Посмотреть демо",
        interface: "Интуитивный интерфейс",
        interfaceDesc: "Быстрый доступ ко всем функциям",
      },
      certifications: {
        title: "Сертификаты и соответствие стандартам",
        subtitle:
          "Наша продукция соответствует международным стандартам качества и безопасности",
        description:
          "Оборудование Lora Gate внесено в Государственный реестр средств измерений Республики Узбекистан и может использоваться в фармацевтических и пищевых предприятиях при проверках регулятора.",
        uzcert:
          "Сертификат UZCERT - Зарегистрирован в Государственном реестре РУз",
        ozst: "Сертификат соответствия стандартам РУз",
        rohs: "Сертификат RoHS - Соответствие экологическим стандартам",
        iso9001: "Сертификат ISO 9001 - Система менеджмента качества",
        gmp: "Сертификат GMP - Соответствие стандартам надлежащей производственной практики",
      },
      common: { readMore: "Подробнее", learnMore: "Узнать больше" },
    },
    uz: {
      header: {
        home: "Bosh sahifa",
        equipment: "Tizim haqida",
        services: "Xizmatlar",
        cases: "Loyihalar",
        contacts: "Kontaktlar",
        demo: "Demo ko'rish",
        order: "Joriy etishni buyurtma qilish",
      },
      hero: {
        badge:
          "Mikroiqlimni monitoring qilish uchun LoRa innovatsion texnologiyalari",
        title:
          "Farmatsevtika va oziq-ovqat korxonalari uchun validatsiyadan o'tkazilgan, mikroiqlim monitoring tizimi",
        description:
          "Ma'lumotlarni saqlash, avtomatik xabarnomalar va GMP, GDP, GPP, GSP va FDA talablariga muvofiq ishlab chiqilgan hisobotlar bilan harorat va namlikni uzluksiz monitoring qilish.",
        about:
          "Lora Gate - bu shunchaki sensorlar va dastur emas. Biz ekspluatatsiya, saqlash va mahsulot tashish davrida regulyatorlar tomonidan qabul qilingan va GMP / GDP tekshiruvlarida ishlatiladigan kompyuterlashtirilgan monitoring tizimini joriy qilamiz, validatsiya qilamiz va kuzatib boramiz.",
        advantage1: "GMP, GDP, GPP, GSP va FDA talablariga mos keladi",
        advantage2:
          "Audit uchun PDF/Excel formatida o'lchovlar tarixi va hisobotlar",
        advantage3: "Og'ishlarda SMS/Email/Push orqali avtomatik xabarnomalar",
        advantage4: "Ma'lumotlarni himoya qilish va o'zgartirib bo'lmasligi",
        advantage5:
          "Muzlatgichlar va sovutgichlar kabi barcha saqlash zonalarini 24/7 monitoring",
        advantage6:
          "Sensorlarning uzoq muddatli ishlashi, batareyalarni almashtirmasdan 2 yilgacha",
        orderButton: "Joriy etishni buyurtma qilish",
        demoButton: "Demo ko'rish",
        downloadKP: "Tijorat taklifini yuklab olish",
        statsClients: "Mijozlar",
        statsReliability: "Ishonchlilik",
        statsSupport: "Qo'llab-quvvatlash",
        monitoring24: "GMP va FDA uchun 24/7 nazorat",
        monitoringDesc: "Harorat va namlikni kecha-kunduz nazorat qilish",
        supportDays: "Monitoring tizimini buyurtma qilganda",
        supportDesc: "- GxPga moslik bo'yicha bepul audit",
        supportDesc2: "- 90 kun - Bepul texnik yordam",
      },
      gmpSolution: {
        title: 'GMP yechim "kalitdan-kalitgacha"',
        description:
          "Lora Gate - bu shunchaki sensorlar va dastur emas. Biz taqdim etamiz:",
        design: "Tizimni loyihalash",
        installation: "Sensorlar va shlyuzlarni o'rnatish",
        platform: "Bulut platformasi",
        validation: "IQ / OQ / PQ validatsiya",
        documents: "To'liq hujjatlar paketi",
        support: "GMP, GDP, GPP, GSP va FDA tekshiruvlarida yordam",
      },
      validation: {
        title: "Lora Gate tizimini validatsiya qilish",
        weDo: "Biz bajaramiz:",
        youGet: "Siz olasiz:",
        iq: "IQ - o'rnatishni malakalash",
        oq: "OQ - ishlashni malakalash",
        pq: "PQ - ishlash ko'rsatkichlarini malakalash",
        protocols: "Protokollar",
        reports: "Hisobotlar",
        signatures: "Imzolar",
        inspectorDocs: "Inspektor uchun hujjatlar",
      },
      benefits: {
        title: "Lora Gate tizimining afzalliklari",
        wireless: {
          title: "Simsiz monitoring tizimi",
          desc: "Kabel yotqizish zarurati bo'lmagan to'liq simsiz yechim",
        },
        sensors: {
          title: "Simsiz sensorlar",
          desc: "300m masofagacha LoRa orqali ma'lumot uzatish bilan avtonom sensorlar",
        },
        connection: {
          title: "Wi-Fi va Ethernet orqali shlyuzni serverga ulash",
          desc: "Internetga moslashuvchan ulanish: simsiz Wi-Fi yoki simli Ethernet",
        },
        easyInstall: {
          title: "O'rnatish osonligi",
          desc: "Murakkab sozlashlar va maxsus asboblar bo'lmagan tez o'rnatish",
        },
        scalable: {
          title: "Katta maydonlarga miqyoslash",
          desc: "Katta omborlar va komplekslarni monitoring qilish uchun tizimni oson kengaytirish",
        },
        webInterface: {
          title: "Web-interfeys - har qanday qurilmadan kirish",
          desc: "Internet mavjud bo'lgan dunyoning har qanday nuqtasidan har qanday qurilmadan kirish",
        },
        ownDev: {
          title:
            "Validatsiya qilingan bulutli web-ilovaning o'z ishlab chiqarishi",
          desc: "GMP standartlari talablarini hisobga olgan holda ishlab chiqilgan va validatsiyadan o'tgan",
        },
        realTime: {
          title: "Real vaqt",
          desc: "Ma'lumotlar darhol yangilanadi",
        },
        notifications: {
          title: "Avtomatik xabarnomalar",
          desc: "Og'ishlarda SMS/Email/Push",
        },
        reports: {
          title: "Hisobotlar va arxiv",
          desc: "Audit va validatsiya uchun",
        },
        flexible: {
          title: "Moslashuvchan sozlash",
          desc: "Nazorat zonalari, chegaralar, jadval",
        },
        security: {
          title: "Ma'lumotlar xavfsizligi",
          desc: "Himoyalangan saqlash va kirish",
        },
      },
      aboutSystem: {
        title: "Tizim haqida",
        subtitle:
          "Loyihalashdan ekspluatatsiyaga qadar iqlim monitoring tizimini joriy etishning to'liq tsikli",
        fullCycle: {
          title: `Iqlim monitoring tizimini "kalitdan-kalitgacha" to'liq tsikli`,
          desc: "Loyihalashdan ekspluatatsiyaga qadar",
        },
        setup: {
          title: "Sozlash, o'rnatish va xizmat ko'rsatish",
          desc: "Barcha bosqichlarda professional yordam",
        },
        integration: {
          title: "Korporativ tizimlar bilan integratsiya",
          desc: "Axborot tizimlari va xabarnoma tizimlariga ulanish",
        },
        training: {
          title: "Xodimlarni o'qitish",
          desc: "Tizim bilan ishlash bo'yicha kompleks o'qitish",
        },
      },
      howItWorks: {
        title: "Yechim qanday ishlaydi",
        subtitle: "Tizim arxitekturasi",
        advantagesTitle: "LoRa afzalliklari",
        coverage: {
          title: "Katta qamrov radiusi",
          desc: "Shahar sharoitida 300 metrgacha",
        },
        lowPower: {
          title: "Sensorlarning past energiya iste'moli",
          desc: "Batareyalardan 2 yilgacha ishlash",
        },
        interference: {
          title: "Shovqinga chidamlilik",
          desc: "Qiyin sharoitlarda ham ishonchli aloqa",
        },
        scalability: { title: "Miqyoslash", desc: "Tizimni oson kengaytirish" },
      },
      equipment: {
        title: "Lora Gate monitoring tizimiga nima kiradi?",
        subtitle:
          "Harorat va namlikni monitoring qilish uchun professional uskunalar",
        gateway: {
          title: "Wi-Fi shlyuzi",
          loraSupport: {
            title: "LoRaWAN qo'llab-quvvatlash",
            desc: "IoT qurilmalari uchun aloqa standarti",
          },
          connection: {
            title: "Wi-Fi va Ethernet orqali ulanish",
            desc: "Internetga moslashuvchan ulanish: simsiz Wi-Fi yoki simli Ethernet",
          },
          reception: {
            title: "Sensorlardan barqaror qabul qilish",
            desc: "300 metrgacha masofada ishonchli aloqa",
          },
        },
        sensors: {
          title: "Simsiz harorat va namlik sensorlari",
          wireless: {
            title: "Simsiz sensorlar",
            desc: "Kabellar bo'lmagan to'liq simsiz yechim",
          },
          measurement: {
            title: "Harorat va namlikni o'lchash",
            desc: "-40°C dan +125°C gacha va 0% dan 100% gacha namlik uchun yuqori aniqlik",
          },
          battery: {
            title: "Batareyalardan uzoq muddatli ishlash",
            desc: "2 yilgacha avtonom ishlash",
          },
          reliable: {
            title: "LoRa-shlyuz bilan ishonchli aloqa",
            desc: "300m masofagacha barqaror ma'lumot uzatish",
          },
        },
        specs: "Texnik spetsifikatsiyalarni so'rash",
      },
      services: {
        title: "Xizmatlar",
        subtitle: "Biznesingiz uchun to'liq xizmatlar spektri",
        installation: {
          title: "O'rnatish va sozlash",
          desc: "Tizimning barcha komponentlarini professional o'rnatish va konfiguratsiya qilish",
        },
        support: {
          title: "24/7 texnik yordam",
          desc: "Foydalanuvchilarni kecha-kunduz qo'llab-quvvatlash va tizim ishini monitoring qilish",
        },
        maintenance: {
          title: "Xizmat ko'rsatish va sensorlarni almashtirish",
          desc: "Muntazam texnik xizmat ko'rsatish va uskunalarni o'z vaqtida almashtirish",
        },
        integration: {
          title: "Axborot tizimlari bilan integratsiya",
          desc: "Korporativ axborot tizimlariga ulanish",
        },
        training: {
          title: "Xodimlarni o'qitish",
          desc: "Monitoring tizimi bilan ishlash bo'yicha kompleks o'qitish",
        },
        backup: {
          title: "Tizim ma'lumotlarini zaxiralash va saqlash",
          desc: "Barcha ma'lumotlarni ishonchli zaxiralash va xavfsiz saqlash",
        },
        validation: {
          title: "Kompyuterlashtirilgan tizimlarni validatsiya qilish",
          desc: "GMP talablariga va xalqaro standartlarga muvofiq tizimlarni validatsiya qilish",
        },
        learnMore: "Batafsil ma'lumot olish",
      },
      contacts: {
        title: "Kontaktlar",
        subtitle: "Biz bilan qulay usul bilan bog'laning",
        ourContacts: "Bizning kontaktlarimiz",
        address: "Manzil",
        addressValue:
          "O'zbekiston, Toshkent sh. Mirzo-Ulug'bek t. Yalangoch ko'chasi -15",
        phone: "Telefon",
        email: "Email",
        socialMedia: "Ijtimoiy tarmoqlar",
        mapTitle: "Yo'l xaritasi",
        formTitle: "Aloqa formasi",
        name: "Ism *",
        namePlaceholder: "Ismingizni kiriting",
        emailPlaceholder: "your@email.com",
        phonePlaceholder: "+998 (XX) XXX-XX-XX",
        message: "Xabar *",
        messagePlaceholder: "So'rovingizni tasvirlang...",
        submit: "Yuborish",
        successMessage:
          "Murojaatingiz uchun rahmat! Tez orada siz bilan bog'lanamiz.",
      },
      footer: {
        description: "LoRa asosidagi harorat va namlik monitoring tizimi",
        aboutCompany: "Kompaniya haqida",
        cases: "Loyihalar",
        certifications: "Sertifikatlar",
        products: "Mahsulotlar va Xizmatlar",
        allProducts: "Tizim haqida",
        temperatureSensors: "Harorat sensorlari",
        wifiGateways: "Wi-Fi shlyuzlari",
        services: "Xizmatlar",
        contacts: "Kontaktlar",
        product: "GDP",
        download: "GPP",
        feedback: "FDA",
        copyright: "Barcha huquqlar himoyalangan.",
      },
      stats: {
        reliability: {
          value: "Sifat va ishonchlilik",
          label: "Tizimning ishonchliligi",
          desc: "Nosozliklarsiz ishlash vaqti",
        },
        clients: {
          value: "150+",
          label: "Mamnun mijozlar",
          desc: "Kompaniyalar tizimdan foydalanadi",
        },
        experience: {
          value: "5 yil",
          label: "Ish tajribasi",
          desc: "Monitoring bozorida",
        },
        support: {
          value: "24/7",
          label: "Texnik yordam",
          desc: "Kecha-kunduz yordam",
        },
      },
      promoBanner: {
        sensors: {
          title: "TAG 08 / TAG 08B sensorlari",
          subtitle: "O'lchovlarning aniqligi va chidamliligi",
          description:
            "Batareyadan 2 yilgacha avtonom ishlaydigan simsiz harorat va namlik sensorlari. Farmatsevtika va oziq-ovqat sanoati uchun yuqori o'lchov aniqligi.",
          badge: "300 metrgacha qamrov zonasi",
          feature1: "Batareyadan 2 yilgacha avtonom ishlash",
          feature2: "Yuqori o'lchov aniqligi",
          feature3: "Tashqi ta'sirlarga chidamlilik",
          feature4: "Oddiy o'rnatish va sozlash",
        },
        gateway: {
          title: "Wi-Fi RD07 shlyuzi",
          subtitle: "Biznesingiz uchun ishonchli aloqa",
          description:
            "Wi-Fi qo'llab-quvvatlash bilan zamonaviy LoRa Gate shlyuzi. Sensorlardan 300 metrgacha masofada barqaror ma'lumot uzatishni ta'minlaydi.",
          badge: "Barqarorlik",
          feature1: "LoRaWAN standartini qo'llab-quvvatlash",
          feature2: "Wi-Fi orqali oddiy ulanish",
          feature3: "Tanaffussiz 24/7 ishlash",
          feature4: "Masofadan monitoring va boshqarish",
        },
        dashboard: {
          title: "Monitoring veb-ilovasi",
          subtitle: "Real vaqtda to'liq nazorat",
          description:
            "Barcha sensorlarni monitoring qilish uchun intuitiv interfeys. Grafiklar, hisobotlar, xabarnomalar va bir bosishda ma'lumotlarni eksport qilish.",
          badge: "Bepul",
          feature1: "Real vaqtda dashboard",
          feature2: "Rus va o'zbek tillarida interfeys",
          feature3: "Hududdagi sensorlarning joylashish sxemasi",
          feature4: "Tarix va tahlil",
          feature5: "Avtomatik xabarnomalar",
          feature6: "PDF/Excel hisobotlarni eksport qilish",
        },
        orderNow: "Hozir buyurtma qilish",
        learnMore: "Batafsil",
      },
      cases: {
        title: "Foydalanish loyihalari",
        subtitle: "Turli sohalarda yechimlarni joriy etish misollari",
        pharma: {
          title: "Farmatsevtika ombori",
          description:
            "GMP normalariga muvofiq muhitni nazorat qilishni avtomatlashtirish. Mahsulotlar nuqsoni xavfini kamaytirish.",
          benefit1: "GDP standartlariga mos keladi",
          benefit2: "Audit uchun avtomatik hisobotlar",
          benefit3: "Mahsulot yo'qotishlarini kamaytirish",
          benefit4: "GDP standartlariga muvofiq mahsulot sifatini saqlash",
        },
        logistics: {
          title: "Logistika va transport",
          description:
            "Logistikaning barcha bosqichlarida harorat rejimlarini barqaror monitoring qilish.",
          benefit1: "Butun sovutish zanjirini nazorat qilish",
          benefit2: "Tekshiruvlar uchun avtomatik hisobotlar",
          benefit3: "Buzilishlar haqida darhol xabarnomalar",
        },
        medicine: {
          title: "Apteka va tibbiyot",
          description:
            "Tibbiy preparatlar va vaktsinalarni saqlash sharoitlarini ishonchli nazorat qilish.",
          benefit1: "Saqlash talablariga mos keladi",
          benefit2: "24/7 uzluksiz monitoring",
          benefit3: "Tekshiruvlar uchun avtomatik hisobotlar",
          benefit4: "Jurnal va tizimda qo'lda ma'lumot kiritishning yo'qligi",
        },
        foodWarehouse: {
          title: "Oziq-ovqat omborlari",
          description:
            "Sifat va xavfsizlikni saqlash uchun oziq-ovqat mahsulotlari omborlarida harorat va namlikni nazorat qilish.",
          benefit1: "Saqlash harorat rejimlariga rioya qilish",
          benefit2: "Mahsulotlarning buzilishini oldini olish",
          benefit3: "Sanitariya normalariga mos keladi",
          benefit4: "Buzilishlar haqida avtomatik xabarnomalar",
        },
        freezer: {
          title: "Muzlatgichlar",
          description:
            "Muzlatilgan mahsulotlar sifatini saqlash uchun muzlatgichlarda haroratni uzluksiz monitoring qilish.",
          benefit1: "Kritik harorat zonalarini nazorat qilish",
          benefit2: "Muzdan chiqishning oldini olish",
          benefit3: "Energiya tejash va yo'qotishlarni kamaytirish",
          benefit4: "Tanaffussiz kecha-kunduz monitoring",
        },
        greenhouse: {
          title: "Issiqxonalar",
          description:
            "O'simliklarning optimal o'sishi va maksimal hosildorligi uchun issiqxonalarda mikroiqlimni nazorat qilish.",
          benefit1: "Optimal harorat va namlikni saqlash",
          benefit2: "Mikroiqlimning kritik o'zgarishlari haqida ogohlantirish",
          benefit3: "Hosildorlik va mahsulot sifatini oshirish",
          benefit4:
            "O'stirish sharoitlarini nazorat qilishni avtomatlashtirish",
        },
      },
      webApp: {
        title: "Monitoring bulutli veb-ilovasi",
        description1:
          "GMP standartlari talablariga asoslanib ishlab chiqilgan va validatsiyadan o'tgan bulutli veb-ilovaning o'z ishlab chiqarishi.",
        description2:
          "Internet mavjud bo'lgan dunyoning har qanday nuqtasidan har qanday qurilmadan kirish.",
        mainFunctions: "Asosiy funksiyalar:",
        validation: {
          title: "GMP validatsiya",
          desc: "Veb-ilova GMP standartlari talablarini hisobga olgan holda ishlab chiqilgan va validatsiyadan o'tgan",
        },
        access: {
          title: "Har qanday qurilmadan kirish",
          desc: "Veb-interfeys internet mavjud bo'lgan dunyoning har qanday nuqtasidan har qanday qurilmadan mavjud",
        },
        dashboard: {
          title: "Joriy o'lchovlar dashboardi",
          desc: "Barcha sensorlarning darhol ko'rinishi",
        },
        history: {
          title: "Tarix va grafiklar",
          desc: "Har qanday davr uchun harorat va namlik",
        },
        alerts: {
          title: "Ogohlantirishlar va xabarnomalarni sozlash",
          desc: "Moslashuvchan xabarnoma qoidalari",
        },
        points: {
          title: "Nazorat nuqtalarini boshqarish",
          desc: "Sensorlarni qulay tashkil etish",
        },
        export: {
          title: "Hisobotlarni eksport qilish (PDF / Excel)",
          desc: "Audit va tahlil uchun ma'lumotlar",
        },
        demoButton: "Demo ko'rish",
        interface: "Intuitiv interfeys",
        interfaceDesc: "Barcha funksiyalarga tez kirish",
      },
      certifications: {
        title: "Sertifikatlar va standartlarga moslik",
        subtitle:
          "Bizning mahsulotlarimiz xalqaro sifat va xavfsizlik standartlariga mos keladi",
        description:
          "Lora Gate uskunalari O'zbekiston Respublikasi o'lchov vositalari Davlat reestriga kiritilgan va farmatsevtika va oziq-ovqat korxonalarida regulyator tekshiruvlarida ishlatilishi mumkin.",
        uzcert: "UZCERT sertifikati - O'zR Davlat reestriga ro'yxatdan o'tgan",
        ozst: "O'zR standartlariga moslik sertifikati",
        rohs: "RoHS sertifikati - Ekologik standartlarga moslik",
        iso9001: "ISO 9001 sertifikati - Sifat boshqaruvi tizimi",
        gmp: "GMP sertifikati - Yaxshi ishlab chiqarish amaliyotlari standartlariga moslik",
      },
      common: { readMore: "Batafsil", learnMore: "Ko'proq ma'lumot olish" },
    },
  };
function ot({ children: t }) {
  const [s, i] = m.useState(() => {
    if (typeof window < "u") {
      const r = localStorage.getItem("language");
      if (r === "ru" || r === "uz") return r;
    }
    return "ru";
  });
  m.useEffect(() => {
    typeof window < "u" &&
      (localStorage.setItem("language", s),
      (document.documentElement.lang = s));
  }, [s]);
  const n = (r) => {
      i(r);
    },
    c = (r) => {
      const a = r.split(".");
      let l = nt[s];
      for (const o of a)
        if (((l = l == null ? void 0 : l[o]), l === void 0))
          return (
            console.warn(
              `Translation key "${r}" not found for language "${s}"`,
            ),
            r
          );
      return typeof l == "string" ? l : r;
    };
  return e.jsx(ne.Provider, {
    value: { language: s, setLanguage: n, t: c },
    children: t,
  });
}
function y() {
  const t = m.useContext(ne);
  if (t === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return t;
}
function ct({
  title:
    t = "LoRa Gate - Система мониторинга температуры и влажности для GMP / GDP / FDA",
  description:
    s = "Валидированная система мониторинга температуры и влажности для фармацевтических и пищевых предприятий. Соответствие требованиям GMP, GDP, FDA. Беспроводные датчики LoRa, валидация, документация.",
  keywords:
    i = "мониторинг температуры, мониторинг влажности, GMP, GDP, FDA, валидация, LoRa, датчики температуры, фармацевтика, пищевая промышленность, климат-мониторинг, система мониторинга",
  image: n = "/images/dashboard.png",
  url: c = "https://loragate.uz/",
}) {
  return (
    m.useEffect(() => {
      document.title = t;
      const r = (b, h, u = "name") => {
        let g = document.querySelector(`meta[${u}="${b}"]`);
        g ||
          ((g = document.createElement("meta")),
          g.setAttribute(u, b),
          document.head.appendChild(g)),
          (g.content = h);
      };
      r("description", s),
        r("keywords", i),
        r("title", t),
        r("og:title", t, "property"),
        r("og:description", s, "property"),
        r("og:image", n, "property"),
        r("og:url", c, "property"),
        r("twitter:title", t, "property"),
        r("twitter:description", s, "property"),
        r("twitter:image", n, "property");
      let a = document.querySelector('link[rel="canonical"]');
      a ||
        ((a = document.createElement("link")),
        (a.rel = "canonical"),
        document.head.appendChild(a)),
        (a.href = c);
      const l = {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Lora Gate",
          url: c,
          logo: `${c}images/logo.png`,
          description: s,
          address: {
            "@type": "PostalAddress",
            streetAddress: "ул. Ялангач -15",
            addressLocality: "Ташкент",
            addressRegion: "Мирзо-Улугбекский район",
            addressCountry: "UZ",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+998-99-868-19-73",
            contactType: "customer service",
            email: "loragateuz@gmail.com",
            availableLanguage: "Russian",
          },
          sameAs: [],
          offers: {
            "@type": "Offer",
            name: "Система мониторинга температуры и влажности",
            description:
              "Валидированная система мониторинга для соответствия требованиям GMP, GDP, FDA",
          },
        },
        o = document.querySelector('script[type="application/ld+json"]');
      o && o.remove();
      const d = document.createElement("script");
      (d.type = "application/ld+json"),
        (d.text = JSON.stringify(l)),
        document.head.appendChild(d);
    }, [t, s, i, n, c]),
    null
  );
}
function p(...t) {
  return it(rt(t));
}
const dt = lt(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);
function x({ className: t, variant: s, size: i, asChild: n = !1, ...c }) {
  const r = n ? xe : "button";
  return e.jsx(r, {
    "data-slot": "button",
    className: p(dt({ variant: s, size: i, className: t })),
    ...c,
  });
}
const mt =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function oe({
  className: t = "w-full h-full object-contain",
  alt: s = "Lora Gate",
}) {
  const [i, n] = m.useState(0),
    [c, r] = m.useState(!1),
    a = [
      "/images/logo.png",
      "/images/logo.jpg",
      "/images/logo.svg",
      "/images/logo.webp",
      "/images/logo_icon.png",
      "/images/logo-icon.png",
      "/images/logoIcon.png",
      "/images/logo_icon.jpg",
      "/images/logo-icon.jpg",
      "/images/logo_icon.svg",
    ],
    l = a[i] || a[0],
    o = () => {
      i < a.length - 1 ? (n((d) => d + 1), r(!1)) : r(!0);
    };
  return (
    m.useEffect(() => {
      n(0), r(!1);
    }, []),
    c
      ? e.jsx("div", {
          className: `${t} flex items-center justify-center bg-gray-100`,
          children: e.jsx("img", {
            src: mt,
            alt: s || "Логотип не найден",
            className: "w-full h-full object-contain opacity-30",
          }),
        })
      : e.jsx("img", { src: l, alt: s, className: t, onError: o }, i)
  );
}
const ce = () => !0,
  ht = () => {
    {
      console.log("Analytics disabled or GA_MEASUREMENT_ID not configured");
      return;
    }
  },
  xt = (t, s) => {
    ce() && de("page_view", { timestamp: new Date().toISOString() });
  },
  S = (t, s) => {
    ce() && de(t, { ...s, timestamp: new Date().toISOString() });
  },
  ut = (t, s) => {
    S("section_view", { section_id: t, section_name: s || t });
  },
  gt = (t, s, i) => {
    S("button_click", { button_name: t, location: s || "unknown", ...i });
  },
  ft = (t, s, i) => {
    S("link_click", { link_url: t, link_text: s, is_external: i || !1 });
  },
  bt = (t, s) => {
    S("form_submit", {
      form_name: t,
      ...(s && { fields_count: Object.keys(s).length }),
    });
  },
  pt = (t) => {
    S("phone_call", { phone_number: t });
  },
  vt = (t) => {
    S("email_click", { email: t });
  },
  jt = (t, s) => {
    S("language_change", { from_language: t, to_language: s });
  },
  wt = (t) => {
    S("scroll_depth", { depth_percent: t });
  },
  yt = (t) => {
    S("time_on_page", { seconds: t });
  },
  Nt = (t, s) => {
    S("file_download", { file_name: t, file_type: s });
  },
  de = (t, s) => {},
  D = () => {
    const t = m.useCallback((h, u) => {
        ut(h, u);
      }, []),
      s = m.useCallback((h, u, g) => {
        gt(h, u, g);
      }, []),
      i = m.useCallback((h, u, g) => {
        ft(h, u, g);
      }, []),
      n = m.useCallback((h, u) => {
        bt(h, u);
      }, []),
      c = m.useCallback((h) => {
        pt(h);
      }, []),
      r = m.useCallback((h) => {
        vt(h);
      }, []),
      a = m.useCallback((h, u) => {
        jt(h, u);
      }, []),
      l = m.useCallback((h) => {
        wt(h);
      }, []),
      o = m.useCallback((h) => {
        yt(h);
      }, []),
      d = m.useCallback((h, u) => {
        Nt(h, u);
      }, []),
      b = m.useCallback((h, u) => {
        S(h, u);
      }, []);
    return {
      trackSection: t,
      trackClick: s,
      trackLink: i,
      trackForm: n,
      trackPhone: c,
      trackEmail: r,
      trackLangChange: a,
      trackScroll: l,
      trackTime: o,
      trackFileDownload: d,
      trackCustomEvent: b,
    };
  },
  me = (t, s, i) => {
    const { trackSection: n } = D();
    m.useEffect(() => {
      const c = document.getElementById(t);
      if (!c) return;
      const r = new IntersectionObserver(
        (a) => {
          a.forEach((l) => {
            l.isIntersecting &&
              l.intersectionRatio > 0.5 &&
              (n(t, s), r.unobserve(c));
          });
        },
        { threshold: 0.5, ...i },
      );
      return (
        r.observe(c),
        () => {
          r.disconnect();
        }
      );
    }, [t, s, n]);
  },
  kt = () => {
    const { trackScroll: t } = D();
    m.useEffect(() => {
      const s = [25, 50, 75, 90, 100],
        i = new Set(),
        n = () => {
          const c = window.innerHeight,
            r = document.documentElement.scrollHeight,
            a = window.scrollY || document.documentElement.scrollTop,
            l = Math.round((a / (r - c)) * 100);
          s.forEach((o) => {
            l >= o && !i.has(o) && (i.add(o), t(o));
          });
        };
      return (
        window.addEventListener("scroll", n, { passive: !0 }),
        () => window.removeEventListener("scroll", n)
      );
    }, [t]);
  },
  zt = () => {
    const { trackTime: t } = D();
    m.useEffect(() => {
      const s = Date.now(),
        i = [10, 30, 60, 120, 300],
        n = new Set(),
        c = setInterval(() => {
          const r = Math.floor((Date.now() - s) / 1e3);
          i.forEach((a) => {
            r >= a && !n.has(a) && (n.add(a), t(a));
          });
        }, 1e3);
      return () => {
        clearInterval(c);
        const r = Math.floor((Date.now() - s) / 1e3);
        r > 0 && t(r);
      };
    }, [t]);
  };
function St() {
  const [t, s] = m.useState(!1),
    { t: i, language: n, setLanguage: c } = y(),
    { trackClick: r, trackLink: a, trackLangChange: l, trackPhone: o } = D(),
    d = (h) => {
      const u = document.getElementById(h);
      u &&
        (u.scrollIntoView({ behavior: "smooth" }),
        s(!1),
        r(`nav_${h}`, "header"));
    },
    b = () => {
      const h = n === "ru" ? "uz" : "ru";
      l(n, h), c(h);
    };
  return e.jsx("header", {
    className:
      "fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 backdrop-blur-sm border-b border-blue-900/30 w-full",
    children: e.jsxs("div", {
      className: "container mx-auto px-4 py-2.5 sm:py-3 md:py-4 max-w-7xl",
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0",
              children: [
                e.jsx("div", {
                  className:
                    "w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden p-1 sm:p-1.5 md:p-2",
                  children: e.jsx(oe, {
                    className: "w-full h-full object-contain",
                  }),
                }),
                e.jsx("span", {
                  className:
                    "text-xs sm:text-sm md:text-base lg:text-xl text-white font-semibold leading-tight whitespace-nowrap",
                  children: "Lora Gate",
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "hidden md:flex items-center gap-6 flex-1 justify-center",
              children: e.jsxs("nav", {
                className: "flex items-center gap-6",
                children: [
                  e.jsx("button", {
                    onClick: () => d("home"),
                    className:
                      "text-white/90 hover:text-white transition-colors",
                    children: i("header.home"),
                  }),
                  e.jsx("button", {
                    onClick: () => d("equipment"),
                    className:
                      "text-white/90 hover:text-white transition-colors",
                    children: i("header.equipment"),
                  }),
                  e.jsx("button", {
                    onClick: () => d("cases"),
                    className:
                      "text-white/90 hover:text-white transition-colors",
                    children: i("header.cases"),
                  }),
                  e.jsx("button", {
                    onClick: () => d("services"),
                    className:
                      "text-white/90 hover:text-white transition-colors",
                    children: i("header.services"),
                  }),
                  e.jsx("button", {
                    onClick: () => d("contacts"),
                    className:
                      "text-white/90 hover:text-white transition-colors",
                    children: i("header.contacts"),
                  }),
                ],
              }),
            }),
            e.jsxs("div", {
              className: "hidden md:flex items-center gap-3 flex-shrink-0",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx("a", {
                      href: "https://t.me/LoRa_Gate",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-white/90 hover:text-white transition-colors",
                      "aria-label": "Telegram",
                      onClick: () =>
                        a("https://t.me/LoRa_Gate", "Telegram", !0),
                      children: e.jsx("svg", {
                        className:
                          "w-5 h-5 hover:scale-110 transition-transform",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: e.jsx("path", {
                          d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z",
                        }),
                      }),
                    }),
                    e.jsx("a", {
                      href: "https://www.instagram.com/loragate_gxp_monitoring/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-white/90 hover:text-white transition-colors",
                      "aria-label": "Instagram",
                      children: e.jsx("svg", {
                        className:
                          "w-5 h-5 hover:scale-110 transition-transform",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: e.jsx("path", {
                          d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                        }),
                      }),
                    }),
                    e.jsx("a", {
                      href: "https://www.facebook.com/loragateuz",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-white/90 hover:text-white transition-colors",
                      "aria-label": "Facebook",
                      onClick: () =>
                        a(
                          "https://www.facebook.com/loragateuz",
                          "Facebook",
                          !0,
                        ),
                      children: e.jsx("svg", {
                        className:
                          "w-5 h-5 hover:scale-110 transition-transform",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: e.jsx("path", {
                          d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                        }),
                      }),
                    }),
                  ],
                }),
                e.jsxs("a", {
                  href: "tel:+998916767567",
                  className:
                    "flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl",
                  onClick: () => o("+998916767567"),
                  children: [
                    e.jsx(E, { size: 18 }),
                    e.jsx("span", { children: "+998 91 676-75-67" }),
                  ],
                }),
                e.jsx(x, {
                  variant: "outline",
                  onClick: b,
                  className:
                    "border-white/80 bg-white/20 text-white hover:bg-white/30 hover:border-white backdrop-blur-sm font-medium min-w-[60px]",
                  title:
                    n === "ru"
                      ? "O'zbek tiliga o'tish"
                      : "Переключить на русский",
                  children: n === "ru" ? "UZ" : "RU",
                }),
                e.jsx(x, {
                  variant: "outline",
                  onClick: () => {
                    r("demo_button", "header"),
                      window.open("http://lgdemo.loragate.uz/", "_blank");
                  },
                  className:
                    "border-white/80 bg-white/20 text-white hover:bg-white/30 hover:border-white backdrop-blur-sm font-medium",
                  children: i("header.demo"),
                }),
                e.jsx(x, {
                  onClick: () => d("contacts"),
                  className: "bg-white text-blue-600 hover:bg-white/90",
                  children: i("header.order"),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "md:hidden flex items-center gap-2 flex-shrink-0",
              children: [
                e.jsx("a", {
                  href: "tel:+998916767567",
                  className:
                    "flex items-center justify-center w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors shadow-lg",
                  "aria-label": "Позвонить",
                  children: e.jsx(E, { size: 20 }),
                }),
                e.jsx("button", {
                  className: "text-white flex-shrink-0 p-2 -mr-2",
                  onClick: () => s(!t),
                  "aria-label": "Toggle menu",
                  type: "button",
                  children: t
                    ? e.jsx(ee, { size: 24 })
                    : e.jsx(ue, { size: 24 }),
                }),
              ],
            }),
          ],
        }),
        t &&
          e.jsxs("nav", {
            className:
              "md:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 flex flex-col gap-2 sm:gap-3",
            children: [
              e.jsx("button", {
                onClick: () => d("home"),
                className:
                  "text-left py-2 text-white/90 hover:text-white transition-colors",
                children: i("header.home"),
              }),
              e.jsx("button", {
                onClick: () => d("equipment"),
                className:
                  "text-left py-2 text-white/90 hover:text-white transition-colors",
                children: i("header.equipment"),
              }),
              e.jsx("button", {
                onClick: () => d("cases"),
                className:
                  "text-left py-2 text-white/90 hover:text-white transition-colors",
                children: i("header.cases"),
              }),
              e.jsx("button", {
                onClick: () => d("services"),
                className:
                  "text-left py-2 text-white/90 hover:text-white transition-colors",
                children: i("header.services"),
              }),
              e.jsx("button", {
                onClick: () => d("contacts"),
                className:
                  "text-left py-2 text-white/90 hover:text-white transition-colors",
                children: i("header.contacts"),
              }),
              e.jsxs("div", {
                className: "flex flex-col gap-2 mt-2",
                children: [
                  e.jsx(x, {
                    variant: "outline",
                    onClick: b,
                    className:
                      "border-white/80 bg-white/20 text-white hover:bg-white/30 hover:border-white backdrop-blur-sm font-medium",
                    children: n === "ru" ? "O'zbek tili" : "Русский язык",
                  }),
                  e.jsxs("div", {
                    className: "flex items-center justify-center gap-4 py-2",
                    children: [
                      e.jsx("a", {
                        href: "https://t.me/LoRa_Gate",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-white/90 hover:text-white transition-colors",
                        "aria-label": "Telegram",
                        onClick: () =>
                          a("https://t.me/LoRa_Gate", "Telegram", !0),
                        children: e.jsx("svg", {
                          className:
                            "w-5 h-5 hover:scale-110 transition-transform",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: e.jsx("path", {
                            d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z",
                          }),
                        }),
                      }),
                      e.jsx("a", {
                        href: "https://www.instagram.com/loragate_gxp_monitoring/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-white/90 hover:text-white transition-colors",
                        "aria-label": "Instagram",
                        onClick: () =>
                          a(
                            "https://www.instagram.com/loragate_gxp_monitoring/",
                            "Instagram",
                            !0,
                          ),
                        children: e.jsx("svg", {
                          className:
                            "w-5 h-5 hover:scale-110 transition-transform",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: e.jsx("path", {
                            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                          }),
                        }),
                      }),
                      e.jsx("a", {
                        href: "https://www.facebook.com/loragateuz",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-white/90 hover:text-white transition-colors",
                        "aria-label": "Facebook",
                        onClick: () =>
                          a(
                            "https://www.facebook.com/loragateuz",
                            "Facebook",
                            !0,
                          ),
                        children: e.jsx("svg", {
                          className:
                            "w-5 h-5 hover:scale-110 transition-transform",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: e.jsx("path", {
                            d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                          }),
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("a", {
                    href: "tel:+998916767567",
                    className:
                      "flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors shadow-lg text-center",
                    onClick: () => o("+998916767567"),
                    children: [
                      e.jsx(E, { size: 20 }),
                      e.jsx("span", { children: "+998 91 676-75-67" }),
                    ],
                  }),
                  e.jsx(x, {
                    variant: "outline",
                    onClick: () => {
                      r("demo_button", "header_mobile"),
                        window.open("http://lgdemo.loragate.uz/", "_blank");
                    },
                    className:
                      "border-white/80 bg-white/20 text-white hover:bg-white/30 hover:border-white backdrop-blur-sm font-medium",
                    children: i("header.demo"),
                  }),
                  e.jsx(x, {
                    onClick: () => d("contacts"),
                    className: "bg-white text-blue-600 hover:bg-white/90",
                    children: i("header.order"),
                  }),
                ],
              }),
            ],
          }),
      ],
    }),
  });
}
const Ct =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function L(t) {
  const [s, i] = m.useState(!1),
    [n, c] = m.useState(t.src);
  m.useEffect(() => {
    c(t.src), i(!1);
  }, [t.src]);
  const r = () => {
      if (!n) {
        i(!0);
        return;
      }
      const h = n.toString(),
        u = [".jpg", ".jpeg", ".png", ".webp"];
      for (const g of u)
        if (h.endsWith(g)) {
          const C = h.replace(g, ""),
            f = u.filter((v) => v !== g);
          for (const v of f) {
            const z = C + v;
            if (z !== n) {
              c(z);
              return;
            }
          }
        }
      i(!0);
    },
    { src: a, alt: l, style: o, className: d, ...b } = t;
  return s
    ? e.jsx("div", {
        className: `inline-block bg-gray-100 text-center align-middle ${d ?? ""}`,
        style: o,
        children: e.jsx("div", {
          className: "flex items-center justify-center w-full h-full",
          children: e.jsx("img", {
            src: Ct,
            alt: l || "Изображение не найдено",
            ...b,
            "data-original-url": a,
          }),
        }),
      })
    : e.jsx("img", {
        src: n,
        alt: l,
        className: d,
        style: o,
        ...b,
        onError: r,
      });
}
function qt() {
  const { t, language: s } = y(),
    { trackClick: i, trackFileDownload: n } = D();
  me("home", "Hero Section");
  const c = (a) => {
      const l = document.getElementById(a);
      l &&
        (l.scrollIntoView({ behavior: "smooth" }),
        i(`hero_button_${a}`, "hero"));
    },
    r = async () => {
      const a = "Коммерческое предложение LORAGATE.pdf",
        l = "/images/Коммерческое предложение LORAGATE.pdf";
      try {
        const o = await fetch(l);
        if (o.ok) {
          const d = await o.blob(),
            b = window.URL.createObjectURL(d),
            h = document.createElement("a");
          (h.href = b),
            (h.download = a),
            (h.style.display = "none"),
            document.body.appendChild(h),
            h.click(),
            setTimeout(() => {
              h.parentNode && document.body.removeChild(h),
                window.URL.revokeObjectURL(b);
            }, 100);
        } else throw new Error("Файл не найден");
        n(a, "pdf");
      } catch (o) {
        console.error(
          "Ошибка при скачивании через fetch, используем прямой метод:",
          o,
        );
        const d = document.createElement("a");
        (d.href = l),
          (d.download = a),
          (d.target = "_blank"),
          document.body.appendChild(d),
          d.click(),
          setTimeout(() => {
            d.parentNode && document.body.removeChild(d);
          }, 100),
          n(a, "pdf");
      }
    };
  return e.jsxs("section", {
    id: "home",
    className:
      "pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-gray-50 via-indigo-50 to-white relative overflow-hidden",
    children: [
      e.jsx("div", {
        className:
          "absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200/30 rounded-full blur-3xl -z-10",
      }),
      e.jsx("div", {
        className:
          "absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-violet-200/20 rounded-full blur-3xl -z-10",
      }),
      e.jsx("div", {
        className: "container mx-auto px-4 relative z-10 max-w-7xl",
        children: e.jsxs("div", {
          className: "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
          children: [
            e.jsxs("div", {
              className: "space-y-4 sm:space-y-6",
              children: [
                e.jsxs("div", {
                  className:
                    "inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold",
                  children: [
                    e.jsx("span", {
                      className:
                        "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-600 rounded-full animate-pulse flex-shrink-0",
                    }),
                    e.jsx("span", {
                      className: "break-words",
                      children: t("hero.badge"),
                    }),
                  ],
                }),
                e.jsx("h1", {
                  className:
                    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight",
                  children: t("hero.title"),
                }),
                e.jsx("p", {
                  className:
                    "text-base sm:text-lg text-gray-600 leading-relaxed",
                  children: t("hero.description"),
                }),
                e.jsx("p", {
                  className: "text-sm text-gray-500 leading-relaxed",
                  children: t("hero.about"),
                }),
                e.jsxs("div", {
                  className: "space-y-3 sm:space-y-4",
                  children: [
                    e.jsx("div", {
                      className:
                        "flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4",
                      children: e.jsxs("div", {
                        className:
                          "flex items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-700",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0",
                            children: e.jsx("svg", {
                              className: "w-3 h-3 sm:w-4 sm:h-4 text-green-600",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: e.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 13l4 4L19 7",
                              }),
                            }),
                          }),
                          e.jsx("span", {
                            className: "break-words",
                            children: t("hero.advantage1"),
                          }),
                        ],
                      }),
                    }),
                    e.jsx("div", {
                      className:
                        "flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4",
                      children: e.jsxs("div", {
                        className:
                          "flex items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-700",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0",
                            children: e.jsx("svg", {
                              className: "w-3 h-3 sm:w-4 sm:h-4 text-green-600",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: e.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 13l4 4L19 7",
                              }),
                            }),
                          }),
                          e.jsx("span", {
                            className: "break-words",
                            children: t("hero.advantage2"),
                          }),
                        ],
                      }),
                    }),
                    e.jsx("div", {
                      className:
                        "flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4",
                      children: e.jsxs("div", {
                        className:
                          "flex items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-700",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0",
                            children: e.jsx("svg", {
                              className: "w-3 h-3 sm:w-4 sm:h-4 text-green-600",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: e.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 13l4 4L19 7",
                              }),
                            }),
                          }),
                          e.jsx("span", {
                            className: "break-words",
                            children: t("hero.advantage3"),
                          }),
                        ],
                      }),
                    }),
                    e.jsx("div", {
                      className:
                        "flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4",
                      children: e.jsxs("div", {
                        className:
                          "flex items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-700",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0",
                            children: e.jsx("svg", {
                              className: "w-3 h-3 sm:w-4 sm:h-4 text-green-600",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: e.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 13l4 4L19 7",
                              }),
                            }),
                          }),
                          e.jsx("span", {
                            className: "break-words",
                            children: t("hero.advantage4"),
                          }),
                        ],
                      }),
                    }),
                    e.jsx("div", {
                      className:
                        "flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4",
                      children: e.jsxs("div", {
                        className:
                          "flex items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-700",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0",
                            children: e.jsx("svg", {
                              className: "w-3 h-3 sm:w-4 sm:h-4 text-green-600",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: e.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 13l4 4L19 7",
                              }),
                            }),
                          }),
                          e.jsx("span", {
                            className: "break-words",
                            children: t("hero.advantage5"),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4",
                  children: [
                    e.jsxs(x, {
                      size: "lg",
                      onClick: () => c("contacts"),
                      className:
                        "w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-lg hover:shadow-xl transition-all text-sm sm:text-base",
                      children: [
                        t("hero.orderButton"),
                        e.jsx(J, { className: "ml-2", size: 18 }),
                      ],
                    }),
                    e.jsxs(x, {
                      variant: "outline",
                      size: "lg",
                      onClick: () => {
                        i("demo_button", "hero"),
                          window.open("http://lgdemo.loragate.uz/", "_blank");
                      },
                      className:
                        "w-full sm:w-auto border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-sm sm:text-base",
                      children: [
                        e.jsx(ge, { className: "mr-2", size: 18 }),
                        t("hero.demoButton"),
                      ],
                    }),
                    e.jsxs(x, {
                      variant: "outline",
                      size: "lg",
                      onClick: r,
                      className:
                        "w-full sm:w-auto border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-sm sm:text-base",
                      children: [
                        e.jsx(M, { className: "mr-2", size: 18 }),
                        t("hero.downloadKP"),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6",
                  children: [
                    e.jsxs("div", {
                      className:
                        "text-center p-2 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-lg sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent",
                          children: "150+",
                        }),
                        e.jsx("div", {
                          className:
                            "text-[10px] sm:text-xs text-gray-600 mt-1",
                          children: t("hero.statsClients"),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "text-center p-2 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-lg sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent",
                          children: "99.9%",
                        }),
                        e.jsx("div", {
                          className:
                            "text-[10px] sm:text-xs text-gray-600 mt-1",
                          children: t("hero.statsReliability"),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "text-center p-2 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-lg sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent",
                          children: "24/7",
                        }),
                        e.jsx("div", {
                          className:
                            "text-[10px] sm:text-xs text-gray-600 mt-1",
                          children: t("hero.statsSupport"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "relative mt-8 md:mt-0",
              children: [
                e.jsx("div", {
                  className:
                    "rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white",
                  children: e.jsx(L, {
                    src: "/images/dashboard.png",
                    alt: "Дашборд системы мониторинга температуры и влажности Lora Gate для контроля микроклимата на фармацевтических и пищевых складах",
                    className: "w-full h-auto",
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "block absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-xl max-w-[160px] sm:max-w-[200px] md:max-w-xs animate-float z-20",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2 mb-1 sm:mb-2",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse",
                        }),
                        e.jsx("span", {
                          className:
                            "font-semibold text-[10px] sm:text-xs md:text-sm",
                          children: t("hero.monitoring24"),
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-[9px] sm:text-xs md:text-sm opacity-90 leading-tight",
                      children: t("hero.monitoringDesc"),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-red-600 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-xl max-w-[140px] sm:max-w-[180px] md:max-w-xs border-2 border-red-700 animate-float-delayed z-20",
                  children: [
                    e.jsx("div", {
                      className:
                        "text-base sm:text-xl md:text-2xl font-bold text-white mb-1",
                      children: t("hero.supportDays"),
                    }),
                    e.jsx("p", {
                      className:
                        "text-[9px] sm:text-xs md:text-sm text-white/90 leading-tight mb-1",
                      children: t("hero.supportDesc"),
                    }),
                    e.jsx("p", {
                      className:
                        "text-[9px] sm:text-xs md:text-sm text-white/90 leading-tight",
                      children: t("hero.supportDesc2"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Pt() {
  const { t } = y(),
    s = [
      { icon: fe, text: t("gmpSolution.design") },
      { icon: te, text: t("gmpSolution.installation") },
      { icon: be, text: t("gmpSolution.platform") },
      { icon: O, text: t("gmpSolution.validation") },
      { icon: M, text: t("gmpSolution.documents") },
      { icon: se, text: t("gmpSolution.support") },
    ];
  return e.jsx("section", {
    className:
      "py-16 sm:py-20 bg-gradient-to-br from-indigo-50 via-white to-violet-50",
    children: e.jsxs("div", {
      className: "container mx-auto px-4 max-w-7xl",
      children: [
        e.jsxs("div", {
          className: "text-center mb-12",
          children: [
            e.jsx("h2", {
              className: "text-3xl sm:text-4xl font-bold mb-4",
              children: t("gmpSolution.title"),
            }),
            e.jsx("p", {
              className: "text-lg text-gray-700 max-w-3xl mx-auto",
              children: t("gmpSolution.description"),
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto",
          children: s.map((i, n) =>
            e.jsxs(
              "div",
              {
                className:
                  "flex items-start gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100",
                children: [
                  e.jsx("div", {
                    className:
                      "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center flex-shrink-0",
                    children: e.jsx(i.icon, {
                      className: "text-white",
                      size: 20,
                    }),
                  }),
                  e.jsx("p", {
                    className:
                      "text-gray-800 font-medium text-sm sm:text-base pt-1 sm:pt-2",
                    children: i.text,
                  }),
                ],
              },
              n,
            ),
          ),
        }),
      ],
    }),
  });
}
function It() {
  const { t } = y(),
    s = [
      { icon: O, text: t("validation.iq") },
      { icon: O, text: t("validation.oq") },
      { icon: O, text: t("validation.pq") },
    ],
    i = [
      { icon: M, text: t("validation.protocols") },
      { icon: M, text: t("validation.reports") },
      { icon: pe, text: t("validation.signatures") },
      { icon: se, text: t("validation.inspectorDocs") },
    ];
  return e.jsx("section", {
    className: "py-16 sm:py-20 bg-white",
    children: e.jsxs("div", {
      className: "container mx-auto px-4 max-w-7xl",
      children: [
        e.jsx("div", {
          className: "text-center mb-12",
          children: e.jsx("h2", {
            className: "text-3xl sm:text-4xl font-bold mb-4",
            children: t("validation.title"),
          }),
        }),
        e.jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [
            e.jsxs("div", {
              className: "mb-12",
              children: [
                e.jsx("h3", {
                  className:
                    "text-xl sm:text-2xl font-semibold mb-6 text-gray-800",
                  children: t("validation.weDo"),
                }),
                e.jsx("div", {
                  className: "grid sm:grid-cols-3 gap-4 sm:gap-6",
                  children: s.map((n, c) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "flex items-start gap-4 p-4 sm:p-6 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-indigo-100",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center flex-shrink-0",
                            children: e.jsx(n.icon, {
                              className: "text-white",
                              size: 20,
                            }),
                          }),
                          e.jsx("p", {
                            className:
                              "text-gray-800 font-medium text-sm sm:text-base pt-1 sm:pt-2",
                            children: n.text,
                          }),
                        ],
                      },
                      c,
                    ),
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("h3", {
                  className:
                    "text-xl sm:text-2xl font-semibold mb-6 text-gray-800",
                  children: t("validation.youGet"),
                }),
                e.jsx("div", {
                  className:
                    "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
                  children: i.map((n, c) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "flex items-start gap-4 p-4 sm:p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-100",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0",
                            children: e.jsx(n.icon, {
                              className: "text-white",
                              size: 20,
                            }),
                          }),
                          e.jsx("p", {
                            className:
                              "text-gray-800 font-medium text-sm sm:text-base pt-1 sm:pt-2",
                            children: n.text,
                          }),
                        ],
                      },
                      c,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Et() {
  const { t } = y();
  return e.jsx("section", {
    className: "py-20 bg-gray-50",
    children: e.jsxs("div", {
      className: "container mx-auto px-4 max-w-7xl",
      children: [
        e.jsxs("div", {
          className: "text-center mb-16",
          children: [
            e.jsx("h2", { className: "mb-4", children: t("howItWorks.title") }),
            e.jsx("p", {
              className: "text-gray-600",
              children: t("howItWorks.subtitle"),
            }),
          ],
        }),
        e.jsx("div", {
          className: "mb-20 flex justify-center",
          children: e.jsx("div", {
            className:
              "max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden",
            children: e.jsx(L, {
              src: "/images/architecture.jpg",
              alt: "Архитектура системы мониторинга Lora Gate: беспроводные датчики LoRa, шлюз Wi-Fi, облачная платформа и веб-интерфейс для контроля температуры и влажности",
              className: "w-full h-auto",
            }),
          }),
        }),
      ],
    }),
  });
}
function Lt() {
  const { t } = y(),
    s = [
      {
        icon: H,
        title: t("benefits.wireless.title"),
        description: t("benefits.wireless.desc"),
      },
      {
        icon: ve,
        title: t("benefits.sensors.title"),
        description: t("benefits.sensors.desc"),
      },
      {
        icon: ae,
        title: t("benefits.connection.title"),
        description: t("benefits.connection.desc"),
      },
      {
        icon: je,
        title: t("benefits.easyInstall.title"),
        description: t("benefits.easyInstall.desc"),
      },
      {
        icon: ie,
        title: t("benefits.scalable.title"),
        description: t("benefits.scalable.desc"),
      },
      {
        icon: we,
        title: t("benefits.webInterface.title"),
        description: t("benefits.webInterface.desc"),
      },
      {
        icon: X,
        title: t("benefits.ownDev.title"),
        description: t("benefits.ownDev.desc"),
      },
      {
        icon: ye,
        title: t("benefits.realTime.title"),
        description: t("benefits.realTime.desc"),
      },
      {
        icon: re,
        title: t("benefits.notifications.title"),
        description: t("benefits.notifications.desc"),
      },
      {
        icon: Ne,
        title: t("benefits.reports.title"),
        description: t("benefits.reports.desc"),
      },
      {
        icon: ke,
        title: t("benefits.flexible.title"),
        description: t("benefits.flexible.desc"),
      },
      {
        icon: ze,
        title: t("benefits.security.title"),
        description: t("benefits.security.desc"),
      },
    ];
  return e.jsx("section", {
    className: "py-20 bg-white",
    children: e.jsxs("div", {
      className: "container mx-auto px-4 max-w-7xl",
      children: [
        e.jsx("div", {
          className: "text-center mb-16",
          children: e.jsx("h2", {
            className: "mb-4",
            children: t("benefits.title"),
          }),
        }),
        e.jsx("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
          children: s.map((i, n) =>
            e.jsxs(
              "div",
              {
                className:
                  "p-6 rounded-lg border-2 border-gray-100 hover:border-indigo-600 hover:shadow-lg transition-all",
                children: [
                  e.jsx("div", {
                    className:
                      "w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center mb-4",
                    children: e.jsx(i.icon, {
                      className: "text-white",
                      size: 24,
                    }),
                  }),
                  e.jsxs("h3", {
                    className: "mb-2",
                    children: ["✔️ ", i.title],
                  }),
                  e.jsx("p", {
                    className: "text-sm text-gray-600",
                    children: i.description,
                  }),
                ],
              },
              n,
            ),
          ),
        }),
      ],
    }),
  });
}
function Dt() {
  const { t } = y(),
    s = (i) => {
      const n = document.getElementById(i);
      n && n.scrollIntoView({ behavior: "smooth" });
    };
  return e.jsx("section", {
    id: "equipment",
    className: "py-20 bg-gradient-to-br from-gray-50 to-indigo-50",
    children: e.jsxs("div", {
      className: "container mx-auto px-4 max-w-7xl",
      children: [
        e.jsxs("div", {
          className: "text-center mb-16",
          children: [
            e.jsx("h2", { className: "mb-4", children: t("equipment.title") }),
            e.jsx("p", {
              className: "text-gray-600 max-w-2xl mx-auto",
              children: t("equipment.subtitle"),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid md:grid-cols-2 gap-12",
          children: [
            e.jsxs("div", {
              className: "bg-white rounded-xl shadow-lg overflow-hidden",
              children: [
                e.jsx("div", {
                  className:
                    "h-64 bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center",
                  children: e.jsx(L, {
                    src: "/images/gateway.png",
                    alt: "Шлюз RD07 Wi-Fi",
                    className: "w-full h-full object-cover",
                  }),
                }),
                e.jsxs("div", {
                  className: "p-8",
                  children: [
                    e.jsx("h3", {
                      className: "mb-6",
                      children: t("equipment.gateway.title"),
                    }),
                    e.jsxs("div", {
                      className: "space-y-4 mb-6",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: e.jsx(H, {
                                className: "text-indigo-600",
                                size: 20,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  children: t(
                                    "equipment.gateway.loraSupport.title",
                                  ),
                                }),
                                e.jsx("p", {
                                  className: "text-sm text-gray-600",
                                  children: t(
                                    "equipment.gateway.loraSupport.desc",
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: e.jsx(ae, {
                                className: "text-indigo-600",
                                size: 20,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  children: t(
                                    "equipment.gateway.connection.title",
                                  ),
                                }),
                                e.jsx("p", {
                                  className: "text-sm text-gray-600",
                                  children: t(
                                    "equipment.gateway.connection.desc",
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: e.jsx($, {
                                className: "text-indigo-600",
                                size: 20,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  children: t(
                                    "equipment.gateway.reception.title",
                                  ),
                                }),
                                e.jsx("p", {
                                  className: "text-sm text-gray-600",
                                  children: t(
                                    "equipment.gateway.reception.desc",
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "bg-white rounded-xl shadow-lg overflow-hidden",
              children: [
                e.jsxs("div", {
                  className:
                    "h-64 relative bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 flex items-center justify-center overflow-hidden",
                  children: [
                    e.jsxs("div", {
                      className: "absolute inset-0 opacity-30",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute top-0 left-0 w-32 h-32 bg-indigo-200 rounded-full blur-2xl",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute bottom-0 right-0 w-40 h-40 bg-violet-200 rounded-full blur-2xl",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-200 rounded-full blur-xl",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "absolute inset-0 opacity-5",
                      style: {
                        backgroundImage:
                          "linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      },
                    }),
                    e.jsx("div", {
                      className:
                        "relative z-10 w-full h-full flex items-center justify-center p-8",
                      children: e.jsx(L, {
                        src: "/images/sensor.png",
                        alt: "Датчики TAG 08 / TAG 08B",
                        className:
                          "w-full h-full object-contain drop-shadow-lg",
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "p-8",
                  children: [
                    e.jsx("h3", {
                      className: "mb-6",
                      children: t("equipment.sensors.title"),
                    }),
                    e.jsxs("div", {
                      className: "space-y-4 mb-6",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: e.jsx(H, {
                                className: "text-green-600",
                                size: 20,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  children: t(
                                    "equipment.sensors.wireless.title",
                                  ),
                                }),
                                e.jsx("p", {
                                  className: "text-sm text-gray-600",
                                  children: t(
                                    "equipment.sensors.wireless.desc",
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: e.jsx(Se, {
                                className: "text-green-600",
                                size: 20,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  children: t(
                                    "equipment.sensors.measurement.title",
                                  ),
                                }),
                                e.jsx("p", {
                                  className: "text-sm text-gray-600",
                                  children: t(
                                    "equipment.sensors.measurement.desc",
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: e.jsx(Ce, {
                                className: "text-green-600",
                                size: 20,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  children: t(
                                    "equipment.sensors.battery.title",
                                  ),
                                }),
                                e.jsx("p", {
                                  className: "text-sm text-gray-600",
                                  children: t("equipment.sensors.battery.desc"),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: e.jsx($, {
                                className: "text-green-600",
                                size: 20,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  children: t(
                                    "equipment.sensors.reliable.title",
                                  ),
                                }),
                                e.jsx("p", {
                                  className: "text-sm text-gray-600",
                                  children: t(
                                    "equipment.sensors.reliable.desc",
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "text-center mt-12",
          children: e.jsxs(x, {
            size: "lg",
            variant: "outline",
            onClick: () => s("contacts"),
            children: [
              e.jsx(M, { className: "mr-2", size: 20 }),
              t("equipment.specs"),
            ],
          }),
        }),
      ],
    }),
  });
}
function Mt() {
  const { t } = y(),
    s = [
      {
        icon: V,
        title: t("webApp.dashboard.title"),
        description: t("webApp.dashboard.desc"),
      },
      {
        icon: qe,
        title: t("webApp.history.title"),
        description: t("webApp.history.desc"),
      },
      {
        icon: re,
        title: t("webApp.alerts.title"),
        description: t("webApp.alerts.desc"),
      },
      {
        icon: K,
        title: t("webApp.points.title"),
        description: t("webApp.points.desc"),
      },
      {
        icon: Z,
        title: t("webApp.export.title"),
        description: t("webApp.export.desc"),
      },
    ];
  return e.jsx("section", {
    className: "py-20 bg-white",
    children: e.jsx("div", {
      className: "container mx-auto px-4 max-w-7xl",
      children: e.jsxs("div", {
        className: "grid lg:grid-cols-2 gap-12 items-center",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h2", { className: "mb-6", children: t("webApp.title") }),
              e.jsx("p", {
                className: "text-gray-600 mb-4",
                children: t("webApp.description1"),
              }),
              e.jsx("p", {
                className: "text-gray-600 mb-8",
                children: t("webApp.description2"),
              }),
              e.jsx("p", {
                className: "text-gray-600 mb-8 font-semibold",
                children: t("webApp.mainFunctions"),
              }),
              e.jsxs("div", {
                className: "space-y-4 mb-8",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-start gap-4 p-4 rounded-lg bg-teal-50 border border-teal-100",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0",
                        children: e.jsx(X, {
                          className: "text-teal-600",
                          size: 24,
                        }),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h3", {
                            className: "mb-1 font-semibold text-teal-900",
                            children: t("webApp.validation.title"),
                          }),
                          e.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: t("webApp.validation.desc"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-start gap-4 p-4 rounded-lg bg-teal-50 border border-teal-100",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0",
                        children: e.jsx(ie, {
                          className: "text-teal-600",
                          size: 24,
                        }),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h3", {
                            className: "mb-1 font-semibold text-teal-900",
                            children: t("webApp.access.title"),
                          }),
                          e.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: t("webApp.access.desc"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.map((i, n) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0",
                            children: e.jsx(i.icon, {
                              className: "text-teal-600",
                              size: 24,
                            }),
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h3", {
                                className: "mb-1",
                                children: i.title,
                              }),
                              e.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: i.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      n,
                    ),
                  ),
                ],
              }),
              e.jsxs(x, {
                size: "lg",
                onClick: () =>
                  window.open("http://lgdemo.loragate.uz/", "_blank"),
                children: [
                  e.jsx(Pe, { className: "mr-2", size: 20 }),
                  t("webApp.demoButton"),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "relative",
            children: [
              e.jsx("div", {
                className:
                  "rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-200",
                children: e.jsx(L, {
                  src: "/images/dashboard.png",
                  alt: t("webApp.title"),
                  className: "w-full h-auto",
                }),
              }),
              e.jsxs("div", {
                className:
                  "absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block",
                children: [
                  e.jsx("p", {
                    className: "mb-1",
                    children: t("webApp.interface"),
                  }),
                  e.jsx("p", {
                    className: "text-sm opacity-90",
                    children: t("webApp.interfaceDesc"),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Gt() {
  const { t } = y(),
    s = [
      {
        icon: Ie,
        title: t("cases.pharma.title"),
        description: t("cases.pharma.description"),
        image: "/images/case-pharma.jpg",
        benefits: [
          t("cases.pharma.benefit1"),
          t("cases.pharma.benefit2"),
          t("cases.pharma.benefit3"),
          t("cases.pharma.benefit4"),
        ],
      },
      {
        icon: Ee,
        title: t("cases.logistics.title"),
        description: t("cases.logistics.description"),
        image: "/images/truck.png",
        benefits: [
          t("cases.logistics.benefit1"),
          t("cases.logistics.benefit2"),
          t("cases.logistics.benefit3"),
        ],
      },
      {
        icon: Le,
        title: t("cases.medicine.title"),
        description: t("cases.medicine.description"),
        image: "/images/pharmacy.png",
        benefits: [
          t("cases.medicine.benefit1"),
          t("cases.medicine.benefit2"),
          t("cases.medicine.benefit3"),
          t("cases.medicine.benefit4"),
        ],
      },
      {
        icon: De,
        title: t("cases.foodWarehouse.title"),
        description: t("cases.foodWarehouse.description"),
        image: "/images/food.png",
        benefits: [
          t("cases.foodWarehouse.benefit1"),
          t("cases.foodWarehouse.benefit2"),
          t("cases.foodWarehouse.benefit3"),
          t("cases.foodWarehouse.benefit4"),
        ],
      },
      {
        icon: Me,
        title: t("cases.freezer.title"),
        description: t("cases.freezer.description"),
        image: "/images/freez.jpg",
        benefits: [
          t("cases.freezer.benefit1"),
          t("cases.freezer.benefit2"),
          t("cases.freezer.benefit3"),
          t("cases.freezer.benefit4"),
        ],
      },
      {
        icon: Ge,
        title: t("cases.greenhouse.title"),
        description: t("cases.greenhouse.description"),
        image: "/images/heatre.jpg",
        benefits: [
          t("cases.greenhouse.benefit1"),
          t("cases.greenhouse.benefit2"),
          t("cases.greenhouse.benefit3"),
          t("cases.greenhouse.benefit4"),
        ],
      },
    ];
  return e.jsx("section", {
    id: "cases",
    className: "py-20 bg-gradient-to-br from-indigo-50 to-gray-50",
    children: e.jsxs("div", {
      className: "container mx-auto px-4 max-w-7xl",
      children: [
        e.jsxs("div", {
          className: "text-center mb-16",
          children: [
            e.jsx("h2", { className: "mb-4", children: t("cases.title") }),
            e.jsx("p", {
              className: "text-gray-600 max-w-2xl mx-auto",
              children: t("cases.subtitle"),
            }),
          ],
        }),
        e.jsx("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: s.map((i, n) =>
            e.jsxs(
              "div",
              {
                className:
                  "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow",
                children: [
                  e.jsx("div", {
                    className: "h-64 overflow-hidden",
                    children: e.jsx(L, {
                      src: i.image,
                      alt: `${i.title} - Пример внедрения системы мониторинга Lora Gate для контроля температуры и влажности`,
                      className:
                        "w-full h-full object-cover hover:scale-105 transition-transform duration-300",
                    }),
                  }),
                  e.jsxs("div", {
                    className: "p-8",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center",
                            children: e.jsx(i.icon, {
                              className: "text-white",
                              size: 24,
                            }),
                          }),
                          e.jsx("h3", { children: i.title }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-gray-600 mb-6",
                        children: i.description,
                      }),
                      e.jsx("div", {
                        className: "space-y-3",
                        children: i.benefits.map((c, r) =>
                          e.jsxs(
                            "div",
                            {
                              className: "flex items-start gap-2",
                              children: [
                                e.jsx(Te, {
                                  className:
                                    "text-green-600 flex-shrink-0 mt-0.5",
                                  size: 20,
                                }),
                                e.jsx("p", {
                                  className: "text-sm",
                                  children: c,
                                }),
                              ],
                            },
                            r,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              },
              n,
            ),
          ),
        }),
      ],
    }),
  });
}
const he = m.createContext(null);
function W() {
  const t = m.useContext(he);
  if (!t) throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
function Tt({
  orientation: t = "horizontal",
  opts: s,
  setApi: i,
  plugins: n,
  className: c,
  children: r,
  ...a
}) {
  const [l, o] = Ae({ ...s, axis: t === "horizontal" ? "x" : "y" }, n),
    [d, b] = m.useState(!1),
    [h, u] = m.useState(!1),
    g = m.useCallback((z) => {
      z && (b(z.canScrollPrev()), u(z.canScrollNext()));
    }, []),
    C = m.useCallback(() => {
      o == null || o.scrollPrev();
    }, [o]),
    f = m.useCallback(() => {
      o == null || o.scrollNext();
    }, [o]),
    v = m.useCallback(
      (z) => {
        z.key === "ArrowLeft"
          ? (z.preventDefault(), C())
          : z.key === "ArrowRight" && (z.preventDefault(), f());
      },
      [C, f],
    );
  return (
    m.useEffect(() => {
      !o || !i || i(o);
    }, [o, i]),
    m.useEffect(() => {
      if (o)
        return (
          g(o),
          o.on("reInit", g),
          o.on("select", g),
          () => {
            o == null || o.off("select", g);
          }
        );
    }, [o, g]),
    e.jsx(he.Provider, {
      value: {
        carouselRef: l,
        api: o,
        opts: s,
        orientation:
          t ||
          ((s == null ? void 0 : s.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev: C,
        scrollNext: f,
        canScrollPrev: d,
        canScrollNext: h,
      },
      children: e.jsx("div", {
        onKeyDownCapture: v,
        className: p("relative", c),
        role: "region",
        "aria-roledescription": "carousel",
        "data-slot": "carousel",
        ...a,
        children: r,
      }),
    })
  );
}
function At({ className: t, ...s }) {
  const { carouselRef: i, orientation: n } = W();
  return e.jsx("div", {
    ref: i,
    className: "overflow-hidden",
    "data-slot": "carousel-content",
    children: e.jsx("div", {
      className: p("flex", n === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t),
      ...s,
    }),
  });
}
function Rt({ className: t, ...s }) {
  const { orientation: i } = W();
  return e.jsx("div", {
    role: "group",
    "aria-roledescription": "slide",
    "data-slot": "carousel-item",
    className: p(
      "min-w-0 shrink-0 grow-0 basis-full",
      i === "horizontal" ? "pl-4" : "pt-4",
      t,
    ),
    ...s,
  });
}
function Bt({ className: t, variant: s = "outline", size: i = "icon", ...n }) {
  const { orientation: c, scrollPrev: r, canScrollPrev: a } = W();
  return e.jsxs(x, {
    "data-slot": "carousel-previous",
    variant: s,
    size: i,
    className: p(
      "absolute size-8 rounded-full",
      c === "horizontal"
        ? "top-1/2 -left-12 -translate-y-1/2"
        : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
      t,
    ),
    disabled: !a,
    onClick: r,
    ...n,
    children: [
      e.jsx(Re, {}),
      e.jsx("span", { className: "sr-only", children: "Previous slide" }),
    ],
  });
}
function Ot({ className: t, variant: s = "outline", size: i = "icon", ...n }) {
  const { orientation: c, scrollNext: r, canScrollNext: a } = W();
  return e.jsxs(x, {
    "data-slot": "carousel-next",
    variant: s,
    size: i,
    className: p(
      "absolute size-8 rounded-full",
      c === "horizontal"
        ? "top-1/2 -right-12 -translate-y-1/2"
        : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
      t,
    ),
    disabled: !a,
    onClick: r,
    ...n,
    children: [
      e.jsx(J, {}),
      e.jsx("span", { className: "sr-only", children: "Next slide" }),
    ],
  });
}
function Ft() {
  const { t } = y(),
    s = [
      {
        image: "/images/sertificat2.png",
        name: "UZCERT",
        alt: t("certifications.uzcert"),
      },
      {
        image: "/images/sertificat 1.png",
        name: "OZST",
        alt: t("certifications.ozst"),
      },
      {
        image: "/images/sertificat2.png",
        name: "RoHS",
        alt: t("certifications.rohs"),
      },
      {
        image: "/images/sertificat 1.png",
        name: "ISO 9001",
        alt: t("certifications.iso9001"),
      },
      {
        image: "/images/sertificat 1.png",
        name: "GMP",
        alt: t("certifications.gmp"),
      },
    ];
  return e.jsx("section", {
    className: "py-16 bg-gradient-to-br from-gray-50 to-white",
    children: e.jsxs("div", {
      className: "container mx-auto px-4 max-w-7xl",
      children: [
        e.jsxs("div", {
          className: "text-center mb-12",
          children: [
            e.jsx("h2", {
              className: "mb-4",
              children: t("certifications.title"),
            }),
            e.jsx("p", {
              className: "text-gray-600 max-w-2xl mx-auto mb-6",
              children: t("certifications.subtitle"),
            }),
            e.jsx("div", {
              className:
                "max-w-4xl mx-auto mt-8 p-6 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-xl border-2 border-indigo-200",
              children: e.jsx("p", {
                className:
                  "text-gray-800 text-base sm:text-lg leading-relaxed font-medium",
                children: t("certifications.description"),
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "max-w-6xl mx-auto",
          children: e.jsxs(Tt, {
            opts: { align: "center", loop: !0 },
            className: "w-full",
            children: [
              e.jsx(At, {
                className: "-ml-2 md:-ml-4",
                children: s.map((i, n) =>
                  e.jsx(
                    Rt,
                    {
                      className: "pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3",
                      children: e.jsx("div", {
                        className: "relative group",
                        children: e.jsx("div", {
                          className:
                            "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300",
                          children: e.jsx("div", {
                            className: "aspect-[3/4] relative overflow-hidden",
                            children: e.jsx(L, {
                              src: i.image,
                              alt: i.alt,
                              className:
                                "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                            }),
                          }),
                        }),
                      }),
                    },
                    n,
                  ),
                ),
              }),
              e.jsx(Bt, {
                className:
                  "left-0 md:-left-12 bg-white/80 hover:bg-white border-2 border-indigo-600",
              }),
              e.jsx(Ot, {
                className:
                  "right-0 md:-right-12 bg-white/80 hover:bg-white border-2 border-indigo-600",
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function _t() {
  const { t } = y(),
    s = [
      {
        icon: te,
        title: t("services.installation.title"),
        description: t("services.installation.desc"),
      },
      {
        icon: Be,
        title: t("services.support.title"),
        description: t("services.support.desc"),
      },
      {
        icon: _,
        title: t("services.maintenance.title"),
        description: t("services.maintenance.desc"),
      },
      {
        icon: Oe,
        title: t("services.training.title"),
        description: t("services.training.desc"),
      },
      {
        icon: Fe,
        title: t("services.backup.title"),
        description: t("services.backup.desc"),
      },
      {
        icon: X,
        title: t("services.validation.title"),
        description: t("services.validation.desc"),
      },
    ],
    i = (n) => {
      const c = document.getElementById(n);
      c && c.scrollIntoView({ behavior: "smooth" });
    };
  return e.jsx("section", {
    id: "services",
    className: "py-20 bg-white",
    children: e.jsxs("div", {
      className: "container mx-auto px-4 max-w-7xl",
      children: [
        e.jsxs("div", {
          className: "text-center mb-16",
          children: [
            e.jsx("h2", { className: "mb-4", children: t("services.title") }),
            e.jsx("p", {
              className: "text-gray-600",
              children: t("services.subtitle"),
            }),
          ],
        }),
        e.jsx("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",
          children: s.map((n, c) =>
            e.jsxs(
              "div",
              {
                className:
                  "bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-100 hover:border-indigo-600 hover:shadow-xl transition-all group",
                children: [
                  e.jsx("div", {
                    className:
                      "w-14 h-14 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                    children: e.jsx(n.icon, {
                      className: "text-white",
                      size: 28,
                    }),
                  }),
                  e.jsxs("h3", {
                    className: "mb-3",
                    children: ["📌 ", n.title],
                  }),
                  e.jsx("p", {
                    className: "text-gray-600",
                    children: n.description,
                  }),
                ],
              },
              c,
            ),
          ),
        }),
        e.jsx("div", {
          className: "text-center",
          children: e.jsxs(x, {
            size: "lg",
            onClick: () => i("contacts"),
            children: [
              t("services.learnMore"),
              e.jsx(J, { className: "ml-2", size: 20 }),
            ],
          }),
        }),
      ],
    }),
  });
}
function q({ className: t, type: s, ...i }) {
  return e.jsx("input", {
    type: s,
    "data-slot": "input",
    className: p(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      t,
    ),
    ...i,
  });
}
function I({ className: t, ...s }) {
  return e.jsx("textarea", {
    "data-slot": "textarea",
    className: p(
      "resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t,
    ),
    ...s,
  });
}
const B = { baseUrl: "", contactEndpoint: "/api/send-email.php" };
function Wt() {
  const { t } = y(),
    { trackForm: s, trackPhone: i, trackEmail: n, trackLink: c } = D();
  me("contacts", "Contacts Section");
  const [r, a] = m.useState({ name: "", email: "", phone: "", message: "" }),
    [l, o] = m.useState(!1),
    [d, b] = m.useState(null),
    h = async (g) => {
      g.preventDefault(), o(!0), b(null);
      const C = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: r.name,
        email: r.email,
        phone: r.phone,
        message: r.message,
        timestamp: new Date().toISOString(),
      };
      try {
        const f = JSON.parse(localStorage.getItem("formSubmissions") || "[]");
        f.push(C), localStorage.setItem("formSubmissions", JSON.stringify(f));
      } catch (f) {
        console.error("Error saving submission:", f);
      }
      try {
        const f = await fetch(`${B.baseUrl}${B.contactEndpoint}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: r.name,
              email: r.email,
              phone: r.phone || "",
              message: r.message,
            }),
          }),
          v = await f.json();
        if (!f.ok) throw new Error(v.error || `Ошибка сервера: ${f.status}`);
        if (v.success)
          console.log("Email успешно отправлен:", v),
            s("contact_form", { success: !0 }),
            alert(
              t("contacts.successMessage") || "Сообщение успешно отправлено!",
            ),
            a({ name: "", email: "", phone: "", message: "" });
        else throw new Error(v.error || "Неизвестная ошибка");
      } catch (f) {
        console.error("Ошибка отправки email:", f);
        let v = "Произошла ошибка при отправке сообщения.";
        f.message
          ? (v = f.message)
          : f instanceof TypeError &&
            f.message.includes("fetch") &&
            (v =
              "Не удалось подключиться к серверу. Убедитесь, что backend сервер запущен."),
          b(v),
          console.error("Полная информация об ошибке:", {
            error: f,
            apiUrl: `${B.baseUrl}${B.contactEndpoint}`,
          });
      } finally {
        o(!1);
      }
    },
    u = (g) => {
      a({ ...r, [g.target.name]: g.target.value });
    };
  return e.jsx("section", {
    id: "contacts",
    className:
      "py-20 bg-gradient-to-br from-gray-50 to-indigo-50 overflow-hidden",
    children: e.jsxs("div", {
      className: "container mx-auto px-4 max-w-7xl w-full",
      children: [
        e.jsxs("div", {
          className: "text-center mb-16",
          children: [
            e.jsx("h2", { className: "mb-4", children: t("contacts.title") }),
            e.jsx("p", {
              className: "text-gray-600",
              children: t("contacts.subtitle"),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid lg:grid-cols-2 gap-12 w-full",
          children: [
            e.jsxs("div", {
              className: "w-full min-w-0",
              children: [
                e.jsxs("div", {
                  className: "bg-white p-8 rounded-xl shadow-lg mb-8",
                  children: [
                    e.jsx("h3", {
                      className: "mb-6",
                      children: t("contacts.ourContacts"),
                    }),
                    e.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-start gap-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: e.jsx(K, {
                                className: "text-indigo-600",
                                size: 24,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", { children: t("contacts.address") }),
                                e.jsx("p", {
                                  className: "text-gray-600",
                                  children: t("contacts.addressValue"),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-start gap-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: e.jsx(E, {
                                className: "text-indigo-600",
                                size: 24,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", { children: t("contacts.phone") }),
                                e.jsxs("div", {
                                  className:
                                    "text-gray-600 flex flex-wrap gap-2",
                                  children: [
                                    e.jsx("a", {
                                      href: "tel:+998916767567",
                                      className:
                                        "hover:text-indigo-600 transition-colors underline",
                                      onClick: () => i("+998916767567"),
                                      children: "+998 (91) 676-75-67",
                                    }),
                                    e.jsx("span", { children: "," }),
                                    e.jsx("a", {
                                      href: "tel:+998998681973",
                                      className:
                                        "hover:text-indigo-600 transition-colors underline",
                                      onClick: () => i("+998998681973"),
                                      children: "+998 (99) 868-19-73",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-start gap-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: e.jsx(G, {
                                className: "text-indigo-600",
                                size: 24,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", { children: t("contacts.email") }),
                                e.jsxs("div", {
                                  className:
                                    "text-gray-600 flex flex-wrap gap-2",
                                  children: [
                                    e.jsx("a", {
                                      href: "mailto:info@loragate.uz",
                                      className:
                                        "hover:text-indigo-600 transition-colors underline",
                                      onClick: () => n("info@loragate.uz"),
                                      children: "info@loragate.uz",
                                    }),
                                    e.jsx("span", { children: "," }),
                                    e.jsx("a", {
                                      href: "mailto:support@loragate.uz",
                                      className:
                                        "hover:text-indigo-600 transition-colors underline",
                                      onClick: () => n("support@loragate.uz"),
                                      children: "support@loragate.uz",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-start gap-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: e.jsx(_e, {
                                className: "text-indigo-600",
                                size: 24,
                              }),
                            }),
                            e.jsxs("div", {
                              className: "flex-1",
                              children: [
                                e.jsx("p", {
                                  className: "mb-2",
                                  children:
                                    t("contacts.socialMedia") ||
                                    "Социальные сети",
                                }),
                                e.jsxs("div", {
                                  className: "flex gap-4 flex-wrap",
                                  children: [
                                    e.jsxs("a", {
                                      href: "https://t.me/LoRa_Gate",
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors group",
                                      "aria-label": "Telegram",
                                      onClick: () =>
                                        c(
                                          "https://t.me/LoRa_Gate",
                                          "Telegram",
                                          !0,
                                        ),
                                      children: [
                                        e.jsx("svg", {
                                          className:
                                            "w-6 h-6 group-hover:scale-110 transition-transform",
                                          viewBox: "0 0 24 24",
                                          fill: "currentColor",
                                          children: e.jsx("path", {
                                            d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z",
                                          }),
                                        }),
                                        e.jsx("span", {
                                          className: "text-sm",
                                          children: "Telegram",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("a", {
                                      href: "https://www.instagram.com/loragate_gxp_monitoring/",
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors group",
                                      "aria-label": "Instagram",
                                      children: [
                                        e.jsx("svg", {
                                          className:
                                            "w-6 h-6 group-hover:scale-110 transition-transform",
                                          viewBox: "0 0 24 24",
                                          fill: "currentColor",
                                          children: e.jsx("path", {
                                            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                                          }),
                                        }),
                                        e.jsx("span", {
                                          className: "text-sm",
                                          children: "Instagram",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("a", {
                                      href: "https://www.facebook.com/loragateuz",
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors group",
                                      "aria-label": "Facebook",
                                      children: [
                                        e.jsx("svg", {
                                          className:
                                            "w-6 h-6 group-hover:scale-110 transition-transform",
                                          viewBox: "0 0 24 24",
                                          fill: "currentColor",
                                          children: e.jsx("path", {
                                            d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                                          }),
                                        }),
                                        e.jsx("span", {
                                          className: "text-sm",
                                          children: "Facebook",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mt-8 w-full min-w-0",
                  children: [
                    e.jsx("h3", {
                      className: "mb-4 text-lg font-semibold",
                      children: t("contacts.mapTitle"),
                    }),
                    e.jsx("div", {
                      className:
                        "bg-white rounded-xl overflow-hidden shadow-lg h-96 w-full",
                      style: { maxWidth: "100%", boxSizing: "border-box" },
                      children: e.jsx("div", {
                        className: "w-full h-full overflow-hidden",
                        style: { maxWidth: "100%" },
                        children: e.jsx("iframe", {
                          src: "https://yandex.ru/map-widget/v1/?text=Узбекистан%2C%20г.%20Ташкент%20Мирзо-Улугбекский%20р-н.%20ул.%20Ялангач%20-15&z=16",
                          width: "100%",
                          height: "100%",
                          frameBorder: "0",
                          allowFullScreen: !0,
                          style: {
                            border: 0,
                            maxWidth: "100%",
                            width: "100%",
                            display: "block",
                          },
                          title: "Карта расположения офиса LORA GATE",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "bg-white p-8 rounded-xl shadow-lg w-full min-w-0",
              children: [
                e.jsx("h3", {
                  className: "mb-6",
                  children: t("contacts.formTitle"),
                }),
                e.jsxs("form", {
                  onSubmit: h,
                  className: "space-y-6",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          htmlFor: "name",
                          className: "block mb-2",
                          children: t("contacts.name"),
                        }),
                        e.jsx(q, {
                          id: "name",
                          name: "name",
                          type: "text",
                          value: r.name,
                          onChange: u,
                          placeholder: t("contacts.namePlaceholder"),
                          required: !0,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          htmlFor: "email",
                          className: "block mb-2",
                          children: "Email *",
                        }),
                        e.jsx(q, {
                          id: "email",
                          name: "email",
                          type: "email",
                          value: r.email,
                          onChange: u,
                          placeholder: t("contacts.emailPlaceholder"),
                          required: !0,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsxs("label", {
                          htmlFor: "phone",
                          className: "block mb-2",
                          children: [t("contacts.phone"), " *"],
                        }),
                        e.jsx(q, {
                          id: "phone",
                          name: "phone",
                          type: "tel",
                          value: r.phone,
                          onChange: u,
                          placeholder: t("contacts.phonePlaceholder"),
                          required: !0,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          htmlFor: "message",
                          className: "block mb-2",
                          children: t("contacts.message"),
                        }),
                        e.jsx(I, {
                          id: "message",
                          name: "message",
                          value: r.message,
                          onChange: u,
                          placeholder: t("contacts.messagePlaceholder"),
                          rows: 5,
                          required: !0,
                        }),
                      ],
                    }),
                    d &&
                      e.jsx("div", {
                        className:
                          "p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm",
                        children: d,
                      }),
                    e.jsx(x, {
                      type: "submit",
                      size: "lg",
                      className: "w-full",
                      disabled: l,
                      children: l
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(We, {
                                className: "mr-2 animate-spin",
                                size: 20,
                              }),
                              "Отправка...",
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(He, { className: "mr-2", size: 20 }),
                              t("contacts.submit"),
                            ],
                          }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Ht() {
  const { t } = y(),
    s = (n) => {
      const c = document.getElementById(n);
      c && c.scrollIntoView({ behavior: "smooth" });
    },
    i = new Date().getFullYear();
  return e.jsx("footer", {
    className: "bg-gray-900 text-white py-12",
    children: e.jsxs("div", {
      className: "container mx-auto px-4 max-w-7xl",
      children: [
        e.jsxs("div", {
          className: "grid md:grid-cols-4 gap-8 mb-8",
          children: [
            e.jsxs("div", {
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-4",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden",
                      children: e.jsx(oe, {
                        className: "w-full h-full object-contain",
                      }),
                    }),
                    e.jsx("span", {
                      className: "text-xl",
                      children: "Lora Gate",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-gray-400 text-sm",
                  children: t("footer.description"),
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("h3", {
                  className: "mb-4 text-white",
                  children: t("footer.aboutCompany"),
                }),
                e.jsxs("ul", {
                  className: "space-y-2",
                  children: [
                    e.jsx("li", {
                      children: e.jsx("button", {
                        onClick: () => s("cases"),
                        className:
                          "text-gray-400 hover:text-white transition-colors text-sm",
                        children: t("footer.cases"),
                      }),
                    }),
                    e.jsx("li", {
                      children: e.jsx("button", {
                        onClick: () => s("certifications"),
                        className:
                          "text-gray-400 hover:text-white transition-colors text-sm",
                        children: t("footer.certifications"),
                      }),
                    }),
                    e.jsx("li", {
                      children: e.jsx("button", {
                        onClick: () => s("contacts"),
                        className:
                          "text-gray-400 hover:text-white transition-colors text-sm",
                        children: t("footer.contacts"),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("h3", {
                  className: "mb-4 text-white",
                  children: t("footer.products"),
                }),
                e.jsxs("ul", {
                  className: "space-y-2",
                  children: [
                    e.jsx("li", {
                      children: e.jsx("button", {
                        onClick: () => s("equipment"),
                        className:
                          "text-gray-400 hover:text-white transition-colors text-sm",
                        children: t("footer.allProducts"),
                      }),
                    }),
                    e.jsx("li", {
                      children: e.jsx("button", {
                        onClick: () => s("equipment"),
                        className:
                          "text-gray-400 hover:text-white transition-colors text-sm",
                        children: t("footer.temperatureSensors"),
                      }),
                    }),
                    e.jsx("li", {
                      children: e.jsx("button", {
                        onClick: () => s("equipment"),
                        className:
                          "text-gray-400 hover:text-white transition-colors text-sm",
                        children: t("footer.wifiGateways"),
                      }),
                    }),
                    e.jsx("li", {
                      children: e.jsx("button", {
                        onClick: () => s("services"),
                        className:
                          "text-gray-400 hover:text-white transition-colors text-sm",
                        children: t("footer.services"),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("h3", {
                  className: "mb-4 text-white",
                  children: t("footer.contacts"),
                }),
                e.jsxs("ul", {
                  className: "space-y-3",
                  children: [
                    e.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [
                        e.jsx(E, {
                          size: 16,
                          className: "text-indigo-400 mt-1 flex-shrink-0",
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("a", {
                              href: "tel:+998916767567",
                              className:
                                "text-gray-400 hover:text-white transition-colors text-sm block",
                              children: "+998 (91) 676-75-67",
                            }),
                            e.jsx("a", {
                              href: "tel:+998998681973",
                              className:
                                "text-gray-400 hover:text-white transition-colors text-sm block",
                              children: "+998 (99) 868-19-73",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [
                        e.jsx(G, {
                          size: 16,
                          className: "text-indigo-400 mt-1 flex-shrink-0",
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("a", {
                              href: "mailto:info@loragate.uz",
                              className:
                                "text-gray-400 hover:text-white transition-colors text-sm block",
                              children: "info@loragate.uz",
                            }),
                            e.jsx("a", {
                              href: "mailto:support@loragate.uz",
                              className:
                                "text-gray-400 hover:text-white transition-colors text-sm block",
                              children: "support@loragate.uz",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [
                        e.jsx(K, {
                          size: 16,
                          className: "text-indigo-400 mt-1 flex-shrink-0",
                        }),
                        e.jsxs("span", {
                          className: "text-gray-400 text-sm",
                          children: [
                            "Узбекистан, г. Ташкент",
                            e.jsx("br", {}),
                            "Мирзо-Улугбекский р-н. ул. Ялангач -15",
                          ],
                        }),
                      ],
                    }),
                    e.jsx("li", {
                      children: e.jsxs("div", {
                        className: "flex gap-3 mt-2",
                        children: [
                          e.jsx("a", {
                            href: "https://t.me/LoRa_Gate",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "text-gray-400 hover:text-indigo-400 transition-colors",
                            "aria-label": "Telegram",
                            children: e.jsx("svg", {
                              className:
                                "w-5 h-5 hover:scale-110 transition-transform",
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              children: e.jsx("path", {
                                d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z",
                              }),
                            }),
                          }),
                          e.jsx("a", {
                            href: "https://www.instagram.com/loragate_gxp_monitoring/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "text-gray-400 hover:text-indigo-400 transition-colors",
                            "aria-label": "Instagram",
                            children: e.jsx("svg", {
                              className:
                                "w-5 h-5 hover:scale-110 transition-transform",
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              children: e.jsx("path", {
                                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                              }),
                            }),
                          }),
                          e.jsx("a", {
                            href: "https://www.facebook.com/loragateuz",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "text-gray-400 hover:text-indigo-400 transition-colors",
                            "aria-label": "Facebook",
                            children: e.jsx("svg", {
                              className:
                                "w-5 h-5 hover:scale-110 transition-transform",
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              children: e.jsx("path", {
                                d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "border-t border-gray-800 pt-8",
          children: e.jsxs("div", {
            className:
              "flex flex-col md:flex-row justify-between items-center gap-4",
            children: [
              e.jsxs("div", {
                className: "flex flex-wrap gap-6 text-sm text-gray-400",
                children: [
                  e.jsx("span", { children: t("footer.product") }),
                  e.jsx("span", { children: "|" }),
                  e.jsx("span", { children: t("footer.download") }),
                  e.jsx("span", { children: "|" }),
                  e.jsx("span", { children: t("footer.contacts") }),
                  e.jsx("span", { children: "|" }),
                  e.jsx("span", { children: t("footer.feedback") }),
                ],
              }),
              e.jsxs("p", {
                className: "text-gray-400 text-sm",
                children: ["© ", i, " LORA GATE. ", t("footer.copyright")],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Vt({ className: t, ...s }) {
  return e.jsx(Ve, {
    "data-slot": "tabs",
    className: p("flex flex-col gap-2", t),
    ...s,
  });
}
function Ut({ className: t, ...s }) {
  return e.jsx(Ue, {
    "data-slot": "tabs-list",
    className: p(
      "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",
      t,
    ),
    ...s,
  });
}
function T({ className: t, ...s }) {
  return e.jsx(Je, {
    "data-slot": "tabs-trigger",
    className: p(
      "data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t,
    ),
    ...s,
  });
}
function A({ className: t, ...s }) {
  return e.jsx(Xe, {
    "data-slot": "tabs-content",
    className: p("flex-1 outline-none", t),
    ...s,
  });
}
function j({ className: t, ...s }) {
  return e.jsx("div", {
    "data-slot": "card",
    className: p(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
      t,
    ),
    ...s,
  });
}
function N({ className: t, ...s }) {
  return e.jsx("div", {
    "data-slot": "card-header",
    className: p(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      t,
    ),
    ...s,
  });
}
function k({ className: t, ...s }) {
  return e.jsx("h4", {
    "data-slot": "card-title",
    className: p("leading-none", t),
    ...s,
  });
}
function P({ className: t, ...s }) {
  return e.jsx("p", {
    "data-slot": "card-description",
    className: p("text-muted-foreground", t),
    ...s,
  });
}
function w({ className: t, ...s }) {
  return e.jsx("div", {
    "data-slot": "card-content",
    className: p("px-6 [&:last-child]:pb-6", t),
    ...s,
  });
}
const Y = {
  hero: {
    title:
      "Комплексная система мониторинга температуры и влажности на базе LoRa",
    subtitle:
      "Контролируйте климат ваших складов и помещений в реальном времени — надёжно, просто, эффективно.",
    companyDescription:
      "Мы — Lora Gate. Внедряем и обслуживаем системы дистанционного мониторинга температуры и влажности на базе LoRa для фармацевтических и пищевых предприятий.",
  },
  aboutSystem: {
    features: [
      {
        title: "Полный цикл внедрения системы климат-мониторинга",
        description: "От проектирования до запуска в эксплуатацию",
      },
      {
        title: "Настройка, установка и сервисное обслуживание",
        description: "Профессиональная поддержка на всех этапах",
      },
      {
        title: "Интеграция с корпоративными системами",
        description: "Подключение к MES, ERP и системам уведомлений",
      },
      {
        title: "Обучение персонала",
        description: "Комплексное обучение работе с системой",
      },
    ],
  },
  benefits: {
    items: [
      { title: "Реальное время", description: "Данные обновляются мгновенно" },
      {
        title: "Автоматические уведомления",
        description: "SMS/Email/Push при отклонениях",
      },
      { title: "Отчёты и архив", description: "Для аудита и валидации" },
      {
        title: "Гибкая настройка",
        description: "Зоны контроля, пороги, расписания",
      },
      {
        title: "Безопасность данных",
        description: "Защищённое хранение и доступ",
      },
    ],
  },
  cases: {
    items: [
      {
        title: "Фармацевтический склад",
        description:
          "Автоматизация контроля среды по нормативам GMP. Снижение рисков брака продукции.",
        benefits: [
          "Соответствие GDP стандартам",
          "Автоматические отчёты для аудита",
          "Снижение потерь продукции на 40%",
          "Поддержание качества продукции в соответствии с GDP стандартами",
        ],
      },
      {
        title: "Пищевая логистика",
        description:
          "Стабильный мониторинг температурных режимов на всех складах и линиях хранения.",
        benefits: [
          "Контроль всей холодильной цепи",
          "Мгновенные уведомления о нарушениях",
          "Увеличение срока годности на 20%",
        ],
      },
    ],
  },
  contacts: {
    address: "Ваш адрес офиса",
    phone: "+998 (91) 676-75-67",
    email: "fkurganbaev@gmail.com",
  },
};
function Jt() {
  const [t, s] = m.useState(Y),
    [i, n] = m.useState(!1);
  m.useEffect(() => {
    const a = localStorage.getItem("siteContent");
    if (a)
      try {
        s(JSON.parse(a));
      } catch (l) {
        console.error("Error loading content:", l);
      }
  }, []);
  const c = () => {
      localStorage.setItem("siteContent", JSON.stringify(t)),
        n(!0),
        setTimeout(() => n(!1), 2e3);
    },
    r = () => {
      confirm("Сбросить все изменения к значениям по умолчанию?") &&
        (s(Y), localStorage.removeItem("siteContent"));
    };
  return e.jsxs("div", {
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between mb-6",
        children: [
          e.jsx("h2", {
            className: "text-3xl font-bold",
            children: "Редактирование контента",
          }),
          e.jsxs("div", {
            className: "flex gap-2",
            children: [
              e.jsxs(x, {
                variant: "outline",
                onClick: r,
                children: [
                  e.jsx(_, { className: "mr-2", size: 16 }),
                  "Сбросить",
                ],
              }),
              e.jsxs(x, {
                onClick: c,
                disabled: i,
                children: [
                  e.jsx(Ke, { className: "mr-2", size: 16 }),
                  i ? "Сохранено!" : "Сохранить",
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs(Vt, {
        defaultValue: "hero",
        className: "space-y-4",
        children: [
          e.jsxs(Ut, {
            className: "grid w-full grid-cols-5",
            children: [
              e.jsx(T, { value: "hero", children: "Hero" }),
              e.jsx(T, { value: "about", children: "О системе" }),
              e.jsx(T, { value: "benefits", children: "Преимущества" }),
              e.jsx(T, { value: "cases", children: "Кейсы" }),
              e.jsx(T, { value: "contacts", children: "Контакты" }),
            ],
          }),
          e.jsx(A, {
            value: "hero",
            children: e.jsxs(j, {
              children: [
                e.jsxs(N, {
                  children: [
                    e.jsx(k, { children: "Секция Hero" }),
                    e.jsx(P, { children: "Главный экран сайта" }),
                  ],
                }),
                e.jsxs(w, {
                  className: "space-y-4",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          className: "block mb-2 font-medium",
                          children: "Заголовок",
                        }),
                        e.jsx(q, {
                          value: t.hero.title,
                          onChange: (a) =>
                            s({
                              ...t,
                              hero: { ...t.hero, title: a.target.value },
                            }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          className: "block mb-2 font-medium",
                          children: "Подзаголовок",
                        }),
                        e.jsx(I, {
                          value: t.hero.subtitle,
                          onChange: (a) =>
                            s({
                              ...t,
                              hero: { ...t.hero, subtitle: a.target.value },
                            }),
                          rows: 3,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          className: "block mb-2 font-medium",
                          children: "Описание компании",
                        }),
                        e.jsx(I, {
                          value: t.hero.companyDescription,
                          onChange: (a) =>
                            s({
                              ...t,
                              hero: {
                                ...t.hero,
                                companyDescription: a.target.value,
                              },
                            }),
                          rows: 3,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx(A, {
            value: "about",
            children: e.jsxs(j, {
              children: [
                e.jsxs(N, {
                  children: [
                    e.jsx(k, { children: "О системе" }),
                    e.jsx(P, { children: "Особенности системы" }),
                  ],
                }),
                e.jsx(w, {
                  className: "space-y-6",
                  children: t.aboutSystem.features.map((a, l) =>
                    e.jsxs(
                      "div",
                      {
                        className: "p-4 border rounded-lg space-y-2",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsxs("label", {
                                className: "block mb-2 font-medium",
                                children: ["Заголовок ", l + 1],
                              }),
                              e.jsx(q, {
                                value: a.title,
                                onChange: (o) => {
                                  const d = [...t.aboutSystem.features];
                                  (d[l].title = o.target.value),
                                    s({ ...t, aboutSystem: { features: d } });
                                },
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsxs("label", {
                                className: "block mb-2 font-medium",
                                children: ["Описание ", l + 1],
                              }),
                              e.jsx(I, {
                                value: a.description,
                                onChange: (o) => {
                                  const d = [...t.aboutSystem.features];
                                  (d[l].description = o.target.value),
                                    s({ ...t, aboutSystem: { features: d } });
                                },
                                rows: 2,
                              }),
                            ],
                          }),
                        ],
                      },
                      l,
                    ),
                  ),
                }),
              ],
            }),
          }),
          e.jsx(A, {
            value: "benefits",
            children: e.jsxs(j, {
              children: [
                e.jsxs(N, {
                  children: [
                    e.jsx(k, { children: "Преимущества" }),
                    e.jsx(P, { children: "Преимущества для бизнеса" }),
                  ],
                }),
                e.jsx(w, {
                  className: "space-y-6",
                  children: t.benefits.items.map((a, l) =>
                    e.jsxs(
                      "div",
                      {
                        className: "p-4 border rounded-lg space-y-2",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsxs("label", {
                                className: "block mb-2 font-medium",
                                children: ["Заголовок ", l + 1],
                              }),
                              e.jsx(q, {
                                value: a.title,
                                onChange: (o) => {
                                  const d = [...t.benefits.items];
                                  (d[l].title = o.target.value),
                                    s({ ...t, benefits: { items: d } });
                                },
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsxs("label", {
                                className: "block mb-2 font-medium",
                                children: ["Описание ", l + 1],
                              }),
                              e.jsx(I, {
                                value: a.description,
                                onChange: (o) => {
                                  const d = [...t.benefits.items];
                                  (d[l].description = o.target.value),
                                    s({ ...t, benefits: { items: d } });
                                },
                                rows: 2,
                              }),
                            ],
                          }),
                        ],
                      },
                      l,
                    ),
                  ),
                }),
              ],
            }),
          }),
          e.jsx(A, {
            value: "cases",
            children: e.jsxs(j, {
              children: [
                e.jsxs(N, {
                  children: [
                    e.jsx(k, { children: "Кейсы" }),
                    e.jsx(P, { children: "Реальные результаты клиентов" }),
                  ],
                }),
                e.jsx(w, {
                  className: "space-y-6",
                  children: t.cases.items.map((a, l) =>
                    e.jsxs(
                      "div",
                      {
                        className: "p-4 border rounded-lg space-y-4",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsxs("label", {
                                className: "block mb-2 font-medium",
                                children: ["Название кейса ", l + 1],
                              }),
                              e.jsx(q, {
                                value: a.title,
                                onChange: (o) => {
                                  const d = [...t.cases.items];
                                  (d[l].title = o.target.value),
                                    s({ ...t, cases: { items: d } });
                                },
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsxs("label", {
                                className: "block mb-2 font-medium",
                                children: ["Описание ", l + 1],
                              }),
                              e.jsx(I, {
                                value: a.description,
                                onChange: (o) => {
                                  const d = [...t.cases.items];
                                  (d[l].description = o.target.value),
                                    s({ ...t, cases: { items: d } });
                                },
                                rows: 3,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                className: "block mb-2 font-medium",
                                children:
                                  "Преимущества (каждое с новой строки)",
                              }),
                              e.jsx(I, {
                                value: a.benefits.join(`
`),
                                onChange: (o) => {
                                  const d = [...t.cases.items];
                                  (d[l].benefits = o.target.value
                                    .split(
                                      `
`,
                                    )
                                    .filter((b) => b.trim())),
                                    s({ ...t, cases: { items: d } });
                                },
                                rows: 4,
                              }),
                            ],
                          }),
                        ],
                      },
                      l,
                    ),
                  ),
                }),
              ],
            }),
          }),
          e.jsx(A, {
            value: "contacts",
            children: e.jsxs(j, {
              children: [
                e.jsxs(N, {
                  children: [
                    e.jsx(k, { children: "Контакты" }),
                    e.jsx(P, { children: "Контактная информация" }),
                  ],
                }),
                e.jsxs(w, {
                  className: "space-y-4",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          className: "block mb-2 font-medium",
                          children: "Адрес",
                        }),
                        e.jsx(q, {
                          value: t.contacts.address,
                          onChange: (a) =>
                            s({
                              ...t,
                              contacts: {
                                ...t.contacts,
                                address: a.target.value,
                              },
                            }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          className: "block mb-2 font-medium",
                          children: "Телефон",
                        }),
                        e.jsx(q, {
                          value: t.contacts.phone,
                          onChange: (a) =>
                            s({
                              ...t,
                              contacts: {
                                ...t.contacts,
                                phone: a.target.value,
                              },
                            }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          className: "block mb-2 font-medium",
                          children: "Email",
                        }),
                        e.jsx(q, {
                          type: "email",
                          value: t.contacts.email,
                          onChange: (a) =>
                            s({
                              ...t,
                              contacts: {
                                ...t.contacts,
                                email: a.target.value,
                              },
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Xt() {
  const [t, s] = m.useState([]);
  m.useEffect(() => {
    i();
  }, []);
  const i = () => {
      try {
        const a = localStorage.getItem("formSubmissions");
        a && s(JSON.parse(a));
      } catch (a) {
        console.error("Error loading submissions:", a);
      }
    },
    n = (a) => {
      if (confirm("Удалить эту заявку?")) {
        const l = t.filter((o) => o.id !== a);
        s(l), localStorage.setItem("formSubmissions", JSON.stringify(l));
      }
    },
    c = () => {
      confirm("Удалить все заявки?") &&
        (s([]), localStorage.setItem("formSubmissions", JSON.stringify([])));
    },
    r = () => {
      const a = JSON.stringify(t, null, 2),
        l = new Blob([a], { type: "application/json" }),
        o = URL.createObjectURL(l),
        d = document.createElement("a");
      (d.href = o),
        (d.download = `form-submissions-${new Date().toISOString().split("T")[0]}.json`),
        d.click(),
        URL.revokeObjectURL(o);
    };
  return e.jsxs("div", {
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between mb-6",
        children: [
          e.jsx("h2", {
            className: "text-3xl font-bold",
            children: "Заявки с формы обратной связи",
          }),
          e.jsx("div", {
            className: "flex gap-2",
            children:
              t.length > 0 &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsxs(x, {
                    variant: "outline",
                    onClick: r,
                    children: [
                      e.jsx(Z, { className: "mr-2", size: 16 }),
                      "Экспорт JSON",
                    ],
                  }),
                  e.jsxs(x, {
                    variant: "destructive",
                    onClick: c,
                    children: [
                      e.jsx(U, { className: "mr-2", size: 16 }),
                      "Очистить все",
                    ],
                  }),
                ],
              }),
          }),
        ],
      }),
      t.length === 0
        ? e.jsx(j, {
            children: e.jsxs(w, {
              className: "py-12 text-center",
              children: [
                e.jsx(G, { className: "mx-auto mb-4 text-gray-400", size: 48 }),
                e.jsx("p", {
                  className: "text-gray-500 text-lg",
                  children: "Нет заявок",
                }),
                e.jsx("p", {
                  className: "text-gray-400 text-sm mt-2",
                  children:
                    "Заявки с формы обратной связи будут отображаться здесь",
                }),
              ],
            }),
          })
        : e.jsx("div", {
            className: "space-y-4",
            children: t
              .sort(
                (a, l) =>
                  new Date(l.timestamp).getTime() -
                  new Date(a.timestamp).getTime(),
              )
              .map((a) =>
                e.jsxs(
                  j,
                  {
                    children: [
                      e.jsx(N, {
                        children: e.jsxs("div", {
                          className: "flex items-start justify-between",
                          children: [
                            e.jsxs("div", {
                              children: [
                                e.jsxs(k, {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx(Ze, {
                                      className: "text-blue-600",
                                      size: 20,
                                    }),
                                    a.name,
                                  ],
                                }),
                                e.jsx(P, {
                                  className: "mt-1",
                                  children: new Date(
                                    a.timestamp,
                                  ).toLocaleString("ru-RU"),
                                }),
                              ],
                            }),
                            e.jsx(x, {
                              variant: "ghost",
                              size: "sm",
                              onClick: () => n(a.id),
                              className: "text-red-600 hover:text-red-700",
                              children: e.jsx(U, { size: 16 }),
                            }),
                          ],
                        }),
                      }),
                      e.jsxs(w, {
                        className: "space-y-3",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                              e.jsx(G, {
                                className: "text-gray-400",
                                size: 16,
                              }),
                              e.jsx("a", {
                                href: `mailto:${a.email}`,
                                className: "text-blue-600 hover:underline",
                                children: a.email,
                              }),
                            ],
                          }),
                          a.phone &&
                            e.jsxs("div", {
                              className: "flex items-center gap-2 text-sm",
                              children: [
                                e.jsx(E, {
                                  className: "text-gray-400",
                                  size: 16,
                                }),
                                e.jsx("a", {
                                  href: `tel:${a.phone}`,
                                  className: "text-blue-600 hover:underline",
                                  children: a.phone,
                                }),
                              ],
                            }),
                          a.message &&
                            e.jsxs("div", {
                              className: "mt-4 p-4 bg-gray-50 rounded-lg",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-start gap-2 mb-2",
                                  children: [
                                    e.jsx($e, {
                                      className: "text-gray-400 mt-0.5",
                                      size: 16,
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "font-medium text-sm text-gray-600",
                                      children: "Сообщение:",
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-gray-700 whitespace-pre-wrap",
                                  children: a.message,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  },
                  a.id,
                ),
              ),
          }),
    ],
  });
}
function Kt({ className: t, ...s }) {
  return e.jsx(Qe, {
    "data-slot": "switch",
    className: p(
      "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
      t,
    ),
    ...s,
    children: e.jsx(Ye, {
      "data-slot": "switch-thumb",
      className: p(
        "bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
      ),
    }),
  });
}
function Zt({ className: t, ...s }) {
  return e.jsx(et, {
    "data-slot": "label",
    className: p(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      t,
    ),
    ...s,
  });
}
const R = [
  { id: "hero", name: "Hero (Главный экран)", default: !0 },
  { id: "about", name: "О системе", default: !0 },
  { id: "howItWorks", name: "Как работает", default: !0 },
  { id: "benefits", name: "Преимущества", default: !0 },
  { id: "equipment", name: "Оборудование", default: !0 },
  { id: "webApp", name: "Веб-приложение", default: !0 },
  { id: "cases", name: "Кейсы", default: !0 },
  { id: "services", name: "Услуги", default: !0 },
  { id: "contacts", name: "Контакты", default: !0 },
];
function $t() {
  const [t, s] = m.useState({});
  m.useEffect(() => {
    i();
  }, []);
  const i = () => {
      try {
        const l = localStorage.getItem("sectionVisibility");
        if (l) s(JSON.parse(l));
        else {
          const o = {};
          R.forEach((d) => {
            o[d.id] = d.default;
          }),
            s(o);
        }
      } catch (l) {
        console.error("Error loading visibility:", l);
      }
    },
    n = (l) => {
      const o = { ...t, [l]: !(t[l] ?? !0) };
      s(o),
        localStorage.setItem("sectionVisibility", JSON.stringify(o)),
        window.dispatchEvent(new Event("sectionVisibilityChanged"));
    },
    c = () => {
      if (confirm("Сбросить видимость всех секций к значениям по умолчанию?")) {
        const l = {};
        R.forEach((o) => {
          l[o.id] = o.default;
        }),
          s(l),
          localStorage.setItem("sectionVisibility", JSON.stringify(l)),
          window.dispatchEvent(new Event("sectionVisibilityChanged"));
      }
    },
    r = () => {
      const l = {};
      R.forEach((o) => {
        l[o.id] = !0;
      }),
        s(l),
        localStorage.setItem("sectionVisibility", JSON.stringify(l)),
        window.dispatchEvent(new Event("sectionVisibilityChanged"));
    },
    a = () => {
      const l = {};
      R.forEach((o) => {
        l[o.id] = !1;
      }),
        s(l),
        localStorage.setItem("sectionVisibility", JSON.stringify(l)),
        window.dispatchEvent(new Event("sectionVisibilityChanged"));
    };
  return e.jsxs("div", {
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between mb-6",
        children: [
          e.jsx("h2", {
            className: "text-3xl font-bold",
            children: "Видимость секций",
          }),
          e.jsxs("div", {
            className: "flex gap-2",
            children: [
              e.jsxs(x, {
                variant: "outline",
                onClick: c,
                children: [
                  e.jsx(_, { className: "mr-2", size: 16 }),
                  "Сбросить",
                ],
              }),
              e.jsxs(x, {
                variant: "outline",
                onClick: r,
                children: [
                  e.jsx(F, { className: "mr-2", size: 16 }),
                  "Показать все",
                ],
              }),
              e.jsxs(x, {
                variant: "outline",
                onClick: a,
                children: [
                  e.jsx(Q, { className: "mr-2", size: 16 }),
                  "Скрыть все",
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs(j, {
        children: [
          e.jsxs(N, {
            children: [
              e.jsx(k, { children: "Управление видимостью" }),
              e.jsx(P, {
                children:
                  "Включите или отключите отображение секций на сайте. Изменения сохраняются автоматически.",
              }),
            ],
          }),
          e.jsx(w, {
            children: e.jsx("div", {
              className: "space-y-4",
              children: R.map((l) => {
                const o = t[l.id] ?? l.default;
                return e.jsxs(
                  "div",
                  {
                    className:
                      "flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          o
                            ? e.jsx(F, {
                                className: "text-green-600",
                                size: 20,
                              })
                            : e.jsx(Q, {
                                className: "text-gray-400",
                                size: 20,
                              }),
                          e.jsx(Zt, {
                            htmlFor: l.id,
                            className: "font-medium cursor-pointer",
                            children: l.name,
                          }),
                        ],
                      }),
                      e.jsx(Kt, {
                        id: l.id,
                        checked: o,
                        onCheckedChange: () => n(l.id),
                      }),
                    ],
                  },
                  l.id,
                );
              }),
            }),
          }),
        ],
      }),
      e.jsxs(j, {
        className: "mt-6",
        children: [
          e.jsx(N, { children: e.jsx(k, { children: "Информация" }) }),
          e.jsx(w, {
            children: e.jsx("p", {
              className: "text-sm text-gray-600",
              children:
                "Видимость секций сохраняется в локальном хранилище браузера. Для применения изменений на сайте необходимо обновить страницу.",
            }),
          }),
        ],
      }),
    ],
  });
}
function Qt() {
  var a, l, o;
  const [t, s] = m.useState(""),
    i = () => {
      const d = {
          siteContent: localStorage.getItem("siteContent"),
          formSubmissions: localStorage.getItem("formSubmissions"),
          sectionVisibility: localStorage.getItem("sectionVisibility"),
          exportDate: new Date().toISOString(),
        },
        b = JSON.stringify(d, null, 2),
        h = new Blob([b], { type: "application/json" }),
        u = URL.createObjectURL(h),
        g = document.createElement("a");
      (g.href = u),
        (g.download = `admin-backup-${new Date().toISOString().split("T")[0]}.json`),
        g.click(),
        URL.revokeObjectURL(u);
    },
    n = (d) => {
      var u;
      const b = (u = d.target.files) == null ? void 0 : u[0];
      if (!b) return;
      const h = new FileReader();
      (h.onload = (g) => {
        var C;
        try {
          const f = JSON.parse((C = g.target) == null ? void 0 : C.result);
          f.siteContent && localStorage.setItem("siteContent", f.siteContent),
            f.formSubmissions &&
              localStorage.setItem("formSubmissions", f.formSubmissions),
            f.sectionVisibility &&
              localStorage.setItem("sectionVisibility", f.sectionVisibility),
            alert(
              "Данные успешно импортированы! Обновите страницу для применения изменений.",
            ),
            window.location.reload();
        } catch {
          alert("Ошибка при импорте данных. Проверьте формат файла.");
        }
      }),
        h.readAsText(b);
    },
    c = () => {
      confirm(
        "ВНИМАНИЕ: Это действие удалит все данные админ-панели. Продолжить?",
      ) &&
        confirm("Вы уверены? Это действие нельзя отменить.") &&
        (localStorage.removeItem("siteContent"),
        localStorage.removeItem("formSubmissions"),
        localStorage.removeItem("sectionVisibility"),
        alert("Все данные удалены. Страница будет обновлена."),
        window.location.reload());
    },
    r = () => {
      confirm("Сбросить все настройки к значениям по умолчанию?") &&
        (localStorage.clear(),
        alert("Настройки сброшены. Страница будет обновлена."),
        window.location.reload());
    };
  return e.jsxs("div", {
    children: [
      e.jsx("h2", {
        className: "text-3xl font-bold mb-6",
        children: "Настройки",
      }),
      e.jsxs("div", {
        className: "space-y-6",
        children: [
          e.jsxs(j, {
            children: [
              e.jsxs(N, {
                children: [
                  e.jsx(k, { children: "Резервное копирование" }),
                  e.jsx(P, {
                    children: "Экспорт и импорт данных админ-панели",
                  }),
                ],
              }),
              e.jsxs(w, {
                className: "space-y-4",
                children: [
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsxs(x, {
                        onClick: i,
                        className: "flex-1",
                        children: [
                          e.jsx(Z, { className: "mr-2", size: 16 }),
                          "Экспорт всех данных",
                        ],
                      }),
                      e.jsxs("label", {
                        className: "flex-1",
                        children: [
                          e.jsx(x, {
                            variant: "outline",
                            className: "w-full",
                            asChild: !0,
                            children: e.jsxs("span", {
                              children: [
                                e.jsx(tt, { className: "mr-2", size: 16 }),
                                "Импорт данных",
                              ],
                            }),
                          }),
                          e.jsx("input", {
                            type: "file",
                            accept: ".json",
                            onChange: n,
                            className: "hidden",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-sm text-gray-500",
                    children:
                      "Экспортируйте все данные для резервного копирования или переноса на другой компьютер.",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(j, {
            children: [
              e.jsxs(N, {
                children: [
                  e.jsx(k, { children: "Сброс настроек" }),
                  e.jsx(P, {
                    children: "Восстановление значений по умолчанию",
                  }),
                ],
              }),
              e.jsxs(w, {
                className: "space-y-4",
                children: [
                  e.jsxs(x, {
                    variant: "outline",
                    onClick: r,
                    className: "w-full",
                    children: [
                      e.jsx(_, { className: "mr-2", size: 16 }),
                      "Сбросить все настройки",
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-sm text-gray-500",
                    children:
                      "Восстановит все значения по умолчанию и удалит все пользовательские изменения.",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(j, {
            children: [
              e.jsxs(N, {
                children: [
                  e.jsx(k, { children: "Опасная зона" }),
                  e.jsx(P, { children: "Необратимые действия" }),
                ],
              }),
              e.jsxs(w, {
                className: "space-y-4",
                children: [
                  e.jsxs(x, {
                    variant: "destructive",
                    onClick: c,
                    className: "w-full",
                    children: [
                      e.jsx(U, { className: "mr-2", size: 16 }),
                      "Удалить все данные",
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-sm text-red-600",
                    children:
                      "ВНИМАНИЕ: Это действие удалит все данные админ-панели, включая заявки и настройки.",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(j, {
            children: [
              e.jsx(N, {
                children: e.jsx(k, { children: "Информация о системе" }),
              }),
              e.jsx(w, {
                children: e.jsxs("div", {
                  className: "space-y-2 text-sm",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        e.jsx("span", {
                          className: "text-gray-600",
                          children: "Версия админ-панели:",
                        }),
                        e.jsx("span", {
                          className: "font-medium",
                          children: "1.0.0",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        e.jsx("span", {
                          className: "text-gray-600",
                          children: "Размер данных:",
                        }),
                        e.jsxs("span", {
                          className: "font-medium",
                          children: [
                            Math.round(
                              (((a = localStorage.getItem("siteContent")) ==
                              null
                                ? void 0
                                : a.length) || 0) +
                                (((l =
                                  localStorage.getItem("formSubmissions")) ==
                                null
                                  ? void 0
                                  : l.length) || 0) +
                                (((o =
                                  localStorage.getItem("sectionVisibility")) ==
                                null
                                  ? void 0
                                  : o.length) || 0),
                            ) / 1024,
                            " KB",
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        e.jsx("span", {
                          className: "text-gray-600",
                          children: "Заявок в базе:",
                        }),
                        e.jsx("span", {
                          className: "font-medium",
                          children: JSON.parse(
                            localStorage.getItem("formSubmissions") || "[]",
                          ).length,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Yt({ onClose: t }) {
  const [s, i] = m.useState("dashboard");
  return e.jsx("div", {
    className: "fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm flex",
    children: e.jsxs("div", {
      className:
        "bg-white w-full max-w-7xl mx-auto my-4 rounded-lg shadow-2xl flex flex-col overflow-hidden",
      children: [
        e.jsxs("div", {
          className:
            "bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 flex items-center justify-between",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsx(V, { size: 28 }),
                e.jsx("h1", {
                  className: "text-2xl font-bold",
                  children: "Админ-панель",
                }),
              ],
            }),
            e.jsx(x, {
              variant: "ghost",
              size: "sm",
              onClick: t,
              className: "text-white hover:bg-white/20",
              children: e.jsx(ee, { size: 20 }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex flex-1 overflow-hidden",
          children: [
            e.jsxs("div", {
              className:
                "w-64 bg-gray-50 border-r border-gray-200 p-4 flex flex-col",
              children: [
                e.jsxs("nav", {
                  className: "space-y-2 flex-1",
                  children: [
                    e.jsxs(x, {
                      variant: s === "dashboard" ? "default" : "ghost",
                      className: "w-full justify-start",
                      onClick: () => i("dashboard"),
                      children: [
                        e.jsx(V, { className: "mr-2", size: 20 }),
                        "Дашборд",
                      ],
                    }),
                    e.jsxs(x, {
                      variant: s === "content" ? "default" : "ghost",
                      className: "w-full justify-start",
                      onClick: () => i("content"),
                      children: [
                        e.jsx(M, { className: "mr-2", size: 20 }),
                        "Редактирование контента",
                      ],
                    }),
                    e.jsxs(x, {
                      variant: s === "forms" ? "default" : "ghost",
                      className: "w-full justify-start",
                      onClick: () => i("forms"),
                      children: [
                        e.jsx(G, { className: "mr-2", size: 20 }),
                        "Заявки (",
                        ts(),
                        ")",
                      ],
                    }),
                    e.jsxs(x, {
                      variant: s === "visibility" ? "default" : "ghost",
                      className: "w-full justify-start",
                      onClick: () => i("visibility"),
                      children: [
                        e.jsx(F, { className: "mr-2", size: 20 }),
                        "Видимость секций",
                      ],
                    }),
                    e.jsxs(x, {
                      variant: s === "settings" ? "default" : "ghost",
                      className: "w-full justify-start",
                      onClick: () => i("settings"),
                      children: [
                        e.jsx(le, { className: "mr-2", size: 20 }),
                        "Настройки",
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "pt-4 border-t border-gray-200",
                  children: e.jsxs(x, {
                    variant: "outline",
                    className: "w-full",
                    onClick: () => {
                      (window.location.href = "#home"), t();
                    },
                    children: [
                      e.jsx(st, { className: "mr-2", size: 20 }),
                      "Вернуться на сайт",
                    ],
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex-1 overflow-y-auto p-6",
              children: [
                s === "dashboard" && e.jsx(es, {}),
                s === "content" && e.jsx(Jt, {}),
                s === "forms" && e.jsx(Xt, {}),
                s === "visibility" && e.jsx($t, {}),
                s === "settings" && e.jsx(Qt, {}),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function es() {
  const [t, s] = m.useState({
    formSubmissions: 0,
    visibleSections: 0,
    totalSections: 9,
  });
  return (
    m.useEffect(() => {
      const i = JSON.parse(localStorage.getItem("formSubmissions") || "[]"),
        n = JSON.parse(localStorage.getItem("sectionVisibility") || "{}"),
        c = Object.values(n).filter((r) => r !== !1).length;
      s({
        formSubmissions: i.length,
        visibleSections: c || t.totalSections,
        totalSections: t.totalSections,
      });
    }, []),
    e.jsxs("div", {
      children: [
        e.jsx("h2", {
          className: "text-3xl font-bold mb-6",
          children: "Дашборд",
        }),
        e.jsxs("div", {
          className: "grid md:grid-cols-3 gap-6 mb-8",
          children: [
            e.jsxs("div", {
              className: "bg-blue-50 p-6 rounded-lg border border-blue-200",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [
                    e.jsx("h3", {
                      className: "text-gray-600",
                      children: "Заявки",
                    }),
                    e.jsx(G, { className: "text-blue-600", size: 24 }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-3xl font-bold text-blue-600",
                  children: t.formSubmissions,
                }),
                e.jsx("p", {
                  className: "text-sm text-gray-500 mt-1",
                  children: "Всего заявок",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "bg-green-50 p-6 rounded-lg border border-green-200",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [
                    e.jsx("h3", {
                      className: "text-gray-600",
                      children: "Видимые секции",
                    }),
                    e.jsx(F, { className: "text-green-600", size: 24 }),
                  ],
                }),
                e.jsxs("p", {
                  className: "text-3xl font-bold text-green-600",
                  children: [t.visibleSections, "/", t.totalSections],
                }),
                e.jsx("p", {
                  className: "text-sm text-gray-500 mt-1",
                  children: "Активных секций",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "bg-purple-50 p-6 rounded-lg border border-purple-200",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [
                    e.jsx("h3", {
                      className: "text-gray-600",
                      children: "Последнее обновление",
                    }),
                    e.jsx(le, { className: "text-purple-600", size: 24 }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-lg font-bold text-purple-600",
                  children: new Date().toLocaleDateString("ru-RU"),
                }),
                e.jsx("p", {
                  className: "text-sm text-gray-500 mt-1",
                  children: "Сегодня",
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "bg-white border border-gray-200 rounded-lg p-6",
          children: [
            e.jsx("h3", {
              className: "text-xl font-semibold mb-4",
              children: "Быстрые действия",
            }),
            e.jsxs("div", {
              className: "grid md:grid-cols-2 gap-4",
              children: [
                e.jsx(x, {
                  onClick: () => window.location.reload(),
                  className: "w-full",
                  children: "Обновить страницу",
                }),
                e.jsx(x, {
                  variant: "outline",
                  onClick: () => {
                    confirm("Очистить все данные из локального хранилища?") &&
                      (localStorage.clear(), window.location.reload());
                  },
                  className: "w-full",
                  children: "Очистить кеш",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function ts() {
  try {
    return JSON.parse(localStorage.getItem("formSubmissions") || "[]").length;
  } catch {
    return 0;
  }
}
function ss() {
  return kt(), zt(), null;
}
function as() {
  const { trackPhone: t } = D();
  return e.jsx("a", {
    href: "tel:+998916767567",
    className:
      "fixed bottom-6 right-6 md:hidden z-50 flex items-center justify-center w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl transition-all hover:scale-110 animate-pulse",
    "aria-label": "Позвонить +998 91 676-75-67",
    onClick: () => t("+998916767567"),
    children: e.jsx(E, { size: 28 }),
  });
}
function is() {
  const [t, s] = m.useState(!1),
    [i, n] = m.useState({}),
    c = () => {
      try {
        const a = localStorage.getItem("sectionVisibility");
        a && n(JSON.parse(a));
      } catch (a) {
        console.error("Error loading section visibility:", a);
      }
    };
  m.useEffect(() => {
    c();
    const a = (o) => {
        o.key === "sectionVisibility" && c();
      },
      l = () => {
        c();
      };
    return (
      window.addEventListener("storage", a),
      window.addEventListener("sectionVisibilityChanged", l),
      () => {
        window.removeEventListener("storage", a),
          window.removeEventListener("sectionVisibilityChanged", l);
      }
    );
  }, []),
    m.useEffect(() => {
      const a = (l) => {
        l.ctrlKey && l.shiftKey && l.key === "A" && (l.preventDefault(), s(!0)),
          l.key === "Escape" && t && s(!1);
      };
      return (
        window.addEventListener("keydown", a),
        () => window.removeEventListener("keydown", a)
      );
    }, [t]);
  const r = (a, l = !0) => (i[a] !== void 0 ? i[a] : l);
  return e.jsxs(ot, {
    children: [
      e.jsx(ct, {}),
      e.jsx(ss, {}),
      e.jsxs("div", {
        className: "min-h-screen bg-white relative",
        children: [
          t &&
            e.jsx(Yt, {
              onClose: () => {
                s(!1), c();
              },
            }),
          e.jsx(St, {}),
          e.jsxs("main", {
            children: [
              r("hero") && e.jsx(qt, {}),
              r("gmpSolution") && e.jsx(Pt, {}),
              r("validation") && e.jsx(It, {}),
              r("howItWorks") && e.jsx(Et, {}),
              r("benefits") && e.jsx(Lt, {}),
              r("equipment") && e.jsx(Dt, {}),
              r("webApp") && e.jsx(Mt, {}),
              r("cases") && e.jsx(Gt, {}),
              r("certifications") && e.jsx(Ft, {}),
              r("services") && e.jsx(_t, {}),
              r("contacts") && e.jsx(Wt, {}),
            ],
          }),
          e.jsx(Ht, {}),
          e.jsx(as, {}),
        ],
      }),
    ],
  });
}
ht();
xt();
at.createRoot(document.getElementById("root")).render(
  e.jsx(m.StrictMode, { children: e.jsx(is, {}) }),
);
