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
    }

    connectedCallback(): void {
      super.connectedCallback()
      this.addEventListener('blur', (e: FocusEvent) => {
        this.setAttribute('tabindex', '-1')
        this.dispatchEvent(
          new FocusEvent('gds-blur', {
            bubbles: false,
            composed: true,
            relatedTarget: e.relatedTarget,
          }),
        )
      })
      this.addEventListener('focus', (e: FocusEvent) => {
        this.dispatchEvent(
          new FocusEvent('gds-focus', {
            bubbles: false,
            composed: true,
            relatedTarget: e.relatedTarget,
          }),
        )
      })
    }

  }

  return HighlightableElement as Constructor<LitElement> & T
}
