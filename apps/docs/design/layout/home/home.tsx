// layout/components/page.tsx
'use client'

import {
  GdsCard,
  GdsFlex,
  GdsGrid,
  GdsText,
  IconAi,
  IconArrowRight,
  IconBank,
  IconBookmark,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandStorybook,
  IconCloudySun,
  IconCupHot,
  IconSquareGridCircle,
} from '@sebgroup/green-core/react'
import { useContentContext } from '../../../settings/content'
import { Link } from '../../atoms/link/link'
import { Snippet } from '../../atoms/snippet/snippet'
import { LAYOUT_UTILS } from '../config'
import Hero from './hero/hero'

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
      gap="4xl"
      max-width="1200px"
      width="100%"
      className={classes}
      data-slug={slug}
      {...rest}
      margin="0 auto"
      data-template-home
    >
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
        {/* {homeContent?.hero && (
          <GdsCard height="60vh">
            <Snippet slug={homeContent?.hero} />
          </GdsCard>
        )} */}

        <GdsCard height="70vh">
          <Hero />
        </GdsCard>
      </GdsFlex>

      <GdsFlex flex-direction="column" gap="xl" align-items="flex-start">
        <GdsFlex flex-direction="column">
          <GdsText tag="h2">Featured components</GdsText>
          <GdsText
            tag="p"
            font-size="heading-s"
            line-height="heading-s"
            color="secondary"
            max-width="80ch"
          >
            Components designed with intention, focused on user experience.
          </GdsText>
        </GdsFlex>
        <GdsGrid columns="1; l{3}" gap="l" width="100%">
          {featuredComponents.map((component) => (
            <GdsCard
              min-height="100%"
              min-width="100%"
              key={component.slug}
              variant="secondary"
              border-color="primary"
              padding="0"
              gap="0"
            >
              <GdsFlex
                align-items="center"
                justify-content="center"
                height="180px"
                overflow="hidden"
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
                  padding="0 l l l"
                >
                  <GdsText color="secondary">{component.title}</GdsText>
                  <IconArrowRight />
                </GdsFlex>
              </Link>
            </GdsCard>
          ))}
        </GdsGrid>
        <Link component="button" href="/components" rank="secondary">
          <IconSquareGridCircle slot="lead"></IconSquareGridCircle>
          View All Components
        </Link>
      </GdsFlex>
      <GdsFlex flex-direction="column" gap="m" align-items="flex-start">
        <GdsFlex flex-direction="column">
          <GdsText tag="h2">Get started</GdsText>
          <GdsText
            tag="p"
            font-size="heading-s"
            line-height="heading-s"
            color="secondary"
            max-width="80ch"
          >
            Essential foundations: tokens, color scales, and declarative
            layouts.
          </GdsText>
        </GdsFlex>
        <GdsGrid columns="1; s{3}" gap="l">
          <GdsCard
            gap="m"
            height="240px"
            justify-content="space-between"
            background="secondary"
            border-color="primary"
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
            <Link href={`/component/icon`}>
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
              >
                <GdsText color="secondary">Icons</GdsText>
                <IconArrowRight />
              </GdsFlex>
            </Link>
          </GdsCard>
          <GdsCard
            gap="m"
            height="240px"
            justify-content="space-between"
            background="secondary"
            border-color="primary"
          >
            <GdsFlex
              width="100%"
              height="100%"
              align-items="center"
              justify-content="center"
              flex-direction="column"
              gap="l"
            >
              {/* Typography Scale */}
              <GdsFlex gap="m" align-items="center">
                <GdsGrid columns="3" gap="s">
                  <GdsCard
                    variant="secondary"
                    padding="xs"
                    align-items="center"
                    justify-content="center"
                  >
                    <GdsText font-size="display-m">Aa</GdsText>
                  </GdsCard>
                  <GdsCard
                    variant="secondary"
                    padding="xs"
                    align-items="center"
                    justify-content="center"
                  >
                    <GdsText font-size="display-s">Aa</GdsText>
                  </GdsCard>
                  <GdsCard
                    variant="secondary"
                    padding="xs"
                    align-items="center"
                    justify-content="center"
                  >
                    <GdsText font-size="display-xs">Aa</GdsText>
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
            <Link href="/foundation/tokens">
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
              >
                <GdsText color="secondary">Tokens</GdsText>
                <IconArrowRight />
              </GdsFlex>
            </Link>
          </GdsCard>

          <GdsCard
            gap="m"
            height="240px"
            justify-content="space-between"
            background="secondary"
            border-color="primary"
          >
            <GdsFlex
              width="100%"
              height="100%"
              align-items="center"
              justify-content="center"
              flex-direction="column"
              gap="l"
            >
              <GdsGrid columns="12" gap="xs" width="60%">
                <GdsCard
                  background="secondary"
                  border-color="primary"
                  grid-column="1/13"
                  border-radius="xs"
                  height="l"
                  padding="0"
                />
                <GdsCard
                  background="secondary"
                  border-color="primary"
                  grid-column="1/4"
                  border-radius="xs"
                  height="6xl"
                  padding="0"
                />
                <GdsCard
                  background="secondary"
                  border-color="primary"
                  grid-column="4/13"
                  border-radius="xs"
                  height="6xl"
                  padding="0"
                />
              </GdsGrid>
            </GdsFlex>
            <Link href="/foundation/layouts">
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
              >
                <GdsText color="secondary">Declarative layout</GdsText>
                <IconArrowRight />
              </GdsFlex>
            </Link>
          </GdsCard>
        </GdsGrid>
      </GdsFlex>
      <GdsFlex flex-direction="column" gap="m" align-items="flex-start">
        <GdsFlex flex-direction="column">
          <GdsText tag="h2">Ressources</GdsText>
          <GdsText
            tag="p"
            font-size="heading-s"
            line-height="heading-s"
            color="secondary"
            max-width="80ch"
          >
            Design and development resources to help you build with Green.
          </GdsText>
        </GdsFlex>
        <GdsGrid columns="1; s{3}" gap="l">
          <GdsCard>
            <IconBrandFigma />
            <Link href="https://figma.com/" isExternal>
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
              >
                <GdsText color="secondary">Figma</GdsText>
                <IconArrowRight />
              </GdsFlex>
            </Link>
          </GdsCard>

          <GdsCard>
            <IconBrandStorybook />
            <Link href="https://storybook.seb.io/" isExternal>
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
              >
                <GdsText color="secondary">Storybook</GdsText>
                <IconArrowRight />
              </GdsFlex>
            </Link>
          </GdsCard>
          <GdsCard>
            <IconBrandGithub />
            <Link href="https://github.com/seb-oss/green" isExternal>
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
              >
                <GdsText color="secondary">Github</GdsText>
                <IconArrowRight />
              </GdsFlex>
            </Link>
          </GdsCard>
        </GdsGrid>
      </GdsFlex>
      {children}
    </GdsFlex>
  )
}
