import {
  Cloud,
  Download,
  FileCheck,
  PenTool,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Reveal } from '@/components/ui/Reveal'

export function GmpSolution() {
  const { t } = useLanguage()
  const items = [
    { icon: PenTool, text: t('gmpSolution.design') },
    { icon: Wrench, text: t('gmpSolution.installation') },
    { icon: Cloud, text: t('gmpSolution.platform') },
    { icon: FileCheck, text: t('gmpSolution.validation') },
    { icon: Download, text: t('gmpSolution.documents') },
    { icon: ShieldCheck, text: t('gmpSolution.support') },
  ]

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{t('gmpSolution.title')}</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700">{t('gmpSolution.description')}</p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {items.map(({ icon: Icon, text }, i) => (
            <Reveal key={text} delay={i * 90} className="h-full">
            <div
              className="flex h-full items-start gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-md transition-shadow hover:shadow-lg sm:p-6"
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
    </section>
  )
}
