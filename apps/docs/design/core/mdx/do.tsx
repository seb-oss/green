'use client'

import React, { ReactNode } from 'react'
import { GdsCard, GdsFlex, GdsText } from '$/import/components'
import { IconCheckmark } from '$/import/icons'

type DoProps = {
  children: ReactNode
  caption: string
}

export default function Do({ children, caption }: DoProps) {
  return (
    <GdsCard
      border="3xs/#ecf6ed"
      border-radius="s"
      background="primary"
      height="max-content"
      padding="0"
      overflow="hidden"
    >
      {children}
      <GdsFlex
        background="positive"
        align-items="center"
        gap="s"
        padding="xs m"
        color="positive"
      >
        <IconCheckmark width={14} stroke={2} />
        <GdsText font-size="details-xs" font-weight="book">
          {caption ? caption : 'Do'}
        </GdsText>
      </GdsFlex>
    </GdsCard>
  )
}
