import { screen, render } from '@testing-library/react'
import List, { TableListProps } from './list'

const list: string[] = ['First', 'Second', 'Third']
const tableData: TableListProps[] = [
  {
    title: 'title',
    definition: ['description 1'],
  },
  {
    title: 'title 2',
    definition: ['description 2'],
  },
]

describe('List', () => {
  it('Should render ordered list', () => {
    render(<List listType="ordered">{list}</List>)
    list.map((text, index) =>
      expect(screen.getByText(text).textContent).toBe(list[index]),
    )
  })

  it('Should render unordered list', () => {
    render(<List listType="unordered">{list}</List>)
    list.map((text, index) =>
      expect(screen.getByText(text).textContent).toBe(list[index]),
    )
  })

  it('Should render check list', () => {
    render(<List listType="check">{list}</List>)
    list.map((text, index) =>
      expect(screen.getByText(text).textContent).toBe(list[index]),
    )
  })

  it('Should render description list', () => {
    render(<List listType="table" tableData={tableData}></List>)
    expect(screen.getByText('description 1')).toBeTruthy()
    expect(screen.getByText('description 2')).toBeTruthy()
  })

  it('Check list should have check class name', () => {
    const { container } = render(<List listType="check">{list}</List>)
    list.map((text, index) =>
      expect(screen.getByText(text).textContent).toBe(list[index]),
    )
    expect(container.getElementsByClassName('check')).toBeTruthy()
  })
})
