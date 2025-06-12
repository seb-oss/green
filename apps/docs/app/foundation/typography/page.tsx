import { Metadata } from 'next'

import { TypographyClient } from './page.client'

export const metadata: Metadata = {
  title: 'Typography — Foundation — Green Design System',
  description: '',
}

export default function Colors() {
  return <TypographyClient />
}
