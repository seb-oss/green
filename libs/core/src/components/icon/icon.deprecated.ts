export interface DeprecationInfo {
  name: string
  useInstead?: string
  hide: true
}

const ICON_REPLACEMENTS: Record<string, string> = {
  seb: 'gds-icon-brand-seb',
}

const DEPRECATED_NAMES: string[] = [
  'square-plus',
  'square-minus',
  'square-x',
  'square-check',
  'todos',
  'square-info',
  'bubble-text',
  'bubble-dots',
  'bubble-wide-annotation',
  'bubble',
  'bubble-question',
  'bubble-quotes',
  'unlocked',
  'folder-upload',
  'arrows-repeat',
  'suitcase-work',
  'pencel-line',
  'invite',
  'settings-slider-ver',
  'settings-slider-three',
  'page-text',
  'phone-dynamic-island',
  'flag',
  'chart-one',
  'chart-presentation',
  'vertical-alignment-right',
  'folder-paper',
  'solar-panel',
  'light-bulb',
  'heart-beat',
  'circles-three',
  'charging-station',
  'square-grid-circle',
  'focus-square',
  'maintenance',
  'cain-link',
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
