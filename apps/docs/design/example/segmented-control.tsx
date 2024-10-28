'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsSegment = dynamic(
  () =>
    import('@sebgroup/green-react/core/segment').then((mod) => mod.GdsSegment),
  {
    ssr: false,
  },
)

const GdsSegmentedControl = dynamic(
  () =>
    import('@sebgroup/green-react/core/segmented-control').then(
      (mod) => mod.GdsSegmentedControl,
    ),
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
