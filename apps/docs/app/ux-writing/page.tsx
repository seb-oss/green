// app/components/page.tsx
import { Metadata } from 'next'

import { UXwritingClient } from './page.client'

export const metadata: Metadata = {
  title: 'UX writing — Green Design System',
  description: '',
}

export default function UXwriting() {
  return <UXwritingClient />
}
