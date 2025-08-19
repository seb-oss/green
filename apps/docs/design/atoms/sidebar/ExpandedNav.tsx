'use client'

import React, { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { useSettingsContext } from 'apps/docs/settings/hooks'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../hooks'
import { useContentContext } from '../../../settings/content'
import { Link } from '../link/link'
import CollapsibleSection from './CollapsibleSection'
import { createHref } from './sidebar.utils'

interface ExpandedNavProps {
  openSections: Record<string, boolean>
  setOpen: (section: string, next?: boolean) => void
}

export default function ExpandedNav({
  openSections,
  setOpen,
}: ExpandedNavProps) {
  const pathName = usePathname()
  const { isLoaded, actions } = useContentContext()
  const {
    settings: {
      UI: {
        Panel: { MobileMenu },
      },
    },
    actions: SettingsActions,
  } = useSettingsContext()

  const content = useMemo(() => {
    if (!isLoaded) return null

    const NAV = actions.getNavigation('main')
    const components = actions.getComponents()
    const templates = actions.getTemplates()

    return NAV?.links.map((link) => {
      if (link.slug === 'templates') return null

      const href = createHref(link.slug)

      const hasSubItems =
        actions.getNavigation(link.slug) ||
        link.slug === 'components' ||
        link.slug === 'templates'

      if (hasSubItems) {
        let subItems: any[] = []

        if (link.slug === 'components') {
          subItems = components.map((c) => ({
            title: c.title,
            href: `/component/${c.slug}`,
            beta: c.beta,
          }))
        } else if (link.slug === 'templates') {
          subItems = templates.map((t) => ({
            title: t.title,
            href: `/template/${t.slug}`,
          }))
        } else {
          subItems = (actions.getNavigation(link.slug)?.links || []).map(
            (item) => ({
              title: item.title,
              href: createHref(item.slug),
            }),
          ) as any[]
        }

        const isActive =
          pathName === href ||
          pathName.split('/')[1] === href.split('/')[1] ||
          (pathName.split('/')[1].length > 0 &&
            href.split('/')[1].includes(pathName.split('/')[1]))

        return (
          <CollapsibleSection
            key={href}
            title={link.title}
            icon={link.icon}
            href={href}
            onToggle={() => {
              setOpen(link.slug)
              MobileMenu ? SettingsActions.toggle('UI.Panel.MobileMenu') : null
            }}
            isActive={isActive}
          >
            <Core.GdsFlex
              position="relative"
              aria-hidden={isActive ? 'false' : 'true'}
              overflow="hidden"
              style={
                {
                  height: isActive ? 'auto' : '0',
                  transition:
                    'height var(--gds-sys-motion-fast) cubic-bezier(var(--gds-sys-motion-ease-out))',
                } as React.CSSProperties
              }
            >
              <Core.GdsFlex
                flex-direction="column"
                gap="2xs"
                overflow="hidden auto"
                position="relative"
                width="100%"
                padding="2xs"
                height="max-content"
              >
                {subItems.map((item) => (
                  <Link
                    key={item.href}
                    component="button"
                    href={item.href}
                    rank={
                      pathName === item.href ||
                      pathName.startsWith(`${item.href}/`)
                        ? 'secondary'
                        : 'tertiary'
                    }
                    justify-content="space-between"
                    size="small"
                    data-sub-item
                    data-animation="scroll"
                    flex="1"
                    onClick={() => {
                      MobileMenu
                        ? SettingsActions.toggle('UI.Panel.MobileMenu')
                        : null
                    }}
                  >
                    <span data-fade>{item.title}</span>
                    {false && item.beta && (
                      <Core.GdsBadge variant="notice" slot="trail" size="small">
                        BETA
                      </Core.GdsBadge>
                    )}
                  </Link>
                ))}
              </Core.GdsFlex>
            </Core.GdsFlex>
          </CollapsibleSection>
        )
      }

      return (
        <Link
          key={href}
          component="button"
          href={href}
          rank={pathName === href ? 'secondary' : 'tertiary'}
          justify-content="flex-start"
          size="medium"
          align-items="center"
          data-animation="scroll"
          width="100%"
          target={href.startsWith('http') ? '_blank' : undefined}
          onClick={() => {
            MobileMenu ? SettingsActions.toggle('UI.Panel.MobileMenu') : null
          }}
        >
          {link.icon && <Icon name={link.icon} slot="lead" />}
          <span data-fade>{link.title}</span>
        </Link>
      )
    })
  }, [isLoaded, actions, pathName, openSections, setOpen])

  return <>{content}</>
}
