import { property, query } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { watch } from '../../utils/decorators/watch'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './dialog.styles'
import {
  lockBodyScrolling,
  registerGlobalScrollLockStyles,
  unlockBodyScrolling,
} from './scroll-lock'

import '../button'
import '../card'
import '../flex'
import '../icon/icons/cross-large'

registerGlobalScrollLockStyles()

/**
 * @element gds-dialog
 *
 * @fires gds-ui-state - Fired when the dialog is opened or closed
 * @fires gds-close - Fired when the dialog is closed
 * @fires gds-show - Fired when the dialog is opened
 */
@gdsCustomElement('gds-dialog')
export class GdsDialog extends GdsElement {
  static styles = [styles]

  /**
   * Whether the dialog is open. The state of the dialog can be controlled either
   * by setting this property or by calling the `show()` and `close()` methods.
   */
  @property({ type: Boolean, reflect: true })
  open = false

  /**
   * The dialog's heading.
   */
  @property()
  heading?: string

  /**
   * The dialog's variant.
   */
  @property()
  variant: 'default' | 'slide-out' = 'default'

  /**
   * This value is set when the dialog is closed.
   */
  get returnValue() {
    return this.#returnValue
  }
  #returnValue: any

  @query('dialog')
  private _elDialog: HTMLDialogElement | undefined

  @query('slot[name="trigger"]')
  private _elTriggerSlot: HTMLSlotElement | undefined

  /**
   * Opens the dialog.
   */
  show() {
    this.open = true
    this.#dispatchShowEvent()
  }

  /**
   * Closes the dialog.
   * @param returnValue - The value to return when the dialog is closed.
   */
  close(returnValue: any) {
    this.#returnValue = returnValue
    this.open = false
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    unlockBodyScrolling(this)
  }

  render() {
    return html`<slot
        name="trigger"
        @slotchange=${this.#handleTriggerSlotChange}
      ></slot>
      ${when(
        this.open,
        () =>
          html`<dialog
            @close=${this.#handleNativeClose}
            class=${this.variant}
            aria-describedby="heading"
          >
            <gds-card
              class="card"
              display="flex"
              variant="secondary"
              shadow="xl"
              padding="s"
              border-radius=${this.variant === 'default' ? 's' : '0'}
            >
              <gds-flex
                justify-content="space-between"
                border="0 0 4xs/primary 0"
                margin="0 -s"
                padding="0 s s"
                background-color="secondary"
              >
                <h2 id="heading">${this.heading}</h2>
                <gds-button
                  rank="secondary"
                  size="small"
                  @click=${() => this.close('btn-close')}
                  ><gds-icon-cross-large></gds-icon-cross-large
                ></gds-button>
              </gds-flex>
              <gds-container
                id="content"
                padding="m 0"
                overflow="auto"
                flex="1"
              >
                <slot></slot>
              </gds-container>
              <gds-flex
                class="footer"
                justify-content="center"
                gap="s"
                padding="s 0 0 0"
              >
                <slot name="footer">
                  <gds-button
                    value="cancel"
                    @click=${() => this.close('btn-cancel')}
                    rank="secondary"
                    >Cancel</gds-button
                  >
                  <gds-button value="ok" @click=${() => this.close('btn-ok')}
                    >Ok</gds-button
                  >
                </slot>
              </gds-flex>
            </gds-card>
          </dialog>`,
      )}`
  }

  @watch('open', { waitUntilFirstUpdate: true })
  private _handleOpenChange() {
    if (this.open) {
      this.#returnValue = undefined
      this.updateComplete.then(() => {
        this._elDialog?.showModal()
        lockBodyScrolling(this)
      })
    } else {
      this.#returnValue = this.#returnValue || 'prop-change'
      this._elDialog?.close(this.#returnValue)
      unlockBodyScrolling(this)
      this.requestUpdate('open')
    }
  }

  #handleNativeClose = (e: Event) => {
    const dialog = e.target as HTMLDialogElement
    const returnValue = dialog.returnValue

    this.close(returnValue || 'native-close')
    this.#dispatchCloseEvent()
  }

  #dispatchCloseEvent = () => {
    this.dispatchEvent(
      new CustomEvent('gds-close', {
        detail: this.#returnValue,
        bubbles: false,
        composed: false,
      }),
    )
    this.#dispatchUiStateEvent()
  }

  #dispatchShowEvent = () => {
    this.dispatchEvent(
      new CustomEvent('gds-show', {
        bubbles: false,
        composed: false,
      }),
    )
    this.#dispatchUiStateEvent()
  }

  #dispatchUiStateEvent = () => {
    this.dispatchEvent(
      new CustomEvent('gds-ui-state', {
        detail: { open: this.open },
        bubbles: false,
        composed: false,
      }),
    )
  }

  #handleTriggerSlotChange() {
    if (this._elTriggerSlot && this._elTriggerSlot.assignedElements()[0]) {
      const trigger = this._elTriggerSlot.assignedElements()[0] as HTMLElement
      trigger?.addEventListener('click', this.#handleTriggerClick)
    }
  }

  #handleTriggerClick = (e: MouseEvent) => {
    this.show()
  }
}
