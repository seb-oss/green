// play/[...slug]/page.tsx
import { studioData } from '../../../design/layout/studio/data/studio.data'

export default function PlayPage() {
  return null
}

export function generateStaticParams() {
  const paths = studioData.flatMap((category) =>
    category.pages.map((page) => ({
      slug: page.slug.replace('/play/', '').split('/'),
    })),
  )

  return paths
}
