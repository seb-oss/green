import React from 'react'

import {
  GdsButton,
  GdsCard,
  GdsFlex,
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
      <GdsFlex flex-direction="column" min-height="90vh">
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
            <GdsText tag="code" font-size="display-s">
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
            <GdsCard
              variant="primary"
              flex-direction="column"
              align-items="flex-start"
              padding="l"
              width="70%"
              max-width="800px"
              min-width="320px"
              gap="m"
              margin="xl 0 0 0"
              border-radius="m"
            >
              <GdsFlex flex-direction="column">
                <GdsText font="heading-s" font-weight="regular">
                  Guidelines & Foundation
                </GdsText>
                <GdsText max-width="100%" opacity="0.6" text-wrap="pretty">
                  For comprehensive design guidelines and implementation
                  details, visit:
                </GdsText>
              </GdsFlex>
              <GdsLink href="https://seb.io" target="_blank">
                <IconSquareArrowTopRight
                  slot="trail"
                  size="s"
                ></IconSquareArrowTopRight>
                seb.io
              </GdsLink>
            </GdsCard>
          </GdsFlex>
        </GdsFlex>
      </GdsFlex>
    </GdsTheme>
  )
}
