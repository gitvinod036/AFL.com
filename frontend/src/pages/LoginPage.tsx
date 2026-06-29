import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogIn, AlertCircle } from 'lucide-react'
import { AuthLayout } from '../components/auth/AuthLayout'
import { FormInput } from '../components/ui/FormInput'
import { Button } from '../components/ui/Button'
import { useAuth } from '../context/AuthContext'

export function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your AFL Cognitive Systems account"
      footer={
        <>
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-brand-500 hover:text-brand-600 font-medium transition-colors">
            Create one
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <FormInput
          label="Work Email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
        />
        <div>
          <FormInput
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <div className="mt-2 text-right">
            <Link
              to="/contact"
              className="text-xs text-[var(--text-muted)] hover:text-brand-500 transition-colors"
            >
              Need help signing in?
            </Link>
          </div>
        </div>

        {error && (
          <div className="flex items-start gap-2 text-red-500 text-sm p-3 rounded-xl bg-red-500/10 border border-red-500/20" role="alert">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            {error}
          </div>
        )}

        <Button type="submit" size="lg" disabled={loading} className="w-full">
          <LogIn className="w-4 h-4" />
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
    </AuthLayout>
  )
}
