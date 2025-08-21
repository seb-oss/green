/**
 *
 * Font source:
 * https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting/
 */
import localFont from 'next/font/local'

const Code = localFont({
  src: [
    {
      path: '../../public/fonts/code/code.woff2',
      style: 'normal',
      weight: '400',
    },
  ],
  variable: '--font-code',
  adjustFontFallback: false,
  display: 'block',
})
export const fontVariable = Code.variable
export default Code
