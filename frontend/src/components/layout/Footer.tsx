import { Link } from 'react-router-dom'
import { Mail, MapPin, Globe } from 'lucide-react'
import { company, navLinks } from '../../data/content'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AFL</span>
              </div>
              <span className="font-semibold text-[var(--text-primary)]">AFL Cognitive Systems</span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              Enterprise AI for Banking & Healthcare. Explainable, Agentic, and Autonomous.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Globe, label: 'Website', href: '#' },
                { icon: Globe, label: 'LinkedIn', href: '#' },
                { icon: Mail, label: 'Email', href: `mailto:${company.email}` },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 rounded-lg text-[var(--text-muted)] hover:text-brand-500 hover:bg-brand-500/10 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.filter((l) => !l.children).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[var(--text-secondary)] hover:text-brand-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/healthcare" className="text-sm text-[var(--text-secondary)] hover:text-brand-500 transition-colors">
                  Healthcare — Claims Copilot
                </Link>
              </li>
              <li>
                <Link to="/solutions/banking" className="text-sm text-[var(--text-secondary)] hover:text-brand-500 transition-colors">
                  Banking — Autonomous Financial Layer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${company.email}`} className="text-sm text-[var(--text-secondary)] hover:text-brand-500 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  {company.email}
                </a>
              </li>
              <li className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                {company.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {currentYear} {company.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
