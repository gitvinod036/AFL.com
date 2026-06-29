import { motion } from 'framer-motion'
import { SectionHeader } from '../components/ui/SectionHeader'
import { GlassCard } from '../components/ui/GlassCard'
import { Timeline } from '../components/ui/Timeline'
import { aboutContent, timeline, company } from '../data/content'
import { fadeUp } from '../hooks/useScrollAnimation'

export function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 relative overflow-hidden" aria-labelledby="about-heading">
        <div className="absolute inset-0 hero-gradient" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              About Us
            </span>
            <h1 id="about-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 max-w-3xl">
              Pioneering <span className="gradient-text">explainable</span> enterprise AI
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              {company.legalName} is at the forefront of enterprise AI, building transparent and autonomous systems for the world's most regulated industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24" aria-label="Mission and vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Our Mission</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">{aboutContent.mission}</p>
            </GlassCard>
            <GlassCard>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Our Vision</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">{aboutContent.vision}</p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 mesh-gradient" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Values" title="What drives us" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.values.map((value, i) => (
              <motion.div key={value.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <GlassCard className="h-full text-center">
                  <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-brand-500 font-bold text-sm">{i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">{value.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="timeline-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Journey" title="Milestones" align="center" />
          <Timeline items={timeline} />
        </div>
      </section>
    </>
  )
}
