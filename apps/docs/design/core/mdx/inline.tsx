import { ReactNode } from 'react'

export default function Inline({ children }: { children: ReactNode }) {
  return (
    <span className="inline">
      {`"`}
      {children}
      {`"`}
    </span>
  )
}
