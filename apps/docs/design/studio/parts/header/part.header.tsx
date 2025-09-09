'use client'

import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../../atoms/link/link'

interface HeaderProps {
  title: string
  description: string
  children?: React.ReactNode
  count?: number
  search?: React.ReactNode
  filter?: React.ReactNode
  extra?: React.ReactNode
}

export default function Header({
  title,
  description,
  children,
  count,
  search,
  filter,
  extra,
}: HeaderProps) {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const isMigration = segments[segments.length - 1] === 'migration'

  return (
    <Core.GdsFlex flex-direction="column" gap="l">
      <Core.GdsFlex flex-direction="column" gap="l">
        <Core.GdsFlex flex-direction="column" gap="0">
          <Core.GdsText tag="h1">{title}</Core.GdsText>
          <Core.GdsText font="heading-s" font-weight="book" color="neutral-02">
            {description}
          </Core.GdsText>
        </Core.GdsFlex>
        <Core.GdsFlex align-items="center" justify-content="space-between">
          <Core.GdsBreadcrumbs size="small" width="100%" flex="1">
            <Link component="link" href="/">
              <Core.IconHomeOpen slot="lead" size="m" />
              Home
            </Link>
            <Link component="link" href="/studio">
              <Core.IconBrandGreen slot="lead" size="m" />
              Studio
            </Link>
            {isMigration ? (
              <>
                <Link component="link" href="/studio/icons">
                  <Core.IconShapes slot="lead" size="m" />
                  Icons
                </Link>
                <Core.GdsText>Migration</Core.GdsText>
              </>
            ) : (
              <>
                <Core.GdsText>{title}</Core.GdsText>
              </>
            )}
          </Core.GdsBreadcrumbs>
          <Core.GdsFlex align-items="center" gap="s" width="max-content">
            <Core.GdsText color="warning-01">
              Font awesome migration
            </Core.GdsText>
            <Link
              component="button"
              href="/studio/icons/migration"
              rank="secondary"
              variant="warning"
              size="small"
            >
              Instruction
              <Core.IconCircleQuestionmark slot="trail" />
            </Link>
          </Core.GdsFlex>
        </Core.GdsFlex>
      </Core.GdsFlex>
      <Core.GdsDivider color="subtle-01" />
      <Core.GdsFlex
        align-items="center"
        justify-content="space-between"
        gap="xl"
      >
        <Core.GdsFlex align-items="center" gap="s">
          <Core.GdsFlex width="400px">{search}</Core.GdsFlex>
          <Core.GdsFlex min-width="200px">{filter}</Core.GdsFlex>
        </Core.GdsFlex>
        {extra && (
          <Core.GdsDiv width="max-content" height="max-content">
            {extra}
          </Core.GdsDiv>
        )}
        {false && count !== undefined && (
          <Core.GdsText color="positive-03">
            {count} {title.toLowerCase()}
          </Core.GdsText>
        )}
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
