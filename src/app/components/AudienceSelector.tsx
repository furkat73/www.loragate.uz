import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Link } from '@/lib/router'
import { Reveal } from '@/components/ui/Reveal'
import { AUDIENCE_LIST } from '../audiences'

/** Сегментатор: клиент выбирает свою отрасль и попадает на её страницу */
export function AudienceSelector() {
  const { t, language } = useLanguage()

  return (
    <section className="py-14 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="mb-3 text-center">
          {language === 'ru'
            ? 'Выберите решение для вашей отрасли'
            : language === 'en'
              ? 'Choose a solution for your industry'
              : 'Sohangiz uchun yechimni tanlang'}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-400">
          {language === 'ru'
            ? 'Задачи, боли и решения — отдельно для каждого типа объектов'
            : language === 'en'
              ? 'Challenges, pain points and solutions — tailored per facility type'
              : 'Vazifalar, muammolar va yechimlar — har bir ob‘yekt turi uchun alohida'}
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCE_LIST.map((a, i) => {
            const Icon = a.icon
            return (
              <Reveal key={a.route} delay={i * 80} className="h-full">
                <Link
                  to={a.route}
                  className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-blue-700/50 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 shadow-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="mb-2 text-base font-bold sm:text-lg">
                    {t(`cases.${a.caseKey}.title`)}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
                    {a.subtitle[language]}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-400 transition-colors group-hover:text-white">
                    {t('common.readMore')}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
