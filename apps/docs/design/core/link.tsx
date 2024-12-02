'use client'

import React from 'react'
// import { Link } from 'next-view-transitions'
import { default as NextLink } from 'next/link'
import { GdsLink, GdsMenuButton } from '$/import/components'

import { GdsLink as GdsLinkCore } from '@sebgroup/green-core/components/link'
import { GdsMenuButton as GdsMenuButtonCore } from '@sebgroup/green-core/components/menu-button'

interface CustomLinkProps {
  onClick?: (e: Event) => void
  href: string
  menu?: boolean
  children: React.ReactNode
  [key: string]: unknown
}

const CustomLink: React.ForwardRefRenderFunction<
  GdsLinkCore & GdsMenuButtonCore,
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

const LinkWrapper: React.FC<CustomLinkProps> = ({ href, ...rest }) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <ForwardedCustomLink {...rest} />
    </NextLink>
  )
}

export default LinkWrapper
