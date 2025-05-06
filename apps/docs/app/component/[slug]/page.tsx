// app/components/[slug]/page.tsx
import { getComponent, listComponents } from '../../../hooks/mdx'

type ComponentPageProps = {
  params: { slug: string }
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { component: MDXContent } = await getComponent(params.slug)

  return (
    <div>
      <h1>{params.slug}</h1>
      <MDXContent />
    </div>
  )
}

export async function generateStaticParams() {
  const components = await listComponents()
  return components.map((slug) => ({
    slug,
  }))
}

export const dynamicParams = false
