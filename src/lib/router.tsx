import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react'

export function normalizePath(path: string): string {
  let p = path.split('?')[0].split('#')[0]
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1)
  if (p === '') p = '/'
  return p
}

type RouterValue = {
  path: string
  navigate: (to: string) => void
}

const RouterCtx = createContext<RouterValue>({ path: '/', navigate: () => {} })

export function Router({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() =>
    typeof window === 'undefined' ? '/' : normalizePath(window.location.pathname),
  )

  useEffect(() => {
    const onPop = () => setPath(normalizePath(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback(
    (to: string) => {
      const p = normalizePath(to)
      if (p !== path) {
        window.history.pushState(null, '', p)
        setPath(p)
      }
      window.scrollTo(0, 0)
    },
    [path],
  )

  return <RouterCtx.Provider value={{ path, navigate }}>{children}</RouterCtx.Provider>
}

export function useRoute(): RouterValue {
  return useContext(RouterCtx)
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
  children: ReactNode
}

/** Внутренняя ссылка SPA (без перезагрузки страницы) */
export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useRoute()
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    if (onClick) onClick(e)
    navigate(to)
  }
  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
