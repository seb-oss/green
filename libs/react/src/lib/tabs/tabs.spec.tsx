import { render, screen, fireEvent, getByRole } from '@testing-library/react'
import Tabs, { IList } from './tabs'

const list: IList[] = [
  { text: 'Page 1', href: '#' },
  { text: 'Page 2', href: '#' },
  { text: 'Page 3', href: '#' },
  { text: 'Page 4', href: '#' },
  { text: 'Page 5', href: '#' },
  { text: 'Page 6', disabled: true },
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

  it('OnClick should fire tabOnChange function', () => {
    const onTabChange: jest.Mock = jest
      .fn()
      .mockImplementation((value: number) => value)
    render(<Tabs list={list} onTabChange={onTabChange}></Tabs>)
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    fireEvent.click(anchorTag[1])
    expect(screen.getByRole('tabpanel').textContent).toEqual('Page 2')
    expect(onTabChange).toBeCalledWith(1)
  })

  it('Should have aria-disabled', () => {
    render(<Tabs list={list} />)
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    expect(anchorTag[4].getAttribute('aria-disabled')).toBe(null)
    expect(anchorTag[5].getAttribute('aria-disabled')).toBe('true')
  })
})
