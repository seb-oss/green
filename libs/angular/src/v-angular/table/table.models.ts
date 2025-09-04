export type SortingOrder = 'asc' | 'desc'
export type ColumnType = 'numeric' | 'text'

/** Generic type for TableRow data */
export type TableRow = Record<string, any>

/** Options applying to the table header */
export interface TableHeaderOptions {
  /**
   * Defined the text displayed in the table header.
   * @example <th> {{TableColumn.label}} </th>
   */
  label?: string

  /** Adjusts text-alignment. */
  valueType?: ColumnType

  /**
   * Defines whether the table data can be ordered using this column.
   * Setting this to false (or omitting it) will also remove the caret sorting symbol in specified column.
   */
  sortable?: boolean

  /**
   * Defined aria label for a sortable column for the screen reader users.
   */
  ariaLabelSortable?: string

  /**
   * Describes the sorting order of the column.
   * As the table can only be sorted based on one column property, if the property is not undefined,
   * it will instruct the table to sort the data based on this specific column.
   */
  order?: SortingOrder

  /**
   * Dynamically hide or show the label and data on mobile view.
   * This is useful when the table is displayed on a small screen and the data is not relevant.
   */
  hideLabelOnMobile?: boolean
  hidePropertyOnMobile?: boolean

  /**
   * Set to true to make the text bold on mobile view.
   * This is useful when the label is hidden on mobile view but the data is still displayed.
   */
  boldTextOnMobile?: boolean

  /**
   * Used to set label for the column.
   * This is useful when the column has an additional information that needs to be shown.
   */
  columnLabel?: string
}

/** Options applying to table rows */
export interface TableRowOptions {
  /** Adjusts text-alignment. */
  valueType?: ColumnType

  /** Used to prevent the default click event to be emitted when clicking in cells for specified column */
  preventDefaultClickEvent?: boolean
}

/**
 * Interface used to describe how a table column should be displayed. This includes the text and class used for the table header,
 * and the data for each table row.
 */
export interface TableColumn<T extends TableRow>
  extends TableHeaderOptions,
    TableRowOptions {
  /**
   * The property name used to identify what value to display in a cell for that column.
   * @example <tr *ngFor="let data in dataList"> <td>{{ data[TableColumn.property] }}</td> </tr>
   */
  property: keyof T
}

/**
 * Interface describing event emitted on reordering the table.
 */
export interface OrderBy<T extends TableRow> {
  property: keyof T
  order: SortingOrder | undefined
}

/**
 * Interface describing the aria labels for sorting in the table.
 * Aria label attributes are used for a screen reader to describe the sorting state of the table.
 */
export interface ariaLabelsOrderBy {
  asc: string
  desc: string
}
