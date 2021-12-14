import { NavbarVariant } from '@sebgroup/extract'
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'

interface NavProps {
  title?: string
  variant?: NavbarVariant
  children?: ReactNode
}

//TODO: Add variants
export const Navbar = ({ children, variant, title }: NavProps) => {
  const [props, setProps] = useState<HTMLAttributes<HTMLElement>>({})
  useEffect(() => {
    const classNames: string[] = []
    if (variant) classNames.push(variant)
    setProps({ ...props, className: classNames.join(' ') })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant])

  return (
    <nav role="navigation" {...props}>
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
