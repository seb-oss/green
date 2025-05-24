// app/component/[slug]/layout.tsx
'use client'

import { useEffect, useState } from 'react'
import Breadcrumbs from '@/apps/docs/design/atoms/breadcrumb/breadcrumb'
import { Link } from '@/apps/docs/design/atoms/link/link'
import { Snippet } from '@/apps/docs/design/atoms/snippet'
import Tabs from '@/apps/docs/design/atoms/tabs'

import * as Core from '@sebgroup/green-core/react'

interface ComponentContent {
  title: string
  slug: string
  hero_snippet?: string
  beta?: boolean
  summary?: string
  tags?: string[]
  category?: string[]
  platform?: {
    web: boolean
    ios: boolean
    android: boolean
  }
  overview?: {
    column: {
      title: string
      column_title_tag: string
      description: string
    }[]
  }[]
  'ux-text'?: {
    section: {
      title: string
      description: string
    }[]
  }
  accessibility?: {
    section: {
      title: string
      description: string
    }[]
  }
}

interface LayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

export default function ComponentLayout({ children, params }: LayoutProps) {
  const [content, setContent] = useState<ComponentContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://api.seb.io/components/${params.slug}/${params.slug}.content.json`,
        )

        if (!response.ok) {
          throw new Error('Failed to fetch component content')
        }

        const data = await response.json()
        setContent(data)

        // Update document title and meta tags
        document.title = `${data.title} - SEB Design System`

        // Update meta description
        const metaDescription = document.querySelector(
          'meta[name="description"]',
        )
        if (metaDescription) {
          metaDescription.setAttribute(
            'content',
            data.summary || `Documentation for the ${data.title} component`,
          )
        }
      } catch (err) {
        console.error('Error fetching content:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [params.slug])

  if (loading) {
    return (
      <Core.GdsFlex
        flex-direction="column"
        gap="xl"
        width="80ch"
        align-items="center"
        justify-content="center"
        height="50vh"
      >
        <Core.GdsText>Loading...</Core.GdsText>
      </Core.GdsFlex>
    )
  }

  if (error || !content) {
    return (
      <Core.GdsFlex
        flex-direction="column"
        gap="xl"
        width="80ch"
        align-items="center"
        justify-content="center"
        height="50vh"
      >
        <Core.GdsText>Error loading component: {error}</Core.GdsText>
      </Core.GdsFlex>
    )
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="xl" width="80ch">
      <Breadcrumbs slug={params.slug} title={content.title} />
      <Core.GdsFlex flex-direction="column" gap="m" align-items="flex-start">
        <Core.GdsFlex flex-direction="column" gap="xs" align-items="flex-start">
          <Core.GdsText tag="h1">{content.title}</Core.GdsText>
          {content.summary && (
            <Core.GdsText tag="p">{content.summary}</Core.GdsText>
          )}
          {content.beta && <Core.GdsBadge variant="notice">BETA</Core.GdsBadge>}
        </Core.GdsFlex>
        {content.tags && (
          <Core.GdsFlex gap="xs" align-items="center">
            <Core.GdsText tag="p">Tags:</Core.GdsText>
            <Core.GdsFlex gap="m">
              {content.tags.map((tag) => (
                <Link href={'/components/' + tag} key={tag} className="tag">
                  {tag}
                </Link>
              ))}
            </Core.GdsFlex>
          </Core.GdsFlex>
        )}
        <Core.GdsCard
          width="100%"
          height="280px"
          align-items="center"
          justify-content="center"
        >
          {content.hero_snippet && <Snippet slug={content.hero_snippet} />}
        </Core.GdsCard>
        <Tabs slug={params.slug} />
      </Core.GdsFlex>

      <div className="component-content">{children}</div>
    </Core.GdsFlex>
  )
}
