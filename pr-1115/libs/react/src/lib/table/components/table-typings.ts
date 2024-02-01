export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface FilterColumn<T = any> {
  accessor: keyof T
  value: any
}

export type GenericTableRow<T = any> = T & {
  id?: string
  checked?: boolean
  expanded?: boolean
  indeterminate?: boolean
}
