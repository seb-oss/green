'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { useSettingsContext, useSettingsValue } from '../../settings'

import './sidebar.css'

interface NavItem {
  title: string
  path: string
  icon: React.ReactNode
  isExternal?: boolean
}

export default function Sidebar() {
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)
  const { actions } = useSettingsContext()
  const router = useRouter()

  const navigationItems: NavItem[] = [
    {
      title: 'Home',
      path: '/',
      icon: <Core.IconHomeOpen />,
    },
    {
      title: 'Components',
      path: '/components',
      icon: <Core.IconSquareGridCircle />,
    },
    {
      title: 'Templates',
      path: '/templates',
      icon: <Core.IconDevices />,
    },
    {
      title: 'Foundation',
      path: '/foundation',
      icon: <Core.IconBrandGreen />,
    },
    {
      title: 'UX Writing',
      path: '/ux-writing',
      icon: <Core.IconPencilWave />,
    },
    {
      title: 'Accessibility',
      path: '/accessibility',
      icon: <Core.IconPeopleCircle />,
    },
    {
      title: 'About',
      path: '/about',
      icon: <Core.IconCircleInfo />,
    },
    {
      title: 'Github',
      path: 'https://github.com/seb-oss/green-core',
      icon: <Core.IconBrandGithub />,
      isExternal: true,
    },
    {
      title: 'Storybook',
      path: 'https://storybook.seb.io',
      icon: <Core.IconBrandStorybook />,
      isExternal: true,
    },
  ]

  const handleClick = (path: string, isExternal?: boolean) => {
    // Return a function that handles the event
    return (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()
      if (isExternal) {
        window.open(path, '_blank')
      } else {
        router.push(path)
      }
    }
  }

  const handleToggleSidebar = (): void => {
    actions.toggle('UI.Panel.Sidebar')
  }

  if (!isOpen) return null

  return (
    <Core.GdsCard
      variant="secondary"
      width="20%"
      border-radius="0"
      justify-content="space-between"
      height="100vh"
      className="sidebar"
    >
      <Core.GdsFlex
        width="100%"
        height="max-content"
        align-items="center"
        justify-content="space-between"
        padding="0 m"
      >
        <Link href="/">
          <Core.IconBrandSeb />
        </Link>
        <Core.GdsButton onClick={handleToggleSidebar} size="xs" rank="tertiary">
          <Core.IconCrossLarge />
        </Core.GdsButton>
      </Core.GdsFlex>

      <Core.GdsFlex id="nav" flex-direction="column" gap="0" margin="auto 0">
        {navigationItems.map((item) => (
          <Core.GdsMenuButton
            key={item.path}
            onClick={handleClick(item.path, item.isExternal)}
          >
            {item.title}
            <span slot="trail">{item.icon}</span>
          </Core.GdsMenuButton>
        ))}
      </Core.GdsFlex>

      <Core.GdsButton
        onClick={handleClick('/settings', false)}
        size="small"
        rank="tertiary"
        justify-content="space-between"
      >
        Settings
        <Core.IconSettingsGear slot="trail" />
      </Core.GdsButton>
    </Core.GdsCard>
  )
}
