import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../../gds-element'
import { TransitionalStyles } from '../../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import { GdsButton } from '../../button/button.component'
import { IconCheckmark } from '../../icon/icons/checkmark.component'
import { styles } from './filter-chip.styles'

/**
 * @element gds-filter-chip
 *
 * * @slot Content of the Filter chip
 */
@gdsCustomElement('gds-filter-chip', {
  dependsOn: [GdsButton, IconCheckmark],
})
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

  /**
   * The size of the chip
   * @default 'large'
   */
  @property({ reflect: true, type: String })
  size: 'small' | 'large' = 'large'

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
      .size=${this.size === 'large' ? 'medium' : 'small'}
      .rank=${this.selected ? 'primary' : 'secondary'}
      variant=${this._isUsingTransitionalStyles ? 'ghost' : 'default'}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${classMap(btnClasses)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected ? 'contents' : 'none'}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`
  }
}
