import React, { ReactNode } from 'react'
import { GdsCard } from '@sebgroup/green-react/core/card/card'
import { GdsFlex } from '@sebgroup/green-react/core/flex/flex'
import { GdsText } from '@sebgroup/green-react/core/text/text'
import { IconCheckmark } from '@sebgroup/green-react/src/lib/icon/icons/IconCheckmark'

type DoProps = {
  children: ReactNode
}

export default function Do({ children }: DoProps) {
  return (
    <GdsCard
      border="4xs/#ecf6ed"
      border-radius="s"
      background="positive"
      height="max-content"
    >
      {children}
      <GdsFlex
        background="positive"
        align-items="center"
        gap="s"
        padding="xs m"
      >
        <IconCheckmark height="14" />
        <GdsText tag="small" font-weight="book">
          DO
        </GdsText>
      </GdsFlex>
    </GdsCard>
  )
}
