'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'

interface CustomLinkProps {
  href: string
  isExternal?: boolean
  children: React.ReactNode
  component?: 'button' | 'link' | 'menu'
  target?: string
  [key: string]: any
}

export const Link = React.forwardRef<HTMLElement, CustomLinkProps>(
  ({ href, isExternal, children, component = 'link', ...props }, ref) => {
    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (isExternal) {
        e.preventDefault()
        window.open(href, '_blank')
      } else {
        e.preventDefault()
        router.push(href, { scroll: false })
      }
    }

    // Determine which component to use
    let Component:
      | typeof Core.GdsButton
      | typeof Core.GdsLink
      | typeof Core.GdsMenuButton
      | typeof Core.GdsFab
      | typeof Core.GdsBreadcrumbsItem
    switch (component) {
      case 'button':
        Component = Core.GdsButton
        break
      case 'fab':
        Component = Core.GdsFab
        break
      case 'breadcrumbs-item':
        Component = Core.GdsBreadcrumbsItem
        break
      case 'menu':
        Component = Core.GdsMenuButton
        break
      default:
        Component = Core.GdsLink
    }

    return (
      <Component href={href} onClick={handleClick} ref={ref} {...props}>
        {children}
      </Component>
    )
  },
)

Link.displayName = 'Link'
