'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsGrid = dynamic(
  () => import('@sebgroup/green-react/core/grid').then((mod) => mod.GdsGrid),
  {
    ssr: false,
  },
)
const GdsCard = dynamic(
  () => import('@sebgroup/green-react/core/card').then((mod) => mod.GdsCard),
  {
    ssr: false,
  },
)

const Card = () => (
  <GdsGrid columns="3" gap="xs">
    <GdsCard padding="s" shadow="m" variant="secondary">
      01
    </GdsCard>
    <GdsCard padding="s" shadow="m" variant="secondary">
      02
    </GdsCard>
    <GdsCard padding="s" shadow="m" variant="secondary">
      03
    </GdsCard>
    <GdsCard padding="s" shadow="m" variant="secondary">
      04
    </GdsCard>
    <GdsCard padding="s" shadow="m" variant="secondary">
      05
    </GdsCard>
    <GdsCard padding="s" shadow="m" variant="secondary">
      06
    </GdsCard>
  </GdsGrid>
)

export default Card
