import { GdsContainer, GdsFlex, GdsText } from '$/import/components'
import Link from 'core/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://seb.io'),
  title: '404 - Green Design System',
  description:
    'Green Design System is more than a polished user interface, its places the user at the very forefront of design, usability and accessibility.',
  alternates: {
    canonical: '/',
  },
}

export default function NotFound() {
  return (
    <GdsFlex flex-direction="column" gap="4xl">
      <GdsContainer>
        <GdsText font-size="display-2xl">404</GdsText>
        <GdsText tag="h1">Page Not Found</GdsText>
      </GdsContainer>
      <Link href={'/'}>Go back</Link>
    </GdsFlex>
  )
}
