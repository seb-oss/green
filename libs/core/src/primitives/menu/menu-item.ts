import { GdsElement } from '../../gds-element'
import { Focusable } from '../../mixins/focusable'
import { gdsCustomElement, html } from '../../scoping'
import { TransitionalStyles } from '../../transitional-styles'
import styles from '../listbox/option.styles'

/**
 * @element gds-menu-item
 * @internal
 */
@gdsCustomElement('gds-menu-item')
export class GdsMenuItem extends Focusable(GdsElement) {
  static styles = [styles]

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'menuitem')

    this.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return
      e.preventDefault()
      this.click()
    })

    this.addEventListener('click', this.#handleOnClick)

    // This component should have the same style as option, so we just apply `gds-option` here.
    TransitionalStyles.instance.apply(this, 'gds-option')
  }

  #handleOnClick = () => {
    this.dispatchEvent(
      new CustomEvent('gds-menu-item-click', {
        bubbles: true,
        composed: true,
      }),
    )
  }

  render() {
    return html`<div><slot></slot></div>`
  }
}
