import { ArrowRight, Check, ChevronRight, Play } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Link } from '@/lib/router'
import { Reveal } from '@/components/ui/Reveal'
import { CaseGrid, CASE_ITEMS } from '../components/Cases'
import { CtaBand } from '../components/CtaBand'

const OUTCOMES = {
  ru: [
    'Появляется полная прозрачность по температуре и влажности',
    'Отклонения видны сразу, а не после проверки',
    'Отчёты для инспекций формируются за минуты',
    'Персонал перестаёт тратить время на ручные журналы',
    'Риски порчи и претензий снижаются',
  ],
  uz: [
    'Harorat va namlik bo‘yicha to‘liq shaffoflik paydo bo‘ladi',
    'Og‘ishlar tekshiruvdan keyin emas, darhol ko‘rinadi',
    'Inspeksiyalar uchun hisobotlar daqiqalarda shakllanadi',
    'Xodimlar qo‘l jurnallariga vaqt sarflashni to‘xtatadi',
    'Buzilish va da’vo xavflari kamayadi',
  ],
  en: [
    'Full transparency on temperature and humidity appears',
    'Deviations are visible at once, not after an inspection',
    'Inspection reports generate in minutes',
    'Staff stop wasting time on manual logs',
    'Spoilage and claim risks go down',
  ],
} as Record<string, string[]>

export function CasesPage() {
  const { t, language } = useLanguage()
  const lang = language === 'uz' || language === 'en' ? language : 'ru'
  const subtitle = {
    ru: 'Реальные внедрения Lora Gate в фармацевтике, логистике, аптеках, пищевых складах и других отраслях. Посмотрите, как система закрывает конкретные боли.',
    uz: 'Lora Gate’ning farmatsevtika, logistika, dorixonalar, oziq-ovqat omborlari va boshqa sohalardagi real joriy qilishlari. Tizim aniq og‘riqlarni qanday yopishini ko‘ring.',
    en: 'Real Lora Gate deployments across pharma, logistics, pharmacies, food warehouses and more. See how the system closes specific pains.',
  }[lang]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-24 sm:pb-14 sm:pt-28 md:pb-16 md:pt-32">
        <div className="container mx-auto max-w-7xl px-4">
          <nav
            aria-label="breadcrumb"
            className="mb-6 flex items-center justify-center gap-1.5 text-xs text-gray-500 sm:text-sm"
          >
            <Link to="/" className="transition-colors hover:text-white">
              {language === 'ru' ? 'Главная' : language === 'en' ? 'Home' : 'Bosh sahifa'}
            </Link>
            <ChevronRight size={14} className="text-gray-600" />
            <span className="text-gray-300">{t('cases.title')}</span>
          </nav>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
              {t('cases.title')}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
              {subtitle}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => document.getElementById('case-grid')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 sm:text-base"
              >
                <Play size={18} />
                {language === 'ru' ? 'Смотреть все кейсы' : language === 'en' ? 'View all cases' : 'Barcha keyslarni ko‘rish'}
              </button>
              <Link
                to="/quiz"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-950/40 transition-all hover:-translate-y-0.5 hover:bg-emerald-400 sm:text-base"
              >
                {language === 'ru' ? 'Получить бесплатный аудит' : language === 'en' ? 'Get a free audit' : 'Bepul audit olish'}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Сетка кейсов */}
      <section id="case-grid" className="scroll-mt-24 py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <CaseGrid items={CASE_ITEMS} />
        </div>
      </section>

      {/* Что меняется после внедрения */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center">
            {language === 'ru'
              ? 'Что меняется после внедрения'
              : language === 'en'
                ? 'What changes after deployment'
                : 'Joriy qilishdan keyin nima o‘zgaradi'}
          </h2>
          <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
            {OUTCOMES[lang].map((o, i) => (
              <Reveal key={o} delay={Math.min(i, 4) * 60} className={i === 4 ? 'sm:col-span-2' : 'h-full'}>
                <div className="flex h-full items-start gap-2.5 rounded-xl border border-emerald-500/25 bg-emerald-950/40 p-4">
                  <Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-500" />
                  <span className="text-sm text-gray-200">{o}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={{
          ru: 'Хотите такой же результат на своём объекте?',
          uz: 'Obyektingizda shunday natijani xohlaysizmi?',
          en: 'Want the same result at your facility?',
        }}
        desc={{
          ru: 'Инженер приедет, оценит объект и покажет, как система закроет ваши задачи.',
          uz: 'Muhandis keladi, obyektni baholaydi va tizim vazifalaringizni qanday yopishini ko‘rsatadi.',
          en: 'An engineer will visit, assess the facility and show how the system covers your tasks.',
        }}
        cta={{
          ru: 'Получить бесплатный аудит',
          uz: 'Bepul audit olish',
          en: 'Get a free audit',
        }}
      />
    </>
  )
}
