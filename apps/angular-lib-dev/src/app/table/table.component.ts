import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { TableHeaderListItem, TableRow } from '@sebgroup/green-angular'

import '@sebgroup/green-core/components/table/index.js'

import { Types } from '@sebgroup/green-core/components/table'

const tableData: TableRow[] = [
  {
    rowId: 0,
    FullName:
      "<a href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt=''><span>ABB Ltd</span></a>",
    PreLastTradedAt: 397.3,
    ChangePercent: '−1,39%',
    Change: 5,
  },
  {
    rowId: 1,
    FullName:
      "<a href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt=''><span>H&M</span></a>",
    PreLastTradedAt: 200.3,
    ChangePercent: '−1,39%',
    Change: 5,
  },
  {
    rowId: 2,
    FullName:
      "<a  href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt=''><span>SBB</span></a>",
    PreLastTradedAt: 100.3,
    ChangePercent: '−1,39%',
    Change: 5,
  },
]

@Component({
  templateUrl: './table.component.html',
  standalone: false,
})
export class TableComponent {
  rows: TableRow[] = tableData

  headerList: TableHeaderListItem[] = [
    {
      tableKeySelector: 'FullName',
      label: 'Namn',
      valueType: 'custom-html',
      main: true,
    },
    {
      tableKeySelector: 'PreLastTradedAt',
      label: 'Senast',
      valueType: 'streamSign',
    },
    {
      tableKeySelector: 'ChangePercent',
      label: 'Utv. %',
      valueType: 'sign',
    },
    {
      tableKeySelector: 'Change',
      label: 'Utv. (SEK)',
      valueType: 'sign',
    },
  ]

  className = 'cell-table-container d-block stacked-stock-list stacked-indent'

  arrow = true

  coreTableColumns: Types.Column[] = [
    { key: 'PreLastTradedAt', label: 'Senast', sortable: true },
    { key: 'ChangePercent', label: 'Utv. %' },
    { key: 'Change', label: 'Utv. (SEK)' },
  ]

  dataLoadKey = 'initial'

  addTableRow(): void {
    this.rows = [
      ...this.rows,
      {
        rowId: 3,
        FullName:
          "<a href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt=''><span>New Company</span></a>",
        PreLastTradedAt: 150.0,
        ChangePercent: '+0,50%',
        Change: 2,
      },
    ]

    this.dataLoadKey = `key-${Date.now()}`
  }

  selectedRows: TableRow[] = []

  handleTableSelect(event: any): void {
    this.selectedRows = event.detail.selectedData
  }

  coreTableDataProvider = async (
    request: Types.TableRequest,
  ): Promise<Types.TableResponse<TableRow>> => {
    console.log('Data request', request)
    let preparedData = [...this.rows]
    if (request.sortColumn) {
      preparedData = preparedData.sort((a, b) => {
        const aValue = a[request.sortColumn!]
        const bValue = b[request.sortColumn!]
        if (aValue < bValue) return request.sortDirection === 'asc' ? -1 : 1
        if (aValue > bValue) return request.sortDirection === 'asc' ? 1 : -1
        return 0
      })
    }
    return {
      rows: preparedData,
      total: preparedData.length,
    }
  }

  rowClicked = (row: TableRow): void => {
    console.log('clicked', row)
  }
}
