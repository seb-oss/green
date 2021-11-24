import { fromEvent, Observable, Subscription } from 'rxjs'
import { filter, tap } from 'rxjs/operators'
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
  text?: string
}
export const create = ({ id = randomId(), text, options: _options }: DropdownArgs): AbstractDropdown => {
  const options = extendOptions(_options, id)
  const dropdown: Partial<AbstractDropdown> = {
    id,
    text: text || 'dropdown',
    elements: {
      toggler: {
        attributes: { 'aria-owns': id },
      },
    },
    options,
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
    if (newSelectedIndex < 0) newSelectedIndex = 0
    if (newSelectedIndex >= opts.length) newSelectedIndex = opts.length - 1
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
export const focus = (dropdown: AbstractDropdown, focusedIndex: number): AbstractDropdown => {
  const options: ExtendedDropdownOption[] = dropdown.options.map((o, optionIndex) => {
    return {
      ...o,
      focused: focusedIndex === optionIndex,
    }
  })
  return reduce(dropdown, { options } as Partial<AbstractDropdown>)
}
export const activate = (dropdown: AbstractDropdown): AbstractDropdown => (
  reduce(dropdown, { isActive: true })
)
export const deactivate = (dropdown: AbstractDropdown): AbstractDropdown => (
  reduce(dropdown, { isActive: false })
)

const observers: Record<string, {
  subscription: Subscription,
  observable: Observable<KeyboardEvent>
}> = {}
type Listener = (dropdown: AbstractDropdown) => void
export const observe = (dropdown: AbstractDropdown, listener: Listener): void => {
  let observable: Observable<KeyboardEvent>
  let subscription: Subscription

  if (!observers[dropdown.id]) {
    observable = fromEvent<KeyboardEvent>(document, 'keydown')
      .pipe(filter((event) => ['ArrowDown', 'ArrowUp', 'Escape', 'Home', 'End', ' '].includes(event.key)))
  } else {
    ({ observable, subscription } = observers[dropdown.id]);
    if (subscription) subscription.unsubscribe()
  }

  subscription = observable.subscribe((event) => {
    if (!dropdown.isActive) return
    event.preventDefault()
    switch (event.key) {
      case ' ':
        listener(open(dropdown))
        break
      case 'Escape':
        listener(close(dropdown))
        break
      case 'ArrowDown':
        listener(select(dropdown, 1))
        break
      case 'ArrowUp':
        listener(select(dropdown, -1))
        break
    }
  })

  observers[dropdown.id] = { observable, subscription }
}
export const unobserve = (dropdown: AbstractDropdown): void => {
  if (observers[dropdown.id]) {
    observers[dropdown.id].subscription.unsubscribe()
    delete observers[dropdown.id]
  }
}
