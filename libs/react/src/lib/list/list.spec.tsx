import { screen, render } from '@testing-library/react'
import List from './list'
import ListItem from './listItem'

const list: string[] = ['First', 'Second', 'Third']

describe('List', () => {
  it('Should render ordered list', () => {
    render(<List listType="ordered">{list}</List>)
    list.map((text, index) =>
      expect(screen.getByText(text).textContent).toBe(list[index])
    )
  })

  it('Should render unordered list', () => {
    render(<List listType="unordered">{list}</List>)
    list.map((text, index) =>
      expect(screen.getByText(text).textContent).toBe(list[index])
    )
  })

  it('Should render check list', () => {
    render(<List listType="check">{list}</List>)
    list.map((text, index) =>
      expect(screen.getByText(text).textContent).toBe(list[index])
    )
  })

  it('Check list should have check class name', () => {
    const { container } = render(<List listType="check">{list}</List>)
    list.map((text, index) =>
      expect(screen.getByText(text).textContent).toBe(list[index])
    )
    expect(container.getElementsByClassName('check')).toBeTruthy()
  })
})
