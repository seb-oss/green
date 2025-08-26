'use client'

import {
  GdsFlex,
  GdsText,
  IconBrandGithub,
  IconBrandStorybook,
  IconMagnifyingGlass,
} from '@sebgroup/green-core/react'
import { _ } from '../../../hooks'
import { useSettingsContext, useSettingsValue } from '../../../settings'
import { Link } from '../link/link'

export default function Header() {
  const { actions } = useSettingsContext()
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)

  const handleToggleCommand = () => {
    actions.toggle('UI.Panel.Command')
  }

  return (
    <GdsFlex
      background="none"
      width="100%"
      align-items="center"
      justify-content="space-between"
      position="relative"
    >
      <GdsFlex width="max-content">
        <Link
          component="button"
          onClick={handleToggleCommand}
          size="medium"
          rank="secondary"
          width="400px"
          justify-content="flex-start"
        >
          <IconMagnifyingGlass slot="lead"></IconMagnifyingGlass>
          What are you looking for?
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
