import { Award, FileText } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const certifications = [
  {
    title: 'Oracle AI Foundations Associate',
    issuer: 'Oracle',
    description: 'Certified in foundational concepts of Artificial Intelligence, Machine Learning, and Oracle Cloud AI services.',
    category: 'AI & Cloud',
    file: '/certificates/Ai-foundationsAssociate-oracle.pdf',
    color: '#F97316',
  },
  {
    title: 'Python Programming',
    issuer: 'NxtWave (CCBP 4.0)',
    description: 'Covers Python fundamentals, data structures, OOP concepts, and scripting. Includes practical applications in automation and foundational data processing.',
    category: 'Programming',
    file: '/certificates/python.pdf',
    color: '#8B5CF6',
  },
  {
    title: 'Relational Database Management System',
    issuer: 'NxtWave (CCBP 4.0)',
    description: 'Proficiency in RDBMS, SQL queries, database design, normalization, and relational models.',
    category: 'Database',
    file: '/certificates/dbms.pdf',
    color: '#3B82F6',
  },
  {
    title: 'Dynamic Web Application',
    issuer: 'NxtWave (CCBP 4.0)',
    description: 'Building dynamic, interactive web applications using JavaScript and modern web practices.',
    category: 'Frontend',
    file: '/certificates/dynamic-webapplication.pdf',
    color: '#F59E0B',
  },
  {
    title: 'Responsive Website',
    issuer: 'NxtWave (CCBP 4.0)',
    description: 'Creating fully responsive websites using CSS frameworks, media queries, and mobile-first design.',
    category: 'Frontend',
    file: '/certificates/responsive_website.pdf',
    color: '#10B981',
  },
  {
    title: 'JavaScript Essentials',
    issuer: 'NxtWave (CCBP 4.0)',
    description: 'Core JavaScript programming, DOM manipulation, ES6 features, and asynchronous JavaScript.',
    category: 'Programming',
    file: '/certificates/javascript.pdf',
    color: '#EAB308',
  },
  {
    title: 'CSS Flexbox',
    issuer: 'NxtWave (CCBP 4.0)',
    description: 'Advanced layout building using CSS3 Flexbox for modern UI development.',
    category: 'Frontend',
    file: '/certificates/flexbox.pdf',
    color: '#06B6D4',
  },
  {
    title: 'Static Website',
    issuer: 'NxtWave (CCBP 4.0)',
    description: 'Foundational HTML & CSS for structuring and styling static web pages.',
    category: 'Frontend',
    file: '/certificates/Static website.pdf',
    color: '#EF4444',
  },
  {
    title: 'Version Control (Git)',
    issuer: 'NxtWave (CCBP 4.0)',
    description: 'Proficient in using Git for version control, branching, merging, and collaboration.',
    category: 'Tools',
    file: '/certificates/git.pdf',
    color: '#F43F5E',
  },
  {
    title: 'Deloitte Certification',
    issuer: 'Deloitte',
    description: 'Professional certification and training program conducted by Deloitte.',
    category: 'Professional',
    file: '/certificates/Deloitte.pdf',
    color: '#86EFAC',
  },
]

export default function CertificationsPage() {
  const handleVerify = (filePath: string) => {
    window.open(filePath, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="section-padding relative">
      <div className="container relative z-10">
        <PageHeader
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Verified credentials and coursework showcasing my commitment to continuous learning and skill development."
        />

        {/* Certs Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className="card premium-card group"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                animation: `fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.1}s both`,
                borderTop: `3px solid ${cert.color}`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >

              {/* Subtle hover background gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" 
                style={{ background: `radial-gradient(circle at 100% 0%, ${cert.color}15 0%, transparent 50%)` }}
              />

              {/* Icon + Category */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${cert.color}20, ${cert.color}05)`,
                    color: cert.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 24px -8px ${cert.color}40`,
                  }}
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  <Award size={28} strokeWidth={1.5} />
                </div>
                <span
                  style={{
                    padding: '0.35rem 0.85rem',
                    background: `${cert.color}15`,
                    color: cert.color,
                    border: `1px solid ${cert.color}30`,
                    borderRadius: '100px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {cert.category}
                </span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  lineHeight: '1.4',
                }}
              >
                {cert.title}
              </h2>
              <p style={{ color: cert.color, fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Award size={14} /> {cert.issuer}
              </p>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.925rem',
                  lineHeight: 1.6,
                  flex: 1,
                  marginBottom: '2rem',
                }}
              >
                {cert.description}
              </p>

              {/* Verify Button */}
              <button
                onClick={() => handleVerify(cert.file)}
                className="btn w-full justify-center transition-all duration-300"
                style={{
                  background: `${cert.color}10`,
                  color: cert.color,
                  border: `1px solid ${cert.color}30`,
                  fontWeight: 600,
                  padding: '0.8rem',
                  borderRadius: '12px',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = cert.color
                  ;(e.currentTarget as HTMLElement).style.color = '#fff'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = `${cert.color}10`
                  ;(e.currentTarget as HTMLElement).style.color = cert.color
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                <FileText size={16} /> View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
