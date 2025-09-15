'use client'

import React, { useMemo } from 'react'
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../hooks'
import { useContentContext } from '../../../settings/content'
import { Link } from '../link/link'
import { createHref } from './sidebar.utils'

interface CollapsedNavProps {
  isOpen: boolean
}

export default function CollapsedNav({ isOpen }: CollapsedNavProps) {
  const pathName = usePathname()
  const { isLoaded, actions } = useContentContext()

  const content = useMemo(() => {
    if (!isLoaded) return null
    const NAV = actions.getNavigation('main')

    return (
      <Core.GdsFlex
        flex-direction="column"
        gap="2xs"
        align-items="center"
        style={{ paddingLeft: '2px' }}
      >
        {NAV?.links.map((link) => {
          if (link.slug === 'templates') return null

          return (
            <Link
              key={link.slug + isOpen}
              component="button"
              href={createHref(link.slug)}
              rank={
                pathName.startsWith(`/${link.slug}`) ||
                (pathName.split('/').includes('component') &&
                  link.slug === 'components')
                  ? 'secondary'
                  : 'tertiary'
              }
              size="medium"
              justify-content="center"
              flex="1"
            >
              {link.icon && (
                <Icon
                  key={String(isOpen) + link.icon}
                  name={link.icon}
                  solid={
                    pathName.startsWith(`/${link.slug}`) ||
                    (pathName.split('/').includes('component') &&
                      link.slug === 'components')
                      ? true
                      : false
                  }
                />
              )}
            </Link>
          )
        })}
      </Core.GdsFlex>
    )
  }, [isLoaded, actions, pathName, isOpen])

  return content
}
