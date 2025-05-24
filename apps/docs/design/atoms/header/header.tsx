'use client'

import {
  GdsFlex,
  IconBrandSeb,
  IconCrossSmall,
  IconMagnifyingGlass,
  IconMenuSidebar,
} from '@sebgroup/green-core/react'
import { useSettingsContext, useSettingsValue } from '../../../settings'
import { Link } from '../link/link'

export default function Header() {
  const { actions } = useSettingsContext()
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)

  const handleToggleSidebar = (): void => {
    actions.toggle('UI.Panel.Sidebar')
  }

  return (
    <GdsFlex
      background="secondary"
      width="100%"
      align-items="center"
      justify-content="space-between"
      padding="l"
      position="relative"
      gap="m"
    >
      {!isOpen ? (
        <Link
          component="button"
          onClick={handleToggleSidebar}
          rank="tertiary"
          size="small"
        >
          <IconMenuSidebar />
        </Link>
      ) : (
        <Link
          component="button"
          onClick={handleToggleSidebar}
          rank="tertiary"
          size="small"
        >
          <IconCrossSmall />
        </Link>
      )}

      <Link href="/">
        <IconBrandSeb />
      </Link>

      <Link component="button" href="/search" size="small" rank="tertiary">
        <IconMagnifyingGlass size="m"></IconMagnifyingGlass>
      </Link>
    </GdsFlex>
  )
}
