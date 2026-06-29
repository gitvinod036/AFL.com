import { motion } from 'framer-motion'
import { fadeUp } from '../../hooks/useScrollAnimation'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`max-w-3xl mb-16 ${alignClass} ${className}`}
    >
      {eyebrow && (
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
