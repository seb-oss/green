'use client'

import React, { ReactNode } from 'react'
import { GdsCard, GdsFlex, GdsText } from '$/import/components'
import { IconCrossLarge } from '$/import/icons'

type DontProps = {
  children: ReactNode
}

export default function Dont({ children }: DontProps) {
  return (
    <GdsCard
      border="4xs/#fcecea"
      border-radius="s"
      background="negative"
      height="max-content"
      level="2"
      padding="0"
      overflow="hidden"
    >
      {children}
      <GdsFlex align-items="center" gap="s" padding="xs m">
        <IconCrossLarge />
        <GdsText tag="small" font-weight="book">
          {"DON'T"}
        </GdsText>
      </GdsFlex>
    </GdsCard>
  )
}
