import { notFound } from 'next/navigation'
import { allComponents } from 'content'
import ComponentList from 'core/components'

import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const tags = new Set<string>()
  allComponents.forEach((component) => {
    component.tags?.split(', ').forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).map((tag) => ({
    slug: tag,
  }))
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params

  const componentsWithTag = allComponents.filter((component) =>
    component.tags?.split(', ').includes(slug),
  )

  if (componentsWithTag.length === 0) {
    notFound()
  }

  return {
    title: slug + ' — Green Design System',
    description: 'List of components with the tag ' + slug,
  }
}

export default function Tag({ params }: { params: { slug: string } }) {
  const { slug } = params

  const componentsWithTag = allComponents.filter((component) =>
    component.tags?.split(', ').includes(slug),
  )

  if (componentsWithTag.length === 0) {
    notFound()
  }

  return <ComponentList tag={slug} title={`Tag: ` + slug} />
}
