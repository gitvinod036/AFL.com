import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ChevronDown, LogOut, User } from 'lucide-react'
import { navLinks } from '../../data/content'
import { useTheme } from '../../context/ThemeContext'
import { useAuth } from '../../context/AuthContext'
import { ButtonLink } from '../ui/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { user, isAuthenticated, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    setUserMenuOpen(false)
    navigate('/')
  }

  const initials = user
    ? `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`.toUpperCase() || user.email.charAt(0).toUpperCase()
    : ''

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSolutionsOpen(false)
    setUserMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="AFL Cognitive Systems Home">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-shadow">
              <span className="text-white font-bold text-sm">AFL</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-[var(--text-primary)] text-sm leading-tight block">
                AFL Cognitive
              </span>
              <span className="text-xs text-[var(--text-muted)]">Systems</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                    aria-expanded={solutionsOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 glass rounded-xl shadow-xl py-2 overflow-hidden"
                        role="menu"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-brand-500/5 transition-colors"
                            role="menuitem"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'text-brand-600 dark:text-brand-400'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {isAuthenticated && user ? (
              <div
                className="relative hidden sm:block"
                onMouseEnter={() => setUserMenuOpen(true)}
                onMouseLeave={() => setUserMenuOpen(false)}
              >
                <button
                  className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  aria-expanded={userMenuOpen}
                  aria-haspopup="true"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold">
                    {initials}
                  </div>
                  <span className="text-sm font-medium text-[var(--text-primary)] max-w-[100px] truncate hidden md:block">
                    {user.first_name || user.email.split('@')[0]}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[var(--text-muted)] transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-1 w-56 glass rounded-xl shadow-xl py-2 overflow-hidden"
                      role="menu"
                    >
                      <div className="px-4 py-2 border-b border-[var(--border)]">
                        <p className="text-sm font-medium text-[var(--text-primary)] truncate">{user.first_name} {user.last_name}</p>
                        <p className="text-xs text-[var(--text-muted)] truncate">{user.email}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:text-red-500 hover:bg-red-500/5 transition-colors"
                        role="menuitem"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hidden sm:inline-flex px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  Sign In
                </Link>
                <ButtonLink to="/register" size="sm" variant="secondary" className="hidden sm:inline-flex">
                  Register
                </ButtonLink>
              </>
            )}

            <ButtonLink to="/contact" size="sm" className="hidden lg:inline-flex">
              Book a Demo
            </ButtonLink>
            <button
              className="lg:hidden p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-[var(--border)] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <span className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-3 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3 space-y-2 border-t border-[var(--border)]">
                {isAuthenticated && user ? (
                  <>
                    <div className="flex items-center gap-3 px-3 py-2">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[var(--text-primary)] truncate">{user.first_name} {user.last_name}</p>
                        <p className="text-xs text-[var(--text-muted)] truncate">{user.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-500/5 rounded-lg transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign out
                    </button>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/login"
                      className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] border border-[var(--border)] rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                      <User className="w-4 h-4" />
                      Sign In
                    </Link>
                    <ButtonLink to="/register" variant="secondary" className="w-full">
                      Register
                    </ButtonLink>
                  </div>
                )}
                <ButtonLink to="/contact" className="w-full">Book a Demo</ButtonLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
