// settings/toast/config.ts
import type { ToastState } from "./types"

export const TOAST_CONFIG = {
  defaultDuration: 3000,
  maxToasts: 5,
  autoClose: true,
} as const

export const DEFAULT_TOAST_STATE: ToastState = {
  items: [],
}
