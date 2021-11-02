import { DropdownOption, ExtendedDropdownOption, extendOptions, select } from './dropdown'

describe('dropdown', () => {
  describe('.extendOptions', () => {
    it('adds id', () => {
      const options: DropdownOption[] = [
        { key: 'a', value: 1 },
        { key: 'b', value: 2 },
      ]
      const expected: ExtendedDropdownOption[] = [
        { key: 'a', value: 1, id: 'id_option0' },
        { key: 'b', value: 2, id: 'id_option1' },
      ]
      const result = extendOptions(options, 'id')

      expect(result).toEqual(expected)
    })
  })
  describe('.select', () => {
    it('sets selected', () => {
      const items: ExtendedDropdownOption[] = [
        { key: 'a', value: 1, id: 'id_option0' },
        { key: 'b', value: 2, id: 'id_option1' },
      ]
      const expected: ExtendedDropdownOption[] = [
        { key: 'a', value: 1, id: 'id_option0', selected: false },
        { key: 'b', value: 2, id: 'id_option1', selected: true },
      ]
      const result = select(items, items[1])

      expect(result).toEqual(expected)
    })
    it('sets unselected', () => {
      const items: ExtendedDropdownOption[] = [
        { key: 'a', value: 1, id: 'id_option0', selected: true },
        { key: 'b', value: 2, id: 'id_option1' },
      ]
      const expected: ExtendedDropdownOption[] = [
        { key: 'a', value: 1, id: 'id_option0', selected: false },
        { key: 'b', value: 2, id: 'id_option1', selected: true },
      ]
      const result = select(items, items[1])

      expect(result).toEqual(expected)
    })
  })
})