'use client'

import { usePathname } from 'next/navigation'

import {
  GdsFlex,
  IconBrandSeb,
  IconCrossLarge,
  IconCrossSmall,
  IconMagnifyingGlass,
  IconMenuSidebar,
} from '@sebgroup/green-core/react'
import { _, Icon } from '../../../hooks'
import { useSettingsContext, useSettingsValue } from '../../../settings'
import { Link } from '../link/link'

import './header.css'

export default function Header() {
  const { actions } = useSettingsContext()
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)

  const handleToggleSidebar = () => {
    actions.toggle('UI.Panel.Sidebar')
  }

  return (
    <GdsFlex
      background="none"
      width="100%"
      align-items="center"
      justify-content="space-between"
      padding="l l l l"
      position="sticky"
      className="header"
      inset="0"
      gap="m"
    >
      <GdsFlex>
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
      </GdsFlex>

      <Link href="/">
        <IconBrandSeb size="l" />
      </Link>

      <Link component="button" href="/search" size="medium" rank="tertiary">
        <IconMagnifyingGlass></IconMagnifyingGlass>
      </Link>
      <div className="glass"></div>
    </GdsFlex>
  )
}
