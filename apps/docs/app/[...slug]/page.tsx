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
  try {
    const response = await fetch('https://api.seb.io/pages/pages.json', {
      next: { revalidate: 3600 },
    })
    const data: PageList = await response.json()

    return data.pages
      .filter((page) => !page.slug.startsWith('/table'))
      .map((page) => ({
        slug: page.slug.split('/').filter(Boolean),
      }))
  } catch (error) {
    console.error('Failed to fetch pages for static generation:', error)
    return [{ slug: [''] }]
  }
}

export default function DynamicPage({ params }: PageProps) {
  return <DynamicPageClient slug={params.slug.join('/')} />
}
