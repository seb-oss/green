'use client'

import React, { ReactNode } from 'react'
import { GdsCard, GdsFlex, GdsText } from '$/import/components'
import { IconCrossLarge } from '$/import/icons'

type DontProps = {
  children: ReactNode
  caption: string
}

export default function Dont({ children, caption }: DontProps) {
  return (
    <GdsCard
      border="3xs/#fcecea"
      border-radius="s"
      background="negative"
      height="max-content"
      level="2"
      padding="0"
      overflow="hidden"
    >
      {children}
      <GdsFlex color="negative" align-items="center" gap="s" padding="xs m">
        <IconCrossLarge width={14} stroke={2} />
        <GdsText font-size="details-xs" font-weight="book">
          {caption ? caption : "Don't"}
        </GdsText>
      </GdsFlex>
    </GdsCard>
  )
}
