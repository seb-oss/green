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
import { fromEvent, merge, Subject } from 'rxjs'
import { take, takeUntil } from 'rxjs/operators'
import {
  AbstractDropdown,
  DropdownHandler,
  DropdownListener,
  DropdownArgs,
} from './types'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { isMobileViewport$ } from '../common/viewport-size'

export const createDropdown = (
  init: DropdownArgs,
  toggler: HTMLElement,
  listbox: HTMLElement,
  fieldset: HTMLElement | undefined = undefined,
  listener: DropdownListener
): DropdownHandler => {
  const _handler: Partial<DropdownHandler> = {
    toggler,
    listbox,
    dropdown: create(init),
    isAlive: true,
    onDestroy$: new Subject<void>(),
  }
  const handler = _handler as DropdownHandler

  handler.active = (isActive) =>
    update(handler, listener, active(handler.dropdown, isActive))
  handler.loop = (isLooping) =>
    update(handler, listener, loop(handler.dropdown, isLooping))
  handler.open = () => update(handler, listener, open(handler.dropdown))
  handler.close = () => update(handler, listener, close(handler.dropdown))
  handler.toggle = () => update(handler, listener, toggle(handler.dropdown))
  handler.select = (selection, selectOnClose = true) =>
    update(
      handler,
      listener,
      selectOnClose
        ? close(select(handler.dropdown, selection))
        : select(handler.dropdown, selection)
    )
  handler.update = (props) => update(handler, listener, create(props))

  merge(
    fromEvent<KeyboardEvent>(document, 'keydown'),
    fromEvent<FocusEvent>(document, 'focusin'),
    fromEvent<MouseEvent>(document, 'click')
  )
    .pipe(takeUntil(handler.onDestroy$))
    .subscribe((event) => {
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

  isMobileViewport$
    .pipe(takeUntil(handler.onDestroy$))
    .subscribe((isMobile) => {
      lockBodyScroll(handler, isMobile)
      pop(handler, listener, isMobile)
    })

  handler.destroy = () => {
    handler.onDestroy$.next()
    handler.popper?.destroy()
    handler.isAlive = false

    const scrollableListbox = handler.listbox.querySelector('ul')
    scrollableListbox && enableBodyScroll(scrollableListbox)
  }

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
    isMobileViewport$
      .pipe(take(1))
      .subscribe((isMobile) => lockBodyScroll(handler, isMobile))
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
  isMobile: boolean
) => {
  if (isMobile && handler.popper) {
    handler.popper.destroy()
    handler.popper = undefined

    update(handler, listener, popper(handler.dropdown))
  } else if (!isMobile && !handler.popper) {
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

const lockBodyScroll = (handler: DropdownHandler, isMobile: boolean) => {
  const scrollableListbox = handler.listbox.querySelector(
    'ul, .sg-fieldset-container'
  )
  if (scrollableListbox) {
    handler.dropdown.isOpen && isMobile
      ? disableBodyScroll(scrollableListbox)
      : enableBodyScroll(scrollableListbox)
  }
}

export default createDropdown
