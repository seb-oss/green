import { unsafeCSS } from 'lit'
import { property, customElement } from 'lit/decorators.js'
import { constrainSlots } from '../green-temp/helpers'

import { tokens } from '../green-temp/tokens.style'
import style from './menu-button.css?inline'

import { classMap } from 'lit/directives/class-map.js'
import { GdsFormControlElement } from '../green-temp/form-control'

import { html } from '@sebgroup/green-core/scoping'
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
@customElement('menu-button')
export class MenuButton<ValueT = any> extends GdsFormControlElement<ValueT> {
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
   * The type of the button. Defaults to "button".
   */
  @property({ reflect: true })
  type: "button" | "submit" | "reset" | "menu" = "button"
    /**
     * The variant of the button. Defaults to "primary".
     */

  /**
   * The variant of the button. Defaults to "primary".
   */
  // @property({ reflect: true })
  // variant: 'primary' | 'secondary' | 'riffle' | 'tertiary' = 'primary'

  /**
   * Defines which set the button belongs to. Defaults to "neutral".
   */
  // @property({ reflect: true })
  // set: 'neutral' | 'positive' | 'negative' = 'neutral'

  /**
   * Sets the size of the menu-button. Defaults to "medium".
   */
  @property({ reflect: true })
  size: 'small' | 'medium' | 'large' = 'medium'

  /**
   * The label of the menu-button. Use this to add an accessible label to the button when no text is provided in the default slot.
   */
  @property()
  label = '';

  /**
   * The label of the menu-button. Use this to add an accessible label to the button when no text is provided in the default slot.
   */
  @property({ type: Boolean })
  compactview: boolean = false;

  /**
  * Whether the menu button is selected
  */
  @property({ type: Boolean })
  selected: boolean = false;

  // handleMenuButtonSelection = () => {
  //   this.selected = !this.selected;
  //   const leadElement = this.querySelector('[slot=lead]') as GdsIcon;
  //   if(leadElement) {
  //     leadElement.solid = !leadElement.solid;
  //   } 
    
  //   const tailElement = this.querySelector('[slot=trail]') as GdsIcon;
  //   if(tailElement) {
  //     tailElement.solid = !tailElement.solid;
  //   }
  // }

  constructor() {
    super()
    constrainSlots(this)
  }

  render() {
    const classes = {
      selected: this.selected,
      compactview: this.compactview,
    };
    return html`
      <button
        class="intra-menu-button${classMap(classes)}"
        type="${this.type}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </button>
    `
    //@click=${this.handleMenuButtonSelection}
  }
}
