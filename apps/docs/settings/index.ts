// settings/index.ts
'use client'

export type {
  SettingsState,
  SettingsContextType,
  Theme,
  Panel,
  Visual,
  AudioConfig,
  LoadingState,
} from './types'

export { SettingsContext } from './context'
export { DEFAULT_SETTINGS, EXCLUSIVE_PANELS } from './defaults'
export { SettingsProvider } from './provider'
export {
  useSettings,
  useSettingsContext,
  useSettingsValue,
  useLoadingStates,
  updateNestedBoolean,
  toggleSetting,
} from './hooks'
