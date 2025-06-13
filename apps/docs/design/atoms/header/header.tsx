'use client'

import {
  GdsFlex,
  IconBrandSeb,
  IconCrossLarge,
  IconCrossSmall,
  IconMagnifyingGlass,
  IconMenuSidebar,
} from '@sebgroup/green-core/react'
import { useSettingsContext, useSettingsValue } from '../../../settings'
import { Link } from '../link/link'

export default function Header() {
  const { actions } = useSettingsContext()

  return (
    <GdsFlex
      background="secondary"
      width="100%"
      align-items="center"
      justify-content="space-between"
      padding="l"
      position="relative"
      gap="m"
    >
      <div></div>

      <Link href="/">
        <IconBrandSeb size="l" />
      </Link>

      <Link component="button" href="/search" size="medium" rank="tertiary">
        <IconMagnifyingGlass></IconMagnifyingGlass>
      </Link>
    </GdsFlex>
  )
}
