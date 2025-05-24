'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'

interface CustomLinkProps {
  href: string
  isExternal?: boolean
  children: React.ReactNode
  component?: 'button' | 'link'
  [key: string]: any
}

export const Link = React.forwardRef<HTMLElement, CustomLinkProps>(
  ({ href, isExternal, children, component = 'link', ...props }, ref) => {
    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (isExternal) {
        window.open(href, '_blank')
      } else {
        e.preventDefault()
        router.push(href)
      }
    }

    const Component = component === 'button' ? Core.GdsButton : Core.GdsLink

    return (
      <Component href={href} onClick={handleClick} ref={ref} {...props}>
        {children}
      </Component>
    )
  },
)

Link.displayName = 'Link'
