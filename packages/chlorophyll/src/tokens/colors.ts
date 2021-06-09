interface Swatch {
  s100: string
  s300: string
  s500: string
  s700: string
  s900: string
}

interface FullSwatch extends Swatch {
  s200: string
  s400: string
  s600: string
  s800: string
}

type Color = 'green' | 'yellow' | 'purple' | 'red' | 'blue'
interface Colors extends Record<Color, Swatch> {
  white: string
  black: string
  grey: FullSwatch
}

export const colors: Colors = {
  white: '#fff',
  black: '#000',
  grey: {
    s100: '#fbfbfb',
    s200: '#e9e9e9',
    s300: '#dedede',
    s400: '#cecece',
    s500: '#adadad',
    s600: '#868686',
    s700: '#494949',
    s800: '#333',
    s900: '#1a1a1a',
  },
  green: {
    s100: '#8fd668',
    s300: '#60cd18',
    s500: '#60cd18',
    s700: '#458400',
    s900: '#379d00',
  },
  blue: {
    s100: '#',
    s300: '#',
    s500: '#',
    s700: '#',
    s900: '#',
  },
  purple: {
    s100: '#',
    s300: '#',
    s500: '#',
    s700: '#',
    s900: '#',
  },
  red: {
    s100: '#',
    s300: '#',
    s500: '#',
    s700: '#',
    s900: '#',
  },
  yellow: {
    s100: '#',
    s300: '#',
    s500: '#',
    s700: '#',
    s900: '#',
  },
}
