'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import Main from '&/main'
import Consent from '$/consent/consent'
import useCookieConsent from '$/consent/useCookieConsent'
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
  useCookieConsent()

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      document.documentElement.setAttribute('gds-theme', storedTheme)
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
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
