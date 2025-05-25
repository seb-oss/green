// app/component/[slug]/layout.tsx
import { use } from 'react'

import { fetchComponentsList } from '../../../settings/content/api'
import { ComponentLayoutClient } from './layout.client'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const { components } = await fetchComponentsList()
  return components.map((component) => ({
    slug: component.slug,
  }))
}

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}

export default function Layout({ children, params }: LayoutProps) {
  const { slug } = use(params)
  return <ComponentLayoutClient slug={slug}>{children}</ComponentLayoutClient>
}
