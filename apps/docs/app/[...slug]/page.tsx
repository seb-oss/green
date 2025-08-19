// app/[...slug]/page.tsx
import { Metadata } from 'next'

import { PageList } from '../../settings/content/types'
import { DynamicPageClient } from './page.client'

interface PageProps {
  params: {
    slug: string[]
  }
}

// Fetch pages at build time
export async function generateStaticParams() {
  const response = await fetch('https://api.seb.io/pages/pages.json')
  const data: PageList = await response.json()

  return data.pages.map((page) => ({
    slug: page.slug.split('/'),
  }))
}

export default function DynamicPage({ params }: PageProps) {
  return <DynamicPageClient slug={params.slug.join('/')} />
}
