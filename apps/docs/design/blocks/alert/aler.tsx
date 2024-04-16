import "@/alert/alert.css"

export default function Alert() {
  return (
    <div className="alert">
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
      <span>
        {`This is the staging site of seb.io, The Green Design System is work in progress and not ready to use, but feel free to explore!`}
      </span>
    </div>
  )
}
