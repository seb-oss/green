import { HTMLTemplateResult } from 'lit'
import { state } from 'lit/decorators.js'
import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'

import { styles } from './filter-chips.styles'

/**
 * @element gds-filter-chips
 */
@gdsCustomElement('gds-filter-chips')
export class GdsFilterChips extends GdsElement {
  static styles = [styles]

  // Used for Transitional Styles in some legacy browsers
  @state()
  private _tStyles?: HTMLTemplateResult

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-filter-chips')
  }

  render() {
    return html`${this._tStyles}<slot></slot>`
  }
}
