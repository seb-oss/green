import { create } from '@storybook/theming/create'

export default create({
  base: 'light',
  // Typography
  fontBase: '"SebSansSerif", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'SEB Green',
  brandImage:
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"%3E%3Cpath d="M20.7782 7.01563C17.0994 7.01563 13.8919 9.10906 12.2412 12.1898C11.952 10.2402 11.2182 8.38688 10.0988 6.77872C8.65043 4.68288 6.61292 3.08354 4.25483 2.19151L3.74698 2L3.46106 2.46887C2.59259 3.89465 2.09397 5.522 2.01204 7.19808C1.9301 8.87416 2.26752 10.5439 2.99262 12.0506C3.71772 13.5574 4.8067 14.8514 6.15727 15.8115C7.50784 16.7716 9.07568 17.3659 10.7135 17.5389C10.4236 18.9909 10.004 20.9646 10.004 20.9646C9.98976 21.0207 9.98838 21.0794 9.9998 21.1361C10.0113 21.1929 10.0354 21.2462 10.0701 21.292C10.1049 21.3378 10.1495 21.3749 10.2005 21.4004C10.2515 21.426 10.3076 21.4393 10.3644 21.4393H11.5454C11.6333 21.4394 11.7183 21.4078 11.7855 21.3501C11.8526 21.2923 11.8976 21.2122 11.9123 21.1239C11.9123 21.1239 12.0775 18.8341 12.1755 17.5851C17.3245 17.3424 21.4408 12.9971 21.4408 7.69088V7.01481L20.7782 7.01563ZM3.3266 7.69088C3.32579 6.28882 3.66378 4.90814 4.31072 3.67078C8.36867 5.45134 11.0578 9.57797 11.0578 14.114C11.0578 14.8139 10.9954 15.5123 10.8707 16.2008C8.8024 15.9863 6.88583 14.9972 5.49212 13.4251C4.09841 11.8529 3.32676 9.80962 3.3266 7.69088ZM12.4112 16.2181C12.7458 12.0601 16.0075 8.73511 20.0865 8.39584C19.7544 12.5522 16.4911 15.8772 12.4112 16.2181Z" fill="black"/%3E%3C/svg%3E',
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
