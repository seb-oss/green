import React from 'react'
import { default as NextLink } from 'next/link'
import { GdsLink } from '$/import/components'

interface CustomLinkProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  href: string
  children: React.ReactNode
  [key: string]: unknown
}

const CustomLink: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  CustomLinkProps
> = ({ onClick, href, children, ...rest }, ref) => {
  return (
    <GdsLink href={href} onClick={onClick} ref={ref} {...rest}>
      {children}
    </GdsLink>
  )
}

const ForwardedCustomLink = React.forwardRef(CustomLink)

const Link: React.FC<CustomLinkProps> = ({ href, ...rest }) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <ForwardedCustomLink {...rest} />
    </NextLink>
  )
}

export default Link
