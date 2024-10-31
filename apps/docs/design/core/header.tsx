'use client'

import React, { forwardRef, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { GdsContainer, GdsFlex, GdsMenuButton } from '$/import/components'
import {
  IconBarsThree,
  IconBrandGithub,
  IconBrandSeb,
  IconCrossLarge,
  IconMagnifyingGlass,
} from '$/import/icons'
import { Context } from '$/provider/provider'
import { ThemeToggle } from '$/theme/toggle'

export const Header = forwardRef(({ ...props }, ref) => {
  const { toggleNav, isNavOpen, toggleCmd } = useContext(Context)
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
        padding="0 0 0 l"
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
          <GdsMenuButton onClick={toggleCmd}>
            <IconMagnifyingGlass slot="lead" />
            {isWindows ? '/' : '⌘K'}
          </GdsMenuButton>
          <GdsMenuButton
            href="https://github.com/sebgroup/green"
            target="_blank"
          >
            <IconBrandGithub />
          </GdsMenuButton>
          <ThemeToggle />
        </GdsFlex>
      </GdsFlex>
    </GdsContainer>
  )
})

Header.displayName = 'Header'

export default Header
