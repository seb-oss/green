// app/not-found.tsx
'use client'

import * as Core from '@sebgroup/green-core/react'

export default function NotFound() {
  return (
    <Core.GdsCard
      justify-content="center"
      align-items="center"
      min-height="100%"
      flex-direction="column"
      gap="l"
    >
      <Core.GdsText text-align="center" font="display-xl">
        404
      </Core.GdsText>
      <Core.GdsFlex flex-direction="column" gap="0">
        <Core.GdsText text-align="center" tag="h1">
          Page Not Found
        </Core.GdsText>
        <Core.GdsText text-align="center" tag="p">
          {`The page you're looking for doesn't exist.`}
        </Core.GdsText>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
