import { create } from '@storybook/theming'

const common = {
  appBorderRadius: 3,
  brandImage:
    'https://user-images.githubusercontent.com/11420341/121186039-f6eeda00-c866-11eb-9d80-21d01d065f0a.png',
  brandTitle: 'Green',
  brandUrl: 'https://github.com/sebgroup/green',
  fontBase: '"SEBSansSerif", sans-serif, "Helvetica Neue", Helvetica, Arial',
  fontCode: 'monospace',
  gridCellSize: 10,
  inputBorderRadius: 7,
  colorPrimary: '#60CD18',
  colorSecondary: '#41B0EE',
}

export const light = create({
  ...common,
  base: 'light',
  appBg: '#eee',
  appBorderColor: '#CECECE',
  appContentBg: '#ffffff',
  barBg: '#E9E9E9',
  barSelectedColor: '#333',
  barTextColor: '#333',
  colorSecondary: '#bbb',
  inputBg: '#ffffff',
  inputBorder: 'solid black 10px',
  inputTextColor: '#333',
  textColor: '#333',
  textMutedColor: '#333',
})

export const dark = create({
  ...common,
  base: 'dark',
  appBg: '#222222',
  appBorderColor: '#121212',
  appContentBg: '#272727',
  barBg: '#121212',
  barSelectedColor: '#fff',
  // barTextColor: '#ffffff',
  colorSecondary: '#333',
  // inputBg: '#ffffff',
  // inputBorder: 'solid black 10px',
  // inputTextColor: 'rgb(41, 41, 41)',
  textColor: '#dedede',
  // textMutedColor: 'rgb(52, 52, 52)',*/
})
