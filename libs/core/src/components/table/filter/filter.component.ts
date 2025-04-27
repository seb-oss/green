import { nothing, unsafeCSS } from 'lit'
import { property, query, state } from 'lit/decorators.js'

import { GdsElement } from '../../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import style from './filter.styles.css?inline'

import '../../input'
import '../../dropdown'
import '../../card'
import '../../div'
import '../../flex'
import '../../button'
import '../../icon/icons/dot-grid-two'
import '../../icon/icons/dot-grid-one-vertical'
import '../../icon/icons/chevron-right'

/**
 * @element gds-table-filter
 */
@gdsCustomElement('gds-table-filter')
export class GdsTableFilter extends GdsElement {
  static styles = [unsafeCSS(style)]
  render() {
    return html`
      <gds-flex z-index="12" position="relative">
        <gds-flex margin="0 auto 0 0" gap="s">
          <gds-input
            size="small"
            plain
            placeholder="Search data"
            clearable
            width="400px"
          >
            <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          </gds-input>
          <gds-dropdown
            size="small"
            searchable
            plain
            combobox
            multiple
            placeholder="Filter"
          >
            <gds-option isplaceholder>Filter by branches</gds-option>
            <gds-option value="columns">
              <span>Branch One</span>
              <gds-badge variant="notice" size="small" rounded> 24 </gds-badge>
            </gds-option>
            <gds-option value="branch-two">
              <span>Branch Two</span>
              <gds-badge variant="notice" size="small" rounded> 24 </gds-badge>
            </gds-option>
          </gds-dropdown>
        </gds-flex>
        <gds-flex align-items="center" gap="m">
          <gds-flex gap="xs">
            <gds-text tag="small">Compact</gds-text>
            <input type="checkbox" />
          </gds-flex>
          <gds-dropdown size="small" searchable plain>
            <gds-option value="columns">Columns</gds-option>
          </gds-dropdown>
        </gds-flex>
      </gds-flex>
    `
  }
}
