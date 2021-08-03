import { FC, ReactNode } from 'react'
import Button from '../button'

export interface CardProps {
  children?: ReactNode
  headline?: string
  buttons?: typeof Button[]
}

const Card: FC<CardProps> = ({ children, headline, buttons }) => {
  return (
    <section className="card">
      <div className="card-body">
        { headline && <h2>{headline}</h2> }
        <p>{children}</p>
        {buttons && <footer>{buttons}</footer> }
      </div>
    </section>
  )
}

export default Card
