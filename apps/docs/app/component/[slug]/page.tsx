// app/component/[slug]/page.tsx
import { use } from 'react'

import { OverviewClient } from './overview.client'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function Page({ params }: PageProps) {
  const { slug } = use(params)
  return <OverviewClient slug={slug} />
}
