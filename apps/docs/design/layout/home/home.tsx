// layout/components/page.tsx
'use client'

import { default as NextLink } from 'next/link'

import {
  GdsButton,
  GdsCard,
  GdsFlex,
  GdsGrid,
  GdsImg,
  GdsText,
  IconAi,
  IconArrowRight,
  IconBank,
  IconBookmark,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandGreen,
  IconBrandStorybook,
  IconCloudySun,
  IconCupHot,
  IconMagnifyingGlass,
  IconSquareGridCircle,
} from '@sebgroup/green-core/react'
import { useSettingsContext, useSettingsValue } from '../../../settings'
import { useContentContext } from '../../../settings/content'
import { Link } from '../../atoms/link/link'
import { Snippet } from '../../atoms/snippet/snippet'
import { LAYOUT_UTILS } from '../config'

import type { PageProps } from '../types'

import './home.css'

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
  const { actions: SettingsActions } = useSettingsContext()
  const handleToggleCommand = () => {
    SettingsActions.toggle('UI.Panel.Command')
  }

  const homeContent = actions.getPage('home')

  const components = actions.getComponents()

  const featuredComponents = components.filter((component) =>
    homeContent?.featured?.includes(component.slug),
  )

  const classes = [LAYOUT_UTILS.page(variant, layout), className]
    .filter(Boolean)
    .join(' ')

  return (
    <GdsFlex
      flex-direction="column"
      gap="2xl; l{8xl}"
      max-width="1200px"
      width="100%"
      className={classes}
      data-slug={slug}
      {...rest}
      margin="0 auto"
      data-template-home
    >
      <GdsFlex flex-direction="column" gap="l; l{xl}">
        <GdsFlex
          justify-content="center"
          padding="l 0 0"
          className="hero-intro"
        >
          <GdsText
            tag="h1"
            font="heading-m; s{heading-l}"
            color="neutral-02"
            max-width="800px"
            text-align="center"
          >
            <GdsText display="inline" color="neutral-01">
              {homeContent?.title + ' '}
            </GdsText>
            {homeContent?.summary}
          </GdsText>
        </GdsFlex>

        <GdsFlex
          width="100%"
          justify-content="center"
          flex-direction="column"
          className="hero-search"
        >
          <GdsButton
            rank="secondary"
            max-width="80ch"
            width="100%"
            size="large"
            justify-content="flex-start"
            align-self="center"
            onClick={handleToggleCommand}
          >
            <IconMagnifyingGlass slot="lead" />
            Search...
          </GdsButton>
        </GdsFlex>

        <div className="hero-animated">
          <GdsCard
            padding="0"
            overflow="hidden"
            background="none"
            margin="2xl 0 0 0"
          >
            <GdsImg
              className="hero-img"
              src="https://api.seb.io/assets/launch-hero.jpg"
              object-fit="cover"
              width="100%"
              height="100%"
            ></GdsImg>
          </GdsCard>
        </div>
      </GdsFlex>

      <GdsFlex flex-direction="column" gap="xl">
        <GdsFlex
          flex-direction="column; l{row}"
          align-items="flex-start; l{center}"
          justify-content="space-between"
          gap="l"
        >
          <GdsFlex flex-direction="column">
            <GdsText tag="h2">Featured components</GdsText>
            <GdsText
              tag="p"
              font="heading-s"
              color="neutral-02"
              max-width="80ch"
              id="featured-subheading"
            >
              Components designed with intention, focused on user experience.
            </GdsText>
          </GdsFlex>
          <Link component="button" href="/components" rank="secondary">
            <IconSquareGridCircle slot="trail"></IconSquareGridCircle>
            View all components
          </Link>
        </GdsFlex>
        <GdsGrid
          columns="1; l{3}"
          gap="l"
          width="100%"
          role="navigation"
          aria-label="Featured components"
          aria-describedby="featured-subheading"
        >
          {featuredComponents.map((component) => (
            <NextLink
              href={`/component/${component.slug}`}
              key={component.slug}
            >
              <GdsFlex flex-direction="column" height="280px">
                <GdsCard
                  width="100%"
                  padding="m"
                  gap="0"
                  flex="1"
                  align-items="center"
                  justify-content="center"
                  overflow="hidden"
                  className="no-pointer"
                  tabIndex={-1}
                  inert
                >
                  {component.hero_snippet && (
                    <Snippet slug={component.hero_snippet} />
                  )}
                </GdsCard>
                <GdsFlex
                  flex-direction="column"
                  gap="s"
                  width="100%"
                  padding="s"
                >
                  <GdsText font="heading-s">{component.title}</GdsText>
                </GdsFlex>
              </GdsFlex>
            </NextLink>
          ))}
        </GdsGrid>
      </GdsFlex>
      <GdsFlex flex-direction="column" gap="m">
        <GdsFlex
          flex-direction="column; l{row}"
          align-items="flex-start; l{center}"
          justify-content="space-between"
          gap="l"
        >
          <GdsFlex flex-direction="column">
            <GdsText tag="h2">Primitives</GdsText>
            <GdsText
              tag="p"
              font="heading-s"
              color="neutral-02"
              max-width="80ch"
              id="featured-subheading"
            >
              Essential foundations: tokens, color scales, and declarative
              layouts.
            </GdsText>
          </GdsFlex>
          <Link component="button" href="/primitives" rank="secondary">
            <IconBrandGreen slot="trail"></IconBrandGreen>
            View all primitives
          </Link>
        </GdsFlex>

        <GdsGrid
          columns="1; s{3}"
          gap="l"
          role="navigation"
          aria-label="Get started"
          aria-describedby="get-started-subheading"
        >
          <NextLink href={`/primitives/icons`}>
            <GdsCard
              gap="m"
              height="240px"
              justify-content="space-between"
              tabIndex={-1}
              inert
            >
              <GdsFlex
                width="100%"
                height="100%"
                align-items="center"
                justify-content="center"
              >
                <GdsGrid columns="3" width="max-content">
                  <IconArrowRight size="l" />
                  <IconAi size="l" />
                  <IconBank size="l" />
                  <IconCloudySun size="l" />
                  <IconBookmark size="l" />
                  <IconCupHot size="l" />
                </GdsGrid>
              </GdsFlex>
            </GdsCard>
            <GdsFlex padding="s" gap="s" width="100%">
              <GdsText font="heading-s">Icons</GdsText>
            </GdsFlex>
          </NextLink>
          <NextLink href="/primitives/design-tokens">
            <GdsCard
              gap="m"
              height="240px"
              justify-content="space-between"
              tabIndex={-1}
              inert
            >
              <GdsFlex
                width="100%"
                height="100%"
                align-items="center"
                justify-content="center"
                flex-direction="column"
                gap="l"
              >
                <GdsFlex gap="m" align-items="center">
                  <GdsGrid columns="3" gap="s">
                    <GdsCard
                      variant="secondary"
                      padding="xs"
                      align-items="center"
                      justify-content="center"
                    >
                      <GdsText font="display-m">Aa</GdsText>
                    </GdsCard>
                    <GdsCard
                      variant="secondary"
                      padding="xs"
                      align-items="center"
                      justify-content="center"
                    >
                      <GdsText font="display-s">Aa</GdsText>
                    </GdsCard>
                    <GdsCard
                      variant="secondary"
                      padding="xs"
                      align-items="center"
                      justify-content="center"
                    >
                      <GdsText font="display-xs">Aa</GdsText>
                    </GdsCard>
                    <GdsCard
                      padding="0"
                      variant="positive"
                      border-radius="max"
                      width="100%"
                      height="10px"
                    />
                    <GdsCard
                      padding="0"
                      variant="negative"
                      border-radius="max"
                      width="100%"
                      height="10px"
                    />

                    <GdsCard
                      padding="0"
                      variant="notice"
                      border-radius="max"
                      width="100%"
                      height="10px"
                    />
                  </GdsGrid>
                </GdsFlex>
              </GdsFlex>
            </GdsCard>
            <GdsFlex padding="s" gap="s" width="100%">
              <GdsText font="heading-s">Tokens</GdsText>
            </GdsFlex>
          </NextLink>
          <NextLink href="/primitives/declarative-layout">
            <GdsCard
              gap="m"
              height="240px"
              justify-content="space-between"
              tabIndex={-1}
              inert
            >
              <GdsFlex
                width="100%"
                height="100%"
                align-items="center"
                justify-content="center"
                flex-direction="column"
                gap="l"
              >
                <GdsGrid columns="12" gap="2xs" width="60%">
                  <GdsCard
                    grid-column="1/13"
                    border-radius="2xs"
                    height="l"
                    padding="0"
                    variant="secondary"
                  />
                  <GdsCard
                    grid-column="1/4"
                    border-radius="2xs"
                    height="6xl"
                    padding="0"
                    variant="secondary"
                  />
                  <GdsCard
                    grid-column="4/13"
                    border-radius="2xs"
                    height="6xl"
                    padding="0"
                    variant="secondary"
                  />
                </GdsGrid>
              </GdsFlex>
            </GdsCard>
            <GdsFlex
              padding="s"
              justify-content="space-between"
              gap="s"
              width="100%"
            >
              <GdsText font="heading-s">Declarative layout</GdsText>
            </GdsFlex>
          </NextLink>
        </GdsGrid>
      </GdsFlex>
      <GdsFlex flex-direction="column" gap="s; l{m}" align-items="flex-start">
        <GdsFlex flex-direction="column">
          <GdsText tag="h2">Resources</GdsText>
          <GdsText
            tag="p"
            font="heading-s"
            line-height="heading-s"
            color="neutral-02"
            max-width="80ch"
            id="resources-subheading"
          >
            Design and development resources to help you build with Green.
          </GdsText>
        </GdsFlex>
        <GdsGrid
          columns="1; s{3}"
          gap="s; l{l}"
          role="navigation"
          aria-label="Resources"
          aria-describedby="resources-subheading"
        >
          <NextLink href="/figma" key="/figma">
            <GdsCard flex-direction="row" align-items="center">
              <IconBrandFigma size="m" />
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
              >
                <GdsText font="heading-xs">Figma</GdsText>
              </GdsFlex>
            </GdsCard>
          </NextLink>

          <NextLink
            href="https://storybook.seb.io/"
            key="https://storybook.seb.io/"
          >
            <GdsCard flex-direction="row" align-items="center">
              <IconBrandStorybook size="m" />
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
              >
                <GdsText font="heading-xs">Storybook</GdsText>
              </GdsFlex>
            </GdsCard>
          </NextLink>
          <NextLink
            href="https://github.com/seb-oss/green"
            key="https://github.com/seb-oss/green"
          >
            <GdsCard flex-direction="row" align-items="center">
              <IconBrandGithub size="m" />
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
              >
                <GdsText font="heading-xs">Github</GdsText>
              </GdsFlex>
            </GdsCard>
          </NextLink>
        </GdsGrid>
      </GdsFlex>
      {children}
    </GdsFlex>
  )
}
