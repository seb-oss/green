import { property } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsListItem } from './list-item.component'

export { GdsListItem }

/**
 * @element gds-grouped-list
 * @status stable
 *
 * Grouped lists are used to list many datapoints with labels in a structured way.
 */
@gdsCustomElement('gds-grouped-list', { dependsOn: [GdsListItem] })
export class GdsGroupedList extends GdsElement {
  /**
   * The label for the list that will render in the shadowDOM as the first <li> element in the list with the class `gds-list-heading`
   */
  @property()
  label = ''

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-grouped-list')
  }

  render() {
    return html`${when(
        this.label,
        () =>
          html`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`,
      )}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`
  }
}
