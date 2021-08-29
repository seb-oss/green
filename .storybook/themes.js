import { create } from '@storybook/theming'

const common = {
  appBorderRadius: 3,
  brandImage: 'https://user-images.githubusercontent.com/11420341/121186039-f6eeda00-c866-11eb-9d80-21d01d065f0a.png',
  brandTitle: 'Green',
  brandUrl: 'https://github.com/sebgroup/green',
  fontCode: 'monospace',
  gridCellSize: 10,
  inputBorderRadius: 7,
}

export const light = create({
  ...common,
  base: 'light',
  appBg: 'rgb(238, 238, 238)',
  appBorderColor: 'rgb(70, 70, 70)',
  appContentBg: '#ffffff',
  barBg: 'rgb(26, 26, 26)',
  barSelectedColor: '#8fd668',
  barTextColor: '#ffffff',
  colorSecondary: 'rgb(75, 136, 37)',
  inputBg: '#ffffff',
  inputBorder: 'solid black 10px',
  inputTextColor: 'rgb(41, 41, 41)',
  textColor: 'rgb(41, 41, 41)',
  textMutedColor: 'rgb(52, 52, 52)',
})


export const dark = create({
  ...common,
  base: 'dark',
  appBg: '#222222',
  appBorderColor: '#121212',
  appContentBg: '#272727',
  barBg: '#121212',
  barSelectedColor: '#8fd668',
  // barTextColor: '#ffffff',
  colorSecondary: 'rgb(48, 134, 2)',
  // inputBg: '#ffffff',
  // inputBorder: 'solid black 10px',
  // inputTextColor: 'rgb(41, 41, 41)',
  textColor: '#dedede',
  // textMutedColor: 'rgb(52, 52, 52)',*/
})
