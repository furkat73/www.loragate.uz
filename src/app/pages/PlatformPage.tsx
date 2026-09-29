import { useLanguage } from '@/i18n/LanguageContext'
import { PageHeader } from '../components/PageHeader'
import { WebApp } from '../components/WebApp'
import { CtaBand } from '../components/CtaBand'

export function PlatformPage() {
  const { t, language } = useLanguage()
  return (
    <>
      <PageHeader
        title={t('webApp.title')}
        subtitle={
          language === 'ru'
            ? 'Облачная платформа мониторинга: дашборды, графики, уведомления и отчёты для аудита'
            : language === 'en'
              ? 'Cloud monitoring platform: dashboards, charts, notifications and audit reports'
              : 'Monitoring bulut platformasi: dashbordlar, grafiklar, bildirishnomalar va audit hisobotlari'
        }
      />
      <WebApp />
      <CtaBand />
    </>
  )
}
