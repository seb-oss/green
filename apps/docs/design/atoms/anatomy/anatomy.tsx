// design/atoms/anatomy/anatomy.tsx
'use client'

import * as Core from '@sebgroup/green-core/react'
import { AnatomyItem } from '../../../settings/content/types'

interface AnatomyListProps {
  items: AnatomyItem[]
}

export function Anatomy({ items }: AnatomyListProps) {
  return (
    <Core.GdsFlex gap="m l" flex-wrap="wrap" padding="0 s" width="80%">
      {items.map((item, index) => (
        <Core.GdsFlex key={index} align-items="center" gap="xs">
          <Core.GdsBadge size="small">{(index + 1).toString()}</Core.GdsBadge>
          <Core.GdsText font-size="detail-xs">{item.text}</Core.GdsText>
        </Core.GdsFlex>
      ))}
    </Core.GdsFlex>
  )
}
