import { useState } from 'react'
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Award,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Cloud,
  FileText,
  MousePointerClick,
  Play,
  ShieldCheck,
  Thermometer,
  Timer,
  Wifi,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Link } from '@/lib/router'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { Reveal } from '@/components/ui/Reveal'
import { CtaBand } from '../components/CtaBand'
import { AUDIENCES } from '../audiences'
import {
  pharmaAdvantagesTitle,
  pharmaBenefits,
  pharmaDocs,
  pharmaEquipment,
  pharmaFaq,
  pharmaHero,
  pharmaMeasurable,
  pharmaResults,
  pharmaValidationMini,
} from '../pharmaContent'

const EQUIPMENT_ICONS = [Thermometer, Wifi, Cloud]
const EQUIPMENT_IMG = ['/images/sensor.png', '/images/gateway.png', '/images/architecture.jpg']
const MEASURABLE_ICONS = [Activity, Timer, MousePointerClick]

export function PharmaPage() {
  const { t, language } = useLanguage()
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const audience = AUDIENCES.pharma
  const pains = audience.pains[language]
  const solutions = audience.solutions[language]
  const faqItems = pharmaFaq.items[language] ?? pharmaFaq.items.ru

  return (
    <>
      {/* 1. HERO: текст слева, фото справа */}
      <section className="relative overflow-hidden pb-10 pt-24 sm:pb-14 sm:pt-28 md:pb-16 md:pt-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
                {t('cases.pharma.title')}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
                {pharmaHero.subtitle[language]}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/quiz"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-950/40 transition-all hover:-translate-y-0.5 hover:bg-emerald-400 sm:text-base"
                >
                  {pharmaHero.primaryBtn[language]}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contacts"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 sm:text-base"
                >
                  <Play size={18} />
                  {pharmaHero.secondaryBtn[language]}
                </Link>
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: ShieldCheck, text: pharmaHero.perks[0][language] },
                  { icon: Activity, text: pharmaHero.perks[1][language] },
                  { icon: FileText, text: pharmaHero.perks[2][language] },
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
                  src="/images/hero.png"
                  alt={t('cases.pharma.title')}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl bg-blue-700/20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Знакомые проблемы? */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8">
            {language === 'ru' ? 'Знакомые проблемы?' : language === 'en' ? 'Sound familiar?' : 'Tanish muammolar?'}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {pains.map((p, i) => (
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

      {/* 3. Как решает Lora Gate */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8">
            {language === 'ru' ? 'Как решает Lora Gate' : language === 'en' ? 'How Lora Gate solves it' : 'Lora Gate qanday hal qiladi'}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => (
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

      {/* 4. Преимущества + измеримый результат + документы */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
            <div>
              <h2 className="mb-6 text-xl sm:text-2xl">{pharmaAdvantagesTitle[language]}</h2>
              <ul className="flex flex-col gap-3">
                {pharmaBenefits.items[language].map((b: string) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-gray-200">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl sm:text-2xl">{pharmaMeasurable.title[language]}</h2>
              <div className="flex flex-col gap-5">
                {pharmaMeasurable.stats.map((s, i) => {
                  const Icon = MEASURABLE_ICONS[i]
                  return (
                    <div key={s.value} className="flex items-start gap-3">
                      <Icon size={22} className="mt-1 flex-shrink-0 text-blue-400" />
                      <div>
                        <div className="text-2xl font-bold text-white">{s.value}</div>
                        <div className="text-xs text-gray-400 sm:text-sm">{s.label[language]}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-xl sm:text-2xl">{pharmaValidationMini.title[language]}</h2>
              <ul className="flex flex-col gap-2.5">
                {pharmaValidationMini.rows.map((d) => (
                  <li key={d.code} className="flex items-center gap-3">
                    <FileText size={18} className="flex-shrink-0 text-blue-400" />
                    <span className="text-sm text-gray-200">
                      <span className="font-bold text-white">{d.code}</span>
                      {' — '}
                      {d.name[language]}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/validation"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/50 px-5 py-2.5 text-sm font-bold text-blue-300 transition-all hover:bg-blue-700 hover:text-white"
              >
                {pharmaValidationMini.moreBtn[language]}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Оборудование и платформа */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8">{pharmaEquipment.title[language]}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {pharmaEquipment.cards.map((c, i) => {
              const Icon = EQUIPMENT_ICONS[i]
              return (
                <Reveal key={c.name.ru} delay={i * 80} className="h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className="h-44 overflow-hidden">
                      <ImageWithFallback
                        src={EQUIPMENT_IMG[i]}
                        alt={c.name[language]}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-2 flex items-center gap-2.5">
                        <Icon size={20} className="flex-shrink-0 text-blue-400" />
                        <h3 className="text-sm font-bold text-white sm:text-base">{c.name[language]}</h3>
                      </div>
                      <ul className="mb-5 flex flex-col gap-1.5">
                        {c.specs[language].map((s) => (
                          <li key={s} className="flex items-start gap-2">
                            <Check size={13} strokeWidth={3} className="mt-1 flex-shrink-0 text-green-500" />
                            <span className="text-xs text-gray-300 sm:text-sm">{s}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/equipment"
                        className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-blue-400 transition-colors hover:text-white"
                      >
                        {pharmaEquipment.moreBtn[language]}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. Результаты: мини-кейс */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8">{pharmaResults.title[language]}</h2>
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2">
                <Award size={18} className="text-amber-400" />
                <span className="text-sm font-bold text-amber-300">{pharmaResults.proof[language]}</span>
              </div>
              <div className="flex flex-col gap-4 text-left">
                {[
                  { icon: Building2, label: pharmaResults.clientLabel[language], value: pharmaResults.client[language] },
                  { icon: CheckCircle2, label: pharmaResults.taskLabel[language], value: pharmaResults.task[language] },
                  { icon: Award, label: pharmaResults.resultLabel[language], value: pharmaResults.result[language] },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon size={18} className="mt-0.5 flex-shrink-0 text-blue-400" />
                    <p className="text-sm text-gray-300 sm:text-base">
                      <span className="font-bold text-white">{label}: </span>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                to="/cases"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-400 transition-colors hover:text-white"
              >
                {pharmaResults.allCases[language]}
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Документы (кратко, со ссылкой на полный раздел) */}
      <section className="light-band py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-3 text-center">{pharmaDocs.title[language]}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center">{pharmaDocs.text[language]}</p>
          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            {pharmaDocs.items.map((d) => (
              <div
                key={d.code}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <span className="flex h-11 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-blue-700 text-xs font-bold text-white">
                  {d.code}
                </span>
                <span className="text-sm font-semibold text-gray-900">{d.name[language]}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/contacts"
              className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-800 sm:text-base"
            >
              {pharmaDocs.orderBtn[language]}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
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

      {/* 9. CTA */}
      <CtaBand />
    </>
  )
}
