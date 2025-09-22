// page.tsx
import { Metadata } from 'next'

import { studioData } from '../../../design/layout/studio/data/studio.data'
import { getPageBySlug } from '../../../design/layout/studio/data/studio.hooks'

// Function to fetch icons from API during build time
async function fetchIconList() {
  try {
    const response = await fetch(
      'https://api.seb.io/components/icon/icon.list.json',
    )
    const icons = await response.json()
    return Object.keys(icons) // Just need the icon keys for paths
  } catch (error) {
    console.error('Failed to fetch icon list:', error)
    return []
  }
}

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

export async function generateStaticParams() {
  const paths: { slug: string[] }[] = []
  const iconList = await fetchIconList()

  studioData.forEach((category) => {
    category.pages.forEach((page) => {
      // Add main page route
      paths.push({
        slug: [page.slug.replace('/studio/', '')],
      })

      // Interactive pages
      if (page.pages) {
        page.pages.forEach((specialPage) => {
          paths.push({
            slug: specialPage.slug.replace('/studio/', '').split('/'),
          })
        })
      }

      // For icons page, use the API data to generate paths
      if (page.key === 'icons') {
        iconList.forEach((iconKey) => {
          paths.push({
            slug: [page.slug.replace('/studio/', ''), iconKey],
          })
        })
      }

      // For other pages with content, use the existing structure
      // else if (page.content) {
      //   page.content.forEach((group) => {
      //     group.items.forEach((item) => {
      //       paths.push({
      //         slug: [page.slug.replace('/studio/', ''), item.key],
      //       })
      //     })
      //   })
      // }
    })
  })

  return paths
}
