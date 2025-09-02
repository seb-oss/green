'use client'

import * as Core from '@sebgroup/green-core/react'

export default function Icons() {
  return (
    <Core.GdsFlex flex-direction="column" gap="6xl" padding="xl">
      <Core.GdsFlex gap="s" justify-content="space-between">
        <Core.GdsText tag="h1">Icons</Core.GdsText>
        <Core.GdsFlex width="max-content" gap="s">
          <Core.GdsInput plain min-width="420px" clearable>
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>
          <Core.GdsFlex width="240px">
            <Core.GdsDropdown plain>
              <Core.GdsOption value="">All Categories</Core.GdsOption>
            </Core.GdsDropdown>
          </Core.GdsFlex>
        </Core.GdsFlex>
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
