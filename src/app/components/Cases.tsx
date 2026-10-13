import {
  CheckCircle2,
  Leaf,
  Pill,
  Snowflake,
  Truck,
  Utensils,
  Warehouse,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { Link } from '@/lib/router'

const CASE_ROUTES: Record<string, string | undefined> = {
  pharma: '/pharma',
  medicine: '/pharmacy',
  foodWarehouse: '/food',
  logistics: '/logistics',
}
import { Reveal } from '@/components/ui/Reveal'

type Lang = 'ru' | 'uz' | 'en'

const CASE_BLURBS: Record<string, Record<Lang, string>> = {
  pharma: {
    ru: 'Контроль температуры и влажности по требованиям GMP/GDP. Партии под защитой, отчёты для аудита — за минуты.',
    uz: 'GMP/GDP talablariga muvofiq harorat va namlik nazorati. Partiyalar himoyada, audit uchun hisobotlar — daqiqalarda.',
    en: 'Temperature and humidity control per GMP/GDP. Batches protected, audit reports in minutes.',
  },
  logistics: {
    ru: 'Стабильный мониторинг температурных режимов на всех этапах логистики. Слепых зон в пути больше нет.',
    uz: 'Logistikaning barcha bosqichlarida harorat rejimlarining barqaror monitoringi. Yo‘lda ko‘r joylar endi yo‘q.',
    en: 'Stable temperature monitoring across every logistics stage. No more blind spots en route.',
  },
  medicine: {
    ru: 'Надёжный контроль условий хранения медицинских препаратов и вакцин. Без бумажных журналов и «забыли записать».',
    uz: 'Tibbiy preparatlar va vaksinalarni saqlash sharoitlarini ishonchli nazorat qilish. Qog‘oz jurnallar va «yozishni unutdik»siz.',
    en: 'Reliable storage control for medicines and vaccines. No paper logs or “forgot to write it down”.',
  },
  foodWarehouse: {
    ru: 'Контроль температуры и влажности для сохранения качества и безопасности продуктов.',
    uz: 'Mahsulotlar sifati va xavfsizligini saqlash uchun harorat va namlik nazorati.',
    en: 'Temperature and humidity control preserving food quality and safety.',
  },
  freezer: {
    ru: 'Непрерывный мониторинг температуры в морозильных камерах для сохранения качества замороженных продуктов.',
    uz: 'Muzlatilgan mahsulotlar sifatini saqlash uchun muzlatgichlarda haroratni uzluksiz monitoring qilish.',
    en: 'Continuous freezer monitoring preserving frozen product quality.',
  },
  greenhouse: {
    ru: 'Контроль микроклимата в теплицах для оптимального роста растений и максимальной урожайности.',
    uz: 'O‘simliklarning optimal o‘sishi va maksimal hosildorligi uchun issiqxonalarda mikroiqlim nazorati.',
    en: 'Greenhouse microclimate control for optimal growth and maximum yield.',
  },
}

const CASE_STORIES: Record<string, Record<Lang, string>> = {
  pharma: {
    ru: 'Раньше отклонения находили постфактум. Теперь система предупреждает сразу — и есть полная история для проверяющих.',
    uz: 'Ilgari og‘ishlar keyin aniqlanardi. Endi tizim darhol ogohlantiradi — tekshiruvchilar uchun to‘liq tarix bor.',
    en: 'Deviations used to be found after the fact. Now the system warns instantly — with full history for inspectors.',
  },
  logistics: {
    ru: 'Груз едет — и вы видите, что с ним происходит. Не на выгрузке, а в реальном времени.',
    uz: 'Yuk ketyapti — va u bilan nima bo‘layotganini ko‘rasiz. Tushirishda emas, real vaqtda.',
    en: 'The cargo is moving — and you see what happens to it. Not at unloading, but in real time.',
  },
  medicine: {
    ru: 'Вместо ручной записи с гигрометра — автоматическая фиксация. Ничего не забывается и не теряется.',
    uz: 'Gigrometrdan qo‘lda yozish o‘rniga — avtomatik qayd etish. Hech narsa unutilmaydi va yo‘qolmaydi.',
    en: 'Instead of manual hygrometer readings — automatic logging. Nothing forgotten, nothing lost.',
  },
  foodWarehouse: {
    ru: 'Тысячи килограммов продукции больше не оказываются под риском из-за позднего обнаружения отклонения.',
    uz: 'Minglab kilo mahsulot kech aniqlangan og‘ish tufayli endi xavf ostida qolmaydi.',
    en: 'Thousands of kilos of product are no longer at risk from late-detected deviations.',
  },
  freezer: {
    ru: 'Разморозка больше не «обнаруживается утром». Система сообщает сразу.',
    uz: 'Erish endi «ertalab aniqlanmaydi». Tizim darhol xabar beradi.',
    en: 'Thawing is no longer “discovered in the morning”. The system reports immediately.',
  },
  greenhouse: {
    ru: 'Микроклимат под контролем — растения получают стабильные условия, а не сюрпризы.',
    uz: 'Mikroiqlim nazoratda — o‘simliklar barqaror sharoit oladi, kutilmagan holatlar emas.',
    en: 'Microclimate under control — plants get stable conditions, not surprises.',
  },
}

export const CASE_ITEMS = [
  {
    icon: Warehouse,
    key: 'pharma',
    image: '/images/case-pharma.jpg',
    benefits: ['benefit1', 'benefit2', 'benefit3', 'benefit4'] as const,
  },
  {
    icon: Truck,
    key: 'logistics',
    image: '/images/truck.png',
    benefits: ['benefit1', 'benefit2', 'benefit3'] as const,
  },
  {
    icon: Pill,
    key: 'medicine',
    image: '/images/pharmacy.png',
    benefits: ['benefit1', 'benefit2', 'benefit3', 'benefit4'] as const,
  },
  {
    icon: Utensils,
    key: 'foodWarehouse',
    image: '/images/food.png',
    benefits: ['benefit1', 'benefit2', 'benefit3', 'benefit4'] as const,
  },
  {
    icon: Snowflake,
    key: 'freezer',
    image: '/images/freez.jpg',
    benefits: ['benefit1', 'benefit2', 'benefit3', 'benefit4'] as const,
  },
  {
    icon: Leaf,
    key: 'greenhouse',
    image: '/images/heatre.jpg',
    benefits: ['benefit1', 'benefit2', 'benefit3', 'benefit4'] as const,
  },
] as const

export function Cases() {
  const { t } = useLanguage()
  const items = CASE_ITEMS

  return (
    <section id="cases" className="bg-gradient-to-br from-indigo-50 to-gray-50 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4">{t('cases.title')}</h2>
          <p className="mx-auto max-w-2xl text-gray-600">{t('cases.subtitle')}</p>
        </div>
        <CaseGrid items={items} />
      </div>
    </section>
  )
}

/** Сетка карточек кейсов без заголовка — для встройки в другие блоки */
export function CaseGrid({ items }: { items: typeof CASE_ITEMS }) {
  const { language, t } = useLanguage()
  const lang = (language === 'uz' || language === 'en' ? language : 'ru') as Lang
  return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, key, image, benefits }, i) => (
            <Reveal key={key} delay={i * 90} className="h-full">
            <div
              className="h-full overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-2xl"
            >
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  src={image}
                  alt={t(`cases.${key}.title`)}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3>{t(`cases.${key}.title`)}</h3>
                </div>
                <p className="mb-6 text-gray-600">{CASE_BLURBS[key]?.[lang] ?? t(`cases.${key}.description`)}</p>
                {CASE_ROUTES[key] && (
                  <Link
                    to={CASE_ROUTES[key] as string}
                    className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500"
                  >
                    {t('common.readMore')} →
                  </Link>
                )}
                <div className="space-y-3">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 flex-shrink-0 text-green-600" size={20} />
                      <p className="text-sm">{t(`cases.${key}.${b}`)}</p>
                    </div>
                  ))}
                </div>
                {CASE_STORIES[key]?.[lang] && (
                  <blockquote className="mt-6 border-l-2 border-emerald-500 pl-4 text-sm leading-relaxed text-gray-500 italic">
                    {CASE_STORIES[key][lang]}
                  </blockquote>
                )}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
  )
}
