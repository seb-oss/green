import { screen, render } from '@testing-library/react'
import ListItem from './listItem'

describe('List', () => {
  it('Should render list element', () => {
    render(<ListItem>First</ListItem>)

    expect(screen.getByText('First')).toBeTruthy()
  })
})
