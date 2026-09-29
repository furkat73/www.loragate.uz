import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline'
  size?: 'default' | 'lg'
  children?: ReactNode
}

export function Button({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  ...props
}: Props) {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50'
  const variants = {
    default: 'bg-indigo-600 text-white hover:bg-indigo-700',
    outline: 'border bg-transparent',
  }
  const sizes = {
    default: 'h-10 px-4 py-2 text-sm',
    lg: 'h-11 px-6 py-3 text-base',
  }
  return (
    <button
      type={props.type ?? 'button'}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
