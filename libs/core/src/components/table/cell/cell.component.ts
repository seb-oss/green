import { nothing, unsafeCSS } from 'lit'

import { GdsElement } from '../../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'

import '../../flex'

import style from './cell.styles.css?inline'

/**
 * @element gds-table-cell
 */
@gdsCustomElement('gds-table-cell')
export class GdsTableCell extends GdsElement {
  static styles = [unsafeCSS(style)]

  render() {
    return html`
      <gds-flex
        align-items="center"
        padding="xs m"
        border-style="solid"
        border-width="0 0 0 4xs"
        height="100%"
        flex="1"
      >
        <slot name="lead"></slot>
        <gds-flex class="cell-value" flex-direction="column">
          <slot></slot>
          <slot name="supporting-text"></slot>
        </gds-flex>
        <slot name="trail"></slot>
        <gds-div width="4sx" height="100%" data-title="resizer"></gds-div>
      </gds-flex>
    `
  }
}
