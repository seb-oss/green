import React, { ReactNode } from 'react'
import { GdsFlex, GdsText } from '$/import/components'

type LangProps = {
  children: ReactNode
}

export default function LangSE({ children }: LangProps) {
  return (
    <span lang="se">
      <GdsFlex flex-direction="column" gap="0" margin="xs 0">
        <GdsText color="secondary" font-size="detail-xs" font-weight="book">
          Svenska
        </GdsText>
        {children}
      </GdsFlex>
    </span>
  )
}
