// eslint-disable-next-line
'use client'

import React, { ReactNode } from 'react'
import dynamic from 'next/dynamic'

// import { GdsCard } from '@sebgroup/green-react/core/card/card'
// import { GdsFlex } from '@sebgroup/green-react/core/flex/flex'
// import { GdsText } from '@sebgroup/green-react/core/text/text'
// import { IconCrossLarge } from '@sebgroup/green-react/src/lib/icon/icons/IconCrossLarge'

const GdsCard = dynamic(() => import('@sebgroup/green-react/src/core/card'), {
  ssr: false,
})

const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false,
})

const GdsText = dynamic(() => import('@sebgroup/green-react/src/core/text'), {
  ssr: false,
})

const IconCrossLarge = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconCrossLarge').then(
      (mod) => mod.IconCrossLarge,
    ),
  {
    ssr: false,
  },
)

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
