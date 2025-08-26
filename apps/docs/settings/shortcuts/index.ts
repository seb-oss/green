// settings/shortcuts/index.ts
export type {
  ShortcutScope,
  ShortcutDefinition,
  ShortcutMap,
  ShortcutManagerInterface,
} from "./types"

export { ShortcutManager } from "./manager"
export { useShortcuts, useShortcutInfo } from "./hooks"
export { DefaultShortcuts } from "./defaults"
export { KeySymbols } from "./symbols"
