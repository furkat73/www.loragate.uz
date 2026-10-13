import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  Wrench,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { SITE, useAnalytics } from '@/lib/site'
import { Link } from '@/lib/router'
import { Button } from '@/components/ui/button'

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

const WHATSAPP_URL = 'https://wa.me/998916767567'
const ROUTE_URL =
  'https://yandex.ru/maps/?rtext=~' + encodeURIComponent('Ташкент, улица Ялангач, 15')

const TOPICS = ['audit', 'consult', 'support', 'other'] as const
type Topic = (typeof TOPICS)[number]

export function Contacts() {
  const { t, language } = useLanguage()
  const { trackForm, trackPhone, trackEmail, trackLink } = useAnalytics()
  const [form, setForm] = useState({ name: '', phone: '', email: '', topic: 'audit' as Topic, message: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const topicLabel = (key: Topic) =>
    key === 'audit'
      ? t('contacts.topicAudit')
      : key === 'consult'
        ? t('contacts.topicConsult')
        : key === 'support'
          ? t('contacts.topicSupport')
          : t('contacts.topicOther')

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: name === 'phone' ? formatPhone(value.slice(0, 19)) : value })
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/send-lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, topic: topicLabel(form.topic), lang: language }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.error || `Ошибка сервера: ${res.status}`)
      trackForm('contact_form')
      setSent(true)
      setForm({ name: '', phone: '', email: '', topic: 'audit', message: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка при отправке сообщения.')
    } finally {
      setLoading(false)
    }
  }

  const inputCls =
    'w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-base text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:text-sm'

  return (
    <section id="contacts" className="overflow-hidden py-14 sm:py-16">
      <div className="container mx-auto w-full max-w-7xl px-4">
        {/* Быстрые способы связи */}
        <h2 className="mb-8 text-center">{t('contacts.quickTitle')}</h2>
        <div className="mx-auto mb-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          <a
            href="tel:+998916767567"
            onClick={() => trackPhone()}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 sm:p-6"
          >
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500 shadow-lg">
              <Phone className="text-white" size={24} />
            </span>
            <span>
              <span className="block text-lg font-bold text-white sm:text-xl">+998 (91) 676-75-67</span>
              <span className="mt-0.5 block text-xs text-gray-400">
                {t('contacts.responseTime')} · {t('contacts.workHours')}
              </span>
            </span>
          </a>
          <a
            href="tel:+998998681973"
            onClick={() => trackPhone()}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-0.5 hover:border-blue-500/50 sm:p-6"
          >
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-700 shadow-lg">
              <Phone className="text-white" size={24} />
            </span>
            <span>
              <span className="block text-lg font-bold text-white sm:text-xl">+998 (99) 868-19-73</span>
              <span className="mt-0.5 block text-xs text-gray-400">
                {language === 'ru'
                  ? 'Дополнительный номер'
                  : language === 'en'
                    ? 'Additional number'
                    : 'Qo‘shimcha raqam'}
              </span>
            </span>
          </a>
        </div>

        {/* Мессенджеры */}
        <div className="mx-auto mb-14 grid max-w-4xl gap-3 sm:grid-cols-3">
          <a
            href={SITE.social.telegram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLink('telegram')}
            className="flex items-center justify-center gap-2.5 rounded-xl bg-[#229ED9] px-5 py-4 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            <Send size={20} />
            Telegram
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLink('whatsapp')}
            className="flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-4 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLink('instagram')}
            className="flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-5 py-4 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            <span className="text-lg">📸</span>
            Instagram
          </a>
        </div>

        {/* Форма + продажи/поддержка */}
        <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl sm:p-8">
            <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">{t('contacts.formTitle')}</h3>
            {sent ? (
              <div className="py-6 text-center">
                <CheckCircle2 size={48} className="mx-auto mb-4 text-green-500" />
                <p className="mb-2 text-lg font-semibold text-white">{t('contacts.successMessage')}</p>
                <p className="mb-6 text-sm text-gray-400">
                  {language === 'ru'
                    ? 'Менеджер перезвонит вам в ближайшее время.'
                    : language === 'en'
                      ? 'A manager will call you back shortly.'
                      : 'Menejer tez orada sizga qo‘ng‘iroq qiladi.'}
                </p>
                <Button type="button" variant="outline" onClick={() => setSent(false)}>
                  {language === 'ru' ? 'Отправить ещё одну заявку' : language === 'en' ? 'Send another request' : 'Yana ariza yuborish'}
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-200" htmlFor="name">
                      {t('contacts.name')}
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={onChange}
                      placeholder={t('contacts.namePlaceholder')}
                      autoComplete="name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-200" htmlFor="phone">
                      {t('contacts.phone')}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={onChange}
                      placeholder={t('contacts.phonePlaceholder')}
                      autoComplete="tel"
                      inputMode="tel"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-200" htmlFor="email">
                      {t('contacts.emailOptional')}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder={t('contacts.emailPlaceholder')}
                      autoComplete="email"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-200" htmlFor="topic">
                      {t('contacts.topicLabel')}
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={form.topic}
                      onChange={onChange}
                      className={inputCls}
                    >
                      {TOPICS.map((key) => (
                        <option key={key} value={key}>
                          {topicLabel(key)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-200" htmlFor="message">
                    {t('contacts.messageOptional')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    placeholder={t('contacts.messagePlaceholder')}
                    className={inputCls}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-emerald-500 text-base font-bold text-white shadow-xl hover:bg-emerald-400"
                >
                  <Send className="mr-2" size={18} />
                  {loading ? '...' : t('contacts.submit')}
                </Button>
                <p className="flex items-start gap-2 text-center text-xs leading-relaxed text-gray-400">
                  <Clock size={14} className="mt-0.5 flex-shrink-0 text-emerald-400" />
                  {t('contacts.formNote')}
                </p>
                {error && <p className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</p>}
              </div>
            )}
          </form>

          <div className="flex min-w-0 flex-col gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20">
                  <Phone size={20} className="text-emerald-400" />
                </span>
                <h3 className="text-base font-bold text-white">{t('contacts.salesTitle')}</h3>
              </div>
              <a
                href="mailto:info@loragate.uz"
                onClick={() => trackEmail()}
                className="text-sm font-semibold text-blue-400 transition-colors hover:text-white"
              >
                info@loragate.uz
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700/20">
                  <Wrench size={20} className="text-blue-400" />
                </span>
                <h3 className="text-base font-bold text-white">{t('contacts.supportTitle')}</h3>
              </div>
              <a
                href="mailto:support@loragate.uz"
                onClick={() => trackEmail()}
                className="text-sm font-semibold text-blue-400 transition-colors hover:text-white"
              >
                support@loragate.uz
              </a>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
              <Clock size={20} className="mt-0.5 flex-shrink-0 text-gray-400" />
              <p className="text-sm text-gray-300">{t('contacts.workHours')}</p>
            </div>
            <div className="relative flex-1 overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-900 p-6">
              <h3 className="mb-2 text-base font-bold text-white sm:text-lg">{t('contacts.auditTitle')}</h3>
              <p className="mb-5 text-sm leading-relaxed text-gray-300">{t('contacts.auditText')}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/quiz"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold whitespace-nowrap text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
                >
                  {t('contacts.auditBtn')}
                </Link>
                <a
                  href="tel:+998916767567"
                  onClick={() => trackPhone()}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/25 px-5 py-3 text-sm font-bold whitespace-nowrap text-white transition-all hover:bg-white/10"
                >
                  <Phone size={16} />
                  +998 (91) 676-75-67
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Адрес и карта */}
        <div className="mt-12 grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 shadow-lg">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="mb-2 text-base font-bold text-white">{t('contacts.address')}</h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-300 sm:text-base">
              {t('contacts.addressValue')}
            </p>
            <a
              href={ROUTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/50 px-5 py-2.5 text-sm font-bold text-blue-300 transition-all hover:bg-blue-700 hover:text-white"
            >
              <Navigation size={16} />
              {t('contacts.routeBtn')}
            </a>
            <div className="mt-6 flex items-start gap-2 text-sm text-gray-400">
              <Mail size={16} className="mt-0.5 flex-shrink-0" />
              <span>info@loragate.uz · support@loragate.uz</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl">
            <iframe title="map" src={SITE.mapWidget} className="h-80 w-full border-0 sm:h-96" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
