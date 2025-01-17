import { property, queryAsync } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../../gds-element'
import { TransitionalStyles } from '../../../transitional-styles'
import {
  gdsCustomElement,
  getScopedTagName,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import { styles } from './filter-chip.styles'

import type { GdsButton } from '../../button'

import '../../button'
import '../../icon/icons/checkmark.js'

/**
 * @element gds-filter-chip
 * @status stable
 *
 * * @slot Content of the Filter chip
 */
@gdsCustomElement('gds-filter-chip')
export class GdsFilterChip<ValueT = any> extends GdsElement {
  static styles = [styles]

  /**
   * Whether the chip is selected
   */
  @property({ reflect: true, type: Boolean })
  selected = false

  /**
   * The value of the chip
   */
  @property()
  value?: ValueT

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'none')
    TransitionalStyles.instance.apply(this, 'gds-filter-chip')
  }

  render() {
    const btnClasses = {
      'btn-p': !this.selected,
    }
    return html`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected ? 'primary' : 'secondary'}
      variant=${this._isUsingTransitionalStyles ? 'ghost' : 'default'}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${classMap(btnClasses)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected ? 'contents' : 'none'}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`
  }
}
