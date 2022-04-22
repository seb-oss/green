import { dropdownValues, optionValues } from './defaultValues'
import { randomId } from '../id'
import reduce from '../reduce'
import {
  AbstractDropdown,
  DropdownArgs,
  DropdownOption,
  ExtendedDropdownOption,
} from './types'

const distinct = <T>(arr: T[]): T[] => {
  const map: Record<string, boolean> = {}
  return arr.filter((item) => {
    const key = typeof item === 'string' ? item : JSON.stringify(item)
    if (map[key]) return false
    else {
      map[key] = true
      return true
    }
  })
}

const addClass = (classes: string[] | undefined, newClass: string): string[] =>
  distinct((classes || []).concat(newClass))

const removeClass = (
  classes: string[] | undefined,
  removeClass: string
): string[] => (classes || []).filter((item) => item !== removeClass)

const extendOption = (
  id: string,
  option: DropdownOption,
  ix: number
): ExtendedDropdownOption =>
  reduce<ExtendedDropdownOption>(optionValues, option, {
    attributes: {
      id: `${id}_option${ix}`,
      role: 'option',
      'aria-selected': option.selected || undefined,
    },
    classes: [],
  })
const extendOptions = (
  options: DropdownOption[],
  id: string
): ExtendedDropdownOption[] =>
  options?.map((option, ix) => extendOption(id, option, ix))

export const create = ({
  id = randomId(),
  text,
  options: _options,
  loop,
  value,
}: DropdownArgs): AbstractDropdown => {
  if (value) {
    _options = _options?.map((option) => ({
      ...option,
      selected: option.value === value,
    }))
  }
  const options = extendOptions(_options, id)
  const selected = options?.find((option) => option.selected)
  const dropdown: Partial<AbstractDropdown> = {
    id,
    text: selected?.key || text || 'dropdown',
    elements: {
      toggler: {
        attributes: { id: `${id}_toggle`, 'aria-owns': id },
      },
      listbox: {
        attributes: { id },
      },
    },
    options,
    isLooping: loop,
  }

  return reduce(dropdown, dropdownValues)
}

export const open = (dropdown: AbstractDropdown): AbstractDropdown =>
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
export const close = (dropdown: AbstractDropdown): AbstractDropdown =>
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
export const toggle = (dropdown: AbstractDropdown): AbstractDropdown => {
  const newDD = dropdown.isOpen ? close(dropdown) : open(dropdown)
  return newDD
}
export const select = (
  dropdown: AbstractDropdown,
  selection: ExtendedDropdownOption | number
): AbstractDropdown => {
  let option: ExtendedDropdownOption
  if (typeof selection === 'number') {
    const opts = dropdown.options
    const currentlySelectedIndex = opts.findIndex((o) => o.selected)
    let newSelectedIndex = currentlySelectedIndex + selection
    if (newSelectedIndex < 0)
      newSelectedIndex = dropdown.isLooping ? opts.length - 1 : 0
    if (newSelectedIndex >= opts.length)
      newSelectedIndex = dropdown.isLooping ? 0 : opts.length - 1
    option = opts[newSelectedIndex]
  } else {
    option = selection
  }
  return reduce(dropdown, {
    text: option.key,
    elements: {
      listbox: {
        attributes: {
          'aria-activedescendant': option.attributes.id,
        },
      },
    },
    options: dropdown.options.map((o) =>
      reduce(o, {
        selected: o === option,
        attributes: {
          'aria-selected': o === option || undefined,
        },
      })
    ),
  })
}
export const active = (
  dropdown: AbstractDropdown,
  isActive: boolean
): AbstractDropdown =>
  reduce(dropdown, { isActive } as Partial<AbstractDropdown>)
export const loop = (
  dropdown: AbstractDropdown,
  isLooping: boolean
): AbstractDropdown =>
  reduce(dropdown, { isLooping } as Partial<AbstractDropdown>)
export const keypress = (
  dropdown: AbstractDropdown,
  key: string,
  event: KeyboardEvent
): AbstractDropdown | undefined => {
  const opts = dropdown.options
  let action
  switch (key) {
    case ' ':
      action = toggle(dropdown)
      break
    case 'Escape':
      if (dropdown.isOpen) action = close(dropdown)
      break
    case 'ArrowDown':
      action = dropdown.isOpen
        ? select(dropdown, 1)
        : open(select(dropdown, opts[0]))
      break
    case 'ArrowUp':
      action = dropdown.isOpen
        ? select(dropdown, -1)
        : open(
            select(
              dropdown,
              dropdown.isLooping ? opts[opts.length - 1] : opts[0]
            )
          )
      break
    case 'Home':
      action = open(select(dropdown, opts[0]))
      break
    case 'End':
      action = open(select(dropdown, opts[opts.length - 1]))
      break
    default:
      break
  }

  if (action) {
    event.preventDefault()
  }
  return action
}

export const popper = (
  dropdown: AbstractDropdown,
  style?: CSSStyleDeclaration
): AbstractDropdown =>
  reduce(dropdown, { elements: { listbox: { attributes: { style } } } })
