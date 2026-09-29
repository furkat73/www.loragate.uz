import { ArrowRight, FileCheck } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { useAnalytics } from '@/lib/site'
import { Button } from '@/components/ui/button'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { useRoute } from '@/lib/router'

type Props = {
  onOpenQuiz?: () => void
}

export function Hero({ onOpenQuiz }: Props) {
  const { t, language } = useLanguage()
  const { trackClick } = useAnalytics()
  const { navigate } = useRoute()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    trackClick(`hero_button_${id}`, 'hero')
  }

  const advantages = [
    t('hero.advantage1'),
    t('hero.advantage2'),
    t('hero.advantage3'),
    t('hero.advantage4'),
    t('hero.advantage5'),
  ]

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-28 md:pb-20 md:pt-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-indigo-950/55"
      />
      <div className="absolute right-0 top-0 z-0 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute bottom-0 left-0 z-0 h-64 w-64 rounded-full bg-violet-200/20 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4 text-left sm:space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-indigo-200 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
              <span className="h-1.5 w-1.5 flex-shrink-0 animate-pulse rounded-full bg-indigo-600 sm:h-2 sm:w-2" />
              <span className="break-words">{t('hero.badge')}</span>
            </div>

            <h1 className="text-2xl leading-tight font-bold text-white drop-shadow-md sm:text-3xl md:text-4xl lg:text-5xl">
              {t('hero.title')}
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-gray-200 sm:text-lg">
              {t('hero.description')}
            </p>

            <div className="flex flex-col flex-wrap gap-3 pt-2 sm:flex-row sm:justify-start sm:gap-4 sm:pt-4">
              <button
                type="button"
                onClick={() => {
                  trackClick('quiz_button', 'hero')
                  if (onOpenQuiz) {
                    onOpenQuiz()
                  } else {
                    scrollTo('quiz')
                  }
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-green-950/40 transition-all hover:-translate-y-0.5 hover:from-green-700 hover:to-emerald-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                <FileCheck className="mr-1" size={18} />
                {language === 'ru' ? 'Бесплатный аудит GxP' : language === 'en' ? 'Free GxP audit' : 'Bepul audit GxP'}
              </button>
              <Button
                size="lg"
                onClick={() => navigate('/contacts')}
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-sm text-white shadow-lg transition-all hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                {t('hero.orderButton')}
                <ArrowRight className="ml-2" size={18} />
              </Button>

            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
              {advantages.map((text, i) => (
                <div
                  key={text}
                  className={`flex-col gap-3 text-left sm:flex-row sm:flex-wrap sm:gap-4 ${i >= 3 ? 'hidden md:flex' : 'flex'}`}
                >
                  <div className="flex items-start gap-2 text-xs text-gray-100 sm:items-center sm:text-sm">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mt-0 sm:h-6 sm:w-6">
                      <svg
                        className="h-3 w-3 text-green-600 sm:h-4 sm:w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="break-words">{text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid max-w-2xl grid-cols-3 gap-2 pt-4 sm:gap-4 sm:pt-6">
              {[
                { v: '150+', l: t('hero.statsClients') },
                { v: '99.9%', l: t('hero.statsReliability') },
                { v: '24/7', l: t('hero.statsSupport') },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-lg border border-gray-100 bg-white p-2 text-center shadow-sm sm:p-4"
                >
                  <div className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-lg font-bold text-transparent sm:text-2xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-[10px] text-gray-600 sm:text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl border-4 border-white shadow-2xl shadow-blue-950/50 ring-1 ring-white/10 sm:rounded-2xl sm:border-8">
              <ImageWithFallback
                src="/images/dashboard.png"
                alt="Дашборд системы мониторинга температуры и влажности Lora Gate"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent to-[#0a0f1e]"
      />
    </section>
  )
}
