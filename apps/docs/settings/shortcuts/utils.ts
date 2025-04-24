// settings/shortcuts/utils.ts
import type {
  SettingsContextType,
  SettingsState,
  SettingsTogglePath,
} from '../types'

interface CreateToggleToastOptions {
  title: string
  icon?: string
  autoClose?: boolean
  showState?: boolean
}

function getCurrentValue(
  settings: SettingsState,
  path: SettingsTogglePath,
): boolean {
  const [section, category, key] = path.split('.') as [
    keyof SettingsState,
    string,
    string,
  ]

  switch (section) {
    case 'UI': {
      return settings.UI[category as keyof typeof settings.UI][
        key as keyof (typeof settings.UI)[keyof typeof settings.UI]
      ] as boolean
    }
    case 'UX': {
      return settings.UX[category as keyof typeof settings.UX][
        key as keyof (typeof settings.UX)[keyof typeof settings.UX]
      ] as boolean
    }
    case 'Device': {
      return settings.Device[key as keyof typeof settings.Device]
    }
    default:
      return false
  }
}

export function createToggleAction(
  path: SettingsTogglePath,
  options: CreateToggleToastOptions,
) {
  return (ctx: SettingsContextType) => {
    const currentState = getCurrentValue(ctx.settings, path)
    const newState = !currentState

    ctx.actions.toggle(path)

    ctx.actions.toast.add({
      title: options.title,
      description: `${newState ? 'ON' : 'OFF'}`,
      icon: options.icon,
      action: {
        label: 'Undo',
        onClick: () => ctx.actions.toggle(path),
      },
      autoClose: options.autoClose ?? true,
    })
  }
}
