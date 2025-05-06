'use client'

import NextLink from 'next/link'

import * as Core from '@sebgroup/green-core/react'
import { useSettingsContext, useSettingsValue } from '../../settings'

export default function Sidebar() {
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)
  const { settings, actions } = useSettingsContext()

  const Link = ({
    title,
    href,
    children,
  }: {
    title: string
    href: string
    children: React.ReactNode
  }) => {
    return (
      <NextLink href={href}>
        <Core.GdsFlex justify-content="space-between" color="primary">
          <Core.GdsText text-style="none">{title}</Core.GdsText>
          {children}
        </Core.GdsFlex>
      </NextLink>
    )
  }

  const handleClick = () => {
    actions.toggle('UI.Panel.Sidebar')
  }

  if (!isOpen) return null

  return (
    <Core.GdsCard
      variant="secondary"
      width="20%"
      height="max-content"
      border-radius="0"
    >
      <Core.GdsFlex align-items="center" justify-content="space-between">
        <Core.IconBrandSeb />
        <Core.GdsButton size="small" rank="tertiary" onClick={handleClick}>
          <Core.IconCrossLarge />
        </Core.GdsButton>
      </Core.GdsFlex>
      <Link title="Home" href="/">
        <Core.IconHomeOpen />
      </Link>
      <Link title="Components" href="/components">
        <Core.IconSquareGridCircle />
      </Link>
      <Link title="Templates" href="/templates">
        <Core.IconDevices />
      </Link>
      <Link title="Foundation" href="/foundation">
        <Core.IconBrandGreen />
      </Link>
      <Link title="UX Writing" href="/foundation">
        <Core.IconPencilWave />
      </Link>
      <Link title="Accessibility" href="/foundation">
        <Core.IconPeopleCircle />
      </Link>
      <Link title="About" href="/foundation">
        <Core.IconCircleInfo />
      </Link>
      <Link title="Github" href="https://github.com/seb-oss/green-core">
        <Core.IconBrandGithub />
      </Link>
      <Link title="Storybook" href="https:/storybook.seb.io">
        <Core.IconBrandStorybook />
      </Link>
      <Core.GdsFlex align-items="center" justify-content="space-between">
        Settings
        <Core.GdsButton size="small" rank="tertiary" onClick={handleClick}>
          <Core.IconSettingsGear />
        </Core.GdsButton>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
