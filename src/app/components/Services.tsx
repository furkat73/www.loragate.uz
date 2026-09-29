import {
  ArrowRight,
  Database,
  GraduationCap,
  Headphones,
  ShieldCheck,
  Wrench,
  Settings,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Button } from '@/components/ui/button'
import { useRoute } from '@/lib/router'
import { Reveal } from '@/components/ui/Reveal'

export function Services() {
  const { t } = useLanguage()
  const { navigate } = useRoute()
  const items = [
    { icon: Settings, title: t('services.installation.title'), description: t('services.installation.desc') },
    { icon: Headphones, title: t('services.support.title'), description: t('services.support.desc') },
    { icon: Wrench, title: t('services.maintenance.title'), description: t('services.maintenance.desc') },
    { icon: GraduationCap, title: t('services.training.title'), description: t('services.training.desc') },
    { icon: Database, title: t('services.backup.title'), description: t('services.backup.desc') },
    { icon: ShieldCheck, title: t('services.validation.title'), description: t('services.validation.desc') },
  ]

  return (
    <section id="services" className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4">{t('services.title')}</h2>
          <p className="text-gray-600">{t('services.subtitle')}</p>
        </div>
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 90} className="h-full">
            <div
              className="group h-full rounded-xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 transition-all hover:border-indigo-600 hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 transition-transform group-hover:scale-110">
                <Icon className="text-white" size={28} />
              </div>
              <h3 className="mb-3">📌 {title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center">
            <Button
              size="lg"
              onClick={() => navigate('/contacts')}
            >
            {t('services.learnMore')}
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  )
}
