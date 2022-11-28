import { createPopper } from '@popperjs/core'
import {
  create,
  active,
  blur,
  open,
  close,
  toggle,
  select,
  loop,
  popper,
  keypress,
  validate,
  search,
  selectByValue,
  resetTouchedProperty,
} from './reducers'
import { fromEvent, merge, Subject } from 'rxjs'
import { take, takeUntil } from 'rxjs/operators'
import {
  AbstractDropdown,
  DropdownHandler,
  DropdownListener,
  DropdownArgs,
  OnChange,
} from './types'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { isMobileViewport$ } from '../common/viewport-size'
import { getOptionScrollPosition } from './helper-functions'
import { IValidator } from '../helperFunction'

export const createDropdown = (
  init: DropdownArgs,
  toggler: HTMLElement,
  listbox: HTMLElement,
  fieldset: HTMLElement | undefined = undefined,
  listener: DropdownListener,
  onChange: OnChange
): DropdownHandler => {
  const handler: DropdownHandler = {
    toggler,
    listbox,
    dropdown: create(init),
    isAlive: true,
    onChange,
    onDestroy$: new Subject<void>(),
    onTouched: init.onTouched,
  } as DropdownHandler

  handler.active = (isActive) =>
    update(handler, listener, active(handler.dropdown, isActive))
  handler.loop = (isLooping) =>
    update(handler, listener, loop(handler.dropdown, isLooping))
  handler.blur = () => update(handler, listener, blur(handler.dropdown))
  handler.open = () => update(handler, listener, open(handler.dropdown))
  handler.close = () => update(handler, listener, close(handler.dropdown))
  handler.toggle = () => update(handler, listener, toggle(handler.dropdown))
  handler.search = (seachInput: string) =>
    update(handler, listener, search(handler.dropdown, seachInput))
  handler.select = (selection, selectOnClose = true) =>
    update(
      handler,
      listener,
      selectOnClose
        ? close(select(handler.dropdown, selection))
        : select(handler.dropdown, selection)
    )
  handler.selectByValue = (selection) =>
    update(handler, listener, selectByValue(handler.dropdown, selection))
  handler.update = (props) => update(handler, listener, create(props))
  handler.validate = (validator: IValidator) =>
    update(handler, listener, validate(handler.dropdown, validator))
  handler.resetTouchedState = () =>
    update(handler, listener, resetTouchedProperty(handler.dropdown))

  fromEvent(toggler, 'blur')
    .pipe(takeUntil(handler.onDestroy$))
    .subscribe(() => {
      handler.blur()
    })

  merge(fromEvent(toggler, 'focusin'), fromEvent(toggler, 'click'))
    .pipe(takeUntil(handler.onDestroy$))
    .subscribe(() => {
      handler.active(true)
    })

  merge(
    fromEvent<KeyboardEvent>(document, 'keydown'),
    fromEvent<FocusEvent>(document, 'focusin'),
    fromEvent<MouseEvent>(document, 'click')
  )
    .pipe(takeUntil(handler.onDestroy$))
    .subscribe((event) => {
      if (!handler.dropdown.isActive) return

      switch (event.type) {
        case 'keydown': {
          const { key } = event as KeyboardEvent
          update(
            handler,
            listener,
            keypress(handler.dropdown, key, event as KeyboardEvent)
          )

          if (handler.dropdown.isOpen) {
            scrollOptionIntoView(handler)
          }

          break
        }
        case 'click':
        case 'focusin': {
          const target = event.target as HTMLElement
          const targetIsOutside =
            !handler.toggler.contains(target) &&
            !handler.listbox.contains(target)
          if (targetIsOutside) {
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

  if (
    JSON.stringify(oldState.value) !== JSON.stringify(handler.dropdown.value)
  ) {
    handler.onChange(handler.dropdown.value)
  }

  if (
    handler.dropdown.isTouched &&
    oldState.isTouched !== handler.dropdown.isTouched
  ) {
    handler.onTouched?.()
  }

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

const scrollOptionIntoView = (handler: DropdownHandler) => {
  const activeDescendant =
    handler.dropdown.elements.listbox?.attributes?.['aria-activedescendant']

  const container = handler.listbox.querySelector<HTMLElement>(
    '[role="listbox"], .sg-fieldset-container'
  )
  const option = container?.querySelector<HTMLElement>('#' + activeDescendant)

  if (container && option) {
    container.scrollTop = getOptionScrollPosition(
      option.offsetTop,
      option.offsetHeight,
      container.scrollTop,
      container.offsetHeight
    )
  }
}

export default createDropdown
