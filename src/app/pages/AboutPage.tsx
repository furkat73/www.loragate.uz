import { Bell, Check, FileCheck, FileSpreadsheet, FileText, Radio } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Link } from '@/lib/router'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { Reveal } from '@/components/ui/Reveal'
import { IndustryRail } from '../components/IndustryRail'
import { CtaBand } from '../components/CtaBand'

const SOLUTION_ICONS = [Radio, Bell, FileCheck, FileSpreadsheet]
const SOLUTION_BG = [
  '/images/architecture.jpg',
  '/images/gateway.png',
  '/images/case-pharma.jpg',
  '/images/food.png',
]

const GALLERY_SOURCES = [
  '/images/sensor.png',
  '/images/gateway.png',
  '/images/architecture.jpg',
  '/images/freez.jpg',
  '/images/truck.png',
  '/images/case-pharma.jpg',
]

/** Живая телеметрия: панель в стилистике дашборда мониторинга вместо шаблонных счётчиков */
function LiveTelemetry({ language }: { language: string }) {
  const defs = [
    {
      name:
        language === 'ru'
          ? 'Склад · +2…+8 °C'
          : language === 'en'
            ? 'Warehouse · +2…+8 °C'
            : 'Ombor · +2…+8 °C',
      base: 4.8,
      unit: '°C',
      decimals: 1,
      span: 3,
    },
    {
      name:
        language === 'ru'
          ? 'Влажность склада'
          : language === 'en'
            ? 'Warehouse humidity'
            : 'Ombor namligi',
      base: 43,
      unit: '%',
      decimals: 0,
      span: 8,
    },
    {
      name:
        language === 'ru'
          ? 'Морозильник · −18 °C'
          : language === 'en'
            ? 'Freezer · −18 °C'
            : 'Muzlatgich · −18 °C',
      base: -18.4,
      unit: '°C',
      decimals: 1,
      span: 1.2,
    },
  ]
  const okLabel = language === 'ru' ? 'норма' : language === 'en' ? 'normal' : 'norma'
  const [series, setSeries] = useState<number[][]>(() => defs.map((d) => Array(24).fill(d.base)))

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      if (document.hidden) return
      setSeries((prev) =>
        prev.map((pts, i) => {
          const next = pts[pts.length - 1] + (Math.random() - 0.5) * (defs[i].span / 6)
          const clamped = Math.min(defs[i].base + defs[i].span / 2, Math.max(defs[i].base - defs[i].span / 2, next))
          return [...pts.slice(1), clamped]
        }),
      )
    }, 2000)
    return () => {
      clearInterval(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  const spark = (pts: number[], base: number, span: number) => {
    const w = 120
    const h = 32
    return pts
      .map((v, i) => {
        const x = (i / (pts.length - 1)) * w
        const y = h - 4 - ((v - (base - span / 2)) / span) * (h - 8)
        return `${x.toFixed(1)},${Math.min(h - 2, Math.max(2, y)).toFixed(1)}`
      })
      .join(' ')
  }

  return (
    <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          LIVE
        </span>
        <span className="text-[11px] font-medium tracking-wide text-gray-400 sm:text-xs">
          LoRaWAN · 3 {language === 'ru' ? 'датчика онлайн' : language === 'en' ? 'sensors online' : 'datchik onlayn'}
        </span>
      </div>
      <div className="grid grid-cols-3 divide-x divide-white/10">
        {defs.map((d, i) => (
          <div key={d.name} className="p-3 text-center sm:p-5">
            <div className="truncate text-[10px] font-medium text-gray-400 sm:text-xs">{d.name}</div>
            <div className="mt-1 text-xl font-bold tabular-nums text-white sm:text-3xl">
              {series[i][series[i].length - 1].toFixed(d.decimals)}
              <span className="ml-0.5 text-xs font-medium text-gray-400 sm:text-sm">{d.unit}</span>
            </div>
            <svg viewBox="0 0 120 32" className="mx-auto mt-2 h-6 w-full max-w-[140px] sm:h-8" aria-hidden="true">
              <polyline
                points={spark(series[i], d.base, d.span)}
                fill="none"
                stroke="#34d399"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {okLabel}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AboutPage() {
  const { t, tList, language } = useLanguage()

  useEffect(() => {
    document.title = t('about.metaTitle')
    const descEl = document.querySelector('meta[name="description"]')
    descEl?.setAttribute('content', t('about.metaDescription'))
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.setAttribute('href', 'https://loragate.uz/about')
  }, [t])

  const solutions = tList('about.solutions') as { title: string; desc: string }[]
  const docs = tList('about.docs.items') as Array<{ code: string; title: string; img: string }>
  const gallery = tList('about.gallery') as { alt: string }[]

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-10 pt-24 sm:pb-14 sm:pt-28 md:pb-16 md:pt-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h1 className="mb-4 text-3xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
                {t('about.heroTitle')}
              </h1>
              <p className="mb-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
                {t('about.heroDescription')}
              </p>
              <div className="flex flex-col gap-3">
                {(tList('about.usp') as string[]).map((u) => (
                  <div key={u} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                      <Check size={14} strokeWidth={3} className="text-white" />
                    </span>
                    <span className="text-sm font-medium text-gray-100 sm:text-base">{u}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/40 to-slate-900 shadow-2xl">
                <ImageWithFallback
                  src="/images/sklad.png"
                  alt={t('about.heroImageAlt')}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>
            </div>
          </div>

          {/* Живая телеметрия вместо счётчиков */}
          <LiveTelemetry language={language} />
        </div>
      </section>

      {/* Интро */}
      <section className="py-14 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xl font-bold leading-snug text-white sm:text-2xl">
              {t('about.introLead')}
            </p>
            <p className="mt-6 text-base leading-relaxed text-gray-300 sm:text-lg">
              {t('about.introHelp')}
            </p>
            <ul className="mx-auto mt-6 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
              {(tList('about.introBullets') as string[]).map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                    <Check size={14} strokeWidth={3} className="text-white" />
                  </span>
                  <span className="text-sm font-medium leading-snug text-gray-100">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Решения с фото-фоном */}
      <section className="py-14 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center">
            {t('about.solutionsTitle')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/60 hover:shadow-blue-950/60 hover:shadow-2xl">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${SOLUTION_BG[i]}')` }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40"
                  />
                  <div className="relative p-6 sm:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 shadow-lg">
                      {(() => { const Icon = SOLUTION_ICONS[i]; return <Icon className="text-white" size={24} /> })()}
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-300">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Документы — светлая полоса */}
      <section className="light-band py-14 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-3 text-center">
            {t('about.docs.title')}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center">
            {t('about.docs.description')}
          </p>
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {docs.map((d) => (
                <a
                  key={d.code}
                  href={d.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1"
                >
                  <ImageWithFallback
                    src={d.img}
                    alt={d.title}
                    className="h-56 w-full object-cover object-top sm:h-64"
                  />
                  <div className="bg-blue-700 px-3 py-2 text-center text-xs font-bold text-white">
                    {d.code}
                  </div>
                </a>
              ))}
            </div>
            <div>
              <div className="space-y-3">
                {docs.map((d) => (
                  <a
                    key={d.code}
                    href={d.img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-700">
                      <FileText className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{d.title}</p>
                      <p className="text-sm text-gray-600">{d.code} • Lora Gate</p>
                    </div>
                  </a>
                ))}
              </div>
              <Link
                to="/quiz"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-800 sm:text-base"
              >
                {t('about.docs.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section className="py-14 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center">
            {t('about.galleryTitle')}
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.alt} delay={(i % 3) * 80}>
                <figure className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <div className="h-44 overflow-hidden sm:h-56">
                    <ImageWithFallback
                      src={GALLERY_SOURCES[i]}
                      alt={g.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-3 text-center text-xs text-gray-300 sm:text-sm">
                    {g.alt}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <IndustryRail />

      <CtaBand />
    </>
  )
}
