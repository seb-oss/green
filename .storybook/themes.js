import { create } from '@storybook/theming'

export const light = create({
  base: 'light',
  appBg: '#fab',
  appBorderColor: 'green',
  appBorderRadius: 5,
  appContentBg: 'blue',
  barBg: 'grey',
  barSelectedColor: 'darkgrey',
  barTextColor: 'white',
  brandImage: 'https://seb.se/Static/Images/SebLogo.svg',
  brandTitle: 'Green',
  brandUrl: 'https://seb.se',
  colorPrimary: 'blue',
  colorSecondary: 'cyan',
  fontBase: 'SEBSansSerif',
  fontCode: 'monospace',
  gridCellSize: 10,
  inputBg: 'yellow',
  inputBorder: 'solid black 10px',
  inputBorderRadius: 7,
  inputTextColor: 'magenta',
  textColor: '#ff0000',
  textInverseColor: '#00ffff',
  textMutedColor: '#999999',
})


export const dark = create({
  base: 'dark',
})
