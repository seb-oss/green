import React from 'react'
import { useOf } from '@storybook/blocks'

import {
  GdsButton,
  GdsCard,
  GdsFlex,
  GdsText,
  GdsTheme,
  IconBrandGreen,
  IconSquareArrowTopRight,
} from '../../../../dist/libs/core/src/generated/react'

export const SEBIO = () => {
  const context = useOf('story')

  const componentName = context.story.title
    .replace('Components/', '')
    .trim()
    .toLowerCase()

  const slug = context.story.componentId
    .replace('components-', '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

  const sebioUrl = `https://seb.io/component/${slug}`

  return (
    <GdsTheme designVersion="2023">
      <GdsCard
        margin="0 0 2xl 0"
        flex-direction="row"
        justify-content="space-between"
        align-items="center"
        padding="l l l xl"
      >
        <GdsFlex align-items="center" gap="l">
          <IconBrandGreen size="xl" />
          <GdsText>View {componentName} on seb.io</GdsText>
        </GdsFlex>
        <GdsButton
          href={sebioUrl}
          target="_blank"
          rel="noopener noreferrer"
          rank="secondary"
        >
          Open documentation
          <IconSquareArrowTopRight slot="trail" />
        </GdsButton>
      </GdsCard>
    </GdsTheme>
  )
}
