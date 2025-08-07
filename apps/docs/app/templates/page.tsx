// app/templates/page.tsx
import { Metadata } from 'next'

import { TemplatesClient } from './page.client'

export const metadata: Metadata = {
  title: 'Templates — Green Design System',
  description:
    'Collection of pre-built, customizable templates using Green Design System components. Copy and implement common UI patterns instantly.',
  openGraph: {
    title: 'Templates — Green Design System',
    description:
      'Collection of pre-built, customizable templates using Green Design System components. Copy and implement common UI patterns instantly.',
  },
}

export default function Components() {
  return <TemplatesClient />
}
