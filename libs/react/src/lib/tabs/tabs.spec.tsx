import { render, screen, fireEvent } from '@testing-library/react'
import Tabs from './tabs'

const list = [
  { text: 'Page 1', href: '#' },
  { text: 'Page 2', href: '#' },
  { text: 'Page 3', href: '#' },
  { text: 'Page 4', href: '#' },
  { text: 'Page 5', href: '#' },
  { text: 'Page 6' },
]

describe('Tabs', () => {
  it('should render all anchor elements', () => {
    render(<Tabs list={list}></Tabs>)
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    expect(anchorTag).toBeTruthy()
    anchorTag?.map((tags, index) =>
      expect(tags.textContent).toBe(list[index].text)
    )
  })

  it('onClick changes selectedTab', () => {
    render(<Tabs list={list}></Tabs>)
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    fireEvent.click(anchorTag[1])
    expect(screen.getByRole('tabpanel').textContent).toEqual('Page 2')
  })
})
