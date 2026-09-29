import { Download, FileCheck, FileSignature, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Reveal } from '@/components/ui/Reveal'

export function Validation() {
  const { t } = useLanguage()
  const weDo = [
    { icon: FileCheck, text: t('validation.iq') },
    { icon: FileCheck, text: t('validation.oq') },
    { icon: FileCheck, text: t('validation.pq') },
  ]
  const youGet = [
    { icon: Download, text: t('validation.protocols') },
    { icon: Download, text: t('validation.reports') },
    { icon: FileSignature, text: t('validation.signatures') },
    { icon: ShieldCheck, text: t('validation.inspectorDocs') },
  ]

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{t('validation.title')}</h2>
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-semibold text-gray-800 sm:text-2xl">
              {t('validation.weDo')}
            </h3>
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
              {weDo.map(({ icon: Icon, text }, i) => (
                <Reveal key={text} delay={i * 90} className="h-full">
                <div
                  className="flex h-full items-start gap-4 rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50 p-4 shadow-md transition-shadow hover:shadow-lg sm:p-6"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 sm:h-12 sm:w-12">
                    <Icon className="text-white" size={20} />
                  </div>
                  <p className="pt-1 text-sm font-medium text-gray-800 sm:pt-2 sm:text-base">{text}</p>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-800 sm:text-2xl">
              {t('validation.youGet')}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {youGet.map(({ icon: Icon, text }, i) => (
                <Reveal key={text} delay={i * 90} className="h-full">
                <div
                  className="flex h-full items-start gap-4 rounded-xl border border-green-100 bg-gradient-to-br from-green-50 to-teal-50 p-4 shadow-md transition-shadow hover:shadow-lg sm:p-6"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-teal-600 sm:h-12 sm:w-12">
                    <Icon className="text-white" size={20} />
                  </div>
                  <p className="pt-1 text-sm font-medium text-gray-800 sm:pt-2 sm:text-base">{text}</p>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
