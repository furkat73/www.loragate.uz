import { useLanguage } from '@/i18n/LanguageContext'
import { PageHeader } from '../components/PageHeader'
import { Contacts } from '../components/Contacts'
import { Reveal } from '@/components/ui/Reveal'

export function ContactsPage() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader title={t('contacts.title')} subtitle={t('contacts.subtitle')} />
      <Reveal>
        <Contacts />
      </Reveal>
    </>
  )
}
