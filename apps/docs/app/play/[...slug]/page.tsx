// play/[...slug]/page.tsx
import { studioData } from '../../../design/layout/studio/data/studio.data'

export default function PlayPage() {
  return null
}

export function generateStaticParams() {
  const paths: { slug: string[] }[] = []

  studioData.forEach((category) => {
    category.pages.forEach((page) => {
      // Add main page route
      paths.push({
        slug: [page.slug.replace('/play/', '')],
      })

      // Add sub-routes for items if page has content
      if (page.content) {
        page.content.forEach((group) => {
          group.items.forEach((item) => {
            paths.push({
              slug: [page.slug.replace('/play/', ''), item.key],
            })
          })
        })
      }
    })
  })

  return paths
}
