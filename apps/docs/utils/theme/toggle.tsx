'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { GdsMenuButton } from '$/import/components'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const Light = () => <div>Light</div>

  const Dark = () => <div>Dark</div>

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
        <Light />
      </GdsMenuButton>
    )
  }
  return (
    <GdsMenuButton
      className="theme"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={`Toggle ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
    >
      {theme === 'dark' ? <Light /> : <Dark />}
    </GdsMenuButton>
  )
}
