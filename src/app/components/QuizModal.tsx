import { useEffect } from 'react'
import { X, FileCheck } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { QuizContent } from './QuizContent'

type Props = {
  open: boolean
  onClose: () => void
}

export function QuizModal({ open, onClose }: Props) {
  const { language } = useLanguage()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/65 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-[620px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between bg-gradient-to-br from-indigo-600 to-indigo-700 px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <FileCheck className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-bold sm:text-base">
              {language === 'ru' ? 'Экспресс-тест GxP / GDP' : language === 'en' ? 'GxP / GDP express test' : 'Ekspress-test GxP / GDP'}
            </span>
          </div>
          <button type="button" onClick={onClose} className="text-3xl leading-none opacity-90 hover:opacity-100">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 sm:p-8">
          <QuizContent />
        </div>
      </div>
    </div>
  )
}
