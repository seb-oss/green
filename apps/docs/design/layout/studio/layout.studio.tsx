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
    <Core.GdsGrid
      columns="12"
      gap="xl"
      width="100%"
      padding="m"
      max-width="100%"
      box-sizing="border-box"
    >
      <Part.Sidebar />
      <Core.GdsFlex flex-direction="column" gap="4xl" grid-column="4 / 13">
        <Part.Header />
        <Core.GdsGrid columns="12">
          <Core.GdsCard
            flex-direction="column"
            grid-column={aside ? '1 / 9' : '1 / 13'}
            variant="secondary"
          >
            {children}
          </Core.GdsCard>
          {aside && (
            <Core.GdsCard variant="secondary" grid-column="9 / 13">
              {aside}
            </Core.GdsCard>
          )}
        </Core.GdsGrid>
      </Core.GdsFlex>
    </Core.GdsGrid>
  )
}
