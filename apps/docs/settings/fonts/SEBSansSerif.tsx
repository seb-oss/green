'use client'

import localFont from 'next/font/local'

const SEBSansSerifGDS = localFont({
  src: [
    {
      path: '../../public/fonts/SEBSansSerifGDS/SEBSansSerifGDS-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SEBSansSerifGDS/SEBSansSerifGDS-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SEBSansSerifGDS/SEBSansSerifGDS-Book.woff2',
      weight: '450',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SEBSansSerifGDS/SEBSansSerifGDS-BookItalic.woff2',
      weight: '450',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SEBSansSerifGDS/SEBSansSerifGDS-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SEBSansSerifGDS/SEBSansSerifGDS-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SEBSansSerifGDS/SEBSansSerifGDS-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SEBSansSerifGDS/SEBSansSerifGDS-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SEBSansSerifGDS/SEBSansSerifGDS-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SEBSansSerifGDS/SEBSansSerifGDS-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  display: 'block',
  variable: '--gds-font-family',
  adjustFontFallback: false,
  fallback: ['sans-serif'],
  declarations: [{ prop: 'font-family', value: 'SEB SansSerif GDS' }],
})
export const fontVariable = SEBSansSerifGDS.variable
export default SEBSansSerifGDS
