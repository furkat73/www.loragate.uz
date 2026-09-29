import { FileCheck } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { QuizContent } from './QuizContent'

export function QuizFunnel() {
  const { language } = useLanguage()

  return (
    <section id="quiz" className="bg-gradient-to-br from-gray-50 via-indigo-50/30 to-white py-16 sm:py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl sm:rounded-3xl">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                <FileCheck className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold text-white sm:text-base">
                {language === 'ru' ? 'Экспресс-тест GxP / GDP' : language === 'en' ? 'GxP / GDP express test' : 'Ekspress-test GxP / GDP'}
              </span>
            </div>
          </div>
          <div className="p-5 sm:p-8">
            <QuizContent />
          </div>
        </div>
      </div>
    </section>
  )
}
