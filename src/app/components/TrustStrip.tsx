import { useLanguage } from '@/i18n/LanguageContext'
import { CaseGrid, CASE_ITEMS } from './Cases'

/** Полоса доверия: содержимое кейсов без заголовка */
export function TrustStrip() {
  const { language } = useLanguage()

  return (
    <section className="border-y border-white/5 py-14 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="mx-auto mb-10 max-w-3xl text-center">
          {language === 'ru'
            ? 'Наши решения работают в отраслях'
            : language === 'en'
              ? 'Our solutions power these industries'
              : 'Yechimlarimiz quyidagi sohalarda ishlaydi'}
        </h2>
        <CaseGrid items={CASE_ITEMS} />
      </div>
    </section>
  )
}
