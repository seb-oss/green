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
  loop?: boolean
  text?: string
}
export const create = ({ id = randomId(), text, options: _options, loop }: DropdownArgs): AbstractDropdown => {
  const options = extendOptions(_options, id)
  const dropdown: Partial<AbstractDropdown> = {
    id,
    text: text || 'dropdown',
    elements: {
      toggler: {
        attributes: { 'aria-owns': id },
      },
      listbox: {
        attributes: { id },
      },
    },
    options,
    loop,
  }

  return reduce(dropdown, dropdownValues)
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
export const select = (dropdown: AbstractDropdown, selection: ExtendedDropdownOption | number): AbstractDropdown => {
  let option: ExtendedDropdownOption
  if (typeof selection === 'number') {
    const opts = dropdown.options
    const currentlySelectedIndex = opts.findIndex((o) => o.selected)
    let newSelectedIndex = currentlySelectedIndex + selection
    if (newSelectedIndex < 0) newSelectedIndex = dropdown.loop ? opts.length - 1 : 0
    if (newSelectedIndex >= opts.length) newSelectedIndex = dropdown.loop ? 0 : opts.length - 1
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
        }
      }
    },
    options: dropdown.options.map((o) => reduce(o, {
      selected: o === option,
      attributes: {
        'aria-selected': o === option || undefined,
      },
    }))
  })
}
export const active = (dropdown: AbstractDropdown, isActive: boolean): AbstractDropdown => (
  reduce(dropdown, { isActive } as Partial<AbstractDropdown>)
)
export const loop = (dropdown: AbstractDropdown, isLooping: boolean): AbstractDropdown => (
  reduce(dropdown, { loop: isLooping } as Partial<AbstractDropdown>)
)
export const keypress = (dropdown: AbstractDropdown, key: string): AbstractDropdown|undefined => {
  const opts = dropdown.options
  switch (key) {
    case ' ':
      return toggle(dropdown)
    case 'Escape':
      if (!dropdown.isOpen) return
      return close(dropdown)
    case 'ArrowDown':
      return (dropdown.isOpen)
        ? select(dropdown, 1) 
        : open(select(dropdown, opts[0]))
    case 'ArrowUp':
      return (dropdown.isOpen)
        ? select(dropdown, -1) 
        : open(select(dropdown, (dropdown.loop) ? opts[opts.length - 1] : opts[0]))
    case 'Home':
      return open(select(dropdown, opts[0]))
    case 'End':
      return open(select(dropdown, opts[opts.length - 1]))
    default: return
  }
}

export const popper = (dropdown: AbstractDropdown, style?: CSSStyleDeclaration): AbstractDropdown => (
  reduce(dropdown, { elements: { listbox: { attributes: { style } } } })
)
