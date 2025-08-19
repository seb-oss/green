import { localized, msg } from '@lit/localize'
import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
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
import { GdsDiv } from '../div/div.component'
import { GdsFlex } from '../flex/flex.component'
import { IconCrossSmall } from '../icon/icons/cross-small.component'
import DialogStyles from './dialog.styles'
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
 * @event gds-ui-state - Fired when the dialog is opened or closed. Can be cancelled to prevent the dialog from closing.
 * @event gds-close - Fired when the dialog is closed
 * @event gds-show - Fired when the dialog is opened
 *
 * @slot - The content of the dialog
 * @slot trigger - The trigger button for the dialog
 * @slot footer - The footer of the dialog
 */
@gdsCustomElement('gds-dialog', {
  dependsOn: [GdsButton, GdsCard, GdsDiv, GdsFlex, IconCrossSmall],
})
@localized()
export class GdsDialog extends withSizeXProps(withSizeYProps(GdsElement)) {
  static styles = [DialogStyles]
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

  /**
   * The dialog's placement.
   */
  @property()
  placement: 'initial' | 'top' | 'bottom' | 'left' | 'right' = 'initial'

  /**
   * The dialog's padding.
   */
  @property()
  padding?: string = 'l'

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
            class=${classMap({
              [this.variant]: true,
              [`placement-${this.placement}`]: true,
            })}
            aria-label=${ifDefined(this.heading)}
          >
            <gds-card
              class="card"
              display="flex"
              variant="secondary"
              box-shadow="xl"
              padding=${ifDefined(this.padding)}
              gap="l"
              border-radius="s"
              min-height="min-content"
            >
              <slot name="dialog">
                <gds-flex
                  justify-content="space-between"
                  background-color="secondary"
                >
                  <h2 id="heading">${this.heading}</h2>
                  <gds-button
                    id="close-btn"
                    rank="secondary"
                    size="small"
                    label=${msg('Close')}
                    @click=${() => this.close('btn-close')}
                    ><gds-icon-cross-small></gds-icon-cross-small
                  ></gds-button>
                </gds-flex>
                <gds-div id="content" flex="1">
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
              </slot>
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

        document.removeEventListener('click', this.#handleClickOutside)
        requestAnimationFrame(() =>
          document.addEventListener('click', this.#handleClickOutside),
        )

        // VoiceOver on iOS fails to move focus to the dialog in some cases.
        // This is a workaround to force focus to the dialog.
        if (isIOS) {
          this._elDialog?.focus()
        }
      })
    } else {
      this.#returnValue = this.#returnValue || 'prop-change'
      this._elDialog?.close(this.#returnValue)
      unlockBodyScrolling(this)
      document.removeEventListener('click', this.#handleClickOutside)
      this.requestUpdate('open')
    }
  }

  #handleNativeClose = (e: Event) => {
    const dialog = e.target as HTMLDialogElement
    const returnValue = dialog.returnValue

    if (returnValue !== 'prop-change') {
      if (!this.#dispatchCloseEvent(returnValue)) {
        return
      }
      this.close(returnValue || 'native-close')
      return
    }

    this.close(returnValue || 'native-close')
  }

  #dispatchCloseEvent = (reason?: string) => {
    this.dispatchCustomEvent('gds-close', {
      detail: reason,
    })
    return this.#dispatchUiStateEvent(reason)
  }

  #dispatchShowEvent = (reason?: string) => {
    this.dispatchCustomEvent('gds-show', {
      detail: reason,
    })
    return this.#dispatchUiStateEvent(reason)
  }

  #dispatchUiStateEvent = (reason?: string) => {
    return this.dispatchCustomEvent('gds-ui-state', {
      detail: { reason, open: this.open },
    })
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

      const closeReason = 'click-outside'
      if (!isInDialog && this.#dispatchCloseEvent(closeReason)) {
        this.close(closeReason)
      }
    }
  }
}
