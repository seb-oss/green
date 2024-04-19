import { unsafeCSS } from 'lit'
import { property, query } from 'lit/decorators.js'
import { constrainSlots } from '../../utils/helpers'
import { TransitionalStyles } from '../../transitional-styles'
import '../icon/icon'
import '../../primitives/ripple/ripple'

import { tokens } from '../../tokens.style'
import style from './button.style.css'

import {
  gdsCustomElement,
  html as customElementHtml,
} from '../../utils/helpers/custom-element-scoping'
import { stripWhitespace } from '../../utils/helpers/strip-white-space'
import { classMap } from 'lit/directives/class-map.js'
import { GdsFormControlElement } from '../../components/form-control'

// Create a customized `html` template tag that strips whitespace and applies custom element scoping.
const html = stripWhitespace(customElementHtml)

/**
 * @element gds-button
 * @summary A custom button element that can display a label, lead and trail icons, and a ripple effect on click.
 * @status beta
 *
 * @slot - Content to be displayed as the button label.
 * @slot lead - An optional slot that allows a `gds-icon` element to be placed before the label.
 * @slot trail - An optional slot that allows a `gds-icon` element to be placed after the label.
 *
 * @event click - Fired when the button is clicked.
 */
@gdsCustomElement('gds-button')
export class GdsButton<ValueT = any> extends GdsFormControlElement<ValueT> {
  static styles = [tokens, unsafeCSS(style)]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * Whether the button is disabled.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false

  /**
   * The type of the button.
   */
  @property({ reflect: true })
  type?: HTMLButtonElement['type']

  /**
   * The variant of the button. Defaults to "primary".
   */
  @property({ reflect: true })
  variant: 'primary' | 'secondary' | 'tertiary' = 'primary'

  /**
   * Defines which set the button belongs to. Defaults to "neutral".
   */
  @property({ reflect: true })
  set: 'neutral' | 'positive' | 'negative' = 'neutral'

  /**
   * Sets the size of the button. Defaults to "small".
   */
  @property({ reflect: true })
  size: 'small' | 'medium' | 'large' = 'medium'

  /**
   * The label of the button. Use this to add an accessible label to the button when no text is provided in the default slot.
   */
  @property()
  label = ''

  @query('slot:not([name])') private _mainSlot?: HTMLSlotElement

  #isIconButton = false

  constructor() {
    super()
    constrainSlots(this)
  }

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-button')
  }

  render() {
    return html`
      <button
        class="${classMap({ circle: this.#isIconButton })}"
        ?type="${this.type}"
        ?disabled="${this.disabled}"
        @click="${this.#handleClick}"
        aria-label="${this.label}"
      >
        <slot name="lead" gds-allow="gds-icon"></slot>
        <slot
          @slotchange=${this.#mainSlotChange}
          gds-allow="#text gds-icon"
        ></slot>
        <slot name="trail" gds-allow="gds-icon"></slot>
        <gds-ripple></gds-ripple>
      </button>
    `
  }

  // Check if the button is an icon button.
  #mainSlotChange = () => {
    const assignedNodes = this._mainSlot?.assignedNodes() ?? []

    this.#isIconButton =
      assignedNodes.length === 1 &&
      assignedNodes.some((node) => node.nodeName === 'GDS-ICON')

    this.requestUpdate()
  }

  #handleClick = (e: MouseEvent) => {
    this.dispatchEvent(
      new CustomEvent('gds-click', {
        bubbles: true,
        composed: true,
        detail: e,
      })
    )

    if (this.form) {
      if (this.type === 'submit') {
        this.form.requestSubmit()
      } else if (this.type === 'reset') {
        this.form.reset()
      }
    }
  }
}
