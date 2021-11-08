import {
  AbstractDropdown,
  create,
  DropdownOption,
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
      it('sets correct option attributes', () => {
        options[1].selected = true
        const dropdown = create({ id, options })
        const optionAttributes = dropdown.options.map((o) => o.attributes)

        expect(optionAttributes).toEqual([
          { id: 'foo_option0', role: 'option' },
          { id: 'foo_option1', role: 'option', 'aria-selected': true },
        ])
      })
    })
    describe('elements', () => {
      it('sets correct toggle attributes', () => {
        const dropdown = create({ id, options })

        expect(dropdown.elements.toggle.attributes).toEqual({
          'aria-haspopup': 'listbox',
          'aria-owns': 'foo',
          'aria-expanded': false,
        })
      })
      it('sets correct toggle classes', () => {
        const dropdown = create({ id, options })

        expect(dropdown.elements.toggle.classes).toEqual(['dropdown-toggle'])
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
          dropdown = dropdown.open()
        })
        it('sets isOpen=true', () => {
          expect(dropdown.isOpen).toBe(true)
        })
        it('sets toggle.aria-expanded=true', () => {
          const expanded = dropdown.elements.toggle.attributes['aria-expanded']
          expect(expanded).toBe(true)
        })
        it('adds listbox class active', () => {
          const { classes } = dropdown.elements.listbox
          expect(classes).toContain('active')
        })

        describe('close', () => {
          beforeEach(() => {
            dropdown = dropdown.close()
          })
          it('sets isOpen=false', () => {
            expect(dropdown.isOpen).toBe(false)
          })
          it('sets toggle.aria-expanded=false', () => {
            const expanded = dropdown.elements.toggle.attributes['aria-expanded']
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
          dropdown = dropdown.toggle()
          expect(dropdown.isOpen).toBe(true)
          dropdown = dropdown.toggle()
          expect(dropdown.isOpen).toBe(false)
        })
      })
    })
  })
})
