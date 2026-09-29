import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Reveal } from '@/components/ui/Reveal'

export function Faq() {
  const { language } = useLanguage()
  const [open, setOpen] = useState<number | null>(0)

  const QA: Record<string, { q: string; a: string }[]> = {
    ru: [
          {
            q: 'Сколько стоит система мониторинга?',
            a: 'Стоимость зависит от количества зон и датчиков. Запишитесь на бесплатный аудит — инженер оценит объект и подготовит точную смету без скрытых платежей.',
          },
          {
            q: 'Сколько времени занимает внедрение?',
            a: 'Обычно от 3 до 10 рабочих дней: монтаж датчиков, настройка платформы, картирование зон и обучение персонала.',
          },
          {
            q: 'Примет ли систему инспектор при проверке GMP / GDP?',
            a: 'Да. Мы выполняем квалификацию IQ / OQ / PQ и передаём полный пакет валидационных документов. Оборудование внесено в Госреестр средств измерений.',
          },
          {
            q: 'Что входит в бесплатный аудит?',
            a: 'Выезд инженера на 20 минут: замер радиосигнала LoRaWAN во всех зонах, выявление температурных «слепых зон» и схема расстановки датчиков. Ни к чему не обязывает.',
          },
          {
            q: 'Что будет при отключении электричества или интернета?',
            a: 'Шлюзы имеют резервное питание, датчики хранят данные локально и дозагружают их при восстановлении связи. Ни одно измерение не теряется.',
          },
          {
            q: 'Какая техническая поддержка включена?',
            a: '90 дней бесплатной поддержки после внедрения и круглосуточный мониторинг 24/7. Локальная команда в Узбекистане с выездом на объект.',
          },
        ],
    en: [
          {
            q: 'How much does the monitoring system cost?',
            a: 'The price depends on the number of zones and sensors. Book a free audit — an engineer will assess your facility and prepare an exact quote with no hidden fees.',
          },
          {
            q: 'How long does deployment take?',
            a: 'Usually 3–10 business days: sensor mounting, platform setup, zone mapping and staff training.',
          },
          {
            q: 'Will an inspector accept the system during a GMP / GDP audit?',
            a: 'Yes. We perform IQ / OQ / PQ qualification and hand over a full validation document package. The equipment is listed in the State Register of Measuring Instruments.',
          },
          {
            q: 'What is included in the free audit?',
            a: 'A 20-minute engineer visit: LoRaWAN signal measurement in all zones, detection of temperature blind spots and a sensor placement map. No obligations.',
          },
          {
            q: 'What happens if power or internet goes down?',
            a: 'Gateways have backup power, sensors store data locally and upload it once the connection is restored. No measurement is ever lost.',
          },
          {
            q: 'What technical support is included?',
            a: '90 days of free support after deployment and 24/7 monitoring. A local team in Uzbekistan with on-site visits.',
          },
        ],
    uz: [
          {
            q: 'Monitoring tizimi qancha turadi?',
            a: 'Narx zonalar va datchiklar soniga bog‘liq. Bepul auditga yoziling — muhandis ob‘yektni baholab, yashirin to‘lovlarsiz aniq smeta tayyorlaydi.',
          },
          {
            q: 'Joriy qilish qancha vaqt oladi?',
            a: 'Odatda 3–10 ish kuni: datchiklarni o‘rnatish, platformani sozlash, zonalarni kartalash va xodimlarni o‘qitish.',
          },
          {
            q: 'GMP / GDP tekshiruvida inspektor tizimni qabul qiladimi?',
            a: 'Ha. Biz IQ / OQ / PQ kvalifikatsiyani bajaramiz va to‘liq validatsiya hujjatlarini topshiramiz. Uskunalar O‘lchov vositalari Davlat reyestriga kiritilgan.',
          },
          {
            q: 'Bepul audit nimalarni o‘z ichiga oladi?',
            a: 'Muhandisning 20 daqiqalik chiqishi: barcha zonalarda LoRaWAN signalini o‘lchash, harorat «ko‘r joylari»ni aniqlash va datchiklar sxemasi. Hech qanday majburiyat yo‘q.',
          },
          {
            q: 'Elektr yoki internet uzilganda nima bo‘ladi?',
            a: 'Shlyuzlar zaxira quvvatga ega, datchiklar ma’lumotlarni lokal saqlaydi va aloqa tiklanganda yuklaydi. Birorta o‘lchov yo‘qolmaydi.',
          },
          {
            q: 'Qanday texnik yordam ko‘rsatiladi?',
            a: 'Joriy qilishdan keyin 90 kun bepul yordam va 24/7 monitoring. O‘zbekistondagi mahalliy jamoa ob‘yektga chiqadi.',
          },
        ],
  }

  const items = QA[language] ?? QA.ru

  return (
    <section className="py-14 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center">
          {language === 'ru' ? 'Частые вопросы' : language === 'en' ? 'Frequently asked questions' : 'Ko‘p so‘raladigan savollar'}
        </h2>
        <div className="mx-auto max-w-3xl space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={Math.min(i, 5) * 60}>
                <div
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    isOpen ? 'border-indigo-600' : 'border-gray-200'
                  } bg-white shadow-sm`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-gray-900 sm:text-base">{item.q}</span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-blue-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-4 text-sm leading-relaxed text-gray-600 sm:px-5 sm:pb-5">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
