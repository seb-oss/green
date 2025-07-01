'use client'

import {
  GdsDiv,
  GdsFlex,
  IconBrandSeb,
  IconMagnifyingGlass,
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

  const handleToggleCommand = () => {
    actions.toggle('UI.Panel.Command')
  }

  return (
    <GdsFlex
      background="none"
      width="100%"
      align-items="center"
      justify-content="space-between"
      padding="l l l l"
      // position="sticky"
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

      <Link
        component="button"
        onClick={handleToggleCommand}
        size="medium"
        rank="tertiary"
      >
        <IconMagnifyingGlass></IconMagnifyingGlass>
      </Link>
      <GdsDiv level="3" background="quarternary/0.6" className="glass"></GdsDiv>
    </GdsFlex>
  )
}
