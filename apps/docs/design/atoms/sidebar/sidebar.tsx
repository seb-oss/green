'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { _, Icon } from '../../../hooks'
import { useSettingsContext, useSettingsValue } from '../../../settings'
import { useContentContext } from '../../../settings/content'
import CollapsedNav from './CollapsedNav'
import ExpandedNav from './ExpandedNav'

import './sidebar.css'

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)
  const pathName = usePathname()
  const { isLoaded, actions } = useContentContext()
  const { actions: SettingsActions } = useSettingsContext()

  // Track which top-level sections are expanded
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  // Derive initial open state from current path once content is loaded
  useEffect(() => {
    if (!isLoaded) return

    const NAV = actions.getNavigation('main')
    if (!NAV) return

    const firstSeg = pathName.split('/')[1] || ''

    const next: Record<string, boolean> = {}
    NAV.links.forEach((link) => {
      // Only consider sections that can have sub-items
      const hasSubItems =
        link.slug === 'components' ||
        link.slug === 'templates' ||
        !!actions.getNavigation(link.slug)

      if (!hasSubItems) return

      // Open if the current path belongs to this section
      const singular = link.slug.replace(/s$/, '')
      next[link.slug] = firstSeg === link.slug || firstSeg === singular
    })

    setOpenSections((prev) => ({ ...prev, ...next }))
  }, [isLoaded, actions, pathName])

  const setOpen = (section: string, next?: boolean) =>
    setOpenSections((prev) => ({ ...prev, [section]: next ?? !prev[section] }))

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
        style={isOpen ? undefined : ({ paddingLeft: '2px' } as any)}
        width="100%"
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
        {isOpen || menuOpen ? (
          <ExpandedNav openSections={openSections} setOpen={setOpen} />
        ) : (
          <CollapsedNav isOpen={isOpen} />
        )}
      </Core.GdsFlex>

      <Core.GdsFlex
        key={isOpen ? 'sidebar-open' : 'sidebar-closed'}
        justify-content={'flex-start'}
        align-items="flex-start"
        gap="l"
        display={menuOpen ? 'none' : 'none; s{flex}'}
        style={isOpen ? undefined : ({ paddingLeft: '2px' } as any)}
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
