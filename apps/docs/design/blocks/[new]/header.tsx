'use client'

import React, { forwardRef, useContext, useEffect, useState } from 'react'
import { IconBrandSeb } from '@sebgroup/green-react/src/lib/icon/icons/IconBrandSeb'
import { IconBrandGithub } from '@sebgroup/green-react/src/lib/icon/icons/IconBrandGithub'
import { IconCrossSmall } from '@sebgroup/green-react/src/lib/icon/icons/IconCrossSmall'
import { IconBarsThree } from '@sebgroup/green-react/src/lib/icon/icons/IconBarsThree'
import GdsContainer from '@sebgroup/green-react/src/core/container'
import GdsFlex from '@sebgroup/green-react/src/core/flex'
import GdsButton from '@sebgroup/green-react/src/core/button'
import Link from 'next/link'
import { ThemeProviderContext } from '$/theme/provider'
import { ThemeToggle } from '$/theme/toggle'

export default function Header() {
  const { toggleCmd } = useContext(ThemeProviderContext)
  const { toggleNav, isNavOpen } = useContext(ThemeProviderContext)
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
        padding="0 l"
        height="72px"
        border="0 0 4xs/tertiary 0"
      >
        <GdsButton rank="tertiary" onClick={toggleNav}>
          Menu
          {isNavOpen === true ? (
            <IconCrossSmall slot="lead" />
          ) : (
            <IconBarsThree slot="lead" />
          )}
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
    </GdsContainer>
  )
}
