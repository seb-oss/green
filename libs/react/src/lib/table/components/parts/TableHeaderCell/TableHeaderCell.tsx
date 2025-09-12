import React, { JSX } from 'react'
import classnames from 'classnames'

import {
  SortedColumn,
  TableContextType,
  useTableContext,
} from '../../context/TableContextProvider'
import { SortDirection } from '../../table-typings'

export type TableHeaderCellProps<T = any> = JSX.IntrinsicElements['th'] & {
  accessor?: keyof T
  disableSort?: boolean
  sortDirection?: SortDirection
  children?: React.ReactNode
}

const TableHeaderCell = React.forwardRef(
  (
    {
      accessor,
      disableSort,
      className,
      sortDirection,
      onClick,
      children,
      ...props
    }: TableHeaderCellProps,
    ref: React.ForwardedRef<HTMLTableCellElement>,
  ) => {
    const tableContext: TableContextType = useTableContext()
    const [sortedColumn, setSortedColumn] = React.useState<SortedColumn | null>(
      null,
    )
    const [sortOrder, setSortOrder] = React.useState<
      SortDirection | null | undefined
    >(SortDirection.ASC)
    const [sortable, setSortable] = React.useState<boolean>(false)

    /**
     * get latest sort direction
     * @param oldSortDirection current sort direction
     */
    const getSortDirection = (
      oldSortDirection: SortDirection,
    ): SortDirection => {
      return oldSortDirection === SortDirection.ASC
        ? SortDirection.DESC
        : SortDirection.ASC
    }

    /** on column sort */
    const onSort = React.useCallback(() => {
      const newSortedColumn: SortedColumn =
        sortedColumn && sortedColumn.accessor === accessor
          ? {
              ...sortedColumn,
              sortDirection: getSortDirection(sortedColumn.sortDirection),
            }
          : { accessor, sortDirection: SortDirection.DESC }
      tableContext.setTableState({
        ...tableContext.tableState,
        sortedColumn: newSortedColumn,
      })
      !!newSortedColumn && tableContext?.onSort?.(newSortedColumn)
    }, [sortedColumn, tableContext])

    const getCurrentSortValue = React.useCallback(() => {
      if (!sortable || !sortOrder) {
        return 'none'
      }
      if (sortOrder === SortDirection.ASC) {
        return 'ascending'
      }
      return 'descending'
    }, [sortable, sortOrder])

    React.useEffect(() => {
      setSortable(!disableSort && !!tableContext.onSort)
    }, [disableSort, tableContext.onSort])

    React.useEffect(() => {
      setSortedColumn(tableContext.tableState.sortedColumn)
    }, [tableContext.tableState.sortedColumn])

    React.useEffect(() => {
      if (sortDirection && tableContext.onSort) {
        tableContext.setTableState({
          ...tableContext.tableState,
          sortedColumn: { accessor, sortDirection },
        })
      }
    }, [sortDirection, tableContext.onSort])

    React.useEffect(() => {
      setSortOrder(
        sortable && sortedColumn?.accessor === accessor
          ? sortedColumn?.sortDirection
          : null,
      )
    }, [sortable, sortedColumn])

    return (
      <th
        className={classnames(className, { 'gds-sortable': sortable })}
        onClick={sortable ? onSort : onClick}
        ref={ref}
        aria-sort={getCurrentSortValue()}
        {...props}
      >
        {sortable ? (
          <button className="gds-table-sort"> {children}</button>
        ) : (
          children
        )}
      </th>
    )
  },
)

TableHeaderCell.displayName = 'TableHeaderCell'

export { TableHeaderCell }
