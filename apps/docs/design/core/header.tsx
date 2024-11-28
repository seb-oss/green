'use client'

import React, { forwardRef, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  GdsButton,
  GdsContainer,
  GdsFlex,
  GdsMenuButton,
} from '$/import/components'
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
      z-index="1100"
      background="primary"
    >
      <GdsFlex
        justify-content="space-between"
        min-width="100%"
        align-items="center"
        height="60px"
        padding-inline="s"
      >
        {isNavOpen === true ? (
          <GdsButton onClick={toggleNav} rank="tertiary" size="small">
            <IconCrossLarge slot="lead" />
            Menu
          </GdsButton>
        ) : (
          <GdsButton onClick={toggleNav} rank="tertiary" size="small">
            <IconBarsThree slot="lead" />
            Menu
          </GdsButton>
        )}
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
        <GdsFlex
          height="100%"
          padding="0; s{0 l}"
          align-items="center"
          gap="2xs"
        >
          <GdsContainer display="none; s{block}">
            <GdsButton onClick={toggleCmd} rank="tertiary" size="small">
              <IconMagnifyingGlass slot="lead" />
              {isWindows ? '/' : '⌘K'}
            </GdsButton>
          </GdsContainer>
          <GdsButton
            href="https://github.com/sebgroup/green"
            target="_blank"
            rank="tertiary"
            size="small"
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
