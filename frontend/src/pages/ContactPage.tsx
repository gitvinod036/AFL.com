import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { GlassCard } from '../components/ui/GlassCard'
import { Button } from '../components/ui/Button'
import { company } from '../data/content'

type FormType = 'contact' | 'demo'
type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  company_name: string
  phone: string
  message: string
  inquiry_type: FormType
}

const initialForm: FormData = {
  name: '',
  email: '',
  company_name: '',
  phone: '',
  message: '',
  inquiry_type: 'demo',
}

export function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/inquiries/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.detail || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Failed to submit. Please try again.')
    }
  }

  const update = (field: keyof FormData, value: string) =>
    setForm((f) => ({ ...f, [field]: value }))

  return (
    <>
      <section className="pt-32 pb-24 relative overflow-hidden" aria-labelledby="contact-heading">
        <div className="absolute inset-0 hero-gradient" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              Contact
            </span>
            <h1 id="contact-heading" className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Let's build the future together
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-xl mx-auto">
              Book a demo or reach out to discuss how AFL can transform your enterprise.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {[
                { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
                { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phone}` },
                { icon: MapPin, label: 'Location', value: company.location },
              ].map(({ icon: Icon, label, value, href }) => (
                <GlassCard key={label} hover={false} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">{label}</div>
                    {href ? (
                      <a href={href} className="text-[var(--text-primary)] hover:text-brand-500 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-[var(--text-primary)]">{value}</span>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="lg:col-span-3">
              <GlassCard className="p-8">
                <div className="flex gap-2 mb-8 p-1 rounded-xl bg-black/5 dark:bg-white/5">
                  {(['demo', 'contact'] as FormType[]).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => update('inquiry_type', type)}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        form.inquiry_type === type
                          ? 'bg-brand-600 text-white shadow'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {type === 'demo' ? 'Book a Demo' : 'Contact Us'}
                    </button>
                  ))}
                </div>

                {status === 'success' ? (
                  <div className="text-center py-12" role="status">
                    <CheckCircle2 className="w-12 h-12 text-accent-500 mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Message sent!</h2>
                    <p className="text-[var(--text-secondary)]">We'll be in touch within 24 hours.</p>
                    <Button className="mt-6" onClick={() => setStatus('idle')}>
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                          Work Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company_name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                          Company
                        </label>
                        <input
                          id="company_name"
                          type="text"
                          value={form.company_name}
                          onChange={(e) => update('company_name', e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update('phone', e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-brand-500 transition resize-none"
                        placeholder="Tell us about your use case..."
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-500 text-sm" role="alert">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {errorMsg}
                      </div>
                    )}

                    <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full sm:w-auto">
                      {status === 'loading' ? 'Sending...' : (
                        <>
                          <Send className="w-4 h-4" />
                          {form.inquiry_type === 'demo' ? 'Book a Demo' : 'Send Message'}
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
