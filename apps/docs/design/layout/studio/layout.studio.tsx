'use client'

import * as Core from '@sebgroup/green-core/react'
import * as Part from './parts'

import './layout.studio.css'

export function Studio({
  children,
  aside,
  title,
  description,
}: {
  children?: React.ReactNode
  aside?: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Core.GdsGrid
      columns="12"
      gap="xl"
      width="100%"
      padding="m"
      max-width="100%"
      box-sizing="border-box"
      className="studio"
    >
      <Part.Sidebar />
      <Core.GdsFlex flex-direction="column" gap="4xl" grid-column="4 / 13">
        <Part.Header title={title} description={description} />
        <Core.GdsGrid columns="12">
          <Core.GdsCard
            flex-direction="column"
            grid-column={aside ? '1 / 9' : '1 / 13'}
            variant="secondary"
            className="studio-page"
          >
            {children}
          </Core.GdsCard>
          {aside && (
            <Core.GdsCard
              variant="secondary"
              grid-column="9 / 13"
              className="studio-aside"
            >
              {aside}
            </Core.GdsCard>
          )}
        </Core.GdsGrid>
      </Core.GdsFlex>
    </Core.GdsGrid>
  )
}
