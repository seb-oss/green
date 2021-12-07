import { act, fireEvent, render, RenderResult, waitFor } from '@testing-library/react'
import { Dropdown, DropdownProps } from './dropdown'

const tick = (t = 0) => new Promise<void>((r) => setTimeout(r, t))

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
  afterEach(() => {
    component.unmount()
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
    it('sets aria-expanded on trigger', async () => {
      // initial
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

      await act(async () => {
        // open
        fireEvent.click(toggleButton)
        await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))
        
        // close
        fireEvent.click(toggleButton)
        await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
      })
    })
    it('sets class active on listbox', async () => {
      // initial
      expect(listbox.className).toEqual('popover')
      
      await act(async () => {
        // open
        fireEvent.click(toggleButton)
        await waitFor(() => expect(listbox.className).toEqual('popover active'))
        
        // close
        fireEvent.click(toggleButton)
        await waitFor(() => expect(listbox.className).toEqual('popover'))
      })
    })
  })
  describe('select item', () => {
    beforeEach(async () => {
      await act(async () => {
        fireEvent.click(toggleButton)
      })
    })
    it('sets aria-selected', async () => {
      await act(async () => {
        fireEvent.click(options[1])
        await waitFor(() => expect(options[1].getAttribute('aria-selected')).toEqual('true'))
      })
    })
    it('closes dropdown', async () => {
      await act(async () => {
        fireEvent.click(options[1])
        await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        await waitFor(() => expect(listbox.className).toEqual('popover'))
      })
    })
    it('sets toggler text', async () => {
      await act(async () => {
        fireEvent.click(options[1])
        await waitFor(() => expect(toggleButton.innerHTML.trim()).toEqual('B'))
      })
    })
  })
  describe('keyboard navigation', () => {
    describe('Space', () => {
      it('does nothing when inactive', async () => {
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          fireEvent.keyDown(document, { key: ' ' })
          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
      it('opens when active', async () => {
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          fireEvent.focus(toggleButton)
          fireEvent.keyDown(document.activeElement || document, { key: ' ' })

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))
        })
      })
      it('closes when open', async () => {
        await act(async () => {
          fireEvent.click(toggleButton)
          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))

          fireEvent.focus(toggleButton)
          fireEvent.keyDown(document.activeElement || document, { key: ' ' })

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
    })
    describe('Escape', () => {
      it('does nothing when inactive', async () => {
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          fireEvent.keyDown(document, { key: 'Escape' })
          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
      it('does nothing when not open', async () => {
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          fireEvent.focus(toggleButton)
          fireEvent.keyDown(document.activeElement || document, { key: 'Escape' })

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
      it('closes when open', async () => {
        await act(async () => {
          fireEvent.click(toggleButton)
          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))

          fireEvent.focus(toggleButton)
          fireEvent.keyDown(document.activeElement || document, { key: 'Escape' })

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
    })
    describe('ArrowDown', () => {
      it('does nothing when inactive', async () => {
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          fireEvent.keyDown(document, { key: 'ArrowDown' })
          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
      it('opens when active', async () => {
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          fireEvent.focus(toggleButton)
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))
        })
      })
      it('selects next when open', async () => {
        await act(async () => {
          fireEvent.focus(toggleButton)

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          await waitFor(() => expect(options[1].getAttribute('aria-selected')).toEqual('true'))
        })
      })
      it('stops on last when not looping', async () => {
        await act(async () => {
          fireEvent.focus(toggleButton)

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          await waitFor(() => expect(options[1].getAttribute('aria-selected')).toEqual('true'))

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))
        })
      })
      it('loops to first when looping', async () => {
        props.loop = true

        await act(async () => {
          fireEvent.focus(toggleButton)

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          await waitFor(() => expect(options[1].getAttribute('aria-selected')).toEqual('true'))

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))
        })
      })
    })
    describe('ArrowUp', () => {
      it('does nothing when inactive', async () => {
        //expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          fireEvent.keyDown(document, { key: 'ArrowUp' })
          await tick(50)
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        })
      })
      it('opens when active', async () => {
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          fireEvent.focus(toggleButton)
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))
        })
      })
      it('selects previous when open', async () => {
        await act(async () => {
          fireEvent.focus(toggleButton)
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
          await waitFor(() => expect(options[1].getAttribute('aria-selected')).toEqual('true'))

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))
        })
      })
      it('stops on first when not looping', async () => {
        await act(async () => {
          fireEvent.focus(toggleButton)

          // go to last option
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))

          // spam up
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))
        })
      })
      it('loops to first when looping', async () => {
        props.loop = true
        await act(async () => {
          fireEvent.focus(toggleButton)

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
          await waitFor(() => expect(options[1].getAttribute('aria-selected')).toEqual('true'))

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))

          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))
        })
      })
    })
    describe('Home', () => {
      it('does nothing when inactive', async () => {
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          fireEvent.keyDown(document, { key: 'Home' })
          await tick()
          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('false'))
        })
      })
      it('opens and selects first when active', async () => {
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          fireEvent.focus(toggleButton)
          fireEvent.keyDown(document.activeElement || document, { key: 'Home' })

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))
        })
      })
      it('selects first when open', async () => {
        await act(async () => {
          fireEvent.focus(toggleButton)
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))

          fireEvent.keyDown(document.activeElement || document, { key: 'Home' })
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))
        })
      })
    })
    describe('End', () => {
      it('does nothing when inactive', async () => {
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          fireEvent.keyDown(document, { key: 'End' })
          await tick(10)
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        })
      })
      it('opens and selects last when active', async () => {
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await act(async () => {
          fireEvent.focus(toggleButton)
          fireEvent.keyDown(document.activeElement || document, { key: 'End' })

          await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toEqual('true'))
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))
        })
      })
      it('selects first when open', async () => {
        await act(async () => {
          fireEvent.focus(toggleButton)
          fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
          await waitFor(() => expect(options[0].getAttribute('aria-selected')).toEqual('true'))

          fireEvent.keyDown(document.activeElement || document, { key: 'End' })
          await waitFor(() => expect(options[2].getAttribute('aria-selected')).toEqual('true'))
        })
      })
    })
  })
})
