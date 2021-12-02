import { AbstractDropdown, ExtendedDropdownOption } from './types'

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
      classes: ['popover'],
    },
  },
  isActive: false,
  isOpen: false,
}

export const optionValues: Partial<ExtendedDropdownOption> = {
  attributes: {
    role: 'option',
  },
}
