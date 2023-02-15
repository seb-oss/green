import { HTMLProps, PropsWithChildren, useEffect, useState } from 'react'
import { ButtonVariant } from '@sebgroup/extract'

interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  button?: boolean | ButtonVariant
}

export const Link = ({
  button,
  children,
  ...props
}: PropsWithChildren<LinkProps>) => {
  const [anchorProps, setAnchorProps] = useState<HTMLProps<HTMLAnchorElement>>(
    {}
  )
  useEffect(() => {
    const className = button
      ? typeof button === 'string'
        ? `button ${button}`
        : 'button'
      : undefined
    const newProps: HTMLProps<HTMLAnchorElement> = {
      role: button ? 'button' : undefined,
      className: className,
      ...props,
    }
    setAnchorProps(newProps)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [button])

  return <a {...anchorProps}>{children}</a>
}

export default Link
