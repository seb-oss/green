'use client'

import { IconBrandSeb } from '@sebgroup/green-react/src/lib/icon/icons/IconBrandSeb'
import { IconBrandGithub } from '@sebgroup/green-react/src/lib/icon/icons/IconBrandGithub'
import { IconCrossSmall } from '@sebgroup/green-react/src/lib/icon/icons/IconCrossSmall'
import { IconBarsThree } from '@sebgroup/green-react/src/lib/icon/icons/IconBarsThree'
import GdsFlex from '@sebgroup/green-react/src/core/flex'
import GdsButton from '@sebgroup/green-react/src/core/button'
import Link from 'next/link'

export default function Header() {
  return (
    <GdsFlex
      justify-content="space-between"
      min-width="100%"
      align-items="center"
      position="sticky"
      z-index="100"
      padding="0 l"
      height="72px"
      border="0 0 4xs 0"
      border-color="primary"
    >
      <GdsButton rank="tertiary">
        Menu
        <IconBarsThree slot="lead" />
      </GdsButton>
      <Link href="/">
        <IconBrandSeb />
      </Link>
      <GdsFlex gap="s">
        <GdsButton rank="tertiary">Search</GdsButton>
        <GdsButton rank="tertiary">
          <IconBrandGithub />
        </GdsButton>
      </GdsFlex>
    </GdsFlex>
  )
}
