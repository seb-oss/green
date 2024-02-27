import { screen, render } from '@testing-library/react'
import { GroupedList } from './grouped-list'

describe('GroupedList', () => {
  it('renders the list items', () => {
    render(
      <GroupedList>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </GroupedList>
    )

    const item1 = screen.getByText('Item 1')
    const item2 = screen.getByText('Item 2')
    const item3 = screen.getByText('Item 3')

    expect(item1).toBeInTheDocument()
    expect(item2).toBeInTheDocument()
    expect(item3).toBeInTheDocument()
  })
})
