import { useLanguage } from '@/i18n/LanguageContext'
import { Reveal } from '@/components/ui/Reveal'

type Step = { title: string; desc: string }

const STEPS: Record<string, Step[]> = {
  ru: [
    { title: 'Заявка', desc: 'Оставьте заявку на сайте или позвоните — ответим за 15 минут.' },
    { title: 'Бесплатный аудит', desc: 'Замер сигнала, слепые зоны и схема датчиков за 20 минут.' },
    { title: 'Монтаж и настройка', desc: 'Датчики, шлюзы и платформа за 3–10 рабочих дней.' },
    { title: 'Валидация', desc: 'IQ / OQ / PQ и пакет документов для инспекций.' },
    { title: 'Поддержка 24/7', desc: 'Мониторинг, уведомления и 90 дней бесплатного сервиса.' },
  ],
  uz: [
    { title: 'Ariza', desc: 'Saytda ariza qoldiring yoki qo‘ng‘iroq qiling — 15 daqiqada javob beramiz.' },
    { title: 'Bepul audit', desc: 'Signal o‘lchash, ko‘r joylar va datchiklar sxemasi 20 daqiqada.' },
    { title: 'O‘rnatish va sozlash', desc: 'Datchiklar, shlyuzlar va platforma 3–10 ish kunida.' },
    { title: 'Validatsiya', desc: 'IQ / OQ / PQ va inspeksiyalar uchun hujjatlar to‘plami.' },
    { title: '24/7 yordam', desc: 'Monitoring, xabarnomalar va 90 kun bepul servis.' },
  ],
  en: [
    { title: 'Request', desc: 'Leave a request on the site or call — we reply within 15 minutes.' },
    { title: 'Free audit', desc: 'Signal measurement, blind spots and sensor map in 20 minutes.' },
    { title: 'Installation & setup', desc: 'Sensors, gateways and platform in 3–10 business days.' },
    { title: 'Validation', desc: 'IQ / OQ / PQ and an inspection-ready document package.' },
    { title: '24/7 support', desc: 'Monitoring, alerts and 90 days of free service.' },
  ],
}

/** Как проходит внедрение — 5 шагов */
export function ProcessSteps() {
  const { language } = useLanguage()
  const steps = STEPS[language] ?? STEPS.ru

  return (
    <section className="py-14 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center">
          {language === 'ru'
            ? 'Как проходит внедрение'
            : language === 'en'
              ? 'How deployment works'
              : 'Joriy qilish qanday o‘tadi'}
        </h2>
        <div className="relative grid gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
          <div
            aria-hidden="true"
            className="absolute top-6 right-[10%] left-[10%] hidden h-0.5 bg-gradient-to-r from-transparent via-blue-700/50 to-transparent lg:block"
          />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="relative text-center">
                <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-lg font-bold text-white shadow-lg shadow-blue-950/50 ring-4 ring-[#0a0f1e]">
                  {i + 1}
                </div>
                <h3 className="mb-1 text-sm font-bold sm:text-base">{s.title}</h3>
                <p className="mx-auto max-w-[220px] text-xs leading-relaxed text-gray-400 sm:text-sm">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
