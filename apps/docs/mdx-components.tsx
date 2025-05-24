import React, { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'

import { GdsText } from '@sebgroup/green-core/react'

type AnchorProps = ComponentPropsWithoutRef<'a'>

const components = {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <GdsText tag="h1">{children}</GdsText>
  ),

  a: ({ href, children, ...props }: AnchorProps) => {
    const className = 'internal-link'
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      )
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    )
  },
}

declare global {
  type MDXProvidedComponents = typeof components
}

export function useMDXComponents(): MDXProvidedComponents {
  return components
}
