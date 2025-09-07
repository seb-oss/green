'use client'

import * as Core from '@sebgroup/green-core/react'
import * as Part from './parts'

export function Studio({
  children,
  aside,
}: {
  children?: React.ReactNode
  aside?: React.ReactNode
}) {
  return (
    <Core.GdsGrid columns="12" gap="xl" width="100%">
      <Part.Sidebar />
      <Core.GdsFlex flex-direction="column" gap="xl" grid-column="4 / 12">
        <Part.Header />
        <Core.GdsGrid columns="12">
          <Core.GdsFlex
            flex-direction="column"
            grid-column={aside ? '0 / 8' : '0 / 13'}
          >
            {children}
          </Core.GdsFlex>
          {aside && <Core.GdsFlex grid-column="9 / 13">{aside}</Core.GdsFlex>}
        </Core.GdsGrid>
      </Core.GdsFlex>
    </Core.GdsGrid>
  )
}
