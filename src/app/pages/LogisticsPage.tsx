import { useState } from 'react'
import {
  AlertTriangle,
  ArrowLeftRight,
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  FileCheck,
  FileText,
  MapPin,
  Package,
  Play,
  Scale,
  Truck,
  Warehouse,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Link } from '@/lib/router'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { Reveal } from '@/components/ui/Reveal'
import { CtaBand } from '../components/CtaBand'
import {
  logisticsBenefits,
  logisticsChain,
  logisticsCta,
  logisticsEvidence,
  logisticsFaq,
  logisticsGdp,
  logisticsHero,
  logisticsNumbers,
  logisticsPains,
  logisticsResults,
  logisticsSolutions,
  logisticsTrip,
} from '../logisticsContent'

const CHAIN_ICONS: Record<string, typeof Warehouse> = {
  warehouse: Warehouse,
  loading: Package,
  reefer: Truck,
  transfer: ArrowLeftRight,
}

const TRIP_TRACK = '0,26 12,25 24,25 36,24 48,24 60,23 72,23 84,18 96,14 108,16 120,16'

export function LogisticsPage() {
  const { t, language } = useLanguage()
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const faqItems = logisticsFaq.items[language] ?? logisticsFaq.items.ru

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
            <span className="text-gray-300">{t('cases.logistics.title')}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
                {t('cases.logistics.title')}
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0">
                {logisticsHero.subtitle[language]}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/quiz"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-950/40 transition-all hover:-translate-y-0.5 hover:bg-emerald-400 sm:text-base"
                >
                  {logisticsHero.primaryBtn[language]}
                  <ArrowRight size={18} />
                </Link>
                <button
                  type="button"
                  onClick={() => document.getElementById('trip-demo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 sm:text-base"
                >
                  <Play size={18} />
                  {logisticsHero.secondaryBtn[language]}
                </button>
              </div>
              <ul className="mx-auto mt-8 grid max-w-xl gap-4 text-left sm:grid-cols-3 lg:mx-0">
                {[
                  { icon: Truck, text: logisticsHero.perks[0][language] },
                  { icon: MapPin, text: logisticsHero.perks[1][language] },
                  { icon: FileText, text: logisticsHero.perks[2][language] },
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
                  src="/images/truck.png"
                  alt={t('cases.logistics.title')}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl bg-blue-700/20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Узнаёте свою логистику? */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8">{logisticsPains.title[language]}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {logisticsPains.items[language].map((p, i) => (
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

      {/* 3. Как мы убираем слепые зоны */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8">{logisticsSolutions.title[language]}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {logisticsSolutions.items[language].map((s, i) => (
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
          <h2 className="mx-auto mb-10 max-w-3xl text-center">{logisticsBenefits.title[language]}</h2>
          <div className="mx-auto mb-10 grid max-w-4xl gap-3 sm:grid-cols-3">
            {logisticsBenefits.items[language].map((b, i) => (
              <Reveal key={b} delay={Math.min(i, 2) * 70} className="h-full">
                <div className="flex h-full items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 p-4">
                  <Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-500" />
                  <span className="text-sm text-gray-200">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mx-auto mb-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {logisticsBenefits.results[language].map((r, i) => (
              <Reveal key={r} delay={i * 70} className={i === 3 ? 'sm:col-span-2' : 'h-full'}>
                <div className="flex h-full items-start gap-2.5 rounded-xl border border-emerald-500/25 bg-emerald-950/40 p-4">
                  <Award size={16} className="mt-0.5 flex-shrink-0 text-amber-400" />
                  <span className="text-sm text-gray-200">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mx-auto mb-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {logisticsResults[language].map((r, i) => (
              <Reveal key={r} delay={i * 70} className={i === 3 ? 'sm:col-span-2' : 'h-full'}>
                <div className="flex h-full items-start gap-2.5 rounded-xl border border-emerald-500/25 bg-emerald-950/40 p-4">
                  <Award size={16} className="mt-0.5 flex-shrink-0 text-amber-400" />
                  <span className="text-sm text-gray-200">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-3 sm:gap-6">
            {logisticsNumbers.map((n) => (
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

      {/* 5. Вся холодовая цепь в одном окне */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-3 text-center">{logisticsChain.title[language]}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-gray-400 sm:text-base">
            {logisticsChain.text[language]}
          </p>
          <div className="relative mx-auto max-w-5xl">
            <div
              aria-hidden="true"
              className="absolute top-6 right-[10%] left-[10%] hidden h-0.5 bg-gradient-to-r from-transparent via-blue-700/50 to-transparent lg:block"
            />
            <div className="grid gap-8 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
              {logisticsChain.steps.map((s, i) => {
                const Icon = CHAIN_ICONS[s.icon]
                return (
                  <Reveal key={s.icon + i} delay={i * 90}>
                    <div className="relative text-center">
                      <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg shadow-blue-950/50 ring-4 ring-[#0a0f1e]">
                        <Icon size={22} />
                      </div>
                      <p className="mx-auto max-w-[180px] text-xs font-semibold text-gray-200 sm:text-sm">
                        {s.label[language]}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Доказательная база */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700 shadow-lg">
                <Scale className="text-white" size={24} />
              </div>
              <h2 className="mb-3">{logisticsEvidence.title[language]}</h2>
              <p className="max-w-xl text-base leading-relaxed text-gray-300">
                {logisticsEvidence.text[language]}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {logisticsEvidence.items.map((item, i) => (
                <Reveal key={item.ru} delay={i * 70} className="h-full">
                  <div className="flex h-full items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
                    <Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-500" />
                    <span className="text-sm font-medium text-gray-100 sm:text-base">{item[language]}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. GDP и фармперевозки */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-blue-500/25 bg-gradient-to-br from-blue-950/80 via-slate-900 to-slate-900 p-8 shadow-2xl sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 left-1/2 h-56 w-[36rem] max-w-none -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl"
              />
              <div className="relative text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg">
                  <FileCheck className="text-white" size={28} />
                </div>
                <h2 className="mb-3 text-xl sm:text-2xl">{logisticsGdp.title[language]}</h2>
                <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
                  {logisticsGdp.text[language]}
                </p>
                <div className="mx-auto mb-7 flex max-w-2xl flex-col gap-2.5 text-left sm:flex-row sm:flex-wrap sm:justify-center">
                  {logisticsGdp.points[language].map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-gray-100 sm:text-sm"
                    >
                      <Check size={14} strokeWidth={3} className="flex-shrink-0 text-green-500" />
                      {p}
                    </span>
                  ))}
                </div>
                <Link
                  to="/contacts"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-800 sm:text-base"
                >
                  {logisticsGdp.cta[language]}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Рейс под контролем — мокап дашборда */}
      <section id="trip-demo" className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-3 text-center">{logisticsTrip.title[language]}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-gray-400 sm:text-base">
            {logisticsTrip.text[language]}
          </p>
          <Reveal>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4 py-3 sm:px-6">
                <span className="text-sm font-bold text-white">{logisticsTrip.tripNo[language]}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  {logisticsTrip.status[language]}
                </span>
              </div>
              <div className="grid gap-6 p-4 sm:grid-cols-[1fr_1fr] sm:p-6">
                <div>
                  <div className="text-4xl font-bold tabular-nums text-white">
                    +4,8<span className="ml-1 text-base font-medium text-gray-400">°C</span>
                  </div>
                  <svg viewBox="0 0 120 32" className="mt-3 h-12 w-full" aria-hidden="true">
                    <polyline
                      points={TRIP_TRACK}
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="mt-1 flex justify-between text-[10px] text-gray-500">
                    <span>09:00</span>
                    <span>13:00</span>
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-xs font-bold tracking-widest text-gray-400 uppercase">
                    {logisticsTrip.eventsTitle[language]}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {logisticsTrip.events[language].map((e) => (
                      <li key={e.time} className="flex items-start gap-2.5 text-left">
                        <span className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[11px] text-gray-300">
                          {e.time}
                        </span>
                        <span className="text-xs leading-snug text-gray-300 sm:text-sm">{e.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. CTA */}
      <CtaBand
        title={logisticsCta.title}
        desc={logisticsCta.desc}
        cta={logisticsCta.cta}
        perks={logisticsCta.perks}
        micro={logisticsCta.micro}
        badge={logisticsCta.badge}
      />

      {/* 10. FAQ */}
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
