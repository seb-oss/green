import { render, RenderResult } from '@testing-library/angular'
import { Subject } from 'rxjs'

import { ON_SCROLL_TOKEN } from '../shared/on-scroll.directive'
import { NggContextMenuComponent } from './context-menu.component'
import { NggContextMenuModule } from './context-menu.module'

describe('NggContextMenuComponent', () => {
  let component: RenderResult<NggContextMenuComponent>
  let ctxMenuElements: HTMLElement[]
  let ctxMenu: Element
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
      imports: [NggContextMenuModule],
    })

    ctxMenuElements = await component.findAllByTestId('context-menu')
    ctxMenu = ctxMenuElements[0]
  })

  it('should create the component', () => {
    expect(component).toBeDefined()
  })

  it('should have the correct direction', () => {
    expect(component.fixture.componentInstance.direction).toEqual('ltr')
  })
})
