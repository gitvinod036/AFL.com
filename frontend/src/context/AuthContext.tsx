import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { authApi, getStoredToken, setStoredToken, type User } from '../lib/api'

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (data: {
    first_name: string
    last_name: string
    email: string
    password: string
    confirm_password: string
    company_name?: string
  }) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = getStoredToken()
    if (!token) {
      setIsLoading(false)
      return
    }
    authApi
      .me()
      .then(setUser)
      .catch(() => setStoredToken(null))
      .finally(() => setIsLoading(false))
  }, [])

  const login = async (email: string, password: string) => {
    const res = await authApi.login({ email, password })
    setStoredToken(res.token)
    setUser(res.user)
  }

  const register = async (data: {
    first_name: string
    last_name: string
    email: string
    password: string
    confirm_password: string
    company_name?: string
  }) => {
    const res = await authApi.register(data)
    setStoredToken(res.token)
    setUser(res.user)
  }

  const logout = async () => {
    try {
      await authApi.logout()
    } catch {
      // Clear local session even if API call fails
    }
    setStoredToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
