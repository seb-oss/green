export default class Table {
  constructor(table: { data: TableRow[]; header: TableHeaderListItem[] }) {
    this.data = table.data
    this.header = table.header
  }
  data: TableRow[]
  header: TableHeaderListItem[]
}

/** The type of a data the values in a column represent  */
export type TableHeaderListValueType =
  | 'number'
  | 'string'
  | 'date'
  | 'datetime'
  | 'bool'
  | 'custom-html'
  | 'sign'
  | 'streamSign'
  | ''

/** Table Header List Item Interface */
export interface TableHeaderListItem<
  T extends Record<string, unknown> = Record<string, unknown>,
> {
  /** The label displayed */
  label: string
  /** the key selector corresponding to to the TableList Item which this column is targeting */
  // tableKeySelector: keyof T;
  tableKeySelector: string
  /** the type of value: string, date or number */
  valueType?: TableHeaderListValueType

  /** the main field for stacked table */
  main?: boolean
}

export interface TableRow {
  [prop: string]: any
  rowId: string | number
}

/** The information on the currently selected sort: column name, type and asc/desc  */
export interface SortInfo<
  T extends Record<string, unknown> = { [k: string]: any },
> {
  /** column name */
  column: keyof T
  /** is ascending (false for descending) */
  isAscending: boolean
}
