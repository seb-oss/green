import { colors } from './colors'

export type ThemeName = 'light' | 'dark'
export interface Theme {
  background: string
}
type Themes = Record<ThemeName, Theme>

export const themes: Themes = {
  light: {
    background: colors.white,
  },
  dark: {
    background: colors.black,
  },
}
