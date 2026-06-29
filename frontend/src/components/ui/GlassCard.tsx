import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  hover?: boolean
  glow?: 'blue' | 'teal' | 'none'
  className?: string
}

const glowStyles = {
  blue: 'hover:shadow-brand-500/10',
  teal: 'hover:shadow-accent-500/10',
  none: '',
}

export function GlassCard({
  children,
  hover = true,
  glow = 'none',
  className = '',
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`glass rounded-2xl p-6 transition-shadow duration-300 ${hover ? `hover:shadow-xl ${glowStyles[glow]}` : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
