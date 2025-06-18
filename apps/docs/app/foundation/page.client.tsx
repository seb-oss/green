'use client'

import {
  GdsBreadcrumbs,
  GdsCard,
  GdsFlex,
  GdsGrid,
  GdsText,
  IconAi,
  IconArrowRight,
  IconBank,
  IconBookmark,
  IconCloudySun,
  IconCupHot,
  IconHomeOpen,
} from '@sebgroup/green-core/react'
import { Render } from '../../design/atoms/content/render'
import { Link } from '../../design/atoms/link/link'
import { useContentContext } from '../../settings/content'

export function FoundationClient() {
  const { actions } = useContentContext()
  const CONTENT = actions.getPage('foundation')

  const imageProvider = {
    getImage: (slug: string, node: string) => {
      return undefined
    },
  }

  return (
    <GdsFlex
      flex-direction="column"
      gap="2xl"
      max-width="1200px"
      width="100%"
      margin="0 auto"
    >
      <GdsBreadcrumbs size="small">
        <Link component="link" href="/">
          <IconHomeOpen size="m" slot="lead" />
          Home
        </Link>
        <GdsText>Foundation</GdsText>
      </GdsBreadcrumbs>
      <GdsFlex flex-direction="column" gap="s">
        <GdsText tag="h1">{CONTENT?.title}</GdsText>
        <GdsText
          tag="p"
          font-size="heading-m"
          color="secondary"
          max-width="100ch"
        >
          {CONTENT?.summary}
        </GdsText>
      </GdsFlex>
      {CONTENT?.sections && (
        <Render
          content={CONTENT.sections}
          slug="foundation"
          imageProvider={imageProvider}
        />
      )}
      <GdsFlex gap="l" flex-direction="column">
        <GdsFlex gap="s" flex-direction="column">
          <GdsText tag="h2">Core Resources</GdsText>
          <GdsText
            tag="p"
            font-size="heading-s"
            line-height="heading-s"
            color="secondary"
            max-width="80ch"
          >
            The fundamental elements that define our visual language and ensure
            consistent, accessible design across all platforms.
          </GdsText>
        </GdsFlex>

        <GdsGrid columns="3" gap="l">
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
                </GdsGrid>
              </GdsFlex>
            </GdsFlex>
            <Link href="/foundation/typography">
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
              >
                <GdsText color="secondary">Typography</GdsText>
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
              <GdsFlex gap="m" align-items="center">
                <GdsGrid columns="3" gap="s" width="200px">
                  <GdsCard
                    level="3"
                    padding="0"
                    variant="primary"
                    border-radius="max"
                    width="100%"
                    height="10px"
                  />
                  <GdsCard
                    level="3"
                    padding="0"
                    variant="notice"
                    border-radius="max"
                    width="100%"
                    height="10px"
                  />
                  <GdsCard
                    level="3"
                    padding="0"
                    variant="warning"
                    border-radius="max"
                    width="100%"
                    height="10px"
                  />
                  <GdsCard
                    level="3"
                    padding="0"
                    variant="positive-secondary"
                    border-radius="max"
                    width="100%"
                    height="10px"
                  />
                  <GdsCard
                    level="3"
                    padding="0"
                    variant="notice-secondary"
                    border-radius="max"
                    width="100%"
                    height="10px"
                  />
                  <GdsCard
                    level="3"
                    padding="0"
                    variant="warning-secondary"
                    border-radius="max"
                    width="100%"
                    height="10px"
                  />
                </GdsGrid>
              </GdsFlex>
            </GdsFlex>
            <Link href="/foundation/colors">
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
              >
                <GdsText color="secondary">Colors</GdsText>
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
              <GdsFlex gap="m" align-items="center">
                <GdsFlex gap="s" align-items="center" width="max-content">
                  <GdsCard
                    padding="0"
                    background="secondary"
                    border-color="primary"
                    border-radius="max"
                    width="l"
                    height="l"
                  />
                  <GdsCard
                    padding="0"
                    background="secondary"
                    border-color="primary"
                    border-radius="max"
                    width="2xl"
                    height="2xl"
                  />
                  <GdsCard
                    padding="0"
                    background="secondary"
                    border-color="primary"
                    border-radius="max"
                    width="4xl"
                    height="4xl"
                  />
                </GdsFlex>
              </GdsFlex>
            </GdsFlex>
            <Link href="/foundation/spacing">
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
              >
                <GdsText color="secondary">Spacing</GdsText>
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
    </GdsFlex>
  )
}
