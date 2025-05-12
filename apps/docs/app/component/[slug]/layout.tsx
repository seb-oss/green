// app/component/[slug]/layout.tsx
import { Metadata, ResolvingMetadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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
      <div className="component-layout">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol>
            {breadcrumbItems.map((item, index) => (
              <li key={item.href}>
                {index === breadcrumbItems.length - 1 ? (
                  <span aria-current="page">{item.label}</span>
                ) : (
                  <>
                    <Link href={item.href}>{item.label}</Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="component-header">
          <h1>{content.title}</h1>
          {content.beta && <span className="beta-badge">Beta</span>}
          {content.summary && <p className="summary">{content.summary}</p>}

          {content.tags && (
            <div className="tags">
              {content.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {content.platform && (
            <div className="platform-support">
              {Object.entries(content.platform).map(
                ([platform, supported]) =>
                  supported && (
                    <span key={platform} className="platform">
                      {platform}
                    </span>
                  ),
              )}
            </div>
          )}

          <nav className="component-nav">
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
          </nav>
        </div>

        <div className="component-content">{children}</div>
      </div>
    )
  } catch (error) {
    return notFound()
  }
}
