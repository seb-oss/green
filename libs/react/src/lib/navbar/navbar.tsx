import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'

import { NavbarVariant } from '@sebgroup/extract'
import Link from '../link/link'

export interface NavProps extends HTMLAttributes<HTMLElement> {
  title?: string
  titleLink?: string
  brandLink?: string
  brandAriaLabel?: string
  variant?: NavbarVariant
  children?: ReactNode
}

/**
 * @deprecated Please use the `gds-menu-button` web component from green-core instead
 */
export const Navbar = ({
  children,
  variant,
  title,
  titleLink,
  brandLink = 'https://www.seb.se',
  brandAriaLabel = 'Open seb.se in new tab',
}: NavProps) => {
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
        aria-label={brandAriaLabel}
        href={brandLink}
        target="_blank"
        className="brand"
      />
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            {titleLink ? (
              <Link className="mx-4" href={titleLink}>
                <h1>{title}</h1>
              </Link>
            ) : (
              <h1>{title}</h1>
            )}
          </div>
          <div className="col-auto">
            <div className="group size-sm">{children}</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
