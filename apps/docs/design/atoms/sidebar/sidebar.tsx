'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { _, Icon } from '../../../hooks'
import { useSettingsContext, useSettingsValue } from '../../../settings'
import { useContentContext } from '../../../settings/content'
import { Link } from '../link/link'

import './sidebar.css'

interface CollapsibleSectionProps {
  title: string
  icon?: string
  href: string
  isOpen: boolean
  onToggle: () => void
  children?: React.ReactNode
  isActive: boolean
}

const foundationPages = [
  { title: 'Colors', slug: 'colors' },
  { title: 'Typography', slug: 'typography' },
  { title: 'Spacing', slug: 'spacing' },
  { title: 'Layout', slug: 'layout' },
]

const CollapsibleSection = ({
  title,
  icon,
  href,
  isOpen,
  onToggle,
  children,
  isActive,
}: CollapsibleSectionProps) => (
  <Core.GdsFlex flex-direction="column" width="100%" gap="xs">
    <Core.GdsFlex
      width="100%"
      align-items="center"
      justify-content="space-between"
      gap="2xs"
    >
      <Link
        key={href + isActive}
        component="button"
        href={href}
        rank={isActive ? 'secondary' : 'tertiary'}
        justify-content="flex-start"
        size="medium"
        align-items="center"
        data-animation="scroll"
        flex="1"
      >
        {icon && <Icon name={icon} slot="lead" solid={isActive || isOpen} />}
        <span data-fade>{title}</span>
      </Link>
      <Core.GdsButton
        key={isOpen + 'chevron'}
        rank="tertiary"
        data-animation="scroll"
        label="Toggle sub navigation"
        gds-aria-expanded={isOpen.toString()}
        onClick={(e) => {
          e.preventDefault()
          onToggle()
        }}
      >
        <Icon name={isOpen ? 'IconChevronTop' : 'IconChevronBottom'} />
      </Core.GdsButton>
    </Core.GdsFlex>
    {isOpen && children}
  </Core.GdsFlex>
)

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)
  const pathName = usePathname()
  const { isLoaded, actions } = useContentContext()
  const { actions: SettingsActions } = useSettingsContext()

  const sectionsWithSubItems = ['components', 'templates', 'foundation']

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => {
      const initialState: Record<string, boolean> = {}

      sectionsWithSubItems.forEach((section) => {
        // Check both exact path and sub-paths
        const isExactPath = pathName === `/${section}`
        const isSubPath = pathName.startsWith(`/${section.replace('s', '')}`)
        initialState[section] = isExactPath || isSubPath
      })

      return initialState
    },
  )

  useEffect(() => {
    setOpenSections((prev) => {
      const newState = { ...prev }

      sectionsWithSubItems.forEach((section) => {
        const isExactPath = pathName === `/${section}`
        const isSubPath = pathName.startsWith(`/${section.replace('s', '')}`)

        if (isExactPath || isSubPath) {
          newState[section] = true
        }
      })

      return newState
    })
  }, [pathName])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const renderCollapsedNav = useMemo(() => {
    if (!isLoaded) return null

    const NAV = actions.getNavigation('main')
    return (
      <Core.GdsFlex
        flex-direction="column"
        gap="xs"
        align-items="center"
        width="100%"
      >
        {NAV?.links.map((link) => (
          <Link
            key={link.slug + isOpen}
            component="button"
            href={link.slug.startsWith('/') ? link.slug : `/${link.slug}`}
            rank={
              pathName.startsWith(`/${link.slug}`) ? 'secondary' : 'tertiary'
            }
            size="medium"
            justify-content="center"
            flex="1"
            data-animation="scroll"
            width={isOpen ? '100%' : 'initial'}
          >
            {link.icon && (
              <Icon key={isOpen + '' + link.icon} name={link.icon} />
            )}
          </Link>
        ))}
      </Core.GdsFlex>
    )
  }, [isLoaded, actions, pathName])

  // Separate rendering for expanded state
  const renderExpandedNav = useMemo(() => {
    if (!isLoaded) return null

    const NAV = actions.getNavigation('main')
    const components = actions.getComponents()
    const templates = actions.getTemplates()

    return NAV?.links.map((link) => {
      const href = link.slug.startsWith('/') ? link.slug : `/${link.slug}`

      if (sectionsWithSubItems.includes(link.slug)) {
        let subItems: any[] = []

        if (link.slug === 'components') {
          subItems = components.map((c) => ({
            title: c.title,
            href: `/component/${c.slug}`,
            beta: c.beta,
          }))
        } else if (link.slug === 'templates') {
          subItems = templates.map((t) => ({
            title: t.title,
            href: `/template/${t.slug}`,
          }))
        } else if (link.slug === 'foundation') {
          subItems = foundationPages.map((p) => ({
            title: p.title,
            href: `/foundation/${p.slug}`,
          }))
        }

        return (
          <CollapsibleSection
            key={href}
            title={link.title}
            icon={link.icon}
            href={href}
            isOpen={openSections[link.slug]}
            onToggle={() => toggleSection(link.slug)}
            isActive={pathName.startsWith(href)}
          >
            <Core.GdsFlex flex-direction="column" gap="xs">
              {subItems.map((item) => (
                <Link
                  key={item.href}
                  component="button"
                  href={item.href}
                  rank={
                    pathName === item.href ||
                    pathName.startsWith(`${item.href}/`)
                      ? 'secondary'
                      : 'tertiary'
                  }
                  justify-content="space-between"
                  size="small"
                  data-sub-item
                  data-animation="scroll"
                  flex="1"
                >
                  <span data-fade>{item.title}</span>
                  {false && item.beta && (
                    <Core.GdsBadge variant="notice" slot="trail" size="small">
                      BETA
                    </Core.GdsBadge>
                  )}
                </Link>
              ))}
            </Core.GdsFlex>
          </CollapsibleSection>
        )
      }

      return (
        <Link
          key={href}
          component="button"
          href={href}
          rank={pathName === href ? 'secondary' : 'tertiary'}
          justify-content="flex-start"
          size="medium"
          align-items="center"
          data-animation="scroll"
          flex="1"
          width="100%"
        >
          {link.icon && (
            <Icon
              name={link.icon}
              slot="lead"
              solid={pathName === href ? true : false}
            />
          )}
          <span data-fade>{link.title}</span>
        </Link>
      )
    })
  }, [isLoaded, actions, pathName, openSections])

  const GDS = () => {
    return (
      <Core.GdsFlex
        display="none; s{flex}"
        padding="l"
        align-items="center"
        justify-content="space-between"
        height="68px"
        width="100%"
        gap="s"
      >
        {isOpen && (
          <Link href="/">
            <Core.GdsText
              font-weight="book"
              font-size="detail-m"
              color="brand-01"
            >
              Green Design System
            </Core.GdsText>
          </Link>
        )}
      </Core.GdsFlex>
    )
  }

  const handleToggleSidebar = () => {
    SettingsActions.toggle('UI.Panel.Sidebar')
  }

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <Core.GdsCard
      variant="secondary"
      border-radius="0"
      justify-content="flex-start"
      align-items={isOpen ? 'flex-start' : 'center'}
      gap="xl"
      className={_('sidebar', isOpen ? 'open' : 'closed')}
      padding={isOpen ? 'xl xs l s' : 'xl xs l m'}
      min-width={isOpen ? '260px' : '80px'}
      width={isOpen ? '100%; s{240px}' : 'max-content'}
      height="max-content; s{100vh}"
      position="relative; s{sticky}"
      inset="0; s{0px auto auto auto}"
      border-width={menuOpen ? '0 0 4xs 0' : '0'}
      border-color="primary"
      role="navigation"
      aria-label="Main"
    >
      <Core.GdsFlex
        display="none; s{flex}"
        padding="l"
        align-items="center"
        justify-content="space-between"
        height="68px"
        width="100%"
        gap="s"
      >
        {isOpen && (
          <Link href="/">
            <Core.GdsText
              font-weight="book"
              font-size="detail-m"
              color="brand-01"
            >
              Green Design System
            </Core.GdsText>
          </Link>
        )}
      </Core.GdsFlex>
      <Core.GdsFlex
        display="flex; s{none}"
        align-items="center"
        justify-content="space-between"
        width="100%"
        padding="0 l"
      >
        <Link href="/">
          <Core.GdsText
            font-weight="book"
            font-size="detail-m"
            color="brand-01"
          >
            Green Design System
          </Core.GdsText>
        </Link>
        <Link
          component="button"
          onClick={handleMenuToggle}
          rank="tertiary"
          width="max-content"
          size="medium"
        >
          {menuOpen ? (
            <Icon name="IconCrossLarge" />
          ) : (
            <Icon name="IconBarsThree" />
          )}
        </Link>
      </Core.GdsFlex>
      <Core.GdsFlex
        flex-direction="column"
        gap="xs"
        width="100%"
        align-items={isOpen ? 'flex-start' : 'center'}
        display={menuOpen ? 'flex' : 'none; s{flex}'}
        padding={menuOpen ? '0 l 0 0' : '0'}
      >
        {isOpen || menuOpen ? renderExpandedNav : renderCollapsedNav}
      </Core.GdsFlex>
      <Core.GdsFlex
        key={isOpen ? 'sidebar-open' : 'sidebar-closed'}
        padding={isOpen ? '0 0 0 0' : '0'}
        justify-content={isOpen ? 'flex-start' : 'center'}
        align-items="center"
        gap="l"
        width="100%"
        margin="auto 0 0 0"
        display={menuOpen ? 'none' : 'none; s{flex}'}
      >
        <Link
          component="button"
          onClick={handleToggleSidebar}
          rank="tertiary"
          width="max-content"
          size="medium"
        >
          {isOpen ? (
            <>
              <Icon name="IconMenuSidebar" slot="lead" solid />
              Close menu
            </>
          ) : (
            <Icon name="IconMenuSidebar" />
          )}
        </Link>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
