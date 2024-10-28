'use client'

import dynamic from 'next/dynamic'
import Script from 'next/script'
import Consent from '@/consent/consent'
import Main from '&/main/main'
import Fonts from '$/fonts/fonts'
// import { GdsFlex } from '@sebgroup/green-react/core/flex'
import { Provider } from '$/provider/provider'
import Footer from 'core/footer'
import Header from 'core/header'

import '#/global.css'

const GdsFlex = dynamic(() => import('@sebgroup/green-react/core/flex'), {
  ssr: false,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
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
