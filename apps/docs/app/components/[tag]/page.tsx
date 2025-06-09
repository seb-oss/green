// app/components/[tag]/page.tsx
import { use } from 'react'

import {
  fetchComponentContent,
  fetchComponentsList,
} from '../../../settings/content/api'
import { TagComponentsClient } from './page.client'

interface PageProps {
  params: Promise<{ tag: string }>
}

export async function generateStaticParams() {
  const { components } = await fetchComponentsList()

  const uniqueTags = new Set<string>()

  const fullComponents = await Promise.all(
    components.map(async (component) => {
      try {
        return await fetchComponentContent(component.path)
      } catch (error) {
        console.error(`Error fetching component ${component.slug}:`, error)
        return null
      }
    }),
  )

  // Collect tags from valid components
  fullComponents
    .filter(
      (component): component is NonNullable<typeof component> =>
        component !== null,
    )
    .forEach((component) => {
      component.tags?.forEach((tag) => {
        uniqueTags.add(tag.toLowerCase())
      })
    })

  return Array.from(uniqueTags).map((tag) => ({
    tag: tag,
  }))
}

export default function Page({ params }: PageProps) {
  const { tag } = use(params)
  return <TagComponentsClient tag={tag} />
}
