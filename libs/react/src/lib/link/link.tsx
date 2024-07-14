import { HTMLProps, PropsWithChildren } from 'react'
import { ButtonVariant } from '@sebgroup/extract'
import classNames from 'classnames'

interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  button?: boolean | ButtonVariant
  secondary?: boolean
}

export const Link = ({
  button,
  secondary,
  children,
  className,
  role,
  ...otherProps
}: PropsWithChildren<LinkProps>) => {
  const linkClassName = classNames(className, { button: button }, button, {
    'link gds-link-arrow': secondary,
  })

  return (
    <a
      className={linkClassName}
      role={button ? 'button' : role}
      {...otherProps}
    >
      {children}
    </a>
  )
}

export default Link
