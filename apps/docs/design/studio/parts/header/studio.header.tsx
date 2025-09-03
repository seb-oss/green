'use client'

import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../../atoms/link/link'

interface HeaderProps {
  title: string
  description: string
  children?: React.ReactNode
  count?: number
  search?: React.ReactNode
  filter?: React.ReactNode
}

export default function Header({
  title,
  description,
  children,
  count,
  search,
  filter,
}: HeaderProps) {
  return (
    <Core.GdsFlex flex-direction="column" gap="l">
      <Core.GdsFlex flex-direction="column" gap="l">
        <Core.GdsFlex flex-direction="column" gap="0">
          <Core.GdsText tag="h1">{title}</Core.GdsText>
          <Core.GdsText font="heading-s" font-weight="book" color="neutral-02">
            {description}
          </Core.GdsText>
        </Core.GdsFlex>
        <Core.GdsBreadcrumbs size="small">
          <Link component="link" href="/">
            <Core.IconHomeOpen slot="lead" size="m" />
            Home
          </Link>
          <Link component="link" href="/studio">
            <Core.IconBrandGreen slot="lead" size="m" />
            Studio
          </Link>
          <Core.GdsText>{title}</Core.GdsText>
        </Core.GdsBreadcrumbs>
      </Core.GdsFlex>
      <Core.GdsDivider color="subtle-01" />
      <Core.GdsFlex align-items="center" justify-content="space-between">
        <Core.GdsFlex align-items="center" gap="s">
          <Core.GdsFlex width="400px">{search}</Core.GdsFlex>
          <Core.GdsFlex width="200px">{filter}</Core.GdsFlex>
        </Core.GdsFlex>
        {false && count !== undefined && (
          <Core.GdsText color="positive-03">
            {count} {title.toLowerCase()}
          </Core.GdsText>
        )}
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
