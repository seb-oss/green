// app/component/[slug]/accessibility/page.tsx
import { use } from 'react'

import { AccessibilityClient } from './page.client'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function Page({ params }: PageProps) {
  const { slug } = use(params)
  return <AccessibilityClient slug={slug} />
}
