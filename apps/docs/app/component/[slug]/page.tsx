// app/component/[slug]/page.tsx
import { OverviewClient } from './overview.client'

interface PageProps {
  params: { slug: string }
}

export default function Page({ params }: PageProps) {
  return <OverviewClient slug={params.slug} />
}
