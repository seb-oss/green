import { Metadata } from 'next'

import { TokensClient } from './page.client'

export const metadata: Metadata = {
  title: 'Design Tokens — Foundation — Green Design System',
  description: '',
}

export default function Tokens() {
  return <TokensClient />
}
