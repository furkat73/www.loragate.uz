import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { Link } from '@/lib/router'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'

const ITEMS = [
  { key: 'pharma', img: '/images/case-pharma.jpg', to: '/pharma' },
  { key: 'medicine', img: '/images/pharmacy.png', to: '/pharmacy' },
  { key: 'logistics', img: '/images/truck.png', to: '/logistics' },
  { key: 'foodWarehouse', img: '/images/food.png', to: '/food' },
  { key: 'freezer', img: '/images/freez.jpg', to: '/cases' },
  { key: 'greenhouse', img: '/images/heatre.jpg', to: '/cases' },
]

/** Фотолента отраслей: свайп + стрелки */
export function IndustryRail() {
  const { t, language } = useLanguage()
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  const pause = () => {
    pausedRef.current = true
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
  }

  const resume = (delayMs = 0) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    if (delayMs === 0) {
      pausedRef.current = false
      return
    }
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false
    }, delayMs)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      const el = trackRef.current
      if (!el || pausedRef.current || document.hidden) return
      const first = el.querySelector(':scope > *') as HTMLElement | null
      const step = first ? first.offsetWidth + 16 : 320
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 20
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: step, behavior: 'smooth' })
      }
    }, 3000)
    return () => {
      clearInterval(id)
      if (resumeTimer.current) clearTimeout(resumeTimer.current)
    }
  }, [])

  return (
    <section className="overflow-hidden py-14 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2>
            {language === 'ru'
              ? 'Отрасли применения'
              : language === 'en'
                ? 'Industries we serve'
                : 'Qo‘llaniladigan sohalar'}
          </h2>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Назад"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:bg-blue-700"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Вперёд"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:bg-blue-700"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-4">
        <div
          ref={trackRef}
          onPointerEnter={pause}
          onPointerLeave={() => resume()}
          onTouchStart={pause}
          onTouchEnd={() => resume(5000)}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {ITEMS.map(({ key, img, to }) => (
            <Link
              key={key}
              to={to}
              className="group relative w-[240px] flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 sm:w-[300px]"
            >
              <div className="h-44 overflow-hidden sm:h-52">
                <ImageWithFallback
                  src={img}
                  alt={t(`cases.${key}.title`)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-2">
                <span className="text-sm font-bold text-white sm:text-base">
                  {t(`cases.${key}.title`)}
                </span>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-all group-hover:bg-blue-700">
                  <ArrowRight size={16} className="text-white" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
