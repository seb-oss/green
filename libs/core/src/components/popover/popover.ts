import { html, unsafeCSS } from 'lit'
import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { msg } from '@lit/localize'
import {
  computePosition,
  autoUpdate,
  offset,
  flip,
  Placement,
} from '@floating-ui/dom'

import { GdsElement } from '../../gds-element'
import { watch, watchMediaQuery } from '../../utils/decorators'
import { gdsCustomElement } from '../../scoping'
import { TransitionalStyles } from '../../transitional-styles'

import '../icon/icons/cross-small'

import styles from './popover.styles'

/**
 * @element gds-popover
 *
 * A popover is a transient view that appears above other content. It is used by components such as dropdowns.
 *
 * GdsPopover can be supplied with a trigger through the `trigger` property. If a trigger is specified, the popover will
 * register a keydown listener on the trigger and listen to `ArrowDown` key presses. When the trigger is focused and
 * `ArrowDown` is pressed, the popover will open and focus the first slotted child.
 *
 * @fires gds-ui-state - Fired when the popover is opened or closed
 *
 * @slot - Content of the popover
 * @slot trigger - Trigger element for the popover. If this slot is occupied, the popover will listen to keydown and click events on the trigger and automtaiclly open when clicked or when the trigger is focused and `ArrowDown` is pressed.
 */
@gdsCustomElement('gds-popover')
export class GdsPopover extends GdsElement {
  static styles = unsafeCSS(styles)

  /**
   * Whether the popover is open.
   */
  @property({ type: Boolean, reflect: true })
  open = false

  /**
   * This is used to indicate the semantic role of the popover. This will set the `aria-haspopup` attribute on the trigger element.
   * Read here for more information: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup
   */
  @property({ attribute: 'popup-role' })
  popupRole: 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' = 'dialog'

  /**
   * Optional way to assign a trigger element for the popover. When using Lit, this can take a value from a `@queryAsync` decorator in order to set the trigger element programatically.
   */
  @property({ attribute: false })
  triggerRef?: Promise<HTMLElement>

  /**
   * Optional way to assign an anchor element for the popover. When using Lit, this can take a value from a `@queryAsync` decorator in order to set the anchor element programatically.
   */
  @property({ attribute: false })
  anchorRef?: Promise<HTMLElement>

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
   * Whether to use a modal dialog in mobile viewport.
   */
  @property()
  disableMobileStyles = false

  /**
   * A callback that returns the minimum width of the popover.
   * By default, the popover minWidth will be as wide as the trigger element.
   */
  @property({ attribute: false })
  calcMinWidth = (referenceEl: HTMLElement) => `${referenceEl.offsetWidth}px`

  /**
   * A callback that returns the maximum width of the popover.
   * By default, the popover maxWidth will be set to `auto` and will grow as needed.
   */
  @property({ attribute: false })
  calcMaxWidth = (_referenceEl: HTMLElement) => `auto`

  /**
   * A callback that returns the minimum height of the popover.
   * By default, the popover minHeight will be set to `auto`
   */
  @property({ attribute: false })
  calcMinHeight = (_referenceEl: HTMLElement) => `auto`

  /**
   * A callback that returns the maximum height of the popover.
   * By default, the popover maxHeight will be set to a hard coded pixel value (check source code).
   */
  @property({ attribute: false })
  calcMaxHeight = (_referenceEl: HTMLElement) => `500px`

  @state()
  private _trigger: HTMLElement | undefined = undefined

  @state()
  private _anchor: HTMLElement | undefined = undefined

  // Whether the virtual keyboard is visible or not
  @state()
  private _isVirtKbVisible = false

  @query('slot:not([name])')
  private _elDefaultSlot: HTMLSlotElement | undefined

  @query('slot[name="trigger"]')
  private _elTriggerSlot: HTMLSlotElement | undefined

  @query('dialog')
  private _elDialog: HTMLDialogElement | undefined

  @watch('triggerRef')
  private _handleTriggerRefChanged() {
    this.triggerRef?.then((el) => {
      if (el) this._trigger = el
    })
  }

  @watch('anchorRef')
  private _handleAnchorRefChanged() {
    this.anchorRef?.then((el) => {
      if (el) this._anchor = el
    })
  }

