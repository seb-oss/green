'use client'

import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
import { GdsContainer, GdsMenuButton } from '$/import/components'
import { IconMoon, IconSun } from '$/import/icons'
import { Context } from '$/provider/provider'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useContext(Context)

  const Light = () => <IconSun />
  const Dark = () => <IconMoon />

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === '\\' &&
        isHTMLElement(event.target) &&
        (event.target as HTMLElement).tagName !== 'INPUT' &&
        (event.target as HTMLElement).tagName !== 'TEXTAREA'
      ) {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [setTheme, theme])

  function isHTMLElement(target: EventTarget | null): target is HTMLElement {
    return target instanceof HTMLElement
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <GdsMenuButton aria-label="Toggle Light Theme">
        <GdsContainer min-width="24px">
          <Light />
        </GdsContainer>
      </GdsMenuButton>
    )
  }
  return (
    <GdsMenuButton
      className="theme"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={`Toggle ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
    >
      <GdsContainer min-width="24px">
        {theme === 'dark' ? <Light /> : <Dark />}
      </GdsContainer>
    </GdsMenuButton>
  )
}
