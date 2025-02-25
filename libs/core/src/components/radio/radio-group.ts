import { property, state } from 'lit/decorators.js'

import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsFormControlElement } from '../form/form-control'
import { styles } from './radio.styles'

import '../../primitives/form-control-header'
import '../../primitives/form-control-footer'

/**
 * @element gds-radio-group
 */
@gdsCustomElement('gds-radio-group')
export class GdsRadioGroup extends GdsFormControlElement {
  static styles = [styles]

  @property()
  label = ''

  /**
   * The size of the label and support text.
   */
  @property()
  size: 'large' | 'small' = 'large'

  @property({ attribute: 'supporting-text' })
  supportingText = ''

  /**
   * Whether the supporting text should be displayed or not.
   */
  @property({
    attribute: 'show-extended-supporting-text',
    type: Boolean,
    reflect: true,
  })
  showExtendedSupportingText = false

  render() {
    return html`
      <div class="radio-group">
        <gds-form-control-header class="size-${this.size}">
          <label for="input" slot="label">${this.label}</label>
          <span slot="supporting-text" id="supporting-text">
            ${this.supportingText}
          </span>
          <slot
            name="extended-supporting-text"
            slot="extended-supporting-text"
          ></slot>
        </gds-form-control-header>
        <slot></slot>
        <gds-form-control-footer
          class="size-${this.size}"
        ></gds-form-control-footer>
      </div>
    `
  }

  protected _getValidityAnchor(): HTMLElement {
    throw new Error('Method not implemented.')
  }
}
