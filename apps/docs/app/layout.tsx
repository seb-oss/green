import { Root } from '../design/layout/root/root'
import { SettingsProvider as App } from '../settings/provider'

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
      </body>
    </html>
  )
}
