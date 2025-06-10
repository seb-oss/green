// layout/components/page.tsx
'use client'

import {
  GdsCard,
  GdsFlex,
  GdsGrid,
  GdsText,
  IconArrowRight,
} from '@sebgroup/green-core/react'
import { useContentContext } from '../../../settings/content'
import { LAYOUT_UTILS } from '../config'

import type { PageProps } from '../types'

import './home.css'

import { Link } from '../../atoms/link/link'
import { Snippet } from '../../atoms/snippet/snippet'

export function Home({
  children,
  className,
  content,
  title,
  slug,
  variant = 'page',
  layout = 'home',
  ...rest
}: PageProps) {
  const { actions } = useContentContext()
  const homeContent = actions.getPage('home')

  const components = actions.getComponents()

  const featuredComponents = components.filter((component) =>
    homeContent?.featured?.includes(component.slug),
  )

  const classes = [LAYOUT_UTILS.page(variant, layout), className]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={classes} data-slug={slug} {...rest}>
      <GdsFlex flex-direction="column" gap="4xl">
        <GdsFlex flex-direction="column" gap="xl">
          <GdsText tag="h1">{homeContent?.title}</GdsText>
          <GdsText
            tag="p"
            font-size="heading-s"
            line-height="heading-s"
            color="secondary"
            max-width="80ch"
          >
            {homeContent?.summary}
          </GdsText>
          {homeContent?.hero && (
            <GdsCard height="60vh">
              <Snippet slug={homeContent?.hero} />
            </GdsCard>
          )}
        </GdsFlex>

        <GdsFlex flex-direction="column" gap="m" align-items="flex-start">
          <GdsText tag="h2">Featured components</GdsText>
          <GdsGrid columns="3" gap="l">
            {featuredComponents.map((component) => (
              <GdsCard min-height="100%" width="100%" key={component.slug}>
                <GdsFlex
                  align-items="center"
                  justify-content="center"
                  height="180px"
                >
                  {component.hero_snippet && (
                    <Snippet slug={component.hero_snippet} />
                  )}
                </GdsFlex>
                <Link href={`/component/${component.slug}`}>
                  <GdsFlex
                    align-items="center"
                    justify-content="space-between"
                    gap="s"
                    width="100%"
                  >
                    <GdsText color="secondary">{component.title}</GdsText>
                    <IconArrowRight />
                  </GdsFlex>
                </Link>
              </GdsCard>
            ))}
          </GdsGrid>
          <Link component="button" href="/components" rank="secondary">
            View All Components
          </Link>
        </GdsFlex>
        <GdsFlex flex-direction="column" gap="m" align-items="flex-start">
          <GdsText tag="h2">Get started</GdsText>
          <GdsGrid columns="3" gap="l">
            <GdsCard>ICONS</GdsCard>
            <GdsCard>Tokens</GdsCard>
            <GdsCard>Layout</GdsCard>
          </GdsGrid>
        </GdsFlex>
        <GdsFlex flex-direction="column" gap="m" align-items="flex-start">
          <GdsText tag="h2">Ressources</GdsText>
          <GdsGrid columns="3" gap="l">
            <GdsCard>Figma</GdsCard>
            <GdsCard>Github</GdsCard>
          </GdsGrid>
        </GdsFlex>
        {children}
      </GdsFlex>
    </article>
  )
}
