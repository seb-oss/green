import { screen, render } from '@testing-library/react'
import List from './list'

const list: string[] = ['First', 'Second', 'Third']

describe('List', () => {
  it('Should render ordered list', () => {
    render(
      <List listType="ordered">
        {list.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </List>
    )
    list.map((text, index) =>
      expect(screen.getByText(text).textContent).toBe(list[index])
    )
  })

  it('Should render unordered list', () => {
    render(
      <List listType="unordered">
        {list.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </List>
    )
    list.map((text, index) =>
      expect(screen.getByText(text).textContent).toBe(list[index])
    )
  })

  it('Should render check list', () => {
    render(
      <List listType="check">
        {list.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </List>
    )
    list.map((text, index) =>
      expect(screen.getByText(text).textContent).toBe(list[index])
    )
  })

  it('Check list should have check class name', () => {
    const { container } = render(
      <List listType="check">
        {list.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </List>
    )
    list.map((text, index) =>
      expect(screen.getByText(text).textContent).toBe(list[index])
    )
    expect(container.getElementsByClassName('check')).toBeTruthy()
  })
})
