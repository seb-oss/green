// app/component/[slug]/layout.tsx
import { use } from 'react'

import { loadContent } from '../../../settings/content/loader'
import ComponentLayout from './layout.client'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  try {
    const content = await loadContent()
    return content.components.map((component) => ({
      slug: component.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

interface ComponentLayoutProps {
  children: React.ReactNode
  params: Promise<{
    slug: string
  }>
}

export default function Layout({ children, params }: ComponentLayoutProps) {
  const { slug } = use(params)
  return <ComponentLayout slug={slug}>{children}</ComponentLayout>
}
