'use client'

import React, { JSX, useMemo } from 'react'
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { _, Icon } from '../../../hooks'
import { useSettingsContext, useSettingsValue } from '../../../settings'
import { useContentContext } from '../../../settings/content'
import { Link } from '../link/link'
import SidebarCollapsed from './sidebar.collapsed'

import './sidebar.css'

export default function Sidebar() {
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)
  const pathName = usePathname()
  const { isLoaded, actions } = useContentContext()
  const { actions: SettingsActions } = useSettingsContext()

  const renderNavigation = useMemo(() => {
    if (!isLoaded) return null

    const NAV = actions.getNavigation('main')
    const components = actions.getComponents()
    const templates = actions.getTemplates()

    // Helper function to check if URL is external
    const isExternalUrl = (url: string) => {
      return url.startsWith('http') || url.startsWith('https')
    }

    // Helper function to format internal URLs
    const formatInternalUrl = (slug: string) => {
      return slug.startsWith('/') ? slug : `/${slug}`
    }

    const navigationItems = NAV?.links.reduce((acc: any[], link) => {
      // Add main nav item with icon
      acc.push({
        ...link,
        isMainItem: true,
        // Don't modify external URLs, add slash to internal ones if needed
        href: isExternalUrl(link.slug)
          ? link.slug
          : formatInternalUrl(link.slug),
      })

      // Add sub-items without icons
      if (link.slug === 'components' && pathName.startsWith('/component')) {
        components.forEach((component) => {
          acc.push({
            title: component.title,
            href: `/component/${component.slug}`,
            isSubItem: true,
          })
        })
      }

      if (link.slug === 'templates' && pathName.startsWith('/template')) {
        templates.forEach((template) => {
          acc.push({
            title: template.title,
            href: `/template/${template.slug}`,
            isSubItem: true,
          })
        })
      }

      return acc
    }, [])

    return navigationItems?.map((item) => (
      <Link
        key={item.href}
        component="button"
        href={item.href}
        rank={pathName === item.href ? 'secondary' : 'tertiary'}
        justify-content={item.isMainItem ? 'flex-start' : 'flex-start'}
        size={item.isSubItem ? 'small' : 'medium'}
        align-items="center"
        style={item.isSubItem ? { paddingLeft: '42px' } : {}}
        // Add isExternal prop if it's an external link
        isExternal={isExternalUrl(item.href)}
        data-animation="scroll"
      >
        {item.isMainItem && item.icon && <Icon name={item.icon} slot="lead" />}
        {item.title}
      </Link>
    ))
  }, [isLoaded, actions, pathName])

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
      min-width={isOpen ? '220px' : '80px'}
      width={isOpen ? '220px' : 'max-content'}
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
