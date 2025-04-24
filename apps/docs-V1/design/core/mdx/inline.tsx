import { ReactNode } from 'react'

export default function Inline({
  children,
  lang,
}: {
  children: ReactNode
  lang: string
}) {
  return (
    <span className="inline" lang={lang}>
      {!lang && `"`}
      {children}
      {!lang && `"`}
    </span>
  )
}
