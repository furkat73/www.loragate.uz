import { useLanguage } from '@/i18n/LanguageContext'
import { PageHeader } from '../components/PageHeader'
import { Services } from '../components/Services'
import { Faq } from '../components/Faq'
import { CtaBand } from '../components/CtaBand'
import { Link } from '@/lib/router'

export function ServicesPage() {
  const { t, language } = useLanguage()
  return (
    <>
      <PageHeader title={t('services.title')} subtitle={t('services.subtitle')} />
      <Services />
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 pb-4 text-center">
          <span className="text-sm text-gray-500">
            {language === 'ru' ? 'Смотрите также:' : language === 'en' ? 'See also:' : 'Shuningdek qarang:'}
          </span>
          <Link to="/validation" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            {t('validation.title')} →
          </Link>
          <Link to="/platform" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            {t('webApp.title')} →
          </Link>
        </div>
      </div>
      <Faq />
      <CtaBand />
    </>
  )
}
