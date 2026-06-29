import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, HeartPulse, Landmark, Sparkles } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import { GlassCard } from '../components/ui/GlassCard'
import { SectionHeader } from '../components/ui/SectionHeader'
import { AnimatedStat } from '../components/ui/AnimatedStat'
import { DynamicIcon } from '../components/ui/Icon'
import {
  stats,
  aiCapabilities,
  whyAFL,
  publication,
  healthcareSolution,
  bankingSolution,
} from '../data/content'
import { fadeUp, staggerContainer } from '../hooks/useScrollAnimation'

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" aria-label="Hero">
        <div className="absolute inset-0 hero-gradient" aria-hidden />
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse-glow" aria-hidden />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} aria-hidden />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-[var(--text-secondary)] mb-8">
              <Sparkles className="w-4 h-4 text-brand-500" />
              Enterprise AI for Banking & Healthcare
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              <span className="text-[var(--text-primary)]">Intelligence that</span>
              <br />
              <span className="gradient-text">explains itself.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10">
              AFL Cognitive Systems builds Explainable AI, Agentic AI, RAG, and Autonomous AI
              solutions that transform banking and healthcare with transparency and trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonLink to="/contact" size="lg">
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline" size="lg">
                Contact Us
              </ButtonLink>
            </div>
          </motion.div>

          {/* Floating visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-80"
            aria-hidden
          >
            <div className="glass rounded-3xl p-6 animate-float shadow-2xl">
              <div className="space-y-4">
                {['Explainable AI', 'Agentic Systems', 'Financial RAG'].map((label, i) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-brand-500' : i === 1 ? 'bg-accent-500' : 'bg-brand-400'} animate-pulse`} />
                    <span className="text-sm text-[var(--text-secondary)]">{label}</span>
                    <div className="flex-1 h-px bg-[var(--border)]" />
                    <span className="text-xs text-accent-500 font-medium">Active</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-[var(--border)] mesh-gradient" aria-label="Statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 lg:py-32" aria-labelledby="solutions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Solutions"
            title="Built for regulated industries"
            description="Purpose-built AI platforms for healthcare and banking — where explainability isn't optional, it's essential."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard glow="teal" className="group cursor-pointer relative overflow-hidden">
              <Link to="/solutions/healthcare" className="block">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" aria-hidden />
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-6">
                  <HeartPulse className="w-6 h-6 text-accent-500" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent-500 mb-2 block">Healthcare</span>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">{healthcareSolution.title}</h3>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{healthcareSolution.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-500 group-hover:gap-3 transition-all">
                  Explore solution <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </GlassCard>

            <GlassCard glow="blue" className="group cursor-pointer relative overflow-hidden">
              <Link to="/solutions/banking" className="block">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" aria-hidden />
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6">
                  <Landmark className="w-6 h-6 text-brand-500" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-2 block">Banking</span>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">{bankingSolution.title}</h3>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{bankingSolution.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 group-hover:gap-3 transition-all">
                  Explore solution <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24 lg:py-32 mesh-gradient" aria-labelledby="capabilities-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Technology"
            title="AI capabilities that scale"
            description="A comprehensive stack of enterprise AI technologies, unified under one platform."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {aiCapabilities.map((cap) => (
              <motion.div key={cap.title} variants={fadeUp}>
                <GlassCard hover className="h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4">
                    <DynamicIcon name={cap.icon} className="w-5 h-5 text-brand-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{cap.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{cap.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <ButtonLink to="/ai-capabilities" variant="outline">
              View all capabilities <ArrowRight className="w-4 h-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Why AFL */}
      <section className="py-24 lg:py-32" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why AFL"
            title="Trusted by enterprise leaders"
            description="We combine deep domain expertise with cutting-edge AI research to deliver solutions you can trust."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyAFL.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <GlassCard className="h-full">
                  <DynamicIcon name={item.icon} className="w-6 h-6 text-brand-500 mb-4" />
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication teaser */}
      <section className="py-24 lg:py-32 mesh-gradient" aria-labelledby="publication-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                Featured Publication
              </span>
              <h2 id="publication-heading" className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
                {publication.title}
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{publication.subtitle}</p>
              <ButtonLink to="/publication" variant="secondary">
                Learn more <ArrowRight className="w-4 h-4" />
              </ButtonLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-accent-500/20 rounded-2xl blur-2xl scale-110" aria-hidden />
                <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[var(--border)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex flex-col justify-between p-8">
                    <div>
                      <div className="text-xs text-brand-400 font-semibold tracking-widest uppercase mb-4">AFL Cognitive Systems</div>
                      <div className="text-white text-xl font-bold leading-tight mb-2">{publication.title}</div>
                      <div className="text-slate-400 text-xs leading-relaxed">{publication.subtitle}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AFL</span>
                      </div>
                      <span className="text-xs text-accent-400 font-semibold px-2 py-1 rounded border border-accent-500/30">
                        {publication.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-12 relative overflow-hidden">
            <div className="absolute inset-0 hero-gradient opacity-50" aria-hidden />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Ready to transform your enterprise?
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
                Schedule a demo to see how AFL Cognitive Systems can accelerate your AI journey with explainable, enterprise-grade solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <ButtonLink to="/contact" size="lg">Book a Demo</ButtonLink>
                <ButtonLink to="/contact" variant="outline" size="lg">Contact Us</ButtonLink>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  )
}
