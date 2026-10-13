import { useState } from 'react'
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Bell,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  FileSpreadsheet,
  LayoutGrid,
  Play,
  Zap,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Link } from '@/lib/router'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { Reveal } from '@/components/ui/Reveal'
import { CtaBand } from '../components/CtaBand'
import {
  foodAreas,
  foodBenefits,
  foodCta,
  foodDocs,
  foodEnergy,
  foodFaq,
  foodHero,
  foodNumbers,
  foodPains,
  foodSolutions,
} from '../foodContent'

export function FoodPage() {
  const { t, language } = useLanguage()
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const faqItems = foodFaq.items[language] ?? foodFaq.items.ru

  return (
    <>
      {/* 1. HERO */}
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
            <span className="text-gray-500">
              {language === 'ru' ? 'Решения' : language === 'en' ? 'Solutions' : 'Yechimlar'}
            </span>
            <ChevronRight size={14} className="text-gray-600" />
            <span className="text-gray-300">{t('cases.foodWarehouse.title')}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
                {t('cases.foodWarehouse.title')}
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0">
                {foodHero.subtitle[language]}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/quiz"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-950/40 transition-all hover:-translate-y-0.5 hover:bg-emerald-400 sm:text-base"
                >
                  {foodHero.primaryBtn[language]}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/platform"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 sm:text-base"
                >
                  <Play size={18} />
                  {foodHero.secondaryBtn[language]}
                </Link>
              </div>
              <ul className="mx-auto mt-8 grid max-w-xl gap-4 text-left sm:grid-cols-3 lg:mx-0">
                {[
                  { icon: LayoutGrid, text: foodHero.perks[0][language] },
                  { icon: Bell, text: foodHero.perks[1][language] },
                  { icon: FileSpreadsheet, text: foodHero.perks[2][language] },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-2.5">
                    <Icon size={22} className="mt-0.5 flex-shrink-0 text-blue-400" />
                    <span className="text-xs leading-snug text-gray-300 sm:text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <ImageWithFallback
                  src="/images/food.png"
                  alt={t('cases.foodWarehouse.title')}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl bg-blue-700/20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Узнаёте свой склад? */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8">{foodPains.title[language]}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {foodPains.items[language].map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="h-full">
                <div className="flex h-full items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                  <AlertTriangle className="mt-0.5 flex-shrink-0 text-red-500" size={24} />
                  <div>
                    <h3 className="mb-1 text-base font-bold text-white">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-400">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Как мы закрываем эти риски */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8">{foodSolutions.title[language]}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {foodSolutions.items[language].map((s, i) => (
              <Reveal key={s.title} delay={i * 70} className="h-full">
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700/20">
                    <CheckCircle2 className="text-blue-400" size={20} />
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold text-white sm:text-base">{s.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Что меняется после внедрения */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mx-auto mb-10 max-w-3xl text-center">{foodBenefits.title[language]}</h2>
          <div className="mx-auto mb-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {foodBenefits.items[language].map((b, i) => (
              <Reveal key={b} delay={Math.min(i, 3) * 70} className="h-full">
                <div className="flex h-full items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 p-4">
                  <Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-500" />
                  <span className="text-sm text-gray-200">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mx-auto mb-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {foodBenefits.results[language].map((r, i) => (
              <Reveal key={r} delay={i * 70} className={i === 3 ? 'sm:col-span-2' : 'h-full'}>
                <div className="flex h-full items-start gap-2.5 rounded-xl border border-emerald-500/25 bg-emerald-950/40 p-4">
                  <Award size={16} className="mt-0.5 flex-shrink-0 text-amber-400" />
                  <span className="text-sm text-gray-200">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-3 sm:gap-6">
            {foodNumbers.map((n) => (
              <div
                key={n.value.ru}
                className="rounded-2xl border border-blue-700/30 bg-blue-700/10 p-4 text-center sm:p-6"
              >
                <div className="text-xl font-bold text-white sm:text-3xl">{n.value[language]}</div>
                <div className="mt-1 text-[11px] text-blue-200 sm:text-sm">{n.label[language]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Большие площади */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <ImageWithFallback
                  src="/images/freez.jpg"
                  alt={foodAreas.title[language]}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>
              <div className="absolute inset-0 -z-10 -translate-x-4 translate-y-4 rounded-2xl bg-blue-700/20 blur-xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-4">{foodAreas.title[language]}</h2>
              <p className="max-w-xl text-base leading-relaxed text-gray-300">
                {foodAreas.text[language]}
              </p>
              <p className="mt-4 max-w-xl border-l-2 border-emerald-500 pl-4 text-base leading-relaxed text-gray-200">
                {foodAreas.extra[language]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Энергия и потери */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-950/60 via-slate-900 to-slate-900 p-8 shadow-2xl sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 left-1/2 h-56 w-[36rem] max-w-none -translate-x-1/2 rounded-full bg-amber-500/15 blur-3xl"
              />
              <div className="relative">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 shadow-lg">
                  <Zap className="text-white" size={28} />
                </div>
                <h2 className="mb-3 text-center text-xl sm:text-2xl">{foodEnergy.title[language]}</h2>
                <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-gray-300 sm:text-base">
                  {foodEnergy.text[language]}
                </p>
                <ul className="mx-auto grid max-w-2xl gap-3 text-left sm:grid-cols-3">
                  {foodEnergy.perks.map((p) => (
                    <li
                      key={p.ru}
                      className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <Check size={14} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-500" />
                      <span className="text-xs font-medium leading-snug text-gray-100 sm:text-sm">
                        {p[language]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Готовность к проверкам */}
      <section className="light-band py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700 shadow-lg">
              <ClipboardCheck className="text-white" size={24} />
            </div>
            <h2 className="mb-3">{foodDocs.title[language]}</h2>
            <p className="mb-8 max-w-2xl leading-relaxed">{foodDocs.text[language]}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {foodDocs.items.map((item, i) => (
                <Reveal key={item.ru} delay={Math.min(i, 3) * 60} className="h-full">
                  <div className="flex h-full items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">{item[language]}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <CtaBand
        title={foodCta.title}
        desc={foodCta.desc}
        cta={foodCta.cta}
        perks={foodCta.perks}
        micro={foodCta.micro}
        badge={foodCta.badge}
      />

      {/* 9. FAQ */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center">
            {language === 'ru' ? 'Частые вопросы' : language === 'en' ? 'Frequently asked questions' : 'Ko‘p so‘raladigan savollar'}
          </h2>
          <div className="mx-auto max-w-3xl space-y-3">
            {faqItems.map((item, i) => {
              const isOpen = faqOpen === i
              return (
                <Reveal key={item.q} delay={Math.min(i, 4) * 60}>
                  <div
                    className={`overflow-hidden rounded-xl border transition-colors ${
                      isOpen ? 'border-indigo-600' : 'border-gray-200'
                    } bg-white shadow-sm`}
                  >
                    <button
                      type="button"
                      onClick={() => setFaqOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-semibold text-gray-900 sm:text-base">{item.q}</span>
                      <ChevronDown
                        size={20}
                        className={`flex-shrink-0 text-blue-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-4 text-sm leading-relaxed text-gray-600 sm:px-5 sm:pb-5">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
