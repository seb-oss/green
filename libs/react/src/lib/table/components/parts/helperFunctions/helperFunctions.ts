import {
  FilterColumn,
  GenericTableRow,
  SortDirection,
} from '../../table-typings'

/**
 * sum the total of columns or cols in a row
 * @param colsLength the length of the columns
 * @param useSelection add a column for selection checkboxes
 * @param useShowActionColumn add another column for action columns
 * @param useGroupBy add another columns for groupby
 */
export function sumCols(
  colsLength: number,
  useSelection?: boolean,
  useShowActionColumn?: boolean,
  useGroupBy?: boolean,
): number {
  let sum = colsLength

  if (useSelection) {
    sum = sum + 1
  }

  if (useGroupBy) {
    sum = sum + 1
  }
  if (useShowActionColumn) {
    sum = sum + 1
  }

  return sum
}

/**
 * sort array of tabke rows
 * @param items table rows array
 * @param columnName the target column name
 * @param sortDirection the sort direction
 * @return Array of tableRow
 */
export function sortArray<T>(
  items: Array<T> = [],
  columnName: keyof T,
  sortDirection: SortDirection,
): Array<T> {
  const languages: Readonly<Array<string>> = window.navigator?.languages || [
    'sw',
    'en',
  ]

  const sortedItems: Array<any> = [...items].sort(
    (firstItem: T, secondItem: T) => {
      let result = 0
      if (sortDirection === SortDirection.ASC) {
        if (
          isNaN(secondItem[columnName] as number) &&
          isNaN(firstItem[columnName] as number)
        ) {
          result = String(firstItem[columnName]).localeCompare(
            String(secondItem[columnName]),
            languages as Array<string>,
            { sensitivity: 'base', ignorePunctuation: true },
          )
        } else {
          result =
            (firstItem[columnName] as number) -
            (secondItem[columnName] as number)
        }
      } else {
        if (
          isNaN(secondItem[columnName] as number) &&
          isNaN(firstItem[columnName] as number)
        ) {
          result = String(secondItem[columnName]).localeCompare(
            String(firstItem[columnName]),
            languages as Array<string>,
            { sensitivity: 'base', ignorePunctuation: true },
          )
        } else {
          result =
            (secondItem[columnName] as number) -
            (firstItem[columnName] as number)
        }
      }
      return result
    },
  )
  return sortedItems
}

/**
 *
 * @param data table data
 * @param filterColumns filter columns
 */
export function filterArrayByColumns<T>(
  data: Array<T>,
  filterColumns: Array<FilterColumn<T>>,
): Array<T> {
  return data.filter((row: T) => {
    return (
      filterColumns.length === 0 ||
      filterColumns.every((column: FilterColumn<T>) => {
        return Array.isArray(column.value)
          ? column.value.length === 0 ||
              column.value.indexOf(row[column.accessor]) > -1
          : row[column.accessor] === column.value
      })
    )
  })
}

/**
 * search text in array of table row
 * @param data the array of table rows
 * @param keyword The keyword to search in the array
 * @param searchFields the target field to search
 */
export function searchTextByColumns<T>(
  data: Array<T>,
  keyword: string,
  searchFields: Array<keyof T>,
): Array<T> {
  return [...data].filter((row: T) => {
    const searchText = String(keyword)

    return searchFields?.some((searchColumn: keyof T) => {
      let result = false
      const regEx = new RegExp(searchText, 'gi')
      if (row[searchColumn] === null || row[searchColumn] === undefined) {
        result = false
      } else if (typeof row[searchColumn] === 'string') {
        result = (row[searchColumn] as string).search(regEx) > -1
      } else if (typeof row[searchColumn] === 'number') {
        result = String(row[searchColumn]).search(regEx) !== -1
      }
      return result
    })
  })
}

/**
 * paginate data
 * @param data table data
 * @param offset page size
 * @param currentPage current page index
 */
export function paginate<T = any>(
  data: Array<T>,
  offset: number,
  currentPage: number,
) {
  if (offset && data?.length > 0) {
    const start: number = currentPage * offset
    const end: number = offset + start

    const currentPageData: Array<T> = data?.slice(start, end)
    return currentPageData
  }
  return data
}

export interface RowSelectOutput<T = any> {
  data: Array<GenericTableRow<T>>
  isAllSelected: boolean
  isIndeterminate: boolean
}

/**
 * on row select
 * @param event input event
 * @param data rows of data
 * @param rowUniqueAccessor row unique accessor
 * @param rowId row id value
 */
export function onRowSelect<T = any>(
  event: React.ChangeEvent<HTMLInputElement>,
  data: Array<GenericTableRow<T>>,
  rowUniqueAccessor: keyof GenericTableRow<T>,
  rowId: string,
): RowSelectOutput<T> {
  const target: HTMLInputElement = event.target
  let isAllSelected: boolean | undefined = true
  let isIndeterminate: boolean | undefined = false
  const newData: Array<GenericTableRow<T>> = data?.map(
    (row: GenericTableRow<T>) => {
      if (row[rowUniqueAccessor] === rowId || rowId === 'all') {
        row.checked = target.checked
      }
      isAllSelected = isAllSelected && row.checked
      isIndeterminate = isIndeterminate || row.checked
      return row
    },
  )
  return {
    data: newData,
    isAllSelected: !!newData && isAllSelected,
    isIndeterminate: isIndeterminate && !isAllSelected,
  }
}
