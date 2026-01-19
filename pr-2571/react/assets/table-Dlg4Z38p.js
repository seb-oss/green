import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-Dl6dlu0m.js";import{M as m,S as t,a as o}from"./blocks-Dt9rWmDI.js";import{T as p,a as u,b as r,c as b,d as x,e as h}from"./Table-CT4rtvHZ.js";import{c as l,r as w,T as S,D as T,S as R,a as D,E as j}from"./table.stories-B2KQSBv7.js";import"./iframe-CyU874dF.js";import"./index-DU-7n0kW.js";import"./index-DNVMsWRP.js";const E=()=>e.jsx("div",{className:"my-5",children:e.jsxs(p,{children:[e.jsx(u,{children:e.jsx(r,{children:l.map((a,n)=>e.jsx(b,{...a},n))})}),e.jsx(x,{children:w.map((a,n)=>e.jsx(r,{children:l.map((d,i)=>e.jsx(h,{children:a[d.accessor]},i))},n))})]})});function s(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...c(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:S}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsx(n.p,{children:"Table Component"}),`
`,e.jsx(t,{of:T}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
} from '@sebgroup/green-react/src/lib/table'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface SuperHeroData {
  id: ReactNode
  firstName: ReactNode
  lastName: ReactNode
  superHero: ReactNode
}

type SuperHeroRowData = GenericTableRow<SuperHeroData>

type SuperHeroColumnDataT = Omit<
  TableHeaderCellProps<SuperHeroRowData>,
  'ref'
> &
  React.RefAttributes<HTMLTableCellElement>

const columnData: SuperHeroColumnDataT[] = [
  {
    children: '#',
    accessor: 'id',
  },
  ...
]

const rowData: SuperHeroRowData[] = [
  {
    id: '1',
    firstName: 'Peter',
    lastName: 'Parker',
    superHero: 'Spider-man',
    expanded: false,
    checked: false,
  },
  ...
]
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table>
  <TableHeader>
    <TableRow>
      {columnData.map((column: SuperHeroColumnDataT, i: number) => (
        <TableHeaderCell key={i} {...column} />
      ))}
    </TableRow>
  </TableHeader>
  <TableBody>
    {rowData.map((item: SuperHeroRowData, i: number) => (
      <TableRow key={i}>
        {columnData.map((column: SuperHeroColumnDataT, columnIndex: number) => (
          <TableCell key={columnIndex}>{item[column.accessor]}</TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
</Table>
`})}),`
`,e.jsx(n.h2,{id:"sortable-table",children:"Sortable Table"}),`
`,e.jsx(t,{of:R}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { sortArray } from '@sebgroup/green-react/src/lib/table'

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
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table sortedColumn={sortedColumn} onSort={onSort}>
  ....
</Table>
`})}),`
`,e.jsx(n.h2,{id:"selectable-table",children:"Selectable Table"}),`
`,e.jsx(t,{of:D}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { onRowSelect } from '@sebgroup/green-react/src/lib/table'

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
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table onRowSelect={onSelect}>
  <TableHeader>
    <TableRow {...selectAllIndicator}>....</TableRow>
  </TableHeader>
  <TableBody>
    {data.map((item: SuperHeroRowData, i: number) => (
      <TableRow key={i} uniqueKey={item.id} checked={item.checked}>
        ...
      </TableRow>
    ))}
  </TableBody>
</Table>
`})}),`
`,e.jsx(n.h2,{id:"expandable-table",children:"Expandable Table"}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface SuperHeroData {
  id: ReactNode
  firstName: ReactNode
  lastName: ReactNode
  superHero: ReactNode
  rowContentDetails?: SuperHeroRowData[]
}

type SuperHeroRowData = GenericTableRow<SuperHeroData>

type ExpandedSuperHeroRowAccessor = Omit<SuperHeroRowData, 'rowContentDetails'>

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
 ....
]
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const [data, setData] = React.useState<SuperHeroRowData[]>(rowData)

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
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table onRowExpand={onRowExpand}>
  .....
  <TableBody>
    {data.map((item: SuperHeroRowData, i: number) => (
      <React.Fragment key={i}>
        <TableRow uniqueKey={item.id} isExpanded={item.expanded}>
          {columnData.map(
            (column: SuperHeroColumnDataT, columnIndex: number) => (
              <TableCell key={columnIndex}>{item[column.accessor]}</TableCell>
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
`})}),`
`,e.jsx(n.h4,{id:"available-component-props",children:"Available component props"}),`
`,e.jsx(n.h3,{id:"table-1",children:e.jsx(n.code,{children:"Table"})}),`
`,e.jsx(o,{children:"\n| Props        | Type                                                                    | Description                    |\n| :----------- | :---------------------------------------------------------------------- | :----------------------------- |\n| onRowSelect  | ` (event: React.ChangeEvent<HTMLInputElement>, rowKey: string ) => void ` | callback when row is selected  |\n| onRowExpand  | ` (isExpanded: boolean, rowKey: string) => void `                         | callback when row is expanded  |\n| onSort       | ` (sortedColumn: SortedColumn) => void `                                  | callback when column is sorted |\n| sortedColumn | ` SortedColumn `                                                          | preset sorted column           |\n"}),`
`,e.jsx(n.h3,{id:"tableheadercell",children:e.jsx(n.code,{children:"TableHeaderCell"})}),`
`,e.jsx(o,{children:"\n| Props         | Type                | Description                       |\n| :------------ | :------------------ | :-------------------------------- |\n| accessor      | `keyof RowDataType` | key to access the table row data. |\n| disableSort   | `boolean`           | disable sorting.                  |\n| sortDirection | `SortDirection`     | Ascending and descending value    |\n"}),`
`,e.jsx(n.h3,{id:"tablerow",children:e.jsx(n.code,{children:"TableRow"})}),`
`,e.jsx(o,{children:"\n| Props               | Description                                                       | Type                              |\n| :------------------ | :---------------------------------------------------------------- | :-------------------------------- |\n| checked             | Selectable table checkbox checked value.                          | `boolean`                         |\n| indeterminate       | Selectable table checkbox indeterminate value.                    | `boolean`                         |\n| isHeaderRow         | Determines it has table header row                                | `boolean`                         |\n| hideSelect          | Select can be hidden using this flag                              | `boolean`                         |\n| uniqueKey           | uniqueKey to access during sorting, selecting, expanding in table | `string`                          |\n| parentKey           | Used to parent identifier in expandle table                       | `string`                          |\n| isExpanded          | value that unsure the subrow is shown                             | `boolean`                         |\n| isSubRow            | value that identifies that table row is subrow                    | `boolean`                         |\n| collapseButtonProps | expandable button props                                           | `JSX.IntrinsicElements['button']` |\n| checkboxProps       | Selectable table checkbox props                                   | `JSX.IntrinsicElements['input']`  |\n"})]})}function v(a={}){const{wrapper:n}={...c(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{E as Template,v as default};
