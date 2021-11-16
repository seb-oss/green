import { dropdownValues, optionValues } from './defaultValues'
import { randomId } from '../id'
import reduce from '../reduce'
import {
  AbstractDropdown,
  DropdownOption,
  ExtendedDropdownOption,
} from './types'

const distinct = <T>(arr: T[]): T[] => {
  const map: Record<string, boolean> = {}
  return arr.filter((item) => {
    const key = (typeof item === 'string') ? item : JSON.stringify(item)
    if (map[key]) return false
    else {
      map[key] = true
      return true
    }
  })
}

const addClass = (classes: string[] | undefined, newClass: string): string[] => (
  distinct((classes || []).concat(newClass))
)

const removeClass = (classes: string[] | undefined, removeClass: string): string[] => (
  (classes || []).filter((item) => item !== removeClass)
)

const extendOption = (id: string, option: DropdownOption, ix: number): ExtendedDropdownOption => (
  reduce<ExtendedDropdownOption>(optionValues, option, {
    attributes: {
      id: `${id}_option${ix}`,
      role: 'option',
      'aria-selected': option.selected || undefined,
    },
    classes: [],
  })
)
const extendOptions = (options: DropdownOption[], id: string): ExtendedDropdownOption[] => (
  options.map((option, ix) => extendOption(id, option, ix))
)

interface DropdownArgs {
  id?: string
  options: DropdownOption[]
  text?: string
}
export const create = ({ id = randomId(), text, options: _options }: DropdownArgs): AbstractDropdown => {
  const settings: Partial<AbstractDropdown> = {
    id,
    text: text || 'dropdown',
    elements: {
      toggler: {
        attributes: { 'aria-owns': id },
      },
    },
  }
  const options = extendOptions(_options, id)
  return reduce<AbstractDropdown>(dropdownValues, settings, { options })
}

export const open = (dropdown: AbstractDropdown): AbstractDropdown => (
  reduce(dropdown, {
    isOpen: true,
    elements: {
      toggler: {
        attributes: {
          'aria-expanded': true,
        },
      },
      listbox: {
        classes: addClass(dropdown.elements?.listbox?.classes, 'active'),
      },
    },
  })
)
export const close = (dropdown: AbstractDropdown): AbstractDropdown => (
  reduce(dropdown, {
    isOpen: false,
    elements: {
      toggler: {
        attributes: {
          'aria-expanded': false,
        },
      },
      listbox: {
        classes: removeClass(dropdown.elements?.listbox?.classes, 'active'),
      },
    },
  })
)
export const toggle = (dropdown: AbstractDropdown): AbstractDropdown => (
  (dropdown.isOpen) ? close(dropdown) : open(dropdown)
)
export const select = (dropdown: AbstractDropdown, option: ExtendedDropdownOption): AbstractDropdown => (
  reduce(close(dropdown), {
    text: option.key,
    options: dropdown.options.map((o) => reduce(o, {
      selected: o === option,
      attributes: {
        'aria-selected': o === option || undefined,
      },
    }))
  })
)
export const focus = (dropdown: AbstractDropdown, option: ExtendedDropdownOption): AbstractDropdown => (
  dropdown
)
