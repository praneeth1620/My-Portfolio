import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '../components/BrandIcons'
import PageHeader from '../components/PageHeader'

const projects = [
  {
    title: 'Heart Attack Prediction',
    description:
      'A clinical decision-support tool that helps doctors assess a patient\'s heart attack risk using routine parameters like age, cholesterol, and blood pressure. The React dashboard talks to a Python ML model over FastAPI, so results are quick and easy to read during a consultation.',
    tech: ['Python', 'React', 'FastAPI'],
    type: 'Full Stack + AI',
    status: 'Personal Project',
    github: 'https://github.com/praneeth1620/Heart-Attack-prediction',
    live: null,
    highlight: true,
  },
  {
    title: 'MLS Law Journal',
    description:
      'A content platform built for a law firm to publish legal blogs, document case studies, and share insights with clients. Lawyers can upload and manage articles from one place, making the firm\'s expertise easy to browse and reference.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    type: 'Full Stack',
    status: 'Client Project',
    github: 'https://github.com/praneeth1620/MLS_LAW_JOURNAL',
    live: null,
    highlight: false,
  },
  {
    title: 'MLS Law Firm',
    description:
      'The official website for a law firm where visitors can learn about the practice, verify credentials, and book appointments online. Built to feel trustworthy and straightforward—so reaching out for legal help takes just a few clicks.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    type: 'Full Stack',
    status: 'Client Project',
    github: 'https://github.com/praneeth1620/MLS',
    live: null,
    highlight: false,
  },
  {
    title: 'Food Munch',
    description:
      'A restaurant food-ordering website inspired by Swiggy, with menu browsing, cart flow, and a mobile-friendly layout. One of my early front-end builds—pure HTML, CSS, and JavaScript, focused on getting the UI and user flow right before moving into frameworks.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    type: 'Frontend',
    status: 'Personal Project',
    github: 'https://github.com/praneeth1620/FoodMunch',
    live: null,
    highlight: false,
  },
]

const typeColors: Record<string, string> = {
  'Full Stack + AI': '#8B5CF6',
  'Full Stack': 'var(--accent)',
  'Frontend': '#F59E0B',
}

export default function ProjectsPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <PageHeader
          eyebrow="Portfolio"
          title="Projects"
          subtitle="Things I've built while learning and growing as a developer"
        />

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                animation: `fadeInUp 0.5s ease ${i * 0.1}s both`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Featured badge */}
              {project.highlight && (
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'var(--accent)',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '100px',
                    letterSpacing: '0.04em',
                  }}
                >
                  FEATURED
                </div>
              )}

              {/* Type badge */}
              <div style={{ marginBottom: '0.85rem' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.2rem 0.65rem',
                    background: `${typeColors[project.type]}18`,
                    color: typeColors[project.type],
                    border: `1px solid ${typeColors[project.type]}40`,
                    borderRadius: '100px',
                    fontSize: '0.73rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                  }}
                >
                  {project.type}
                </span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                {project.title}
              </h2>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  flex: 1,
                  marginBottom: '1.25rem',
                }}
              >
                {project.description}
              </p>

              {/* Tech Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {project.tech.map(t => (
                  <span key={t} className="skill-pill" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: '6px' }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ flex: 1, justifyContent: 'center', padding: '0.55rem 1rem' }}
                >
                  <GitHubIcon size={15} /> GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ flex: 1, justifyContent: 'center', padding: '0.55rem 1rem' }}
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="cta-panel">
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem', position: 'relative', zIndex: 1 }}>
            More projects and code experiments on my GitHub
          </p>
          <a
            href="https://github.com/praneeth1620"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ position: 'relative', zIndex: 1 }}
          >
            <GitHubIcon size={16} /> View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
}
