import { localized, msg } from '@lit/localize'
import { property, query, state } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { GdsButton } from '../../components/button/button.component'
import { GdsCard } from '../../components/card/card.component'
import { IconCircleInfo } from '../../components/icon/icons/circle-info.component'
import { GdsElement } from '../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import FormControlHeaderStyles from './form-control-header.styles'

/**
 * @element gds-form-control-header
 *
 * @slot label - The label of the form control.
 * @slot supporting-text - The supporting text of the form control.
 * @slot extended-supporting-text - The extended supporting text, or "Show more info" card, of the form control.
 */
@gdsCustomElement('gds-form-control-header', {
  dependsOn: [GdsButton, GdsCard, IconCircleInfo],
})
@localized()
export class GdsFormControlHeader extends GdsElement {
  static styles = [FormControlHeaderStyles]

  /**
   * Whether the supporting text should be displayed or not.
   */
  @property({
    type: Boolean,
    reflect: true,
  })
  showExtendedSupportingText = false

  @state()
  private _hasExtendedSupportingText = false

  @query('#extended-supporting-text')
  private _extendedSupportingText?: HTMLElement

  render() {
    return html`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${when(this._hasExtendedSupportingText, this.#renderExtSupTxtButton)}
      </div>

      ${this.#renderExtSupTxt()}
    `
  }

  #handleExtSupTxtSlotChange(e: Event) {
    this._hasExtendedSupportingText =
      (e.target as HTMLSlotElement).assignedElements({ flatten: true }).length >
      0
  }

  #renderExtSupTxtButton = () => {
    return html`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${msg('Show more information')}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${this.#handleExtSupTxtBtnClick}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `
  }

  #handleExtSupTxtBtnClick = () => {
    const shouldEventHappen = this.dispatchCustomEvent('gds-ui-state', {
      bubbles: true,
      composed: true,
      detail: this.showExtendedSupportingText,
      cancelable: true
    })

    if (!shouldEventHappen) return

    this.showExtendedSupportingText = !this.showExtendedSupportingText

    // Set max-height to the height of the slotted content
    this._extendedSupportingText?.style.setProperty(
      '--_max-height',
      this.showExtendedSupportingText
        ? `${this._extendedSupportingText.scrollHeight}px`
        : '0',
    )
  }

  /**
   * Handles the resize event to update the max-height of the extended supporting text.
   * This is necessary to ensure that the extended supporting text doesnt overflow it's container
   */
  #handleResize = () => {
    if (this.showExtendedSupportingText) {
      // Update max-height to the current height of the slotted content
      this._extendedSupportingText?.style.setProperty(
        '--_max-height',
        `${this._extendedSupportingText.scrollHeight}px`,
      )
    }
  }

  connectedCallback() {
    super.connectedCallback()
    window.addEventListener('resize', this.#handleResize)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('resize', this.#handleResize)
  }

  #renderExtSupTxt() {
    return html`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText ? 'false' : 'true'}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${this.#handleExtSupTxtSlotChange}
        ></slot>
      </div>
    `
  }
}
