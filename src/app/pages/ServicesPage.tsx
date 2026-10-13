import { useState } from 'react'
import {
  Activity,
  ArrowRight,
  Check,
  ChevronRight,
  Clock,
  Database,
  Download,
  FileCheck,
  GraduationCap,
  Headphones,
  Headset,
  ListChecks,
  Phone,
  Settings,
  ShieldCheck,
  User,
  UserCheck,
  Wrench,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Link } from '@/lib/router'
import { SITE } from '@/lib/site'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { Reveal } from '@/components/ui/Reveal'
import {
  servicesFaq2,
  servicesFinalCta,
  servicesHero,
  servicesList,
  servicesProcess,
  servicesResults,
  servicesSupportStats,
  servicesValidation,
} from '../servicesContent'

const SERVICE_ICONS = [Settings, Headphones, Wrench, GraduationCap, Database, ShieldCheck]
const OUTCOME_ICONS = [Activity, GraduationCap, FileCheck, Clock, User]
const SUPPORT_ICONS = [Clock, UserCheck, ListChecks, Activity]

export function ServicesPage() {
  const { language } = useLanguage()
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const faqItems = servicesFaq2.items[language] ?? servicesFaq2.items.ru

  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden pb-10 pt-24 sm:pb-14 sm:pt-28 md:pb-16 md:pt-32">
        <div className="container mx-auto max-w-7xl px-4">
          <nav
            aria-label="breadcrumb"
            className="mb-6 flex items-center justify-center gap-1.5 text-xs text-gray-500 sm:text-sm lg:justify-start"
          >
            <Link to="/" className="transition-colors hover:text-white">
              {language === 'ru' ? 'Главная' : language === 'en' ? 'Home' : 'Bosh sahifa'}
            </Link>
            <ChevronRight size={14} className="text-gray-600" />
            <span className="text-gray-300">{servicesHero.title[language]}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
                {servicesHero.title[language]}
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0">
                {servicesHero.subtitle[language]}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/quiz"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-950/40 transition-all hover:-translate-y-0.5 hover:bg-emerald-400 sm:text-base"
                >
                  {servicesHero.auditBtn[language]}
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={`tel:${SITE.phones[0]}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 sm:text-base"
                >
                  <Phone size={18} />
                  {servicesHero.discussBtn[language]}
                </a>
              </div>
              <p className="mt-5 inline-flex items-center gap-2 text-xs text-gray-400 sm:text-sm">
                <Check size={14} strokeWidth={3} className="flex-shrink-0 text-green-500" />
                {servicesHero.micro[language]}
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <ImageWithFallback
                  src="/images/services-hero.png"
                  alt={servicesHero.title[language]}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>
              <div className="absolute -bottom-5 left-6 flex items-center gap-2.5 rounded-xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-2xl backdrop-blur-md">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500">
                  <ShieldCheck size={18} className="text-white" />
                </span>
                <span className="text-xs font-bold text-white sm:text-sm">
                  {language === 'ru'
                    ? 'GxP · Валидация включена'
                    : language === 'en'
                      ? 'GxP · Validation included'
                      : 'GxP · Validatsiya kiritilgan'}
                </span>
              </div>
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl bg-emerald-700/20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. После наших услуг у вас будет */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8">{servicesResults.title[language]}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {servicesResults.items[language].map((s, i) => {
              const Icon = OUTCOME_ICONS[i]
              return (
                <Reveal key={s.title} delay={Math.min(i, 4) * 60} className="h-full">
                  <div className="h-full rounded-xl border border-white/10 bg-white/5 p-5">
                    <Icon size={24} className="mb-3 text-green-500" />
                    <h3 className="mb-1.5 text-sm font-bold text-white">{s.title}</h3>
                    <p className="text-xs leading-relaxed text-gray-400">{s.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. От аудита до поддержки */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center">{servicesProcess.title[language]}</h2>
          <div className="relative mx-auto max-w-6xl">
            <div
              aria-hidden="true"
              className="absolute top-6 right-[7%] left-[7%] hidden h-0.5 bg-gradient-to-r from-emerald-700/60 via-blue-700/60 to-blue-700/60 lg:block"
            />
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6">
              {servicesProcess.steps[language].map((s, i) => (
                <Reveal key={s.title} delay={Math.min(i, 5) * 60}>
                  <div className="relative text-center">
                    <div
                      className={`relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white shadow-lg ring-4 ring-[#0a0f1e] ${
                        i % 2 === 0 ? 'bg-emerald-600 shadow-emerald-950/50' : 'bg-blue-700 shadow-blue-950/50'
                      }`}
                    >
                      {i + 1}
                    </div>
                    <h3 className="mb-1 text-sm font-bold text-white">{s.title}</h3>
                    <p className="mx-auto max-w-[200px] text-xs leading-relaxed text-gray-400">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Что именно мы делаем */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-10">{servicesList.title[language]}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesList.items[language].map((s, i) => {
              const Icon = SERVICE_ICONS[i]
              return (
                <Reveal key={s.title} delay={(i % 3) * 70} className="h-full">
                  <div className="h-full rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-700/20">
                        <Icon className="text-blue-400" size={20} />
                      </span>
                      <h3 className="text-sm font-bold text-white sm:text-base">{s.title}</h3>
                    </div>
                    <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">{s.desc}</p>
                    <p className="mt-3 border-t border-white/10 pt-3 text-xs leading-relaxed font-medium text-emerald-300 sm:text-sm">
                      {s.result}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Валидация под ключ */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-blue-500/25 bg-gradient-to-br from-blue-950/80 via-slate-900 to-slate-900 p-8 shadow-2xl sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 left-1/2 h-56 w-[36rem] max-w-none -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl"
              />
              <div className="relative">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg">
                  <ShieldCheck className="text-white" size={28} />
                </div>
                <h2 className="mb-3 text-center text-xl sm:text-2xl">
                  {servicesValidation.title[language]}
                </h2>
                <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-gray-300 sm:text-base">
                  {servicesValidation.text[language]}
                </p>
                <div className="mx-auto mb-6 grid max-w-2xl gap-2.5 text-left sm:grid-cols-2">
                  {servicesValidation.docs.map((d) => (
                    <div
                      key={d}
                      className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-gray-100 sm:text-sm"
                    >
                      <Check size={14} strokeWidth={3} className="flex-shrink-0 text-green-500" />
                      {d}
                    </div>
                  ))}
                </div>
                <p className="mx-auto mb-7 max-w-xl border-l-2 border-emerald-500 pl-4 text-left text-sm leading-relaxed text-gray-200 sm:text-base">
                  {servicesValidation.result[language]}
                </p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    to="/contacts"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-800 sm:text-base"
                  >
                    {servicesValidation.cta[language]}
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/contacts"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/50 px-6 py-3.5 text-sm font-bold text-blue-300 transition-all hover:bg-blue-700 hover:text-white sm:text-base"
                  >
                    <Download size={18} />
                    {servicesValidation.sampleBtn[language]}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Поддержка */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <h2 className="mb-3">{servicesSupportStats.title[language]}</h2>
              <p className="max-w-xl text-base leading-relaxed text-gray-300">
                {servicesSupportStats.text[language]}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {servicesSupportStats.items[language].map((item, i) => {
                const Icon = SUPPORT_ICONS[i]
                return (
                  <Reveal key={item} delay={i * 70} className="h-full">
                    <div className="flex h-full flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
                      <Icon size={22} className="text-blue-400" />
                      <span className="text-xs leading-snug font-medium text-gray-100 sm:text-sm">
                        {item}
                      </span>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8">
            {language === 'ru' ? 'Часто задаваемые вопросы' : language === 'en' ? 'Frequently asked questions' : 'Ko‘p so‘raladigan savollar'}
          </h2>
          <div className="mx-auto max-w-3xl space-y-3">
            {faqItems.map((item, i) => {
              const isOpen = faqOpen === i
              return (
                <Reveal key={item.q} delay={Math.min(i, 2) * 60}>
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
                      <span className="flex-shrink-0 text-xl leading-none text-gray-400">
                        {isOpen ? '−' : '+'}
                      </span>
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

      {/* 8. CTA */}
      <section className="relative overflow-hidden py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-blue-700 via-blue-900 to-slate-900 p-8 shadow-2xl sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
              <div className="mx-auto flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/30 backdrop-blur-sm lg:mx-0">
                <Headset size={40} className="text-blue-300" />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                  {servicesFinalCta.title[language]}
                </h2>
                <p className="mb-5 text-sm leading-relaxed text-blue-100 sm:text-base">
                  {servicesFinalCta.desc[language]}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    to="/quiz"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold whitespace-nowrap text-white shadow-xl shadow-emerald-950/40 transition-all hover:-translate-y-0.5 hover:bg-emerald-400 sm:text-base"
                  >
                    {servicesFinalCta.auditBtn[language]}
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href={`tel:${SITE.phones[0]}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900/80 px-6 py-3.5 text-sm font-bold whitespace-nowrap text-white transition-all hover:bg-slate-900 sm:text-base"
                  >
                    <Phone size={18} />
                    {servicesFinalCta.callBtn[language]}
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <a
                  href={`tel:${SITE.phones[0]}`}
                  className="text-center text-lg font-bold whitespace-nowrap text-white transition-colors hover:text-blue-200 sm:text-xl"
                >
                  +998 (91) 676-75-67
                </a>
                <span className="text-xs whitespace-nowrap text-blue-200">
                  {servicesFinalCta.hours[language]}
                </span>
                <div className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
                  <ShieldCheck size={20} className="flex-shrink-0 text-emerald-400" />
                  <span className="max-w-[180px] text-[11px] leading-snug font-medium text-gray-200">
                    {servicesFinalCta.badge[language]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
