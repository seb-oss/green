import { LitElement, html, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { computePosition, autoUpdate, offset, flip } from '@floating-ui/dom'

import { watch, watchMediaQuery } from '../../utils/decorators'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { TransitionalStyles } from '../../utils/helpers/transitional-styles'

import { topLayerOverTransforms } from './topLayerOverTransforms.middleware'

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

  /**
   * Optional trigger element for the popover.
   */
  @property()
  label: string | undefined = undefined

  @watch('trigger')
  private _handleTriggerChanged() {
    this.#registerTriggerEvents()
  }

  #dialogElementRef: Ref<HTMLDialogElement> = createRef()

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-popover')
    this.#registerTriggerEvents()
    this._handleOpenChange()

    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.open = false
        e.stopImmediatePropagation()
      }
    })
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.#unregisterTriggerEvents()
  }

  render() {
    return html`<dialog ${ref(this.#dialogElementRef)}>
      <header>
        <h2>${this.label}</h2>
        <button class="close" @click=${this.#handleCloseButton}>
          <i></i>
        </button>
      </header>
      <slot></slot>
    </dialog>`
  }

  @watch('open')
  private _handleOpenChange() {
    this.setAttribute('aria-hidden', String(!this.open))
    this.hidden = !this.open

    this.updateComplete.then(() => {
      if (this.open) {
        this.#dialogElementRef.value?.showModal()
        this.#focusFirstSlottedChild()
        // Wait one event loop cycle before registering the close listener, to avoid the dialog closing immediately
        setTimeout(
          () =>
            this.#dialogElementRef.value?.addEventListener(
              'click',
              this.#clickOutsideListener
            ),
          0
        )
      } else {
        this.#dialogElementRef.value?.close()
        this.#dialogElementRef.value?.removeEventListener(
          'click',
          this.#clickOutsideListener
        )
      }
    })

    this.dispatchEvent(
      new CustomEvent('gds-ui-state', {
        detail: { open: this.open },
        bubbles: true,
        composed: false,
      })
    )
  }

  #handleCloseButton = (e: MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    this.open = false

    // The timeout here is to work around a strange default behaviour in VoiceOver on iOS, where when you close
    // a dialog, the focus gets moved to the element that is visually closest to where the focus was in the
    // dialog (close button in this case.)
    // The timeout waits for VoiceOver to do its thing, then moves focus back to the trigger.
    setTimeout(() => this.trigger?.focus(), 250)
  }

  #registerTriggerEvents() {
    this.trigger?.addEventListener('keydown', this.#triggerKeyDownListener)
  }

  #unregisterTriggerEvents() {
    this.trigger?.removeEventListener('keydown', this.#triggerKeyDownListener)
    this.#autoPositionCleanup?.()
  }

  @watchMediaQuery('(max-width: 576px)')
  private _handleMobileLayout(matches: boolean) {
    if (matches) {
      this.#autoPositionCleanup?.()
      this.#dialogElementRef.value?.style.removeProperty('left')
      this.#dialogElementRef.value?.style.removeProperty('top')

      this.updateComplete.then(() => {
        if (this.open) this.#dialogElementRef.value?.showModal()
      })
    } else {
      this.updateComplete.then(() => {
        this.#registerAutoPositioning()
      })
    }
  }

  #autoPositionCleanup: (() => void) | undefined
  #registerAutoPositioning() {
    const referenceEl = this.trigger
    const floatingEl = this.#dialogElementRef.value

    if (!referenceEl || !floatingEl) return

    this.#autoPositionCleanup = autoUpdate(referenceEl, floatingEl, () => {
      computePosition(referenceEl, floatingEl, {
        placement: 'bottom-start',
        middleware: [offset(8), flip(), topLayerOverTransforms()],
        strategy: 'fixed',
      }).then(({ x, y }) =>
        Object.assign(floatingEl.style, {
          left: `${x}px`,
          top: `${y}px`,
          minWidth: `${referenceEl.offsetWidth}px`,
        })
      )
    })
  }

  /**
   * ArrowDown on the trigger element will trigger the popover by default, and escape will close it.
   */
  #triggerKeyDownListener = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      this.open = true
    }
    if (e.key === 'Escape') {
      this.open = false
    }
  }

  /**
   * Move focus to the first slotted child.
   */
  #focusFirstSlottedChild = () => {
    const firstSlottedChild = this.shadowRoot
      ?.querySelector('slot')
      ?.assignedElements()[0] as HTMLElement

    this.updateComplete.then(() => {
      firstSlottedChild?.focus()
    })
  }

  #clickOutsideListener = (e: MouseEvent) => {
    const dialog = this.#dialogElementRef.value

    if (dialog && this.open) {
      const rect = dialog.getBoundingClientRect()

      const isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width

      if (!isInDialog) {
        this.open = false
      }
    }
  }
}
