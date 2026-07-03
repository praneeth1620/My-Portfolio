import { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import CertificationsPage from './pages/CertificationsPage'
import ContactPage from './pages/ContactPage'

export type Theme = 'light' | 'dark'

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <Router>
      {/* Global ambient background */}
      <div className="app-bg" aria-hidden="true">
        <div className="app-orb app-orb--green" />
        <div className="app-orb app-orb--cyan" />
        <div className="app-grid" />
      </div>
      <div className="bg-grid absolute inset-0 pointer-events-none opacity-30 z-0 mix-blend-overlay fixed" />

      <div className="flex flex-col min-h-screen relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="flex-1">
          <section id="home">
            <HomePage />
          </section>

          <section id="about" className="page-section page-section--alt">
            <AboutPage />
          </section>

          <section id="skills" className="page-section">
            <SkillsPage />
          </section>

          <section id="projects" className="page-section page-section--alt">
            <ProjectsPage />
          </section>

          <section id="certifications" className="page-section">
            <CertificationsPage />
          </section>

          <section id="contact" className="page-section page-section--alt">
            <ContactPage />
          </section>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
