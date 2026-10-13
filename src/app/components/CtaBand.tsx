import { ArrowRight, Check, HardHat, Phone, Star } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { SITE } from '@/lib/site'
import { Link } from '@/lib/router'

/** Компактная CTA-полоса перед футером внутренних страниц */
export function CtaBand(props?: {
  title?: Record<string, string>
  desc?: Record<string, string>
  cta?: Record<string, string>
  perks?: Record<string, string[]>
  micro?: Record<string, string>
  badge?: Record<string, string>
}) {
  const { language } = useLanguage()

  const title = (props?.title ?? {
    ru: 'Бесплатный аудит GxP вашего объекта',
    uz: 'Obyektingizning bepul GxP auditi',
    en: 'Free GxP audit of your facility',
  })[language]
  const desc = (props?.desc ?? {
    ru: 'Инженер приедет за 20 минут: замерит сигнал, найдёт слепые зоны, даст схему датчиков.',
    uz: 'Muhandis 20 daqiqada keladi: signalni o‘lchaydi, ko‘r joylarni topadi, datchiklar sxemasini beradi.',
    en: 'An engineer will visit for 20 minutes: measure the signal, find blind spots, map sensor placement.',
  })[language]
  const perks = (props?.perks ?? {
    ru: ['Бесплатно', '20 минут', 'Без обязательств'],
    uz: ['Bepul', '20 daqiqa', 'Majburiyatsiz'],
    en: ['Free', '20 minutes', 'No obligations'],
  })[language]
  const cta = (props?.cta ?? {
    ru: 'Пройти экспресс-тест',
    uz: 'Ekspress-testni o‘tish',
    en: 'Take the express test',
  })[language]
  const proof = (props?.badge ?? {
    ru: 'Уже провели более 80 аудитов',
    uz: '80 dan ortiq audit o‘tkazdik',
    en: '80+ audits already completed',
  })[language]
  const micro = (props?.micro ?? {
    ru: 'Ответ в течение 15 минут • Без обязательств',
    uz: '15 daqiqa ichida javob • Majburiyatsiz',
    en: 'Reply within 15 minutes • No obligations',
  })[language]

  return (
    <section className="relative overflow-hidden py-14 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 p-8 shadow-2xl sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 py-1.5 pr-4 pl-1.5 backdrop-blur-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                  <HardHat size={16} className="text-white" />
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white sm:text-sm">
                  <Star size={13} className="fill-amber-400 text-amber-400" />
                  {proof}
                </span>
              </div>
              <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
              <p className="mb-5 text-sm leading-relaxed text-blue-100 sm:text-base">{desc}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {perks.map((p) => (
                  <span key={p} className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto md:min-w-[280px]">
              <Link
                to="/quiz"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-sm font-bold whitespace-nowrap text-white shadow-xl shadow-emerald-950/40 transition-all hover:-translate-y-0.5 hover:bg-emerald-400 sm:text-base"
              >
                {cta}
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${SITE.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-4 text-sm font-bold whitespace-nowrap text-white transition-all hover:bg-white/10 sm:text-base"
              >
                <Phone size={18} />
                +998 (91) 676-75-67
              </a>
              <p className="text-center text-xs text-blue-200/90">{micro}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
