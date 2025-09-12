// settings/shortcuts/types.ts
import type { SettingsContextType, SettingsTogglePath } from "../types"

export type ShortcutScope = "global" | "page" | "post"

export interface ShortcutDefinition {
  label: string
  keys: string[]
  scope?: ShortcutScope[]
  hint?: boolean
  description?: string
  action: (context: SettingsContextType) => void
  allowInInput?: boolean // Add this
}

export type ShortcutMap = Partial<
  Record<SettingsTogglePath, ShortcutDefinition>
>

export interface ShortcutManagerInterface {
  register: (path: SettingsTogglePath, definition: ShortcutDefinition) => void
  unregister: (path: SettingsTogglePath) => void
  getByScope: (
    scope: ShortcutScope
  ) => Map<SettingsTogglePath, ShortcutDefinition>
  getWithHints: () => Map<SettingsTogglePath, ShortcutDefinition>
  handleKeyEvent: (event: KeyboardEvent) => void
  formatKeys: (keys: string[]) => string
  updateContext: (context: SettingsContextType) => void
}
