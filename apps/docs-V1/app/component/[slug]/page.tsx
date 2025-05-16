import Head from 'next/head'
import { notFound } from 'next/navigation'
import { allComponents } from 'content'
import { isDev } from '$/env/env'
import { GdsRichText } from '$/import/components'
import { Mdx } from 'core/mdx'

import type { Metadata, ResolvingMetadata } from 'next'

export const dynamic = 'force-static'

type Props = {
  params: { slug: string }
}

type ComponentParams = {
  slug: string
}

export const generateStaticParams = (): ComponentParams[] => {
  return allComponents.map((component) => ({
    slug: component.url_path.replace('/component/', ''),
  }))
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params

  const component = allComponents.find((component) => {
    if (component.url_path !== '/component/' + slug) {
      return false
    }
    if (component.private && !isDev) {
      return false
    }
    return true
  })

  if (!component) {
    notFound()
  }

  return {
    title: component.title + ' — Green Design System',
    description: component.summary,
  }
}

export default function ComponentPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  const component = allComponents.find(
    (component) => component.url_path === '/component/' + slug,
  )

  if (!component) {
    notFound()
  }

  const { body } = component

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Thing',
            description: component.summary,
            url: `https://seb.io/component/${slug}`,
            author: {
              '@type': 'Company',
              name: 'SEB',
            },
          }),
        }}
      />
      <Head>
        <meta name="title" content={component.title} />
      </Head>
      <Mdx code={body.code} globals={{ slug }} />
    </>
  )
}
