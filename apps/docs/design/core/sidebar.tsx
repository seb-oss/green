'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GdsBadge from '@sebgroup/green-react/src/core/badge'
import GdsButton from '@sebgroup/green-react/src/core/button'
import GdsFlex from '@sebgroup/green-react/src/core/flex'
import GdsText from '@sebgroup/green-react/src/core/text'
import { IconCainLink } from '@sebgroup/green-react/src/lib/icon/icons/IconCainLink'
import { IconChevronBottom } from '@sebgroup/green-react/src/lib/icon/icons/IconChevronBottom'
import { IconChevronTop } from '@sebgroup/green-react/src/lib/icon/icons/IconChevronTop'
import { IconEyeSlash } from '@sebgroup/green-react/src/lib/icon/icons/IconEyeSlash'
import Dev, { isDev } from '$/env/env'
import { allComponents, Component } from 'content'

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
    path: '/foundation',
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
      min-height="100vh"
      align-items="flex-start"
      flex-direction="column"
      gap="l"
    >
      {menu.map((menuItem, idx) => (
        <GdsFlex key={idx} flex-direction="column" min-width="100%">
          <GdsFlex align-items="center" justify-content="space-between">
            <Link
              className={path === menuItem.path ? 'active' : ''}
              href={menuItem.path}
            >
              {menuItem.title}
            </Link>
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
                // Log the index and private status
                // console.log(`Index: ${subIdx}, Private: ${subLink.private}`)

                return (
                  <Link
                    key={subIdx}
                    className={path === subLink.path ? 'active' : ''}
                    href={subLink.path}
                  >
                    <GdsFlex justify-content="space-between">
                      <GdsText text-decoration="underline">
                        {subLink.title}
                      </GdsText>
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
                  </Link>
                )
              })}
            </GdsFlex>
          )}
        </GdsFlex>
      ))}
      <GdsFlex
        position="sticky"
        inset="auto 0 24px 0"
        margin="auto 0 0 0"
        min-width="100%"
        justify-content="stretch"
      >
        <Link
          href="https://designlibrary.sebgroup.com/"
          target="_blank"
          style={{ minInlineSize: '100%' }}
        >
          <GdsFlex align-items="center" justify-content="space-between">
            Design Library
            <IconCainLink />
          </GdsFlex>
        </Link>
      </GdsFlex>
    </GdsFlex>
  )
}
