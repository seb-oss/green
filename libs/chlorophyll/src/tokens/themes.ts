import { colors } from './colors'

export type ThemeName = 'light' | 'dark'
interface ColorSet {
  color: string
  opposite: string
  color2?: string
  opposite2?: string
}
export interface Theme {
  background: ColorSet
  surface: ColorSet
  primary: ColorSet
  secondary: ColorSet
  ghost: ColorSet
  danger: ColorSet
}
type Themes = Record<ThemeName, Theme>

export const themes: Themes = {
  light: {
    background: {
      color: colors.white,
      opposite: colors.grey.s900,
    },
    surface: {
      color: colors.grey.s100,
      opposite: colors.grey.s900,
    },
    primary: {
      color: colors.blue.s700,
      opposite: colors.white,
      color2: colors.blue.s500,
    },
    secondary: {
      color: colors.white,
      opposite: colors.blue.s700,
      color2: colors.blue.s500,
      opposite2: colors.white,
    },
    ghost: {
      color: colors.white,
      opposite: colors.grey.s800,
    },
    danger: {
      color: colors.white,
      opposite: colors.red.s700,
      color2: colors.red.s500,
      opposite2: colors.white,
    },
  },
  dark: {
    background: {
      color: colors.grey.s900,
      opposite: colors.grey.s100,
    },
    surface: {
      color: colors.grey.s800,
      opposite: colors.white,
    },
    primary: {
      color: colors.blue.s700,
      opposite: colors.white,
      color2: colors.blue.s500,
    },
    secondary: {
      color: colors.white,
      opposite: colors.blue.s700,
      color2: colors.blue.s500,
      opposite2: colors.white,
    },
    ghost: {
      color: colors.white,
      opposite: colors.grey.s800,
    },
    danger: {
      color: colors.white,
      opposite: colors.red.s700,
      color2: colors.red.s500,
      opposite2: colors.white,
    },
  },
}
