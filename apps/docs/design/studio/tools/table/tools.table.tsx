'use client'

import { Types } from '@sebgroup/green-core/components/table'
import * as Core from '@sebgroup/green-core/react'

export default function MinimalTable() {
  // 1. Single Column
  const columns: Types.Column[] = [
    { key: 'col1', label: 'Simple Column', sortable: true },
  ]

  // 2. Data Provider (Single Row)
  const dataProvider = async (
    req: Types.Request,
  ): Promise<Types.Response<any>> => {
    return {
      rows: [{ col1: 'Simple Row' }, { col1: 'Simple Row Data' }],
      total: 2,
    }
  }

  return (
    <Core.GdsTheme>
      <Core.GdsTable
        columns={columns}
        data={dataProvider}
        rows={4}
        responsive
        searchable
        settings
      />
    </Core.GdsTheme>
  )
}
