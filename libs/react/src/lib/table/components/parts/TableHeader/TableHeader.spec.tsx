import { TableHeader } from './TableHeader'
import { TableContext } from '../../context/TableContextProvider'
import { TableRow } from '../TableRow'
import { render } from '@testing-library/react'

describe('Component: Table header', () => {
  it('Should render correctly', () => {
    render(
      <table>
        <TableHeader />
      </table>,
    )
    expect(document.body.querySelector('thead')).toBeInTheDocument()
  })

  it('Should display empty cell if row is the only header row', () => {
    const mockProviderValue: any = {
      tableState: { sortedColumn: null, expandedRows: [] },
      setTableState: null,
      onRowSelect: jest.fn(),
      onRowExpand: jest.fn(),
      onSort: null,
    }
    render(
      <TableContext.Provider value={mockProviderValue}>
        <table>
          <TableHeader>
            <TableRow />
          </TableHeader>
        </table>
      </TableContext.Provider>,
    )
    expect(document.body.querySelectorAll('th').length).toEqual(2)
  })

  it('Should only display select if row is the header row', () => {
    const mockProviderValue: any = {
      tableState: { sortedColumn: null, expandedRows: [] },
      setTableState: jest.fn(),
      onRowSelect: jest.fn(),
      onRowExpand: jest.fn(),
      onSort: null,
    }
    render(
      <TableContext.Provider value={mockProviderValue}>
        <table>
          <TableHeader>
            <TableRow isHeaderRow />
            <TableRow />
            <tr className="custom" />
          </TableHeader>
        </table>
      </TableContext.Provider>,
    )
    expect(document.body.querySelectorAll('input').length).toEqual(1)
    expect(document.body.querySelector('.custom')).not.toBeNull()
  })
})
