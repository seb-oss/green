'use client'

import { useEffect, useState } from 'react'
// import { useTheme } from 'next-themes'
import Script from 'next/script'
import Consent from '@/consent/consent'
import Main from '&/main/main'
import Fonts from '$/fonts/fonts'
import { GdsFlex } from '$/import/components'
import { Provider } from '$/provider/provider'
import Favicon from 'core/favicon'
import Footer from 'core/footer'
import Header from 'core/header'

import '#/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const { theme = 'light', setTheme } = useTheme()
  const [colorScheme, setColorScheme] = useState<'light' | 'dark' | 'auto'>(
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark',
  )

  useEffect(() => {
    const callCC = () => {
      let cc
      try {
        cc = (window as any).initCookieConsent()
      } catch (error) {
        console.error(error)
      }
      if (cc) {
        cc.run({})
      }
    }

    if (
      location.hostname === 'seb.io' &&
      document.cookie
        .split('; ')
        .find((row) => row.startsWith('GDS Cookie Consent'))
    ) {
      const script = document.createElement('script')
      script.src =
        'https://content.seb.se/dsc/da/launch/public/30e54a9d6c99/f9d07ef22744/launch-89d260357525.min.js'
      script.type = 'application/javascript'
      document.head.appendChild(script)

      const timer = setTimeout(() => {
        callCC()
      }, 1000)

      return () => {
        clearTimeout(timer)
      }
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        setColorScheme(event.matches ? 'dark' : 'light')
      })
  }, [colorScheme, setColorScheme])

  return (
    <html lang="en" suppressHydrationWarning gds-theme={colorScheme}>
      <body>
        <Provider
          theme={colorScheme}
          setTheme={(theme: string) =>
            setColorScheme(theme as 'light' | 'dark' | 'auto')
          }
        >
          <Favicon />
          <Fonts>
            <GdsFlex flex-direction="column">
              <Header />
              <Main>
                {children}
                <Consent />
              </Main>
              <Footer />
            </GdsFlex>
          </Fonts>
        </Provider>
        <Script id="data-layer">
          {`window["dataLayer"] = {
            "pageName":"seb.io",
            "pagetype":"StandardPage",
            "language":"en",
            "environment":"prod",
            "project":"green",
            "website":"seb.io",
          };`}
        </Script>
      </body>
    </html>
  )
}
