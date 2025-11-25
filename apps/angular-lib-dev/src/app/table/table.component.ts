import { Component } from '@angular/core'

import { TableHeaderListItem, TableRow } from '@sebgroup/green-angular'

@Component({
    templateUrl: './table.component.html',
    standalone: false
})
export class TableComponent {
  rows: TableRow[] = [
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

  rowClicked = (row: TableRow): void => {
    console.log('clicked', row)
  }
}
