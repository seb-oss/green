import localFont from 'next/font/local'

const SEBSansSerifCentered = localFont({
  src: [
    {
      path: '../../public/fonts/SEBSansSerifCentered/SEBSansSerifCentered.ttf',
      style: 'normal',
    },
  ],
  display: 'block',
  variable: '--gds-font-family-centered',
})
export const fontVariable = SEBSansSerifCentered.variable
export default SEBSansSerifCentered
