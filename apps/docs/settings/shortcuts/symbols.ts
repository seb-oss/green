export const KeySymbols = {
  shift: '⇧',
  ctrl: '⌃',
  alt: '⌥',
  meta: '⌘',
  escape: '⎋',
  backspace: '⌫',
  delete: '⌦',
  enter: '↵',
  tab: '⇥',
  space: '␣',
  arrowup: '↑',
  arrowdown: '↓',
  arrowleft: '←',
  arrowright: '→',
  capslock: '⇪',
} as const

export type KeySymbol = keyof typeof KeySymbols
