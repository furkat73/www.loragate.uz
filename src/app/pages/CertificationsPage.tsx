import { useLanguage } from '@/i18n/LanguageContext'
import { PageHeader } from '../components/PageHeader'
import { Certifications } from '../components/Certifications'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '@/components/ui/Reveal'

export function CertificationsPage() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader title={t('certifications.title')} subtitle={t('certifications.subtitle')} />
      <Reveal>
        <Certifications />
      </Reveal>
      <CtaBand />
    </>
  )
}
