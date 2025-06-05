'use client'

import React, { useEffect, useMemo, useState } from 'react'

import type { PropsWithChildren } from 'react'

import Preloader from '../design/atoms/preloader/preloader'
import { ConsentManager } from './consent/consent.manager'
import { useConsentScript } from './consent/consent.script'
import { ContentProvider } from './content'
import { SettingsContext as Settings } from './context'
import Fonts from './fonts/fonts'
import { useSettings } from './hooks'
import { ShortcutManager as Shortcuts } from './shortcuts/component'
import { ThemeProvider as Theme } from './theme/provider'
import { useToast } from './toast'

import type { SettingsContextType } from './types'

import '../design/style/global.css'

interface SettingsProviderProps extends PropsWithChildren {
  fallback?: React.ReactNode
}

export function SettingsProvider({
  children,
  fallback = null,
}: SettingsProviderProps) {
  const [isBrowserReady, setIsBrowserReady] = useState(false)
  const settings = useSettings()
  const toast = useToast()

  useEffect(() => {
    setIsBrowserReady(true)
  }, [])

  if (!isBrowserReady) {
    return fallback || null
  }

  const value = useMemo<SettingsContextType>(
    () => ({
      settings: {
        ...settings.settings,
        UI: {
          ...settings.settings.UI,
          Visual: {
            ...settings.settings.UI.Visual,
          },
        },
        UX: {
          ...settings.settings.UX,
        },
      },
      isLoaded: settings.isLoaded,
      toast: toast.state,
      loading: settings.loading,
      actions: {
        toggle: settings.actions.toggle,
        reset: settings.actions.reset,
        setSettings: settings.actions.setSettings,
        toast: toast.actions,
      },
    }),
    [settings, toast],
  )

  if (!settings.isLoaded) {
    return fallback
  }

  return (
    <Fonts>
      <Settings.Provider value={value}>
        <Theme>
          <ContentProvider
            fallback={<Preloader />}
            loading={!settings.loading.isFullyLoaded}
            onLoad={() => settings.loading.setContentLoaded(true)}
          >
            {children}
            <Shortcuts />
            <ConsentManager />
          </ContentProvider>
        </Theme>
      </Settings.Provider>
    </Fonts>
  )
}
