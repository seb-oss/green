'use client'

import React from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../hooks'
import { Link } from '../link/link'
import { createHref } from './sidebar.utils'

export interface CollapsibleSectionProps {
  title: string
  icon?: string
  href: string
  onToggle: () => void
  children?: React.ReactNode
  isActive: boolean
}

export default function CollapsibleSection({
  title,
  icon,
  href,
  onToggle,
  children,
  isActive,
}: CollapsibleSectionProps) {
  return (
    <Core.GdsFlex flex-direction="column" gap="2xs" width="100%">
      <Core.GdsFlex align-items="center" justify-content="space-between">
        <Link
          key={href + isActive}
          component="button"
          href={createHref(href)}
          rank={isActive ? 'secondary' : 'tertiary'}
          justify-content="flex-start"
          size="medium"
          align-items="center"
          scroll={false}
          width="100%"
          onClick={onToggle}
        >
          {icon && <Icon name={icon} slot="lead" />}
          <span data-fade>{title}</span>
        </Link>
      </Core.GdsFlex>
      {children}
    </Core.GdsFlex>
  )
}
