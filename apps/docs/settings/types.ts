import type { ToastItem, ToastState } from './toast/types'

export type SettingsTogglePath =
  | `UI.Theme.${keyof Theme}`
  | `UI.Panel.${keyof Panel}`
  | `UI.Visual.${keyof Visual}`
  | `UX.Audio.${keyof AudioConfig}`
  | `UX.Post.Navigate.Previous`
  | `UX.Post.Navigate.Next`
  | `UX.Menu`
  | `UX.Global.${keyof UXGlobals}`
  | `Device.${keyof DeviceState}`

export interface Theme {
  ColorScheme: 'dark' | 'light' | 'auto'
}

export interface Panel {
  All: boolean
  Settings: boolean
  Sidebar: boolean
  Command: boolean
  Shortcuts: boolean
}

export interface TransitionState {
  Active: boolean
  Progress: number
  Direction: 'in' | 'out'
  Previous: null | string
}

export interface Visual {
  Loading: boolean
  Scrollbar: boolean
  Transition: TransitionState
}

export interface UIState {
  Theme: Theme
  Panel: Panel
  Visual: Visual
}

export interface AudioRefs {
  Route: { current: null | HTMLAudioElement }
}

export interface AudioConfig {
  Enabled: boolean
  Refs: AudioRefs
}

export interface PostConfig {
  Navigate: {
    Previous: boolean
    Next: boolean
  }
}

export interface UXGlobals {
  Consent: boolean
}

export interface UXState {
  Audio: AudioConfig
  Menu: boolean
  Post: PostConfig
  Global: UXGlobals
}

export interface DeviceState {
  Mobile: boolean
  Reduced: boolean
}

export interface SettingsState {
  UI: UIState
  UX: UXState
  Device: DeviceState
}

export interface SettingsActions {
  toggle: (path: SettingsTogglePath) => void
  reset: () => Promise<void>
  setSettings: (updater: (prev: SettingsState) => SettingsState) => void
  toast: {
    add: (toast: Omit<ToastItem, 'id'>) => void // Update this
    remove: (id: string) => void
    clear: () => void
  }
}

export interface LoadingState {
  isFullyLoaded: boolean
  settingsLoaded: boolean
  contentLoaded: boolean
}

export interface SettingsContextType {
  settings: SettingsState
  isLoaded: boolean
  toast: ToastState
  loading: LoadingState
  actions: SettingsActions
}
