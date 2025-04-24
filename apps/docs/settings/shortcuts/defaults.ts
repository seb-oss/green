// settings/shortcuts/defaults.ts
'use client'

import { getNextColorScheme } from '../theme/hooks'

import type { ShortcutMap } from './types'

export const DefaultShortcuts: ShortcutMap = {
  'UI.Theme.ColorScheme': {
    label: 'Toggle Theme',
    keys: ['\\'],
    scope: ['global'],
    action: (ctx) => {
      const currentScheme = ctx.settings.UI.Theme.ColorScheme
      const nextScheme = getNextColorScheme(currentScheme)
      ctx.actions.toggle('UI.Theme.ColorScheme')
      ctx.actions.toast.add({
        title: 'Theme',
        description: `${nextScheme}`,
        icon: nextScheme,
        autoClose: true,
      })
    },
  },

  'UI.Panel.Settings': {
    label: 'Settings Panel',
    description: 'Site preferences',
    keys: ['meta', ','],
    scope: ['global'],
    hint: true,
    action: (ctx) => ctx.actions.toggle('UI.Panel.Settings'),
  },
  'UI.Panel.Command': {
    label: 'Command Panel',
    description: 'Site preferences',
    keys: ['meta', 'k'],
    scope: ['global'],
    hint: true,
    allowInInput: true,
    action: (ctx) => ctx.actions.toggle('UI.Panel.Command'),
  },
  'UI.Panel.Shortcuts': {
    label: 'Command Panel',
    description: 'Site preferences',
    keys: ['meta', "'"],
    scope: ['global'],
    hint: true,
    action: (ctx) => ctx.actions.toggle('UI.Panel.Shortcuts'),
  },
  'UI.Panel.All': {
    label: 'Close All Panels',
    keys: ['escape'],
    scope: ['global'],
    action: (ctx) => {
      ctx.actions.toggle('UI.Panel.All')
      ctx.actions.toast.add({
        title: 'Panels',
        description: 'All panels closed',
        icon: 'close',
        autoClose: true,
      })
    },
  },
  'UX.Post.Navigate.Previous': {
    label: 'Previous Post',
    keys: ['shift', 'ArrowLeft'],
    scope: ['post'],
    action: () => {
      window.dispatchEvent(
        new CustomEvent('navigate-post', { detail: 'previous' }),
      )
    },
  },
  'UX.Post.Navigate.Next': {
    label: 'Next Post',
    keys: ['shift', 'ArrowRight'],
    scope: ['post'],
    action: () => {
      window.dispatchEvent(new CustomEvent('navigate-post', { detail: 'next' }))
    },
  },
} as const
