import { html } from 'lit'
import { GdsElement } from '../../gds-element'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { TransitionalStyles } from '../../utils/helpers/transitional-styles'

import style from './option-heading.styles'

@gdsCustomElement('gds-option-heading')
export class GdsOptionHeading extends GdsElement {
  static styles = style

  connectedCallback(): void {
    super.connectedCallback()

    this.setAttribute('inert', 'true')

    this.updateComplete.then(() =>
      TransitionalStyles.instance.apply(this, 'gds-option-heading')
    )
  }

  render() {
    return html`<slot></slot>`
  }
}
