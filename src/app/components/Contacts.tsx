import { useState, type ChangeEvent, type FormEvent } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { SITE, useAnalytics } from '@/lib/site'
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

export function Contacts() {
  const { t, language } = useLanguage()
  const { trackForm, trackPhone, trackEmail, trackLink } = useAnalytics()
  const [form, setForm] = useState({ name: '', phone: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        body: JSON.stringify({ ...form, lang: language }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.error || `Ошибка сервера: ${res.status}`)
      trackForm('contact_form')
      setSent(true)
      setForm({ name: '', phone: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка при отправке сообщения.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacts" className="overflow-hidden bg-gradient-to-br from-gray-50 to-indigo-50 py-20">
      <div className="container mx-auto w-full max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4">{t('contacts.title')}</h2>
          <p className="text-gray-600">{t('contacts.subtitle')}</p>
        </div>

        <div className="grid w-full gap-12 lg:grid-cols-2">
          <div className="w-full min-w-0">
            <div className="mb-8 rounded-xl bg-white p-8 shadow-lg">
              <h3 className="mb-6">{t('contacts.ourContacts')}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-100">
                    <MapPin className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <p>{t('contacts.address')}</p>
                    <p className="text-gray-600">{t('contacts.addressValue')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-100">
                    <Phone className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <p>{t('contacts.phone')}</p>
                    <div className="flex flex-wrap gap-2 text-gray-600">
                      <a href="tel:+998916767567" className="underline transition-colors hover:text-indigo-600" onClick={() => trackPhone()}>
                        +998 (91) 676-75-67
                      </a>
                      <span>,</span>
                      <a href="tel:+998998681973" className="underline transition-colors hover:text-indigo-600" onClick={() => trackPhone()}>
                        +998 (99) 868-19-73
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-100">
                    <Mail className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <p>{t('contacts.email')}</p>
                    <div className="flex flex-wrap gap-2 text-gray-600">
                      <a href="mailto:info@loragate.uz" className="underline transition-colors hover:text-indigo-600" onClick={() => trackEmail()}>
                        info@loragate.uz
                      </a>
                      <span>,</span>
                      <a href="mailto:support@loragate.uz" className="underline transition-colors hover:text-indigo-600" onClick={() => trackEmail()}>
                        support@loragate.uz
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3">{t('contacts.socialMedia')}</p>
                  <div className="flex gap-3">
                    <a href={SITE.social.telegram} target="_blank" rel="noopener noreferrer" onClick={() => trackLink('telegram')} className="rounded-lg bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600">
                      Telegram
                    </a>
                    <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" onClick={() => trackLink('instagram')} className="rounded-lg bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600">
                      Instagram
                    </a>
                    <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" onClick={() => trackLink('facebook')} className="rounded-lg bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <h4 className="border-b px-6 py-4 font-semibold">{t('contacts.mapTitle')}</h4>
              <iframe title="map" src={SITE.mapWidget} className="h-64 w-full border-0" loading="lazy" />
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl bg-white p-8 shadow-lg">
            <h3 className="mb-6">{t('contacts.formTitle')}</h3>
            {sent ? (
              <div className="py-6 text-center">
                <CheckCircle2 size={48} className="mx-auto mb-4 text-green-600" />
                <p className="mb-2 text-lg font-semibold text-gray-900">{t('contacts.successMessage')}</p>
                <p className="mb-6 text-sm text-gray-600">
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
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="name">{t('contacts.name')}</label>
                <input id="name" name="name" required value={form.name} onChange={onChange} placeholder={t('contacts.namePlaceholder')} autoComplete="name" className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="phone">{t('contacts.phone')}</label>
                <input id="phone" name="phone" type="tel" required value={form.phone} onChange={onChange} placeholder={t('contacts.phonePlaceholder')} autoComplete="tel" inputMode="tel" className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
              </div>
              <Button type="submit" size="lg" disabled={loading} className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
                <Send className="mr-2" size={18} />
                {loading ? '...' : t('contacts.submit')}
              </Button>
              {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
            </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
