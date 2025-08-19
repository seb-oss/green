// settings/theme/provider.tsx
'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import { GdsTheme } from '@sebgroup/green-core/react'
import { useSettingsValue } from '../hooks'

import type { ColorScheme } from './types'

const THEME_STYLESHEET = 'theme-stylesheet'
const styleSheetMap = new WeakMap<CSSStyleSheet, string>()

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const colorScheme = useSettingsValue((s) => s.UI.Theme.ColorScheme)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (typeof window === 'undefined') return

    const setupTheme = () => {
      if (!('adoptedStyleSheets' in document)) return

      document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
        (sheet) => styleSheetMap.get(sheet) !== THEME_STYLESHEET,
      )

      const sheet = new CSSStyleSheet()
      styleSheetMap.set(sheet, THEME_STYLESHEET)

      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

      const updateColorScheme = (scheme: ColorScheme) => {
        const colorSchemeValue = {
          dark: 'only dark',
          light: 'only light',
          auto: 'light dark',
        }[scheme]

        sheet.replaceSync(`
          :root {
            color-scheme: ${colorSchemeValue}; 
          }
        `)
      }

      document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
      updateColorScheme(colorScheme)

      const handleSystemChange = () => {
        if (colorScheme === 'auto') {
          updateColorScheme('auto')
        }
      }

      prefersDark.addEventListener('change', handleSystemChange)
      return () => {
        prefersDark.removeEventListener('change', handleSystemChange)
        document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
          (s) => styleSheetMap.get(s) !== THEME_STYLESHEET,
        )
      }
    }

    return setupTheme()
  }, [colorScheme, mounted])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <GdsTheme color-scheme={colorScheme} designVersion="2023">
      {children}
    </GdsTheme>
  )
}
