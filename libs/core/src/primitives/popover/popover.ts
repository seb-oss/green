import { LitElement, html, unsafeCSS } from 'lit'
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { msg } from '@lit/localize'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import {
  computePosition,
  autoUpdate,
  offset,
  flip,
  Placement,
} from '@floating-ui/dom'

import { watch, watchMediaQuery } from '../../utils/decorators'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { TransitionalStyles } from '../../utils/helpers/transitional-styles'

import { topLayerOverTransforms } from './topLayerOverTransforms.middleware'

import styles from './popover.styles'
import { reference } from '@popperjs/core'

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
  triggerRef: Promise<HTMLElement | undefined> = Promise.resolve(undefined)

  /**
   * Optional trigger element for the popover.
   */
  @property()
  label: string | undefined = undefined

  /**
   * The placement of the popover relative to the trigger.
   * Accepts any of the placements supported by Floating UI.
   */
  @property()
  placement: Placement = 'bottom-start'

  /**
   * A callback that returns the minimum width of the popover.
   * By default, the popover minWidth will be as wide as the trigger element.
   */
  @property()
  calcMinWidth = (referenceEl: HTMLElement) => `${referenceEl.offsetWidth}px`

  /**
   * A callback that returns the maximum width of the popover.
   * By default, the popover maxWidth will be set to `auto` and will grow as needed.
   */
  @property()
  calcMaxWidth = (_referenceEl: HTMLElement) => `auto`

  @state()
  private _trigger: HTMLElement | undefined = undefined

  // Whether the virtual keyboard is visible or not
  @state()
  private _isVirtKbVisible = false

  @watch('triggerRef')
  private _handleTriggerRefChanged() {
    this.triggerRef.then((el) => {
      if (el) this._trigger = el
    })
  }

  @watch('_trigger')
  private _handleTriggerChanged() {
    this.#registerTriggerEvents()
    this.#registerAutoPositioning()
  }

  // A reference to the dialog element used to make the popover modal
  #dialogElementRef: Ref<HTMLDialogElement> = createRef()

  // A function that removes the Floating UI auto positioning. This gets called when we switch to mobile view layout.
  #autoPositionCleanupFn: (() => void) | undefined

  #isMobileViewport = false

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-popover')
    this.#registerTriggerEvents()
    this._handleOpenChange()

    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.open = false
        this.#dispatchUiStateEvent()
        e.stopImmediatePropagation()
      }
    })

    // This is a hack to check if a virtual keyboard is visible or not.
    // This should be removed in the future if/when the VirtualKeyboard API is suported on Safari.
    this.addEventListener('focusin', (e: FocusEvent) => {
      const t = e.target as HTMLElement
      if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA') {
        this._isVirtKbVisible = true
      } else {
        this._isVirtKbVisible = false
      }
    })
    this.addEventListener('blurin', (_) => {
      this._isVirtKbVisible = false
    })
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.#unregisterTriggerEvents()
  }

  render() {
    return html`<dialog
      class="${classMap({ 'v-kb-visible': this._isVirtKbVisible })}"
      ${ref(this.#dialogElementRef)}
    >
      <header>
        <h2>${this.label}</h2>
        <button
          class="close"
          @click=${this.#handleCloseButton}
          aria-label="${msg('Close')}"
        >
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
  }

  #dispatchUiStateEvent = () => {
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
    this.#dispatchUiStateEvent()

    // The timeout here is to work around a strange default behaviour in VoiceOver on iOS, where when you close
    // a dialog, the focus gets moved to the element that is visually closest to where the focus was in the
    // dialog (close button in this case.)
    // The timeout waits for VoiceOver to do its thing, then moves focus back to the trigger.
    setTimeout(() => this._trigger?.focus(), 250)
  }

  #registerTriggerEvents() {
    this._trigger?.addEventListener('keydown', this.#triggerKeyDownListener)
  }

  #unregisterTriggerEvents() {
    this._trigger?.removeEventListener('keydown', this.#triggerKeyDownListener)
    this.#autoPositionCleanupFn?.()
  }

  @watchMediaQuery('(max-width: 576px)')
  private _handleMobileLayout(matches: boolean) {
    this.#isMobileViewport = matches
    if (matches) {
      this.#autoPositionCleanupFn?.()
      this.#dialogElementRef.value?.style.removeProperty('left')
      this.#dialogElementRef.value?.style.removeProperty('top')
      this.#dialogElementRef.value?.style.removeProperty('minWidth')

      this.updateComplete.then(() => {
        if (this.open) this.#dialogElementRef.value?.showModal()
      })
    } else {
      this.updateComplete.then(() => {
        this.#registerAutoPositioning()
      })
    }
  }

  #registerAutoPositioning() {
    const referenceEl = this._trigger
    const floatingEl = this.#dialogElementRef.value

    if (!referenceEl || !floatingEl || this.#isMobileViewport) return

    if (this.#autoPositionCleanupFn) {
      this.#autoPositionCleanupFn()
    }

    this.#autoPositionCleanupFn = autoUpdate(referenceEl, floatingEl, () => {
      computePosition(referenceEl, floatingEl, {
        placement: this.placement,
        middleware: [offset(8), flip(), topLayerOverTransforms()],
        strategy: 'fixed',
      }).then(({ x, y }) =>
        Object.assign(floatingEl.style, {
          left: `${x}px`,
          top: `${y}px`,
          minWidth: this.calcMinWidth(referenceEl),
          maxWidth: this.calcMaxWidth(referenceEl),
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
      this.#dispatchUiStateEvent()
    }
    if (e.key === 'Escape') {
      this.open = false
      this.#dispatchUiStateEvent()
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

  #clickOutsideListener = (evt: Event) => {
    const e = evt as PointerEvent
    const dialog = this.#dialogElementRef.value

    if (e.pointerType == 'mouse' && dialog && this.open) {
      const rect = dialog.getBoundingClientRect()

      const isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width

      if (!isInDialog) {
        e.stopPropagation()
        this.open = false
        this.#dispatchUiStateEvent()
      }
    }
  }
}
