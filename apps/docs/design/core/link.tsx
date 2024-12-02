'use client'

import React from 'react'
import { Link } from 'next-view-transitions'

const LinkWrapper: React.FC = ({ children, href, ...rest }) => {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  )
}

export default LinkWrapper
