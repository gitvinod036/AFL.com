import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import { Layout } from './components/layout/Layout'

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })))
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const HealthcarePage = lazy(() => import('./pages/HealthcarePage').then((m) => ({ default: m.HealthcarePage })))
const BankingPage = lazy(() => import('./pages/BankingPage').then((m) => ({ default: m.BankingPage })))
const AICapabilitiesPage = lazy(() => import('./pages/AICapabilitiesPage').then((m) => ({ default: m.AICapabilitiesPage })))
const WhyAFLPage = lazy(() => import('./pages/WhyAFLPage').then((m) => ({ default: m.WhyAFLPage })))
const PublicationPage = lazy(() => import('./pages/PublicationPage').then((m) => ({ default: m.PublicationPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const LoginPage = lazy(() => import('./pages/LoginPage').then((m) => ({ default: m.LoginPage })))
const RegisterPage = lazy(() => import('./pages/RegisterPage').then((m) => ({ default: m.RegisterPage })))

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading">
      <div className="w-8 h-8 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="solutions" element={<Navigate to="/solutions/healthcare" replace />} />
                <Route path="solutions/healthcare" element={<HealthcarePage />} />
                <Route path="solutions/banking" element={<BankingPage />} />
                <Route path="ai-capabilities" element={<AICapabilitiesPage />} />
                <Route path="why-afl" element={<WhyAFLPage />} />
                <Route path="publication" element={<PublicationPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}
