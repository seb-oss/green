'use client'

import React, { useContext, useState } from 'react'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { allComponents } from 'content'
import { isDev } from '$/env/env'
import { GdsBadge, GdsCard, GdsDiv, GdsFlex } from '$/import/components'
import {
  IconBrandGreen,
  IconEyeSlash,
  IconSquareGridCircle,
  IconSquareInfo,
  IconTextEdit,
} from '$/import/icons'
import { Context } from '$/provider/provider'

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
    subLinks: [],
  },
  {
    title: 'UX writing',
    path: '/ux-writing',
    icon: <IconTextEdit />,
    subLinks: [],
  },
  {
    title: 'About',
    path: '/about',
    icon: <IconSquareInfo />,
    subLinks: [],
  },
]

export default function Sidebar() {
  const path = usePathname()

  const [hasScrolled, setHasScrolled] = useState(false)

  const { toggleNav } = useContext(Context)

  const activeMenuItem = menu.find((item) => {
    const urlArr = path.split('/')

    const about = ['foundation', 'change']

    if (urlArr.includes('component') || urlArr.includes('components')) {
      if (item.path.includes('component')) {
        return true
      }
    }

    return path === item.path
  })

  return (
    <GdsCard
      height="calc(100vh - 72px)"
      align-items="flex-start"
      flex-direction="column"
      margin="0 s; m{s 0 0 s}"
      z-index="2"
      padding="none"
      position="fixed; m{sticky}"
      inset="70px 0 0 0"
      max-height="calc(100vh - 90px)"
      overflow="hidden"
      min-width="270px"
      className="sidebar-transition"
      variant="primary"
      border-radius="xs"
    >
      <GdsFlex flex-direction="column" max-height="100%">
        <GdsDiv
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
          <GdsFlex align-items="flex-start" flex-direction="column" gap="4xs">
            {menu.map((menuItem, idx) => (
              <GdsFlex key={idx} flex-direction="column" min-width="100%">
                <Link
                  href={menuItem.path}
                  className={`fade-in sidebar-link ${menuItem.path === path ? 'active' : ''}`}
                  onClick={() => {
                    window.innerWidth < 1024 && toggleNav()
                  }}
                >
                  <GdsFlex align-content="center" gap="s" padding="xs s">
                    {menuItem.icon && menuItem.icon}
                    {menuItem.title}
                  </GdsFlex>
                </Link>
              </GdsFlex>
            ))}
          </GdsFlex>
        </GdsDiv>
        <GdsDiv
          padding="xs"
          overflow="scroll"
          onScroll={(e) => {
            if ((e.target as HTMLElement).scrollTop === 0) {
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
                    className={`fade-in sidebar-link sidebar-link--sub ${subLink.path === path ? 'active' : ''}`}
                    key={subIdx}
                    onClick={() => {
                      window.innerWidth < 1024 && toggleNav()
                    }}
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
                            <IconEyeSlash width={12} height={12} />
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
        </GdsDiv>
      </GdsFlex>
    </GdsCard>
  )
}
