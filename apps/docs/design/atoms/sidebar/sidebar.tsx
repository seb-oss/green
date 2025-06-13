'use client'

import React, { JSX, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { _, Icon } from '../../../hooks'
import { useSettingsContext, useSettingsValue } from '../../../settings'
import { useContentContext } from '../../../settings/content'
import { Link } from '../link/link'
import SidebarCollapsed from './sidebar.collapsed'

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

  const renderNavigation = useMemo(() => {
    if (!isLoaded) return null

    const NAV = actions.getNavigation('main')
    const components = actions.getComponents()
    const templates = actions.getTemplates()

    const isExternalUrl = (url: string) => {
      return url.startsWith('http') || url.startsWith('https')
    }

    const formatInternalUrl = (slug: string) => {
      return slug.startsWith('/') ? slug : `/${slug}`
    }

    return NAV?.links.map((link) => {
      const href = isExternalUrl(link.slug)
        ? link.slug
        : formatInternalUrl(link.slug)

      // Handle collapsible sections
      if (['components', 'templates', 'foundation'].includes(link.slug)) {
        let subItems: any[] = []

        if (link.slug === 'components') {
          subItems = components.map((component) => ({
            title: component.title,
            href: `/component/${component.slug}`,
          }))
        } else if (link.slug === 'templates') {
          subItems = templates.map((template) => ({
            title: template.title,
            href: `/template/${template.slug}`,
          }))
        } else if (link.slug === 'foundation') {
          subItems = foundationPages.map((page) => ({
            title: page.title,
            href: `/foundation/${page.slug}`,
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

      // Regular navigation items
      return (
        <Link
          key={href}
          component="button"
          href={href}
          rank={pathName === href ? 'secondary' : 'tertiary'}
          justify-content="flex-start"
          size="medium"
          align-items="center"
          isExternal={isExternalUrl(href)}
          data-animation="scroll"
        >
          {link.icon && <Icon name={link.icon} slot="lead" />}
          {link.title}
        </Link>
      )
    })
  }, [isLoaded, actions, pathName, openSections])

  const handleToggleSidebar = (): void => {
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
      <Core.GdsFlex padding="0 0 0 m">
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
      {isOpen && (
        <Core.GdsFlex flex-direction="column" gap="xs" width="100%">
          {renderNavigation}
        </Core.GdsFlex>
      )}
      <Core.GdsFlex
        margin="auto 0 0 0"
        background="transparent"
        data-backdrop
        width="100%"
      >
        <Link
          component="button"
          width="100%"
          size="medium"
          key="settings"
          href={`/settings`}
          rank={pathName === `/settings` ? 'secondary' : 'tertiary'}
          justify-content="flex-start"
        >
          <Icon name="IconSettingsGear" slot="lead" />
          Settings
        </Link>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