  #handleTriggerSlotChange() {
    if (this._elTriggerSlot && this._elTriggerSlot.assignedElements()[0]) {
      this._trigger = this._elTriggerSlot.assignedElements()[0] as HTMLElement
      this._anchor = this._elTriggerSlot.assignedElements()[0] as HTMLElement
    }
  }

  @watch('_trigger')
  private _handleTriggerChanged() {
    this.#registerTriggerEvents()
    this.#setupTriggerAttributes()
  }

  @watch('_anchor')
  private _handleAnchorChanged() {
    this.#registerAutoPositioning()
  }

  // A function that removes the Floating UI auto positioning. This gets called when we switch to mobile view layout.
  #autoPositionCleanupFn: (() => void) | undefined

  #isMobileViewport = false

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-popover')
    this.#registerTriggerEvents()
    this._handleOpenChange()

    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape' && this.open) {
        this.#handleCancel()
        e.stopPropagation()
        e.preventDefault()
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
    return html`<slot
        name="trigger"
        @slotchange=${this.#handleTriggerSlotChange}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${classMap({
            'v-kb-visible': this._isVirtKbVisible,
            'use-modal-in-mobile': !this.disableMobileStyles,
          })}"
          aria-hidden="${String(!this.open)}"
          @close=${() => this.open && this.#handleCancel()}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${this.#handleCloseButton}
              class="close"
              label="${msg('Close')}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`
  }

  @watch('open')
  private _handleOpenChange() {
    this.updateComplete.then(() => {
      this._trigger?.setAttribute('aria-expanded', String(this.open))
      if (this.open) {
        this._elDialog?.showModal()
        this.#focusFirstSlottedChild()

        // Another VoiceOver hack
        setTimeout(() => this.#focusFirstSlottedChild(), 250)

        // Wait for the next event loop cycle before registering the close listener, to avoid the dialog closing immediately
        setTimeout(
          () =>
            this._elDialog?.addEventListener('click', this.#handleClickOutside),
          0,
        )
      } else {
        this._elDialog?.close()
        this._elDialog?.removeEventListener('click', this.#handleClickOutside)
      }
    })
  }

  #handleCancel = () => {
    this.open = false
    this.#dispatchUiStateEvent('cancel')
  }

  #dispatchUiStateEvent = (reason: 'show' | 'close' | 'cancel') => {
    this.dispatchEvent(
      new CustomEvent('gds-ui-state', {
        detail: { open: this.open, reason },
        bubbles: false,
        composed: false,
      }),
    )
  }

  #handleCloseButton = (e: MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    this.open = false
    this.#dispatchUiStateEvent('close')

    // The timeout here is to work around a strange default behaviour in VoiceOver on iOS, where when you close
    // a dialog, the focus gets moved to the element that is visually closest to where the focus was in the
    // dialog (close button in this case.)
    // The timeout waits for VoiceOver to do its thing, then moves focus back to the trigger.
    setTimeout(() => this._trigger?.focus(), 250)
  }

  #registerTriggerEvents() {
    this._trigger?.addEventListener('keydown', this.#handleTriggerKeyDown)
    this._trigger?.addEventListener('click', this.#handleTriggerClick)
  }

  #unregisterTriggerEvents() {
    this._trigger?.removeEventListener('keydown', this.#handleTriggerKeyDown)
    this._trigger?.removeEventListener('click', this.#handleTriggerClick)
    this.#autoPositionCleanupFn?.()
  }

  #setupTriggerAttributes() {
    if (this._trigger) {
      // aria-expanded
      this._trigger?.setAttribute('aria-expanded', String(this.open))

      // tabindex, role="button"
      const focusableNodeNames = ['A', 'BUTTON', 'INPUT', 'TEXTAREA']
      const isProbablyFocusable =
        this._trigger.nodeName.startsWith('GDS-') ||
        focusableNodeNames.includes(this._trigger.nodeName)
      if (!isProbablyFocusable) {
        this._trigger.setAttribute('tabindex', '0')
        this._trigger.setAttribute('role', 'button')
      }

      // aria-haspopup
      const ariaHasPopupAttr = this._trigger.nodeName.startsWith('GDS-')
        ? 'gds-aria-haspopup'
        : 'aria-haspopup'
      if (this._trigger.getAttribute(ariaHasPopupAttr) === null) {
        this._trigger.setAttribute(ariaHasPopupAttr, this.popupRole)
      }
    }
  }

  @watchMediaQuery('(max-width: 576px)')
  private _handleMobileLayout(matches: boolean) {
    this.#isMobileViewport = matches
    if (matches && !this.disableMobileStyles) {
      this.#autoPositionCleanupFn?.()
      this._elDialog?.style.removeProperty('left')
      this._elDialog?.style.removeProperty('top')
      this._elDialog?.style.removeProperty('minWidth')

      this.updateComplete.then(() => {
        if (this.open) this._elDialog?.showModal()
      })
    } else {
      this.updateComplete.then(() => {
        this.#registerAutoPositioning()
      })
    }
  }

  #registerAutoPositioning() {
    if (!this._anchor || !this._elDialog) {
      return
    }

    const referenceEl = this._anchor
    const floatingEl = this._elDialog

    if (
      !referenceEl ||
      !floatingEl ||
      (this.#isMobileViewport && !this.disableMobileStyles)
    )
      return

    if (this.#autoPositionCleanupFn) {
      this.#autoPositionCleanupFn()
    }

    this.#autoPositionCleanupFn = autoUpdate(referenceEl, floatingEl, () => {
      computePosition(referenceEl, floatingEl, {
        placement: this.placement,
        middleware: [offset(8), flip()],
        strategy: 'fixed',
      }).then(({ x, y }) =>
        Object.assign(floatingEl.style, {
          left: `${x}px`,
          top: `${y}px`,
          minWidth: this.calcMinWidth(referenceEl),
          maxWidth: this.calcMaxWidth(referenceEl),
          minHeight: this.calcMinHeight(referenceEl),
          maxHeight: this.calcMaxHeight(referenceEl),
        }),
      )
    })
  }

  /**
   * ArrowDown or ArrowUp on the trigger element will trigger the popover by default, and escape will close it.
   */
  #handleTriggerKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      this.open = true
      this.#dispatchUiStateEvent('show')
    }
    if (e.key === 'Escape' && this.open) {
      this.#handleCancel()
    }
  }

  #handleTriggerClick = (e: MouseEvent) => {
    e.preventDefault()
    this.open = !this.open
    this.#dispatchUiStateEvent(this.open ? 'show' : 'close')
  }

  /**
   * Move focus to the first slotted child.
   */
  #focusFirstSlottedChild = () => {
    const firstSlottedChild =
      this._elDefaultSlot?.assignedElements()[0] as HTMLElement

    this.updateComplete.then(() => {
      firstSlottedChild?.focus()
    })
  }

  #handleClickOutside = (evt: Event) => {
    const e = evt as PointerEvent
    const dialog = this._elDialog
    const isNotEnterKey = e.clientX > 0 || e.clientY > 0

    if (isNotEnterKey && dialog && this.open) {
      const rect = dialog.getBoundingClientRect()

      const isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width

      if (!isInDialog) {
        e.stopPropagation()
        this.open = false
        this.#dispatchUiStateEvent('close')
      }
    }
  }
}
