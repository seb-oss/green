'use client'

import * as Core from '@sebgroup/green-core/react'

export default function Anatomy() {
  return (
    <Core.GdsFlex
      gap="m l"
      flex-wrap="wrap"
      padding="0 s"
      width="80%"
      margin="0 0 l 0"
    >
      <Core.GdsCard>COMPONENT HERE</Core.GdsCard>
      <Core.GdsFlex>Item Item two</Core.GdsFlex>
    </Core.GdsFlex>
  )
}
