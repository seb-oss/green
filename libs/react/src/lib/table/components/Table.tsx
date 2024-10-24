import React from 'react'
import classnames from 'classnames'

import {
  SortedColumn,
  TableContext,
  TableState,
} from './context/TableContextProvider'

export type TableProps = JSX.IntrinsicElements['table'] & {
  /** callback when row is selected */
  onRowSelect?: (
    event: React.ChangeEvent<HTMLInputElement>,
    rowKey: string,
  ) => void
  /** callback when row is expanded */
  onRowExpand?: (isExpanded: boolean, rowKey: string) => void
  /** callback when column is sorted */
  onSort?: (sortedColumn: SortedColumn) => void
  /** preset sorted column */
  sortedColumn?: SortedColumn | null
}

export const Table = React.memo(
  React.forwardRef(
    (
      {
        onRowSelect,
        onRowExpand,
        onSort,
        sortedColumn = null,
        className,
        ...props
      }: TableProps,
      ref: React.ForwardedRef<HTMLTableElement>,
    ): React.ReactElement<void> => {
      const [tableState, setTableState] = React.useState<TableState>({
        expandedRows: [],
        sortedColumn,
      })
      return (
        <TableContext.Provider
          value={{
            tableState,
            onSort,
            onRowSelect,
            onRowExpand,
            setTableState,
          }}
        >
          <table
            {...props}
            className={classnames('table', className)}
            ref={ref}
          />
        </TableContext.Provider>
      )
    },
  ),
)
