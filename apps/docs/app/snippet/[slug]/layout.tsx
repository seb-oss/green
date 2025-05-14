// app/snippet/[slug]/layout.tsx
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
      title: `${content.title} Snippet - SEB Design System`,
      description: `Snippet for ${content.title}`,
      openGraph: {
        title: `${content.title} Snippet - SEB Design System`,
        description: `Snippet for ${content.title}`,
      },
    }
  } catch {
    return {
      title: 'Snippet - SEB Design System',
    }
  }
}

export default async function SnippetLayout({ children, params }: LayoutProps) {
  try {
    const content = await getContent(params.slug)
    const headersList = await headers()
    const pathname = headersList.get('x-pathname') || ''

    // Generate breadcrumb items
    const breadcrumbItems = [
      { label: 'Home', href: '/' },
      { label: 'Snippets', href: '/snippets' },
      { label: content.title, href: `/snippet/${params.slug}` },
    ]

    if (pathname.includes('/code')) {
      breadcrumbItems.push({
        label: 'Code',
        href: `/snippet/${params.slug}/code`,
      })
    }

    return (
      <div className="snippet-layout">
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

        <div className="snippet-header">
          <h1>{content.title}</h1>

          <nav className="snippet-nav">
            <Link
              href={`/snippet/${params.slug}`}
              className={!pathname.includes('/code') ? 'active' : ''}
            >
              Preview
            </Link>
            <Link
              href={`/snippet/${params.slug}/code`}
              className={pathname.includes('/code') ? 'active' : ''}
            >
              Code
            </Link>
          </nav>
        </div>

        <div className="snippet-content">{children}</div>
      </div>
    )
  } catch (error) {
    return notFound()
  }
}
