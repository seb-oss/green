import { Metadata } from 'next'

import { AppliedDesignClient } from './page.client'

export const metadata: Metadata = {
  title: 'About — Green Design System',
  description: '',
}

export default function AppliedDesign() {
  return <AppliedDesignClient />
}
