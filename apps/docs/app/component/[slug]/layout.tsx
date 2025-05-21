// app/component/[slug]/layout.tsx
import { Metadata, ResolvingMetadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/apps/docs/design/atoms/breadcrumb/breadcrumb'
import { Snippet } from '@/apps/docs/design/atoms/snippet'
import Tabs from '@/apps/docs/design/atoms/tabs'
import { Icon } from '@/apps/docs/hooks'

import * as Core from '@sebgroup/green-core/react'
import { getContent } from './content'

interface LayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  try {
    const content = await getContent(params.slug)

    return {
      title: `${content.title} - SEB Design System`,
      description:
        content.summary || `Documentation for the ${content.title} component`,
      openGraph: {
        title: `${content.title} - SEB Design System`,
        description:
          content.summary || `Documentation for the ${content.title} component`,
        images: [
          {
            url: `https://api.seb.io/components/${params.slug}/${params.slug}.og.png`,
            width: 1200,
            height: 630,
            alt: content.title,
          },
        ],
      },
    }
  } catch {
    return {
      title: 'Component - SEB Design System',
    }
  }
}

export default async function ComponentLayout({
  children,
  params,
}: LayoutProps) {
  try {
    const content = await getContent(params.slug)

    return (
      <Core.GdsFlex flex-direction="column" gap="xl" width="80ch">
        <Breadcrumbs slug={params.slug} title={content.title} />
        <Core.GdsFlex flex-direction="column" gap="m" align-items="flex-start">
          <Core.GdsFlex flex-direction="column" gap="xs">
            <Core.GdsText tag="h1">{content.title}</Core.GdsText>
            {content.summary && (
              <Core.GdsText tag="p">{content.summary}</Core.GdsText>
            )}
            {content.beta && (
              <Core.GdsBadge variant="notice">BETA</Core.GdsBadge>
            )}
          </Core.GdsFlex>
          {content.tags && (
            <Core.GdsFlex gap="xs" align-items="center">
              <Core.GdsText tag="p">Tags:</Core.GdsText>
              <Core.GdsFlex gap="m">
                {content.tags.map((tag) => (
                  <Core.GdsLink
                    href={'/components/' + tag}
                    key={tag}
                    className="tag"
                  >
                    {tag}
                  </Core.GdsLink>
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
  } catch (error) {
    return notFound()
  }
}
