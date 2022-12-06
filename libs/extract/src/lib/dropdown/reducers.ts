import { IValidator, validateClassName } from '../helperFunction'
import { randomId } from '../id'
import reduce from '../reduce'
import { dropdownValues, optionValues } from './defaultValues'
import {
  AbstractDropdown,
  DropdownArgs,
  DropdownOption,
  DropdownOptionElement,
  DropdownTexts,
} from './types'

const selectionText = (
  selectedOptions: DropdownOptionElement[],
  display: string,
  texts?: DropdownTexts
) => {
  const displayValues = selectedOptions.map((option) => option[display])
  return displayValues?.length > 2
    ? `${displayValues.length} ${texts?.selected} `
    : displayValues?.join(', ') || (texts?.placeholder ?? 'Select')
}

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
): DropdownOptionElement =>
  reduce<DropdownOptionElement>(optionValues, option, {
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
): DropdownOptionElement[] =>
  options?.map((option, ix) => extendOption(id, option, ix))

export const create = ({
  id = randomId(),
  texts,
  options: _options,
  useValue = 'value',
  display = 'label',
  loop,
  value,
  multiSelect,
  searchable,
  validator,
  compareWith = (o1, o2) => o1 === o2,
  searchFilter,
}: DropdownArgs): AbstractDropdown => {
  const options = extendOptions(_options, id) ?? []
  const selectedOptions = options.filter((o) => o.selected)
  const selectedValues = selectedOptions.map((option) => option[useValue])
  let dropdown: Partial<AbstractDropdown> = {
    id,
    value: multiSelect ? selectedValues : selectedValues[0],
    texts: {
      close: texts?.close ?? 'Close',
      optionsDescription: texts?.optionsDescription ?? 'Options',
      placeholder: texts?.placeholder ?? 'Select',
      searchPlaceholder: texts?.searchPlaceholder ?? 'Search',
      selected: texts?.selected ?? 'selected',
      select: selectionText(selectedOptions, display, texts),
    },
    elements: {
      toggler: {
        attributes: { id: `${id}_toggle`, 'aria-owns': id},
      },
      listbox: {
        attributes: { id },
      },
      fieldset: {
        attributes: { id: `${id}_legend` },
      },
    },
    options,
    isLooping: loop,
    isMultiSelect: multiSelect,
    isSearchable: searchable,
    useValue,
    display,
    validator,
    compareWith,
    searchFilter,
  }

  // Override intital selected property options if value is provided
  if (value) {
    dropdown = selectByValue(dropdown as AbstractDropdown, value)
  }

  return reduce(dropdown, dropdownValues(validator))
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

export const close = (dropdown: AbstractDropdown): AbstractDropdown => {
  if (dropdown.isOpen) {
    return reduce(dropdown, {
      isOpen: false,
      isTouched: true,
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
  }
  return dropdown
}

export const toggle = (dropdown: AbstractDropdown): AbstractDropdown => {
  const newDD = dropdown.isOpen ? close(dropdown) : open(dropdown)
  return newDD
}

export const highlight = (
  dropdown: AbstractDropdown,
  selection: DropdownOptionElement | number
): AbstractDropdown => {
  let option: DropdownOptionElement
  if (typeof selection === 'number') {
    const opts = dropdown.options

    const visibleDropdownOptions = opts.filter(
      (element) => !element.classes.includes('hidden')
    )

    const currentlySelectedIndex = visibleDropdownOptions.findIndex(
      (o) => o.active
    )
    let newSelectedIndex = currentlySelectedIndex + selection

    if (newSelectedIndex < 0)
      newSelectedIndex = dropdown.isLooping
        ? visibleDropdownOptions.length - 1
        : 0
    if (newSelectedIndex >= visibleDropdownOptions.length)
      newSelectedIndex = dropdown.isLooping
        ? 0
        : visibleDropdownOptions.length - 1
    option = visibleDropdownOptions[newSelectedIndex]
  } else {
    option = selection
  }
  return reduce(dropdown, {
    elements: {
      listbox: {
        attributes: {
          'aria-activedescendant': option.attributes.id,
        },
      },
    },
    options: dropdown.options.map((o) =>
      reduce(o, {
        active: option === o,
        attributes: {},
        classes:
          option === o
            ? ['active', 'sg-highlighted']
            : o.classes.filter((obj) => obj !== 'active' && 'sg-highlighted'),
      })
    ),
  })
}

export const select = (
  dropdown: AbstractDropdown,
  selection: DropdownOptionElement
): AbstractDropdown => {
  const selectedValue = selection[dropdown.useValue]
  const currentValue = dropdown.value
  let value

  if (dropdown.isMultiSelect && Array.isArray(currentValue)) {
    const index = currentValue.findIndex((v: any) =>
      dropdown.compareWith(v, selectedValue)
    )

    // Toggle selected value
    if (index < 0) {
      value = [...currentValue, selectedValue]
    } else {
      value = [
        ...currentValue.slice(0, index),
        ...currentValue.slice(index + 1),
      ]
    }
  } else {
    value = dropdown.isMultiSelect ? [selectedValue] : selectedValue
  }

  return selectByValue(dropdown, value)
}

export const selectByValue = (
  dropdown: AbstractDropdown,
  selection?: any
): AbstractDropdown => {
  const isSelected = (value1: any) => {
    if (!selection) {
      return false
    } else if (dropdown.isMultiSelect && Array.isArray(selection)) {
      return selection.some((value2) => dropdown.compareWith(value1, value2))
    } else {
      return dropdown.compareWith(selection, value1)
    }
  }

  if (selection && dropdown.isMultiSelect && !Array.isArray(selection)) {
    console.warn(
      'Dropdown is marked as multiselect but recieved a non-array value:',
      selection
    )
  }

  const options = dropdown.options.map((option) => {
    const selected = isSelected(option[dropdown.useValue])
    return reduce(option, {
      selected,
      attributes: {
        'aria-selected': selected || undefined,
      },
    })
  })
  const selectedOptions = options.filter((o) => o.selected)

  return reduce(dropdown, {
    value: selection,
    texts: {
      select: selectionText(selectedOptions, dropdown.display, dropdown.texts),
    },
    elements: {
      listbox: {
        attributes: {
          'aria-activedescendant': selectedOptions?.[0]?.attributes.id,
        },
      },
    },
    options,
  })
}

/**
 * Only set isTouched if the panel is closed. Otherwise, the trigger will
 * "blur" to the panel when it opens, causing a false positive.
 */
export const blur = (dropdown: AbstractDropdown): AbstractDropdown =>
  reduce(dropdown, {
    isTouched: dropdown.isTouched || !dropdown.isOpen,
  } as Partial<AbstractDropdown>)

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
  const opts = dropdown.options.filter(
    (option) => !option.classes.includes('hidden')
  )

  let action

  switch (key) {
    case 'Escape':
      if (dropdown.isOpen) action = close(dropdown)
      break
    case 'ArrowDown':
      action = dropdown.isOpen
        ? highlight(dropdown, 1)
        : open(highlight(dropdown, opts[0]))
      break
    case 'ArrowUp':
      action = dropdown.isOpen
        ? highlight(dropdown, -1)
        : open(
            highlight(
              dropdown,
              dropdown.isLooping ? opts[opts.length - 1] : opts[0]
            )
          )
      break
    case 'Home':
      action = open(highlight(dropdown, opts[0]))
      break
    case 'End':
      action = open(highlight(dropdown, opts[opts.length - 1]))
      break
    case ' ':
    case 'Enter': {
      if (dropdown.isSearchable && dropdown.isOpen && key === ' ') {
        const searchFieldIsActive =
          document.activeElement ===
          document.getElementById(
            dropdown.elements.toggler?.attributes?.id + '_search-input'
          )
        if (searchFieldIsActive) {
          break
        }
      }

      const activeOption = opts.find((option) => option.active)
      action =
        dropdown.isOpen && activeOption
          ? dropdown.isMultiSelect && key === ' '
            ? select(dropdown, activeOption)
            : dropdown.isMultiSelect
            ? close(dropdown)
            : close(select(dropdown, activeOption))
          : toggle(dropdown)
      break
    }
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

export const validate = (dropdown: AbstractDropdown, validator: IValidator) =>
  reduce(dropdown, {
    elements: {
      toggler: {
        classes: addClass(
          dropdown.elements?.toggler?.classes,
          validateClassName(validator?.indicator)
        ),
      },
    },
  })

export const search = (
  dropdown: AbstractDropdown,
  searchInput: string
): AbstractDropdown =>
  reduce(dropdown, {
    options: dropdown.options.map((option) => {
      const searchIncludes = (value: any): boolean =>
        value?.toString().toLowerCase().includes(searchInput.toLowerCase())

      const isMatch =
        searchInput.length === 0 ||
        searchIncludes(option[dropdown.display]) ||
        dropdown.searchFilter?.(searchInput, option[dropdown.useValue])

      return isMatch
        ? { ...option, classes: removeClass(option.classes, 'hidden') }
        : { ...option, classes: addClass(option.classes, 'hidden') }
    }),
  } as Partial<AbstractDropdown>)

export const resetTouchedProperty = (
  dropdown: AbstractDropdown
): AbstractDropdown =>
  reduce(dropdown, {
    isTouched: false,
  } as Partial<AbstractDropdown>)
