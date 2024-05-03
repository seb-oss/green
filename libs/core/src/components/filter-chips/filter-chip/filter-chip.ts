import { HTMLTemplateResult } from 'lit'
import { property, state } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'
import { GdsElement } from '../../../gds-element'
import { TransitionalStyles } from '../../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'

import '../../button'
import '../../icon'

import { styles } from './filter-chip.styles'

/**
 * @element gds-filter-chips
 */
@gdsCustomElement('gds-filter-chip')
export class GdsFilterChip<ValueT = any> extends GdsElement {
  static styles = [styles]

  /**
   * Whether the segment is selected
   * @attr selected
   */
  @property({ type: Boolean, reflect: true })
  selected = false

  /**
   * Value can be used to tie arbitrary data to the segment.
   * @attr value
   */
  @property()
  value?: ValueT

  // Used for Transitional Styles in some legacy browsers
  @state()
  private _tStyles?: HTMLTemplateResult

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-filter-chip')
  }

  render() {
    console.log('this.selected', this.selected)
    return html`${this._tStyles}
      <gds-button size="small" .rank=${this.selected ? 'primary' : 'secondary'}>
        <slot></slot>
        <gds-icon
          name="checkmark"
          slot="trail"
          style="display: ${this.selected ? 'block' : 'none'}"
        ></gds-icon>
      </gds-button>`
  }
}
