// design/studio/parts/token-row.tsx
'use client'

import * as Core from '@sebgroup/green-core/react'
import Copy from './table.copy'

interface Column {
  type:
    | 'name'
    | 'value'
    | 'preview'
    | 'level'
    | 'light'
    | 'dark'
    | 'variable'
    | 'empty'
  content?: React.ReactNode
}

interface TokenRowProps {
  columns: Column[]
  name: string
  copyValue?: string
}

export default function Row({ columns, name, copyValue }: TokenRowProps) {
  return (
    <Core.GdsFlex
      padding="m l"
      border-width="0 0 4xs 0"
      border-color="subtle-01"
    >
      <Core.GdsGrid
        columns={columns.length.toString()}
        gap="xl"
        align-items="center"
      >
        {columns.map((column, index) => {
          switch (column.type) {
            case 'name':
              return (
                <Core.GdsText key={index} text-transform="uppercase">
                  {name}
                </Core.GdsText>
              )
            case 'value':
              return (
                <Core.GdsText key={index} color="neutral-02">
                  {column.content}
                </Core.GdsText>
              )
            case 'preview':
              return <div key={index}>{column.content}</div>
            case 'level':
              return <Core.GdsText key={index}>{column.content}</Core.GdsText>
            case 'light':
            case 'dark':
              return (
                <Core.GdsText key={index} color="neutral-02">
                  {column.content}
                </Core.GdsText>
              )
            case 'variable':
              return <Copy key={index} name={copyValue || name} />
            case 'empty':
              return <div key={index}></div>
            default:
              return <div key={index}>{column.content}</div>
          }
        })}
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
