'use client'

import {
  GdsDiv,
  GdsFlex,
  GdsInput,
  GdsText,
  IconBrandGithub,
  IconBrandGreen,
  IconBrandSeb,
  IconBrandStorybook,
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
      padding={isOpen ? 'xl xl l m' : 'xl xl l m'}
      className="header"
      inset="0"
      gap="m"
    >
      <GdsFlex padding="0 0 0 m" align-items="center" gap="s">
        <Link href="/">
          <GdsText font-weight="book" font-size="detail-m">
            Green Design System
          </GdsText>
        </Link>
      </GdsFlex>

      {false && (
        <GdsFlex align-items="center" gap="s">
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
      )}

      <GdsFlex>
        <Link
          component="button"
          onClick={handleToggleCommand}
          size="medium"
          rank="secondary"
        >
          <IconMagnifyingGlass slot="lead"></IconMagnifyingGlass>
          What are you looking for?
          <GdsFlex slot="trail" width="20px"></GdsFlex>
        </Link>
      </GdsFlex>
      <GdsFlex align-items="center" gap="0">
        <Link
          component="button"
          rank="tertiary"
          href="https://github.com/seb-oss/green"
          target="_blank"
        >
          <IconBrandGithub />
        </Link>
        <Link
          component="button"
          rank="tertiary"
          href="https://storybook.seb.io"
          target="_blank"
        >
          <IconBrandStorybook />
        </Link>
      </GdsFlex>
    </GdsFlex>
  )
}
