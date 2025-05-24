'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { _, Icon, internalLink } from '../../../hooks'
import { useSettingsValue } from '../../../settings'
import { Link } from '../link/link'
import Settings from './settings/settings'

import './sidebar.css'

import SidebarCollapsed from './sidebar.collapsed'

interface NavItem {
  title: string
  slug: string
  icon: string
}

interface NavigationResponse {
  title: string
  slug: string
  links: NavItem[]
}

interface Component {
  title: string
  slug: string
  summary?: string
  path: string
}

interface ComponentsResponse {
  components: Component[]
  total: number
  lastUpdated: string
}

interface Template {
  title: string
  slug: string
  path: string
  related_components: string[]
}

interface TemplatesResponse {
  templates: Template[]
  total: number
  lastUpdated: string
}

export default function Sidebar() {
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)
  const router = useRouter()
  const pathName = usePathname()
  const [navigationItems, setNavigationItems] = useState<NavItem[]>([])
  const [components, setComponents] = useState<Component[]>([])
  const [templates, setTemplates] = useState<Template[]>([])

  useEffect(() => {
    const fetchNavigation = async () => {
      try {
        const response = await fetch('https://api.seb.io/navigation/main.json')
        const data: NavigationResponse = await response.json()
        setNavigationItems(data.links)
      } catch (error) {
        console.error('Error fetching navigation:', error)
      }
    }

    fetchNavigation()
  }, [])

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await fetch(
          'https://api.seb.io/components/components.json',
        )
        const data: ComponentsResponse = await response.json()
        const sortedComponents = [...data.components].sort((a, b) =>
          a.title.localeCompare(b.title),
        )
        setComponents(sortedComponents)
      } catch (error) {
        console.error('Error fetching components:', error)
      }
    }

    fetchComponents()
  }, [])

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch(
          'https://api.seb.io/templates/templates.json',
        )
        const data: TemplatesResponse = await response.json()
        const sortedTemplates = [...data.templates].sort((a, b) =>
          a.title.localeCompare(b.title),
        )
        setTemplates(sortedTemplates)
      } catch (error) {
        console.error('Error fetching templates:', error)
      }
    }

    fetchTemplates()
  }, [])

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

  const componentsList =
    pathName.startsWith('/components') || pathName.startsWith('/component/')

  const templatesList =
    pathName.startsWith('/templates') || pathName.startsWith('/template/')

  return (
    <Core.GdsCard
      variant="secondary"
      border-radius="0"
      justify-content="flex-start"
      gap="4xl"
      height="100vh"
      className={_('sidebar', isOpen ? 'open' : 'closed')}
      padding="xs xs m xs"
      width={isOpen ? '260px' : 'max-content'}
      position="relative"
    >
      {isOpen && (
        <Core.GdsFlex flex-direction="column" gap="m">
          {componentsList ? (
            <>
              <Link
                component="button"
                key={'home'}
                href="/"
                rank="tertiary"
                justify-content={isOpen ? 'flex-start' : 'none'}
                size={isOpen ? 'small' : 'medium'}
                align-items="center"
              >
                <Icon name="IconArrowLeft" slot="lead" />
                Home
              </Link>
              <Core.GdsFlex flex-direction="column" gap="2xs">
                <Core.GdsText tag="small" padding="m">
                  Components
                </Core.GdsText>
                {components.map((component) => (
                  <Core.GdsButton
                    key={component.slug}
                    onClick={internalLink}
                    href={`/component/${component.slug}`}
                    justify-content={isOpen ? 'flex-start' : 'none'}
                    size={isOpen ? 'small' : 'medium'}
                    align-items="center"
                    rank="tertiary"
                  >
                    {component.title}
                  </Core.GdsButton>
                ))}
              </Core.GdsFlex>
            </>
          ) : templatesList ? (
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
              {templates.map((template) => (
                <Core.GdsButton
                  key={template.slug}
                  onClick={handleClick(`/template/${template.slug}`, false)}
                  justify-content={isOpen ? 'flex-start' : 'none'}
                  size={isOpen ? 'small' : 'medium'}
                  align-items="center"
                  rank="tertiary"
                >
                  {template.title}
                  {template.related_components.length > 0 && isOpen && (
                    <div className="template-components" slot="trail">
                      <small>
                        {template.related_components.length} component
                        {template.related_components.length !== 1 ? 's' : ''}
                      </small>
                    </div>
                  )}
                </Core.GdsButton>
              ))}
            </>
          ) : (
            navigationItems.map((item) => (
              <Link
                key={item.slug}
                component="button"
                href={item.slug}
                rank="tertiary"
                justify-content="space-between"
                size="small"
                align-items="center"
              >
                {item.title}
                <Icon name={item.icon} slot="trail" />
              </Link>
            ))
          )}
        </Core.GdsFlex>
      )}
      {!isOpen && (
        <Core.GdsFlex
          flex-direction="column"
          gap="m"
          width="100%"
          justify-content="center"
          align-items="center"
          padding="m"
        >
          <SidebarCollapsed />
        </Core.GdsFlex>
      )}
      <Settings />
    </Core.GdsCard>
  )
}
