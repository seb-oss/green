import { recursive } from 'merge'
import { randomId } from './id'

const reduce = (...items: Partial<AbstractDropdown>[]): AbstractDropdown => {
  const result = recursive(true, ...items) as AbstractDropdown
  return result
}

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

export interface DropdownOption {
  key: string
  value: unknown
  selected?: boolean
}

export interface ExtendedDropdownOption
  extends DropdownOption, ElementProps {}

interface Attributes {
  'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | undefined
  'aria-owns'?: string
  'aria-expanded'?: boolean
  'aria-selected'?: boolean
  id?: string
  role?: string
  tabIndex?: number
}
interface ElementProps {
  attributes: Attributes
  classes: string[]
}

export interface AbstractDropdown {
  id: string
  text: string
  isOpen: boolean
  options: ExtendedDropdownOption[]
  elements: {
    toggler: Partial<ElementProps>
    listbox: Partial<ElementProps>
  }
}

interface DropdownArgs {
  id?: string
  options: DropdownOption[]
  text?: string
}
export const create = ({ id, text, options }: DropdownArgs): AbstractDropdown => {
  const dd: Partial<AbstractDropdown> = {}
  dd.text = text || 'dropdown'
  dd.id = id || randomId()
  dd.options = options.map((o, ix) => {
    const extended: ExtendedDropdownOption = {
      ...o,
      attributes: {
        id: `${dd.id}_option${ix}`,
        role: 'option',
      },
      classes: [],
    }
    if (o.selected) {
      extended.attributes['aria-selected'] = true
    }
    return extended
  })

  dd.elements = {
    toggler: {
      attributes: {
        'aria-haspopup': 'listbox',
        'aria-owns': dd.id,
        'aria-expanded': false,
      },
      classes: ['dropdown-toggle'],
    },
    listbox: {
      attributes: {
        role: 'listbox',
        tabIndex: -1,
      },
      classes: ['popover'],
    }
  }

  dd.isOpen = false
  
  return dd as AbstractDropdown
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
        classes: addClass(dropdown.elements?.listbox.classes, 'active'),
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
        classes: removeClass(dropdown.elements?.listbox.classes, 'active'),
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
    options: dropdown.options.map((o) => ({
      ...o,
      selected: o === option,
      attributes: {
        ...o.attributes,
        'aria-selected': o === option || undefined,
      },
    })),
  })
)
