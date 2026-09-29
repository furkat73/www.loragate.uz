import { useEffect, useState, type ImgHTMLAttributes } from 'react'

const FALLBACK =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback({
  src,
  alt,
  className,
  style,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false)
  const [current, setCurrent] = useState(src)

  useEffect(() => {
    setCurrent(src)
    setFailed(false)
  }, [src])

  if (failed || !current) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex h-full w-full items-center justify-center">
          <img src={FALLBACK} alt={alt || 'Изображение не найдено'} {...rest} />
        </div>
      </div>
    )
  }

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={() => {
        const h = String(current)
        const exts = ['.jpg', '.jpeg', '.png', '.webp']
        for (const g of exts) {
          if (h.endsWith(g)) {
            const base = h.slice(0, -g.length)
            for (const v of exts.filter((x) => x !== g)) {
              const next = base + v
              if (next !== current) {
                setCurrent(next)
                return
              }
            }
          }
        }
        setFailed(true)
      }}
    />
  )
}
