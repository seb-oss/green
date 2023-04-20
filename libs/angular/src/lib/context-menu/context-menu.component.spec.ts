import { RenderResult, fireEvent, render } from '@testing-library/angular'
import { NggContextMenuComponent } from './context-menu.component'

describe('NggContextMenuComponent', () => {
  let component: RenderResult<NggContextMenuComponent>
  let buttonElements: HTMLElement[]
  let button: Element

  beforeEach(async () => {
    component = await render(NggContextMenuComponent, {
      componentProperties: {
        menuItems: [
          { value: 'a', label: 'Option a' },
          { value: 'b', label: 'Option b' },
        ],
      },
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

    const menuItems = await component.findAllByRole('option')
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
})
