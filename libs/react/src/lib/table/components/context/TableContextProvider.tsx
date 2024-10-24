import React from 'react'

import { SortDirection } from '../table-typings'

export interface SortedColumn<T = any> {
  accessor?: keyof T
  sortDirection: SortDirection
}

export interface TableState {
  sortedColumn: SortedColumn | null
  expandedRows: Array<string>
}

export type TableContextType = {
  tableState: TableState
  setTableState: (newState: TableState) => void
  onRowSelect?: (
    event: React.ChangeEvent<HTMLInputElement>,
    rowKey: string,
  ) => void
  onRowExpand?: (isExpanded: boolean, rowKey: string) => void
  onSort?: (sortedColumn: SortedColumn) => void
}

const defaultContext: any = {
  tableState: {
    sortedColumn: null,
    expandedRows: [],
  },
  setTableState: null,
  onRowSelect: null,
  onRowExpand: null,
  onSort: null,
}

export const TableContext: React.Context<TableContextType> =
  React.createContext(defaultContext)

export const useTableContext = () => {
  return React.useContext(TableContext)
}
