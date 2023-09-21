import { LitElement, html, unsafeCSS } from 'lit'
import { property, state } from 'lit/decorators.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { computePosition, autoUpdate, offset, flip } from '@floating-ui/dom'

import { watch, watchMediaQuery } from 'utils/decorators'
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

  /**
   * Optional trigger element for the popover.
   */
  @property()
  label: string | undefined = undefined

  @watch('trigger')
  private _handleTriggerChanged() {
    this.#registerTriggerEvents()
  }

  #popoverElementRef: Ref<HTMLDivElement> = createRef()
  #dialogElementRef: Ref<HTMLDialogElement> = createRef()

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-popover')
    this.#registerTriggerEvents()
    this._handleOpenChange()

    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.open = false
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
        <button class="close" @click=${() => (this.open = false)}>
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

    if (this.open) {
      this.#dialogElementRef.value?.showModal()
      this.#dialogElementRef.value?.style.setProperty('opacity', '0')
      this.#dialogElementRef.value?.style.setProperty(
        'transform',
        'translate3d(0px, 100%, 0px)'
      )
      setTimeout(() => {
        this.#dialogElementRef.value?.style.setProperty('opacity', '1')
        this.#dialogElementRef.value?.style.setProperty(
          'transform',
          'translate3d(0px, 0px, 0px)'
        )
      }, 0)
    } else {
      this.#dialogElementRef.value?.close()
    }

    this.dispatchEvent(
      new CustomEvent('gds-ui-state', {
        detail: { open: this.open },
        bubbles: true,
        composed: false,
      })
    )
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
      //this._isMobileLayout = true
      this.#autoPositionCleanup?.()
      this.#dialogElementRef.value?.style.removeProperty('left')
      this.#dialogElementRef.value?.style.removeProperty('top')

      this.updateComplete.then(() => {
        if (this.open) this.#dialogElementRef.value?.showModal()
      })
    } else {
      //this._isMobileLayout = false
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
        middleware: [offset(8), flip()],
      }).then(({ x, y }) => {
        Object.assign(floatingEl.style, {
          left: `${x}px`,
          top: `${y}px`,
        })
      })
    })
  }

  /**
   * ArrowDown on the trigger element will trigger the popover by default, and escape will close it.
   */
  #triggerKeyDownListener = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      this.open = true

      const firstSlottedChild = this.shadowRoot
        ?.querySelector('slot')
        ?.assignedElements()[0] as HTMLElement

      this.updateComplete.then(() => {
        firstSlottedChild?.focus()
      })
    }
    if (e.key === 'Escape') {
      this.open = false
    }
  }
}
