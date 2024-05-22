import { nothing, unsafeCSS } from 'lit'
import { property, query } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'
import { classMap } from 'lit/directives/class-map.js'
import { constrainSlots } from '../../utils/helpers/constrain-slots'
import { forwardAttributes } from '../../utils/directives'
import { TransitionalStyles } from '../../transitional-styles'
import '../../primitives/ripple'

import { tokens } from '../../tokens.style'
import style from './button.style.css'

import { gdsCustomElement, html as customElementHtml } from '../../scoping'
import { stripWhitespace } from '../../utils/helpers/strip-white-space'
import { GdsFormControlElement } from '../../components/form-control'
import type { GdsElement } from '../../gds-element'

// Create a customized `html` template tag that strips whitespace and applies custom element scoping.
const html = stripWhitespace(customElementHtml)

/**
 * @element gds-button
 * @summary A custom button element that can display a label, lead and trail icons, and a ripple effect on click.
 * @status beta
 *
 * @slot - Content to be displayed as the button label.
 * @slot lead - An optional slot that allows a `gds-icon-[ICON_NAME]` element to be placed before the label.
 * @slot trail - An optional slot that allows a `gds-icon-[ICON_NAME]` element to be placed after the label.
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
   * The rank of the button. Defaults to "primary".
   */
  @property({ reflect: true })
  rank: 'primary' | 'secondary' | 'tertiary' = 'primary'

  /**
   * Defines which set the button belongs to. Defaults to "neutral".
   */
  @property({ reflect: true })
  variant: 'default' | 'positive' | 'negative' = 'default'

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
    this.setAttribute('role', 'none')
    TransitionalStyles.instance.apply(this, 'gds-button')
  }

  render() {
    const buttonClasses = {
      circle: this.#isIconButton,
      icon: this.#isIconButton,
      small: this.size === 'small',
      large: this.size === 'large',
      positive: this.variant === 'positive',
      negative: this.variant === 'negative',
      primary: this.rank === 'primary',
      secondary: this.rank === 'secondary',
      tertiary: this.rank === 'tertiary',
    }
    return html`
      <button
        class=${classMap(buttonClasses)}
        ?type="${this.type}"
        ?disabled="${this.disabled}"
        @click="${this.#handleClick}"
        aria-label=${this.label || nothing}
        part="_button"
        ${forwardAttributes(
          (attr) =>
            attr.name.startsWith('gds-aria') || attr.name === 'gds-role',
        )}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${this.#mainSlotChange}></slot>
        <slot name="trail"></slot>
        ${when(
          !this._isUsingTransitionalStyles,
          () => html`<gds-ripple></gds-ripple>`,
        )}
      </button>
    `
  }

  // Check if the button is an icon button.
  #mainSlotChange = () => {
    const assignedNodes = (this._mainSlot?.assignedNodes() ??
      []) as GdsElement[]

    this.#isIconButton =
      assignedNodes.length === 1 &&
      assignedNodes.some((node) =>
        node.nodeName.toLowerCase().startsWith('gds-icon'),
      )

    this.requestUpdate()
  }

  #handleClick = (e: MouseEvent) => {
    this.dispatchEvent(
      new CustomEvent('gds-click', {
        bubbles: true,
        composed: true,
        detail: e,
      }),
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
