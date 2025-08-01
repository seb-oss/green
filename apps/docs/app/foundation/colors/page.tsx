import { Metadata } from 'next'

import { ColorsClient } from './page.client'

export const metadata: Metadata = {
  title: 'Colors — Foundation — Green Design System',
  description: '',
}

export default function Colors() {
  return <ColorsClient />
}
