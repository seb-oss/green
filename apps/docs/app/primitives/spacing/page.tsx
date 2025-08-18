import { Metadata } from 'next'

import { SpacingClient } from './page.client'

export const metadata: Metadata = {
  title: 'Spacing — Primitives — Green Design System',
  description: '',
}

export default function Layout() {
  return <SpacingClient />
}
