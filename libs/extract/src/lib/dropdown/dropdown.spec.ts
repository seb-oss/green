import {
  activate,
  close,
  create,
  deactivate,
  focus,
  observe,
  open,
  select,
  toggle,
  unobserve,
} from './dropdown'
import { AbstractDropdown, DropdownOption } from './types'

describe('dropdown', () => {
  let id: string
  let options: DropdownOption[]
  beforeEach(() => {
    id = 'foo'
    options = [
      { key: 'A', value: 1 },
      { key: 'B', value: 2 },
    ]
  })
  describe('create', () => {
    it('uses passed in id', () => {
      const dropdown = create({ id, options })

      expect(dropdown.id).toEqual('foo')
    })
    it('creates an id if not supplied', () => {
      const dropdown = create({ options })

      expect(dropdown.id).toBeTruthy()
    })
    describe('options', () => {
      it('contains options', () => {
        const dropdown = create({ options })
  
        expect(dropdown.options).toHaveLength(2)
      })
      it('sets option ids', () => {
        const dropdown = create({ id, options })
        const optionAttributes = dropdown.options.map((o) => o.attributes)

        expect(optionAttributes.map((o) => o.id)).toEqual([
          'foo_option0', 'foo_option1',
        ])
      })
      it('sets option roles', () => {
        const dropdown = create({ id, options })
        const optionAttributes = dropdown.options.map((o) => o.attributes)

        expect(optionAttributes.map((o) => o.role)).toEqual([
          'option', 'option',
        ])
      })
      it('sets option selected', () => {
        options[1].selected = true
        const dropdown = create({ id, options })
        const optionAttributes = dropdown.options.map((o) => o.attributes)

        expect(optionAttributes.map((o) => o['aria-selected'])).toEqual([
          undefined, true,
        ])
      })
    })
    describe('elements', () => {
      it('sets correct toggle attributes', () => {
        const dropdown = create({ id, options })

        expect(dropdown.elements.toggler.attributes).toEqual({
          'aria-haspopup': 'listbox',
          'aria-owns': 'foo',
          'aria-expanded': false,
        })
      })
      it('sets correct toggler classes', () => {
        const dropdown = create({ id, options })

        expect(dropdown.elements.toggler.classes).toEqual(['dropdown-toggle'])
      })
      it('sets correct listbox attributes', () => {
        const dropdown = create({ id, options })

        expect(dropdown.elements.listbox.attributes).toEqual({
          role: 'listbox',
          tabIndex: -1,
        })
      })
      it('sets correct listbox classes', () => {
        const dropdown = create({ id, options })

        expect(dropdown.elements.listbox.classes).toEqual(['popover'])
      })
    })
  })
  describe('interactions', () => {
    let dropdown: AbstractDropdown
    beforeEach(() => {
      dropdown = create({ id, options })
    })
    it('defaults to closed', () => {
      expect(dropdown.isOpen).toBe(false)
    })
    it('defaults to inactive', () => {
      expect(dropdown.isActive).toBe(false)
    })
    describe('open', () => {
      beforeEach(() => {
        dropdown = open(dropdown)
      })
      it('sets isOpen=true', () => {
        expect(dropdown.isOpen).toBe(true)
      })
      it('sets toggler.aria-expanded=true', () => {
        const expanded = dropdown.elements.toggler.attributes['aria-expanded']
        expect(expanded).toBe(true)
      })
      it('adds listbox class active', () => {
        const { classes } = dropdown.elements.listbox
        expect(classes).toContain('active')
      })

      describe('close', () => {
        beforeEach(() => {
          dropdown = close(dropdown)
        })
        it('sets isOpen=false', () => {
          expect(dropdown.isOpen).toBe(false)
        })
        it('sets toggler.aria-expanded=false', () => {
          const expanded = dropdown.elements.toggler.attributes['aria-expanded']
          expect(expanded).toBe(false)
        })
        it('removes listbox class active', () => {
          const { classes } = dropdown.elements.listbox
          expect(classes).not.toContain('active')
        })
      })
    })
    describe('activate', () => {
      beforeEach(() => {
        dropdown = activate(dropdown)
      })
      it('sets isActive to true', () => {
        expect(dropdown.isActive).toBe(true)
      })
      describe('deactivate', () => {
        beforeEach(() => {
          dropdown = deactivate(dropdown)
        })
        it('sets isActive to false', () => {
          expect(dropdown.isActive).toBe(false)
        })
      })
    })
    describe('toggle', () => {
      it('switches between open and close', () => {
        expect(dropdown.isOpen).toBe(false)
        dropdown = toggle(dropdown)
        expect(dropdown.isOpen).toBe(true)
        dropdown = toggle(dropdown)
        expect(dropdown.isOpen).toBe(false)
      })
    })
    describe('select', () => {
      beforeEach(() => {
        dropdown = open(dropdown)
      })
      it('sets option selected', () => {
        dropdown = select(dropdown, dropdown.options[1])
        const optionAttributes = dropdown.options.map((o) => o.attributes)

        expect(optionAttributes.map((o) => o['aria-selected'])).toEqual([
          undefined, true,
        ])
      })
      it('sets activedecendant', () => {
        const selectedOption = dropdown.options[1]
        dropdown = select(dropdown, selectedOption)
        const attrs = dropdown.elements.listbox.attributes

        expect(attrs['aria-activedescendant']).toEqual(selectedOption.attributes.id)
      })
      it('does not close dropdown', () => {
        dropdown = select(dropdown, dropdown.options[1])
        expect(dropdown.isOpen).toBe(true)
      })
      describe('with step', () => {
        it('sets first if no selection and step is 1', () => {
          dropdown = select(dropdown, 1)
          
          expect(dropdown.options[0].selected).toBe(true)
        })
        it('sets first if no selection and step is -1', () => {
          dropdown = select(dropdown, -1)
          
          expect(dropdown.options[0].selected).toBe(true)
        })
        it('sets second if first is selected and step is 1', () => {
          dropdown.options[0].selected = true
          dropdown = select(dropdown, 1)
          
          expect(dropdown.options[1].selected).toBe(true)
        })
        it('stays if last is selected and step is 1', () => {
          dropdown.options[1].selected = true
          dropdown = select(dropdown, 1)
          
          expect(dropdown.options[1].selected).toBe(true)
        })
        it('sets second if first is selected and step is 1', () => {
          dropdown.options[1].selected = true
          dropdown = select(dropdown, -1)
          
          expect(dropdown.options[0].selected).toBe(true)
        })
        it('stays if first is selected and step is -1', () => {
          dropdown.options[0].selected = true
          dropdown = select(dropdown, -1)
          
          expect(dropdown.options[0].selected).toBe(true)
        })
      })
    })
    describe('observe', () => {
      afterEach(() => unobserve(dropdown))
      describe('when inactive', () => {
        it('does not trigger key events', () => {
          const listener = jest.fn()
          observe(dropdown, listener)

          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }))
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }))
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home' }))
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'End' }))
          document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }))

          expect(listener).not.toHaveBeenCalled()
        })
      })
      describe('when active', () => {
        beforeEach(() => {
          dropdown = activate(dropdown)
        })
        it('opens dropdown on SPACE', () => {
          const listener = jest.fn()
          observe(dropdown, listener)

          document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }))

          expect(listener).toHaveBeenCalled()
        })
        it('closes dropdown on Escape', () => {
          const listener = jest.fn()
          observe(open(dropdown), listener)

          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))

          expect(listener).toHaveBeenCalled()
        })
      })
    })
  })
})
