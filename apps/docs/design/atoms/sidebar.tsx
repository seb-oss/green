'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { _ } from '../../hooks'
import { useSettingsContext, useSettingsValue } from '../../settings'

import './sidebar.css'

interface NavItem {
  title: string
  path: string
  icon: React.ReactNode
  isExternal?: boolean
}

interface Component {
  title: string
  slug: string
  summary?: string
}

interface ComponentsResponse {
  components: Component[]
  total: number
  lastUpdated: string
}

export default function Sidebar() {
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)
  const { actions } = useSettingsContext()
  const router = useRouter()
  const pathName = usePathname()
  const [components, setComponents] = useState<Component[]>([])

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await fetch('https://api.seb.io/components.json')
        const data: ComponentsResponse = await response.json()
        setComponents(data.components)
      } catch (error) {
        console.error('Error fetching components:', error)
      }
    }

    fetchComponents()
  }, [])

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

  const componentsList =
    pathName.startsWith('/components') || pathName.startsWith('/component/')

  return (
    <Core.GdsCard
      variant="secondary"
      border-radius="0"
      justify-content="flex-start"
      gap="4xl"
      height="100vh"
      className={_('sidebar', isOpen ? 'open' : 'closed')}
      padding="xs"
      width={isOpen ? '260px' : 'max-content'}
    >
      <Core.GdsFlex
        padding="m"
        justify-content="space-between"
        align-items="center"
      >
        {isOpen && (
          <Core.GdsLink onClick={handleClick('/', false)}>
            <Core.GdsText color="primary">
              <Core.IconBrandSeb />
            </Core.GdsText>
          </Core.GdsLink>
        )}

        {!isOpen && (
          <Core.GdsButton onClick={handleToggleSidebar} rank="tertiary">
            <Core.IconMenuSidebar />
          </Core.GdsButton>
        )}
        {isOpen && (
          <Core.GdsButton
            onClick={handleToggleSidebar}
            rank="tertiary"
            size="small"
          >
            <Core.IconCrossLarge />
          </Core.GdsButton>
        )}
      </Core.GdsFlex>
      <Core.GdsFlex flex-direction="column" gap="m">
        {componentsList ? (
          <>
            <Core.GdsButton
              key={'home'}
              onClick={handleClick('/', false)}
              rank="tertiary"
              justify-content={isOpen ? 'flex-start' : 'none'}
              size={isOpen ? 'small' : 'medium'}
              align-items="center"
            >
              <Core.IconArrowLeft slot="lead" />
              Home
            </Core.GdsButton>
            {components.map((component) => (
              <Core.GdsButton
                key={component.slug}
                onClick={handleClick(`/component/${component.slug}`, false)}
                justify-content={isOpen ? 'flex-start' : 'none'}
                size={isOpen ? 'small' : 'medium'}
                align-items="center"
                rank="tertiary"
              >
                {component.title}
              </Core.GdsButton>
            ))}
          </>
        ) : (
          navigationItems.map((item) => (
            <Core.GdsButton
              key={item.path}
              onClick={handleClick(item.path, item.isExternal)}
              rank="tertiary"
              justify-content={isOpen ? 'space-between' : 'none'}
              size={isOpen ? 'small' : 'medium'}
              align-items="center"
            >
              {isOpen && item.title}
              {isOpen ? (
                <Core.GdsFlex align-items="center" slot="trail">
                  {item.icon}
                </Core.GdsFlex>
              ) : (
                item.icon
              )}
            </Core.GdsButton>
          ))
        )}
      </Core.GdsFlex>
      <Core.GdsButton
        onClick={handleClick('/settings', false)}
        rank="tertiary"
        justify-content={isOpen ? 'space-between' : 'none'}
        size={isOpen ? 'small' : 'medium'}
        margin="auto 0 0 0"
      >
        {isOpen && 'Settings'}
        {isOpen ? (
          <span slot="trail">
            <Core.IconSettingsGear />
          </span>
        ) : (
          <Core.IconSettingsGear />
        )}
      </Core.GdsButton>
    </Core.GdsCard>
  )
}
