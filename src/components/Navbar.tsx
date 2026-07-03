import { useState, useEffect, useRef } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import type { Theme } from '../App'

interface NavbarProps {
  theme: Theme
  toggleTheme: () => void
}

const navLinks = [
  { id: 'home',           label: 'Home' },
  { id: 'about',          label: 'About' },
  { id: 'skills',         label: 'Skills' },
  { id: 'projects',       label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact',        label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [activeId, setActiveId]       = useState('home')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navLinksRef = useRef<Map<string, HTMLAnchorElement>>(new Map())

  // ── Track scroll for pill effect ──────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── IntersectionObserver — detect active section ──────────────
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  // ── Slide the indicator to the active link ────────────────────
  useEffect(() => {
    const el = navLinksRef.current.get(activeId)
    if (!el) return
    const parent = el.parentElement?.parentElement // ul element
    if (!parent) return
    const parentRect = parent.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()
    setIndicatorStyle({
      left:  elRect.left  - parentRect.left,
      width: elRect.width,
    })
  }, [activeId])

  // ── Smooth scroll to section ──────────────────────────────────
  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    const offset = 80 // nav height
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`site-nav${scrolled ? ' site-nav--scrolled' : ''}`}>
        <div
          className="container"
          style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="site-nav-logo"
          >
            <span className="site-nav-logo-accent">VSP</span>
            <span style={{ color: 'var(--text-primary)' }}>.</span>
          </button>

          {/* Desktop nav links */}
          <ul
            className="nav-desktop"
            style={{
              display: 'flex',
              gap: '0.1rem',
              listStyle: 'none',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Sliding active indicator */}
            <li
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '-2px',
                height: '2px',
                background: 'var(--accent)',
                borderRadius: '2px',
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                transition: 'all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)',
                boxShadow: '0 0 10px var(--accent)',
                pointerEvents: 'none',
              }}
            />

            {navLinks.map(link => {
              const isActive = activeId === link.id
              return (
                <li key={link.id}>
                  <a
                    ref={el => {
                      if (el) navLinksRef.current.set(link.id, el)
                      else navLinksRef.current.delete(link.id)
                    }}
                    href={`#${link.id}`}
                    onClick={e => { e.preventDefault(); scrollTo(link.id) }}
                    style={{
                      display: 'block',
                      padding: '0.45rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                      background: 'transparent',
                      transition: 'color 0.2s ease, background 0.2s ease',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'
                    }}
                    onMouseLeave={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="site-nav-action"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle mobile menu"
              id="mobile-menu-toggle"
              className="mobile-only site-nav-action"
              style={{ borderRadius: 'var(--radius-sm)', display: 'none' }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0, right: 0,
            background: 'var(--bg-nav)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border)',
            zIndex: 999,
            padding: '1rem 1.5rem',
            animation: 'fadeInUp 0.2s ease',
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={e => { e.preventDefault(); scrollTo(link.id) }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.85rem 0',
                fontWeight: activeId === link.id ? 600 : 400,
                color: activeId === link.id ? 'var(--accent)' : 'var(--text-primary)',
                borderBottom: '1px solid var(--border-subtle)',
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              {activeId === link.id && (
                <span style={{
                  display: 'inline-block', width: '6px', height: '6px',
                  borderRadius: '50%', background: 'var(--accent)',
                  boxShadow: '0 0 8px var(--accent)',
                  flexShrink: 0,
                }} />
              )}
              {link.label}
            </a>
          ))}
        </div>
      )}

    </>
  )
}
