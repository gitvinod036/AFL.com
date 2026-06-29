import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/25 hover:shadow-brand-500/30',
  secondary:
    'bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20 hover:bg-accent-500/20',
  ghost: 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5',
  outline:
    'border border-[var(--border)] text-[var(--text-primary)] hover:border-brand-500/50 hover:bg-brand-500/5',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
)
Button.displayName = 'Button'

interface ButtonLinkProps extends Omit<LinkProps, 'className'> {
  variant?: Variant
  size?: Size
  className?: string
}

export function ButtonLink({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}
