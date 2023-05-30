import { render, screen, fireEvent } from '@testing-library/react'
import Tabs, { Tab, TabProps } from './tabs'

const list: TabProps[] = [
  { title: 'Page 1', children: 'Page 1 Content' },
  { title: 'Page 2', children: 'Page 2 Content' },
  { title: 'Page 3', children: 'Page 3 Content' },
  { title: 'Page 4', children: <div><div>Page 4 Content</div></div> },
  { title: 'Page 5', children: <>Page 5 is a Component</> },
  { title: 'Page 6', disabled: true },
]

describe('Tabs', () => {
  it('should render all anchor elements', () => {
    render(<Tabs>{ list.map(tab => <Tab {...tab}>{tab.children}</Tab>)}</Tabs>)
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    expect(anchorTag).toBeTruthy()
    anchorTag?.forEach((tag, index) => {
      expect(tag.textContent).toBe(list[index].title);
    }  
    )
  })

  it('onClick changes selectedTab', () => {
    render(<Tabs>{ list.map(tab => <Tab title={tab.title}>{tab.children}</Tab>)}</Tabs>)
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    fireEvent.click(anchorTag[1])
    expect(screen.getByRole('tabpanel').textContent).toEqual('Page 2 Content')
  })

  it('OnClick should fire tabOnChange function', () => {
    const onTabChange: jest.Mock = jest
      .fn()
      .mockImplementation((value: number) => value)
    render(<Tabs onTabChange={onTabChange}>{ list.map(tab => <Tab {...tab}></Tab>)}</Tabs>)
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    fireEvent.click(anchorTag[1])
    expect(screen.getByRole('tabpanel').textContent).toEqual('Page 2 Content')
    expect(onTabChange).toBeCalledWith(1)
  })

  it('Should have aria-disabled', () => {
    render(<Tabs>{ list.map(tab => <Tab {...tab}>{tab.children}</Tab>)}</Tabs>)
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    expect(anchorTag[4].getAttribute('aria-disabled')).toBe(null)
    expect(anchorTag[4].getAttribute('href')).toBe('#')
    expect(anchorTag[5].getAttribute('aria-disabled')).toBe('true')
  })

  it('Should set href to "#" if href is not defined ', () => {
    render(<Tabs>{ list.map(tab => <Tab title={tab.title}>{tab.children}</Tab>)}</Tabs>)
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    expect(anchorTag[4].getAttribute('href')).toBe('#')
  })
})
