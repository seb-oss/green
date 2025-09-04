// app/component/[slug]/layout.tsx
import { use } from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import {
  fetchComponentContent,
  fetchComponentsList,
} from '../../../settings/content/api'
import { ComponentLayoutClient } from './layout.client'

import './layout.css'

export const dynamic = 'force-static'

interface Props {
  params: { slug: string }
  children: React.ReactNode
}

export async function generateStaticParams() {
  const { components } = await fetchComponentsList()
  return components.map((component) => ({
    slug: component.slug,
  }))
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { components } = await fetchComponentsList()
  const componentSummary = components.find(
    (component) => component.slug === params.slug,
  )

  if (!componentSummary) {
    notFound()
  }

  const component = await fetchComponentContent(componentSummary.path)

  return {
    title: `${component.title} — Green Design System`,
    description: component.summary || '',
    openGraph: {
      title: `${component.title} — Green Design System`,
      description: component.summary || '',
      images: [
        {
          url:
            'https://api.seb.io/components/' +
            component.slug +
            '/' +
            component.slug +
            '.og.png',
          width: 1200,
          height: 630,
          alt: component.title,
        },
      ],
    },
    keywords: [...(component.tags || []), ...(component.category || [])].join(
      ', ',
    ),
  }
}

export default function Layout({ children, params }: Props) {
  const { slug } = params
  return <ComponentLayoutClient slug={slug}>{children}</ComponentLayoutClient>
}
