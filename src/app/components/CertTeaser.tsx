import { ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Link } from '@/lib/router'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'

const STANDARDS = ['GMP', 'GDP', 'GPP', 'GSP', 'FDA', 'ISO 9001', 'RoHS']

/** Тизер сертификатов: факты + сканы документов */
export function CertTeaser() {
  const { t, language } = useLanguage()
  return (
    <section className="py-14 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-700/40 bg-blue-700/10 px-4 py-1.5 text-xs font-semibold text-blue-300">
              <ShieldCheck size={14} />
              {language === 'ru' ? 'Документы и соответствие' : language === 'en' ? 'Documents & compliance' : 'Hujjatlar va muvofiqlik'}
            </div>
            <h2 className="mb-4 text-left">
              {language === 'ru' ? 'Соответствие международным стандартам' : language === 'en' ? 'Compliance with international standards' : 'Xalqaro standartlarga muvofiqlik'}
            </h2>
            <p className="mb-6 max-w-xl leading-relaxed text-gray-400">
              {t('certifications.description')}
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {STANDARDS.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold tracking-wide text-gray-300"
                >
                  {s}
                </span>
              ))}
            </div>
            <Link
              to="/certifications"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl sm:text-base"
            >
              {language === 'ru' ? 'Смотреть сертификаты' : language === 'en' ? 'View certifications' : 'Sertifikatlarni ko‘rish'}
            </Link>
          </div>
          <Link to="/certifications" className="group relative mx-auto w-full max-w-md" aria-label={t('certifications.title')}>
            <div className="absolute inset-0 translate-x-6 translate-y-4 rotate-6 overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl transition-transform duration-500 group-hover:rotate-3">
              <ImageWithFallback
                src="/images/sertificat2.png"
                alt={t('certifications.uzcert')}
                className="h-72 w-full object-cover object-top sm:h-80 lg:h-96"
              />
            </div>
            <div className="relative -rotate-3 overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl transition-transform duration-500 group-hover:rotate-0">
              <ImageWithFallback
                src="/images/sertificat 1.png"
                alt={t('certifications.ozst')}
                className="h-72 w-full object-cover object-top sm:h-80 lg:h-96"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
