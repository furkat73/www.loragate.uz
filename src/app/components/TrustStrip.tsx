import { useLanguage } from '@/i18n/LanguageContext'
import { CaseGrid, CASE_ITEMS } from './Cases'

/** Полоса доверия: содержимое кейсов без заголовка */
export function TrustStrip() {
  const { language } = useLanguage()

  return (
    <section className="border-y border-white/5 py-14 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          {language === 'ru'
            ? 'Наши решения работают в отраслях'
            : language === 'en'
              ? 'Our solutions power these industries'
              : 'Yechimlarimiz quyidagi sohalarda ishlaydi'}
        </p>
        <CaseGrid items={CASE_ITEMS} />
      </div>
    </section>
  )
}
