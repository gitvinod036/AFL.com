const TOKEN_KEY = 'afl_auth_token'

export interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  company_name: string
}

export interface AuthResponse {
  detail: string
  token: string
  user: User
}

export function getStoredToken(): string | null {
  return localStorage.getItem(TOKEN_KEY)
}

export function setStoredToken(token: string | null) {
  if (token) localStorage.setItem(TOKEN_KEY, token)
  else localStorage.removeItem(TOKEN_KEY)
}

export function parseApiError(data: unknown): string {
  if (!data || typeof data !== 'object') return 'Something went wrong. Please try again.'

  const record = data as Record<string, unknown>
  if (typeof record.detail === 'string') return record.detail

  const messages: string[] = []
  for (const [key, value] of Object.entries(record)) {
    if (Array.isArray(value)) {
      value.forEach((msg) => {
        if (typeof msg === 'string') {
          messages.push(key === 'non_field_errors' ? msg : `${formatField(key)}: ${msg}`)
        }
      })
    } else if (typeof value === 'string') {
      messages.push(`${formatField(key)}: ${value}`)
    }
  }
  return messages.length ? messages.join(' ') : 'Something went wrong. Please try again.'
}

function formatField(key: string): string {
  return key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getStoredToken()
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  }
  if (token) headers.Authorization = `Token ${token}`

  const res = await fetch(`/api${path}`, { ...options, headers })
  const data = await res.json().catch(() => ({}))

  if (!res.ok) throw new Error(parseApiError(data))
  return data as T
}

export const authApi = {
  register: (body: {
    first_name: string
    last_name: string
    email: string
    password: string
    confirm_password: string
    company_name?: string
  }) => apiFetch<AuthResponse>('/auth/register/', { method: 'POST', body: JSON.stringify(body) }),

  login: (body: { email: string; password: string }) =>
    apiFetch<AuthResponse>('/auth/login/', { method: 'POST', body: JSON.stringify(body) }),

  logout: () => apiFetch<{ detail: string }>('/auth/logout/', { method: 'POST' }),

  me: () => apiFetch<User>('/auth/me/'),
}
