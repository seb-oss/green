import { createPopper } from '@popperjs/core'
import {
  create,
  active,
  open,
  close,
  toggle,
  select,
  loop,
  popper,
  keypress,
} from './reducers'
import { fromEvent, merge } from 'rxjs'
import {
  AbstractDropdown,
  DropdownHandler,
  DropdownListener,
  DropdownArgs,
} from './types'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export const createDropdown = (
  init: DropdownArgs,
  toggler: HTMLElement,
  listbox: HTMLElement,
  listener: DropdownListener
): DropdownHandler => {
  const _handler: Partial<DropdownHandler> = {
    toggler,
    listbox,
    dropdown: create(init),
    isAlive: true,
  }
  const handler = _handler as DropdownHandler

  handler.active = (isActive) =>
    update(handler, listener, active(handler.dropdown, isActive))
  handler.loop = (isLooping) =>
    update(handler, listener, loop(handler.dropdown, isLooping))
  handler.open = () => update(handler, listener, open(handler.dropdown))
  handler.close = () => update(handler, listener, close(handler.dropdown))
  handler.toggle = () => update(handler, listener, toggle(handler.dropdown))
  handler.select = (selection) =>
    update(handler, listener, close(select(handler.dropdown, selection)))
  handler.update = (props) => update(handler, listener, create(props))

  handler.subscription = merge(
    fromEvent<KeyboardEvent>(document, 'keydown'),
    fromEvent<UIEvent>(window, 'resize'),
    fromEvent<FocusEvent>(document, 'focusin'),
    fromEvent<MouseEvent>(document, 'click')
  ).subscribe((event) => {
    switch (event.type) {
      case 'keydown': {
        if (!handler.dropdown.isActive) return
        const { key } = event as KeyboardEvent
        update(
          handler,
          listener,
          keypress(handler.dropdown, key, event as KeyboardEvent)
        )
        break
      }
      case 'resize': {
        const innerWidth = (event.target as Window).innerWidth
        lockBodyScroll(handler, innerWidth)
        pop(handler, listener, innerWidth)
        break
      }
      case 'focusin': {
        const component = toggler.parentElement as HTMLElement
        const focused = event.target as HTMLElement
        const componentWasFocuesd = component.contains(focused)
        if (handler.dropdown.isActive && !componentWasFocuesd) {
          update(handler, listener, active(handler.dropdown, false))
        } else if (!handler.dropdown.isActive && componentWasFocuesd) {
          update(handler, listener, active(handler.dropdown, true))
        }
        break
      }
      case 'click': {
        const clickedOn = event.target as HTMLElement
        if (
          !handler.toggler.contains(clickedOn) &&
          !handler.listbox.contains(clickedOn)
        ) {
          update(handler, listener, active(close(handler.dropdown), false))
        }
      }
    }
  })

  handler.destroy = () => {
    handler.subscription?.unsubscribe()
    handler.popper?.destroy()
    handler.isAlive = false

    const scrollableListbox = handler.listbox.querySelector('ul')
    scrollableListbox && enableBodyScroll(scrollableListbox)
  }

  pop(handler, listener)

  // Trigger initial render
  listener(handler.dropdown)

  return handler
}

const update = async (
  handler: DropdownHandler,
  listener: DropdownListener,
  newState?: AbstractDropdown
) => {
  if (!handler.isAlive) return

  const oldState = handler.dropdown
  if (newState) handler.dropdown = newState

  if (oldState.isOpen !== handler.dropdown.isOpen) {
    lockBodyScroll(handler)
  }

  if (handler.popper) {
    const { styles } = await handler.popper.update()
    if (styles?.popper) {
      const oldStyle = handler.dropdown?.elements?.listbox?.attributes?.style
      const style = styles.popper as CSSStyleDeclaration

      if (JSON.stringify(oldStyle) !== JSON.stringify(style)) {
        handler.dropdown = popper(handler.dropdown, style)
      }
    }
  }

  if (handler.dropdown !== oldState) {
    listener(handler.dropdown)
  }
}

const pop = (
  handler: DropdownHandler,
  listener: DropdownListener,
  innerWidth: number = window.innerWidth
) => {
  if (innerWidth < 576 && handler.popper) {
    handler.popper.destroy()
    handler.popper = undefined

    update(handler, listener, popper(handler.dropdown))
  } else if (innerWidth >= 576 && !handler.popper) {
    handler.popper = createPopper(handler.toggler, handler.listbox, {
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

    update(handler, listener, handler.dropdown)
  }
}

const lockBodyScroll = (
  handler: DropdownHandler,
  width = window.innerWidth
) => {
  const scrollableListbox = handler.listbox.querySelector('ul')
  if (scrollableListbox) {
    handler.dropdown.isOpen && width < 576
      ? disableBodyScroll(scrollableListbox)
      : enableBodyScroll(scrollableListbox)
  }
}

export default createDropdown
