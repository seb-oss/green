import "@/spacer/spacer.css"

interface SpacerProps {
  size?: "small" | "medium" | "large"
  decorated?: boolean
}

export default function Spacer({ size, decorated }: SpacerProps) {
  let className = "gds-spacer"
  if (size) {
    className += ` gds-spacer-${size}`
  }
  if (decorated) {
    className += " gds-spacer-decorator"
  }
  return <div className={className}>{decorated && <hr />}</div>
}
