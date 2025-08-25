'use client'

import './code.css'

export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="code">
      <code>{children}</code>
    </pre>
  )
}
