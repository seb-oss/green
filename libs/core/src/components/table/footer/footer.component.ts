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
import '../../text'
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
        <div class="footer-selected">0 of 100 row(s) selected.</div>
        <gds-flex margin="0 0 0 auto" gap="s">
          <gds-card
            flex-direction="row"
            padding="2xs 2xs 2xs s"
            gap="xs"
            align-items="center"
            align-items="center"
            variant="secondary"
          >
            <gds-flex flex="0 1 auto">
              <gds-text tag="small"> Rows per page </gds-text>
            </gds-flex>
            <gds-flex>
              <gds-dropdown size="small" searchable plain>
                <gds-option value="10"> 10 </gds-option>
                <gds-option value="20"> 10 </gds-option>
                <gds-option value="40"> 10 </gds-option>
                <gds-option value="100"> 10 </gds-option>
                <gds-option value="1000"> 10 </gds-option>
              </gds-dropdown>
            </gds-flex>
          </gds-card>

          <gds-card
            flex-direction="row"
            align-items="center"
            padding="xs m"
            gap="xs"
          >
            <gds-button size="xs" rank="tertiary">
              <gds-icon-chevron-double-left></gds-icon-chevron-double-left>
            </gds-button>
            <gds-button size="xs" rank="tertiary">
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-text tag="small">Page 1 of 10</gds-text>
            <gds-button size="xs" rank="tertiary">
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
            <gds-button size="xs" rank="tertiary">
              <gds-icon-chevron-double-right></gds-icon-chevron-double-right>
            </gds-button>
          </gds-card>
        </gds-flex>
      </div>
    `
  }
}
