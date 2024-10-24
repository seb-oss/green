import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/angular'

import { NggAccordionListItemComponent } from './accordion-list-item.component'

describe(NggAccordionListItemComponent.name, () => {
  let component: RenderResult<NggAccordionListItemComponent>
  let listItem: NggAccordionListItemComponent

  beforeEach(async () => {
    component = await render(NggAccordionListItemComponent, {
      declarations: [NggAccordionListItemComponent],
      providers: [],
    })
    listItem = component.fixture.componentInstance
  })

  it('should create', () => {
    expect(listItem).toBeTruthy()
  })

  it('should toggle expanded when expand button clicked', async () => {
    const expanderInput = await component.findByTestId(
      'accordion-list-item-expander-button',
    )
    fireEvent.click(expanderInput)

    await waitFor(() => {
      expect(listItem.isExpanded).toBe(true)
    })

    expect(listItem.contentHeight).toEqual('auto')

    fireEvent.click(expanderInput)

    await waitFor(() => {
      expect(listItem.isExpanded).toBe(false)
    })

    expect(listItem.contentHeight).toEqual('0px')
  })

  it('should fire expanded change event when button clicked', async () => {
    const expanderInput = await component.findByTestId(
      'accordion-list-item-expander-button',
    )
    let eventEmitted = false

    listItem.expandedChange.subscribe(() => {
      eventEmitted = true
    })

    fireEvent.click(expanderInput)

    await waitFor(() => {
      expect(eventEmitted).toEqual(true)
    })
  })

  it('should expand', () => {
    listItem.expand()

    expect(listItem.isExpanded).toEqual(true)
    expect(listItem.contentHeight).toEqual('auto')
  })

  it('should shrink', () => {
    listItem.shrink()

    expect(listItem.isExpanded).toEqual(false)
    expect(listItem.contentHeight).toEqual('0px')
  })

  it('should display item header', async () => {
    listItem.listItemHeader = 'Foo'
    const listItemHeaderElement = await component.findByTestId(
      'accordion-list-item-header',
    )

    component.detectChanges()
    expect(listItemHeaderElement.textContent).toEqual('Foo')
  })

  it('should display item subheader', async () => {
    listItem.listItemSubHeader = 'Bar'
    const listItemSubHeaderElement = await component.findByTestId(
      'accordion-list-item-subheader',
    )

    component.detectChanges()
    expect(listItemSubHeaderElement.textContent).toEqual('Bar')
  })
})
