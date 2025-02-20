import { HTMLTemplateResult } from 'lit'
import { state } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './radio.styles'

/**
 * @element gds-radio-button
 */
@gdsCustomElement('gds-radio')
export class GdsRadio extends GdsElement {
  static styles = [styles]

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-radio')
  }

  render() {
    return html`<slot></slot>`
  }
}
