'use client'

import Link from 'next/link'
import GdsFlex from '@sebgroup/green-react/src/core/flex'
import GdsButton from '@sebgroup/green-react/src/core/button'
import { IconChevronBottom } from '@sebgroup/green-react/src/lib/icon/icons/IconChevronBottom'

export default function Sidebar({
  isNavOpen,
}: {
  isNavOpen?: boolean
  toggleNav?: () => void
}) {
  return (
    <GdsFlex
      padding="l"
      border="0 4xs/tertiary 0 0"
      max-width="300px"
      min-height="100vh"
      align-items="flex-start"
    >
      <GdsFlex
        align-items="center"
        justify-content="space-between"
        min-width="100%"
      >
        Design
        <GdsButton rank="tertiary">
          <IconChevronBottom />
        </GdsButton>
      </GdsFlex>
    </GdsFlex>
  )
}
