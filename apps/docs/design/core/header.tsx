'use client'

import React, { forwardRef, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { GdsButton, GdsContainer, GdsFlex } from '$/import/components'
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
        height="60px"
        border="0 0 4xs/primary 0"
      >
        <GdsButton onClick={toggleNav} rank="tertiary">
          {isNavOpen === true ? (
            <IconCrossLarge slot="lead" />
          ) : (
            <IconBarsThree slot="lead" />
          )}
          Menu
        </GdsButton>
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
        <GdsFlex height="100%" padding="0; s{0 l}">
          <GdsContainer display="none; s{block}">
            <GdsMenuButton onClick={toggleCmd}>
              <IconMagnifyingGlass slot="lead" />
              {isWindows ? '/' : '⌘K'}
            </GdsMenuButton>
          </GdsContainer>
          <GdsMenuButton
            href="https://github.com/sebgroup/green"
            target="_blank"
            rank="tertiary"
          >
            <IconBrandGithub />
          </GdsButton>
          <ThemeToggle />
        </GdsFlex>
      </GdsFlex>
    </GdsContainer>
  )
})

Header.displayName = 'Header'

export default Header
