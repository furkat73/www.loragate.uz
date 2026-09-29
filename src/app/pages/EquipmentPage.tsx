import { useLanguage } from '@/i18n/LanguageContext'
import { PageHeader } from '../components/PageHeader'
import { Equipment } from '../components/Equipment'
import { CtaBand } from '../components/CtaBand'

export function EquipmentPage() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader title={t('equipment.title')} subtitle={t('equipment.subtitle')} />
      <Equipment />
      <CtaBand />
    </>
  )
}
