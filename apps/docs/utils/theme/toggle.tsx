'use client'

import * as React from 'react'
import { useContext } from 'react'
import { GdsContainer, GdsMenuButton } from '$/import/components'
import { IconMoon, IconSun } from '$/import/icons'
import { Context } from '$/provider/provider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(Context)

  const Light = () => <IconSun />
  const Dark = () => <IconMoon />

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === '\\' &&
        event.target instanceof HTMLElement &&
        event.target.tagName !== 'INPUT' &&
        event.target.tagName !== 'TEXTAREA'
      ) {
        toggleTheme()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [toggleTheme])

  return (
    <GdsMenuButton
      onClick={() => {
        toggleTheme()
      }}
      aria-label={`Toggle ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
    >
      <GdsContainer min-width="24px">
        {theme === 'dark' ? <Light /> : <Dark />}
      </GdsContainer>
    </GdsMenuButton>
  )
}
