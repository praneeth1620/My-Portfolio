import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Code2 } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons'
import PageHeader from '../components/PageHeader'

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'praneethkollipara7@gmail.com',
    href: 'mailto:praneethkollipara7@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91-9618145782',
    href: 'tel:+919618145782',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Vijayawada, Andhra Pradesh',
    href: null,
  },
]

const socialLinks = [
  { icon: <GitHubIcon size={20} />, label: 'GitHub', href: 'https://github.com/praneeth1620', handle: '@praneeth1620' },
  { icon: <LinkedInIcon size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/praneethkollipara', handle: 'praneethkollipara' },
  { icon: <Code2 size={20} />, label: 'LeetCode', href: 'https://leetcode.com/u/praneethkollipara7/', handle: 'praneethkollipara7' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    const mailtoLink = `mailto:praneethkollipara7@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact from ' + name)}&body=${encodeURIComponent(`Hi Praneeth,\n\nName: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailtoLink
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="section-padding">
      <div className="container">
        <PageHeader
          eyebrow="Connect"
          title="Get In Touch"
          subtitle="Open to internship opportunities, collaborations, and interesting projects"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)',
            gap: '2rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Availability card */}
            <div className="card card-accent" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)', animation: 'pulse-accent 2s infinite' }} />
                <span style={{ fontWeight: 600, color: 'var(--accent)', fontSize: '0.875rem' }}>Available for Opportunities</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Looking for internships in full-stack development or AI integration roles starting 2025. 
                Excited to bring value, learn, and contribute.
              </p>
            </div>

            {/* Contact details */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Contact Details
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {contactInfo.map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div className="icon-box icon-box--sm">
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', transition: 'color 0.2s' }}
                          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Find Me Online
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {socialLinks.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-row"
                  >
                    {s.icon}
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>{s.label}</div>
                      <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>{s.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="card" style={{ padding: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Internship Opportunity / Collaboration / Hello"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Hi Praneeth, I'd like to..."
                  className="form-input"
                  style={{ resize: 'vertical', minHeight: '120px' }}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                id="contact-submit-btn"
                className="btn btn-primary"
                style={{ marginTop: '0.5rem', justifyContent: 'center' }}
              >
                {sent ? '✓ Opening email client...' : <><Send size={16} /> Send Message</>}
              </button>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                This will open your default email client with the message pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
