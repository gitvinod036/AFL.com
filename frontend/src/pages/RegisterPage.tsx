import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserPlus, AlertCircle } from 'lucide-react'
import { AuthLayout } from '../components/auth/AuthLayout'
import { FormInput } from '../components/ui/FormInput'
import { Button } from '../components/ui/Button'
import { useAuth } from '../context/AuthContext'

export function RegisterPage() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company_name: '',
    password: '',
    confirm_password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const update = (field: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [field]: value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirm_password) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    try {
      await register(form)
      navigate('/')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Get started with AFL Cognitive Systems"
      footer={
        <>
          Already have an account?{' '}
          <Link to="/login" className="text-brand-500 hover:text-brand-600 font-medium transition-colors">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          <FormInput
            label="First Name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
            value={form.first_name}
            onChange={(e) => update('first_name', e.target.value)}
            placeholder="Jane"
          />
          <FormInput
            label="Last Name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
            value={form.last_name}
            onChange={(e) => update('last_name', e.target.value)}
            placeholder="Smith"
          />
        </div>
        <FormInput
          label="Work Email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          placeholder="jane@company.com"
        />
        <FormInput
          label="Company"
          name="company_name"
          type="text"
          autoComplete="organization"
          value={form.company_name}
          onChange={(e) => update('company_name', e.target.value)}
          placeholder="Acme Corp (optional)"
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          value={form.password}
          onChange={(e) => update('password', e.target.value)}
          placeholder="Minimum 8 characters"
        />
        <FormInput
          label="Confirm Password"
          name="confirm_password"
          type="password"
          autoComplete="new-password"
          required
          value={form.confirm_password}
          onChange={(e) => update('confirm_password', e.target.value)}
          placeholder="Re-enter your password"
        />

        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          By creating an account, you agree to our Terms of Service and Privacy Policy.
        </p>

        {error && (
          <div className="flex items-start gap-2 text-red-500 text-sm p-3 rounded-xl bg-red-500/10 border border-red-500/20" role="alert">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            {error}
          </div>
        )}

        <Button type="submit" size="lg" disabled={loading} className="w-full">
          <UserPlus className="w-4 h-4" />
          {loading ? 'Creating account...' : 'Create Account'}
        </Button>
      </form>
    </AuthLayout>
  )
}
