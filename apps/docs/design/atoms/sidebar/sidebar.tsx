'use client'

import { create } from 'domain'
import React, { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { _, Icon } from '../../../hooks'
import { useSettingsContext, useSettingsValue } from '../../../settings'
import { useContentContext } from '../../../settings/content'
import { Link } from '../link/link'

import './sidebar.css'

const createHref = (slug: string) => {
  if (slug.startsWith('https')) return slug

  return slug.startsWith('/') ? slug : `/${slug}`
}

interface CollapsibleSectionProps {
  title: string
  icon?: string
  href: string
  isOpen: boolean
  onToggle: () => void
  children?: React.ReactNode
  isActive: boolean
}

const CollapsibleSection = ({
  title,
  icon,
  href,
  isOpen,
  onToggle,
  children,
  isActive,
}: CollapsibleSectionProps) => (
  <Core.GdsFlex flex-direction="column" gap="2xs" width="100%">
    <Core.GdsFlex
      align-items="center"
      justify-content="space-between"
      gap="2xs"
    >
      <Link
        key={href + isActive}
        component="button"
        href={createHref(href)}
        rank={isActive ? 'secondary' : 'tertiary'}
        justify-content="flex-start"
        size="medium"
        align-items="center"
        // data-animation="scroll"
        scroll={false}
        width="100%"
      >
        {icon && <Icon name={icon} slot="lead" />}
        <span data-fade>{title}</span>
      </Link>
    </Core.GdsFlex>
    {isActive && children}
  </Core.GdsFlex>
)

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)
  const pathName = usePathname()
  const { isLoaded, actions } = useContentContext()
  const { actions: SettingsActions } = useSettingsContext()

  const sectionsWithSubItems = ['components']

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => {
      const initialState: Record<string, boolean> = {}

      sectionsWithSubItems.forEach((section) => {
        // Check both exact path and sub-paths
        const isExactPath = pathName === `/${section}`
        const isSubPath = pathName.startsWith(`/${section.replace('s', '')}`)
        initialState[section] = isExactPath || isSubPath
      })

      return initialState
    },
  )

  useEffect(() => {
    setOpenSections((prev) => {
      const newState = { ...prev }

      sectionsWithSubItems.forEach((section) => {
        const isExactPath = pathName === `/${section}`
        const isSubPath = pathName.startsWith(`/${section.replace('s', '')}`)

        if (isExactPath || isSubPath) {
          newState[section] = true
        }
      })

      return newState
    })
  }, [pathName])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const renderCollapsedNav = useMemo(() => {
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
          if (link.slug === 'templates') return

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
              // data-animation="scroll"
            >
              {link.icon && (
                <Icon key={isOpen + '' + link.icon} name={link.icon} />
              )}
            </Link>
          )
        })}
      </Core.GdsFlex>
    )
  }, [isLoaded, actions, pathName])

  const renderExpandedNav = useMemo(() => {
    if (!isLoaded) return null

    const NAV = actions.getNavigation('main')
    const components = actions.getComponents()
    const templates = actions.getTemplates()

    return NAV?.links.map((link) => {
      if (link.slug === 'templates') return

      const href = createHref(link.slug)

      if (
        sectionsWithSubItems.includes(link.slug) ||
        actions.getNavigation(link.slug)
      ) {
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
          subItems = actions.getNavigation(link.slug)?.links.map((item) => ({
            title: item.title,
            href: createHref(item.slug),
          })) as any[]
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
            href={createHref(href)}
            isOpen={openSections[link.slug]}
            onToggle={() => toggleSection(link.slug)}
            isActive={isActive}
          >
            <Core.GdsFlex
              position="relative"
              style={{ maxHeight: 'calc(100vh - 700px)' }}
            >
              <Core.GdsFlex
                flex-direction="column"
                gap="2xs"
                overflow="hidden auto"
                position="relative"
                width="100%"
                padding="2xs"
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
          href={createHref(href)}
          rank={pathName === href ? 'secondary' : 'tertiary'}
          justify-content="flex-start"
          size="medium"
          align-items="center"
          data-animation="scroll"
          width="100%"
          target={href.startsWith('http') ? '_blank' : undefined}
        >
          {link.icon && <Icon name={link.icon} slot="lead" />}
          <span data-fade>{link.title}</span>
        </Link>
      )
    })
  }, [isLoaded, actions, pathName, openSections])

  const handleToggleSidebar = () => {
    SettingsActions.toggle('UI.Panel.Sidebar')
  }

  const handleToggleSearch = () => {
    SettingsActions.toggle('UI.Panel.Command')
  }

  return (
    <div
      className={`sidebar ${isOpen ? 'open' : 'closed'}`}
      role="navigation"
      aria-label="Main"
    >
      <Core.GdsFlex
        key={isOpen ? 'top-sidebar-open' : 'top-sidebar-closed'}
        justify-content={'flex-start'}
        align-items="flex-start"
        gap="l"
        display={menuOpen ? 'none' : 'none; s{flex}'}
        style={isOpen ? {} : { paddingLeft: '2px' }}
        width="100%"
        bac
      >
        <Core.GdsButton
          key={isOpen ? 'sidebar-open' : 'sidebar-closed'}
          rank="tertiary"
          justify-content={isOpen ? 'flex-start' : 'center'}
          width={isOpen ? '100%' : 'max-content'}
          onClick={handleToggleSearch}
        >
          {isOpen ? (
            <>
              <Icon name="IconMagnifyingGlass" slot="lead" />
              Search
            </>
          ) : (
            <Icon name="IconMagnifyingGlass" />
          )}
        </Core.GdsButton>
      </Core.GdsFlex>
      <Core.GdsFlex
        flex-direction="column"
        gap="2xs"
        align-items={'flex-start'}
        display={menuOpen ? 'flex' : 'none; s{flex}'}
        padding={menuOpen ? '0 l 0 0' : '0'}
        width="100%"
        margin="auto"
      >
        {isOpen || menuOpen ? renderExpandedNav : renderCollapsedNav}
      </Core.GdsFlex>
      <Core.GdsFlex
        key={isOpen ? 'sidebar-open' : 'sidebar-closed'}
        justify-content={'flex-start'}
        align-items="flex-start"
        gap="l"
        display={menuOpen ? 'none' : 'none; s{flex}'}
        style={isOpen ? {} : { paddingLeft: '2px' }}
        width="100%"
      >
        <Core.GdsButton
          onClick={handleToggleSidebar}
          rank="tertiary"
          justify-content={isOpen ? 'flex-start' : 'center'}
          width={isOpen ? '100%' : 'max-content'}
        >
          {isOpen ? (
            <>
              <Icon name="IconMenuSidebar" slot="lead" solid />
              Minimise menu
            </>
          ) : (
            <Icon name="IconMenuSidebar" />
          )}
        </Core.GdsButton>
      </Core.GdsFlex>
    </div>
  )
}
