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
  transparent: string
  white: string
  black: string
  grey: FullSwatch
}

export const colors: Colors = {
  white: '#fff',
  black: '#000',
  transparent: 'transparent',
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
    s900: '#308800',
  },
  blue: {
    s100: '#7ecff9',
    s300: '#00adff',
    s500: '#41b0ee',
    s700: '#0092e1',
    s900: '#007ac7',
  },
  purple: {
    s100: '#b39ddb',
    s300: '#b39ddb',
    s500: '#673ab6',
    s700: '#4f2c99',
    s900: '#3f2587',
  },
  red: {
    s100: '#f7706d',
    s300: '#f7706d',
    s500: '#f03529',
    s700: '#d81a1a',
    s900: '#bb000c',
  },
  yellow: {
    s100: '#ffe182',
    s300: '#ffe182',
    s500: '#ffc500',
    s700: '#ffb400',
    s900: '#f8a000',
  },
}
