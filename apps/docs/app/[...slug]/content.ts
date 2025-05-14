// app/[...slug]/content.ts
import { cache } from 'react'

interface PageContent {
  title: string
  slug: string
  summary?: string
  content?: {
    section: {
      title: string
      description: string
    }[]
  }
}

export const getPageContent = cache(async (slug: string) => {
  const response = await fetch(
    `https://api.seb.io/pages/${slug}/${slug}.json`,
    { next: { revalidate: 3600 } },
  )

  if (!response.ok) throw new Error('Failed to fetch page content')
  return response.json() as Promise<PageContent>
})
