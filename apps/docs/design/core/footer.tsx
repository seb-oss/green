'use client'

import { Link } from 'next-view-transitions'
import { GdsButton, GdsFlex, GdsText } from '$/import/components'

const menuItems = [
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Foundation',
    path: '/foundation',
  },
  {
    title: 'Components',
    path: '/components',
  },
  {
    title: 'Github',
    path: 'https://github.com/seb-oss/green',
    external: true,
  },
  {
    title: 'Changelog',
    path: '/changelog',
  },
  {
    title: 'Status',
    path: '/status',
  },
  {
    title: 'SEB Group',
    path: 'https://sebgroup.com/',
    external: true,
  },
  {
    title: 'SEB.se',
    path: 'https://seb.se/',
    external: true,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const symbol = '\u00A9'
  const text = `${symbol}  ${year} Green Design System`

  return (
    <GdsFlex
      flex-direction="column"
      padding="l 0;"
      gap="2xl; s{5xl}"
      border="4xs/primary 0 0 0"
    >
      {/* <GdsFlex>
        <GdsText tag="h2">Green Design System</GdsText>
      </GdsFlex>
      <GdsFlex gap="2xl; s{8xl}" flex-direction="column; s{row}">
        <GdsFlex gap="xl" flex-direction="column">
          {menuItems.slice(0, 3).map((item, idx) => (
            <Link
              href={item.path}
              target={item.external ? '_blank' : '_self'}
              key={idx}
            >
              {item.title}
            </Link>
          ))}
        </GdsFlex>
        <GdsFlex gap="xl" flex-direction="column">
          {menuItems.slice(3, 6).map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              target={item.external ? '_blank' : '_self'}
            >
              {item.title}
            </Link>
          ))}
        </GdsFlex>
        <GdsFlex gap="xl" flex-direction="column">
          {menuItems.slice(6).map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              target={item.external ? '_blank' : '_self'}
            >
              {item.title}
            </Link>
          ))}
        </GdsFlex>
      </GdsFlex> */}
      <GdsFlex justify-content="space-between" align-items="center">
        {text}
        <GdsButton data-cc="c-settings" rank="tertiary">
          Cookie preferences
        </GdsButton>
      </GdsFlex>
    </GdsFlex>
  )
}
