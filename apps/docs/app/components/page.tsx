// app/components/page.tsx
import { Metadata } from 'next'

import { ComponentsClient } from './page.client'

export const metadata: Metadata = {
  title: 'Components — Green Design System',
  description: 'Browse all components available in the Green Design System.',
  openGraph: {
    title: 'Components — Green Design System',
    description: 'Browse all components available in the Green Design System.',
  },
}

export default function Components() {
  return <ComponentsClient />
}
