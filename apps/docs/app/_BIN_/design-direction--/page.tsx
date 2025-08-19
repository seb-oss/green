import { Metadata } from 'next'

import { DesignDirectionClient } from './page.client'

export const metadata: Metadata = {
  title: 'Design — Green Design System',
  description: '',
}

export default function Design() {
  return <DesignDirectionClient />
}
