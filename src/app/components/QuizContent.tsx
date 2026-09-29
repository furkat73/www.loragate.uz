import { useState, useCallback } from 'react'
import { ChevronRight, ChevronLeft, Check, Shield, Clock, FileCheck, Send, Phone, User, Building2, Download, CalendarCheck } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

type QuizStep = 'banner' | 'q1' | 'q2' | 'q3' | 'form' | 'thanks'

type QuizAnswers = {
  q1: string
  q2: string
  q3: string
}

type FormData = {
  name: string
  phone: string
  objectType: string
}

const QUESTION_LABELS: Record<string, Record<string, string>> = {
  ru: {
    'manual': 'Вручную в бумажные журналы',
    'logger': 'Автономными логгерами-флешками',
    'auto': 'Автоматической беспроводной системой 24/7',
    'other': 'Другой вариант / Пока не ведется',
    'morning': 'Узнаем только утром, когда придем на работу',
    'duty': 'Есть дежурный сотрудник / сторож',
    'notify': 'Система сразу присылает SMS / Telegram-уведомление',
    'yes_docs': 'Да, полный пакет валидационных документов готов',
    'no_docs': 'Нет, документы отсутствуют или нужны по запросу',
    'unknown': 'Не знаем, что это / Нужна консультация эксперта',
  },
  uz: {
    'manual': 'Qo\'lda qog\'oz jurnallarga yoziladi',
    'logger': 'Avtomatik loggerlar (flashka) orqali',
    'auto': 'Avtomatik simsiz tizim 24/7',
    'other': 'Boshqa variant / Hali yuritilmayapti',
    'morning': 'Faqat ertalab ishga kelganimizda bilamiz',
    'duty': 'Navbatchi xodim / qorovul bor',
    'notify': 'Tizim darhol SMS / Telegram xabar yuboradi',
    'yes_docs': 'Ha, to\'liq hujjatlar to\'plami tayyor',
    'no_docs': 'Yo\'q, hujjatlar yo\'q yoki so\'rash kerak',
    'unknown': 'Bilmaymiz / Ekspert maslahati kerak',
  },
  en: {
    'manual': 'Manually in paper logs',
    'logger': 'With standalone USB loggers',
    'auto': 'With an automatic wireless 24/7 system',
    'other': 'Another option / Not tracked yet',
    'morning': 'Only in the morning when we arrive at work',
    'duty': 'There is an on-duty employee / guard',
    'notify': 'The system instantly sends SMS / Telegram alerts',
    'yes_docs': 'Yes, the full validation package is ready',
    'no_docs': 'No, documents are missing or provided on request',
    'unknown': 'Do not know / Need an expert consultation',
  },
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '')
  if (digits.length === 0) return ''
  let formatted = '+998'
  const rest = digits.startsWith('998') ? digits.slice(3) : digits
  if (rest.length > 0) formatted += ' (' + rest.slice(0, 2)
  if (rest.length >= 2) formatted += ') '
  if (rest.length > 2) formatted += rest.slice(2, 5)
  if (rest.length >= 5) formatted += '-'
  if (rest.length > 5) formatted += rest.slice(5, 7)
  if (rest.length >= 7) formatted += '-'
  if (rest.length > 7) formatted += rest.slice(7, 9)
  return formatted
}

type Props = {
  onStepChange?: (step: QuizStep) => void
}

