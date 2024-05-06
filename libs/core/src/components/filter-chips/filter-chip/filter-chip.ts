import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { GdsElement } from '../../../gds-element'
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

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'listitem')
  }

  render() {
    const btnClasses = {
      'btn-p': !this.selected,
    }
    return html`<gds-button
      size="small"
      .rank=${this.selected ? 'primary' : 'secondary'}
      aria-current=${String(this.selected)}
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
