import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { SITE } from '@/lib/site'
import { Link, useRoute } from '@/lib/router'
import { AUDIENCE_LIST } from '../audiences'

type Props = {
  onOpenQuiz?: () => void
}

export function Header({ onOpenQuiz }: Props) {
  const { t, language, setLanguage } = useLanguage()
  const { path } = useRoute()
  const isSolutions = AUDIENCE_LIST.some((a) => a.route === path)
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  const closeDrawer = () => setDrawerOpen(false)
  const linkCls = (to: string) => `chdr-link${path === to ? ' active' : ''}`

  const solutionsLabel = language === 'ru' ? 'Решения' : language === 'en' ? 'Solutions' : 'Yechimlar'

  const solutionsDrop = (
    <div className="group relative">
      <button
        type="button"
        className={`chdr-link flex items-center gap-1${isSolutions ? ' active' : ''}`}
      >
        {solutionsLabel}
        <ChevronDown size={14} />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 pt-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#101a30] shadow-2xl">
          {AUDIENCE_LIST.map(({ route, icon: Icon, caseKey }) => (
            <Link
              key={route}
              to={route}
              onClick={closeDrawer}
              className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/5"
            >
              <Icon size={18} className="flex-shrink-0 text-blue-400" />
              <span className="text-sm text-gray-200">{t(`cases.${caseKey}.title`)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )

  const aboutLabel = language === 'ru' ? 'О нас' : language === 'en' ? 'About us' : 'Biz haqimizda'
  const tx = (ru: string, uz: string, en: string) =>
    language === 'ru' ? ru : language === 'en' ? en : uz
  const link = (to: string, label: string) => (
    <Link key={to} to={to} className={linkCls(to)} onClick={closeDrawer}>
      {label}
    </Link>
  )

  const navDesktop = (
    <>
      {link('/about', aboutLabel)}
      {solutionsDrop}
      {link('/equipment', tx('Оборудование', 'Uskunalar', 'Equipment'))}
      {link('/services', tx('Услуги', 'Xizmatlar', 'Services'))}
      {link('/cases', tx('Кейсы', 'Loyihalar', 'Cases'))}
      {link('/certifications', tx('Сертификаты', 'Sertifikatlar', 'Certifications'))}
      {link('/contacts', tx('Контакты', 'Kontaktlar', 'Contacts'))}
    </>
  )

  const nav = (
    <>
      {link('/about', aboutLabel)}
      {link('/equipment', tx('Оборудование', 'Uskunalar', 'Equipment'))}
      {link('/services', tx('Услуги', 'Xizmatlar', 'Services'))}
      {link('/validation', tx('Валидация', 'Validatsiya', 'Validation'))}
      {link('/platform', tx('Платформа', 'Platforma', 'Platform'))}
      {link('/cases', tx('Кейсы', 'Loyihalar', 'Cases'))}
      {link('/certifications', tx('Сертификаты', 'Sertifikatlar', 'Certifications'))}
      {link('/contacts', tx('Контакты', 'Kontaktlar', 'Contacts'))}
    </>
  )

  return (
    <>
      <header className={`chdr ${scrolled ? 'chdr-scrolled' : ''}`}>
        <div className="chdr-inner">
          <Link to="/" className="chdr-logo" onClick={closeDrawer}>
            <img src="/images/new%20logo.png" alt="Lora Gate" className="chdr-logo-img" />
            <span className="chdr-brand">Lora Gate</span>
          </Link>
          <nav className="chdr-nav">{navDesktop}</nav>
          <div className="chdr-actions">
            <a href={`tel:${SITE.phones[0]}`} className="chdr-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>+998 (91) 676-75-67</span>
            </a>
            <a
              href={SITE.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="chdr-tg"
              title="Telegram"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
            </a>
            <div className="chdr-lang">
              <button
                type="button"
                className={`chdr-lang-btn ${language === 'ru' ? 'active' : ''}`}
                onClick={() => setLanguage('ru')}
              >
                RU
              </button>
              <button
                type="button"
                className={`chdr-lang-btn ${language === 'uz' ? 'active' : ''}`}
                onClick={() => setLanguage('uz')}
              >
                UZ
              </button>
              <button
                type="button"
                className={`chdr-lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-3 py-2 text-xs font-bold text-white shadow-md transition-all hover:from-green-700 hover:to-emerald-700 hover:shadow-lg lg:px-4 lg:py-2.5 lg:text-sm"
              onClick={onOpenQuiz}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M9 12l2 2 4-4" />
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <span className="hidden sm:inline">{language === 'ru' ? 'Бесплатный аудит GxP' : language === 'en' ? 'Free GxP audit' : 'Bepul audit GxP'}</span>
            </button>
            <button
              type="button"
              className="chdr-burger"
              onClick={() => setDrawerOpen(true)}
              aria-label="Меню"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`chdr-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />
      <div className={`chdr-drawer ${drawerOpen ? 'open' : ''}`}>
        <button type="button" className="chdr-drawer-close" onClick={() => setDrawerOpen(false)}>
          &times;
        </button>
        <nav>{nav}</nav>
        <div className="mt-2 px-4 text-[11px] font-semibold uppercase tracking-wider text-white/50">
          {solutionsLabel}
        </div>
        <nav>
          {AUDIENCE_LIST.map(({ route, icon: Icon, caseKey }) => (
            <Link key={route} to={route} className="chdr-link" onClick={closeDrawer}>
              <span className="flex items-center gap-2">
                <Icon size={15} />
                {t(`cases.${caseKey}.title`)}
              </span>
            </Link>
          ))}
        </nav>
        <a href={`tel:${SITE.phones[0]}`} className="chdr-drawer-phone">
          +998 (91) 676-75-67
        </a>
        <a
          href={SITE.social.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="chdr-drawer-tg"
        >
          Telegram
        </a>
        <button
          type="button"
          className="chdr-drawer-cta"
          onClick={() => {
            setDrawerOpen(false)
            onOpenQuiz?.()
          }}>
          {language === 'ru' ? 'Бесплатный аудит GxP' : language === 'en' ? 'Free GxP audit' : 'Bepul audit GxP'}
        </button>
      </div>

      

      <a
        href={`tel:${SITE.phones[0]}`}
        className="fixed right-6 bottom-6 z-50 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-green-600 text-white shadow-2xl transition-all hover:scale-110 hover:bg-green-700 md:hidden"
        aria-label="Позвонить"
      >
        <PhoneIcon />
      </a>
    </>
  )
}

function PhoneIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}
