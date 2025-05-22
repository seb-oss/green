export interface IconSuggestion {
  name: string
  useInstead: string
}

// Add your icon mappings here
const ICON_SUGGESTIONS: Record<string, string> = {
  archive: 'archive',
  'arrow-down': 'arrow-down',
  'arrow-left': 'arrow-left',
  'arrow-right': 'arrow-right',
  'arrow-up': 'arrow-up',
  'arrow-to-down': 'arrow-to-down',
  at: 'at',
}

export const iconSuggestions: Record<string, IconSuggestion> =
  Object.fromEntries(
    Object.entries(ICON_SUGGESTIONS).map(([name, replacement]) => [
      `gds-icon-${name}`,
      {
        name,
        useInstead: `gds-icon-${replacement}`,
      } as IconSuggestion,
    ]),
  )
