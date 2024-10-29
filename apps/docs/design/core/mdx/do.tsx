'use client'

import React, { ReactNode } from 'react'
import dynamic from 'next/dynamic'

const GdsCard = dynamic(
  () => import('@sebgroup/green-react/core/card').then((mod) => mod.GdsCard),
  {
    ssr: false,
  },
)

const GdsFlex = dynamic(
  () => import('@sebgroup/green-react/core/flex').then((mod) => mod.GdsFlex),
  {
    ssr: false,
  },
)

const GdsText = dynamic(
  () => import('@sebgroup/green-react/core/text').then((mod) => mod.GdsText),
  {
    ssr: false,
  },
)

const IconCheckmark = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconCheckmark').then(
      (mod) => mod.IconCheckmark,
    ),
  {
    ssr: false,
  },
)

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
      padding="0"
      overflow="hidden"
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
