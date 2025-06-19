// app/component/[slug]/overview/page.client.tsx
'use client'

import { ContentSection } from './content'

interface OverviewClientProps {
  slug: string
}

export function OverviewClient({ slug }: OverviewClientProps) {
  return <ContentSection slug={slug} contentKey="overview" />
}
