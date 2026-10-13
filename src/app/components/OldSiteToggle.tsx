import { useLanguage } from '@/i18n/LanguageContext'

/**
 * Переключатель на старую версию сайта.
 * Работает только на проде, где старый сайт лежит в /old/.
 */
export function OldSiteToggle() {
  const { language } = useLanguage()
  const label =
    language === 'ru'
      ? 'Старая версия сайта'
      : language === 'en'
        ? 'Old site version'
        : 'Saytning eski versiyasi'

  return (
    <a
      href="/old/"
      className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/90 px-4 py-2.5 text-xs font-semibold text-gray-200 shadow-xl backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white/40 hover:text-white sm:text-sm"
    >
      <span aria-hidden="true">⇄</span>
      {label}
    </a>
  )
}
