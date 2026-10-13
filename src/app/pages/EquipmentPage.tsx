import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Cloud,
  Crosshair,
  Download,
  Expand,
  HardHat,
  MonitorSmartphone,
  Phone,
  Radio,
  ShieldCheck,
  Star,
  Thermometer,
  Wifi,
  Zap,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Link } from '@/lib/router'
import { SITE } from '@/lib/site'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { Reveal } from '@/components/ui/Reveal'
import {
  equipmentArch,
  equipmentCta,
  equipmentFaq,
  equipmentGateway,
  equipmentHero,
  equipmentPlatform,
  equipmentSensors,
  equipmentUsage,
  equipmentWhy,
} from '../equipmentContent'

const SPECS_PDF = '/images/Technical-Specifications.pdf'

const WHY_ICONS = [Wifi, Zap, Radio, Crosshair, Expand, ShieldCheck]

export function EquipmentPage() {
  const { t, language } = useLanguage()
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const faqItems = equipmentFaq.items[language] ?? equipmentFaq.items.ru

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
            <span className="text-gray-300">{t('equipment.title')}</span>
          </nav>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
              {t('equipment.title')}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
              {equipmentHero.subtitle[language]}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={SPECS_PDF}
                download="LoraGate-Technical-Specifications.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-blue-800 sm:text-base"
              >
                <Download size={18} />
                {equipmentHero.specsBtn[language]}
              </a>
              <a
                href={`tel:${SITE.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 sm:text-base"
              >
                <Phone size={18} />
                {equipmentHero.consultBtn[language]}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Архитектура системы */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-3 text-center">{equipmentArch.title[language]}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-gray-400 sm:text-base">
            {equipmentArch.text[language]}
          </p>
          <div className="relative mx-auto max-w-5xl">
            <div
              aria-hidden="true"
              className="absolute top-6 right-[16%] left-[16%] hidden h-0.5 bg-gradient-to-r from-transparent via-blue-700/50 to-transparent md:block"
            />
            <div className="grid gap-8 md:grid-cols-3 md:gap-6">
              {equipmentArch.nodes.map((n, i) => (
                <Reveal key={n.name.ru} delay={i * 90}>
                  <div className="relative text-center">
                    <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg shadow-blue-950/50 ring-4 ring-[#0a0f1e]">
                      {i === 0 ? <Thermometer size={22} /> : i === 1 ? <Radio size={22} /> : <Cloud size={22} />}
                    </div>
                    <h3 className="mb-2 text-sm font-bold text-white sm:text-base">{n.name[language]}</h3>
                    {n.lines[language].map((l) => (
                      <p key={l} className="text-xs text-gray-400 sm:text-sm">{l}</p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3 md:grid-cols-3">
            {equipmentArch.bullets[language].map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-500" />
                <span className="text-sm text-gray-200">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Шлюз */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <ImageWithFallback
                  src="/images/gateway.jpg"
                  alt={equipmentGateway.title[language]}
                  className="h-72 w-full bg-slate-950 object-contain p-4 sm:h-96"
                />
              </div>
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl bg-blue-700/20 blur-xl" />
            </div>
            <div>
              <h2 className="mb-2">{equipmentGateway.title[language]}</h2>
              <p className="mb-6 text-sm font-medium text-blue-300 sm:text-base">
                {equipmentGateway.subtitle[language]}
              </p>
              <ul className="mb-6 flex flex-col gap-2.5">
                {equipmentGateway.specs[language].map((s) => (
                  <li key={s} className="flex items-start gap-2.5">
                    <Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-gray-200 sm:text-base">{s}</span>
                  </li>
                ))}
              </ul>
              <ul className="mb-7 flex flex-col gap-2">
                {equipmentGateway.advantages[language].map((a) => (
                  <li key={a} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                    <span className="text-sm text-gray-400">{a}</span>
                  </li>
                ))}
              </ul>
              <a
                href={SPECS_PDF}
                download="LoraGate-Technical-Specifications.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/50 px-5 py-2.5 text-sm font-bold text-blue-300 transition-all hover:bg-blue-700 hover:text-white"
              >
                <Download size={16} />
                {equipmentGateway.cta[language]}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Датчики */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="mb-2">{equipmentSensors.title[language]}</h2>
              <p className="mb-6 text-sm font-medium text-blue-300 sm:text-base">
                {equipmentSensors.subtitle[language]}
              </p>
              <ul className="mb-6 flex flex-col gap-2.5">
                {equipmentSensors.specs[language].map((s) => (
                  <li key={s} className="flex items-start gap-2.5">
                    <Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-gray-200 sm:text-base">{s}</span>
                  </li>
                ))}
              </ul>
              <ul className="mb-7 flex flex-col gap-2">
                {equipmentSensors.advantages[language].map((a) => (
                  <li key={a} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                    <span className="text-sm text-gray-400">{a}</span>
                  </li>
                ))}
              </ul>
              <a
                href={SPECS_PDF}
                download="LoraGate-Technical-Specifications.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/50 px-5 py-2.5 text-sm font-bold text-blue-300 transition-all hover:bg-blue-700 hover:text-white"
              >
                <Download size={16} />
                {equipmentSensors.cta[language]}
              </a>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <ImageWithFallback
                  src="/images/sensor.png"
                  alt={equipmentSensors.title[language]}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>
              <div className="absolute inset-0 -z-10 -translate-x-4 translate-y-4 rounded-2xl bg-blue-700/20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Платформа */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <ImageWithFallback
                  src="/images/architecture.jpg"
                  alt={equipmentPlatform.title[language]}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>
              <div className="absolute inset-0 -z-10 -translate-x-4 translate-y-4 rounded-2xl bg-blue-700/20 blur-xl" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 shadow-lg">
                <MonitorSmartphone className="text-white" size={24} />
              </div>
              <h2 className="mb-3">{equipmentPlatform.title[language]}</h2>
              <p className="mb-6 max-w-xl text-base leading-relaxed text-gray-300">
                {equipmentPlatform.lead[language]}
              </p>
              <ul className="flex flex-col gap-2.5">
                {equipmentPlatform.items[language].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-gray-200 sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Преимущества */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center">{equipmentWhy.title[language]}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentWhy.items[language].map((w, i) => {
              const Icon = WHY_ICONS[i]
              return (
                <Reveal key={w.h} delay={(i % 3) * 70} className="h-full">
                  <div className="h-full rounded-xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700/20">
                      <Icon className="text-blue-400" size={20} />
                    </div>
                    <h3 className="mb-1.5 text-sm font-bold text-white sm:text-base">{w.h}</h3>
                    <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">{w.p}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. Где применяется */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center">{equipmentUsage.title[language]}</h2>
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
            {equipmentUsage.items.map((u) => (
              <Link
                key={u.to}
                to={u.to}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 transition-all hover:-translate-y-0.5 hover:border-blue-500/60 hover:text-white"
              >
                {u.label[language]}
                <ArrowRight size={15} className="text-blue-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="relative overflow-hidden py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 p-8 shadow-2xl sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 py-1.5 pr-4 pl-1.5 backdrop-blur-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                  <HardHat size={16} className="text-white" />
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white sm:text-sm">
                  <Star size={13} className="fill-amber-400 text-amber-400" />
                  {language === 'ru'
                    ? 'Более 80 аудитов уже проведено'
                    : language === 'en'
                      ? '80+ audits already conducted'
                      : '80 dan ortiq audit o‘tkazilgan'}
                </span>
              </div>
              <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                {equipmentCta.title[language]}
              </h2>
              <p className="mx-auto mb-7 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
                {equipmentCta.desc[language]}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={SPECS_PDF}
                  download="LoraGate-Technical-Specifications.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f8fafc] px-6 py-4 text-sm font-bold whitespace-nowrap text-slate-900 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-[#e2e8f0] sm:text-base"
                >
                  <Download size={18} />
                  {equipmentCta.specsBtn[language]}
                </a>
                <Link
                  to="/quiz"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-sm font-bold whitespace-nowrap text-white shadow-xl shadow-emerald-950/40 transition-all hover:-translate-y-0.5 hover:bg-emerald-400 sm:text-base"
                >
                  {equipmentCta.auditBtn[language]}
                  <ArrowRight size={18} />
                </Link>
              </div>
              <a
                href={`tel:${SITE.phones[0]}`}
                className="mt-5 inline-block text-sm font-bold text-white transition-colors hover:text-blue-200 sm:text-base"
              >
                +998 (91) 676-75-67
              </a>
            </div>
          </div>
        </div>
      </section>

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
