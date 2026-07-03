interface PageHeaderProps {
  eyebrow: string
  title: string
  subtitle: string
  centered?: boolean
}

export default function PageHeader({ eyebrow, title, subtitle, centered = true }: PageHeaderProps) {
  return (
    <div className={`page-header${centered ? ' page-header--center' : ''}`}>
      <span className="page-eyebrow">{eyebrow}</span>
      <div className="section-header">
        <h1 className="section-title">{title}</h1>
      </div>
      <p className="section-subtitle page-header-subtitle">{subtitle}</p>
    </div>
  )
}
