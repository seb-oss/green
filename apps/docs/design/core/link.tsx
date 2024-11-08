import React from 'react'
import { default as NextLink } from 'next/link'
import { GdsLink } from '$/import/components'

// Define the props type for CustomLink
interface CustomLinkProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  href?: string
}

const CustomLink: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  CustomLinkProps
> = ({ onClick, href }, ref) => {
  return (
    <GdsLink href={href} onClick={onClick} ref={ref}>
      Click Me
    </GdsLink>
  )
}

const ForwardedCustomLink = React.forwardRef(CustomLink)

export default function LinkWrapper() {
  return (
    <NextLink href="/about" passHref legacyBehavior>
      <ForwardedCustomLink />
    </NextLink>
  )
}
