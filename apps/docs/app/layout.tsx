'use client'

import Script from 'next/script'

import Root from '../design/layout/root'
import useCookieConsent from '../settings/consent/useCookieConsent'
import { SettingsProvider as App } from '../settings/provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useCookieConsent()

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <App>
          <Root>{children}</Root>
        </App>
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
