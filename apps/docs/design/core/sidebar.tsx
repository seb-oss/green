'use client'

import Link from 'next/link'
import GdsFlex from '@sebgroup/green-react/src/core/flex'
import GdsButton from '@sebgroup/green-react/src/core/button'
import { IconChevronBottom } from '@sebgroup/green-react/src/lib/icon/icons/IconChevronBottom'
import { IconChevronTop } from '@sebgroup/green-react/src/lib/icon/icons/IconChevronTop'
import { IconCainLink } from '@sebgroup/green-react/src/lib/icon/icons/IconCainLink'
import { allComponents, Component } from 'content'
import { usePathname } from 'next/navigation'
import React, { useRef, useState } from 'react'

const menu = [
  {
    title: 'Components',
    path: '/components',
    subLinks: allComponents
      .filter((component) => component._raw.sourceFileName === 'index.mdx')
      .filter((component) => !component.private)
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((component) => ({
        title: component.title,
        path: component.url_path,
      })),
  },
  {
    title: 'Foundation',
    path: '/foundation',
    subLinks: [
      {
        title: 'Accessibility',
        path: '/foundation/accessibility',
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
      },
      {
        title: 'English',
        path: '/ux-writing/english',
      },
      {
        title: 'Swedish',
        path: '/ux-writing/swedish',
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
      },
      {
        title: 'Status',
        path: '/status',
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
      padding="l"
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
              {menuItem.subLinks.map((subLink, subIdx) => (
                <Link
                  key={subIdx}
                  className={path === subLink.path ? 'active' : ''}
                  href={subLink.path}
                >
                  {subLink.title}
                </Link>
              ))}
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
