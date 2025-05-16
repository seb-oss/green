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

const DynamicIcon = ({ iconName }: { iconName: string }) => {
  const IconComponent = (Core as Record<string, any>)[iconName]
  if (!IconComponent) {
    console.warn(`Icon ${iconName} not found`)
    return null
  }
  return <IconComponent />
}

export default function Sidebar() {
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)
  const isOpenSettings = useSettingsValue(
    (settings) => settings.UI.Panel.Settings,
  )
  const { actions } = useSettingsContext()
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

  const internalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    router.push(href)
  }

  const handleToggleSidebar = (): void => {
    actions.toggle('UI.Panel.Sidebar')
  }
  const handleToggleSettings = (): void => {
    actions.toggle('UI.Panel.Settings')
  }

  const componentsList =
    pathName.startsWith('/components') || pathName.startsWith('/component/')

  const templatesList =
    pathName.startsWith('/templates') || pathName.startsWith('/template/')

  const isExternalLink = (slug: string) => slug.startsWith('http')

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
      <Core.GdsFlex
        padding="m xs m m"
        justify-content="space-between"
        align-items="center"
      >
        {isOpen && (
          <Core.GdsLink onClick={internalLink} href="/">
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
              onClick={internalLink}
              href="/"
              rank="tertiary"
              justify-content={isOpen ? 'flex-start' : 'none'}
              size={isOpen ? 'small' : 'medium'}
              align-items="center"
            >
              <Core.IconArrowLeft slot="lead" />
              Home
            </Core.GdsButton>
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
            <Core.GdsFlex flex-direction="column" gap="2xs">
              <Core.GdsText tag="small" padding="m">
                Layout
              </Core.GdsText>

              <Core.GdsButton
                key="layout-div"
                onClick={handleClick(`/tokens/colors`, false)}
                justify-content={isOpen ? 'flex-start' : 'none'}
                size={isOpen ? 'small' : 'medium'}
                align-items="center"
                rank="tertiary"
              >
                Div
              </Core.GdsButton>
              <Core.GdsButton
                key="layout-flex"
                onClick={handleClick(`/tokens/size`, false)}
                justify-content={isOpen ? 'flex-start' : 'none'}
                size={isOpen ? 'small' : 'medium'}
                align-items="center"
                rank="tertiary"
              >
                Flex
              </Core.GdsButton>
              <Core.GdsButton
                key="layout-grid"
                onClick={handleClick(`/tokens/size`, false)}
                justify-content={isOpen ? 'flex-start' : 'none'}
                size={isOpen ? 'small' : 'medium'}
                align-items="center"
                rank="tertiary"
              >
                Grid
              </Core.GdsButton>
            </Core.GdsFlex>
            <Core.GdsFlex flex-direction="column" gap="2xs">
              <Core.GdsText tag="small" padding="m">
                Tokens
              </Core.GdsText>

              <Core.GdsButton
                key="tokens-colors"
                onClick={handleClick(`/tokens/colors`, false)}
                justify-content={isOpen ? 'flex-start' : 'none'}
                size={isOpen ? 'small' : 'medium'}
                align-items="center"
                rank="tertiary"
              >
                Colors
              </Core.GdsButton>
              <Core.GdsButton
                key="tokens-size"
                onClick={handleClick(`/tokens/size`, false)}
                justify-content={isOpen ? 'flex-start' : 'none'}
                size={isOpen ? 'small' : 'medium'}
                align-items="center"
                rank="tertiary"
              >
                Size
              </Core.GdsButton>
              <Core.GdsButton
                key="tokens-typography"
                onClick={handleClick(`/tokens/size`, false)}
                justify-content={isOpen ? 'flex-start' : 'none'}
                size={isOpen ? 'small' : 'medium'}
                align-items="center"
                rank="tertiary"
              >
                Typography
              </Core.GdsButton>
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
            <Core.GdsButton
              key={item.slug}
              // onClick={handleClick(item.slug, isExternalLink(item.slug))}
              onClick={internalLink}
              href={item.slug}
              rank="tertiary"
              justify-content={isOpen ? 'space-between' : 'none'}
              size={isOpen ? 'small' : 'medium'}
              align-items="center"
            >
              {isOpen && item.title}
              {isOpen ? (
                <Core.GdsFlex align-items="center" slot="trail">
                  <DynamicIcon iconName={item.icon} />
                </Core.GdsFlex>
              ) : (
                <DynamicIcon iconName={item.icon} />
              )}
            </Core.GdsButton>
          ))
        )}
      </Core.GdsFlex>
      {isOpenSettings && (
        <Core.GdsCard padding="xs" gap="s" margin="auto 0 0 0">
          <Core.GdsCard variant="secondary">Cookie consent</Core.GdsCard>
          <Core.GdsFlex
            justify-content="space-between"
            align-items="center"
            padding="0 xs"
          >
            <Core.GdsText font-size="detail-s">Settings</Core.GdsText>
            <Core.GdsButton
              onClick={handleToggleSettings}
              rank="tertiary"
              size="xs"
            >
              <Core.IconCrossLarge />
            </Core.GdsButton>
          </Core.GdsFlex>
        </Core.GdsCard>
      )}
      {!isOpenSettings && (
        <Core.GdsButton
          onClick={handleToggleSettings}
          rank="tertiary"
          justify-content={isOpen ? 'space-between' : 'none'}
          size={isOpen ? 'small' : 'medium'}
          margin="auto 0 0 0"
        >
          {isOpen && 'Settings'}
          {isOpen ? (
            <Core.IconSettingsGear slot="trail" />
          ) : (
            <Core.IconSettingsGear />
          )}
        </Core.GdsButton>
      )}
    </Core.GdsCard>
  )
}
