'use client'

import GdsFlex from '@sebgroup/green-react/src/core/flex'
import GdsText from '@sebgroup/green-react/src/core/text'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  const symbol = '\u00A9'
  const text = `${symbol}  ${year} Green Design System`

  return (
    <GdsFlex
      flex-direction="column"
      padding="4xl"
      gap="8xl"
      border="4xs/primary 0 0 0"
    >
      <GdsFlex>
        <GdsText tag="h2">Green Design System</GdsText>
      </GdsFlex>
      <GdsFlex gap="4xl">
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
      <GdsFlex>{text}</GdsFlex>
    </GdsFlex>
  )
}
