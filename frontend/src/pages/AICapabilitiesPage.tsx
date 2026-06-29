import { motion } from 'framer-motion'
import { SectionHeader } from '../components/ui/SectionHeader'
import { GlassCard } from '../components/ui/GlassCard'
import { DynamicIcon } from '../components/ui/Icon'
import { aiCapabilities } from '../data/content'
import { fadeUp, staggerContainer } from '../hooks/useScrollAnimation'

const techStack = [
  { name: 'Large Language Models', description: 'Fine-tuned enterprise LLMs with domain-specific knowledge.' },
  { name: 'Vector Databases', description: 'High-performance retrieval for RAG pipelines at scale.' },
  { name: 'Agent Frameworks', description: 'Multi-agent orchestration with planning and tool use.' },
  { name: 'Explainability Engine', description: 'SHAP, LIME, and custom attribution for every decision.' },
  { name: 'MLOps Pipeline', description: 'End-to-end model lifecycle management and monitoring.' },
  { name: 'Security Layer', description: 'Encryption, access control, and AI guardrails built-in.' },
]

export function AICapabilitiesPage() {
  return (
    <>
      <section className="pt-32 pb-16 relative overflow-hidden" aria-labelledby="ai-heading">
        <div className="absolute inset-0 hero-gradient" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              Technology
            </span>
            <h1 id="ai-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 max-w-3xl">
              AI capabilities that <span className="gradient-text">power enterprise</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              A comprehensive technology stack designed for the unique demands of regulated industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="core-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Core" title="Foundational AI technologies" align="center" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {aiCapabilities.map((cap) => (
              <motion.div key={cap.title} variants={fadeUp}>
                <GlassCard className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 flex items-center justify-center mb-5">
                    <DynamicIcon name={cap.icon} className="w-6 h-6 text-brand-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">{cap.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{cap.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 mesh-gradient" aria-labelledby="stack-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Infrastructure" title="Enterprise technology stack" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <GlassCard className="h-full">
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">{tech.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{tech.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
