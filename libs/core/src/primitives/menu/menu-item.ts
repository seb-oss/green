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

    this.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return
      e.preventDefault()
      this.click()
    })

    // This component should have the same style as option, so we just apply `gds-option` here.
    TransitionalStyles.instance.apply(this, 'gds-option')
  }

  onclick = () => {
    this.dispatchEvent(
      new CustomEvent('gds-menu-item-click', {
        bubbles: true,
        composed: true,
      })
    )
  }

  render() {
    return html`<slot></slot>`
  }
}
