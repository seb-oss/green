import { nothing, unsafeCSS } from 'lit'
import { property, query } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import { literal, html as staticHtml } from 'lit/static-html.js'

import { GdsRipple } from '../../primitives/ripple/ripple.component'
import { html as customElementHtml, gdsCustomElement } from '../../scoping'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import { observeLightDOM } from '../../utils/decorators'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { forwardAttributes } from '../../utils/directives'
import { stripWhitespace } from '../../utils/helpers/strip-white-space'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { GdsFormControlElement } from '../form/form-control'
import style from './button.style.css?inline'

const ariaForwards = ['aria-label', 'aria-haspopup', 'aria-expanded']

// Create a customized `html` template tag that strips whitespace and applies custom element scoping.
const html = stripWhitespace(customElementHtml)

class Button extends GdsFormControlElement<any> {
  static styles = [tokens, unsafeCSS(style)]

  /**
   * @internal
   */
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
   * Spread the contents of the button
   */

  @styleExpressionProperty({
    selector: '.button',
  })
  'justify-content'?: string

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
   * Defines which variant the button belongs to. Defaults to "neutral".
   */
  @property({ reflect: true })
  variant:
    | 'brand'
    | 'neutral'
    | 'positive'
    | 'negative'
    | 'notice'
    | 'warning' = 'neutral'

  /**
   * Sets the size of the button. Defaults to "small".
   */
  @property({ reflect: true })
  size: 'xs' | 'small' | 'medium' | 'large' = 'medium'

  /**
   * The label of the button. Use this to add an accessible label to the button when no text is provided in the default slot.
   */
  @property()
  label = ''

  /**
   * When set, the underlying button will be rendered as an anchor element.
   */
  @property()
  href = ''

  /**
   * Where to display the linked URL. Only used when href is present.
   */
  @property()
  target?: '_self' | '_blank' | '_parent' | '_top'

  /**
   * The relationship of the linked URL as space-separated link types. Only used when href is present. Defaults to "noreferrer noopener" for security reasons when target is set.
   */
  @property()
  rel?: string

  /**
   * Causes the browser to treat the linked URL as a download. Can be used with or without a filename value. Only used when href is present.
   */
  @property()
  download?: string

  @query('slot:not([name])') private _mainSlot?: HTMLSlotElement
  @query('.button') private _button?: HTMLElement

  #isIconButton = false

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'none')
    TransitionalStyles.instance.apply(this, 'gds-button')
  }

  get #isLink() {
    return this.href.length > 0
  }

  get #defaultRel() {
    return this.target === '_blank' ? 'noreferrer noopener' : undefined
  }

  render() {
    const buttonClasses = {
      button: true,
      circle: this.#isIconButton,
      icon: this.#isIconButton,
      xs: this.size === 'xs',
      small: this.size === 'small',
      large: this.size === 'large',
      brand: this.variant === 'brand',
      positive: this.variant === 'positive',
      negative: this.variant === 'negative',
      notice: this.variant === 'notice',
      warning: this.variant === 'warning',
      primary: this.rank === 'primary',
      secondary: this.rank === 'secondary',
      tertiary: this.rank === 'tertiary',
    }

    const tag = this.#isLink ? literal`a` : literal`button`

    return staticHtml`
      <${tag}
        class=${classMap(buttonClasses)}
        type="${ifDefined(this.#isLink ? undefined : this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label || nothing}
        href=${ifDefined(this.#isLink ? this.href : undefined)}
        target=${ifDefined(this.#isLink ? this.target : undefined)}
        rel=${ifDefined(this.#isLink ? this.rel || this.#defaultRel : undefined)}
        download=${ifDefined(this.#isLink ? this.download : undefined)}
        part="_button"
        @click="${this.#handleClick}"
        ${forwardAttributes(
          (attr) =>
            attr.name.startsWith('gds-aria') ||
            attr.name === 'gds-role' ||
            ariaForwards.includes(attr.name),
        )}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${this.#mainSlotChange}></slot>
        <slot name="trail"></slot>
        ${when(
          !this._isUsingTransitionalStyles,
          () => html`<gds-ripple part="_ripple"></gds-ripple>`,
        )}
        </${tag}>
        `
  }

  protected _getValidityAnchor(): HTMLElement {
    return this._button as HTMLElement
  }

  // Check if the button is an icon button.
  #mainSlotChange = () => {
    const assignedElements = this._mainSlot?.assignedElements() ?? []

    this.#isIconButton =
      assignedElements.length === 1 &&
      (assignedElements[0].tagName.toLowerCase().startsWith('gds-icon') ||
        assignedElements[0].getAttribute('name') === 'icon')

    this.requestUpdate()
  }

  #handleClick = (e: MouseEvent) => {
    this.dispatchCustomEvent('gds-click', {
      bubbles: true,
      composed: true,
      detail: e,
    })

    if (this.form && !this.#isLink) {
      if (this.type === 'submit') {
        this.form.requestSubmit()
      } else if (this.type === 'reset') {
        this.form.reset()
      }
    }
  }

  @observeLightDOM({
    attributes: true,
    childList: false,
    subtree: false,
    characterData: false,
  })
  private _attributeChanged() {
    this.requestUpdate()
  }
}

/**
 * @element gds-button
 * @summary A custom button element that can display a label, lead and trail icons, and a ripple effect on click.
 * @status stable
 *
 * @slot - Content to be displayed as the button label.
 * @slot lead - An optional slot that allows a `gds-icon-[ICON_NAME]` element to be placed before the label.
 * @slot trail - An optional slot that allows a `gds-icon-[ICON_NAME]` element to be placed after the label.
 *
 * @event click - Fired when the button is clicked.
 */
@gdsCustomElement('gds-button', { dependsOn: [GdsRipple] })
export class GdsButton extends withSizeXProps(
  withMarginProps(withLayoutChildProps(Button)),
) {}
