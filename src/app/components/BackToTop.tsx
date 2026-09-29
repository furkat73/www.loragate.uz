import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

/** Плавающая кнопка «наверх» — появляется после прокрутки */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Наверх"
      className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-slate-900/90 text-white shadow-2xl backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-blue-700"
    >
      <ArrowUp size={20} />
    </button>
  )
}
