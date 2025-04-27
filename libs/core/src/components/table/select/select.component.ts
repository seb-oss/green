import { unsafeCSS } from 'lit'

import { GdsElement } from '../../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import style from './select.styles.css?inline'

@gdsCustomElement('gds-table-select')
export class GdsTableSelect extends GdsElement {
  static styles = [unsafeCSS(style)]

  render() {
    return html`
      <div class="gds-row-select">
        <input type="checkbox" />
      </div>
    `
  }
}
