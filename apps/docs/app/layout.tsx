'use client'

import Alert from '@/alert/aler'
import Consent from '@/consent/consent'
// import Footer from '@/footer/footer'
import Footer from '@/[new]/footer'
import Header from '@/header/header'
import Article from '&/article/article'
import Main from '&/main/main'
import Fonts from '$/fonts/fonts'
import { ThemeProvider } from '$/theme/provider'
import Script from 'next/script'
import { useEffect } from 'react'
// import useComponent from '$/components/useComponent'
// import { Button } from '@/[gds]/button'
import { Theme } from '@/[gds]/theme'
import { Button } from '@/[gds]/button'
import { Grid } from '@/[gds]/grid'
// import { Card } from '@/[gds]/card'
// import { Container } from '@/[gds]/container'
// import { Divider } from '@/[gds]/divider'
// import { Flex } from '@/[gds]/flex'
// import { Grid } from '@/[gds]/grid'
// import Card from '@/[gds]/card'
// import { Img } from '@/[gds]/img'
// import { Text } from '@/[gds]/text'
// import { Video } from '@/[gds]/video'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
    Fonts()
  }, [])

  // useComponent([
  //   'theme',
  //   'card',
  //   'container',
  //   'divider',
  //   'flex',
  //   'img',
  //   'text',
  //   'button',
  //   'icon',
  //   'video',
  //   'icons',
  // ])

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="theme"
          defaultTheme="system"
          enableColorScheme={false}
          enableSystem
        >
          <Main>
            <Alert />
            <Header />
            <Article>{children}</Article>
            {/* <Consent /> */}
            {/* <Footer /> */}
          </Main>
          <Theme>
            <Footer />
          </Theme>
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
        <Script id="show-banner">
          {`globalThis.GDS_DISABLE_VERSIONED_ELEMENTS = true`}
        </Script>
        <Script src="/core-out/index.bundle.js" />
      </body>
    </html>
  )
}
