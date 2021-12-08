import { NavbarVariant } from '@sebgroup/extract'
import { HTMLAttributes, ReactNode } from 'react'

interface NavProps {
  title?: string
  variant?: NavbarVariant
  children?: ReactNode
}

//TODO: Add variants
export const Navbar = ({ children, variant, title }: NavProps) => {
  return (
    <nav role="navigation">
      <a
        aria-label="Open seb.se in new tab"
        href="http://www.seb.se"
        target="_blank"
        className="brand"
        rel="noreferrer"
      >
        {''}
      </a>
      <h1 className="mx-4">{title}</h1>
      {children}
    </nav>
  )
}

export default Navbar
