'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { _, Icon } from '../../../hooks'
import { useSettingsValue } from '../../../settings'
import { useContentContext } from '../../../settings/content'
import { Link } from '../link/link'
import Settings from './settings/settings'
import SidebarCollapsed from './sidebar.collapsed'

import './sidebar.css'

// Reusable link component (keep as is)
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

// Home button component (keep as is)
const HomeButton = () => (
  <SidebarLink href="/" icon="IconArrowLeft" iconSlot="lead">
    Home
  </SidebarLink>
)

export default function Sidebar() {
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)
  const pathName = usePathname()
  const { isLoaded, actions } = useContentContext()

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
    if (!isLoaded) {
      return <Core.GdsText>Loading...</Core.GdsText>
    }

    switch (pathType) {
      case 'components':
        const components = actions.getComponents({
          sort: (a, b) => a.title.localeCompare(b.title),
        })
        return (
          <>
            <HomeButton />
            <Core.GdsFlex flex-direction="column" gap="2xs" className="list">
              <Core.GdsText tag="small" padding="m">
                Components
              </Core.GdsText>
              {components.map((component) => (
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
        const templates = actions.getTemplates({
          sort: (a, b) => a.title.localeCompare(b.title),
        })
        return (
          <>
            <HomeButton />
            <Core.GdsFlex flex-direction="column" gap="2xs" className="list">
              <Core.GdsText tag="small" padding="m">
                Templates
              </Core.GdsText>
              {templates.map((template) => (
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
        // Get main navigation
        const mainNav = actions.getNavigation('main')
        return mainNav?.links.map((item) => (
          <SidebarLink key={item.slug} href={item.slug} icon={item.icon}>
            {item.title}
          </SidebarLink>
        ))
    }
  }, [isLoaded, actions, pathType])

  return (
    <Core.GdsCard
      variant="secondary"
      border-radius="0"
      justify-content="space-between"
      align-items="center"
      gap="4xl"
      height="calc(100vh - 80px)"
      className={_('sidebar', isOpen ? 'open' : 'closed')}
      padding="xs xs m xs"
      min-width={isOpen ? '260px' : 'max-content'}
      width={isOpen ? '260px' : 'max-content'}
      position="relative"
    >
      {isOpen && (
        <Core.GdsFlex
          flex-direction="column"
          gap="m"
          width="100%"
          height="100%"
        >
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
