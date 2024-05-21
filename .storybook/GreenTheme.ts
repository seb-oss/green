import { create } from '@storybook/theming/create'

export default create({
  base: 'light',
  // Typography
  fontBase: '"SebSansSerif", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'SEB Green',
  brandUrl: 'https://seb.io',
  brandImage:
    'https://github.com/sebgroup/green/assets/428824/fa81da13-8f4a-46ad-a484-75a1472c039b',
  brandTarget: '_self',

  //
  colorPrimary: '#353531',
  colorSecondary: '#9d9d95',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#cececa',
  appBorderRadius: 4,

  // Text colors
  textColor: '#353531',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#353531',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#cececa',
  inputTextColor: '#353531',
  inputBorderRadius: 1,
})
