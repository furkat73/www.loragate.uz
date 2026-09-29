import { Mail, Phone } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { SITE } from '@/lib/site'
import { Link } from '@/lib/router'

export function Footer() {
  const { t, language } = useLanguage()
  const year = new Date().getFullYear()
  const linkCls = 'text-sm text-gray-400 transition-colors hover:text-white'

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
                <img src="/images/new%20logo.png" alt="Lora Gate" className="h-full w-full object-contain" />
              </div>
              <span className="text-xl">Lora Gate</span>
            </div>
            <p className="text-sm text-gray-400">{t('footer.description')}</p>
          </div>

          <div>
            <h3 className="mb-4 text-white">{t('footer.aboutCompany')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className={linkCls}>
                  {t('footer.aboutCompany')}
                </Link>
              </li>
              <li>
                <Link to="/cases" className={linkCls}>
                  {t('footer.cases')}
                </Link>
              </li>
              <li>
                <Link to="/certifications" className={linkCls}>
                  {t('footer.certifications')}
                </Link>
              </li>
              <li>
                <Link to="/contacts" className={linkCls}>
                  {t('footer.contacts')}
                </Link>
              </li>
              <li>
                <Link to="/quiz" className={linkCls}>
                  {language === 'ru' ? 'Бесплатный аудит' : language === 'en' ? 'Free audit' : 'Bepul audit'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-white">{t('footer.products')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/equipment" className={linkCls}>
                  {t('footer.allProducts')}
                </Link>
              </li>
              <li>
                <Link to="/equipment" className={linkCls}>
                  {t('footer.temperatureSensors')}
                </Link>
              </li>
              <li>
                <Link to="/equipment" className={linkCls}>
                  {t('footer.wifiGateways')}
                </Link>
              </li>
              <li>
                <Link to="/services" className={linkCls}>
                  {t('footer.services')}
                </Link>
              </li>
              <li>
                <Link to="/validation" className={linkCls}>
                  {t('validation.title')}
                </Link>
              </li>
              <li>
                <Link to="/platform" className={linkCls}>
                  {t('webApp.title')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-white">{t('footer.contacts')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0 text-indigo-400" />
                <div>
                  <a href="tel:+998916767567" className="block text-sm text-gray-400 transition-colors hover:text-white">
                    +998 (91) 676-75-67
                  </a>
                  <a href="tel:+998998681973" className="block text-sm text-gray-400 transition-colors hover:text-white">
                    +998 (99) 868-19-73
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0 text-indigo-400" />
                <div>
                  <a href={`mailto:${SITE.emails[0]}`} className="block text-sm text-gray-400 transition-colors hover:text-white">
                    {SITE.emails[0]}
                  </a>
                  <a href={`mailto:${SITE.emails[1]}`} className="block text-sm text-gray-400 transition-colors hover:text-white">
                    {SITE.emails[1]}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {year} Lora Gate. {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
