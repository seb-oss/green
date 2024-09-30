import React, { ReactNode } from 'react'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  SortedColumn,
  sortArray,
  onRowSelect,
  TableHeaderCellProps,
  GenericTableRow,
} from '../components'

interface SuperHeroData {
  id: ReactNode
  firstName: ReactNode
  lastName: ReactNode
  superHero: ReactNode
  rowContentDetails?: GenericTableRow<SuperHeroData>[]
}

type SuperHeroRowData = GenericTableRow<SuperHeroData>

type ExpandedSuperHeroRowAccessor = Omit<SuperHeroRowData, 'rowContentDetails'>

type SuperHeroColumnDataT = Omit<
  TableHeaderCellProps<SuperHeroRowData>,
  'ref'
> &
  React.RefAttributes<HTMLTableCellElement>

export const columnData: SuperHeroColumnDataT[] = [
  {
    children: '#',
    accessor: 'id',
  },
  {
    children: 'First name',
    accessor: 'firstName',
  },
  {
    children: 'Last name',
    accessor: 'lastName',
  },
  {
    children: 'Superhero',
    accessor: 'superHero',
  },
]

export const rowData: SuperHeroRowData[] = [
  {
    id: '1',
    firstName: 'Peter',
    lastName: 'Parker',
    superHero: 'Spider-man',
    expanded: false,
    checked: false,
    rowContentDetails: [
      {
        id: '1',
        firstName: 'Peter',
        lastName: 'Parker',
        superHero: 'Spider-man',
      },
    ],
  },
  {
    id: '2',
    firstName: 'John',
    lastName: 'Wayne',
    superHero: 'Batman',
    expanded: false,
    checked: false,
    rowContentDetails: [
      {
        id: '1',
        firstName: 'Peter',
        lastName: 'Parker',
        superHero: 'Spider-man',
      },
    ],
  },
  {
    id: '3',
    firstName: 'Bruce',
    lastName: 'Banner',
    superHero: 'Hulk',
    expanded: false,
    checked: false,
    rowContentDetails: [
      {
        id: '1',
        firstName: 'Peter',
        lastName: 'Parker',
        superHero: 'Spider-man',
      },
    ],
  },
]

export const SortableTable = () => {
  const [data, setData] = React.useState<SuperHeroRowData[]>(rowData)
  const [sortedColumn, setSortedColumn] = React.useState<SortedColumn | null>(
    null,
  )

  const onSort = (newSortedColumn: SortedColumn) => {
    setSortedColumn(newSortedColumn)
    newSortedColumn &&
      setData(
        sortArray(
          data,
          newSortedColumn.accessor as keyof SuperHeroRowData,
          newSortedColumn.sortDirection,
        ),
      )
  }

  return (
    <Table sortedColumn={sortedColumn} onSort={onSort}>
      <TableHeader>
        <TableRow>
          {columnData.map((column: SuperHeroColumnDataT, i: number) => (
            <TableHeaderCell key={i} {...column} />
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: SuperHeroRowData, i: number) => (
          <TableRow key={i}>
            {columnData.map((column, columnIndex) => (
              <TableCell key={columnIndex}>
                {item[column.accessor as keyof ExpandedSuperHeroRowAccessor]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export const SelectableTable = () => {
  const [data, setData] = React.useState<SuperHeroRowData[]>(rowData)
  const [selectAllIndicator, setSelectAllIndicator] = React.useState({
    checked: false,
    indeterminate: false,
  })

  const onSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowUniqueKey: string,
  ) => {
    const {
      data: newData,
      isAllSelected,
      isIndeterminate,
    } = onRowSelect(event, data, 'id', rowUniqueKey)
    setSelectAllIndicator({
      checked: isAllSelected,
      indeterminate: isIndeterminate,
    })
    setData(newData)
  }

  return (
    <Table onRowSelect={onSelect}>
      <TableHeader>
        <TableRow {...selectAllIndicator}>
          {columnData.map((column: SuperHeroColumnDataT, i: number) => (
            <TableHeaderCell key={i} {...column} />
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: SuperHeroRowData, i: number) => (
          <TableRow key={i} uniqueKey={item.id} checked={item.checked}>
            {columnData.map(
              (column: SuperHeroColumnDataT, columnIndex: number) => (
                <TableCell key={columnIndex}>
                  {item[column.accessor as keyof ExpandedSuperHeroRowAccessor]}
                </TableCell>
              ),
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export const ExpandableTable = () => {
  const [data, setData] = React.useState<SuperHeroRowData[]>(rowData)

  const onRowExpand = (expanded: boolean, rowId: string) => {
    setData((prevData: SuperHeroRowData[]) => {
      return prevData.map((item: SuperHeroRowData) => {
        if (item.id === rowId) {
          return { ...item, expanded }
        }
        return item
      })
    })
  }

  return (
    <Table onRowExpand={onRowExpand}>
      <TableHeader>
        <TableRow>
          {columnData.map((column: SuperHeroColumnDataT, i: number) => (
            <TableHeaderCell key={i} {...column} />
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: SuperHeroRowData, i: number) => (
          <React.Fragment key={i}>
            <TableRow uniqueKey={item.id} isExpanded={item.expanded}>
              {columnData.map(
                (column: SuperHeroColumnDataT, columnIndex: number) => (
                  <TableCell key={columnIndex}>
                    {
                      item[
                        column.accessor as keyof ExpandedSuperHeroRowAccessor
                      ]
                    }
                  </TableCell>
                ),
              )}
            </TableRow>
            {item.rowContentDetails?.map((rowItem: SuperHeroRowData) => (
              <TableRow
                isSubRow
                key={rowItem.id}
                uniqueKey={rowItem.id}
                isExpanded={rowItem.expanded}
              >
                {columnData.map(
                  (column: SuperHeroColumnDataT, columnIndex: number) => (
                    <TableCell key={columnIndex}>
                      {
                        rowItem[
                          column.accessor as keyof ExpandedSuperHeroRowAccessor
                        ]
                      }
                    </TableCell>
                  ),
                )}
              </TableRow>
            ))}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  )
}
