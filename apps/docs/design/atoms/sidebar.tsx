'use client'

import NextLink from 'next/link'

import * as Core from '@sebgroup/green-core/react'

export default function Sidebar() {
  const Link = ({
    title,
    href,
    children,
  }: {
    title: string
    href: string
    children: React.ReactNode
  }) => {
    return (
      <NextLink href={href}>
        <Core.GdsFlex justify-content="space-between" color="primary">
          <Core.GdsText text-style="none">{title}</Core.GdsText>
          {children}
        </Core.GdsFlex>
      </NextLink>
    )
  }
  return (
    <Core.GdsCard variant="secondary" width="20%" height="max-content">
      <Link title="Home" href="/">
        <Core.IconHomeOpen />
      </Link>
    </Core.GdsCard>
  )
}
