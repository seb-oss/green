'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { allComponents } from 'content'
import { isDev } from '$/env/env'
import { GdsBadge, GdsCard, GdsFlex } from '$/import/components'
import {
  IconBrandGreen,
  IconCainLink,
  IconEyeSlash,
  IconSquareGridCircle,
  IconSquareInfo,
  IconTextEdit,
} from '$/import/icons'

import './sidebar.css'

const menu = [
  {
    title: 'Components',
    path: '/components',
    icon: <IconSquareGridCircle />,
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
    icon: <IconBrandGreen />,
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
    icon: <IconTextEdit />,
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
    icon: <IconSquareInfo />,
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

  // const [visibleSublinks, setVisibleSublinks] = useState<{
  //   [key: string]: boolean
  // }>({})

  // useEffect(() => {
  //   const initialVisibleSublinks: { [key: string]: boolean } = {}
  //   menu.forEach((menuItem) => {
  //     if (
  //       path === menuItem.path ||
  //       menuItem.subLinks.some((subLink) => path.includes(subLink.path))
  //     ) {
  //       initialVisibleSublinks[menuItem.title] = true
  //     }
  //   })
  //   setVisibleSublinks(initialVisibleSublinks)
  // }, [path])

  return (
    <GdsFlex
      flex-direction="column"
      padding="s"
      position="sticky"
      top="60px"
      gap="s"
      inset="60px 0 0 0"
      max-height="calc(100vh - 60px)"
    >
      <GdsCard padding="xs" min-width="300px">
        <GdsFlex
          align-items="flex-start"
          flex-direction="column"
          gap="xs"
          overflow="hidden auto"
        >
          {menu.map((menuItem, idx) => (
            <GdsFlex key={idx} flex-direction="column" min-width="100%">
              <Link
                href={menuItem.path}
                className={`sidebar-link ${menuItem.path === path ? 'active' : ''}`}
              >
                <GdsFlex align-content="center" gap="s">
                  {menuItem.icon && menuItem.icon}
                  {menuItem.title}
                </GdsFlex>
              </Link>
            </GdsFlex>
          ))}
        </GdsFlex>
      </GdsCard>

      {menu.filter((item) => item.path === path)[0] && (
        <GdsCard padding="xs" min-width="300px" overflow="scroll">
          <GdsFlex flex-direction="column">
            {menu
              .filter((item) => item.path === path)[0]
              .subLinks.map((subLink, subIdx) => {
                return (
                  <Link
                    href={subLink.path}
                    className="sidebar-link sidebar-link--sub"
                    key={subIdx}
                  >
                    <GdsFlex
                      key={subIdx}
                      justify-content="space-between"
                      gap="xs"
                    >
                      <GdsFlex align-items="center" gap="xs">
                        <GdsFlex align-items="center" width="12px">
                          {subLink.private && (
                            <IconEyeSlash width="12" height="12" />
                          )}
                        </GdsFlex>
                        {subLink.title}
                      </GdsFlex>

                      <GdsFlex align-items="center" gap="xs">
                        {subLink.badge && (
                          <GdsBadge variant="notice" size="small">
                            {subLink.badge}
                          </GdsBadge>
                        )}
                      </GdsFlex>
                    </GdsFlex>
                  </Link>
                )
              })}
          </GdsFlex>
        </GdsCard>
      )}

      <GdsCard padding="xs" min-width="300px">
        <GdsFlex flex-direction="column" min-width="100%" margin="auto 0 0 0">
          <Link
            href="https://designlibrary.sebgroup.com/"
            target="_blank"
            className="sidebar-link"
          >
            <GdsFlex
              align-items="center"
              justify-content="space-between"
              width="100%"
            >
              <span>Design Library</span>
              <IconCainLink />
            </GdsFlex>
          </Link>
        </GdsFlex>
      </GdsCard>
    </GdsFlex>
  )
}
