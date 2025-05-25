// app/component/[slug]/ux-text/page.tsx
import { UXTextClient } from './page.client'

interface PageProps {
  params: { slug: string }
}

export default function Page({ params }: PageProps) {
  return <UXTextClient slug={params.slug} />
}
