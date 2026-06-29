import { motion } from 'framer-motion'
import { HeartPulse, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '../components/ui/SectionHeader'
import { GlassCard } from '../components/ui/GlassCard'
import { DynamicIcon } from '../components/ui/Icon'
import { ButtonLink } from '../components/ui/Button'
import { healthcareSolution } from '../data/content'
import { fadeUp, staggerContainer } from '../hooks/useScrollAnimation'

export function HealthcarePage() {
  return (
    <>
      <section className="pt-32 pb-16 relative overflow-hidden" aria-labelledby="healthcare-heading">
        <div className="absolute inset-0 hero-gradient" aria-hidden />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-accent-500" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent-500">Healthcare Solution</span>
            </div>
            <h1 id="healthcare-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 max-w-3xl">
              {healthcareSolution.title}
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-8">
              {healthcareSolution.description}
            </p>
            <ButtonLink to="/contact" size="lg">
              Request a Demo <ArrowRight className="w-4 h-4" />
            </ButtonLink>
          </motion.div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Features"
            title="End-to-end claims intelligence"
            description="From document ingestion to final adjudication — every step powered by explainable AI."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {healthcareSolution.features.map((feature) => (
              <motion.div key={feature.title} variants={fadeUp}>
                <GlassCard glow="teal" className="h-full">
                  <DynamicIcon name={feature.icon} className="w-5 h-5 text-accent-500 mb-4" />
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 mesh-gradient" aria-label="Benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
                Built for insurers, TPAs, and hospitals
              </h2>
              <ul className="space-y-4">
                {[
                  'Reduce claim processing time by up to 10x',
                  'Full audit trail for regulatory compliance',
                  'Explainable AI decisions at every step',
                  'Seamless integration with existing systems',
                  'HIPAA-aligned security architecture',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <GlassCard className="p-8">
              <div className="space-y-6">
                {['Document Upload', 'AI Analysis', 'Eligibility Check', 'Decision & Audit'].map((step, i) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-500 text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1 h-10 rounded-lg bg-accent-500/5 border border-accent-500/10 flex items-center px-4 text-sm text-[var(--text-secondary)]">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  )
}
