import { Metadata } from 'next'

import { A11yClient } from './page.client'

export const metadata: Metadata = {
  title: 'Accessibility — Green Design System',
  description: '',
}

export default function A11y() {
  return <A11yClient />
}
