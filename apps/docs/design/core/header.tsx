'use client'

import React, { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Context } from '$/provider/provider'

const GdsContainer = dynamic(
  () =>
    import('@sebgroup/green-react/core/container').then(
      (mod) => mod.GdsContainer,
    ),
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

const GdsMenuButton = dynamic(
  () =>
    import('@sebgroup/green-react/core/menu-button').then(
      (mod) => mod.GdsMenuButton,
    ),
  {
    ssr: false,
  },
)

const IconBarsThree = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconBarsThree').then(
      (mod) => mod.IconBarsThree,
    ),
  {
    ssr: false,
  },
)
const IconBrandGithub = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconBrandGithub').then(
      (mod) => mod.IconBrandGithub,
    ),
  {
    ssr: false,
  },
)
const IconBrandSeb = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconBrandSeb').then(
      (mod) => mod.IconBrandSeb,
    ),
  {
    ssr: false,
  },
)
const IconCrossLarge = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconCrossLarge').then(
      (mod) => mod.IconCrossLarge,
    ),
  {
    ssr: false,
  },
)
const IconMagnifyingGlass = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconMagnifyingGlass').then(
      (mod) => mod.IconMagnifyingGlass,
    ),
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
            <IconBrandGithub />
          </GdsMenuButton>
        </GdsFlex>
      </GdsFlex>
    </GdsContainer>
  )
}
