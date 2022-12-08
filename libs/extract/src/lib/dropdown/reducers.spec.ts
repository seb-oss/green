import {
  active,
  blur,
  close,
  create,
  open,
  select,
  selectByValue,
  toggle,
  loop,
  highlight,
  search,
  resetTouchedProperty,
} from './reducers'
import { AbstractDropdown, DropdownOption, DropdownTexts } from './types'

describe('dropdown/reducers', () => {
  let id: string
  let texts: DropdownTexts
  let options: DropdownOption[]
  beforeEach(() => {
    id = 'foo'
    texts = {
      close: 'Close',
      optionsDescription: 'Options',
      select: 'Selected',
      selected: 'selected',
      placeholder: 'Select',
      searchPlaceholder: 'Search',
    }
    options = [
      { label: 'A', value: 1 },
      { label: 'B', value: 2 },
    ]
  })
  describe('create', () => {
    it('uses passed in id', () => {
      const dropdown = create({ id, options })
      expect(dropdown.id).toEqual('foo')
    })
    it('uses passed in text', () => {
      const dropdown = create({ id, options, texts })
      expect(dropdown.texts).toEqual({ ...texts, select: texts.placeholder })
    })
    it('uses default option text', () => {
      const defaultOption = {
        label: 'C',
        value: 3,
        selected: true,
      }
      const _options = [...options, defaultOption]
      const dropdown = create({ id, options: _options, texts })
      expect(dropdown.texts.select).toEqual(defaultOption.label)
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
          'foo_option0',
          'foo_option1',
        ])
      })
      it('sets option roles', () => {
        const dropdown = create({ id, options })
        const optionAttributes = dropdown.options.map((o) => o.attributes)

        expect(optionAttributes.map((o) => o.role)).toEqual([
          'option',
          'option',
        ])
      })
      it('sets default option by value', () => {
        const dropdown = create({ id, options, value: 2 })
        const optionAttributes = dropdown.options.map((o) => o.attributes)

        expect(optionAttributes.map((o) => o['aria-selected'])).toEqual([
          undefined,
          true,
        ])
      })
      it('sets detfault option by selected boolean', () => {
        options[1].selected = true
        const dropdown = create({ id, options })
        const optionAttributes = dropdown.options.map((o) => o.attributes)

        expect(optionAttributes.map((o) => o['aria-selected'])).toEqual([
          undefined,
          true,
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
          id: 'foo_toggle',
        })
      })
      it('sets correct toggler classes', () => {
        const dropdown = create({ id, options })

        expect(dropdown.elements.toggler.classes).toEqual(['dropdown-toggle'])
      })
      it('sets correct listbox attributes', () => {
        const dropdown = create({ id, options })

        expect(dropdown.elements.listbox.attributes).toEqual({
          id,
          role: 'listbox',
          tabIndex: -1,
        })
      })
      it('sets correct listbox classes', () => {
        const dropdown = create({ id, options })

        expect(dropdown.elements.listbox.classes).toEqual([
          '_popover',
          'popover-dropdown',
        ])
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
    describe('blur', () => {
      it('sets isTouched to true', () => {
        dropdown = blur(dropdown)
        expect(dropdown.isTouched).toBe(true)
      })
      it('keep isTouched as false on opening', () => {
        dropdown = open(dropdown)
        dropdown = blur(dropdown)
        expect(dropdown.isTouched).toBe(false)
      })
      it('sets isTouched to true on close', () => {
        dropdown = open(dropdown)
        dropdown = close(dropdown)
        expect(dropdown.isTouched).toBe(true)
      })
    })
    describe('active', () => {
      it('sets isActive to true', () => {
        dropdown = active(dropdown, true)
        expect(dropdown.isActive).toBe(true)
      })
      it('sets isActive to false', () => {
        dropdown = active(dropdown, false)
        expect(dropdown.isActive).toBe(false)
      })
    })
    describe('loop', () => {
      it('sets isLooping to true', () => {
        dropdown = loop(dropdown, true)
        expect(dropdown.isLooping).toBe(true)
      })
      it('sets isActive to false', () => {
        dropdown = loop(dropdown, false)
        expect(dropdown.isLooping).toBe(false)
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
          undefined,
          true,
        ])
        expect(dropdown.value).toEqual(2)
      })
      it('sets text', () => {
        const selectedOption = dropdown.options[1]
        dropdown = select(dropdown, selectedOption)
        expect(dropdown.texts.select).toEqual(selectedOption.label)
      })
      it('sets activedecendant', () => {
        const selectedOption = dropdown.options[1]
        dropdown = select(dropdown, selectedOption)
        const attrs = dropdown.elements.listbox.attributes

        expect(attrs['aria-activedescendant']).toEqual(
          selectedOption.attributes.id
        )
      })
      it('does not close dropdown', () => {
        dropdown = select(dropdown, dropdown.options[1])
        expect(dropdown.isOpen).toBe(true)
      })
    })
    describe('selectByValue', () => {
      it('sets option selected', () => {
        dropdown = selectByValue(dropdown, dropdown.options[1].value)
        expect(dropdown.value).toEqual(2)
      })
      it('sets empty value to reset previous selection', () => {
        dropdown = selectByValue(dropdown, dropdown.options[1].value)
        dropdown = selectByValue(dropdown, undefined)
        expect(dropdown.value).toEqual(undefined)
        expect(dropdown.texts.select).toEqual(texts.placeholder)
      })
    })
    describe('select multiple', () => {
      beforeEach(() => {
        dropdown = create({ id, options, multiSelect: true })
        dropdown = open(dropdown)
      })
      it('sets 2 options selected', () => {
        dropdown = select(dropdown, dropdown.options[0])
        dropdown = select(dropdown, dropdown.options[1])
        const selectedOptions = dropdown.options.map((o) => o.selected)

        expect(selectedOptions).toEqual([true, true])
        expect(JSON.stringify(dropdown.value)).toEqual(JSON.stringify([1, 2]))
      })
      it('invert selected option', () => {
        // select
        dropdown = select(dropdown, dropdown.options[0])
        expect(dropdown.options[0].selected).toEqual(true)

        // deselect
        dropdown = select(dropdown, dropdown.options[0])
        expect(dropdown.options[0].selected).toEqual(false)
      })
    })
    describe('highlight', () => {
      beforeEach(() => {
        dropdown = open(dropdown)
      })
      it('does not close dropdown', () => {
        dropdown = highlight(dropdown, dropdown.options[1])
        expect(dropdown.isOpen).toBe(true)
      })
      describe('with step', () => {
        it('highlight first if no selection and step is 1', () => {
          dropdown = highlight(dropdown, dropdown.options[0])

          expect(dropdown.options[0].active).toBe(true)
        })
        it('highlight first if no selection and step is -1', () => {
          dropdown = highlight(dropdown, -1)

          expect(dropdown.options[0].active).toBe(true)
        })
        it('highlight second if first is selected and step is 1', () => {
          dropdown.options[0].active = true
          dropdown = highlight(dropdown, 1)

          expect(dropdown.options[1].active).toBe(true)
        })
        it('stays if last is selected and step is 1', () => {
          dropdown.options[1].active = true
          dropdown = highlight(dropdown, 1)

          expect(dropdown.options[1].active).toBe(true)
        })
        it('highlight second if first is selected and step is 1', () => {
          dropdown.options[1].active = true
          dropdown = highlight(dropdown, -1)

          expect(dropdown.options[0].active).toBe(true)
        })
        it('stays if first is selected and step is -1', () => {
          dropdown.options[0].active = true
          dropdown = highlight(dropdown, -1)

          expect(dropdown.options[0].active).toBe(true)
        })
        describe('loop', () => {
          beforeEach(() => {
            dropdown = active(loop(dropdown, true), true)
          })
          it('highlight last if no selection and step is -1', () => {
            dropdown = highlight(dropdown, -1)

            expect(dropdown.options[1].active).toBe(true)
          })
          it('highlight first if last is selected and step is 1', () => {
            dropdown.options[1].active = true
            dropdown = highlight(dropdown, 1)

            expect(dropdown.options[0].active).toBe(true)
          })
          it('sets last if first is selected and step is -1', () => {
            dropdown.options[0].active = true
            dropdown = highlight(dropdown, -1)

            expect(dropdown.options[1].active).toBe(true)
          })
        })
      })
    })
    describe('search', () => {
      it('adds hidden class from options not containing search text', () => {
        dropdown = search(dropdown, 'A')

        expect(dropdown.options[0].classes).not.toContain('hidden')
        expect(dropdown.options[1].classes).toContain('hidden')
      })
      it('removes hidden class from options containing search text', () => {
        dropdown = search(dropdown, 'A')
        dropdown = search(dropdown, 'B')

        expect(dropdown.options[0].classes).toContain('hidden')
        expect(dropdown.options[1].classes).not.toContain('hidden')
      })
      it('removes hidden class from options containing custom search filter', () => {
        dropdown.searchFilter = (search, value) => {
          return value.toString().includes(search)
        }
        dropdown = search(dropdown, '1')
        dropdown = search(dropdown, '2')

        expect(dropdown.options[0].classes).toContain('hidden')
        expect(dropdown.options[1].classes).not.toContain('hidden')
      })
      it('removes hidden class from all options when search text is empty', () => {
        dropdown = search(dropdown, 'A')
        dropdown = search(dropdown, '')

        expect(dropdown.options[0].classes).not.toContain('hidden')
        expect(dropdown.options[1].classes).not.toContain('hidden')
      })
    })

    describe('reset', () => {
      it('resets dropdown property to false', () => {
        dropdown = resetTouchedProperty({ ...dropdown, isTouched: true })
        expect(dropdown.isTouched).toEqual(false)
      })
    })
  })
})
