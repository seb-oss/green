'use client'

import React, { forwardRef, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { ThemeProviderContext } from '$/theme/provider'
import { ThemeToggle } from '$/theme/toggle'

import dynamic from 'next/dynamic'

const GdsContainer = dynamic(() => import('@sebgroup/green-react/src/core/container'), {
  ssr: false
})

const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false
})

const GdsButton = dynamic(() => import('@sebgroup/green-react/src/core/button'), {
  ssr: false
})

const IconBrandSeb = dynamic(
  () => import('@sebgroup/green-react/src/lib/icon/icons/IconBrandSeb').then(mod => mod.IconBrandSeb),
  {
    ssr: false
  }
)

export const Header = forwardRef(({ ...props }, ref) => {
  const { toggleCmd } = useContext(ThemeProviderContext)
  const { toggleNav, isNavOpen } = useContext(ThemeProviderContext)
  const [isWindows, setIsWindows] = useState(false)

  useEffect(() => {
    const userAgent = window.navigator.userAgent
    setIsWindows(userAgent.indexOf('Windows') !== -1)
  }, [])

  return (
    <header>
      <GdsContainer margin="auto" max-width="1088px" padding="m 0">
        <GdsFlex justify-content="space-between" align-items="center">
          <GdsButton rank="tertiary">Menu</GdsButton>
          <IconBrandSeb />
          <GdsButton rank="tertiary">Search</GdsButton>
        </GdsFlex>
      </GdsContainer>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
