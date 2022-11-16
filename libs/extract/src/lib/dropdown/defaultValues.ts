import { AbstractDropdown, DropdownOptionElement } from './types'

export const dropdownValues: Partial<AbstractDropdown> = {
  elements: {
    toggler: {
      attributes: {
        'aria-haspopup': 'listbox',
        'aria-expanded': false,
      },
      classes: ['dropdown-toggle'],
    },
    listbox: {
      attributes: {
        role: 'listbox',
        tabIndex: -1,
      },
      classes: ['_popover', 'popover-dropdown'],
    },
  },
  isActive: false,
  isOpen: false,
  isTouched: false,
}

export const optionValues: Partial<DropdownOptionElement> = {
  attributes: {
    role: 'option',
  },
}
