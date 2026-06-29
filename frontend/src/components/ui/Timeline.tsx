import { motion } from 'framer-motion'
import { fadeUp } from '../../hooks/useScrollAnimation'

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div
        className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-accent-500/30 to-transparent sm:-translate-x-px"
        aria-hidden
      />
      {items.map((item, i) => (
        <motion.div
          key={item.year}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: i * 0.1 }}
          className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse sm:text-right'}`}
        >
          <div className="hidden sm:block sm:w-1/2" />
          <div
            className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-brand-500 border-4 border-[var(--bg-primary)] -translate-x-1/2 mt-1.5 z-10"
            aria-hidden
          />
          <div className={`pl-10 sm:pl-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'}`}>
            <span className="text-sm font-bold text-brand-500 mb-1 block">{item.year}</span>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
