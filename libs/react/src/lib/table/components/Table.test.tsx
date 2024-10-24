import { render, screen } from '@testing-library/react'

import { Table } from './Table'

describe('Component: Table', () => {
  it('Should render simple table', async () => {
    render(<Table />)
    expect(screen.getByRole('table')).not.toBeNull()
  })
})
