import { HTMLProps, PropsWithChildren } from 'react'
import classNames from 'classnames'

interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  button?: boolean | string
  secondary?: boolean
  variant?: 'blue' | 'white' | 'black'
}

/**
 * @deprecated Please use the `gds-link` web component from green-core instead
 */
export const Link = ({
  button,
  secondary,
  children,
  className,
  role,
  variant = 'blue',
  ...props
}: PropsWithChildren<LinkProps>) => {
  const linkClassName = classNames(
    className,
    {
      'gds-link': !button,
      'gds-button': button,
      'gds-link-arrow': secondary,
      'gds-link--white': variant === 'white',
      'gds-link--black': variant === 'black',
    },
    button,
  )

  return (
    <a className={linkClassName} role={button ? 'button' : role} {...props}>
      {children}
    </a>
  )
}

export default Link
