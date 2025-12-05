import { Metadata } from 'next'
import Script from 'next/script'

import type { Viewport } from 'next'

import { Root } from '../design/layout/root/root'
import { SettingsProvider as App } from '../settings/provider'

export const metadata: Metadata = {
  title: 'Green Design System',
  description:
    'Green Design System is more than a polished user interface, its places the user at the very forefront of design, usability and accessibility.',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: './favicon.ico', sizes: 'any' },
      { url: './icons/icon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: './icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: './icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
}

export const viewport: Viewport = {
  // themeColor: '#003824',
  // viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
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
        {/*  <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        /> */}
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
