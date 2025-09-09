import { HTMLProps, PropsWithChildren } from 'react'
import classNames from 'classnames'

import { ButtonVariant } from '@sebgroup/extract'

interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  button?: boolean | ButtonVariant
  secondary?: boolean
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
