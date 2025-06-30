// app/component/[slug]/layout.client.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { notFound, usePathname } from 'next/navigation'
import { marked } from 'marked'

import * as Core from '@sebgroup/green-core/react'
import { Anatomy } from '../../../design/atoms/anatomy/anatomy'
import Breadcrumbs from '../../../design/atoms/breadcrumb/breadcrumb'
import { TableOfContents } from '../../../design/atoms/contents/contents'
import Figure from '../../../design/atoms/figure/figure'
import { Link } from '../../../design/atoms/link/link'
import { ArgsTable } from '../../../design/atoms/props/props'
import { Similar } from '../../../design/atoms/similar/similar'
import { Snippet } from '../../../design/atoms/snippet/snippet'
import Tabs from '../../../design/atoms/tabs/tabs'
import Versus from '../../../design/atoms/versus/versus'
import { useSettingsValue } from '../../../settings'
import { useContent } from '../../../settings/content'

interface ComponentLayoutClientProps {
  children: React.ReactNode
  slug: string
}

export function ComponentLayoutClient({
  children,
  slug,
}: ComponentLayoutClientProps) {
  const [overrideTheme, setOverrideTheme] = useState<'light' | 'dark' | null>(
    null,
  )
  const [isHovered, setIsHovered] = useState(false)
  const systemColorScheme = useSettingsValue((s) => s.UI.Theme.ColorScheme)

  useEffect(() => {
    setOverrideTheme(null)
  }, [systemColorScheme])

  const toggleTheme = () => {
    if (!overrideTheme) {
      setOverrideTheme(systemColorScheme === 'light' ? 'dark' : 'light')
      return
    }
    setOverrideTheme(overrideTheme === 'light' ? 'dark' : 'light')
  }

  const currentTheme = overrideTheme || systemColorScheme

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

  const hasAdditionalContent = Boolean(
    (Array.isArray(component['ux-text']) && component['ux-text'].length > 0) ||
      (component['ux-text']?.section &&
        component['ux-text'].section.length > 0) ||
      (component.accessibility?.section &&
        component.accessibility.section.length > 0),
  )

  const anatomyImage = component.images?.find((img) => img.id === 'anatomy')

  const versus = component.compare
    ? `${actions.getComponent(component.compare.toLowerCase())?.title} vs. ${component.title}`
    : undefined

  return (
    <Core.GdsFlex
      flex-direction="column"
      gap="l"
      max-width="1000px"
      width="100%"
      margin="0 auto"
    >
      <Breadcrumbs
        key={`${slug}-${section}`}
        slug={component.slug}
        title={component.title}
        section={section}
      />
      <Core.GdsFlex flex-direction="column" gap="m" padding="0">
        <Core.GdsText tag="h1" font-size="heading-xl" id="component-top">
          {component.title}
        </Core.GdsText>

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

        <Core.GdsFlex gap="l" align-items="center" height="max-content">
          {component.beta && (
            <Core.GdsBadge size="small" variant="notice">
              BETA
            </Core.GdsBadge>
          )}

          {component.tags && (
            <Core.GdsFlex gap="xs" margin="0 0 2xs 0">
              <Core.GdsText color="secondary" tag="small">
                Tags:
              </Core.GdsText>
              {component.tags.map((tag) => (
                <Link key={tag} href={'/components/' + tag.toLocaleLowerCase()}>
                  {tag.toLocaleLowerCase()}
                </Link>
              ))}
            </Core.GdsFlex>
          )}
        </Core.GdsFlex>
      </Core.GdsFlex>
      <Core.GdsGrid columns="12" gap="l" width="100%">
        <Core.GdsFlex flex-direction="column" gap="xl" grid-column="1/10">
          <Core.GdsTheme color-scheme={currentTheme}>
            <Core.GdsCard
              height="280px"
              justify-content="center"
              align-items="center"
              position="relative"
              overflow="hidden"
              padding="0"
              border-color="primary/0.4"
              variant="secondary"
              border-width="4xs"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              data-pattern
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

              {isHovered && (
                <Core.GdsFlex
                  justify-content="space-between"
                  align-items="center"
                  width="max-content"
                  position="absolute"
                  inset="20px 20px auto auto"
                >
                  <Core.GdsButton
                    rank="tertiary"
                    size="xs"
                    onClick={toggleTheme}
                  >
                    {currentTheme === 'light' ? (
                      <Core.IconMoon size="s" />
                    ) : (
                      <Core.IconSun size="s" />
                    )}
                  </Core.GdsButton>
                </Core.GdsFlex>
              )}
            </Core.GdsCard>
          </Core.GdsTheme>

          {!isLayoutComponent && hasAdditionalContent && (
            <Tabs slug={component.slug} />
          )}

          <Core.GdsFlex flex-direction="column" id="component-content" gap="xl">
            {section === 'overview' && (component.preamble || anatomyImage) && (
              <Core.GdsFlex flex-direction="column" gap="2xl">
                {component.preamble && (
                  <Core.GdsText tag="p" font-size="heading-s" max-width="100ch">
                    {component.preamble}
                  </Core.GdsText>
                )}
                {component.compare && (
                  <Versus
                    compare={component.compare.toLocaleLowerCase()}
                    current={slug}
                  />
                )}
                {component.anatomy && anatomyImage && (
                  <Core.GdsFlex
                    flex-direction="column"
                    gap="m"
                    id="component-anatomy"
                  >
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
                    {component['anatomy-list']?.anatomyitems && (
                      <Anatomy items={component['anatomy-list'].anatomyitems} />
                    )}
                  </Core.GdsFlex>
                )}
              </Core.GdsFlex>
            )}
            {children}

            {isLayoutComponent && section === 'overview' && (
              <Core.GdsCard variant="secondary" border-color="primary">
                <Core.GdsFlex flex-direction="column" gap="m" max-width="90ch">
                  <Core.GdsFlex align-items="center" gap="s">
                    <Core.GdsCard border-radius="max" padding="s">
                      <Core.IconBrandGreen size="m" />
                    </Core.GdsCard>
                    <Core.GdsText tag="h2">
                      Declarative layout component
                    </Core.GdsText>
                  </Core.GdsFlex>
                  <Core.GdsText tag="p" max-width="80ch">
                    A micro-frontend optimized layout system using style
                    expressions, Generates encapsulated CSS in shadow DOM for
                    responsive layouts without utility classes.
                  </Core.GdsText>
                  <Link component="link" href="/foundation/layout">
                    Learn more about layouts
                    <Core.IconArrowRight slot="trail" />
                  </Link>
                </Core.GdsFlex>
              </Core.GdsCard>
            )}
            <ArgsTable componentName={slug} />
            <Similar tag={firstTag} currentSlug={component.slug} />
          </Core.GdsFlex>
        </Core.GdsFlex>
        {!isLayoutComponent && (
          <Core.GdsFlex
            flex-direction="column"
            justify-content="flex-start"
            position="sticky"
            inset="90px auto auto auto"
            grid-column="10/13"
            height="max-content"
          >
            <TableOfContents
              component={component}
              section={section}
              versus={versus}
            />

            {component.platform?.web && (
              <Core.GdsFlex gap="xs" flex-direction="column" padding="l">
                <Core.GdsDiv height="1px" background="primary"></Core.GdsDiv>
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
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
