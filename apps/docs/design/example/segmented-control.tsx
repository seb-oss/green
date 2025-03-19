'use client'

import { GdsSegment, GdsSegmentedControl } from '$/import/components'

const SegmentedControl = () => (
  <GdsSegmentedControl size="small" value="1">
    <GdsSegment value="1">Segmented</GdsSegment>
    <GdsSegment value="2">Control</GdsSegment>
    <GdsSegment value="3">Options</GdsSegment>
  </GdsSegmentedControl>
)

export default SegmentedControl
