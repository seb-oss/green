import { render, screen } from '@testing-library/react'
import { Pagination } from './pagination'
import userEvent, { UserEvent } from '@testing-library/user-event'

describe('Pagination', () => {
  it('Should render', () => {
    render(<Pagination length={10} pageSize={1} offset={10} />)
    expect(screen.getAllByRole('button')).toHaveLength(11)
  })

  it('Should display dots on right', () => {
    render(<Pagination length={10} pageSize={1} />)
    expect(screen.getAllByText('...')).toHaveLength(1)
  })

  it('Should display dots on left', () => {
    render(<Pagination length={10} pageSize={1} pageIndex={10} />)
    expect(screen.getAllByText('...')).toHaveLength(1)
  })

  it('Should display dots on both sides', () => {
    render(<Pagination length={10} pageSize={1} pageIndex={4} />)
    expect(screen.getAllByText('...')).toHaveLength(2)
  })

  it('Should fire onClickPage fn', async () => {
    const user: UserEvent = userEvent.setup()
    const mockOnClickPage: jest.Mock = jest.fn()
    render(
      <Pagination length={10} pageSize={1} onClickPage={mockOnClickPage} />,
    )
    await user.click(screen.getByText('2'))
    expect(mockOnClickPage).toBeCalledWith(2)
  })

  it('Should navigate to next page', async () => {
    const user: UserEvent = userEvent.setup()
    const mockOnClickPage: jest.Mock = jest.fn()
    render(
      <Pagination length={10} pageSize={1} onClickPage={mockOnClickPage} />,
    )
    await user.click(screen.getByLabelText('Next Page'))
    expect(mockOnClickPage).toBeCalledWith(2)
  })

  it('Should navigate to previous page', async () => {
    const user: UserEvent = userEvent.setup()
    const mockOnClickPage: jest.Mock = jest.fn()
    render(
      <Pagination
        length={10}
        pageSize={1}
        pageIndex={2}
        onClickPage={mockOnClickPage}
      />,
    )
    await user.click(screen.getByLabelText('Previous Page'))
    expect(mockOnClickPage).toBeCalledWith(1)
  })
})
