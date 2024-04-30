import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'

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
