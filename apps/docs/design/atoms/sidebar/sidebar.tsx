'use client'

import React, { useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { _, Icon } from '../../../hooks'
import { useSettingsContext, useSettingsValue } from '../../../settings'
import { useContentContext } from '../../../settings/content'
import { Link } from '../link/link'

import './sidebar.css'

interface CollapsibleSectionProps {
  title: string
  icon?: string
  href: string
  isOpen: boolean
  onToggle: () => void
  children?: React.ReactNode
  isActive: boolean
}

const foundationPages = [
  { title: 'Colors', slug: 'colors' },
  { title: 'Typography', slug: 'typography' },
  { title: 'Spacing', slug: 'spacing' },
  { title: 'Layout', slug: 'layout' },
]

const CollapsibleSection = ({
  title,
  icon,
  href,
  isOpen,
  onToggle,
  children,
  isActive,
}: CollapsibleSectionProps) => (
  <Core.GdsFlex flex-direction="column" width="100%" gap="xs">
    <Core.GdsFlex
      width="100%"
      align-items="center"
      justify-content="space-between"
      gap="2xs"
    >
      <Link
        component="button"
        href={href}
        rank={isActive ? 'secondary' : 'tertiary'}
        justify-content="flex-start"
        size="medium"
        align-items="center"
        style={{ flex: 1 }}
      >
        {icon && <Icon name={icon} slot="lead" />}
        {title}
      </Link>
      <Core.GdsButton
        rank="tertiary"
        onClick={(e) => {
          e.preventDefault()
          onToggle()
        }}
      >
        <Icon name={isOpen ? 'IconChevronTop' : 'IconChevronBottom'} />
      </Core.GdsButton>
    </Core.GdsFlex>
    {isOpen && children}
  </Core.GdsFlex>
)

export default function Sidebar() {
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)
  const pathName = usePathname()
  const { isLoaded, actions } = useContentContext()
  const { actions: SettingsActions } = useSettingsContext()

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    components: false,
    templates: false,
    foundation: false,
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Separate rendering for collapsed state
  const renderCollapsedNav = useMemo(() => {
    if (!isLoaded) return null

    const NAV = actions.getNavigation('main')
    return (
      <Core.GdsFlex
        flex-direction="column"
        gap="xs"
        align-items="center"
        width="100%"
      >
        {NAV?.links.map((link) => (
          <Link
            key={link.slug}
            component="button"
            href={link.slug.startsWith('/') ? link.slug : `/${link.slug}`}
            rank={
              pathName.startsWith(`/${link.slug}`) ? 'secondary' : 'tertiary'
            }
            size="medium"
            justify-content="center"
          >
            {link.icon && <Icon name={link.icon} />}
          </Link>
        ))}
      </Core.GdsFlex>
    )
  }, [isLoaded, actions, pathName])

  // Separate rendering for expanded state
  const renderExpandedNav = useMemo(() => {
    if (!isLoaded) return null

    const NAV = actions.getNavigation('main')
    const components = actions.getComponents()
    const templates = actions.getTemplates()

    return NAV?.links.map((link) => {
      const href = link.slug.startsWith('/') ? link.slug : `/${link.slug}`

      if (['components', 'templates', 'foundation'].includes(link.slug)) {
        let subItems: any[] = []

        if (link.slug === 'components') {
          subItems = components.map((c) => ({
            title: c.title,
            href: `/component/${c.slug}`,
          }))
        } else if (link.slug === 'templates') {
          subItems = templates.map((t) => ({
            title: t.title,
            href: `/template/${t.slug}`,
          }))
        } else if (link.slug === 'foundation') {
          subItems = foundationPages.map((p) => ({
            title: p.title,
            href: `/foundation/${p.slug}`,
          }))
        }

        return (
          <CollapsibleSection
            key={href}
            title={link.title}
            icon={link.icon}
            href={href}
            isOpen={openSections[link.slug]}
            onToggle={() => toggleSection(link.slug)}
            isActive={pathName.startsWith(href)}
          >
            <Core.GdsFlex flex-direction="column" gap="xs">
              {subItems.map((item) => (
                <Link
                  key={item.href}
                  component="button"
                  href={item.href}
                  rank={pathName === item.href ? 'secondary' : 'tertiary'}
                  justify-content="flex-start"
                  size="small"
                  style={{ paddingLeft: '42px' }}
                >
                  {item.title}
                </Link>
              ))}
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
        >
          {link.icon && <Icon name={link.icon} slot="lead" />}
          {link.title}
        </Link>
      )
    })
  }, [isLoaded, actions, pathName, openSections])

  const renderSettingsButton = useMemo(
    () => (
      <Core.GdsFlex
        margin="auto 0 0 0"
        background="transparent"
        data-backdrop
        width="100%"
        justify-content={isOpen ? 'flex-start' : 'center'}
      >
        <Link
          component="button"
          width={isOpen ? '100%' : 'max-content'}
          size="medium"
          href="/settings"
          rank={pathName === '/settings' ? 'secondary' : 'tertiary'}
          justify-content={isOpen ? 'flex-start' : 'center'}
        >
          {isOpen ? (
            <>
              <Icon name="IconSettingsGear" slot="lead" />
              Settings
            </>
          ) : (
            <Icon name="IconSettingsGear" />
          )}
        </Link>
      </Core.GdsFlex>
    ),
    [isOpen, pathName],
  )

  const handleToggleSidebar = () => {
    SettingsActions.toggle('UI.Panel.Sidebar')
  }

  return (
    <Core.GdsCard
      variant="secondary"
      border-radius="0"
      justify-content="flex-start"
      align-items={isOpen ? 'flex-start' : 'center'}
      gap="4xl"
      className={_('sidebar', isOpen ? 'open' : 'closed')}
      padding="l xs"
      height="calc(100vh - 180px)"
      min-width={isOpen ? '240px' : '80px'}
      width={isOpen ? '240px' : 'max-content'}
      position="sticky"
    >
      <Core.GdsFlex
        key={isOpen ? 'sidebar-open' : 'sidebar-closed'}
        padding={isOpen ? '0 0 0 m' : '0'}
        justify-content={isOpen ? 'flex-start' : 'center'}
        width="100%"
      >
        <Link
          component="button"
          onClick={handleToggleSidebar}
          rank="tertiary"
          width="max-content"
          size="medium"
        >
          {isOpen ? (
            <Icon name="IconCrossLarge" />
          ) : (
            <Icon name="IconMenuSidebar" />
          )}
        </Link>
      </Core.GdsFlex>

      <Core.GdsFlex
        flex-direction="column"
        gap="xs"
        width="100%"
        align-items={isOpen ? 'flex-start' : 'center'}
      >
        {isOpen ? renderExpandedNav : renderCollapsedNav}
      </Core.GdsFlex>
      <Core.GdsFlex
        key={isOpen ? 'settings-open' : 'settings-closed'}
        margin="auto 0 0 0"
        background="transparent"
        data-backdrop
        width="100%"
        justify-content={isOpen ? 'flex-start' : 'center'}
      >
        <Link
          component="button"
          size="medium"
          href="/settings"
          rank={pathName === '/settings' ? 'secondary' : 'tertiary'}
          justify-content={isOpen ? 'flex-start' : 'center'}
        >
          {isOpen ? (
            <>
              <Icon name="IconSettingsGear" slot="lead" />
              Settings
            </>
          ) : (
            <Icon name="IconSettingsGear" />
          )}
        </Link>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
