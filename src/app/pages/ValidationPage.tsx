import { useLanguage } from '@/i18n/LanguageContext'
import { PageHeader } from '../components/PageHeader'
import { Validation } from '../components/Validation'
import { HowItWorks } from '../components/HowItWorks'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '@/components/ui/Reveal'

export function ValidationPage() {
  const { t, language } = useLanguage()
  return (
    <>
      <PageHeader
        title={t('validation.title')}
        subtitle={
          language === 'ru'
            ? 'Квалификация IQ / OQ / PQ и полный пакет документов для GMP / GDP инспекций'
            : language === 'en'
              ? 'IQ / OQ / PQ qualification and a full document package for GMP / GDP inspections'
              : 'IQ / OQ / PQ kvalifikatsiya va GMP / GDP inspeksiyalari uchun to‘liq hujjatlar to‘plami'
        }
      />
      <Validation />
      <Reveal>
        <HowItWorks />
      </Reveal>
      <CtaBand />
    </>
  )
}
