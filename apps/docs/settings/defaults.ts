'use client'

import type { ColorScheme } from './theme/types'
import type { AudioConfig, Panel, SettingsState, Theme, Visual } from './types'

export const EXCLUSIVE_PANELS = [
  'All',
  'Settings',
  'Shortcuts',
  'Command',
] as const

const DEFAULT_THEME: Theme = {
  ColorScheme: 'dark' satisfies ColorScheme,
}

const DEFAULT_PANEL: Panel = {
  All: false,
  Settings: false,
  Shortcuts: false,
  Command: false,
}

const DEFAULT_VISUAL: Visual = {
  Loading: false,
  Scrollbar: true,
  Transition: {
    Active: false,
    Progress: 0,
    Direction: 'in',
    Previous: null,
  },
}

const DEFAULT_AUDIO: AudioConfig = {
  Enabled: true,
  Refs: {
    Route: { current: null },
  },
}

export const DEFAULT_SETTINGS: SettingsState = {
  UI: {
    Theme: DEFAULT_THEME,
    Panel: DEFAULT_PANEL,
    Visual: DEFAULT_VISUAL,
  },
  UX: {
    Audio: DEFAULT_AUDIO,
    Menu: false,
    Global: {
      Consent: false,
    },
    Post: {
      Navigate: {
        Previous: true,
        Next: true,
      },
    },
  },
  Device: {
    Mobile: false,
    Reduced: false,
  },
}
