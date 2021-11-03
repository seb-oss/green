import copy from 'fast-copy'
import { randomId } from './id'

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
    toggle: ElementProps
    listbox: ElementProps
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
  dd.open = () => {
    const newDropdown = dd as AbstractDropdown
    newDropdown.isOpen = true
    newDropdown.elements.toggle.attributes['aria-expanded'] = true
    newDropdown.elements.listbox.classes.push('active')
    return newDropdown
  }
  dd.close = () => {
    const newDropdown = dd as AbstractDropdown
    newDropdown.isOpen = false
    newDropdown.elements.toggle.attributes['aria-expanded'] = false
    newDropdown.elements.listbox.classes = newDropdown.elements.listbox.classes.filter((c) => c !== 'active')
    return newDropdown as AbstractDropdown
  }
  dd.toggle = () => dd.isOpen
    ? (dd as AbstractDropdown).close()
    : (dd as AbstractDropdown).open()
  
  return dd as AbstractDropdown
}
