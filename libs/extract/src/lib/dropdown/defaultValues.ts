import { AbstractDropdown, DropdownOptionElement } from './types'
import {IValidator, validateClassName} from "../helperFunction";

export const dropdownValues = (validator?: IValidator): Partial<AbstractDropdown> => {

  const togglerClasses: [string] = ['dropdown-toggle']

  if(validator) togglerClasses.push(validateClassName(validator.indicator))

  return {
    elements: {
      toggler: {
        attributes: {
          'aria-haspopup': 'listbox',
          'aria-expanded': false,
        },
        classes: togglerClasses,
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
}

export const optionValues: Partial<DropdownOptionElement> = {
  attributes: {
    role: 'option',
  },
}
