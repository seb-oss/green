import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
} from '../components'
import {
  SortableTable,
  SelectableTable,
  ExpandableTable,
  columnData,
  rowData,
} from './multiple-story-tables'

const Template = () => {
  return (
    <div className="my-5">
      <Table>
        <TableHeader>
          <TableRow>
            {columnData.map((column, i) => (
              <TableHeaderCell key={i} {...column} />
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rowData.map((item, i) => (
            <TableRow key={i}>
              {columnData.map((column, columnIndex) => (
                <TableCell key={columnIndex}>{item[column.accessor]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default {
  title: 'Components/Table',
  component: Table,
}

export const Default = {
  render: Template.bind({}),
  name: 'Table',

  parameters: {
    componentIds: ['component-table'],
  },
}

export const SortableTableStory = {
  render: () => <SortableTable />,
  name: 'Sortable table',

  parameters: {
    componentIds: ['component-sortable'],
  },
}

export const SelectableTableStory = {
  render: () => <SelectableTable />,
  name: 'Selectable table',

  parameters: {
    componentIds: ['component-selectable'],
  },
}

export const ExpandableTableStory = {
  render: () => <ExpandableTable />,
  name: 'Expandable table',

  parameters: {
    componentIds: ['component-expandable'],
  },
}
