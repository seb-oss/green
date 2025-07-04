// app/component/[slug]/ux-text/page.tsx
import { use } from 'react'

import { CodeClient } from './page.client'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function Page({ params }: PageProps) {
  const { slug } = use(params)
  return <CodeClient slug={slug} />
}
