import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core'

import {
  TableHeaderListItem,
  TableHeaderListValueType,
  TableRow,
} from './cell-table.types'

@Component({
    selector: 'ngg-cell-table',
    templateUrl: './cell-table.component.html',
    styleUrls: ['./cell-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class NggCellTableComponent {
  @ViewChildren('items') items: QueryList<ElementRef> =
    new QueryList<ElementRef>()

  /** Cell min-width to force same width on small screens */
  @Input() minWidth?: number

  /** Make the most left element wrap */
  @Input() overflowReverse = false

  /** Element class name */
  @Input() className?: string

  /** List of table headers */
  @Input() headerList: TableHeaderListItem[] = []

  /** List of data */
  @Input() rows: TableRow[] = []

  /** Make rows clickable and add arrow to the right */
  @Input() clickableRows = false

  /** Label for the chevron of clickable rows */
  @Input() clickLabel = 'View details'

  /** Callback when a row is clicked */
  @Output() rowClicked: EventEmitter<TableRow> = new EventEmitter()

  // ------------- EVENTS ------------------
  /**
   * handles the logic for when a row is clicked
   * @param {TableRowClickedEvent} value the TableRowClickedEvent
   */
  handleClickRow = (value: TableRow): void => {
    if (this.clickableRows) this.rowClicked.emit(value)
  }

  getValueTypeFromMain = (): TableHeaderListValueType => {
    const getMain = this.headerList.find((x) => x.main)
    if (getMain) return getMain.valueType || ''
    return ''
  }

  getTableHeaderListValueFromNonMain = (
    header: TableHeaderListItem,
  ): TableHeaderListValueType => {
    if (header.valueType) return header.valueType || ''
    return ''
  }

  mainHeader = (row: TableRow) => {
    const getMain = this.headerList.find((x) => x.main)
    if (row && getMain) {
      return {
        value: row[getMain.tableKeySelector],
        valueType: getMain.valueType || 'string',
        tableKeySelector: getMain.tableKeySelector,
      }
    }
    return {
      value: '-',
      valueType: 'string',
      tableKeySelector: '-',
    }
  }

  headerNoneMain = (headers: TableHeaderListItem[]) => {
    if (this.overflowReverse) return headers.filter((x) => !x.main).reverse()
    return headers.filter((x) => !x.main)
  }

  getTableKeySelector = (row: TableRow) => {
    return this.mainHeader(row).tableKeySelector + row.rowId
  }

  // ------- TRACKBY FOR STREAM ------------
  trackByRowId(_: any, b: TableRow) {
    return b.rowId
  }
  KeySelector(_: any, b: TableHeaderListItem) {
    return b.tableKeySelector
  }
}
