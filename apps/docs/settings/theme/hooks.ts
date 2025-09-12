'use client'

import type { ColorScheme } from './types'

export function getNextColorScheme(current: ColorScheme): ColorScheme {
  switch (current) {
    case 'dark':
      return 'light'
    case 'light':
      return 'auto'
    case 'auto':
      return 'dark'
    default:
      return 'auto'
  }
}
