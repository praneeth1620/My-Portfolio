import PageHeader from '../components/PageHeader'
import TiltCard from '../components/TiltCard'

const skillCategories = [
  {
    title: 'Programming Languages',
    emoji: '💻',
    skills: ['Java', 'Python', 'C', 'C++ (Basic)', 'JavaScript'],
  },
  {
    title: 'Frontend',
    emoji: '🎨',
    skills: ['React', 'Bootstrap', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    skills: ['Node.js', 'Express.js', 'FastAPI'],
  },
  {
    title: 'Database',
    emoji: '🗄️',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Version Control',
    emoji: '🔀',
    skills: ['Git', 'GitHub'],
  },
]

export default function SkillsPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <PageHeader
          eyebrow="Tech Stack"
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillCategories.map((cat, i) => (
            <TiltCard
              key={cat.title}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: '1.75rem',
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <span className="icon-box icon-box--sm" style={{ fontSize: '1.25rem' }}>
                  {cat.emoji}
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {cat.title}
                </h2>
              </div>

              {/* Skills as clean tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Currently Learning Banner */}
        <div className="highlight-banner">
          <span style={{ fontSize: '2rem' }}>🌱</span>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.25rem',
              }}
            >
              Currently Exploring
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              AI Integration in Full Stack — LLM APIs, RAG pipelines, generative UI, and building AI-native web applications with React + Python backends.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
