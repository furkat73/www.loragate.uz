import { useLanguage } from '@/i18n/LanguageContext'
import { Link } from '@/lib/router'

export function NotFoundPage() {
  const { language } = useLanguage()
  return (
    <section className="py-24 text-center sm:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-7xl font-bold text-white/20 sm:text-8xl">404</div>
        <h1 className="mx-auto mt-4 max-w-xl text-2xl font-bold text-white sm:text-3xl">
          {language === 'ru' ? 'Страница не найдена' : language === 'en' ? 'Page not found' : 'Sahifa topilmadi'}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-gray-400">
          {language === 'ru'
            ? 'Похоже, такой страницы нет. Вернитесь на главную.'
            : language === 'en'
              ? 'Looks like this page does not exist. Go back home.'
              : 'Bunday sahifa mavjud emas. Bosh sahifaga qayting.'}
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-700 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-blue-800"
        >
          {language === 'ru' ? 'На главную' : language === 'en' ? 'Home' : 'Bosh sahifaga'}
        </Link>
      </div>
    </section>
  )
}
