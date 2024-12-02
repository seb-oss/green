'use client'

import React from 'react'
import { Link } from 'next-view-transitions'
import { GdsLink } from '$/import/components'

// import { default as NextLink } from 'next/link'
// import { GdsLink, GdsMenuButton } from '$/import/components'

// import { GdsLink as GdsLinkCore } from '@sebgroup/green-core/components/link'

// interface CustomLinkProps {
//   onClick?: React.MouseEventHandler<HTMLAnchorElement>
//   href: string
//   menu?: boolean
//   children: React.ReactNode
//   [key: string]: unknown
// }

// const CustomLink: React.ForwardRefRenderFunction<
//   HTMLAnchorElement,
//   CustomLinkProps
// > = ({ onClick, href, children, menu, ...rest }, ref) => {
//   return (
//     <GdsLink href={href} onClick={onClick} ref={ref} {...rest}>
//       {children}
//     </GdsLink>
//   )
// }

// const ForwardedCustomLink = React.forwardRef(CustomLink)

const LinkWrapper: React.FC<CustomLinkProps> = ({
  children,
  href,
  ...rest
}) => {
  return (
    <Link href={href} {...rest}>
      {/* <Link href={href} passHref legacyBehavior> */}
      {/* <ForwardedCustomLink {...rest} /> */}
      {/* <GdsLink {...rest} /> */}
      {children}
    </Link>
  )
}

export default LinkWrapper
