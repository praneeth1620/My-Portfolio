import { useEffect, useState } from 'react'
import { ArrowRight, Mail, FileText, Code2, Brain, Globe, Terminal, ChevronDown, User, Rocket, Zap, GraduationCap } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons'

const roles = [
  'Full Stack Developer',
  'React Enthusiast',
  'AI Integration Learner',
  'Problem Solver',
]

export default function HomePage() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIdx(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  const highlights = [
    { icon: <Code2 size={22} />, label: 'Full Stack', desc: 'React · Node.js · FastAPI', learning: true },
    { icon: <Brain size={22} />, label: 'AI Integration', desc: 'AI-powered apps & LLM APIs', learning: true },
    { icon: <Globe size={22} />, label: 'Web Dev', desc: 'Modern & responsive UIs', learning: false },
    { icon: <Terminal size={22} />, label: '140+ LeetCode', desc: 'Problems solved', learning: false },
  ]

  const quickLinks = [
    { id: 'about', label: 'About Me', desc: 'My story, education & background', icon: <User size={20} /> },
    { id: 'projects', label: 'Projects', desc: "What I've built so far", icon: <Rocket size={20} /> },
    { id: 'skills', label: 'Skills', desc: 'Technologies I work with', icon: <Zap size={20} /> },
    { id: 'certifications', label: 'Certifications', desc: 'Verified credentials & courses', icon: <GraduationCap size={20} /> },
    { id: 'contact', label: 'Contact', desc: "Let's work together", icon: <Mail size={20} /> },
  ]

  const socialLinks = [
    { href: 'https://github.com/praneeth1620', icon: <GitHubIcon size={20} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/praneethkollipara', icon: <LinkedInIcon size={20} />, label: 'LinkedIn' },
    { href: 'mailto:praneethkollipara7@gmail.com', icon: <Mail size={20} />, label: 'Email' },
    { href: 'https://leetcode.com/u/praneethkollipara7/', icon: <Code2 size={20} />, label: 'LeetCode' },
  ]

  return (
    <div>
      {/* ── Hero Section ── */}
      <section
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background ambient glows */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: '-10%', left: '-5%',
            width: '500px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,230,118,0.12) 0%, transparent 65%)',
            filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
            animation: 'float 20s ease-in-out infinite alternate',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', bottom: '-10%', right: '-5%',
            width: '600px', height: '600px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,176,255,0.1) 0%, transparent 65%)',
            filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
            animation: 'float 28s ease-in-out infinite alternate-reverse',
          }}
        />

        {/* ── Content: Two-column split ── */}
        <div
          className="hero-split"
          style={{
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '4rem',
            position: 'relative',
            zIndex: 1,
            animation: 'fadeInUp 0.7s ease',
          }}
        >
          {/* LEFT — Text */}
          <div className="hero-text" style={{ flex: 1, maxWidth: '600px', display: 'flex', flexDirection: 'column' }}>
            {/* Hello */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--accent)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                marginBottom: '1rem',
              }}
            >
              Hello, I'm
            </p>

            {/* Name */}
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Venkata Sai Praneeth
            </h1>

            {/* Role — gradient typing */}
            <div
              style={{
                fontSize: 'clamp(1.6rem, 4vw, 3rem)',
                fontWeight: 800,
                marginBottom: '1.5rem',
                minHeight: '3.5rem',
                letterSpacing: '-0.01em',
              }}
            >
              <span className="text-gradient">{displayed}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1em',
                  background: 'var(--accent)',
                  marginLeft: '3px',
                  verticalAlign: 'text-bottom',
                  borderRadius: '2px',
                  animation: 'fadeIn 0.6s ease infinite alternate',
                }}
              />
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
                maxWidth: '480px',
              }}
            >
              Building fantastic web experiences with clean code and modern design.
              Creating modern, responsive and user-friendly applications as a CSE undergrad at VIT-AP University (2027).
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 2rem',
                  background: 'var(--accent)',
                  color: '#000',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  boxShadow: 'var(--shadow-accent)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 35px rgba(0,230,118,0.6)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'none'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-accent)'
                }}
              >
                View Work <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 2rem',
                  background: 'transparent',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  border: '2px solid var(--accent)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--accent-light)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.transform = 'none'
                }}
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.5rem',
                  background: 'transparent',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  border: '1px solid var(--border)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-border)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
                }}
              >
                <FileText size={16} /> Resume
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  style={{
                    width: '42px', height: '42px',
                    borderRadius: '50%',
                    border: '1.5px solid var(--border)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--accent)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'
                    ;(e.currentTarget as HTMLElement).style.background = 'var(--accent-light)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(0,230,118,0.3)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                    ;(e.currentTarget as HTMLElement).style.background = 'var(--bg-card)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'none'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Outer glow ring */}
            <div
              className="photo-ring"
              style={{
                position: 'relative',
                width: '340px',
                height: '340px',
              }}
            >
              {/* Animated rotating border */}
              <div
                style={{
                  position: 'absolute', inset: '-4px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #00E676, #00B0FF, #00E676)',
                  zIndex: 0,
                }}
              />
              {/* Dark gap ring */}
              <div
                style={{
                  position: 'absolute', inset: '4px',
                  borderRadius: '50%',
                  background: 'var(--bg-primary)',
                  zIndex: 1,
                }}
              />
              {/* Glow halo */}
              <div
                style={{
                  position: 'absolute', inset: '-20px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0,230,118,0.2) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  zIndex: 0,
                }}
              />
              {/* Photo */}
              <div
                style={{
                  position: 'absolute', inset: '8px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  zIndex: 2,
                  background: 'var(--bg-secondary)',
                }}
              >
                <img
                  src="/myphoto.png"
                  alt="Venkata Sai Praneeth Kollipara"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                  onError={e => {
                    const t = e.target as HTMLImageElement
                    t.style.display = 'none'
                    const parent = t.parentElement!
                    parent.style.display = 'flex'
                    parent.style.alignItems = 'center'
                    parent.style.justifyContent = 'center'
                    parent.style.background = 'var(--accent-light)'
                    parent.innerHTML = '<span style="font-size:3rem;font-weight:800;color:var(--accent)">VSP</span>'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute', bottom: '2rem', left: '50%',
            transform: 'translateX(-50%)',
            color: 'var(--text-muted)',
            animation: 'fadeInUp 1s ease 1.5s both',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '0.25rem',
          }}
        >
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
          <ChevronDown size={16} style={{ animation: 'fadeIn 1s infinite alternate' }} />
        </div>
      </section>

      {/* ── Explore My Work ── */}
      <section className="section-padding explore-section">
        <div className="explore-section-bg" aria-hidden="true">
          <div className="explore-orb explore-orb--green" />
          <div className="explore-orb explore-orb--cyan" />
          <div className="explore-grid" />
        </div>

        <div className="container">
          <div className="explore-section-header page-header page-header--center">
            <span className="page-eyebrow">Portfolio Overview</span>
            <div className="section-header">
              <h2 className="section-title">Explore My Work</h2>
            </div>
            <p className="section-subtitle explore-section-subtitle">
              Quick access to what I've built and who I am
            </p>
          </div>

          <div className="explore-learning-panel">
            <div className="explore-panel-glow" aria-hidden="true" />
            <div className="explore-learning-header">
              <span className="tag explore-learning-tag">
                <span className="explore-tag-dot" />
                Currently Learning
              </span>
              <p>
                I'm actively building my skills in full-stack development and AI integration
              </p>
            </div>

            <div className="explore-highlights-grid">
              {highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`explore-highlight-card${h.learning ? ' is-learning' : ''}`}
                  style={{ animation: `fadeInUp 0.6s ease ${i * 0.1}s both` }}
                >
                  <div className="explore-highlight-icon">{h.icon}</div>
                  <div className="explore-highlight-body">
                    {h.learning && (
                      <span className="explore-learning-badge">
                        <span className="explore-badge-dot" />
                        In Progress
                      </span>
                    )}
                    <div className="explore-highlight-label">{h.label}</div>
                    <div className="explore-highlight-desc">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="explore-nav-divider">
            <span className="explore-divider-dot" />
            <span>Browse Sections</span>
            <span className="explore-divider-dot" />
          </div>

          <div className="explore-nav-grid">
            {quickLinks.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={e => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }) }}
                className="explore-nav-card"
                style={{ animation: `fadeInUp 0.5s ease ${i * 0.08}s both` }}
              >
                <div className="explore-nav-icon">{item.icon}</div>
                <div>
                  <div className="explore-nav-label">{item.label}</div>
                  <div className="explore-nav-desc">{item.desc}</div>
                </div>
                <ArrowRight size={16} className="explore-nav-arrow" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
