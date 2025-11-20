import React from 'react'
import { useOf } from '@storybook/addon-docs/blocks'

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
  const isPattern = context.story.title.startsWith('Patterns/')

  const componentName = context.story.title
    .replace('Components/', '')
    .replace('Patterns/', '')
    .trim()
    .toLowerCase()

  const slug = context.story.componentId
    .replace('components-', '')
    .replace('patterns-', '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

  const sebioUrl = `https://seb.io/${isPattern ? 'pattern' : 'component'}/${slug}`
  return (
    <GdsTheme designVersion="2023">
      <GdsCard
        margin="0 0 2xl 0"
        flex-direction="column; s{row}"
        justify-content="space-between"
        align-items="flex-start; s{center}"
        padding="l l l xl"
        gap="l"
      >
        <GdsFlex align-items="center" gap="m">
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
