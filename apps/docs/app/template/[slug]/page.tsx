// app/template/[slug]/page.tsx
import { use } from 'react'

import { TemplateClient } from './page.client'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function Page({ params }: PageProps) {
  const { slug } = use(params)
  return <TemplateClient slug={slug} />
}
