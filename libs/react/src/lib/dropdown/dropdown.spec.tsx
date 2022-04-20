import { act, render, RenderResult, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { wait } from '@testing-library/user-event/dist/types/utils'
import { Dropdown, DropdownProps } from './dropdown'

const tick = (t = 0) => new Promise<void>((r) => setTimeout(r, t))
jest.setTimeout(50000)

describe('Dropdown', () => {
  let props: DropdownProps
  let component: RenderResult
  let toggleButton: HTMLElement
  let listbox: HTMLElement
  let options: HTMLElement[]
  beforeEach(async () => {
    props = {
      options: [
        {key: 'A', value: 1},
        {key: 'B', value: 2},
        {key: 'C', value: 3},
      ]
    }
    component = render(<Dropdown {...props} />)
    await act(() => tick())

    const [_buttons, _listboxes, _options] = [
      await component.findAllByRole('button'),
      await component.findAllByRole('listbox'),
      await component.findAllByRole('option'),
    ]

    toggleButton = _buttons[0]
    listbox = _listboxes[0]
    options = _options
  })
  afterEach(async () => {
    await act(async () => {
      component.unmount()
      await tick(0)
    })
  })
  it('renders', () => {
    expect(component.baseElement).toBeTruthy()
  })
  it('sets correct classes on dropdown toggle', () => {
    expect(toggleButton.className).toEqual('dropdown-toggle')
  })
  it('renders options', () => {
    expect(options).toHaveLength(3)
  })
  describe('toggle', () => {
    it.only('sets aria-expanded on trigger', async () => {
      // initial
      const user = userEvent.setup()
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

      await act(async () => {
        // open
        console.log('user.click')
        await user.click(toggleButton)
        console.log('wait')
        await tick(1000)

        await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))
        
        // close
        await user.click(toggleButton)
        await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
      })
    })
    it.skip('sets class active on listbox', async () => {
      const user = userEvent.setup()

      // initial
      expect(listbox.className).toEqual('popover')
      
      await act(async () => {
        // open
        user.click(toggleButton)
        await waitFor(() => expect(listbox.className).toEqual('popover active'))
        
        // close
        user.click(toggleButton)
        await waitFor(() => expect(listbox.className).toEqual('popover'))
      })
    })
  })
  describe('mouse interaction', () => {
    beforeEach(async () => {
      const user = userEvent.setup()
      await act(async () => {
        user.tab()
      })
    })
    describe('click option', () => {
      it.skip('sets aria-selected', async () => {
        const user = userEvent.setup()
        await act(async () => {
          user.click(options[1])
          await waitFor(() => expect(options[1].getAttribute('aria-selected')).toEqual('true'))
        })
      })
      it.skip('closes dropdown', async () => {
      const user = userEvent.setup()
      await act(async () => {
          user.click(options[1])
          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
          await waitFor(() => expect(listbox.className).toEqual('popover'))
        })
      })
      it.skip('sets toggler text', async () => {
      const user = userEvent.setup()
      await act(async () => {
          user.click(options[1])
          await waitFor(() => expect(toggleButton.innerHTML.trim()).toEqual('<span>B</span>'))
        })
      })
    })
    describe('click outside', () => {
      it.skip('closes the dropdown', async () => {
      const user = userEvent.setup()
      await act(async () => {
          user.click(document.body)
          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
    })
  })
  describe('keyboard navigation', () => {
    describe('Space', () => {
      it.skip('does nothing when inactive', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          user.keyboard(' ')
          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
      it.skip('opens when active', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          user.tab()
          user.keyboard(' ')

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))
        })
      })
      it.skip('closes when open', async () => {
        const user = userEvent.setup()
        await act(async () => {
          user.click(toggleButton)
          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))

          user.keyboard(' ')

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
    })
    describe('Escape', () => {
      it.skip('does nothing when inactive', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          user.keyboard('Escape')
          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
      it.skip('does nothing when not open', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          user.tab()
          user.keyboard('Escape')

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
      it.skip('closes when open', async () => {
        const user = userEvent.setup()
        await act(async () => {
          user.tab()
          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))

          user.keyboard('Escape')

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
    })
    describe('ArrowDown', () => {
      it.skip('does nothing when inactive', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          user.keyboard('ArrowDown')
          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
      it.skip('opens when active', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          user.tab()
          user.keyboard('ArrowDown')

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))
        })
      })
      it.skip('selects next when open', async () => {
        const user = userEvent.setup()
        await act(async () => {
          user.tab()

          user.keyboard('ArrowDown')
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))

          user.keyboard('ArrowDown')
          await waitFor(() => expect(options[1].getAttribute('aria-selected')).toEqual('true'))
        })
      })
      it.skip('stops on last when not looping', async () => {
        const user = userEvent.setup()
        await act(async () => {
          user.tab()

          user.keyboard('ArrowDown')
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))

          user.keyboard('ArrowDown')
          await waitFor(() => expect(options[1].getAttribute('aria-selected')).toEqual('true'))

          user.keyboard('ArrowDown')
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))

          user.keyboard('ArrowDown')
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))
        })
      })
      it.skip('loops to first when looping', async () => {
        const user = userEvent.setup()
        props.loop = true
        component.rerender(<Dropdown {...props} />)

        await act(async () => {
          user.tab()

          user.keyboard('ArrowDown')
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))

          user.keyboard('ArrowDown')
          await waitFor(() => expect(options[1].getAttribute('aria-selected')).toEqual('true'))

          user.keyboard('ArrowDown')
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))

          user.keyboard('ArrowDown')
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))
        })
      })
    })
    describe('ArrowUp', () => {
      it.skip('does nothing when inactive', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          user.keyboard('ArrowUp')
          await tick(50)
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        })
      })
      it.skip('opens when active', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          user.tab()
          user.keyboard('ArrowUp')

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))
        })
      })
      it.skip('selects previous when open', async () => {
        const user = userEvent.setup()
        await act(async () => {
          user.tab()
          user.keyboard('ArrowDown')
          user.keyboard('ArrowDown')
          user.keyboard('ArrowDown')
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))

          user.keyboard('ArrowUp')
          await waitFor(() => expect(options[1].getAttribute('aria-selected')).toEqual('true'))

          user.keyboard('ArrowUp')
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))
        })
      })
      it.skip('stops on first when not looping', async () => {
        const user = userEvent.setup()
        await act(async () => {
          user.tab()

          // go to last option
          user.keyboard('ArrowDown')
          user.keyboard('ArrowDown')
          user.keyboard('ArrowDown')
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))

          // spam up
          user.keyboard('ArrowUp')
          user.keyboard('ArrowUp')
          user.keyboard('ArrowUp')
          user.keyboard('ArrowUp')
          user.keyboard('ArrowUp')
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))
        })
      })
      it.skip('loops to first when looping', async () => {
        const user = userEvent.setup()
        props.loop = true
        await act(async () => {
          user.tab()

          user.keyboard('ArrowUp')
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))

          user.keyboard('ArrowUp')
          await waitFor(() => expect(options[1].getAttribute('aria-selected')).toEqual('true'))

          user.keyboard('ArrowUp')
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))

          user.keyboard('ArrowUp')
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))
        })
      })
    })
    describe('Home', () => {
      it.skip('does nothing when inactive', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          user.keyboard('Home')
          await tick()
          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
      it.skip('opens and selects first when active', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          user.tab()
          user.keyboard('Home')

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))
        })
      })
      it.skip('selects first when open', async () => {
        const user = userEvent.setup()
        await act(async () => {
          user.tab()
          user.keyboard('ArrowDown')
          user.keyboard('ArrowDown')
          user.keyboard('ArrowDown')
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))

          user.keyboard('Home')
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))
        })
      })
    })
    describe('End', () => {
      it.skip('does nothing when inactive', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          user.keyboard('End')
          await tick(10)
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        })
      })
      it.skip('opens and selects last when active', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          user.tab()
          user.keyboard('End')

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))
        })
      })
      it.skip('selects first when open', async () => {
        const user = userEvent.setup()
        await act(async () => {
          user.tab()
          user.keyboard('ArrowDown')
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))

          user.keyboard('End')
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))
        })
      })
    })
  })
})
