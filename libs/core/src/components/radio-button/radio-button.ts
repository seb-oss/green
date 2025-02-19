import { HTMLTemplateResult } from 'lit'
import { state } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './radio-button.styles'

/**
 * @element gds-radio-button
 */
@gdsCustomElement('gds-radio-button')
export class GdsRadioButton extends GdsElement {
  static styles = [styles]

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-radio-button')
  }

  render() {
    return html`<slot></slot>`
  }
}
