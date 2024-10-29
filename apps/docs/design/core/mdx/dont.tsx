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
      padding="0"
      overflow="hidden"
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
