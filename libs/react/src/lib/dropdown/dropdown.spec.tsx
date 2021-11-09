import { fireEvent, render, waitFor } from '@testing-library/react'
import { Dropdown, DropdownProps } from './dropdown'
describe('Dropdown', () => {
  let props: DropdownProps
  beforeEach(() => {
    props = {
      options: [
        {key: 'A', value: 1},
        {key: 'B', value: 2},
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

    expect(options).toHaveLength(2)
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
})
