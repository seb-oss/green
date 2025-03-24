import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://seb.io/foundation/accessibility'),
  title: 'Accessibility — Green Design System',
  description:
    "How accessibility is checked in Green Design System and it's components",
  alternates: {
    canonical: '/foundation'
  },
  openGraph: {
    images: '/og?title=Accessibility'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
