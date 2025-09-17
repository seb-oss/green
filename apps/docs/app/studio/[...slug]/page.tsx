// play/[...slug]/page.tsx
import { Metadata } from 'next'

import {
  getPageBySlug,
  studioData,
} from '../../../design/layout/studio/data/studio.data'

// Generate static metadata based on the current path
export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata> {
  const mainPath = `/studio/${params.slug[0]}`
  const page = getPageBySlug(mainPath)

  return {
    title: page ? `${page.label} · Green Design System` : 'Green Design System',
    description: page?.description || 'Design tokens and tools',
  }
}

export default function PlayPage() {
  return null
}

export function generateStaticParams() {
  const paths: { slug: string[] }[] = []

  studioData.forEach((category) => {
    category.pages.forEach((page) => {
      // Add main page route
      paths.push({
        slug: [page.slug.replace('/studio/', '')],
      })

      // Add sub-routes for items if page has content
      if (page.content) {
        page.content.forEach((group) => {
          group.items.forEach((item) => {
            paths.push({
              slug: [page.slug.replace('/studio/', ''), item.key],
            })
          })
        })
      }
    })
  })

  return paths
}
