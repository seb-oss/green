import { NavbarVariant } from '@sebgroup/extract'
import Link from '../link/link'
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'

interface NavProps extends HTMLAttributes<HTMLElement> {
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
      <Link
        aria-label="Open seb.se in new tab"
        href="http://www.seb.se"
        target="_blank"
        className="brand"
      />
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <Link className="mx-4">
              <h1>{title}</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-auto">
        <div className="group size-sm">{children}</div>
      </div>
    </nav>
  )
}

export default Navbar
