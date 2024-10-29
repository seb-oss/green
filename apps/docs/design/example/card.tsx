'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsCard = dynamic(
  () => import('@sebgroup/green-react/core/card').then((mod) => mod.GdsCard),
  {
    ssr: false,
  },
)

const Card = () => (
  <>
    <GdsCard shadow="m" variant="secondary">
      Secondary
    </GdsCard>
    <GdsCard shadow="l" variant="tertiary">
      Tertiary
    </GdsCard>
  </>
)

export default Card
