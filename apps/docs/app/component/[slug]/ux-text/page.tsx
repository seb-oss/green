// app/component/[slug]/ux-text/page.tsx
import { use } from 'react'

import { UXTextClient } from './page.client'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function Page({ params }: PageProps) {
  const { slug } = use(params)
  return <UXTextClient slug={slug} />
}
