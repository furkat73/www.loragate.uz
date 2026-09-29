import { Award, Factory, Headphones, Lightbulb } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { PageHeader } from '../components/PageHeader'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '@/components/ui/Reveal'

export function AboutPage() {
  const { t, language } = useLanguage()

  const values = [
    {
      icon: Award,
      title: language === 'ru' ? 'Соответствие GMP / GDP' : language === 'en' ? 'GMP / GDP compliance' : 'GMP / GDP muvofiqligi',
      desc:
        language === 'ru'
          ? 'Системы, документация и валидация, которые принимают регуляторы при инспекциях.'
          : language === 'en'
            ? 'Systems, documentation and validation accepted by regulators during inspections.'
            : 'Inspeksiyalarda regulyatorlar qabul qiladigan tizimlar, hujjatlar va validatsiya.',
    },
    {
      icon: Factory,
      title: language === 'ru' ? 'Полный цикл' : language === 'en' ? 'Full cycle' : 'To‘liq sikl',
      desc:
        language === 'ru'
          ? 'Проектирование, установка датчиков, облачная платформа, валидация и сопровождение.'
          : language === 'en'
            ? 'Design, sensor installation, cloud platform, validation and maintenance.'
            : 'Loyihalash, datchiklarni o‘rnatish, bulut platforma, validatsiya va qo‘llab-quvvatlash.',
    },
    {
      icon: Lightbulb,
      title: language === 'ru' ? 'Собственная разработка' : language === 'en' ? 'In-house development' : 'O‘z ishlanmamiz',
      desc:
        language === 'ru'
          ? 'Оборудование и ПО созданы нашей командой и адаптированы под задачи клиентов.'
          : language === 'en'
            ? 'Hardware and software built by our team and adapted to client needs.'
            : 'Uskunalar va dasturiy ta’minot jamoamiz tomonidan yaratilgan va mijozlar vazifalariga moslashtirilgan.',
    },
    {
      icon: Headphones,
      title: language === 'ru' ? 'Поддержка 24/7' : language === 'en' ? '24/7 support' : '24/7 qo‘llab-quvvatlash',
      desc:
        language === 'ru'
          ? 'Локальная команда в Узбекистане: выезд инженера, обучение, помощь при проверках.'
          : language === 'en'
            ? 'Local team in Uzbekistan: engineer visits, training, inspection support.'
            : 'O‘zbekistondagi mahalliy jamoa: muhandis chiqishi, o‘qitish, tekshiruvlarda yordam.',
    },
  ]

  const stats = [
    { v: '150+', l: t('hero.statsClients') },
    { v: '99.9%', l: t('hero.statsReliability') },
    { v: '24/7', l: t('hero.statsSupport') },
  ]

  return (
    <>
      <PageHeader
        title={language === 'ru' ? 'О компании Lora Gate' : language === 'en' ? 'About Lora Gate' : 'Lora Gate kompaniyasi haqida'}
        subtitle={
          language === 'ru'
            ? 'Внедряем валидированные системы мониторинга микроклимата для фармацевтических и пищевых предприятий'
            : language === 'en'
              ? 'We deploy validated microclimate monitoring systems for pharmaceutical and food enterprises'
              : 'Farmatsevtika va oziq-ovqat korxonalari uchun validatsiyalangan mikroiqlim monitoring tizimlarini joriy qilamiz'
        }
      />

      <section className="py-14 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-base leading-relaxed text-gray-300 sm:text-lg">{t('hero.about')}</p>
          </div>
          <Reveal delay={100}>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-2 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-lg border border-gray-100 bg-white p-2 text-center shadow-sm sm:p-4"
                >
                  <div className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-lg font-bold text-transparent sm:text-2xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-[10px] text-gray-600 sm:text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center">
            {language === 'ru' ? 'Почему выбирают нас' : language === 'en' ? 'Why choose us' : 'Nega bizni tanlashadi'}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 90} className="h-full">
                <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
