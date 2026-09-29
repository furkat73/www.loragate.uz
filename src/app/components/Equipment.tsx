import { Battery, Download, Radio, Router, Thermometer, Wifi } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Button } from '@/components/ui/button'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { Reveal } from '@/components/ui/Reveal'
import { useRoute } from '@/lib/router'

export function Equipment() {
  const { t } = useLanguage()
  const { navigate } = useRoute()

  return (
    <section id="equipment" className="bg-gradient-to-br from-gray-50 to-indigo-50 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4">{t('equipment.title')}</h2>
          <p className="mx-auto max-w-2xl text-gray-600">{t('equipment.subtitle')}</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <Reveal delay={0} className="h-full">
          <div className="h-full overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="flex h-64 items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200">
              <ImageWithFallback src="/images/gateway.png" alt="Шлюз RD07 Wi-Fi" className="h-full w-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="mb-6">{t('equipment.gateway.title')}</h3>
              <div className="mb-6 space-y-4">
                {[
                  { icon: Radio, title: 'equipment.gateway.loraSupport.title', desc: 'equipment.gateway.loraSupport.desc' },
                  { icon: Wifi, title: 'equipment.gateway.connection.title', desc: 'equipment.gateway.connection.desc' },
                  { icon: Router, title: 'equipment.gateway.reception.title', desc: 'equipment.gateway.reception.desc' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-100">
                      <Icon className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <p>{t(title)}</p>
                      <p className="text-sm text-gray-600">{t(desc)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </Reveal>

          <Reveal delay={120} className="h-full">
          <div className="h-full overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-indigo-200 blur-2xl" />
                <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-violet-200 blur-2xl" />
              </div>
              <div className="relative z-10 flex h-full w-full items-center justify-center p-8">
                <ImageWithFallback src="/images/sensor.png" alt="Датчики TAG 08 / TAG 08B" className="h-full w-full object-contain drop-shadow-lg" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="mb-6">{t('equipment.sensors.title')}</h3>
              <div className="mb-6 space-y-4">
                {[
                  { icon: Radio, title: 'equipment.sensors.wireless.title', desc: 'equipment.sensors.wireless.desc' },
                  { icon: Thermometer, title: 'equipment.sensors.measurement.title', desc: 'equipment.sensors.measurement.desc' },
                  { icon: Battery, title: 'equipment.sensors.battery.title', desc: 'equipment.sensors.battery.desc' },
                  { icon: Router, title: 'equipment.sensors.reliable.title', desc: 'equipment.sensors.reliable.desc' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                      <Icon className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p>{t(title)}</p>
                      <p className="text-sm text-gray-600">{t(desc)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </Reveal>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" onClick={() => navigate('/contacts')}>
            <Download className="mr-2" size={20} />
            {t('equipment.specs')}
          </Button>
        </div>
      </div>
    </section>
  )
}
