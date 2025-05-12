// app/template/[slug]/content.ts
import { cache } from 'react'

interface TemplateContent {
  title: string
  slug: string
  code: string
  related_components: string[]
}

export const getContent = cache(async (slug: string) => {
  const response = await fetch(`https://api.seb.io/templates/${slug}.json`, {
    next: { revalidate: 3600 },
  })

  if (!response.ok) throw new Error('Failed to fetch template content')
  return response.json() as Promise<TemplateContent>
})
