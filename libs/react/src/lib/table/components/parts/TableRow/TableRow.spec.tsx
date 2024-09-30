import { TableRow } from './TableRow'
import { TableContext } from '../../context/TableContextProvider'
import { render, screen } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import userEvent from '@testing-library/user-event'
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'

describe('Component: Table row', () => {
  function WrapperTableRow({ children }: PropsWithChildren<unknown>) {
    return (
      <table>
        <tbody>{children}</tbody>
      </table>
    )
  }

  it('Should render correctly', () => {
    render(
      <WrapperTableRow>
        <TableRow />
      </WrapperTableRow>,
    )
    expect(document.body.querySelector('tr')).toBeInTheDocument()
  })

  it('Should be able to expand sub rows', async () => {
    const user: UserEvent = userEvent.setup()
    const parentUniqueKey = 'test'
    const onRowExpand: jest.Mock = jest.fn()
    const setTableStateFn: jest.Mock = jest.fn()
    const mockProviderValue: any = {
      tableState: { sortedColumn: null, expandedRows: [] },
      setTableState: setTableStateFn,
      onRowSelect: null,
      onRowExpand,
      onSort: null,
    }
    render(
      <TableContext.Provider value={mockProviderValue}>
        <WrapperTableRow>
          <TableRow uniqueKey={parentUniqueKey}></TableRow>
          <TableRow isSubRow parentKey={parentUniqueKey}></TableRow>
        </WrapperTableRow>
      </TableContext.Provider>,
    )
    await user.click(screen.getAllByRole('button')[0])
    expect(onRowExpand).toBeCalled()
  })

  it('Should be able to set row to be expanded by default', () => {
    const parentUniqueKey = 'test'
    const onRowExpand: jest.Mock = jest.fn()
    const setTableStateFn: jest.Mock = jest.fn()
    const mockProviderValue: any = {
      tableState: { sortedColumn: null, expandedRows: [parentUniqueKey] },
      setTableState: setTableStateFn,
      onRowSelect: null,
      onRowExpand,
      onSort: null,
    }
    render(
      <TableContext.Provider value={mockProviderValue}>
        <WrapperTableRow>
          <TableRow uniqueKey={parentUniqueKey} isExpanded></TableRow>
          <TableRow isSubRow parentKey={parentUniqueKey}></TableRow>
        </WrapperTableRow>
      </TableContext.Provider>,
    )
    expect(
      document.body.querySelector('tr')?.classList.contains('expanded'),
    ).toBeTruthy()
    expect(document.body.querySelector('.sub-row')).toBeInTheDocument()
    expect(
      document.body.querySelector('.sub-row')?.classList.contains('show'),
    ).toBeTruthy()
  })

  it('Should be able to select row', async () => {
    const user: UserEvent = userEvent.setup()
    const uniqueKey = 'test'
    const onRowSelect: jest.Mock = jest.fn()
    const mockProviderValue: any = {
      tableState: { sortedColumn: null, expandedRows: [] },
      setTableState: null,
      onRowSelect,
      onRowExpand: null,
      onSort: null,
    }
    render(
      <TableContext.Provider value={mockProviderValue}>
        <WrapperTableRow>
          <TableRow uniqueKey={uniqueKey} />
        </WrapperTableRow>
      </TableContext.Provider>,
    )
    await user.click(
      document.body.querySelector(`#tb_checkbox_${uniqueKey}`) as HTMLElement,
    )
    expect(onRowSelect).toBeCalled()
  })

  it('Should be able to select all row', async () => {
    const user: UserEvent = userEvent.setup()
    const onRowSelect: jest.Mock = jest.fn()
    const mockProviderValue: any = {
      tableState: { sortedColumn: null, expandedRows: [] },
      setTableState: null,
      onRowSelect,
      onRowExpand: null,
      onSort: null,
    }
    render(
      <TableContext.Provider value={mockProviderValue}>
        <WrapperTableRow>
          <TableRow isHeaderRow />
        </WrapperTableRow>
      </TableContext.Provider>,
    )
    await user.click(
      document.body.querySelector('#tb_checkbox_all') as HTMLElement,
    )
    expect(onRowSelect).toBeCalled()
  })

  it('Should display empty cell if row is a sub row', () => {
    const mockProviderValue: any = {
      tableState: { sortedColumn: null, expandedRows: [] },
      setTableState: null,
      onRowSelect: jest.fn(),
      onRowExpand: jest.fn(),
      onSort: null,
    }
    render(
      <TableContext.Provider value={mockProviderValue}>
        <WrapperTableRow>
          <TableRow isSubRow />
        </WrapperTableRow>
      </TableContext.Provider>,
    )
    expect(document.body.querySelectorAll('td').length).toEqual(2)
  })
})
