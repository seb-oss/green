import { dropdownValues, optionValues } from './defaultValues'
import { randomId } from '../id'
import reduce from '../reduce'
import {
  AbstractDropdown,
  DropdownArgs,
  DropdownOption,
  ExtendedDropdownOption,
} from './types'
import {validateClassName} from "../helperFunction";

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
  texts,
  options: _options,
  useValue,
  display,
  selectValue,
  loop,
  value,
  multiSelect,
  validator
}: DropdownArgs): AbstractDropdown => {
  useValue = useValue || 'value'
  display = display || 'key'

  if (value) {
    _options = _options?.map((option) => ({
      ...option,
      selected: option[<string>useValue] === value,
    }))
  }
  const options = extendOptions(_options, id)
  const selected = options
    ?.filter((option) => option.selected)
    .map((option) => option[<string>display])
  const dropdown: Partial<AbstractDropdown> = {
    id,
    texts: {
      close: texts?.close ?? 'Close',
      optionsDescription: texts?.optionsDescription ?? 'Options',
      placeholder: texts?.placeholder ?? 'Select',
      selected: texts?.selected ?? 'selected',
      select:
        selected?.length > 2
          ? `${selected.length} ${texts?.selected} `
          : selected?.join(', '),
    },
    elements: {
      toggler: {
        attributes: { id: `${id}_toggle`, 'aria-owns': id },
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
    useValue,
    display,
    selectValue,
    validator
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
  selection: ExtendedDropdownOption | number
): AbstractDropdown => {
  let option: ExtendedDropdownOption
  if (typeof selection === 'number') {
    const opts = dropdown.options
    const currentlySelectedIndex = opts.findIndex((o) => o.active)
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
        classes: option === o ? ['active', 'sg-highlighted'] : [],
      })
    ),
  })
}

export const select = (
  dropdown: AbstractDropdown,
  selection: ExtendedDropdownOption
): AbstractDropdown => {
  const isSelected = (option: ExtendedDropdownOption) => {
    const isTarget = selection[dropdown.useValue] === option[dropdown.useValue]

    if (dropdown.isMultiSelect) {
      //Invert the selected option and keep others like previously
      return isTarget ? !option.selected : option.selected
    } else {
      return isTarget
    }
  }

  const options = dropdown.options.map((option) => {
    const selected = isSelected(option)
    return reduce(option, {
      selected,
      attributes: {
        'aria-selected': selected || undefined,
      },
    })
  })

  const selectedOptions = options.filter((o) => o.selected)
  const displayValues = selectedOptions.map((o) => o[dropdown.display])
  return reduce(dropdown, {
    texts: {
      select:
        displayValues?.length > 2
          ? `${displayValues.length} ${dropdown.texts?.selected} `
          : displayValues?.join(', ') ||
            (dropdown.texts?.placeholder ?? 'Select'),
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
  const opts = dropdown.options
  let action
  switch (key) {
    //case ' ':
    //  action = toggle(dropdown)
    //  break
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
    case 'Enter':
      // eslint-disable-next-line no-case-declarations
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

export const validate = (dropdown: AbstractDropdown, validator: any) => reduce(
  dropdown, {
    elements: {
      toggler: {
        classes: addClass(dropdown.elements?.toggler?.classes, validateClassName(validator?.indicator))
      }
    }
  }
)
