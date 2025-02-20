import { HTMLTemplateResult } from 'lit'
import { state } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './radio.styles'

/**
 * @element gds-radio
 */
@gdsCustomElement('gds-radio')
export class GdsRadio extends GdsElement {
  static styles = [tokens, styles]

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-radio')
  }

  render() {
    return html`
      <div class="radio">
        <div class="dot"></div>
      </div>
      <div class="radio selected">
        <div class="dot"></div>
      </div>
      <div class="radio">
        <div class="dot"></div>
      </div>
    `
  }
}
