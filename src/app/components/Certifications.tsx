import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { ImageWithFallback } from '@/components/ui/ImageWithFallback'

export function Certifications() {
  const { t } = useLanguage()
  const items = [
    { image: '/images/sertificat2.png', alt: t('certifications.uzcert') },
    { image: '/images/sertificat 1.png', alt: t('certifications.ozst') },
    { image: '/images/sertificat2.png', alt: t('certifications.rohs') },
    { image: '/images/sertificat 1.png', alt: t('certifications.iso9001') },
    { image: '/images/sertificat 1.png', alt: t('certifications.gmp') },
  ]

  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState(0)
  const gap = 24

  const getVisible = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  const maxIndex = Math.max(0, items.length - getVisible())

  const updateLayout = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const visible = getVisible()
    const w = (track.offsetWidth - gap * (visible - 1)) / visible
    setCardWidth(w)
  }, [])

  useEffect(() => {
    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [updateLayout])

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1))

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1))
    }, 4000)
    return () => clearInterval(id)
  }, [maxIndex])

  return (
    <section id="certifications" className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4">{t('certifications.title')}</h2>
          <p className="mx-auto mb-6 max-w-2xl text-gray-600">{t('certifications.subtitle')}</p>
          <div className="mx-auto mt-8 max-w-4xl rounded-xl border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 to-violet-50 p-6">
            <p className="text-base leading-relaxed font-medium text-gray-800 sm:text-lg">
              {t('certifications.description')}
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl disabled:opacity-30 disabled:hover:bg-white disabled:hover:shadow-lg sm:-left-5 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700 sm:h-6 sm:w-6" />
          </button>

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ gap: `${gap}px` }}
            >
              {items.map((item, i) => (
                <div
                  key={`${item.alt}-${i}`}
                  className="flex-shrink-0 transition-opacity duration-500"
                  style={{
                    width: cardWidth || '33.333%',
                    opacity: i >= current && i < current + getVisible() ? 1 : 0.4,
                  }}
                >
                  <div className="group relative">
                    <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.alt}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl disabled:opacity-30 disabled:hover:bg-white disabled:hover:shadow-lg sm:-right-5 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5 text-gray-700 sm:h-6 sm:w-6" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-indigo-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
