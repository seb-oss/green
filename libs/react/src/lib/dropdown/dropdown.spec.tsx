import { fireEvent, render, waitFor } from '@testing-library/react'
import { Dropdown, DropdownProps } from './dropdown'
describe('Dropdown', () => {
  let props: DropdownProps
  beforeEach(() => {
    props = {
      options: [
        {key: 'A', value: 1},
        {key: 'B', value: 2},
        {key: 'C', value: 3},
      ]
    }
  })
  it('renders', () => {
    const { baseElement } = render(<Dropdown {...props} />)

    expect(baseElement).toBeTruthy()
  })
  it('sets correct classes on dropdown toggle', async () => {
    const { findAllByRole } = render(<Dropdown {...props} />)
    const buttons = await findAllByRole('button')
    const toggle = buttons[0]

    expect(toggle.className).toEqual('dropdown-toggle')
  })
  it('renders options', async () => {
    const { findAllByRole } = render(<Dropdown {...props} />)
    const options = await findAllByRole('option')

    expect(options).toHaveLength(3)
  })
  describe('toggle', () => {
    it('sets aria-expanded on trigger', async () => {
      const { findAllByRole } = render(<Dropdown {...props} />)
      const toggleButton = (await findAllByRole('button'))[0]

      // initial
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      
      // open
      fireEvent.click(toggleButton)
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
      
      // close
      fireEvent.click(toggleButton)
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
    })
    it('sets class active on listbox', async () => {
      const { findAllByRole } = render(<Dropdown {...props} />)
      const listbox = (await findAllByRole('listbox'))[0]
      const toggleButton = (await findAllByRole('button'))[0]
      
      // initial
      expect(listbox.className).toEqual('popover')
      
      // open
      fireEvent.click(toggleButton)
      expect(listbox.className).toEqual('popover active')
      
      // close
      fireEvent.click(toggleButton)
      expect(listbox.className).toEqual('popover')
    })
  })
  describe('select item', () => {
    let toggleButton: HTMLElement
    let listbox: HTMLElement
    let options: HTMLElement[]
    beforeEach(async () => {
      const { findAllByRole } = render(<Dropdown {...props} />)
      toggleButton = (await findAllByRole('button'))[0]
      listbox = (await findAllByRole('listbox'))[0]
      options = await findAllByRole('option')

      fireEvent.click(toggleButton)
    })
    it('sets aria-selected', () => {
      fireEvent.click(options[1])
      expect(options[1].getAttribute('aria-selected')).toEqual('true')
    })
    it('closes dropdown', () => {
      fireEvent.click(options[1])
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      expect(listbox.className).toEqual('popover')
    })
    it('sets toggler text', () => {
      fireEvent.click(options[1])
      expect(toggleButton.innerHTML.trim()).toEqual('B')
    })
  })
  describe('keyboard navigation', () => {
    describe('Space', () => {
      it('does nothing when inactive', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)

        const toggleButton = (await findAllByRole('button'))[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.keyDown(document, { key: ' ' })
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      })
      it('opens when active', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]

        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.focus(toggleButton)
        fireEvent.keyDown(document.activeElement || document, { key: ' ' })

        expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
      })
      it('closes when open', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]

        fireEvent.click(toggleButton)
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')

        fireEvent.focus(toggleButton)
        fireEvent.keyDown(document.activeElement || document, { key: ' ' })

        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      })
    })
    describe('Escape', () => {
      it('does nothing when inactive', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)

        const toggleButton = (await findAllByRole('button'))[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.keyDown(document, { key: 'Escape' })
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      })
      it('does nothing when not open', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]

        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.focus(toggleButton)
        fireEvent.keyDown(document.activeElement || document, { key: 'Escape' })

        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      })
      it('closes when open', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]

        fireEvent.click(toggleButton)
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')

        fireEvent.focus(toggleButton)
        fireEvent.keyDown(document.activeElement || document, { key: 'Escape' })

        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      })
    })
    describe('ArrowDown', () => {
      it('does nothing when inactive', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)

        const toggleButton = (await findAllByRole('button'))[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.keyDown(document, { key: 'ArrowDown' })
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      })
      it('opens when active', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]

        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.focus(toggleButton)
        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })

        expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
      })
      it('selects next when open', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]
        const options = await findAllByRole('option')

        fireEvent.focus(toggleButton)

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        expect(options[0].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        expect(options[1].getAttribute('aria-selected')).toEqual('true')
      })
      it('stops on last when not looping', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]
        const options = await findAllByRole('option')

        fireEvent.focus(toggleButton)

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        expect(options[0].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        expect(options[1].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        expect(options[2].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        expect(options[2].getAttribute('aria-selected')).toEqual('true')
      })
      it('loops to first when looping', async () => {
        props.loop = true
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]
        const options = await findAllByRole('option')

        fireEvent.focus(toggleButton)

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        expect(options[0].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        expect(options[1].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        expect(options[2].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        expect(options[0].getAttribute('aria-selected')).toEqual('true')
      })
    })
    describe('ArrowUp', () => {
      it('does nothing when inactive', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)

        const toggleButton = (await findAllByRole('button'))[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.keyDown(document, { key: 'ArrowUp' })
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      })
      it('opens when active', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]

        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.focus(toggleButton)
        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })

        expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
      })
      it('selects previous when open', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]
        const options = await findAllByRole('option')

        fireEvent.focus(toggleButton)
        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        expect(options[2].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
        expect(options[1].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
        expect(options[0].getAttribute('aria-selected')).toEqual('true')
      })
      it('stops on first when not looping', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]
        const options = await findAllByRole('option')

        fireEvent.focus(toggleButton)

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        expect(options[2].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
        expect(options[1].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
        expect(options[0].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
        expect(options[0].getAttribute('aria-selected')).toEqual('true')
      })
      it('loops to first when looping', async () => {
        props.loop = true
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]
        const options = await findAllByRole('option')

        fireEvent.focus(toggleButton)

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
        expect(options[2].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
        expect(options[1].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
        expect(options[0].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowUp' })
        expect(options[2].getAttribute('aria-selected')).toEqual('true')
      })
    })
    describe('Home', () => {
      it('does nothing when inactive', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)

        const toggleButton = (await findAllByRole('button'))[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.keyDown(document, { key: 'Home' })
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      })
      it('opens and selects first when active', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]
        const options = await findAllByRole('option')

        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.focus(toggleButton)
        fireEvent.keyDown(document.activeElement || document, { key: 'Home' })

        expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        expect(options[0].getAttribute('aria-selected')).toEqual('true')
      })
      it('selects first when open', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]
        const options = await findAllByRole('option')

        fireEvent.focus(toggleButton)
        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        expect(options[2].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'Home' })
        expect(options[0].getAttribute('aria-selected')).toEqual('true')
      })
    })
    describe('End', () => {
      it('does nothing when inactive', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)

        const toggleButton = (await findAllByRole('button'))[0]
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.keyDown(document, { key: 'End' })
        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')
      })
      it('opens and selects last when active', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]
        const options = await findAllByRole('option')

        expect(toggleButton.getAttribute('aria-expanded')).toEqual('false')

        fireEvent.focus(toggleButton)
        fireEvent.keyDown(document.activeElement || document, { key: 'End' })

        expect(toggleButton.getAttribute('aria-expanded')).toEqual('true')
        expect(options[2].getAttribute('aria-selected')).toEqual('true')
      })
      it('selects first when open', async () => {
        const { findAllByRole } = render(<Dropdown {...props} />)
        const toggleButton = (await findAllByRole('button'))[0]
        const options = await findAllByRole('option')

        fireEvent.focus(toggleButton)
        fireEvent.keyDown(document.activeElement || document, { key: 'ArrowDown' })
        expect(options[0].getAttribute('aria-selected')).toEqual('true')

        fireEvent.keyDown(document.activeElement || document, { key: 'End' })
        expect(options[2].getAttribute('aria-selected')).toEqual('true')
      })
    })
  })
})
