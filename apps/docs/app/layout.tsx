'use client'

import Alert from '@/alert/aler'
import Menu from '@/sidebar'
import Consent from '@/consent/consent'
import Footer from '@/footer/footer'
import Header from '@/header/header'
import Page from '&/article/article'
import Main from '&/main/main'
import Fonts from '$/fonts/fonts'
import { ThemeProvider } from '$/theme/provider'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const GdsTheme = dynamic(() => import('@sebgroup/green-react/src/core/theme'), {
  ssr: false
})

const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false
})

const GdsContainer = dynamic(() => import('@sebgroup/green-react/src/core/container'), {
  ssr: false
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
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
      document.cookie.split('; ').find(row => row.startsWith('GDS Cookie Consent'))
    ) {
      const script = document.createElement('script')
      script.src = 'https://content.seb.se/dsc/da/launch/public/30e54a9d6c99/f9d07ef22744/launch-89d260357525.min.js'
      script.type = 'application/javascript'
      document.head.appendChild(script)

      const timer = setTimeout(() => {
        callCC()
      }, 1000)

      return () => {
        clearTimeout(timer)
      }
    }
    Fonts()

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      setColorScheme(event.matches ? 'dark' : 'light')
    })
  }, [colorScheme, setColorScheme])

  return (
    <html lang="en" suppressHydrationWarning color-scheme={colorScheme}>
      <body>
        <ThemeProvider attribute="theme" defaultTheme="system" enableColorScheme={false} enableSystem>
          <GdsTheme colorScheme={colorScheme}>
            <Header />
            <GdsFlex padding="0 m; >m{0 l}" gap="l">
              <Menu isNavOpen={true} />
              <GdsContainer width="100%">
                <GdsContainer max-width="1088px" margin="auto">
                  {children}
                </GdsContainer>
              </GdsContainer>
            </GdsFlex>

            <Main>
              <Consent />
              <Footer />
            </Main>
          </GdsTheme>
        </ThemeProvider>
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
