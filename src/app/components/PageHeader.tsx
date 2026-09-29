import { ChevronRight } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Link } from '@/lib/router'

type Props = {
  title: string
  subtitle?: string
}

/** Шапка внутренней страницы: крошки + центрированный заголовок */
export function PageHeader({ title, subtitle }: Props) {
  const { language } = useLanguage()
  return (
    <section className="relative overflow-hidden pb-10 pt-24 sm:pb-14 sm:pt-28 md:pb-16 md:pt-32">
      <div className="container mx-auto max-w-7xl px-4">
        <nav
          aria-label="breadcrumb"
          className="mb-6 flex items-center justify-center gap-1.5 text-xs text-gray-500 sm:text-sm"
        >
          <Link to="/" className="transition-colors hover:text-white">
            {language === 'ru' ? 'Главная' : language === 'en' ? 'Home' : 'Bosh sahifa'}
          </Link>
          <ChevronRight size={14} className="text-gray-600" />
          <span className="text-gray-300">{title}</span>
        </nav>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
