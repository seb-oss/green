import { colors } from './colors'

export type ThemeName = 'light' | 'dark'
export interface Theme {
  background: string
  onBackground: string
  surface: string
  onSurface: string
  primary: string
  onPrimary: string
  secondary: string
  onSecondary: string
}
type Themes = Record<ThemeName, Theme>

export const themes: Themes = {
  light: {
    background: colors.white,
    onBackground: colors.grey.s900,
    surface: colors.grey.s100,
    onSurface: colors.grey.s900,
    primary: colors.blue.s500,
    onPrimary: colors.white,
    secondary: colors.transparent,
    onSecondary: colors.black,
  },
  dark: {
    background: colors.grey.s900,
    onBackground: colors.grey.s100,
    surface: colors.grey.s800,
    onSurface: colors.grey.s100,
    primary: colors.blue.s500,
    onPrimary: colors.white,
    secondary: colors.transparent,
    onSecondary: colors.black,
  },
}
