// app/[...slug]/layout.tsx
import { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getPageContent } from './content'

interface LayoutProps {
  children: React.ReactNode
  params: { slug: string[] }
}

// app/[...slug]/layout.tsx
export async function generateMetadata(
  { params }: { params: { slug: string[] } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  if (params.slug[0] === 'component' || params.slug[0] === 'components') {
    return {}
  }

  try {
    if (params.slug.length !== 1) {
      return {}
    }

    const content = await getPageContent(params.slug[0])

    return {
      title: `${content.title} - SEB Design System`,
      description: content.summary || content.title,
      openGraph: {
        title: `${content.title} - SEB Design System`,
        description: content.summary || content.title,
        images: [
          {
            url: `https://api.seb.io/pages/${params.slug[0]}/${params.slug[0]}.og.png`,
            width: 1200,
            height: 630,
            alt: content.title,
          },
        ],
      },
    }
  } catch {
    return {}
  }
}

export default async function PageLayout({ children, params }: LayoutProps) {
  // Let other routes handle their own layout
  if (params.slug[0] === 'component' || params.slug[0] === 'components') {
    return children
  }

  // Only process single-segment slugs
  if (params.slug.length !== 1) {
    return notFound()
  }

  try {
    const content = await getPageContent(params.slug[0])

    return (
      <div className="page-layout">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
            </li>
            <li>
              <span aria-current="page">{content.title}</span>
            </li>
          </ol>
        </nav>

        {children}
      </div>
    )
  } catch {
    return notFound()
  }
}
