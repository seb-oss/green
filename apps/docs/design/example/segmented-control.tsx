'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// import { GdsSegment } from '@sebgroup/green-react/core/segment'
// import { GdsSegmentedControl } from '@sebgroup/green-react/core/segmented-control'

const GdsSegment = dynamic(
  () => import('@sebgroup/green-react/src/core/segment'),
  {
    ssr: false,
  },
)

const GdsSegmentedControl = dynamic(
  () => import('@sebgroup/green-react/src/core/segmented-control'),
  {
    ssr: false,
  },
)

const SegmentedControl = () => (
  <>
    <GdsSegmentedControl size="small" value="1">
      <GdsSegment value="1">Segmented</GdsSegment>
      <GdsSegment value="2">Control</GdsSegment>
    </GdsSegmentedControl>
  </>
)

export default SegmentedControl
