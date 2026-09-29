import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Link } from '@/lib/router'
import { PageHeader } from './PageHeader'
import { CtaBand } from './CtaBand'
import { Reveal } from '@/components/ui/Reveal'
import type { Audience } from '../audiences'

/** Шаблон страницы аудитории: боли → решение → кейс → CTA */
export function AudienceTemplate({ audience }: { audience: Audience }) {
  const { t, language } = useLanguage()
  const pains = audience.pains[language]
  const solutions = audience.solutions[language]
  const AudienceIcon = audience.icon

  return (
    <>
      <PageHeader
        title={t(`cases.${audience.caseKey}.title`)}
        subtitle={audience.subtitle[language]}
      />

      <section className="py-14 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center">
            {language === 'ru' ? 'Знакомые проблемы?' : language === 'en' ? 'Sound familiar?' : 'Tanish muammolar?'}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {pains.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="h-full">
                <div className="flex h-full items-start gap-4 rounded-xl border border-red-900/40 bg-red-950/30 p-5 sm:p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-600/20">
                    <AlertTriangle className="text-red-400" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold sm:text-lg">{p.title}</h3>
                    <p className="text-sm text-gray-400">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center">
            {language === 'ru' ? 'Как решает Lora Gate' : language === 'en' ? 'How Lora Gate solves it' : 'Lora Gate qanday hal qiladi'}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="h-full">
                <div className="flex h-full items-start gap-4 rounded-xl border border-green-900/40 bg-green-950/30 p-5 sm:p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-600/20">
                    <CheckCircle2 className="text-green-400" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold sm:text-lg">{s.title}</h3>
                    <p className="text-sm text-gray-400">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:p-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700">
                <AudienceIcon className="text-white" size={24} />
              </div>
              <h2 className="mb-3 text-xl font-bold sm:text-2xl">
                {t(`cases.${audience.caseKey}.description`)}
              </h2>
              <div className="mx-auto mb-6 flex max-w-xl flex-col gap-2 text-left">
                {audience.benefitKeys.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 flex-shrink-0 text-green-500" size={18} />
                    <span className="text-sm text-gray-300">{t(b)}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/cases"
                className="text-sm font-semibold text-blue-400 transition-colors hover:text-white"
              >
                {language === 'ru' ? 'Все кейсы →' : language === 'en' ? 'All cases →' : 'Barcha keyslar →'}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
