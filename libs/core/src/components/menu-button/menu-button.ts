import { unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { constrainSlots } from '../../utils/helpers'
import { tokens } from '../../tokens.style'

import style from './menu-button.css?inline'

//import { GdsIcon } from '@sebgroup/green-core/components/icon/icon.js'

// Create a customized `html` template tag that strips whitespace and applies custom element scoping.
//const html = stripWhitespace(customElementHtml)

/**
 * @element menu-button
 * @summary A custom button element that can display a label, lead and trail icons, and a ripple effect on click.
 * @status beta
 *
 * @slot - Content to be displayed as the button label.
 * @slot lead - An optional slot that allows a `gds-icon` element to be placed before the label.
 * @slot trail - An optional slot that allows a `gds-icon` element to be placed after the label.
 *
 * @event click - Fired when the button is clicked.
 */
@gdsCustomElement('gds-menu-button')
export class MenuButton extends GdsElement {
  static styles = [tokens, unsafeCSS(style)]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * Whether the menu-button is disabled.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false

  /**
   * Sets the size of the menu-button. Defaults to "medium".
   */
  @property({ reflect: true })
  size: 'small' | 'medium' | 'large' = 'medium'

  /**
   * The label of the menu-button. Use this to add an accessible label to the button when no text is provided in the default slot.
   */
  @property()
  label = ''

  /**
   * The label of the menu-button. Use this to add an accessible label to the button when no text is provided in the default slot.
   */
  @property({ type: Boolean })
  compactview: boolean = false

  /**
   * Whether the menu button is selected
   */
  @property({ type: Boolean })
  selected: boolean = false

  constructor() {
    super()
    constrainSlots(this)
  }

  render() {
    const classes = {
      selected: this.selected,
      compactview: this.compactview,
    }
    return html`
      <button
        class="${classMap(classes)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </button>
    `
  }
}
