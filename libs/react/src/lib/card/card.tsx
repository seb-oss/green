import { ReactNode } from 'react'

/* eslint-disable-next-line */
export interface CardProps {
  children?: ReactNode
  header?: ReactNode
  footer?: ReactNode
}

/**
 * @deprecated Please use the `gds-card` web component from green-core instead
 */
export function Card({ children, header, footer }: CardProps) {
  return (
    <section className="gds-card">
      {header && <header>{header}</header>}
      {children}
      {footer && <footer>{footer}</footer>}
    </section>
  )
}

export default Card
