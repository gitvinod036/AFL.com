import { motion } from 'framer-motion'
import { Landmark, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '../components/ui/SectionHeader'
import { GlassCard } from '../components/ui/GlassCard'
import { DynamicIcon } from '../components/ui/Icon'
import { ButtonLink } from '../components/ui/Button'
import { bankingSolution } from '../data/content'
import { fadeUp, staggerContainer } from '../hooks/useScrollAnimation'

export function BankingPage() {
  return (
    <>
      <section className="pt-32 pb-16 relative overflow-hidden" aria-labelledby="banking-heading">
        <div className="absolute inset-0 hero-gradient" aria-hidden />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center">
                <Landmark className="w-6 h-6 text-brand-500" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">Banking Solution</span>
            </div>
            <h1 id="banking-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 max-w-3xl">
              {bankingSolution.title}
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-8">
              {bankingSolution.description}
            </p>
            <ButtonLink to="/contact" size="lg">
              Request a Demo <ArrowRight className="w-4 h-4" />
            </ButtonLink>
          </motion.div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="capabilities-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Capabilities"
            title="The complete autonomous banking stack"
            description="From governance to execution — every layer of enterprise banking AI in one platform."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {bankingSolution.capabilities.map((cap) => (
              <motion.div key={cap.title} variants={fadeUp}>
                <GlassCard glow="blue" className="h-full">
                  <DynamicIcon name={cap.icon} className="w-5 h-5 text-brand-500 mb-4" />
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">{cap.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{cap.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 mesh-gradient" aria-label="Architecture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <GlassCard className="p-8 order-2 lg:order-1">
              <div className="grid grid-cols-3 gap-3">
                {['Governance', 'Agents', 'RAG', 'Risk', 'Compliance', 'Security'].map((layer) => (
                  <div
                    key={layer}
                    className="aspect-square rounded-xl bg-brand-500/5 border border-brand-500/10 flex items-center justify-center text-xs font-medium text-brand-500 text-center p-2"
                  >
                    {layer}
                  </div>
                ))}
              </div>
            </GlassCard>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
                Multi-agent architecture for financial institutions
              </h2>
              <ul className="space-y-4">
                {[
                  'Orchestrate specialized AI agents across workflows',
                  'Ground decisions in enterprise financial knowledge',
                  'Automated compliance and regulatory reporting',
                  'Real-time risk intelligence and monitoring',
                  'Enterprise-grade security and guardrails',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
