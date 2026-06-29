import { motion } from 'framer-motion'
import { BookOpen, ArrowRight } from 'lucide-react'
import { GlassCard } from '../components/ui/GlassCard'
import { ButtonLink } from '../components/ui/Button'
import { publication } from '../data/content'

export function PublicationPage() {
  return (
    <>
      <section className="pt-32 pb-24 relative overflow-hidden min-h-screen" aria-labelledby="pub-heading">
        <div className="absolute inset-0 hero-gradient" aria-hidden />
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Book showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-brand-500/20 via-transparent to-accent-500/20 rounded-3xl blur-3xl" aria-hidden />
                <div className="relative perspective">
                  <motion.div
                    animate={{ rotateY: [-2, 2, -2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-72 sm:w-80 aspect-[2/3] rounded-r-2xl rounded-l-md overflow-hidden shadow-2xl border border-white/10"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
                      <div className="flex-1 p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-6">
                            <BookOpen className="w-4 h-4 text-brand-400" />
                            <span className="text-xs text-brand-400 font-semibold tracking-widest uppercase">
                              AFL Cognitive Systems
                            </span>
                          </div>
                          <h2 className="text-white text-2xl font-bold leading-tight mb-4">
                            {publication.title}
                          </h2>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {publication.subtitle}
                          </p>
                        </div>
                        <div className="flex items-end justify-between">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">AFL</span>
                          </div>
                          <span className="text-xs font-bold text-accent-400 px-3 py-1.5 rounded-full border border-accent-500/40 bg-accent-500/10 tracking-wider uppercase">
                            {publication.status}
                          </span>
                        </div>
                      </div>
                      <div className="h-1 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500" />
                    </div>
                  </motion.div>
                  {/* Book spine shadow */}
                  <div className="absolute left-0 top-2 bottom-2 w-3 bg-black/40 rounded-l-md -translate-x-full" aria-hidden />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                Featured Publication
              </span>
              <h1 id="pub-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
                {publication.title}
              </h1>
              <p className="text-lg text-[var(--text-secondary)] mb-2 font-medium">{publication.subtitle}</p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">{publication.description}</p>

              <GlassCard className="mb-8">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
                  What you'll learn
                </h2>
                <ul className="space-y-3">
                  {publication.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <div className="flex flex-wrap gap-4">
                <ButtonLink to="/contact" size="lg">
                  Get notified <ArrowRight className="w-4 h-4" />
                </ButtonLink>
                <ButtonLink to="/solutions/banking" variant="outline" size="lg">
                  Explore AFL Platform
                </ButtonLink>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
