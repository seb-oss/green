import { ReactNode } from 'react'
import Button from '../form/button/button'

/* eslint-disable-next-line */
export interface CardProps {
  children?: ReactNode
  headline?: string
  buttons?: typeof Button[]
}

export function Card({ children, headline, buttons }: CardProps) {
  return (
    <section className="card">
      <div className="card-body">
        {headline && <h2>{headline}</h2>}
        <p>{children}</p>
        {buttons && <footer>{buttons}</footer>}
      </div>
    </section>
  )
}

export default Card
