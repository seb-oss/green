import { html } from 'lit'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement } from '../../scoping'
import { TransitionalStyles } from '../../transitional-styles'
import style from './menu-heading.styles'

@gdsCustomElement('gds-menu-heading')
export class GdsMenuHeading extends GdsElement {
  static styles = style

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
