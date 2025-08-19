// settings/theme/types.ts
export type ColorScheme = 'dark' | 'light' | 'auto'

export interface Theme {
  Pattern: boolean
  Noise: boolean
  ColorScheme: ColorScheme
}
