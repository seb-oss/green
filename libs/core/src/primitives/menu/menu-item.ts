import { LitElement } from 'lit'
import { Focusable } from '../../mixins/focusable'

/**
 * @element gds-menu-item
 * @internal
 */
export class GdsMenuItem extends Focusable(LitElement) {
  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'menuitem')
  }
}
