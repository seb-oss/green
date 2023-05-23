import { LitElement, html, css, unsafeCSS, PropertyValueMap } from 'lit'
import { customElement } from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'

import styles from './stem.styles.scss'

/**
 * @element gds-popover
 *
 * A popover is a transient view that appears above other content. It is used by components such as dropdowns.
 *
 * GdsPopover can be supplied with a trigger through the `trigger` property. If a trigger is specified, the popover will
 * register a keydown listener on the trigger and listen to `ArrowDown` key presses. When the trigger is focused and
 * `ArrowDown` is pressed, the popover will open and focus the first slotted child.
 *
 * @slot - Content of the popover
 * @fires ui-state - Fired when the popover is opened or closed
 */
@customElement('gds-popover')
export class GdsPopover extends LitElement {
  static styles = unsafeCSS(styles)
  static properties = {
    open: { type: Boolean, reflect: true },
  }

  open = false

  /**
   * Optional trigger element for the popover.
   */
  set trigger(value: HTMLElement) {
    this._trigger = value
    this.registerTriggerEvents()
  }
  private _trigger?: HTMLElement

  connectedCallback(): void {
    super.connectedCallback()
    this.registerTriggerEvents()
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.unregisterTriggerEvents()
  }

  render() {
    return html`
      <div class="popover popover-dropdown ${this.open ? 'active' : ''}">
        <slot></slot>
      </div>
    `
  }

  private registerTriggerEvents() {
    this._trigger?.addEventListener('keydown', this.triggerKeyDownListener)
  }

  private unregisterTriggerEvents() {
    this._trigger?.removeEventListener('keydown', this.triggerKeyDownListener)
  }

  private triggerKeyDownListener = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      this.setOpen(true)

      const firstSlottedChild = this.shadowRoot
        ?.querySelector('slot')
        ?.assignedElements()[0] as HTMLElement

      firstSlottedChild?.focus()
    }
    if (e.key === 'Escape') {
      this.setOpen(false)
    }
  }

  private setOpen(open: boolean) {
    this.open = open
    this.dispatchEvent(
      new CustomEvent('ui-state', {
        detail: { open },
        bubbles: true,
        composed: false,
      })
    )
  }
}

export const PopoverReact = createComponent({
  tagName: 'gds-popover',
  elementClass: GdsPopover,
  react: React,
})
