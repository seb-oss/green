import { LitElement, html, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { computePosition, autoUpdate, offset, flip } from '@floating-ui/dom'

import { watch } from 'utils/decorators'
import { gdsCustomElement } from 'utils/helpers/custom-element-scoping'
import { TransitionalStyles } from 'utils/helpers/transitional-styles'

import styles from './popover.styles'

/**
 * @element gds-popover
 * @internal
 *
 * A popover is a transient view that appears above other content. It is used by components such as dropdowns.
 *
 * GdsPopover can be supplied with a trigger through the `trigger` property. If a trigger is specified, the popover will
 * register a keydown listener on the trigger and listen to `ArrowDown` key presses. When the trigger is focused and
 * `ArrowDown` is pressed, the popover will open and focus the first slotted child.
 *
 * @slot - Content of the popover
 * @fires gds-ui-state - Fired when the popover is opened or closed
 */
@gdsCustomElement('gds-popover')
export class GdsPopover extends LitElement {
  static styles = unsafeCSS(styles)

  /**
   * Whether the popover is open.
   */
  @property({ type: Boolean, reflect: true })
  open = false

  /**
   * Optional trigger element for the popover.
   */
  @property()
  trigger: HTMLElement | undefined = undefined

  @watch('trigger')
  private _handleTriggerChanged() {
    this.#registerTriggerEvents()
  }

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-popover')
    this.#registerTriggerEvents()
    this._updateHidden()

    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.#setOpen(false)
      }
    })
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.#unregisterTriggerEvents()
  }

  render() {
    return html` <slot></slot> `
  }

  @watch('open')
  private _updateHidden() {
    this.setAttribute('aria-hidden', String(!this.open))
    this.hidden = !this.open
  }

  #autoPositionCleanup: (() => void) | undefined

  #registerTriggerEvents() {
    if (!this.trigger) return

    this.trigger.addEventListener('keydown', this.#triggerKeyDownListener)

    const referenceEl = this.trigger
    const floatingEl = this
    this.#autoPositionCleanup = autoUpdate(referenceEl, floatingEl, () => {
      computePosition(referenceEl, floatingEl, {
        placement: 'bottom-start',
        middleware: [offset(8), flip()],
      }).then(({ x, y }) => {
        Object.assign(floatingEl.style, {
          left: `${x}px`,
          top: `${y}px`,
        })
      })
    })
  }

  #unregisterTriggerEvents() {
    this.trigger?.removeEventListener('keydown', this.#triggerKeyDownListener)
    this.#autoPositionCleanup?.()
  }

  /**
   * ArrowDown on the trigger element will trigger the popover by default, and escape will close it.
   */
  #triggerKeyDownListener = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      this.#setOpen(true)

      const firstSlottedChild = this.shadowRoot
        ?.querySelector('slot')
        ?.assignedElements()[0] as HTMLElement

      this.updateComplete.then(() => {
        firstSlottedChild?.focus()
      })
    }
    if (e.key === 'Escape') {
      this.#setOpen(false)
    }
  }

  #setOpen(open: boolean) {
    this.open = open
    this.dispatchEvent(
      new CustomEvent('gds-ui-state', {
        detail: { open },
        bubbles: true,
        composed: false,
      })
    )
  }
}
