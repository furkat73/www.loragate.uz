import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** Задержка перед появлением, мс (для каскада) */
  delay?: number
  /** Смещение снизу вверх, px */
  y?: number
  className?: string
}

export function Reveal({ children, delay = 0, y = 28, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const style = {
    transitionDelay: `${delay}ms`,
    '--reveal-y': `${y}px`,
  } as CSSProperties

  return (
    <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`} style={style}>
      {children}
    </div>
  )
}
