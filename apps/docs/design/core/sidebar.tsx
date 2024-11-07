'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { allComponents } from 'content'
import { isDev } from '$/env/env'
import { GdsBadge, GdsButton, GdsFlex, GdsLink } from '$/import/components'
import {
  IconCainLink,
  IconChevronBottom,
  IconChevronTop,
  IconEyeSlash,
} from '$/import/icons'

const menu = [
  {
    title: 'Components',
    path: '/components',
    subLinks: allComponents
      .filter((component) => component._raw.sourceFileName === 'index.mdx')
      .filter((component) => !(component.private && !isDev))
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((component) => ({
        title: component.title,
        path: component.url_path,
        badge: component.status || undefined,
        private: component.private ? true : false,
      })),
  },
  {
    title: 'Foundation',
    path: '/foundation',
    subLinks: [
      {
        title: 'Accessibility',
        path: '/foundation/accessibility',
        badge: undefined,
        private: false,
      },
    ],
  },
  {
    title: 'UX Writing',
    path: '/ux-writing',
    subLinks: [
      {
        title: 'General',
        path: '/ux-writing/general',
        badge: undefined,
        private: false,
      },
      {
        title: 'English',
        path: '/ux-writing/english',
        badge: undefined,
        private: false,
      },
      {
        title: 'Swedish',
        path: '/ux-writing/swedish',
        badge: undefined,
        private: false,
      },
    ],
  },
  {
    title: 'About',
    path: '/about',
    subLinks: [
      {
        title: 'Changelog',
        path: '/changelog',
        badge: undefined,
        private: false,
      },
      {
        title: 'Status',
        path: '/status',
        badge: undefined,
        private: false,
      },
    ],
  },
]

export default function Sidebar({
  isNavOpen,
}: {
  isNavOpen?: boolean
  toggleNav?: () => void
}) {
  const path = usePathname()
  const [visibleSublinks, setVisibleSublinks] = useState<{
    [key: string]: boolean
  }>({})

  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  useEffect(() => {
    return () => setHoveredLink(null)
  }, [])

  useEffect(() => {
    const initialVisibleSublinks: { [key: string]: boolean } = {}
    menu.forEach((menuItem) => {
      if (
        path === menuItem.path ||
        menuItem.subLinks.some((subLink) => path.includes(subLink.path))
      ) {
        initialVisibleSublinks[menuItem.title] = true
      }
    })
    setVisibleSublinks(initialVisibleSublinks)
  }, [path])

  const toggleSublinkVisibility = (key: string) => {
    setVisibleSublinks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <GdsFlex
      padding="xl xl xl 2xl"
      border="0 4xs/primary 0 0"
      min-width="300px"
      height="s{100vh} calc(100vh - 72px)"
      align-items="flex-start"
      flex-direction="column"
      gap="l"
      position="xs{fixed} s{fixed} m{sticky}"
      top="72px"
      inset="72px 0 0 0"
      overflow="hidden auto"
      background="primary"
      z-index="100"
      level="1"
    >
      {menu.map((menuItem, idx) => (
        <GdsFlex key={idx} flex-direction="column" min-width="100%">
          <GdsFlex align-items="center" justify-content="space-between">
            <GdsLink href={menuItem.path} variant="secondary">
              {menuItem.title}
            </GdsLink>
            {menuItem.subLinks.length > 0 && (
              <GdsButton
                rank="tertiary"
                aria-label="Expand"
                onClick={() => toggleSublinkVisibility(menuItem.title)}
              >
                {visibleSublinks[menuItem.title] ? (
                  <IconChevronTop />
                ) : (
                  <IconChevronBottom />
                )}
              </GdsButton>
            )}
          </GdsFlex>
          {visibleSublinks[menuItem.title] && (
            <GdsFlex flex-direction="column" gap="m" padding="m m 0 m">
              {menuItem.subLinks.map((subLink, subIdx) => {
                return (
                  <GdsFlex key={subIdx} justify-content="space-between">
                    <GdsLink href={subLink.path} variant="secondary">
                      {subLink.title}
                    </GdsLink>
                    <GdsFlex align-items="center" gap="xs">
                      {subLink.private && (
                        <IconEyeSlash width="12" height="12" />
                      )}
                      {subLink.badge && (
                        <GdsBadge variant="notice" size="small">
                          {subLink.badge}
                        </GdsBadge>
                      )}
                    </GdsFlex>
                  </GdsFlex>
                )
              })}
            </GdsFlex>
          )}
        </GdsFlex>
      ))}
      <GdsFlex
        margin="auto 0 0 0"
        min-width="100%"
        justify-content="stretch"
        padding="0 s 0 0"
      >
        <GdsFlex
          align-items="center"
          justify-content="space-between"
          width="100%"
        >
          <GdsLink
            href="https://designlibrary.sebgroup.com/"
            target="_blank"
            variant="secondary"
          >
            <span>Design Library</span>
          </GdsLink>
          <IconCainLink />
        </GdsFlex>
      </GdsFlex>
    </GdsFlex>
  )
}
