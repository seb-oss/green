'use client'

import * as Core from '@sebgroup/green-core/react'

export default function Empty({ query }: { query?: string }) {
  return (
    <Core.GdsCard
      justify-content="center"
      align-items="center"
      height="40vh"
      padding="2xl"
    >
      <Core.IconMagnifyingGlass size="xl" />
      <Core.GdsText color="subtle-02">
        No {query} tokens found matching your search
      </Core.GdsText>
    </Core.GdsCard>
  )
}
