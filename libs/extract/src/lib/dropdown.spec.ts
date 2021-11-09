import {
  AbstractDropdown,
  close,
  create,
  DropdownOption,
  open,
  select,
  toggle,
} from './dropdown'

describe('dropdown', () => {
  describe('create', () => {
    let id: string
    let options: DropdownOption[]
    beforeEach(() => {
      id = 'foo'
      options = [
        { key: 'A', value: 1 },
        { key: 'B', value: 2 },
      ]
    })
    it('uses passed in id', () => {
      const dropdown = create({ id, options })

      expect(dropdown.id).toEqual('foo')
    })
    it('creates an id if not supplied', () => {
      const dropdown = create({ options })

      expect(dropdown.id).toBeTruthy()
    })
    it('contains options', () => {
      const dropdown = create({ options })

      expect(dropdown.options).toHaveLength(2)
    })
    describe('options', () => {
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
    describe('interactions', () => {
      let dropdown: AbstractDropdown
      beforeEach(() => {
        dropdown = create({ id, options })
      })
      it('defaults to closed', () => {
        expect(dropdown.isOpen).toBe(false)
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
        it('sets option selected', () => {
          dropdown = select(dropdown, dropdown.options[1])
          const optionAttributes = dropdown.options.map((o) => o.attributes)
  
          expect(optionAttributes.map((o) => o['aria-selected'])).toEqual([
            undefined, true,
          ])
        })
      })
    })
  })
})
