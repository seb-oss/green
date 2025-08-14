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
    <GdsFlex flex-direction="column" gap="2xl" width="100%">
      <GdsBreadcrumbs size="small">
        <Link component="link" href="/">
          <IconHomeOpen size="m" slot="lead" />
          Home
        </Link>
        <GdsText>Foundation</GdsText>
      </GdsBreadcrumbs>
      <GdsFlex flex-direction="column" gap="xl">
        <GdsFlex flex-direction="column" gap="s" text-align="center">
          <GdsText tag="h1">{CONTENT?.title}</GdsText>
          <GdsText
            tag="p"
            font="heading-m"
            color="02"
            max-width="100ch"
            margin="auto"
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
      </GdsFlex>
      <GdsFlex gap="xl" flex-direction="column" width="100%">
        <GdsFlex gap="s" flex-direction="column" max-width="80ch" margin="auto">
          <GdsText tag="h2">Resources</GdsText>
          <GdsText
            tag="p"
            font="heading-s"
            line-height="heading-s"
            color="02"
            max-width="80ch"
          >
            The fundamental elements that define our visual language and ensure
            consistent, accessible design across all platforms.
          </GdsText>
        </GdsFlex>

        <GdsGrid columns="1; s{3}" gap="l">
          <Link href={`/component/icon`}>
            <GdsFlex flex-direction="column" width="100%">
              <GdsCard gap="m" height="240px" justify-content="space-between">
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
              <GdsFlex align-items="center" width="100%" padding="s">
                <GdsText font="heading-s">Icons</GdsText>
              </GdsFlex>
            </GdsFlex>
          </Link>
          <Link href="/foundation/typography">
            <GdsFlex flex-direction="column" width="100%">
              <GdsCard gap="m" height="240px" justify-content="space-between">
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
                    </GdsGrid>
                  </GdsFlex>
                </GdsFlex>
              </GdsCard>
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
                padding="s"
              >
                <GdsText font="heading-s">Typography</GdsText>
              </GdsFlex>
            </GdsFlex>
          </Link>
          <Link href="/foundation/colours">
            <GdsFlex flex-direction="column" width="100%">
              <GdsCard gap="m" height="240px" justify-content="space-between">
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
              </GdsCard>
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
                padding="s"
              >
                <GdsText font="heading-s">Colors</GdsText>
              </GdsFlex>
            </GdsFlex>
          </Link>
          <Link href="/foundation/spacing">
            <GdsFlex flex-direction="column" width="100%">
              <GdsCard gap="m" height="240px" justify-content="space-between">
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
                        border-radius="max"
                        width="l"
                        height="l"
                      />
                      <GdsCard
                        padding="0"
                        border-radius="max"
                        width="2xl"
                        height="2xl"
                      />
                      <GdsCard
                        padding="0"
                        border-radius="max"
                        width="4xl"
                        height="4xl"
                      />
                    </GdsFlex>
                  </GdsFlex>
                </GdsFlex>
              </GdsCard>
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
                padding="s"
              >
                <GdsText font="heading-s">Spacing</GdsText>
              </GdsFlex>
            </GdsFlex>
          </Link>
          <Link href="/foundation/layouts">
            <GdsFlex flex-direction="column" width="100%">
              <GdsCard gap="m" height="240px" justify-content="space-between">
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
                      grid-column="1/13"
                      border-radius="xs"
                      height="l"
                      padding="0"
                    />
                    <GdsCard
                      grid-column="1/4"
                      border-radius="xs"
                      height="6xl"
                      padding="0"
                    />
                    <GdsCard
                      grid-column="4/13"
                      border-radius="xs"
                      height="6xl"
                      padding="0"
                    />
                  </GdsGrid>
                </GdsFlex>
              </GdsCard>
              <GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
                width="100%"
                padding="s"
              >
                <GdsText font="heading-s">Declarative layout</GdsText>
              </GdsFlex>
            </GdsFlex>
          </Link>
        </GdsGrid>
      </GdsFlex>
    </GdsFlex>
  )
}
