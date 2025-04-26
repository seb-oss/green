import { nothing, unsafeCSS } from 'lit'
import { property, query, state } from 'lit/decorators.js'

import { GdsElement } from '../../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import style from './footer.styles.css?inline'

import '../../input'
import '../../dropdown'
import '../../card'
import '../../div'
import '../../button'
import '../../icon/icons/dot-grid-two'
import '../../icon/icons/dot-grid-one-vertical'
import '../../icon/icons/chevron-right'

/**
 * @element gds-table-footer
 */
@gdsCustomElement('gds-table-footer')
export class GdsTableFooter extends GdsElement {
  static styles = [unsafeCSS(style)]
  render() {
    return html`
      <div class="gds-table-footer">
        <gds-flex flex="1"> 0 of 100 row(s) selected. </gds-flex>
        <div class="footer-actions">
          <span>Number of rows</span>
          <div class="footer-actions-rows">
            <gds-dropdown size="small" searchable plain class="rows-dropdown">
              <gds-option value="10"> 10 </gds-option>
              <gds-option value="20"> 10 </gds-option>
              <gds-option value="40"> 10 </gds-option>
              <gds-option value="100"> 10 </gds-option>
              <gds-option value="1000"> 10 </gds-option>
            </gds-dropdown>
          </div>

          <gds-flex
            flex="1"
            align-items="center"
            justify-content="space-between"
          >
            <span>1-10 of 100</span>
          </gds-flex>
          <gds-flex>
            <gds-button size="small" rank="tertiary">
              <gds-icon-chevron-double-left></gds-icon-chevron-double-left>
            </gds-button>
            <gds-button size="small" rank="tertiary">
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-button size="small" rank="tertiary">
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
            <gds-button size="small" rank="tertiary">
              <gds-icon-chevron-double-right></gds-icon-chevron-double-right>
            </gds-button>
          </gds-flex>
        </div>
      </div>
    `
  }
}
