// app/template/[slug]/layout.tsx
import { use } from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import {
  fetchTemplateContent,
  fetchTemplatesList,
} from '../../../settings/content/api'
import { TemplateLayoutClient } from './layout.client'

export const dynamic = 'force-static'

interface Props {
  params: { slug: string }
  children: React.ReactNode
}

export async function generateStaticParams() {
  const { templates } = await fetchTemplatesList()
  return templates.map((template) => ({
    slug: template.slug,
  }))
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { templates } = await fetchTemplatesList()
  const templateSummary = templates.find(
    (template) => template.slug === params.slug,
  )

  if (!templateSummary) {
    notFound()
  }

  const template = await fetchTemplateContent(templateSummary.path)

  return {
    title: `${template.title} — Green Design System`,
    description: 'Ready-to-use template for Green Design System',
    openGraph: {
      title: `${template.title} — Green Design System`,
      description: 'Ready-to-use template for Green Design System',
    },
  }
}

export default function Layout({ children, params }: Props) {
  const { slug } = params
  return <TemplateLayoutClient slug={slug}>{children}</TemplateLayoutClient>
}
