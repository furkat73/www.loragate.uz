import { useLanguage } from '@/i18n/LanguageContext'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'

export function HowItWorks() {
  const { t } = useLanguage()
  return (
    <section id="howItWorks" className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4">{t('howItWorks.title')}</h2>
          <p className="text-gray-600">{t('howItWorks.subtitle')}</p>
        </div>
        <div className="mb-20 flex justify-center">
          <div className="w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-lg">
            <ImageWithFallback
              src="/images/architecture.jpg"
              alt="Архитектура системы мониторинга Lora Gate"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
