import { create } from '@storybook/theming/create'

export default create({
  base: 'light',
  // Typography
  fontBase: '"SebSansSerif", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'SEB Green',
  brandImage:
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"%3E%3Cpath d="M 20.8 7 C 17.1 7 13.9 9.1 12.2 12.2 C 12 10.2 11.2 8.4 10.1 6.8 C 8.7 4.7 6.6 3.1 4.3 2.2 L 3.7 2 L 3.5 2.5 C 2.6 3.9 2.1 5.5 2 7.2 C 1.9 8.9 2.3 10.5 3 12.1 C 3.7 13.6 4.8 14.9 6.2 15.8 C 7.5 16.8 9.1 17.4 10.7 17.5 C 10.4 19 10 21 10 21 C 10 21 10 21.1 10 21.1 C 10 21.2 10 21.2 10.1 21.3 C 10.1 21.3 10.1 21.4 10.2 21.4 C 10.3 21.4 10.3 21.4 10.4 21.4 H 11.5 C 11.6 21.4 11.7 21.4 11.8 21.4 C 11.9 21.3 11.9 21.2 11.9 21.1 C 11.9 21.1 12.1 18.8 12.2 17.6 C 17.3 17.3 21.4 13 21.4 7.7 V 7 L 20.8 7 Z M 3.3 7.7 C 3.3 6.3 3.7 4.9 4.3 3.7 C 8.4 5.5 11.1 9.6 11.1 14.1 C 11.1 14.8 11 15.5 10.9 16.2 C 8.8 16 6.9 15 5.5 13.4 C 4.1 11.9 3.3 9.8 3.3 7.7 Z M 12.4 16.2 C 12.7 12.1 16 8.7 20.1 8.4 C 19.8 12.6 16.5 15.9 12.4 16.2 Z" fill="black"/%3E%3C/svg%3E',
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
