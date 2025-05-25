// app/component/[slug]/page.tsx
import { OverviewClient } from './overview.client'

export default function Page({ params }: { params: { slug: string } }) {
  return <OverviewClient slug={params.slug} />
}