export function QuizContent({ onStepChange }: Props) {
  const { language } = useLanguage()
  const [step, setStep] = useState<QuizStep>('banner')
  const [answers, setAnswers] = useState<QuizAnswers>({ q1: '', q2: '', q3: '' })
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', objectType: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [leadId, setLeadId] = useState<number | null>(null)
  const [auditSending, setAuditSending] = useState(false)
  const [auditConfirmed, setAuditConfirmed] = useState(false)

  const q = QUESTION_LABELS[language] || QUESTION_LABELS.ru

  const goNext = useCallback((next: QuizStep) => {
    setStep(next)
    onStepChange?.(next)
  }, [onStepChange])

  const handleAnswer = useCallback((question: keyof QuizAnswers, answer: string) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }))
    setTimeout(() => {
      if (question === 'q1') goNext('q2')
      else if (question === 'q2') goNext('q3')
      else if (question === 'q3') goNext('form')
    }, 300)
  }, [goNext])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d]/g, '')
    const limited = raw.slice(0, 12)
    setFormData((prev) => ({ ...prev, phone: formatPhone(limited) }))
  }

  const handleSubmit = async () => {
    if (!formData.name.trim() || !formData.phone.replace(/\D/g, '').includes('998') || !formData.objectType) {
      setError(language === 'ru' ? 'Заполните все поля' : language === 'en' ? 'Please fill in all fields' : 'Barcha maydonlarni to\'ldiring')
      return
    }
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/send-quiz.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          objectType: formData.objectType,
          answers: {
            q1: q[answers.q1] || answers.q1,
            q2: q[answers.q2] || answers.q2,
            q3: q[answers.q3] || answers.q3,
          },
          lang: language,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
        if (typeof data.lead_id === 'number') setLeadId(data.lead_id)
        goNext('thanks')
      } else {
        setError(data.error || (language === 'en' ? 'Submission error' : 'Ошибка отправки'))
      }
    } catch {
      setError(language === 'ru' ? 'Ошибка сети. Попробуйте позже.' : language === 'en' ? 'Network error. Please try again later.' : 'Tarmoq xatosi. Keyinroq urinib ko\'ring.')
    } finally {
      setSending(false)
    }
  }

  const handleConfirmAudit = async () => {
    if (leadId === null || auditConfirmed) {
      setAuditConfirmed(true)
      return
    }
    setAuditSending(true)
    try {
      await fetch('/api/confirm-audit.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead_id: leadId }),
      })
    } catch {
      // подтверждение показываем в любом случае — заявка уже сохранена
    } finally {
      setAuditSending(false)
      setAuditConfirmed(true)
    }
  }

  const progress = (() => {
    const steps: QuizStep[] = ['banner', 'q1', 'q2', 'q3', 'form', 'thanks']
    const idx = steps.indexOf(step)
    if (idx <= 0) return 0
    if (step === 'thanks') return 100
    return Math.round((idx / 4) * 100)
  })()

  const currentQ = step === 'q1' ? 1 : step === 'q2' ? 2 : step === 'q3' ? 3 : 0

  const quizApi = {
    q1: {
      question: language === 'ru'
        ? 'Как сейчас фиксируется температура и влажность на вашем объекте?'
        : language === 'en'
          ? 'How are temperature and humidity currently recorded at your facility?'
          : 'Hozirgi vaqtda ob\'yektingizda harorat va namlik qanday qayd etiladi?',
      options: [
        { key: 'manual', label: q.manual },
        { key: 'logger', label: q.logger },
        { key: 'auto', label: q.auto },
        { key: 'other', label: q.other },
      ],
    },
    q2: {
      question: language === 'ru'
        ? 'Что происходит, если ночью или в выходные отключится кондиционер/электричество?'
        : language === 'en'
          ? 'What happens if the air conditioning or power goes off at night or on weekends?'
          : 'Kechasi yoki dam olish kunlarida konditsioner/elektr uzilsa nima bo\'ladi?',
      options: [
        { key: 'morning', label: q.morning },
        { key: 'duty', label: q.duty },
        { key: 'notify', label: q.notify },
      ],
    },
    q3: {
      question: language === 'ru'
        ? 'Есть ли у вас подготовленный комплект документов по Валидации (URS, FS, DQ, OQ)?'
        : language === 'en'
          ? 'Do you have a prepared Validation document package (URS, FS, DQ, OQ)?'
          : 'Sizda Validatsiya hujjatlari (URS, FS, DQ, OQ) to\'plami tayyormi?',
      options: [
        { key: 'yes_docs', label: q.yes_docs },
        { key: 'no_docs', label: q.no_docs },
        { key: 'unknown', label: q.unknown },
      ],
    },
  }

  const renderProgress = () => (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
        <span>
          {language === 'ru' ? `Вопрос ${currentQ} из 3` : language === 'en' ? `Question ${currentQ} of 3` : `Savol ${currentQ} ta 3 dan`}
        </span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )

  const renderBanner = () => (
    <div className="text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
        <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-600" />
        {language === 'ru' ? 'Бесплатный тест' : language === 'en' ? 'Free test' : 'Bepul test'}
      </div>
      <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
        {language === 'ru'
          ? 'Готов ли ваш фармсклад или аптека к проверке GxP / GDP на 100%?'
          : language === 'en'
            ? 'Is your pharma warehouse or pharmacy 100% ready for a GxP / GDP inspection?'
            : 'Sizning dorixona yoki aptekangiz GxP / GDP tekshiruviga 100% tayyormi?'}
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-gray-600">
        {language === 'ru'
          ? 'Пройдите экспресс-тест из 3 вопросов за 1 минуту, выявите скрытые риски в зонах хранения и получите Чек-лист подготовки к фарминспекции.'
          : language === 'en'
            ? 'Take a 1-minute 3-question express test, uncover hidden storage-zone risks and get the pharma inspection readiness checklist.'
            : '3 ta savoldan iborat ekspress-testni 1 daqiqada o\'ting, saqlash zonalaridagi yashirin xavflarni aniqlang va dorixona tekshiruviga tayyorgarlik chek-listini oling.'}
      </p>
      <div className="mb-8 flex flex-col items-center gap-4 text-left sm:flex-row sm:justify-center sm:gap-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-100">
            <Clock className="h-5 w-5 text-yellow-600" />
          </div>
          <span className="text-sm font-medium text-gray-700">
            {language === 'ru' ? 'Занимает всего 1 минуту' : language === 'en' ? 'Takes just 1 minute' : 'Faqat 1 daqiqa vaqt oladi'}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
            <FileCheck className="h-5 w-5 text-green-600" />
          </div>
          <span className="text-sm font-medium text-gray-700">
            {language === 'ru' ? 'Бесплатный чек-лист GxP в подарок' : language === 'en' ? 'Free GxP checklist as a gift' : 'Bepul GxP chek-listi sovg\'a sifatida'}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
            <Shield className="h-5 w-5 text-blue-600" />
          </div>
          <span className="text-sm font-medium text-gray-700">
            {language === 'ru' ? 'Без обязательств по покупке' : language === 'en' ? 'No purchase obligations' : 'Sotib olish majburiyatisiz'}
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => goNext('q1')}
        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:from-indigo-700 hover:to-violet-700 hover:shadow-xl"
      >
        {language === 'ru' ? 'Пройти экспресс-тест и проверить объект' : language === 'en' ? 'Take the express test and check your facility' : 'Ekspress-test o\'ting va ob\'yektni tekshiring'}
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )

  const renderQuestion = (key: 'q1' | 'q2' | 'q3') => {
    const qData = quizApi[key]
    const selected = answers[key]
    return (
      <div>
        {renderProgress()}
        <h3 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">{qData.question}</h3>
        <div className="space-y-3">
          {qData.options.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => handleAnswer(key, opt.key)}
              className={`group flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-all duration-200 sm:p-5 ${
                selected === opt.key
                  ? 'border-indigo-600 bg-indigo-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50 hover:shadow-sm'
              }`}
            >
              <div
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                  selected === opt.key
                    ? 'border-indigo-600 bg-indigo-600'
                    : 'border-gray-300 group-hover:border-indigo-400'
                }`}
              >
                {selected === opt.key && <Check className="h-3.5 w-3.5 text-white" />}
              </div>
              <span className="text-sm font-medium text-gray-700 sm:text-base">{opt.label}</span>
              <ChevronRight className="ml-auto h-4 w-4 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
            </button>
          ))}
        </div>
        {key !== 'q1' && (
          <button
            type="button"
            onClick={() => goNext(key === 'q2' ? 'q1' : 'q2')}
            className="mt-6 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600"
          >
            <ChevronLeft className="h-4 w-4" />
            {language === 'ru' ? 'Назад' : language === 'en' ? 'Back' : 'Orqaga'}
          </button>
        )}
      </div>
    )
  }

  const renderForm = () => (
    <div>
      {renderProgress()}
      <div className="mb-6 rounded-xl bg-green-50 p-4 text-center">
        <p className="text-sm font-medium text-green-800">
          {language === 'ru'
            ? 'Спасибо! На основе ваших ответов мы сформировали персональный отчет о рисках объекта и Чек-лист подготовки к фарминспекции.'
            : language === 'en'
              ? 'Thank you! Based on your answers we have prepared a personal facility risk report and the pharma inspection readiness checklist.'
              : 'Rahmat! Javoblaringiz asosida ob\'yektingiz xavflari bo\'yicha shaxsiy hisobot va dorixona tekshiruviga tayyorgarlik chek-listini shakllantirdik.'}
        </p>
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl">
        {language === 'ru' ? 'Укажите, куда отправить результаты и Чек-лист GxP:' : language === 'en' ? 'Tell us where to send the results and the GxP checklist:' : 'Natijalar va GxP Chek-listini qayerga yuborishni ko\'rsating:'}
      </h3>
      <p className="mb-6 text-sm text-gray-500">
        {language === 'ru' ? 'Мы свяжемся с вами в течение 15 минут' : language === 'en' ? 'We will contact you within 15 minutes' : 'Biz 15 daqiqa ichida siz bilan bog\'lanamiz'}
      </p>

      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            {language === 'ru' ? 'Имя / Название компании' : language === 'en' ? 'Name / Company' : 'Ism / Kompaniya nomi'}
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder={language === 'ru' ? 'Имя или Название организации' : language === 'en' ? 'Name or organization' : 'Ism yoki Tashkilot nomi'}
              className="h-12 w-full rounded-xl border-2 border-gray-200 bg-white pl-11 pr-4 text-gray-900 transition-colors focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            {language === 'ru' ? 'Номер телефона / Telegram' : language === 'en' ? 'Phone number / Telegram' : 'Telefon raqami / Telegram'}
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="+998 (__) ___-__-__"
              className="h-12 w-full rounded-xl border-2 border-gray-200 bg-white pl-11 pr-4 text-gray-900 transition-colors focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            {language === 'ru' ? 'Тип объекта' : language === 'en' ? 'Facility type' : 'Ob\'yekt turi'}
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <select
              value={formData.objectType}
              onChange={(e) => setFormData((prev) => ({ ...prev, objectType: e.target.value }))}
              className="h-12 w-full appearance-none rounded-xl border-2 border-gray-200 bg-white pl-11 pr-10 text-gray-900 transition-colors focus:border-indigo-500 focus:outline-none"
            >
              <option value="">
                {language === 'ru' ? 'Выберите тип объекта' : language === 'en' ? 'Select facility type' : 'Ob\'yekt turini tanlang'}
              </option>
              <option value="pharma_warehouse">
                {language === 'ru' ? 'Фармацевтический склад' : language === 'en' ? 'Pharmaceutical warehouse' : 'Dorixona ombori'}
              </option>
              <option value="pharmacy">
                {language === 'ru' ? 'Аптека / Аптечная сеть' : language === 'en' ? 'Pharmacy / Pharmacy chain' : 'Dorixona / Dorixona tarmog\'i'}
              </option>
              <option value="food_production">
                {language === 'ru' ? 'Пищевое / Производственное помещение' : language === 'en' ? 'Food / Production facility' : 'Oziq-ovqat / Ishlab chiqarish binosi'}
              </option>
            </select>
            <ChevronRight className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-gray-400" />
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-600">{error}</div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={sending || sent}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:from-indigo-700 hover:to-violet-700 hover:shadow-xl disabled:opacity-50 sm:text-lg"
      >
        <Send className="h-5 w-5" />
        {sending
          ? (language === 'ru' ? 'Отправка...' : language === 'en' ? 'Sending...' : 'Yuborilmoqda...')
          : (language === 'ru' ? 'Получить отчет и Чек-лист GxP' : language === 'en' ? 'Get the report and GxP checklist' : 'Hisobot va GxP Chek-listini olish')}
      </button>

      <p className="mt-3 text-center text-xs text-gray-400">
        {language === 'ru'
          ? '🔒 Нажимая кнопку, вы даете согласие на обработку персональных данных. Мы не рассылаем спам.'
          : language === 'en'
            ? '🔒 By clicking the button you consent to personal data processing. We never send spam.'
            : '🔒 Tugmani bosish orqali siz shaxsiy ma\'lumotlarni qayta ishlashga rozilik berasiz. Biz spam yubormaymiz.'}
      </p>

      <button
        type="button"
        onClick={() => goNext('q3')}
        className="mt-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600"
      >
        <ChevronLeft className="h-4 w-4" />
        {language === 'ru' ? 'Назад' : language === 'en' ? 'Back' : 'Orqaga'}
      </button>
    </div>
  )

  const renderThanks = () => (
    <div className="text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
        {language === 'ru' ? 'Заявка успешно принята!' : language === 'en' ? 'Request received!' : 'Ariza muvaffaqiyatli qabul qilindi!'}
      </h2>
      <p className="mb-6 text-gray-600">
        {language === 'ru'
          ? 'Мы свяжемся с вами в течение 15 минут для уточнения деталей.'
          : language === 'en'
            ? 'We will contact you within 15 minutes to clarify the details.'
            : 'Biz tafsilotlarni aniqlash uchun 15 daqiqa ichida siz bilan bog\'lanamiz.'}
      </p>

      <a
        href="/checklist-gxp.pdf"
        download="Чек-лист GxP Lora Gate.pdf"
        className="mb-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-indigo-600 bg-white px-6 py-4 text-base font-bold text-indigo-600 shadow-sm transition-all hover:bg-indigo-50 hover:shadow-md sm:w-auto sm:text-lg"
      >
        <Download className="h-5 w-5" />
        {language === 'ru' ? 'Скачать Чек-лист GxP (PDF)' : language === 'en' ? 'Download the GxP checklist (PDF)' : 'GxP Chek-listini yuklab olish (PDF)'}
      </a>

      <div className="mx-auto max-w-lg overflow-hidden rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-violet-50">
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-4">
          <span className="text-lg font-bold text-white">
            {language === 'ru' ? 'СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ' : language === 'en' ? 'SPECIAL OFFER' : 'MAXSUS TAKLIF'}
          </span>
        </div>
        <div className="p-6">
          <p className="mb-4 text-base font-semibold text-gray-900 sm:text-lg">
            {language === 'ru'
              ? 'Запишитесь на бесплатный выездной аудит зон хранения от ООО "Lora Gate"'
              : language === 'en'
                ? 'Book a free on-site audit of your storage zones from Lora Gate LLC'
                : '"Lora Gate" MChJ dan saqlash zonalarining bepul chiqish auditiga yoziling'}
          </p>
          <div className="mb-6 space-y-3 text-left">
              <p className="text-sm text-gray-600">
                {language === 'ru'
                  ? 'Наш инженер бесплатно приедет на ваш объект:'
                  : language === 'en'
                    ? 'Our engineer will visit your facility for free:'
                    : 'Mutaxassisimiz ob\'yektingizga bepul keladi:'}
              </p>
            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="text-sm text-gray-700">
                {language === 'ru' ? 'Замерит радиосигнал LoRaWAN во всех зонах' : language === 'en' ? 'Measure the LoRaWAN radio signal in all zones' : 'Barcha zonalarda LoRaWAN radio signallarini o\'lchaydi'}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="text-sm text-gray-700">
                {language === 'ru' ? 'Выявит температурные «слепые зоны» и риски перегрева/переохлаждения' : language === 'en' ? 'Reveal temperature blind spots and overheat/overcool risks' : 'Harorat "ko\'r joylari" va issiq/isitish xavflarini aniqlaydi'}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="text-sm text-gray-700">
                {language === 'ru' ? 'Подготовит точную схему расстановки датчиков' : language === 'en' ? 'Prepare an exact sensor placement map' : 'Datchiklarning aniq joylashuvi sxemasini tayyorlaydi'}
              </span>
            </div>
          </div>
          <p className="mb-4 text-xs text-gray-500">
            {language === 'ru'
              ? 'Аудит занимает 20 минут и ни к чему вас не обязывает.'
              : language === 'en'
                ? 'The audit takes 20 minutes and obliges you to nothing.'
                : 'Audit 20 daqiqa davom etadi va hech qanday majburiyat yuklamaydi.'}
          </p>
          {auditConfirmed ? (
            <div className="rounded-xl bg-green-50 p-4 text-center">
              <p className="text-base font-bold text-green-800">
                {language === 'ru' ? '✅ Запись подтверждена!' : language === 'en' ? '✅ Booking confirmed!' : '✅ Yozuv tasdiqlandi!'}
              </p>
              <p className="mt-1 text-sm text-green-700">
                {language === 'ru'
                  ? 'Менеджер свяжется с вами в течение 15 минут для согласования времени.'
                  : language === 'en'
                    ? 'A manager will contact you within 15 minutes to agree on a time.'
                    : 'Menejer vaqtni kelishish uchun 15 daqiqa ichida siz bilan bog\'lanadi.'}
              </p>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleConfirmAudit}
              disabled={auditSending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:from-green-600 hover:to-emerald-700 hover:shadow-xl disabled:opacity-50 sm:text-lg"
            >
              <CalendarCheck className="h-5 w-5" />
              {auditSending
                ? (language === 'ru' ? 'Подтверждение...' : language === 'en' ? 'Confirming...' : 'Tasdiqlanmoqda...')
                : (language === 'ru' ? 'Подтвердить запись на бесплатный аудит' : language === 'en' ? 'Confirm free audit booking' : 'Bepul auditga yozuvni tasdiqlash')}
            </button>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {step === 'banner' && renderBanner()}
      {step === 'q1' && renderQuestion('q1')}
      {step === 'q2' && renderQuestion('q2')}
      {step === 'q3' && renderQuestion('q3')}
      {step === 'form' && renderForm()}
      {step === 'thanks' && renderThanks()}
    </>
  )
}
