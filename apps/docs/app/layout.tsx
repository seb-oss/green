import { Metadata } from 'next'
import Script from 'next/script'

import { Root } from '../design/layout/root/root'
import { SettingsProvider as App } from '../settings/provider'

export const metadata: Metadata = {
  title: 'Green Design System',
  description:
    'Green Design System is more than a polished user interface, its places the user at the very forefront of design, usability and accessibility.',
  manifest: '/manifest.json',
  themeColor: '#003824',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
