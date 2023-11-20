import { LitElement } from 'lit'
import { Focusable } from '../../mixins/focusable'
import { TransitionalStyles } from 'src/transitional-styles'
import {
  gdsCustomElement,
  html,
} from 'src/utils/helpers/custom-element-scoping'

/**
 * @element gds-menu-item
 * @internal
 */
@gdsCustomElement('gds-menu-item')
export class GdsMenuItem extends Focusable(LitElement) {
  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'menuitem')

    // This component should have the same style as option, so we just apply `gds-option` here.
    TransitionalStyles.instance.apply(this, 'gds-option')
  }

  render() {
    return html`<slot></slot>`
  }
}
