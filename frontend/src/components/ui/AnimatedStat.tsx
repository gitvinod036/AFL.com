import { motion } from 'framer-motion'
import { useCountUp, useScrollAnimation } from '../../hooks/useScrollAnimation'

interface AnimatedStatProps {
  value: number
  suffix?: string
  label: string
  decimals?: number
}

export function AnimatedStat({ value, suffix = '', label, decimals = 0 }: AnimatedStatProps) {
  const { ref, isInView } = useScrollAnimation()
  const count = useCountUp(value, 2000, decimals, isInView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </div>
      <div className="text-sm text-[var(--text-secondary)] font-medium">{label}</div>
    </motion.div>
  )
}
