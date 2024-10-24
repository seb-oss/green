import { render, screen } from '@testing-library/react'

import { TableListProps } from './list'
import ListItem from './listItem'

const tableListItem: TableListProps = {
  title: 'title',
  definition: ['description'],
}

describe('List', () => {
  it('Should render list item element', () => {
    render(<ListItem>First</ListItem>)

    expect(screen.getByText('First')).toBeTruthy()
  })

  it('Should render list item element as description dd tag', () => {
    render(
      <ListItem listType="table" tableRowData={tableListItem}>
        First
      </ListItem>,
    )

    expect(screen.getByText('description')).toBeTruthy()
  })
})
