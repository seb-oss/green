import React, { ReactNode } from 'react'
import { GdsCard } from '@sebgroup/green-react/core/card/card'
import { GdsFlex } from '@sebgroup/green-react/core/flex/flex'
import { GdsText } from '@sebgroup/green-react/core/text/text'
import { IconCrossLarge } from '@sebgroup/green-react/src/lib/icon/icons/IconCrossLarge'

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
    >
      {children}
      <GdsFlex align-items="center" gap="s" padding="xs m">
        <IconCrossLarge height="14" />
        <GdsText tag="small" font-weight="book">
          {"DON'T"}
        </GdsText>
      </GdsFlex>
    </GdsCard>
  )
}
