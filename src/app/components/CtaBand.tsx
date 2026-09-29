import { ArrowRight, Phone } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { SITE } from '@/lib/site'
import { Link } from '@/lib/router'

/** Компактная CTA-полоса перед футером внутренних страниц */
export function CtaBand() {
  const { language } = useLanguage()
  return (
    <section className="relative overflow-hidden py-14 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 to-slate-900 p-8 shadow-2xl sm:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                {language === 'ru'
                  ? 'Бесплатный аудит GxP вашего объекта'
                  : language === 'en'
                    ? 'Free GxP audit of your facility'
                    : 'Obyektingizning bepul GxP auditi'}
              </h2>
              <p className="max-w-xl text-sm text-gray-300 sm:text-base">
                {language === 'ru'
                  ? 'Инженер приедет за 20 минут: замерит сигнал, найдёт слепые зоны, даст схему датчиков.'
                  : language === 'en'
                    ? 'An engineer will visit for 20 minutes: measure the signal, find blind spots, map sensor placement.'
                    : 'Muhandis 20 daqiqada keladi: signalni ölçaydi, ko‘r joylarni topadi, datchiklar sxemasini beradi.'}
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:flex-col lg:flex-row">
              <Link
                to="/quiz"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl sm:text-base"
              >
                {language === 'ru' ? 'Пройти экспресс-тест' : language === 'en' ? 'Take the express test' : 'Ekspress-testni o‘tish'}
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${SITE.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 sm:text-base"
              >
                <Phone size={18} />
                +998 (91) 676-75-67
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
