import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'

import { TableContext } from '../../context/TableContextProvider'
import { SortDirection } from '../../table-typings'
import { TableHeaderCell, TableHeaderCellProps } from './TableHeaderCell'

describe('Component: Table header cell', () => {
  function WrapperTableHeader(props: Omit<TableHeaderCellProps, 'ref'> = {}) {
    return (
      <table>
        <thead>
          <tr>
            <TableHeaderCell {...props}>TableHeader</TableHeaderCell>
          </tr>
        </thead>
      </table>
    )
  }

  it('Should render correctly', () => {
    render(<WrapperTableHeader />)
    expect(screen.getByText('TableHeader')).toBeInTheDocument()
  })

  it('Should be sortable', async () => {
    const user: UserEvent = userEvent.setup()
    const sortFn: jest.Mock = jest.fn()
    const setTableStateFn: jest.Mock = jest.fn()
    const mockProviderValue: any = {
      tableState: { sortedColumn: null, expandedRows: [] },
      setTableState: setTableStateFn,
      onRowSelect: null,
      onRowExpand: null,
      onSort: sortFn,
    }
    render(
      <TableContext.Provider value={mockProviderValue}>
        <WrapperTableHeader accessor="test">child</WrapperTableHeader>
      </TableContext.Provider>,
    )
    await user.click(
      document.body.querySelector('.gds-table-sort') as HTMLElement,
    )
    expect(setTableStateFn).toBeCalled()
    expect(sortFn).toBeCalled()
  })

  it('Should change sorting direction', async () => {
    const user: UserEvent = userEvent.setup()
    const sortFn: jest.Mock = jest.fn()
    const setTableStateFn: jest.Mock = jest.fn()
    const mockProviderValue: any = {
      tableState: {
        sortedColumn: { accessor: 'test', sortDirection: SortDirection.ASC },
        expandedRows: [],
      },
      setTableState: setTableStateFn,
      onRowSelect: null,
      onRowExpand: null,
      onSort: sortFn,
    }
    render(
      <TableContext.Provider value={mockProviderValue}>
        <WrapperTableHeader accessor="test">child</WrapperTableHeader>
      </TableContext.Provider>,
    )
    await user.click(
      document.body.querySelector('.gds-table-sort') as HTMLElement,
    )
    expect(setTableStateFn).toBeCalledWith({
      ...mockProviderValue.tableState,
      sortedColumn: {
        ...mockProviderValue.tableState.sortedColumn,
        sortDirection: SortDirection.DESC,
      },
    })
    expect(sortFn).toBeCalled()
  })

  it('Should change sorting direction using prop', () => {
    const sortFn: jest.Mock = jest.fn()
    const setTableStateFn: jest.Mock = jest.fn()
    const mockProviderValue: any = {
      tableState: { sortedColumn: null, expandedRows: [] },
      setTableState: setTableStateFn,
      onRowSelect: null,
      onRowExpand: null,
      onSort: sortFn,
    }
    render(
      <TableContext.Provider value={mockProviderValue}>
        <WrapperTableHeader accessor="test" sortDirection={SortDirection.ASC}>
          child
        </WrapperTableHeader>
      </TableContext.Provider>,
    )
    expect(setTableStateFn).toBeCalledWith({
      ...mockProviderValue.tableState,
      sortedColumn: { accessor: 'test', sortDirection: SortDirection.ASC },
    })
  })

  it('Should able to disable sort per cell', () => {
    const sortFn: jest.Mock = jest.fn()
    const setTableStateFn: jest.Mock = jest.fn()
    const mockProviderValue: any = {
      tableState: {
        sortedColumn: { accessor: 'test', sortDirection: SortDirection.ASC },
        expandedRows: [],
      },
      setTableState: setTableStateFn,
      onRowSelect: null,
      onRowExpand: null,
      onSort: sortFn,
    }
    render(
      <TableContext.Provider value={mockProviderValue}>
        <WrapperTableHeader disableSort accessor="test">
          child
        </WrapperTableHeader>
      </TableContext.Provider>,
    )
    expect(
      document.body.querySelector('th')?.classList.contains('sortable'),
    ).toBeFalsy()
  })
})
