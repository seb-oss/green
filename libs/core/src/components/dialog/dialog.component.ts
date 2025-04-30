import { localized, msg } from '@lit/localize'
import { property, query } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { watch } from '../../utils/decorators/watch'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { isIOS } from '../../utils/helpers/platform'
import {
  withSizeXProps,
  withSizeYProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { GdsButton } from '../button/button.component'
import { GdsCard } from '../card/card.component'
import { GdsFlex } from '../flex/flex.component'
import { IconCrossLarge } from '../icon/icons/cross-large.component'
import { styles } from './dialog.styles'
import {
  lockBodyScrolling,
  registerGlobalScrollLockStyles,
  unlockBodyScrolling,
} from './scroll-lock'

registerGlobalScrollLockStyles()

/**
 * @element gds-dialog
 * @status beta
 *
 * @event gds-ui-state - Fired when the dialog is opened or closed
 * @event gds-close - Fired when the dialog is closed
 * @event gds-show - Fired when the dialog is opened
 *
 * @slot - The content of the dialog
 * @slot trigger - The trigger button for the dialog
 * @slot footer - The footer of the dialog
 */
@gdsCustomElement('gds-dialog', {
  dependsOn: [GdsButton, GdsCard, GdsFlex, IconCrossLarge],
})
@localized()
export class GdsDialog extends withSizeXProps(withSizeYProps(GdsElement)) {
  static styles = [styles]
  static styleExpressionBaseSelector = 'dialog'

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

  @query('dialog')
  private _elDialog: HTMLDialogElement | undefined

  @query('slot[name="trigger"]')
  private _elTriggerSlot: HTMLSlotElement | undefined

  #returnValue: any

  /**
   * Opens the dialog.
   */
  show(reason?: string) {
    this.open = true
    reason && this.#dispatchShowEvent(reason)
  }

  /**
   * Closes the dialog.
   * @param returnValue - The value to return when the dialog is closed.
   */
  close(reason: string) {
    this.#returnValue = reason
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
              box-shadow="xl"
              padding="s"
              border-radius=${this.variant === 'default' ? 's' : '0'}
            >
              <gds-flex
                justify-content="space-between"
                border-width="0 0 4xs 0"
                margin="0 -s"
                padding="0 s s"
                background-color="secondary"
              >
                <h2 id="heading">${this.heading}</h2>
                <gds-button
                  id="close-btn"
                  rank="secondary"
                  size="small"
                  label=${msg('Close')}
                  @click=${() => this.close('btn-close')}
                  ><gds-icon-cross-large></gds-icon-cross-large
                ></gds-button>
              </gds-flex>
              <gds-div id="content" padding="m 0" overflow="auto" flex="1">
                <slot></slot>
              </gds-div>
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
                    >${msg('Cancel')}</gds-button
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

  @watch('open')
  private _handleOpenChange() {
    if (this.open) {
      this.#returnValue = undefined
      this.updateComplete.then(() => {
        this._elDialog?.showModal()
        lockBodyScrolling(this)

        // VoiceOver on iOS fails to move focus to the dialog in some cases.
        // This is a workaround to
        if (isIOS) {
          this._elDialog?.focus()
        }
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

    if (returnValue !== 'prop-change') this.#dispatchCloseEvent(returnValue)
  }

  #dispatchCloseEvent = (reason?: string) => {
    this.dispatchEvent(
      new CustomEvent('gds-close', {
        detail: reason,
        bubbles: false,
        composed: false,
      }),
    )
    this.#dispatchUiStateEvent(reason)
  }

  #dispatchShowEvent = (reason?: string) => {
    this.dispatchEvent(
      new CustomEvent('gds-show', {
        detail: reason,
        bubbles: false,
        composed: false,
      }),
    )
    this.#dispatchUiStateEvent(reason)
  }

  #dispatchUiStateEvent = (reason?: string) => {
    this.dispatchEvent(
      new CustomEvent('gds-ui-state', {
        detail: { reason, open: this.open },
        bubbles: false,
        composed: false,
      }),
    )
  }

  #handleTriggerSlotChange() {
    if (this._elTriggerSlot && this._elTriggerSlot.assignedElements()[0]) {
      const trigger = this._elTriggerSlot.assignedElements()[0] as HTMLElement
      trigger?.addEventListener('click', this.#handleTriggerClick)
      trigger?.setAttribute('aria-haspopup', 'dialog')
    }
  }

  #handleTriggerClick = (e: MouseEvent) => {
    this.show('slotted-trigger')
  }
}
