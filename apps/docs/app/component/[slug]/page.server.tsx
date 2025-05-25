// app/component/[slug]/page.server.ts
import { notFound } from 'next/navigation'

import { fetchComponentsList } from '../../../settings/content/api'

export async function generateStaticParams() {
  const componentsData = await fetchComponentsList()
  return componentsData.components.map((component) => ({
    slug: component.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const componentsData = await fetchComponentsList()
  const component = componentsData.components.find((comp) => comp.slug === slug)

  if (!component) {
    notFound()
  }

  return {
    title: `${component.title} — Green Design System`,
    description: component.summary,
  }
}
