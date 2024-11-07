import ComponentList from 'core/components'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://seb.io/tag'),
  title: 'Components — Green',
  alternates: {
    canonical: '/tag',
  },
  openGraph: {
    images: '/og?title=Components',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
