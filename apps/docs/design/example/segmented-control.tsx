'use client'

import React from 'react'
import { GdsSegmentedControl } from '@sebgroup/green-react/core/segmented-control'
import { GdsSegment } from '@sebgroup/green-react/core/segment'

const SegmentedControl = () => (
  <>
    <GdsSegmentedControl size="small" value="1">
      <GdsSegment value="1">Segmented</GdsSegment>
      <GdsSegment value="2">Control</GdsSegment>
    </GdsSegmentedControl>
  </>
)

export default SegmentedControl
