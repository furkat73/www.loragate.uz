import { ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Link } from '@/lib/router'

const STANDARDS = ['GMP', 'GDP', 'GPP', 'GSP', 'FDA', 'ISO 9001', 'RoHS']

/** Компактный тизер сертификатов */
export function CertTeaser() {
  const { language } = useLanguage()
  return (
    <section className="py-14 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 shadow-lg">
            <ShieldCheck className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {language === 'ru'
              ? 'Соответствие международным стандартам'
              : language === 'en'
                ? 'Compliance with international standards'
                : 'Xalqaro standartlarga muvofiqlik'}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {STANDARDS.map((s) => (
              <span
                key={s}
                className="rounded-lg border border-blue-700/40 bg-blue-700/10 px-4 py-2 text-sm font-bold tracking-wide text-blue-300"
              >
                {s}
              </span>
            ))}
          </div>
          <Link
            to="/certifications"
            className="text-sm font-semibold text-blue-400 transition-colors hover:text-white"
          >
            {language === 'ru' ? 'Все сертификаты →' : language === 'en' ? 'All certifications →' : 'Barcha sertifikatlar →'}
          </Link>
        </div>
      </div>
    </section>
  )
}
