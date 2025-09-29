export interface DeprecationInfo {
  name: string
  useInstead?: string
  hide: true
}

const ICON_REPLACEMENTS: Record<string, string> = {
  seb: 'gds-icon-brand-seb',
}

const DEPRECATED_NAMES: string[] = [
  'arrows-repeat',
  'bubble',
  'bubble-dots',
  'bubble-question',
  'bubble-quotes',
  'bubble-text',
  'bubble-wide-annotation',
  'cain-link',
  'charging-station',
  'chart-one',
  'chart-presentation',
  'circles-three',
  'flag',
  'focus-square',
  'folder-paper',
  'folder-upload',
  'heart-beat',
  'invite',
  'light-bulb',
  'maintenance',
  'other',
  'page-text',
  'pencel-line',
  'phone-dynamic-island',
  'settings-slider-three',
  'settings-slider-ver',
  'solar-panel',
  'square-check',
  'square-grid-circle',
  'square-info',
  'square-minus',
  'square-plus',
  'square-x',
  'suitcase-work',
  'todos',
  'unlocked',
  'vertical-alignment-right',
]

export const deprecatedIcons: Record<string, DeprecationInfo> =
  Object.fromEntries([
    ...Object.entries(ICON_REPLACEMENTS).map(([name, replacement]) => [
      `gds-icon-${name}`,
      {
        name,
        useInstead: replacement,
        hide: true,
      } as DeprecationInfo,
    ]),
    ...DEPRECATED_NAMES.map((name) => [
      `gds-icon-${name}`,
      {
        name,
        hide: true,
      } as DeprecationInfo,
    ]),
  ])
