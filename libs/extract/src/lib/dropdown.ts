import { recursive } from 'merge'
import { randomId } from './id'

const reduce = (...items: Partial<AbstractDropdown>[]): AbstractDropdown => {
  const result = recursive(true, ...items) as AbstractDropdown
  result.toggle = () => (result.isOpen) ? result.close() : result.open()
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
  open: () => AbstractDropdown
  close: () => AbstractDropdown
  toggle: () => AbstractDropdown
  options: ExtendedDropdownOption[]
  elements: {
    toggle: Partial<ElementProps>
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
    toggle: {
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
  dd.open = () => (
    reduce(dd, {
      isOpen: true,
      elements: {
        toggle: {
          attributes: {
            'aria-expanded': true,
          },
        },
        listbox: {
          classes: addClass(dd.elements?.listbox.classes, 'active'),
        },
      },
    })
  ),
  dd.close = () => (
    reduce(dd, {
      isOpen: false,
      elements: {
        toggle: {
          attributes: {
            'aria-expanded': false,
          },
        },
        listbox: {
          classes: removeClass(dd.elements?.listbox.classes, 'active'),
        },
      },
    })
  )
  dd.toggle = () => dd.isOpen
    ? (dd as AbstractDropdown).close()
    : (dd as AbstractDropdown).open()
  
  return dd as AbstractDropdown
}
