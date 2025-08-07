// settings/theme/types.ts
export type ColorScheme = "dark" | "light" | "system"

export interface Theme {
  Pattern: boolean
  Noise: boolean
  ColorScheme: ColorScheme
}
