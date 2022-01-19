import { ReactNode } from 'react'

/* eslint-disable-next-line */
export interface CardProps {
  children?: ReactNode
  header?: JSX.Element
  footer?: JSX.Element
}

export function Card({ children, header, footer }: CardProps) {
  return (
    <section className="card">
      <header>{header}</header>
      <p>{children}</p>
      <footer>{footer}</footer>
    </section>
  )
}

export default Card
