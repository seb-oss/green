import { HTMLProps, PropsWithChildren } from 'react'
import { ButtonVariant } from '@sebgroup/extract'
import classNames from 'classnames'

interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  button?: boolean | ButtonVariant
}

export const Link = ({
  button,
  children,
  className,
  role,
  ...otherProps
}: PropsWithChildren<LinkProps>) => {
  const buttonClassName = classNames(className, { "button": button }, button)

  return (
    <a
      className={buttonClassName}
      role={button ? 'button' : role}
      {...otherProps}
    >
      {children}
    </a>
  )
}

export default Link
