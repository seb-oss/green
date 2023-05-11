import { RenderResult, fireEvent, render } from '@testing-library/angular'
import { Subject } from 'rxjs'
import { ON_SCROLL_TOKEN } from '../shared/on-scroll.directive'
import { NggContextMenuComponent } from './context-menu.component'

describe('NggContextMenuComponent', () => {
  let component: RenderResult<NggContextMenuComponent>
  let buttonElements: HTMLElement[]
  let button: Element
  const closeContextMenu = new Subject<void>()

  beforeEach(async () => {
    window.ResizeObserver = jest.fn(() => ({
      observe: jest.fn(),
      disconnect: jest.fn(),
      unobserve: jest.fn(),
    }))

    component = await render(NggContextMenuComponent, {
      componentProperties: {
        closeOnScroll: true,
        menuItems: [
          { value: 'a', label: 'Option a' },
          { value: 'b', label: 'Option b' },
        ],
      },
      providers: [{ provide: ON_SCROLL_TOKEN, useValue: closeContextMenu }],
    })

    buttonElements = await component.findAllByRole('button')
    button = buttonElements[0]
  })

  it('should create the component', () => {
    expect(component).toBeDefined()
  })

  it('should have the correct direction', () => {
    expect(component.fixture.componentInstance.direction).toEqual('ltr')
  })

  it('should open the context menu when the button is clicked', async () => {
    fireEvent.click(button)

    expect(component.fixture.componentInstance.isActive).toBeTruthy()
  })

  it('should close the context menu when the button is clicked again', async () => {
    fireEvent.click(button)
    fireEvent.click(button)
    expect(component.fixture.componentInstance.isActive).toBeFalsy()
  })

  it('should emit an event when a menu item is clicked', async () => {
    jest.spyOn(
      component.fixture.componentInstance.contextMenuItemClicked,
      'emit'
    )

    fireEvent.click(button)

    const menuList = await component.findByRole('listbox')
    const menuItems = menuList.querySelectorAll('li')
    fireEvent.click(menuItems[0])

    expect(
      component.fixture.componentInstance.contextMenuItemClicked.emit
    ).toHaveBeenCalledWith(component.fixture.componentInstance.menuItems[0])
  })

  it('should close the context menu when clicking outside of the popover', async () => {
    fireEvent.click(button)

    document.body.click()

    expect(component.fixture.componentInstance.isActive).toBeFalsy()
  })

  it('should close the context menu when close token is passed', async () => {
    fireEvent.click(button)

    closeContextMenu.next()

    expect(component.fixture.componentInstance.isActive).toBeFalsy()
  })
})
