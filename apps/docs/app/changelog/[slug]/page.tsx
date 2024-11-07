import { notFound } from 'next/navigation'
import { allChangelogs } from 'content'
import { GdsFlex, GdsText } from '$/import/components'
import { Mdx } from 'core/mdx'

import type { Metadata, ResolvingMetadata } from 'next'

export const dynamic = 'force-static'

type ChangelogParams = {
  slug: string
}

type Props = {
  params: { slug: string }
}

export const generateStaticParams = (): ChangelogParams[] => {
  return allChangelogs.map((changelog) => ({
    slug: changelog.url_path.replace('/changelog/', ''),
  }))
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params

  const component = allChangelogs.find((changelog) => {
    if (changelog.url_path !== '/changelog/' + slug) {
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

export default function Changelog({ params }: { params: { slug: string } }) {
  const { slug } = params

  const changelog = allChangelogs.find(
    (changelog) => changelog.url_path === '/changelog/' + slug,
  )

  if (!changelog) {
    notFound()
  }

  const { body } = changelog

  return (
    <GdsFlex>
      <GdsFlex max-width="80ch" flex-direction="column" gap="xl">
        <GdsFlex id={changelog.version} flex-direction="column">
          <GdsText>{changelog.title}</GdsText>
          <Mdx code={body.code} globals={{ slug }} />
        </GdsFlex>
      </GdsFlex>
    </GdsFlex>
  )
}
