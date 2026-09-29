import { useLanguage } from '@/i18n/LanguageContext'
import { PageHeader } from '../components/PageHeader'
import { Cases } from '../components/Cases'
import { CtaBand } from '../components/CtaBand'

export function CasesPage() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader title={t('cases.title')} subtitle={t('cases.subtitle')} />
      <Cases />
      <CtaBand />
    </>
  )
}
