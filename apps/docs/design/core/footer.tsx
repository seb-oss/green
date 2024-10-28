'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

const GdsButton = dynamic(
  () =>
    import('@sebgroup/green-react/core/button').then((mod) => mod.GdsButton),
  {
    ssr: false,
  },
)

const GdsFlex = dynamic(
  () => import('@sebgroup/green-react/core/flex').then((mod) => mod.GdsFlex),
  {
    ssr: false,
  },
)

const GdsText = dynamic(
  () => import('@sebgroup/green-react/core/text').then((mod) => mod.GdsText),
  {
    ssr: false,
  },
)

export default function Footer() {
  const year = new Date().getFullYear()
  const symbol = '\u00A9'
  const text = `${symbol}  ${year} Green Design System`

  return (
    <GdsFlex
      flex-direction="column"
      padding="6xl 2xl"
      gap="5xl"
      border="4xs/primary 0 0 0"
    >
      <GdsFlex>
        <GdsText tag="h2">Green Design System</GdsText>
      </GdsFlex>
      <GdsFlex gap="8xl">
        <GdsFlex gap="xl" flex-direction="column">
          <Link href="/about">About</Link>
          <Link href="/foundation">Foundation</Link>
          <Link href="/components">Components</Link>
        </GdsFlex>
        <GdsFlex gap="xl" flex-direction="column">
          <Link href="https://github.com/seb-oss/green">Github</Link>
          <Link href="/changelog">Changelog</Link>
          <Link href="/status">Status</Link>
        </GdsFlex>
        <GdsFlex gap="xl" flex-direction="column">
          <Link href="https://sebgroup.com/">SEB Group</Link>
          <Link href="https://seb.se/">SEB.se</Link>
        </GdsFlex>
      </GdsFlex>
      <GdsFlex justify-content="space-between" align-items="center">
        {text}

        <GdsButton data-cc="c-settings" rank="tertiary">
          Cookie preferences
        </GdsButton>
      </GdsFlex>
    </GdsFlex>
  )
}
