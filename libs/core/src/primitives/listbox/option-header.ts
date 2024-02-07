import { html } from 'lit'
import { GdsElement } from '../../gds-element'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { TransitionalStyles } from '../../utils/helpers/transitional-styles'

import style from './option-header.styles'

@gdsCustomElement('gds-option-header')
export class GdsOptionHeader extends GdsElement {
  static styles = style

  connectedCallback(): void {
    super.connectedCallback()

    this.setAttribute('inert', 'true')

    this.updateComplete.then(() =>
      TransitionalStyles.instance.apply(this, 'gds-option-header')
    )
  }

  render() {
    return html`<slot></slot>`
  }
}
