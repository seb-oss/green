import type { Metadata } from 'next'

import { Home as Layout } from '../design/layout/home/home'

export const metadata: Metadata = {
  metadataBase: new URL('https://seb.io'),
  title: 'Green Design System',
  description:
    'Green Design System is built to support creating beautiful, consistent financial products for generations to come.',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'vhAE3wh75Jg9hnVBtCn30CPNnXyzEw-JAcS9Q1LwewY',
  },
}

export default async function Home() {
  return <Layout content={<>hello</>} />
}
