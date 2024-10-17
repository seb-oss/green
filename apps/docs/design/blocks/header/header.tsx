'use client'

import React, { forwardRef, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { ThemeProviderContext } from '$/theme/provider'

import dynamic from 'next/dynamic'

const GdsContainer = dynamic(
  () => import('@sebgroup/green-react/src/core/container'),
  {
    ssr: false,
  },
)

const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false,
})

const GdsButton = dynamic(
  () => import('@sebgroup/green-react/src/core/button'),
  {
    ssr: false,
  },
)

const IconBrandSeb = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons').then(
      (mod) => mod.IconBrandSeb,
    ),
  {
    ssr: false,
  },
)

const IconBarsThree = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons').then(
      (mod) => mod.IconBarsThree,
    ),
  {
    ssr: false,
  },
)

const IconMagnifyingGlass = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons').then(
      (mod) => mod.IconMagnifyingGlass,
    ),
  {
    ssr: false,
  },
)
const IconBrandGithub = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons').then(
      (mod) => mod.IconBrandGithub,
    ),
  {
    ssr: false,
  },
)

export const Header = forwardRef(({ ...props }, ref) => {
  const { toggleNav, isNavOpen } = useContext(ThemeProviderContext)

  return (
    <header style={{ position: 'sticky', top: 0 }}>
      <GdsContainer margin="auto" padding="m; m{m l}" inset="0 0 auto 0">
        <GdsFlex justify-content="space-between" align-items="center">
          <GdsFlex flex="1" display="flex">
            <GdsContainer display="block; m{none}">
              <GdsButton rank="tertiary" onClick={() => toggleNav()}>
                <IconBarsThree />
              </GdsButton>
            </GdsContainer>
          </GdsFlex>
          <GdsFlex
            flex="1"
            align-items="center"
            justify-content="center; >m{flex-start}"
            style={{ paddingLeft: 110 }}
          >
            <IconBrandSeb />
          </GdsFlex>
          <GdsFlex gap="s" flex="1" justify-content="flex-end">
            <GdsFlex display="none; s{flex}">
              <GdsButton rank="tertiary">
                <IconMagnifyingGlass slot="lead" />
                Search
              </GdsButton>
            </GdsFlex>
            <GdsButton rank="tertiary">
              <IconBrandGithub />
            </GdsButton>
          </GdsFlex>
        </GdsFlex>
      </GdsContainer>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
