'use client'

import * as Core from '@sebgroup/green-core/react'

export default function ColorPreview({ color }: { color?: string }) {
  return (
    <Core.GdsDiv
      width="32px"
      height="32px"
      border-radius="max"
      border-color="inverse"
      border-width="3xs"
      border-style="solid"
      box-shadow="m"
      style={{
        background: color ? color : '',
      }}
    />
  )
}
