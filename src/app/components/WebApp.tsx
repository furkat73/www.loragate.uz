import {
  Bell,
  Code2,
  FileSpreadsheet,
  LayoutDashboard,
  LineChart,
  MapPinned,
  Smartphone,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { Reveal } from '@/components/ui/Reveal'

export function WebApp() {
  const { t } = useLanguage()
  const features = [
    { icon: LayoutDashboard, title: t('webApp.dashboard.title'), description: t('webApp.dashboard.desc') },
    { icon: LineChart, title: t('webApp.history.title'), description: t('webApp.history.desc') },
    { icon: Bell, title: t('webApp.alerts.title'), description: t('webApp.alerts.desc') },
    { icon: MapPinned, title: t('webApp.points.title'), description: t('webApp.points.desc') },
    { icon: FileSpreadsheet, title: t('webApp.export.title'), description: t('webApp.export.desc') },
  ]

  return (
    <section id="webApp" className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6">{t('webApp.title')}</h2>
            <p className="mb-4 text-gray-600">{t('webApp.description1')}</p>
            <p className="mb-8 text-gray-600">{t('webApp.description2')}</p>
            <p className="mb-8 font-semibold text-gray-600">{t('webApp.mainFunctions')}</p>

            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-4 rounded-lg border border-teal-100 bg-teal-50 p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-teal-100">
                  <Code2 className="text-teal-600" size={24} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-teal-900">{t('webApp.validation.title')}</h3>
                  <p className="text-sm text-gray-600">{t('webApp.validation.desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border border-teal-100 bg-teal-50 p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-teal-100">
                  <Smartphone className="text-teal-600" size={24} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-teal-900">{t('webApp.access.title')}</h3>
                  <p className="text-sm text-gray-600">{t('webApp.access.desc')}</p>
                </div>
              </div>
              {features.map(({ icon: Icon, title, description }, i) => (
                <Reveal key={title} delay={i * 70}>
                <div className="flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-gray-50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-teal-100">
                    <Icon className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border-8 border-gray-200 shadow-2xl">
              <ImageWithFallback src="/images/dashboard.png" alt={t('webApp.title')} className="h-auto w-full" />
            </div>
            <div className="absolute -right-6 -bottom-6 hidden max-w-xs rounded-lg bg-teal-600 p-6 text-white shadow-xl md:block">
              <p className="mb-1">{t('webApp.interface')}</p>
              <p className="text-sm opacity-90">{t('webApp.interfaceDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
