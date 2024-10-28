'use client'

import React, { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Context } from '$/provider/provider'

// import GdsContainer from '@sebgroup/green-react/src/core/container'
// import GdsFlex from '@sebgroup/green-react/src/core/flex'
// import GdsMenuButton from '@sebgroup/green-react/src/core/menu-button'
import { IconBarsThree } from '@sebgroup/green-react/src/lib/icon/icons/IconBarsThree'
import { IconBrandGithub } from '@sebgroup/green-react/src/lib/icon/icons/IconBrandGithub'
import { IconBrandSeb } from '@sebgroup/green-react/src/lib/icon/icons/IconBrandSeb'
import { IconCrossLarge } from '@sebgroup/green-react/src/lib/icon/icons/IconCrossLarge'
import { IconMagnifyingGlass } from '@sebgroup/green-react/src/lib/icon/icons/IconMagnifyingGlass'

const GdsContainer = dynamic(
  () => import('@sebgroup/green-react/src/core/container'),
  {
    ssr: false,
  },
)

const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false,
})

const GdsMenuButton = dynamic(
  () => import('@sebgroup/green-react/src/core/menu-button'),
  {
    ssr: false,
  },
)

export default function Header() {
  const { toggleNav, isNavOpen } = useContext(Context)
  const [isWindows, setIsWindows] = useState(false)

  useEffect(() => {
    const userAgent = window.navigator.userAgent
    setIsWindows(userAgent.indexOf('Windows') !== -1)
  }, [])

  return (
    <GdsContainer
      level="1"
      position="sticky"
      inset="0"
      z-index="100"
      background="primary"
    >
      <GdsFlex
        justify-content="space-between"
        min-width="100%"
        align-items="center"
        height="72px"
        border="0 0 4xs/primary 0"
        padding="0 l"
      >
        <GdsMenuButton onClick={toggleNav}>
          {isNavOpen === true ? (
            <IconCrossLarge slot="lead" />
          ) : (
            <IconBarsThree slot="lead" />
          )}
          Menu
        </GdsMenuButton>
        <GdsContainer
          position="absolute"
          margin="0 auto"
          inset="auto 0"
          max-width="max-content"
        >
          <Link href="/">
            <IconBrandSeb />
          </Link>
        </GdsContainer>
        <GdsFlex height="100%" padding="0 l">
          <GdsMenuButton>
            Search
            <IconMagnifyingGlass slot="trail" />
          </GdsMenuButton>
          <GdsMenuButton>
            <IconBrandGithub slot="trail" />
          </GdsMenuButton>
        </GdsFlex>
      </GdsFlex>
    </GdsContainer>
  )
}
