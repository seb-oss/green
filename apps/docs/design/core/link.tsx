'use client'

import React from 'react'
import { default as NextLink } from 'next/link'
import { GdsLink, GdsMenuButton } from '$/import/components'

interface CustomLinkProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  href: string
  menu?: boolean
  children: React.ReactNode
  [key: string]: unknown
}

const CustomLink: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  CustomLinkProps
> = ({ onClick, href, children, menu, ...rest }, ref) => {
  if (menu) {
    return (
      <GdsMenuButton href={href} onClick={onClick} ref={ref} {...rest}>
        {children}
      </GdsMenuButton>
    )
  } else {
    return (
      <GdsLink href={href} onClick={onClick} ref={ref} {...rest}>
        {children}
      </GdsLink>
    )
  }
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
