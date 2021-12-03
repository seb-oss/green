import { fromEvent, merge, Observable, Subscription } from 'rxjs'
import { filter } from 'rxjs/operators'
import { createPopper, Instance } from '@popperjs/core'
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
  reduce(close(dropdown), { isActive: false })
)

const observers: Record<string, {
  keyboardEvents: Observable<KeyboardEvent>
  uiEvents: Observable<UIEvent>
  subscription: Subscription
  popper?: Instance
}> = {}
type Listener = (dropdown: AbstractDropdown) => void
export const observe = (dropdown: AbstractDropdown, toggler: HTMLElement, listbox: HTMLElement, listener: Listener): AbstractDropdown => {
  let keyboardEvents: Observable<KeyboardEvent>
  let uiEvents: Observable<UIEvent>
  let subscription: Subscription
  let popper: Instance|undefined

  if (!observers[dropdown.id]) {
    uiEvents = fromEvent<UIEvent>(window, 'resize')
    keyboardEvents = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      filter((event) => ['ArrowDown', 'ArrowUp', 'Escape', 'Home', 'End', ' '].includes(event.key))
    )
  } else {
    ({ keyboardEvents, uiEvents, subscription, popper } = observers[dropdown.id]);
    if (subscription) subscription.unsubscribe()
  }

  subscription = merge(keyboardEvents, uiEvents).subscribe(async (event) => {
    if (event.type === 'keydown') {
      if (!dropdown.isActive) return
      event.preventDefault()

      const { key } = event as KeyboardEvent
      const newState = handleKeyPress(key, dropdown)
      if (newState) {
        popper?.update()
        listener(newState)
      }
    } else if (event.type === 'resize') {
      const { innerWidth } = event.target as Window
      if (innerWidth < 576) {
        popper?.destroy()
        popper = undefined
        const newState = reduce(dropdown, { elements: { listbox: { attributes: { style: undefined } } } })
        listener(newState)
      } else {
        if (!popper) popper = createPopper(toggler, listbox, {
          placement: 'bottom-start',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 4],
              },
            },
          ],
        })
        const { styles } = await popper.update()
        if (styles.popper) {
          const style = styles.popper as CSSStyleDeclaration
          const newState = reduce(dropdown, { elements: { listbox: { attributes: { style } } } })
          listener(newState)
        }
      }
    }
    observers[dropdown.id].popper = popper
  })

  observers[dropdown.id] = { keyboardEvents, uiEvents, subscription, popper }
  popper?.update()
  return dropdown
}
export const unobserve = (dropdown: AbstractDropdown): AbstractDropdown => {
  if (observers[dropdown.id]) {
    observers[dropdown.id].subscription.unsubscribe()
    observers[dropdown.id].popper?.destroy()
    delete observers[dropdown.id]
  }
  return dropdown
}
const handleKeyPress = (key: string, dropdown: AbstractDropdown): AbstractDropdown|undefined => {
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
