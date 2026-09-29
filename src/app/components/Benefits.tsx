import {
  Bell,
  Cable,
  Code2,
  FileSpreadsheet,
  Gauge,
  Lock,
  Radio,
  Settings2,
  Smartphone,
  Wifi,
  Expand,
  Zap,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Reveal } from '@/components/ui/Reveal'

export function Benefits() {
  const { t } = useLanguage()
  const items = [
    { icon: Wifi, title: t('benefits.wireless.title'), description: t('benefits.wireless.desc') },
    { icon: Radio, title: t('benefits.sensors.title'), description: t('benefits.sensors.desc') },
    { icon: Cable, title: t('benefits.connection.title'), description: t('benefits.connection.desc') },
    { icon: Zap, title: t('benefits.easyInstall.title'), description: t('benefits.easyInstall.desc') },
    { icon: Expand, title: t('benefits.scalable.title'), description: t('benefits.scalable.desc') },
    { icon: Smartphone, title: t('benefits.webInterface.title'), description: t('benefits.webInterface.desc') },
    { icon: Code2, title: t('benefits.ownDev.title'), description: t('benefits.ownDev.desc') },
    { icon: Gauge, title: t('benefits.realTime.title'), description: t('benefits.realTime.desc') },
    { icon: Bell, title: t('benefits.notifications.title'), description: t('benefits.notifications.desc') },
    { icon: FileSpreadsheet, title: t('benefits.reports.title'), description: t('benefits.reports.desc') },
    { icon: Settings2, title: t('benefits.flexible.title'), description: t('benefits.flexible.desc') },
    { icon: Lock, title: t('benefits.security.title'), description: t('benefits.security.desc') },
  ]

  return (
    <section id="benefits" className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4">{t('benefits.title')}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 70} className="h-full">
            <div
              className="h-full rounded-lg border-2 border-gray-100 p-6 transition-all hover:border-indigo-600 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="mb-2">✔️ {title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
