import "@/badge/badge.css"

interface BadgeProps {
  label?: string
  title?: string
}

export default function Badge({ label = "Label", title }: BadgeProps) {
  return (
    <div className="gds-badge">
      <div className="gds-badge-title">{title}</div>
      <span className="gds-badge-label">{label}</span>
    </div>
  )
}
