// app/component/[slug]/layout.tsx
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
  params: { slug: string }
}

export default function Layout({ children, params }: LayoutProps) {
  return (
    <ComponentLayoutClient slug={params.slug}>{children}</ComponentLayoutClient>
  )
}
