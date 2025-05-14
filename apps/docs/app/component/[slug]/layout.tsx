// app/component/[slug]/layout.tsx
import { Metadata, ResolvingMetadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Tabs from '@/apps/docs/design/atoms/tabs'

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
    const headersList = await headers()
    const pathname = headersList.get('x-pathname') || ''

    // Generate breadcrumb items
    const breadcrumbItems = [
      { label: 'Home', href: '/' },
      { label: 'Components', href: '/components' },
      { label: content.title, href: `/component/${params.slug}` },
    ]

    if (pathname.includes('/ux-text')) {
      breadcrumbItems.push({
        label: 'UX Text',
        href: `/component/${params.slug}/ux-text`,
      })
    } else if (pathname.includes('/accessibility')) {
      breadcrumbItems.push({
        label: 'Accessibility',
        href: `/component/${params.slug}/accessibility`,
      })
    }

    return (
      <Core.GdsFlex flex-direction="column" gap="xl" width="80ch">
        <Core.GdsFlex gap="m" align-items="center">
          {breadcrumbItems.map((item, index) => (
            <Core.GdsFlex gap="m" key={item.href}>
              {index === breadcrumbItems.length - 1 ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <>
                  <Link href={item.href}>{item.label}</Link>
                  <Core.GdsText> / </Core.GdsText>
                </>
              )}
            </Core.GdsFlex>
          ))}
        </Core.GdsFlex>

        <Core.GdsFlex flex-direction="column" gap="m" align-items="flex-start">
          <Core.GdsText tag="h1">{content.title}</Core.GdsText>
          {content.summary && <p className="summary">{content.summary}</p>}
          {content.beta && <Core.GdsBadge variant="notice">Beta</Core.GdsBadge>}

          {content.tags && (
            <Core.GdsFlex>
              <Core.GdsText>Tags:</Core.GdsText>
              <Core.GdsFlex gap="m">
                {content.tags.map((tag) => (
                  <Core.GdsLink
                    href={'components/' + tag}
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
            ...
          </Core.GdsCard>

          <Tabs path={pathname} slug={params.slug} />

          {/* <nav className="component-nav">
            <Link
              href={`/component/${params.slug}`}
              className={
                !pathname.includes('/ux-text') &&
                !pathname.includes('/accessibility')
                  ? 'active'
                  : ''
              }
            >
              Overview
            </Link>
            <Link
              href={`/component/${params.slug}/ux-text`}
              className={pathname.includes('/ux-text') ? 'active' : ''}
            >
              UX Text
            </Link>
            <Link
              href={`/component/${params.slug}/accessibility`}
              className={pathname.includes('/accessibility') ? 'active' : ''}
            >
              Accessibility
            </Link>
          </nav> */}
        </Core.GdsFlex>

        <div className="component-content">{children}</div>
      </Core.GdsFlex>
    )
  } catch (error) {
    return notFound()
  }
}
