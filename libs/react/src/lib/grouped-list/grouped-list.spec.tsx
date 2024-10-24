import { render, screen } from '@testing-library/react'

import { GroupedList, ListItem } from './grouped-list'

describe('GroupedList', () => {
  it('renders the list items', () => {
    render(
      <GroupedList>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </GroupedList>,
    )

    const item1 = screen.getByText('Item 1')
    const item2 = screen.getByText('Item 2')
    const item3 = screen.getByText('Item 3')

    expect(item1).toBeInTheDocument()
    expect(item2).toBeInTheDocument()
    expect(item3).toBeInTheDocument()
  })
})
