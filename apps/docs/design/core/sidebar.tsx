'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { allComponents } from 'content'
import { isDev } from '$/env/env'
import { GdsBadge, GdsCard, GdsContainer, GdsFlex } from '$/import/components'
import {
  IconBrandGreen,
  IconEyeSlash,
  IconSquareGridCircle,
  IconSquareInfo,
  IconTextEdit,
} from '$/import/icons'
import Link from 'core/link'

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
      // {
      //   title: 'Accessibility',
      //   path: '/foundation/accessibility',
      //   badge: undefined,
      //   private: false,
      // },
    ],
  },
  {
    title: 'UX Writing',
    path: '/ux-writing',
    icon: <IconTextEdit />,
    subLinks: [
      // {
      //   title: 'General',
      //   path: '/ux-writing/general',
      //   badge: undefined,
      //   private: false,
      // },
      // {
      //   title: 'English',
      //   path: '/ux-writing/english',
      //   badge: undefined,
      //   private: false,
      // },
      // {
      //   title: 'Swedish',
      //   path: '/ux-writing/swedish',
      //   badge: undefined,
      //   private: false,
      // },
    ],
  },
  {
    title: 'About',
    path: '/about',
    icon: <IconSquareInfo />,
    subLinks: [
      // {
      //   title: 'Changelog',
      //   path: '/changelog',
      //   badge: undefined,
      //   private: false,
      // },
      // {
      //   title: 'Status',
      //   path: '/status',
      //   badge: undefined,
      //   private: false,
      // },
    ],
  },
]

export default function Sidebar() {
  const path = usePathname()

  const [hasScrolled, setHasScrolled] = useState(false)

  const activeMenuItem = menu.find((item) => {
    const urlArr = path.split('/')
    const about = ['foundation', 'change']

    if (urlArr.includes('component') || urlArr.includes('components')) {
      if (item.path.includes('component')) {
        return true
      }
    }

    console.log(urlArr)
    console.log(item.path.split('/'))

    return path === item.path
  })

  return (
    <GdsCard
      height="calc(100vh - 72px)"
      align-items="flex-start"
      flex-direction="column"
      margin="0 s; m{0 0 0 s}"
      z-index="99999"
      padding="none"
      position="fixed; m{sticky}"
      inset="60px 0 0 0"
      max-height="calc(100vh - 60px)"
      overflow="hidden"
      min-width="270px"
    >
      <GdsFlex flex-direction="column" max-height="100%">
        <GdsContainer
          padding="xs"
          min-width="250px"
          border="0 0 4xs 0"
          border-color="primary"
          style={{
            boxShadow: hasScrolled
              ? '0px 0px 8px 4px #00000015, 0px 3px 2px 0px #00000005'
              : 'none',
            transition: 'box-shadow .25s ease-out',
          }}
        >
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
                  variant="hidden"
                >
                  <GdsFlex align-content="center" gap="s" padding="xs s">
                    {menuItem.icon && menuItem.icon}
                    {menuItem.title}
                  </GdsFlex>
                </Link>
              </GdsFlex>
            ))}
          </GdsFlex>
        </GdsContainer>

        <GdsContainer
          padding="xs"
          overflow="scroll"
          onScroll={(e) => {
            if (e.target.scrollTop === 0) {
              setHasScrolled(false)
            } else {
              if (hasScrolled) return
              setHasScrolled(true)
            }
          }}
        >
          <GdsFlex flex-direction="column" gap="4xs">
            {activeMenuItem &&
              activeMenuItem.subLinks.map((subLink, subIdx) => {
                return (
                  <Link
                    href={subLink.path}
                    className={`sidebar-link sidebar-link--sub ${subLink.path === path ? 'active' : ''}`}
                    key={subIdx}
                    variant="hidden"
                  >
                    <GdsFlex
                      key={subIdx}
                      justify-content="space-between"
                      padding="xs s"
                      gap="xs"
                      width="100%"
                    >
                      <GdsFlex align-items="center" gap="s">
                        <GdsFlex align-items="center" width="19px">
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
        </GdsContainer>

        {/* <GdsContainer padding="xs" min-width="250px">
          <GdsFlex flex-direction="column" min-width="100%" margin="auto 0 0 0">
            <Link
              href="https://designlibrary.sebgroup.com/"
              target="_blank"
              className="sidebar-link"
              variant="hidden"
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
        </GdsContainer> */}
      </GdsFlex>
    </GdsCard>
  )
}
