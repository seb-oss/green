// app/component/[slug]/accessibility/page.tsx
import { use } from 'react'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function Page({ params }: PageProps) {
  const { slug } = use(params)
  return slug
}
