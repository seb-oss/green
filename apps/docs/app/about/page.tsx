import { Metadata } from 'next'

import { AboutClient } from './page.client'

export const metadata: Metadata = {
  title: 'About — Green Design System',
  description: '',
}

export default function A11y() {
  return <AboutClient />
}
