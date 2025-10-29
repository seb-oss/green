import { html } from 'lit'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement } from '../../scoping'
import { TransitionalStyles } from '../../transitional-styles'
import MenuHeadingStyles from './menu-heading.styles'

/**
 * @element gds-menu-heading
 *
 * @slot - The default slot for the menu heading content.
 */
@gdsCustomElement('gds-menu-heading')
export class GdsMenuHeading extends GdsElement {
  static styles = MenuHeadingStyles

  connectedCallback(): void {
    super.connectedCallback()

    this.setAttribute('inert', 'true')

    this.updateComplete.then(() =>
      TransitionalStyles.instance.apply(this, 'gds-menu-heading'),
    )
  }

  render() {
    return html`<slot></slot>`
  }
}
