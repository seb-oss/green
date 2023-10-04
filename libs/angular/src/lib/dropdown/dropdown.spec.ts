import { DropdownArgs } from '@sebgroup/extract'
import { fireEvent, render, waitFor } from '@testing-library/angular'
import { NggDropdownComponent } from './dropdown.component'

describe('Dropdown', () => {
  const props: DropdownArgs = {
    options: [
      { label: 'A', value: 1 },
      { label: 'B', value: 2 },
      { label: 'C', value: 3 },
    ],
  }

  it('renders', async () => {
    const { fixture } = await render(NggDropdownComponent, {
      componentProperties: { ...props },
    })
    expect(fixture.componentInstance).toBeTruthy()
  })

  it('sets correct classes on dropdown toggle', async () => {
    const { findAllByRole } = await render(NggDropdownComponent, {
      componentProperties: { ...props },
    })
    const buttons = await findAllByRole('combobox')

    expect(buttons[0].classList).toContain('dropdown-toggle')
  })

  it('renders options', async () => {
    const { findAllByRole } = await render(NggDropdownComponent, {
      componentProperties: { ...props },
    })
    const options = await findAllByRole('option')
    expect(options).toHaveLength(3)
  })

  describe('toggle', () => {
    it('sets aria-expanded on trigger', async () => {
      const { findAllByRole } = await render(NggDropdownComponent, {
        componentProperties: { ...props },
      })
      const buttons = await findAllByRole('combobox')
      const toggleButton = buttons[0]
      // initial
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

      // open
      fireEvent.click(toggleButton)
      await waitFor(() =>
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
      )

      // close
      fireEvent.click(toggleButton)
      await waitFor(() =>
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      )
    })
    it('sets class active on listbox', async () => {
      const { findAllByRole } = await render(NggDropdownComponent, {
        componentProperties: { ...props },
      })
      const listboxes = await findAllByRole('listbox')
      const listbox = listboxes[0]
      const buttons = await findAllByRole('combobox')
      const toggleButton = buttons[0]
      // initial
      expect(listbox.className).toEqual('_popover popover-dropdown')

      // open
      fireEvent.click(toggleButton)
      await waitFor(() =>
        expect(listbox.className).toEqual('_popover popover-dropdown active')
      )

      // close
      fireEvent.click(toggleButton)
      await waitFor(() =>
        expect(listbox.className).toEqual('_popover popover-dropdown')
      )
    })
  })
  describe('mouse interaction', () => {
    describe('click option', () => {
      it('sets aria-selected', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const options = await findAllByRole('option')
        const toggleButton = buttons[0]
        fireEvent.click(toggleButton)
        fireEvent.click(options[1])
        await waitFor(() =>
          expect(options[1].getAttribute('aria-selected')).toEqual('true')
        )
      })
      it('closes dropdown', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const options = await findAllByRole('option')
        const listboxes = await findAllByRole('listbox')
        const toggleButton = buttons[0]
        fireEvent.click(toggleButton)
        fireEvent.click(options[1])
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
        await waitFor(() =>
          expect(listboxes[0].className).toEqual('_popover popover-dropdown')
        )
      })
      it('sets toggler text', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const options = await findAllByRole('option')
        const toggleButton = buttons[0]
        fireEvent.click(toggleButton)
        fireEvent.click(options[1])
        await waitFor(() =>
          expect(
            toggleButton.innerHTML.trim().replace(/<!--[\s\S]*?-->/g, '')
          ).toEqual('<span>B</span>')
        )
      })
    })
    describe('click outside', () => {
      it('closes the dropdown', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const toggleButton = buttons[0]
        fireEvent.click(toggleButton)
        fireEvent.click(document.body)
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
    })
  })
  describe('keyboard navigation', () => {
    describe('Space', () => {
      it('does nothing when inactive', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const toggleButton = buttons[0]
        fireEvent.click(toggleButton)
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.keyDown(document, { key: ' ' })
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
      it('opens when active', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const toggleButton = buttons[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        toggleButton.focus()
        fireEvent.keyDown(document, { key: ' ' })

        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        )
      })
      it('closes when open', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const toggleButton = buttons[0]
        fireEvent.click(toggleButton)
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        )

        toggleButton.focus()
        fireEvent.keyDown(document, { key: ' ' })

        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
    })
    describe('Escape', () => {
      it('does nothing when inactive', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const toggleButton = buttons[0]
        fireEvent.click(toggleButton)
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.keyDown(document, { key: 'Escape' })
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
      it('does nothing when not open', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const toggleButton = buttons[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        toggleButton.focus()
        fireEvent.keyDown(document, {
          key: 'Escape',
        })

        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
      it('closes when open', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const toggleButton = buttons[0]
        fireEvent.click(toggleButton)
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        )

        toggleButton.focus()
        fireEvent.keyDown(document, {
          key: 'Escape',
        })

        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
    })
    describe('ArrowDown', () => {
      it('does nothing when inactive', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const toggleButton = buttons[0]
        fireEvent.click(toggleButton)
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.keyDown(document, { key: 'ArrowDown' })
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
      it('opens when active', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const toggleButton = buttons[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        toggleButton.focus()
        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })

        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        )
      })
      it('selects next when open', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const options = await findAllByRole('option')
        const toggleButton = buttons[0]

        toggleButton.focus()

        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )

        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        await waitFor(() =>
          expect(options[1].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
      it('stops on last when not looping', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const options = await findAllByRole('option')
        const toggleButton = buttons[0]
        toggleButton.focus()

        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )

        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        await waitFor(() =>
          expect(options[1].classList.contains('sg-highlighted')).toEqual(true)
        )

        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )

        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
      it('loops to first when looping', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props, loop: true },
        })

        const [_buttons, _listboxes, _options] = [
          await findAllByRole('combobox'),
          await findAllByRole('listbox'),
          await findAllByRole('option'),
        ]

        const toggleButton = _buttons[0]
        const options = _options

        toggleButton.focus()

        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        await waitFor(() =>
          expect(options[0].classList.contains('active')).toEqual(true)
        )

        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        await waitFor(() =>
          expect(options[1].classList.contains('active')).toEqual(true)
        )

        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        await waitFor(() =>
          expect(options[2].classList.contains('active')).toEqual(true)
        )

        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        await waitFor(() =>
          expect(options[0].classList.contains('active')).toEqual(true)
        )
      })
    })
    describe('ArrowUp', () => {
      it('does nothing when inactive', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const toggleButton = buttons[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.keyDown(document, { key: 'ArrowUp' })
        // TODO: await tick(50)
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      })
      it('opens when active', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const toggleButton = buttons[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        toggleButton.focus()
        fireEvent.keyDown(document, {
          key: 'ArrowUp',
        })

        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        )
      })
      it('selects previous when open', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const options = await findAllByRole('option')
        const toggleButton = buttons[0]
        toggleButton.focus()
        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )

        fireEvent.keyDown(document, {
          key: 'ArrowUp',
        })
        await waitFor(() =>
          expect(options[1].classList.contains('sg-highlighted')).toEqual(true)
        )

        fireEvent.keyDown(document, {
          key: 'ArrowUp',
        })
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
      it('stops on first when not looping', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const options = await findAllByRole('option')
        const toggleButton = buttons[0]
        toggleButton.focus()

        // go to last option
        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )

        // spam up
        fireEvent.keyDown(document, {
          key: 'ArrowUp',
        })
        fireEvent.keyDown(document, {
          key: 'ArrowUp',
        })
        fireEvent.keyDown(document, {
          key: 'ArrowUp',
        })
        fireEvent.keyDown(document, {
          key: 'ArrowUp',
        })
        fireEvent.keyDown(document, {
          key: 'ArrowUp',
        })
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
      it('loops to first when looping', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props, loop: true },
        })
        const buttons = await findAllByRole('combobox')
        const options = await findAllByRole('option')
        const toggleButton = buttons[0]

        toggleButton.focus()

        fireEvent.keyDown(document, {
          key: 'ArrowUp',
        })
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )

        fireEvent.keyDown(document, {
          key: 'ArrowUp',
        })
        await waitFor(() =>
          expect(options[1].classList.contains('sg-highlighted')).toEqual(true)
        )

        fireEvent.keyDown(document, {
          key: 'ArrowUp',
        })
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )

        fireEvent.keyDown(document, {
          key: 'ArrowUp',
        })
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
    })
    describe('Home', () => {
      it('does nothing when inactive', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const toggleButton = buttons[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.keyDown(document, { key: 'Home' })
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
      it('opens and selects first when active', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const options = await findAllByRole('option')
        const toggleButton = buttons[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        toggleButton.focus()
        fireEvent.keyDown(document, { key: 'Home' })

        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        )
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
      it('selects first when open', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const options = await findAllByRole('option')
        const toggleButton = buttons[0]
        toggleButton.focus()
        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )

        fireEvent.keyDown(document, { key: 'Home' })
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
    })
    describe('End', () => {
      it('does nothing when inactive', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const toggleButton = buttons[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.keyDown(document, { key: 'End' })
        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
        )
      })
      it('opens and selects last when active', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const options = await findAllByRole('option')
        const toggleButton = buttons[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        toggleButton.focus()
        fireEvent.keyDown(document, { key: 'End' })

        await waitFor(() =>
          expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        )
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
      it('selects last when open', async () => {
        const { findAllByRole } = await render(NggDropdownComponent, {
          componentProperties: { ...props },
        })
        const buttons = await findAllByRole('combobox')
        const options = await findAllByRole('option')
        const toggleButton = buttons[0]
        toggleButton.focus()
        fireEvent.keyDown(document, {
          key: 'ArrowDown',
        })
        await waitFor(() =>
          expect(options[0].classList.contains('sg-highlighted')).toEqual(true)
        )

        fireEvent.keyDown(document, { key: 'End' })
        await waitFor(() =>
          expect(options[2].classList.contains('sg-highlighted')).toEqual(true)
        )
      })
    })
  })
})
