import { LitElement } from 'lit'

type Constructor<T> = new (...args: any[]) => T

/**
 * This mixin handles focusing of elements, and adds the `gds-focus` and `gds-blur` events.
 */
export const Focusable = <T extends Constructor<LitElement>>(superClass: T) => {
  class HighlightableElement extends superClass {
    focus(options?: FocusOptions | undefined): void {
      this.setAttribute('tabindex', '0')
      super.focus(options)

      // This hack is here to make sure the elemnt gets focus
      // if the containing element was initally hidden, because
      // when this is called, the element may not yet be displayed
      // and therefore `super.focus()` does nothing until some
      // arbitrary amount of time has passed.
      if (document.activeElement !== this) {
        const iv = setInterval(() => {
          if (document.activeElement === this) clearInterval(iv)
          super.focus(options)
        }, 10)
      }
    }

    onblur = (e: FocusEvent) => {
      this.setAttribute('tabindex', '-1')
      this.dispatchEvent(
        new FocusEvent('gds-blur', {
          bubbles: true,
          composed: true,
          relatedTarget: e.relatedTarget,
        })
      )
    }

    onfocus = (e: FocusEvent) => {
      this.dispatchEvent(
        new FocusEvent('gds-focus', {
          bubbles: true,
          composed: true,
          relatedTarget: e.relatedTarget,
        })
      )
    }
  }

  return HighlightableElement as Constructor<LitElement> & T
}
