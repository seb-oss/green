import { Metadata } from 'next'

import { VisualDirectionClient } from './page.client'

export const metadata: Metadata = {
  title: 'Visual direction — Green Design System',
  description: '',
}

export default function VisualDirection() {
  return <VisualDirectionClient />
}
