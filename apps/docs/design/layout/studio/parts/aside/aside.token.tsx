// studio/parts/aside/token-aside.tsx
'use client'

import * as Core from '@sebgroup/green-core/react'
import { TokenPage } from '../../data/studio.types'

interface TokenAsideProps {
  page: TokenPage
  itemKey: string
}

export function TokenAside({ page, itemKey }: TokenAsideProps) {
  const currentItem = page.tokens
    ?.flatMap((group) => group.items)
    .find((item) => item.token === itemKey)

  if (!currentItem) return null

  return (
    <Core.GdsFlex flex-direction="column" gap="m">
      {currentItem.token}
    </Core.GdsFlex>
  )
}
