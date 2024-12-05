import { HTMLTemplateResult } from 'lit'
import { state } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './select.styles'

/**
 * @element gds-select
 */
@gdsCustomElement('gds-select')
export class GdsSelect extends GdsElement {
  static styles = [styles]

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-select')
  }

  render() {
    return html`<select>
      <option value="" disabled selected>Select...</option>
      <slot></slot>
    </select> `
  }
}
