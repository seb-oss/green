// app/component/[slug]/content.ts
import { cache } from 'react'

interface ComponentContent {
  title: string
  slug: string
  beta?: boolean
  summary?: string
  tags?: string[]
  category?: string[]
  platform?: {
    web: boolean
    ios: boolean
    android: boolean
  }
  overview?: {
    column: {
      title: string
      column_title_tag: string
      description: string
    }[]
  }[]
  'ux-text'?: {
    section: {
      title: string
      description: string
    }[]
  }
  accessibility?: {
    section: {
      title: string
      description: string
    }[]
  }
}

export const getContent = cache(async (slug: string) => {
  const response = await fetch(
    `https://api.seb.io/components/${slug}/${slug}.content.json`,
    { next: { revalidate: 3600 } }, // Revalidate every hour
  )

  if (!response.ok) throw new Error('Failed to fetch component content')
  return response.json() as Promise<ComponentContent>
})
