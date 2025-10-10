import React from 'react'

import {
  GdsButton,
  GdsCard,
  GdsFlex,
  GdsGrid,
  GdsLink,
  GdsText,
  GdsTheme,
  IconBrandGreen,
  IconBrandSeb,
  IconSquareArrowTopRight,
} from '../../../../dist/libs/core/src/generated/react'

export default function Welcome() {
  return (
    <GdsTheme designVersion="2023">
      <GdsFlex
        flex-direction="column"
        align-items="center"
        justify-content="center"
        min-height="80vh"
      >
        <GdsFlex
          padding="0 l"
          align-items="center"
          justify-content="center"
          flex="1"
        >
          <GdsFlex
            min-width="100%"
            justify-content="center"
            align-items="center"
            flex-direction="column"
            padding="0 l"
            gap="xl"
          >
            <IconBrandGreen size="2xl"></IconBrandGreen>
            <GdsText tag="code" font="display-s">
              @sebgroup/green-core
            </GdsText>
            <GdsText
              font="heading-s"
              text-align="center"
              font-weight="regular"
              text-wrap="balance"
              max-width="90ch"
            >
              Green Core is a carefully crafted set of Web Components that lays
              the foundation for the Green Design System.
            </GdsText>
            <GdsFlex gap="m" justify-content="center">
              <GdsButton
                href="https://storybook.seb.io/latest/core/?path=/docs/get-started--docs"
                rank="primary"
              >
                Get Started
              </GdsButton>
              <GdsButton
                href="https://storybook.seb.io/latest/core/?path=/docs/components-alert--docs"
                rank="secondary"
              >
                View Components
              </GdsButton>
            </GdsFlex>
            <GdsFlex gap="s" align-items="center">
              <GdsText>Built by:</GdsText>
              <IconBrandSeb size="m"></IconBrandSeb>
            </GdsFlex>
            <GdsGrid columns="1; m{2}" gap="l" padding="l; m{4xl}">
              <GdsCard
                variant="primary"
                flex-direction="column"
                align-items="flex-start"
                padding="xl"
                flex="1"
                min-width="320px"
                gap="m"
                border-radius="m"
              >
                <GdsFlex flex-direction="column" gap="m">
                  <GdsText font="heading-s" font-weight="regular">
                    Documentation
                  </GdsText>
                  <GdsText max-width="100%" opacity="0.8">
                    Explore our comprehensive guidelines, components
                    documentation, and implementation details.
                  </GdsText>
                </GdsFlex>
                <GdsLink href="https://seb.io" target="_blank">
                  <IconSquareArrowTopRight slot="trail" size="s" />
                  View Documentation
                </GdsLink>
              </GdsCard>
              <GdsCard
                variant="primary"
                flex-direction="column"
                align-items="flex-start"
                padding="xl"
                flex="1"
                min-width="320px"
                gap="m"
                border-radius="m"
              >
                <GdsFlex flex-direction="column" gap="m">
                  <GdsText font="heading-s" font-weight="regular">
                    Green Studio
                  </GdsText>
                  <GdsText max-width="100%" opacity="0.8">
                    Access our design tools, including icons library, component
                    playground, and design tokens.
                  </GdsText>
                </GdsFlex>
                <GdsLink href="https://seb.io/studio" target="_blank">
                  <IconSquareArrowTopRight slot="trail" size="s" />
                  Open Studio
                </GdsLink>
              </GdsCard>
            </GdsGrid>
          </GdsFlex>
        </GdsFlex>
      </GdsFlex>
    </GdsTheme>
  )
}
