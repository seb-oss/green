import { html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'

import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsLink } from '../../link'

/**
 * @element gds-breadcrumb-item
 * @summary An item within the breadcrumb navigation.
 *
 * @slot - The default slot for the item's content
 * @slot lead - An optional slot for leading content (like icons)
 * @slot trail - An optional slot for trailing content
 * @slot separator - An optional slot for custom separator (inherited from parent)
 */
@gdsCustomElement('gds-breadcrumb-item')
export class GdsBreadcrumbItem extends GdsLink {
  render() {
    return html`
      <slot name="lead"></slot>
      <slot></slot>
      <slot name="trail"></slot>
    `
  }
}
