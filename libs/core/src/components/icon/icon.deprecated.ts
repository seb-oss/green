// icon.deprecated.ts
interface DeprecationInfo {
  name: string
  useInstead?: string
  hide?: boolean
}

export const deprecatedIcons: Record<string, DeprecationInfo> = {
  'gds-icon-seb': {
    name: 'seb',
    useInstead: 'gds-icon-brand-seb',
    hide: true,
  },
}
