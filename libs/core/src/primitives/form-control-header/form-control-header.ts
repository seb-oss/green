import { msg } from '@lit/localize'
import { property, state } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './form-control-header.styles'

import '../../components/icon/icons/circle-info'
import '../../components/card'

/**
 * @element gds-form-control-header
 */
@gdsCustomElement('gds-form-control-header')
export class GdsFormControlHeader extends GdsElement {
  static styles = [styles]

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
        label="${msg('Show more information')}"
        @click=${this.#handleExtSupTxtBtnClick}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `
  }

  #handleExtSupTxtBtnClick = () => {
    this.showExtendedSupportingText = !this.showExtendedSupportingText
    this.dispatchEvent(
      new CustomEvent('gds-ui-state', {
        bubbles: true,
        composed: true,
        detail: this.showExtendedSupportingText,
      }),
    )
  }

  #renderExtSupTxt() {
    return html`
      <gds-card
        level="3"
        class="extended-supporting-text"
        padding="s m"
        margin="2xs 0 0 0"
        border-radius="xs"
        background="secondary"
        color="tertiary"
        display="${this.showExtendedSupportingText ? 'block' : 'none'}"
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${this.#handleExtSupTxtSlotChange}
        ></slot>
      </gds-card>
    `
  }
}
