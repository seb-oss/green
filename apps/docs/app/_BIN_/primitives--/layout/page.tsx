import { Metadata } from 'next'

import { LayoutClient } from './page.client'

export const metadata: Metadata = {
  title: 'Layout — Primitives — Green Design System',
  description: '',
}

export default function Layout() {
  return <LayoutClient />
}
