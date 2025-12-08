'use client'

import * as Core from '@sebgroup/green-core/react'
import TableConfig from './table.config'
import { useTable } from './table.context'
import { userDataProvider } from './table.data'

function TableContent() {
  const { columns, tableSettings } = useTable()

  return (
    <Core.GdsTheme>
      <Core.GdsGrid columns="12" gap="m" width="100%" height="100vh">
        <Core.GdsFlex grid-column="1/10" flex-direction="column" gap="s">
          <Core.GdsFlex flex-direction="column">
            {columns.length === 0 ? (
              <Core.GdsFlex
                align-items="center"
                justify-content="center"
                height="100%"
              >
                <Core.GdsFlex
                  flex-direction="column"
                  gap="s"
                  align-items="center"
                >
                  <Core.GdsText font="heading-s">
                    No columns selected
                  </Core.GdsText>
                  <Core.GdsText font="detail-book-m" color="secondary">
                    Select at least one column to display the table
                  </Core.GdsText>
                </Core.GdsFlex>
              </Core.GdsFlex>
            ) : (
              <Core.GdsTable
                columns={columns as any}
                data={userDataProvider}
                density={tableSettings.density}
                variant={tableSettings.variant}
                selectable={tableSettings.selectable}
                responsive={tableSettings.responsive}
                plain={tableSettings.plain}
                searchable={tableSettings.searchable}
                settings={tableSettings.settings}
                striped={tableSettings.striped}
                nocache={tableSettings.nocache}
                height={tableSettings.height}
                rows={tableSettings.rows}
                page={tableSettings.page}
                options={[5, 10, 20, 50, 100]}
              />
            )}
          </Core.GdsFlex>
        </Core.GdsFlex>

        <Core.GdsFlex grid-column="10/-1" flex-direction="column" gap="s">
          <Core.GdsFlex gap="s">
            <Core.GdsButton
              rank="tertiary"
              size="small"
              onClick={() => {
                const url = window.location.href
                navigator.clipboard.writeText(url)
              }}
            >
              Copy URL
            </Core.GdsButton>
            <Core.GdsButton rank="tertiary" size="small">
              Reset
            </Core.GdsButton>
            <Core.GdsButton rank="tertiary" size="small">
              Code
            </Core.GdsButton>
          </Core.GdsFlex>

          <TableConfig />
        </Core.GdsFlex>
      </Core.GdsGrid>
    </Core.GdsTheme>
  )
}

export default function Table() {
  return <TableContent />
}
