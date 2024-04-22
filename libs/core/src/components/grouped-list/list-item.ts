import { GdsElement } from '@sebgroup/green-core/gds-element'
import {
  gdsCustomElement,
  html,
} from '@sebgroup/green-core/utils/helpers/custom-element-scoping'

/**
 * @element gds-list-item
 * @status beta
 *
 * Used with `gds-grouped-list` to create a list items.
 */
@gdsCustomElement('gds-list-item')
export class GdsListItem extends GdsElement {
  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'listitem')
  }

  render() {
    return html`<slot></slot>`
  }
}
