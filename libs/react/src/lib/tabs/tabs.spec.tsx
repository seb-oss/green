import { render, screen, fireEvent } from '@testing-library/react'
import Tabs, { IList, Tab } from './tabs'

const list: IList[] = [
  { text: 'Page 1', href: '#' },
  { text: 'Page 2', href: '#' },
  { text: 'Page 3', href: '#' },
  { text: 'Page 4', href: '#' },
  { text: 'Page 5' },
  { text: 'Page 6', disabled: true },
]

describe('Tabs only allow text as content', () => {
  it('should render all anchor elements', () => {
    render(<Tabs list={list}></Tabs>)
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    expect(anchorTag).toBeTruthy()
    anchorTag?.map((tags, index) =>
      expect(tags.textContent).toBe(list[index].text),
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
    expect(anchorTag[4].getAttribute('href')).toBe('#')
    expect(anchorTag[5].getAttribute('aria-disabled')).toBe('true')
  })

  it('Should set href to "#" if href is not defined ', () => {
    render(<Tabs list={list} />)
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    expect(anchorTag[4].getAttribute('href')).toBe('#')
  })
})

const tabList: TabProps[] = [
  { title: 'Page 1', children: 'Page 1 Content' },
  { title: 'Page 2', children: 'Page 2 Content' },
  { title: 'Page 3', children: 'Page 3 Content' },
  {
    title: 'Page 4',
    children: (
      <div>
        <div>Page 4 Content</div>
      </div>
    ),
  },
  { title: 'Page 5', children: <>Page 5 is a Component</> },
  { title: 'Page 6', disabled: true },
]

describe('Tabs allow components as content', () => {
  it('should render all anchor elements', () => {
    render(
      <Tabs>
        {tabList.map((tab, index) => (
          <Tab key={`tab-${index}`} {...tab}>
            {tab.children}
          </Tab>
        ))}
      </Tabs>,
    )
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    expect(anchorTag).toBeTruthy()
    anchorTag?.forEach((tag, index) => {
      expect(tag.textContent).toBe(tabList[index].title)
    })
  })

  it('should render the tab set as selected by default', () => {
    render(
      <Tabs>
        <Tab title="NotSelected"></Tab>
        <Tab title="NotSelected"></Tab>
        <Tab title="Selected" selected>
          Tab is selected
        </Tab>
      </Tabs>,
    )
    const tabsContent: HTMLElement[] = screen.getAllByRole('tabpanel')

    expect(tabsContent).toBeTruthy()
    expect(tabsContent[0].textContent).toBe('Tab is selected')
  })

  it('should only render the selected tab element', () => {
    render(
      <Tabs>
        {tabList.map((tab, index) => (
          <Tab key={`tab-${index}`} {...tab}>
            {tab.children}
          </Tab>
        ))}
      </Tabs>,
    )
    const tabsContent: HTMLElement[] = screen.getAllByRole('tabpanel', {
      hidden: true,
    })
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')

    expect(anchorTag).toBeTruthy()
    expect(tabsContent.length).toEqual(6)
    expect(tabsContent[0].textContent).toBe(tabList[0].children)
    tabsContent?.forEach((tab, index) => {
      if (index !== 0) expect(tab.textContent).toBe('')
    })
    const clickedTab = 2
    fireEvent.click(anchorTag[clickedTab])
    expect(tabsContent[clickedTab].textContent).toBe(
      tabList[clickedTab].children,
    )

    tabsContent?.forEach((tab, index) => {
      if (index !== clickedTab) expect(tab.textContent).toBe('')
    })
  })

  it('onClick changes selectedTab', () => {
    render(
      <Tabs>
        {tabList.map((tab, index) => (
          <Tab key={`tab-${index}`} title={tab.title}>
            {tab.children}
          </Tab>
        ))}
      </Tabs>,
    )
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    fireEvent.click(anchorTag[1])
    expect(screen.getByRole('tabpanel').textContent).toEqual('Page 2 Content')
  })

  it('OnClick should fire tabOnChange function', () => {
    const onTabChange: jest.Mock = jest
      .fn()
      .mockImplementation((value: number) => value)
    render(
      <Tabs onTabChange={onTabChange}>
        {tabList.map((tab, index) => (
          <Tab key={`tab-${index}`} {...tab}></Tab>
        ))}
      </Tabs>,
    )
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    fireEvent.click(anchorTag[1])
    expect(screen.getByRole('tabpanel').textContent).toEqual('Page 2 Content')
    expect(onTabChange).toBeCalledWith(1)
  })

  it('Should have aria-disabled', () => {
    render(
      <Tabs>
        {tabList.map((tab, index) => (
          <Tab key={`tab-${index}`} {...tab}>
            {tab.children}
          </Tab>
        ))}
      </Tabs>,
    )
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    expect(anchorTag[4].getAttribute('aria-disabled')).toBe(null)
    expect(anchorTag[4].getAttribute('href')).toBe('#')
    expect(anchorTag[5].getAttribute('aria-disabled')).toBe('true')
  })

  it('Should set href to "#" if href is not defined ', () => {
    render(
      <Tabs>
        {tabList.map((tab, index) => (
          <Tab key={`tab-${index}`} title={tab.title}>
            {tab.children}
          </Tab>
        ))}
      </Tabs>,
    )
    const anchorTag: HTMLAnchorElement[] = screen.getAllByRole('tab')
    expect(anchorTag[4].getAttribute('href')).toBe('#')
  })
})
