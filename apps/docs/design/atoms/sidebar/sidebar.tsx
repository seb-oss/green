'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { _, Icon } from '../../../hooks'
import { useSettingsValue } from '../../../settings'
import { Link } from '../link/link'
import Settings from './settings/settings'
import SidebarCollapsed from './sidebar.collapsed'

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

interface SidebarData {
  navigation: NavItem[]
  components: Component[]
  templates: Template[]
}

// Custom hook for fetching all sidebar data
const useSidebarData = () => {
  const [data, setData] = useState<SidebarData>({
    navigation: [],
    components: [],
    templates: [],
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true)

        const [navigationRes, componentsRes, templatesRes] = await Promise.all([
          fetch('https://api.seb.io/navigation/main.json'),
          fetch('https://api.seb.io/components/components.json'),
          fetch('https://api.seb.io/templates/templates.json'),
        ])

        const [navigationData, componentsData, templatesData] =
          await Promise.all([
            navigationRes.json() as Promise<NavigationResponse>,
            componentsRes.json() as Promise<ComponentsResponse>,
            templatesRes.json() as Promise<TemplatesResponse>,
          ])

        setData({
          navigation: navigationData.links,
          components: [...componentsData.components].sort((a, b) =>
            a.title.localeCompare(b.title),
          ),
          templates: [...templatesData.templates].sort((a, b) =>
            a.title.localeCompare(b.title),
          ),
        })
      } catch (err) {
        console.error('Error fetching sidebar data:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchAllData()
  }, [])

  return { data, loading, error }
}

// Reusable link component
const SidebarLink = ({
  href,
  children,
  icon,
  iconSlot = 'trail',
}: {
  href: string
  children: React.ReactNode
  icon?: string
  iconSlot?: 'lead' | 'trail'
}) => (
  <Link
    component="button"
    href={href}
    rank="tertiary"
    justify-content={
      icon && iconSlot === 'trail' ? 'space-between' : 'flex-start'
    }
    size="small"
    align-items="center"
  >
    {icon && iconSlot === 'lead' && <Icon name={icon} slot="lead" />}
    {children}
    {icon && iconSlot === 'trail' && <Icon name={icon} slot="trail" />}
  </Link>
)

// Home button component
const HomeButton = () => (
  <SidebarLink href="/" icon="IconArrowLeft" iconSlot="lead">
    Home
  </SidebarLink>
)

export default function Sidebar() {
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)
  const pathName = usePathname()
  const { data, loading, error } = useSidebarData()

  // Memoized path checks
  const pathType = useMemo(() => {
    if (
      pathName.startsWith('/components') ||
      pathName.startsWith('/component/')
    ) {
      return 'components'
    }
    if (
      pathName.startsWith('/templates') ||
      pathName.startsWith('/template/')
    ) {
      return 'templates'
    }
    return 'navigation'
  }, [pathName])

  // Memoized content renderer
  const renderContent = useMemo(() => {
    if (loading) {
      return <Core.GdsText>Loading...</Core.GdsText>
    }

    if (error) {
      return <Core.GdsText>Error loading navigation</Core.GdsText>
    }

    switch (pathType) {
      case 'components':
        return (
          <>
            <HomeButton />
            <Core.GdsFlex flex-direction="column" gap="2xs">
              <Core.GdsText tag="small" padding="m">
                Components
              </Core.GdsText>
              {data.components.map((component) => (
                <SidebarLink
                  key={component.slug}
                  href={`/component/${component.slug}`}
                >
                  {component.title}
                </SidebarLink>
              ))}
            </Core.GdsFlex>
          </>
        )

      case 'templates':
        return (
          <>
            <HomeButton />
            <Core.GdsFlex flex-direction="column" gap="2xs">
              <Core.GdsText tag="small" padding="m">
                Templates
              </Core.GdsText>
              {data.templates.map((template) => (
                <SidebarLink
                  key={template.slug}
                  href={`/template/${template.slug}`}
                >
                  {template.title}
                </SidebarLink>
              ))}
            </Core.GdsFlex>
          </>
        )

      default:
        return data.navigation.map((item) => (
          <SidebarLink key={item.slug} href={item.slug} icon={item.icon}>
            {item.title}
          </SidebarLink>
        ))
    }
  }, [data, loading, error, pathType])

  return (
    <Core.GdsCard
      variant="secondary"
      border-radius="0"
      justify-content="flex-start"
      gap="4xl"
      height="100vh"
      className={_('sidebar', isOpen ? 'open' : 'closed')}
      padding="xs xs m xs"
      min-width={isOpen ? '260px' : 'max-content'}
      width={isOpen ? '260px' : 'max-content'}
      position="relative"
    >
      {isOpen && (
        <Core.GdsFlex flex-direction="column" gap="m">
          {renderContent}
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
