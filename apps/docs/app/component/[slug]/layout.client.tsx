// app/component/[slug]/layout.client.tsx
'use client'

import React from 'react'
import { notFound, usePathname } from 'next/navigation'
import { marked } from 'marked'

import * as Core from '@sebgroup/green-core/react'
import Breadcrumbs from '../../../design/atoms/breadcrumb/breadcrumb'
import Figure from '../../../design/atoms/figure/figure'
import { Link } from '../../../design/atoms/link/link'
import { Similar } from '../../../design/atoms/similar/similar'
import { Snippet } from '../../../design/atoms/snippet/snippet'
import Tabs from '../../../design/atoms/tabs/tabs'
import { useContent } from '../../../settings/content'

interface ComponentLayoutClientProps {
  children: React.ReactNode
  slug: string
}

export function ComponentLayoutClient({
  children,
  slug,
}: ComponentLayoutClientProps) {
  const { isLoaded, actions } = useContent()
  const pathname = usePathname()
  const section = pathname.includes('/ux-text')
    ? 'ux-text'
    : pathname.includes('/accessibility')
      ? 'accessibility'
      : 'overview'

  if (!isLoaded) return null

  const component = actions.getComponent(slug)
  if (!component) {
    notFound()
  }

  const isLayoutComponent = component?.category?.includes('Layout')
  const firstTag = component?.tags?.[0]

  // const hasAdditionalContent = Boolean(
  //   component['ux-text']?.section?.length ||
  //     component.accessibility?.section?.length,
  // )

  const hasAdditionalContent = Boolean(
    (Array.isArray(component['ux-text']) && component['ux-text'].length > 0) ||
      (component['ux-text']?.section &&
        component['ux-text'].section.length > 0) ||
      (component.accessibility?.section &&
        component.accessibility.section.length > 0),
  )

  const anatomyImage = component.images?.find((img) => img.id === 'anatomy')

  return (
    <Core.GdsFlex
      flex-direction="column"
      gap="2xl"
      max-width="840px"
      width="100%"
      // max-width="1200px"
      margin="0 auto"
    >
      <Core.GdsFlex flex-direction="column" gap="m" padding="0">
        <Breadcrumbs slug={component.slug} title={component.title} />
        <Core.GdsText tag="h1" font-size="heading-xl">
          {component.title}
        </Core.GdsText>
        {(component.beta || component.platform?.web) && (
          <Core.GdsFlex gap="l">
            {component.beta && (
              <Core.GdsFlex gap="xs" flex-direction="column">
                <Core.GdsText tag="small" color="secondary">
                  Status
                </Core.GdsText>
                <Core.GdsBadge size="small" variant="notice">
                  BETA
                </Core.GdsBadge>
              </Core.GdsFlex>
            )}
            {component.platform?.web && (
              <Core.GdsFlex gap="xs" flex-direction="column">
                <Core.GdsText tag="small" color="secondary">
                  Platform
                </Core.GdsText>
                <Core.GdsFlex gap="s">
                  {component.platform.web && (
                    <Core.GdsFlex align-items="center" gap="4xs">
                      <Core.IconCompassRound></Core.IconCompassRound>
                      Web
                    </Core.GdsFlex>
                  )}
                  {component.platform.ios && (
                    <Core.GdsFlex align-items="center" gap="4xs">
                      <Core.IconPhoneDynamicIsland></Core.IconPhoneDynamicIsland>
                      iOS
                    </Core.GdsFlex>
                  )}
                  {component.platform.android && (
                    <Core.GdsFlex align-items="center" gap="4xs">
                      <Core.IconRobot></Core.IconRobot>
                      Android
                    </Core.GdsFlex>
                  )}
                </Core.GdsFlex>
              </Core.GdsFlex>
            )}
          </Core.GdsFlex>
        )}

        {component.summary && (
          <Core.GdsText
            tag="p"
            font-size="body-m"
            color="secondary"
            max-width="82ch"
          >
            {component.summary}
          </Core.GdsText>
        )}

        {component.tags && (
          <Core.GdsFlex gap="s" margin="s 0">
            Tags:
            {component.tags.map((tag) => (
              <Link key={tag} href={'/components/' + tag.toLocaleLowerCase()}>
                {tag.toLocaleLowerCase()}
              </Link>
            ))}
          </Core.GdsFlex>
        )}

        <Core.GdsCard
          height="280px"
          justify-content="center"
          align-items="center"
          position="relative"
          overflow="hidden"
          padding="0"
        >
          {component.hero_snippet && (
            <Snippet slug={component.hero_snippet?.toString()} />
          )}
          {!hasAdditionalContent && (
            <Core.GdsDiv position="absolute" inset="auto 0 0 auto">
              <Core.GdsLink
                href={
                  'https://storybook.seb.io/latest/core/?path=/docs/components-' +
                  slug +
                  '--docs'
                }
                target="_blank"
              >
                <Core.GdsFlex
                  margin="0 0 0 auto"
                  align-items="center"
                  gap="s"
                  padding="m l"
                >
                  <Core.GdsFlex align-items="center" gap="3xs">
                    <Core.IconBrandStorybook size="s" color="primary" />
                    API Docs
                  </Core.GdsFlex>
                  <Core.IconSquareArrowTopRight size="s" />
                </Core.GdsFlex>
              </Core.GdsLink>
            </Core.GdsDiv>
          )}
        </Core.GdsCard>
        {!isLayoutComponent && hasAdditionalContent && (
          <Tabs slug={component.slug} />
        )}
      </Core.GdsFlex>

      {section === 'overview' && (component.preamble || anatomyImage) && (
        <Core.GdsFlex flex-direction="column" gap="m">
          {component.preamble && (
            <Core.GdsText tag="p">{component.preamble}</Core.GdsText>
          )}
          {component.anatomy && anatomyImage && (
            <React.Fragment>
              <Core.GdsText tag="h2">Anatomy</Core.GdsText>
              {component['anatomy-overview'] && (
                <Core.GdsRichText>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: component['anatomy-overview']
                        ? marked.parse(component['anatomy-overview'], {
                            async: false,
                          })
                        : '',
                    }}
                  />
                </Core.GdsRichText>
              )}
              <Figure
                id={anatomyImage.svg}
                caption={`Anatomy of ${component.title.toLowerCase()}`}
              />
              {component['anatomy-details'] && (
                <Core.GdsDiv margin="m 0 0 0">
                  <Core.GdsRichText>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: component['anatomy-details']
                          ? marked.parse(component['anatomy-details'], {
                              async: false,
                            })
                          : '',
                      }}
                    />
                  </Core.GdsRichText>
                </Core.GdsDiv>
              )}
            </React.Fragment>
          )}
        </Core.GdsFlex>
      )}
      {children}
      {isLayoutComponent && section === 'overview' && (
        <Core.GdsCard
          variant="secondary"
          border-radius="m"
          padding="0"
          background="secondary"
        >
          <Core.GdsFlex
            flex-direction="column"
            gap="m"
            justify-content="flex-start"
            align-items="flex-start"
            max-width="90ch"
          >
            <Core.GdsFlex gap="s" align-items="center">
              <Core.GdsText font-size="display-s">
                Declarative Layout Component
              </Core.GdsText>
            </Core.GdsFlex>
            <Core.GdsText tag="p" color="primary" font-size="heading-s">
              {`This component is part of Green's declarative layout system,
              designed specifically for micro-frontend architectures.`}
            </Core.GdsText>
            <Core.GdsText color="secondary" tag="p">
              {`It uses style expression properties to generate and inject CSS
              directly into shadow DOM, ensuring style encapsulation while
              providing flexible, responsive layouts without utility classes.`}
            </Core.GdsText>
            <Link component="button" href="/foundation/layout" rank="secondary">
              Learn more about declarative layout system
              <Core.IconArrowRight slot="trail" />
            </Link>
          </Core.GdsFlex>
        </Core.GdsCard>
      )}
      <Similar tag={firstTag} currentSlug={component.slug} />
    </Core.GdsFlex>
  )
}
