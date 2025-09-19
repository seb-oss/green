// design/studio/parts/head.tsx
'use client'

import * as Core from '@sebgroup/green-core/react'

interface Column {
  label?: string
  width?: string
}

interface TokenHeaderProps {
  columns: Column[]
}

export default function Head({ columns }: TokenHeaderProps) {
  return (
    <Core.GdsCard padding="l">
      <Core.GdsGrid
        columns={columns.length.toString()}
        align-items="center"
        gap="xl"
      >
        {columns.map((column, index) => (
          <Core.GdsText key={index} width={column.width}>
            {column.label || ''}
          </Core.GdsText>
        ))}
      </Core.GdsGrid>
    </Core.GdsCard>
  )
}
