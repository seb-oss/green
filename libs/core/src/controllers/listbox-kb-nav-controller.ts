import { LitElement, ReactiveController } from 'lit'

/**
 * Components that use `ListboxKbNavController` needs to implement this interface.
 */
export interface ListboxKbNavigation extends LitElement {
  /**
   * Should return a list of navigable HTMLElements.
   */
  navigableItems: HTMLElement[]
}

/**
 * Controller that handles keyboard navigation for `ListboxKbNavigation` compatible components.
 * @internal
 *
 * The purpose of this controller is to provide a reusable implementation of the keyboard
 * interaction patterns decribed here:
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role
 */
export class ListboxKbNavController implements ReactiveController {
  host: ListboxKbNavigation

  constructor(host: ListboxKbNavigation) {
    (this.host = host).addController(this)
  }

  hostConnected() {
    this.host.addEventListener('keydown', this.#keyboardNavigationHandler)
  }

  hostDisconnected() {
    this.host.removeEventListener('keydown', this.#keyboardNavigationHandler)
  }

  #keyboardNavigationHandler = (e: KeyboardEvent) => {
    const targetItem = e.target as HTMLElement

    if (!this.host.navigableItems.includes(targetItem)) return

    let handled = false

    if (e.key === 'ArrowDown') {
      const nextItemIndex = this.host.navigableItems.indexOf(targetItem) + 1
      const nextItem = this.host.navigableItems[nextItemIndex]
      nextItem?.focus()
      handled = true
      //
    } else if (e.key === 'ArrowUp') {
      const prevOptionIndex = this.host.navigableItems.indexOf(targetItem) - 1
      const prevItem = this.host.navigableItems[prevOptionIndex]
      prevItem?.focus()
      handled = true
      //
    } else if (e.key === 'Home') {
      this.host.navigableItems[0]?.focus()
      handled = true
      //
    } else if (e.key === 'End') {
      this.host.navigableItems[this.host.navigableItems.length - 1]?.focus()
      handled = true
      //
    } else {
      const key = e.key.toLowerCase()
      if (key.length !== 1) {
        return
      }
      const isLetter = key >= 'a' && key <= 'z'
      const isNumber = key >= '0' && key <= '9'
      if (isLetter || isNumber) {
        // Find the first item that starts with the typed letter
        const firstMatch = this.host.navigableItems.find((el) => {
          const text = el.textContent?.trim().toLowerCase()
          return text?.startsWith(key)
        })
        firstMatch?.focus()
        handled = true
      }
    }

    if (handled) {
      e.preventDefault()
      e.stopPropagation()
    }
  }
}
