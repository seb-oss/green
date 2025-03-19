'use client'

import React, { forwardRef, useContext, useEffect, useState } from 'react'
import { Link } from 'next-view-transitions'
import {
  GdsButton,
  GdsDiv,
  GdsFlex,
  GdsMask,
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
    <GdsDiv level="1" position="sticky" inset="0" z-index="1100">
      <GdsMask
        background-color="secondary/0.8"
        backdrop-filter="blur(4px)"
        position="absolute"
        inset="0"
        mask-size="cover"
        level="2"
        pointer-events="none"
      />
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
        <GdsDiv
          position="absolute"
          margin="0 auto"
          inset="auto 0"
          max-width="max-content"
        >
          <Link href="/">
            <IconBrandSeb />
          </Link>
        </GdsDiv>
        <GdsFlex
          height="100%"
          padding="0; s{0 l}"
          align-items="center"
          gap="2xs"
        >
          <GdsDiv display="none; s{block}">
            <GdsButton onClick={toggleCmd} rank="tertiary" size="small">
              <IconMagnifyingGlass slot="lead" />
              {isWindows ? '/' : '⌘K'}
            </GdsButton>
          </GdsDiv>
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
    </GdsDiv>
  )
})

Header.displayName = 'Header'

export default Header
