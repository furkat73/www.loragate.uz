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
  const { t } = useLanguage()
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
                <p className="mb-6 text-gray-600">{t(`cases.${key}.description`)}</p>
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
              </div>
            </div>
            </Reveal>
          ))}
        </div>
  )
}
