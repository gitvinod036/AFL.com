import { motion } from 'framer-motion'
import { SectionHeader } from '../components/ui/SectionHeader'
import { GlassCard } from '../components/ui/GlassCard'
import { DynamicIcon } from '../components/ui/Icon'
import { AnimatedStat } from '../components/ui/AnimatedStat'
import { ButtonLink } from '../components/ui/Button'
import { whyAFL, stats } from '../data/content'
import { fadeUp } from '../hooks/useScrollAnimation'

export function WhyAFLPage() {
  return (
    <>
      <section className="pt-32 pb-16 relative overflow-hidden" aria-labelledby="why-heading">
        <div className="absolute inset-0 hero-gradient" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              Why AFL
            </span>
            <h1 id="why-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 max-w-3xl">
              The enterprise AI partner you can <span className="gradient-text">trust</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              We don't just build AI — we build AI that enterprises can explain, audit, and depend on.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-y border-[var(--border)]" aria-label="Key metrics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="reasons-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Advantages" title="What sets us apart" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyAFL.map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <GlassCard className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-5">
                    <DynamicIcon name={item.icon} className="w-6 h-6 text-brand-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 mesh-gradient" aria-label="Comparison">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-12">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              AFL vs. generic AI platforms
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                { afl: 'Explainable by design', other: 'Black-box decisions' },
                { afl: 'Domain-specific models', other: 'One-size-fits-all' },
                { afl: 'Regulatory compliance built-in', other: 'Compliance as afterthought' },
                { afl: 'Multi-agent orchestration', other: 'Single-model limitations' },
              ].map((row) => (
                <div key={row.afl} className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-accent-500 shrink-0" />
                    <span className="text-[var(--text-primary)] font-medium">{row.afl}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm pl-4">
                    <span className="w-2 h-2 rounded-full bg-red-400/50 shrink-0" />
                    <span className="text-[var(--text-muted)] line-through">{row.other}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <ButtonLink to="/contact" size="lg">Start a conversation</ButtonLink>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  )
}
