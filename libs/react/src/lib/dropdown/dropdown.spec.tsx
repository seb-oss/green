import { act, render, RenderResult, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
        { label: 'A', value: 1 },
        { label: 'B', value: 2 },
        { label: 'C', value: 3 },
      ],
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
  afterEach(() => component.unmount())
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
      const user = userEvent.setup()
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

      // open
      await user.click(toggleButton)
      await waitFor(() =>
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
      )

      // close
      await user.click(toggleButton)
      await waitFor(() =>
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      )
    })
    it('sets class active on listbox', async () => {
      const user = userEvent.setup()

      // initial
      expect(listbox.className).toEqual('_popover popover-dropdown')

      // open
      await user.click(toggleButton)
      await waitFor(() =>
        expect(listbox.className).toEqual('_popover popover-dropdown active')
      )

      // close
      await user.click(toggleButton)
      await waitFor(() =>
        expect(listbox.className).toEqual('_popover popover-dropdown')
      )
    })
  })
  describe('mouse interaction', () => {
    beforeEach(async () => {
      const user = userEvent.setup()
      await user.tab()
    })
    describe('click option', () => {
      it('sets aria-selected', async () => {
        const user = userEvent.setup()
        await user.click(options[1])
        await waitFor(() =>
          expect(options[1].getAttribute('aria-selected')).toEqual('true')
        )
      })
      it('closes dropdown', async () => {
        const user = userEvent.setup()
        await user.click(options[1])
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
        await waitFor(() =>
          expect(listbox.className).toEqual('_popover popover-dropdown')
        )
      })
      it('sets toggler text', async () => {
        const user = userEvent.setup()
        await user.click(options[1])
        await waitFor(() =>
          expect(toggleButton.innerHTML.trim()).toEqual('<span>B</span>')
        )
      })
    })
    describe('click outside', () => {
      it('closes the dropdown', async () => {
        const user = userEvent.setup()
        await user.click(document.body)
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
    })
  })
  describe('keyboard navigation', () => {
    describe('[Space]', () => {
      it('does nothing when inactive', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await user.keyboard('[Space]')
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
      it('opens when active', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await user.tab()
        await user.keyboard('[Space]')

        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        )
      })
      it('closes when open', async () => {
        const user = userEvent.setup()
        await user.click(toggleButton)
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        )

        await user.keyboard('[Space]')
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
    })
    describe('[Escape]', () => {
      it('does nothing when inactive', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await user.keyboard('[Escape]')
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
      it('does nothing when not open', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await user.tab()
        await user.keyboard('[Escape]')

        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
      it('closes when open', async () => {
        const user = userEvent.setup()

        await user.tab()
        await user.keyboard('[Space]')
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        )

        await user.keyboard('[Escape]')
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
    })
    describe('[ArrowDown]', () => {
      it('does nothing when inactive', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await user.keyboard('[ArrowDown]')
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
      it('opens when active', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await user.tab()
        await user.keyboard('[ArrowDown]')

        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        )
      })
      it('selects next when open', async () => {
        const user = userEvent.setup()
        await user.tab()

        await user.keyboard('[ArrowDown]')
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )

        await user.keyboard('[ArrowDown]')
        await waitFor(() =>
          expect(options[1].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
      it('stops on last when not looping', async () => {
        const user = userEvent.setup()
        await user.tab()

        await user.keyboard('[ArrowDown]')
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )

        await user.keyboard('[ArrowDown]')
        await waitFor(() =>
          expect(options[1].classList.contains('sg-highlighted')).toEqual(true)
        )

        await user.keyboard('[ArrowDown]')
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )

        await user.keyboard('[ArrowDown]')
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
      it('loops to first when looping', async () => {
        const user = userEvent.setup()

        component.rerender(<Dropdown {...{ ...props, loop: true }} />)
        await act(() => tick())
        const options = await component.findAllByRole('option')

        await user.tab()

        await user.keyboard('[ArrowDown]')
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )

        await user.keyboard('[ArrowDown]')
        await waitFor(() =>
          expect(options[1].classList.contains('sg-highlighted')).toEqual(true)
        )

        await user.keyboard('[ArrowDown]')
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )

        await user.keyboard('[ArrowDown]')
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
    })
    describe('[ArrowUp]', () => {
      it('does nothing when inactive', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await user.keyboard('[ArrowUp]')
        await tick(50)
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      })
      it('opens when active', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await user.tab()
        await user.keyboard('[ArrowUp]')

        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        )
      })
      it('selects previous when open', async () => {
        const user = userEvent.setup()

        await user.tab()
        await user.keyboard('[ArrowDown>3/]')
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )

        await user.keyboard('[ArrowUp]')
        await waitFor(() =>
          expect(options[1].classList.contains('sg-highlighted')).toEqual(true)
        )

        await user.keyboard('[ArrowUp]')
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
      it('stops on first when not looping', async () => {
        const user = userEvent.setup()
        await user.tab()

        // go to last option
        await user.keyboard('[ArrowDown>3/]')
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )

        // spam up
        await user.keyboard('[ArrowUp>9/]')
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
      it('loops to first when looping', async () => {
        const user = userEvent.setup()

        component.rerender(<Dropdown {...{ ...props, loop: true }} />)
        await act(() => tick())
        const options = await component.findAllByRole('option')

        await user.tab()

        await user.keyboard('[ArrowUp]')
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )

        await user.keyboard('[ArrowUp]')
        await waitFor(() =>
          expect(options[1].classList.contains('sg-highlighted')).toEqual(true)
        )

        await user.keyboard('[ArrowUp]')
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )

        await user.keyboard('[ArrowUp]')
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
    })
    describe('[Home]', () => {
      it('does nothing when inactive', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await user.keyboard('[Home]')
        await tick(50)
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      })
      it('opens and selects first when active', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await user.tab()
        await user.keyboard('[Home]')

        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        )
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
      it('selects first when open', async () => {
        const user = userEvent.setup()

        await user.tab()

        await user.keyboard('[ArrowDown>3/]')
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )

        await user.keyboard('[Home]')
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
    })
    describe('[End]', () => {
      it('does nothing when inactive', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await user.keyboard('[End]')
        await tick(50)
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      })
      it('opens and selects last when active', async () => {
        const user = userEvent.setup()
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        await user.tab()
        await user.keyboard('[End]')

        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        )
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
      it('selects first when open', async () => {
        const user = userEvent.setup()

        await user.tab()
        await user.keyboard('[ArrowDown]')
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )

        await user.keyboard('[End]')
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
    })
  })
})
