import { MapPin, Mail, Phone, GraduationCap, Globe, BookOpen, Code2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const education = [
  {
    institution: 'VIT-AP University',
    degree: 'B.Tech in Computer Science Engineering',
    period: '2023 – 2027',
    score: 'CGPA: 8.84',
    location: 'Amaravati, Andhra Pradesh',
  },
  {
    institution: 'Narayana Junior College',
    degree: 'Class XII (MPC)',
    period: '2021 – 2023',
    score: '96.1%',
    location: 'Vijayawada',
  },
  {
    institution: 'Sri Chaitanya Techno School',
    degree: 'Class X',
    period: '2020 – 2021',
    score: '100%',
    location: 'Vijayawada',
  },
]

const quickStats = [
  { label: 'CGPA', value: '8.84', icon: <GraduationCap size={20} /> },
  { label: 'LeetCode', value: '140+', icon: <Code2 size={20} /> },
  { label: 'Graduation', value: '2027', icon: <BookOpen size={20} /> },
  { label: 'Location', value: 'Vijayawada', icon: <MapPin size={20} /> },
]

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <PageHeader
          eyebrow="Background"
          title="About Me"
          subtitle="Get to know who I am beyond the code"
        />

        {/* Top: Bio + Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
            gap: '2rem',
            marginBottom: '3rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Bio Card */}
          <div
            className="card"
            style={{ padding: '2rem' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--accent)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>✦</span> Who Am I?
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                marginBottom: '1rem',
                fontSize: '0.95rem',
              }}
            >
              I'm a third-year Computer Science Engineering student at VIT-AP University, passionate
              about building full-stack web applications that are both functional and beautifully
              designed. My journey in tech started with curiosity about how websites come alive, and
              it quickly grew into a deep interest in the full development stack.
            </p>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                marginBottom: '1.25rem',
                fontSize: '0.95rem',
              }}
            >
              Currently, I am focused on mastering AI integration in full-stack applications —
              exploring how modern LLMs, generative models, and intelligent APIs can be woven into
              web experiences to make them smarter, more personalized, and genuinely useful. I believe
              the next generation of web apps will be AI-native, and I want to be part of building
              that future.
            </p>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                fontSize: '0.95rem',
              }}
            >
              Outside coding, I keep my problem-solving sharp through competitive programming on
              LeetCode (140+ problems) and continuously upskill via NxtWave certifications and
              personal projects.
            </p>

            {/* Contact details */}
            <div
              style={{
                marginTop: '1.75rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
            >
              {[
                { icon: <Mail size={15} />, label: 'praneethkollipara7@gmail.com', href: 'mailto:praneethkollipara7@gmail.com' },
                { icon: <Phone size={15} />, label: '+91-9618145782', href: 'tel:+919618145782' },
                { icon: <MapPin size={15} />, label: '74-22-5, Kolliramachandra Rao Street, Vijayawada', href: null },
                { icon: <Globe size={15} />, label: 'Telugu (Native) · English (Conversational)', href: null },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}
                >
                  <span style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >{item.label}</a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {quickStats.map((s, i) => (
              <div
                key={s.label}
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  animation: `fadeInUp 0.5s ease ${i * 0.1}s both`,
                }}
              >
                <div className="icon-box icon-box--sm">
                  {s.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--text-primary)',
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {s.label}
                  </div>
                </div>
              </div>
            ))}

            {/* Focus Area */}
            <div className="card card-accent" style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                Current Focus
              </div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.9rem' }}>
                AI Integration in Full Stack
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                Building AI-native web applications
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="section-header" style={{ marginBottom: '1.75rem' }}>
            <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Education</h2>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div className="timeline-line" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {education.map((edu, i) => (
                <div
                  key={edu.institution}
                  className="timeline-item"
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'flex-start',
                    animation: `fadeInUp 0.5s ease ${i * 0.12}s both`,
                  }}
                >
                  <div style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
                    <div className={`timeline-dot ${i === 0 ? 'timeline-dot--active' : 'timeline-dot--inactive'}`}>
                      <GraduationCap size={18} />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="card"
                    style={{ flex: 1, padding: '1.25rem 1.5rem' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          fontSize: '1rem',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {edu.institution}
                      </h3>
                      <span className="tag">{edu.period}</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                      {edu.degree}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ color: 'var(--accent)', fontSize: '0.82rem', fontWeight: 600 }}>
                        {edu.score}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={12} /> {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
