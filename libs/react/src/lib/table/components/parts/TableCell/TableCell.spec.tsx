import { render, screen } from '@testing-library/react'
import { TableCell } from './TableCell'

describe('Component: Table cell', () => {
  it('Should render correctly', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>TableCell</TableCell>
          </tr>
        </tbody>
      </table>,
    )
    expect(screen.getByText('TableCell')).toBeInTheDocument()
  })
})
