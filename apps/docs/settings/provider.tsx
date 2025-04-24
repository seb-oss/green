'use client'

import React, { useMemo } from 'react'

import type { PropsWithChildren } from 'react'

import { ContentProvider } from './content'
import { SettingsContext as Settings } from './context'
import Fonts from './fonts/fonts'
import { useSettings } from './hooks'
import { ShortcutManager as Shortcuts } from './shortcuts/component'
import { ThemeProvider as Theme } from './theme/provider'
import { useToast } from './toast'

import type { SettingsContextType } from './types'

interface SettingsProviderProps extends PropsWithChildren {
  fallback?: React.ReactNode
}

export function SettingsProvider({
  children,
  fallback = null,
}: SettingsProviderProps) {
  const settings = useSettings()
  const toast = useToast()

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
            fallback={<span>preloader</span>}
            loading={!settings.loading.isFullyLoaded}
            onLoad={() => settings.loading.setContentLoaded(true)}
          >
            {children}
            <Shortcuts />
          </ContentProvider>
        </Theme>
      </Settings.Provider>
    </Fonts>
  )
}
