// app/component/[slug]/layout.client.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { notFound, usePathname, useRouter } from 'next/navigation'
import { marked } from 'marked'

import * as Core from '@sebgroup/green-core/react'
import { Anatomy } from '../../../design/atoms/anatomy/anatomy'
import AnatomyInteractive from '../../../design/atoms/anatomy/anatomy.core'
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
  const router = useRouter()
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

  const getSection = (pathname: string) => {
    if (pathname.includes('/ux-text')) return 'ux-text'
    if (pathname.includes('/accessibility')) return 'accessibility'
    if (pathname.includes('/code')) return 'code'
    if (pathname.includes('/faq')) return 'faq'
    return 'overview'
  }

  const section = getSection(pathname)

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
    (Array.isArray(component.faq) && component.faq.length > 0) ||
    (component.faq?.section && component.faq.section.length > 0) ||
    (component.accessibility?.section &&
      component.accessibility.section.length > 0),
  )

  const anatomyImage = component.images?.find((img) => img.id === 'anatomy')

  const versus = component.compare
    ? `${actions.getComponent(component.compare.toLowerCase())?.title} vs. ${component.title}`
    : undefined

  const hasOverviewContent = Boolean(
    component.preamble ||
    component.anatomy ||
    component.overview?.length ||
    component['anatomy-overview'] ||
    component.compare,
  )

  return (
    <Core.GdsFlex flex-direction="column" gap="l" width="100%">
      <Breadcrumbs
        type="component"
        key={`${slug}-${section}`}
        slug={component.slug}
        title={component.title}
        section={section}
      />
      <Core.GdsFlex flex-direction="column" gap="m" padding="0">
        <Core.GdsText tag="h1" font="heading-xl" id="component-top">
          {component.title}
        </Core.GdsText>

        {component.summary && (
          <Core.GdsText
            tag="p"
            font="body-book-m"
            color="neutral-02"
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
              <Core.GdsText color="neutral-02" font="detail-book-s">
                Tags:
              </Core.GdsText>
              {component.tags.map((tag) => (
                <Link
                  key={tag}
                  href={'/components/' + tag.toLocaleLowerCase()}
                  style={{ font: 'var(--gds-sys-text-detail-book-s)' }}
                >
                  {tag.toLocaleLowerCase()}
                </Link>
              ))}
            </Core.GdsFlex>
          )}
        </Core.GdsFlex>
      </Core.GdsFlex>
      <Core.GdsGrid columns="12" gap="l" width="100%">
        <Core.GdsFlex
          flex-direction="column"
          gap="xl"
          grid-column="1/13; s{1/10}"
        >
          <Core.GdsTheme color-scheme={currentTheme}>
            <Core.GdsCard
              height="280px"
              justify-content="center"
              align-items="center"
              position="relative"
              overflow="hidden"
              padding="0"
              variant="secondary"
              border-width="5xs"
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

          <Tabs type="component" slug={component.slug} />

          <Core.GdsFlex flex-direction="column" id="component-content" gap="xl">
            {component.slug === 'icon' && (
              <Core.GdsAlert
                variant="notice"
                buttonLabel="View all icons"
                onClick={() => router.push('/studio/icons')}
              >
                <Core.GdsText
                  font="body-book-m"
                  display="inline"
                  font-weight="bold"
                >
                  Explore our icon library!
                </Core.GdsText>
                {` `}
                Discover our searchable icon library with regular and solid
                variants.
              </Core.GdsAlert>
            )}
            {section === 'overview' && (component.preamble || anatomyImage) && (
              <Core.GdsFlex
                flex-direction="column"
                gap="2xl"
                id="component-overview"
              >
                {component.preamble && (
                  <Core.GdsText tag="p" font="heading-s" max-width="100ch">
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
                    gap="s"
                    id="component-anatomy"
                  >
                    <Core.GdsText tag="h2">Anatomy</Core.GdsText>
                    {component['anatomy-overview'] && (
                      <Core.GdsRichText>
                        <div
                          className="text-pretty"
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
                    <Figure id={anatomyImage.svg} />
                    {component['anatomy-list']?.anatomyitems && (
                      <Anatomy items={component['anatomy-list'].anatomyitems} />
                    )}
                  </Core.GdsFlex>
                )}
              </Core.GdsFlex>
            )}

            <AnatomyInteractive title="Button Anatomy">
              <Core.GdsButton
                data-anatomy="button"
                data-anatomy-label="Button Container"
                data-anatomy-type="container"
              >
                <Core.IconAi
                  slot="lead"
                  data-anatomy="icon"
                  data-anatomy-label="Icon"
                />
                <span data-anatomy="text" data-anatomy-label="Button Text">
                  Click me
                </span>
                <Core.GdsBadge
                  slot="trail"
                  data-anatomy="badge"
                  data-anatomy-label="Badge"
                  data-anatomy-type="background"
                >
                  2
                </Core.GdsBadge>
              </Core.GdsButton>
            </AnatomyInteractive>

            {isLayoutComponent && section === 'overview' && (
              <Core.GdsAlert
                variant="information"
                buttonLabel="Learn more"
                onClick={() => router.push('/primitives/declarative-layout')}
              >
                <Core.GdsText font="body-regular-m">
                  <Core.GdsText
                    font="body-book-m"
                    display="inline"
                    font-weight="bold"
                  >
                    This is a declarative layout component!
                  </Core.GdsText>
                  A micro-frontend optimized layout system using style
                  expressions, Generates encapsulated CSS in shadow DOM for
                  responsive layouts without utility classes.
                </Core.GdsText>
              </Core.GdsAlert>
            )}

            {children}

            {component.soon && (
              <Core.GdsAlert variant="notice">
                {component.title} documentation is in progress.
              </Core.GdsAlert>
            )}

            {section === 'code' && <ArgsTable componentName={slug} />}
            <Similar tag={firstTag} currentSlug={component.slug} />
          </Core.GdsFlex>
        </Core.GdsFlex>
        {hasOverviewContent && (
          <Core.GdsFlex
            display="none; s{flex}"
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
          </Core.GdsFlex>
        )}
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
