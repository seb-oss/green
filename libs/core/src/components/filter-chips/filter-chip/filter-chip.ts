import { property, queryAsync } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../../gds-element'
import { TransitionalStyles } from '../../../transitional-styles'
import {
  gdsCustomElement,
  getScopedTagName,
  html,
} from '../../../utils/helpers/custom-element-scoping'

import '../../button'

import type { GdsButton } from '../../button'

import '../../icon/icons/checkmark.js'

import { styles } from './filter-chip.styles'

/**
 * @element gds-filter-chip
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

    // Apply transitional styles to the button if connectedCallback is called directly
    // This is here mainly for the toggle feature in Storybook to work
    this._button.then((btn) => {
      TransitionalStyles.instance.apply(btn, 'gds-button')
    })
  }

  @queryAsync(getScopedTagName('gds-button'))
  private _button!: Promise<GdsButton>

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
