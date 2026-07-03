import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          © {year} Venkata Sai Praneeth Kollipara.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {[
            { href: 'https://github.com/praneeth1620', icon: <GitHubIcon size={18} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/praneethkollipara', icon: <LinkedInIcon size={18} />, label: 'LinkedIn' },
            { href: 'mailto:praneethkollipara7@gmail.com', icon: <Mail size={18} />, label: 'Email' },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="site-footer-social"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
