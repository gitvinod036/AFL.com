import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface AuthLayoutProps {
  title: string
  subtitle: string
  children: ReactNode
  footer: ReactNode
}

export function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <section className="min-h-screen flex" aria-label="Authentication">
      {/* Brand panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" aria-hidden />
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-500/15 rounded-full blur-3xl" aria-hidden />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl" aria-hidden />
        <div className="relative flex flex-col justify-between p-12 xl:p-16 w-full">
          <Link to="/" className="flex items-center gap-3 w-fit">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">AFL</span>
            </div>
            <span className="font-semibold text-[var(--text-primary)]">AFL Cognitive Systems</span>
          </Link>

          <div>
            <blockquote className="text-2xl xl:text-3xl font-semibold text-[var(--text-primary)] leading-snug mb-6">
              "Enterprise AI that explains every decision — built for banking and healthcare."
            </blockquote>
            <p className="text-[var(--text-secondary)]">
              Join organizations transforming operations with explainable, agentic AI.
            </p>
          </div>

          <p className="text-sm text-[var(--text-muted)]">
            &copy; AFL Cognitive Systems Private Limited
          </p>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-24 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden mb-8 text-center">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AFL</span>
              </div>
            </Link>
          </div>

          <div className="glass rounded-2xl p-8 shadow-xl">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">{title}</h1>
              <p className="text-[var(--text-secondary)]">{subtitle}</p>
            </div>
            {children}
          </div>

          <p className="text-center text-sm text-[var(--text-secondary)] mt-6">{footer}</p>
        </motion.div>
      </div>
    </section>
  )
}
