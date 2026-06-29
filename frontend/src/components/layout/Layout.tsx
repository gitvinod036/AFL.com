import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
