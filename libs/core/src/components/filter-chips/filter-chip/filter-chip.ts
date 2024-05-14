import { property, queryAsync } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { GdsElement } from '../../../gds-element'
import { TransitionalStyles } from '../../../transitional-styles'
import {
  gdsCustomElement,
  html,
  getScopedTagName,
} from '../../../utils/helpers/custom-element-scoping'

import '../../button'
import type { GdsButton } from '../../button'
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
  @property({ reflect: true })
  selected = false

  /**
   * Value can be used to tie arbitrary data to the segment.
   * @attr value
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
      ?aria-selected=${this.selected}
    >
      <span class=${classMap(btnClasses)}><slot></slot></span>
      <gds-icon
        name="checkmark"
        slot="trail"
        style="display: ${this.selected ? 'block' : 'none'}"
        class="icon"
      ></gds-icon>
    </gds-button>`
  }
}
