'use client'

import { createContext } from 'react'

import { DEFAULT_SETTINGS } from './defaults'
import { DEFAULT_TOAST_STATE } from './toast/config'

import type { SettingsContextType } from './types'

export const SettingsContext = createContext<SettingsContextType>({
  settings: DEFAULT_SETTINGS,
  isLoaded: false,
  toast: DEFAULT_TOAST_STATE,
  loading: {
    isFullyLoaded: false,
    settingsLoaded: false,
    contentLoaded: false,
  },
  actions: {
    toggle: () => {},
    reset: async () => {},
    setSettings: () => {},
    toast: {
      add: () => {},
      remove: () => {},
      clear: () => {},
    },
  },
})
