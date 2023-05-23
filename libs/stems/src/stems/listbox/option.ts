import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { TransitionalStyles } from '../../transitional-styles'

import style from './listbox.styles'

import 'reflect-metadata'

/**
 * @element gds-option
 *
 * A listbox option is an option in a listbox widget.
 * This primitive corresponds to the aria `option` role: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/option_role
 *
 * Can be used together with the `gds-listbox` primitive.
 *
 * @slot - The default slot. Custom content can be used to display the option.
 */
@customElement('gds-option')
export class GdsOption extends LitElement {
  static styles = unsafeCSS(style)

  value: any
  hidden: boolean = false

  static properties = {
    value: {},
    hidden: {},
  }

  constructor() {
    super()

    this.addEventListener('click', () => {
      this.select()
    })
    this.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return
      this.select()
    })
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'option')
    TransitionalStyles.instance.apply(this, 'gds-option')
  }

  /**
   * Selects the option and dispatches a `select` event.
   *
   * @fires select
   * @public
   */
  select() {
    this.setAttribute('aria-selected', 'true')
    this.dispatchEvent(
      new CustomEvent('select', {
        bubbles: true,
        composed: true,
        detail: {
          value: this.value,
        },
      })
    )
  }

  /**
   * Unselects the option.
   */
  unselect() {
    this.setAttribute('aria-selected', 'false')
  }

  /**
   * Focuses the option.
   *
   * @param options - Focus options
   */
  focus(options?: FocusOptions | undefined): void {
    this.setAttribute('tabindex', '0')
    super.focus(options)

    // This hack is here to make sure the option gets focus
    // when the containing popover is first opened, because
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

  onblur = () => {
    this.setAttribute('tabindex', '-1')
  }

  render() {
    return html`<slot></slot>`
  }
}

export const GdsOptionReact = createComponent({
  tagName: 'gds-option',
  elementClass: GdsOption,
  react: React,
})
