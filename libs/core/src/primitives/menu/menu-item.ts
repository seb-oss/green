import { HTMLTemplateResult, LitElement } from 'lit'
import { state } from 'lit/decorators.js'

import { GdsElement } from '@sebgroup/green-core/gds-element'
import { Focusable } from '@sebgroup/green-core/mixins/focusable'
import { TransitionalStyles } from '@sebgroup/green-core/transitional-styles'
import {
  gdsCustomElement,
  html,
} from '@sebgroup/green-core/utils/helpers/custom-element-scoping'

import styles from '../listbox/option.styles'

/**
 * @element gds-menu-item
 * @internal
 */
@gdsCustomElement('gds-menu-item')
export class GdsMenuItem extends Focusable(GdsElement) {
  static styles = [styles]

  // Used for Transitional Styles in some legacy browsers
  @state()
  private _tStyles?: HTMLTemplateResult

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
    return html`${this._tStyles}
      <div><slot></slot></div>`
  }
}
