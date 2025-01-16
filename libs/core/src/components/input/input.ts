import { localized, msg } from '@lit/localize'
import { property, query, queryAsync, state } from 'lit/decorators.js'
import { choose } from 'lit/directives/choose.js'
import { nothing } from 'lit/html.js'

import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { forwardAttributes } from '../../utils/directives'
import { GdsFormControlElement } from '../form/form-control'
import { styles } from './input.styles'

// Local Components
import '../../primitives/form-control-header'
import '../../primitives/form-control-footer'
import '../../primitives/field-base'
import '../icon/icons/cross-small'
import '../flex'
import '../button'

import type { GdsButton } from '../button'

/**
 * @summary A custom input element that can be used in forms.
 * @status beta
 *
 * @element gds-input
 *.
 * @slot lead - Accepts `gds-icon-[ICON_NAME]`. Use this to place an icon in the start of the field.
 * @slot trail - Accepts `gds-badge`. Use this to place a badge in the field, for displaying currency for example.
 * @slot extended-supporting-text - A longer supporting text can be placed here. It will be
 *       displayed in a panel when the user clicks the info button.
 * @event gds-input-cleared - Fired when the clear button is clicked.
 */
@gdsCustomElement('gds-input')
@localized()
export class GdsInput extends GdsFormControlElement<string> {
  static styles = [tokens, styles]

  /**
   * The supporting text displayed between the label and the field itself
   */
  @property({ attribute: 'supporting-text' })
  supportingText = ''

  /**
   * Whether the supporting text should be displayed or not.
   */
  @property({
    attribute: 'show-extended-supporting-text',
    type: Boolean,
    reflect: true,
  })
  showExtendedSupportingText = false

  /**
   * Whether the field should be clearable or not. Clearable fields will display a clear button when
   * the field has a value.
   */
  @property({ type: Boolean })
  clearable = false

  /**
   * The maximum number of characters allowed in the field.
   */
  @property({ type: Number })
  maxlength: number = Number.MAX_SAFE_INTEGER

  /**
   * The variant of the input field. The default variant displays a label, supporting text, and
   * extended supporting text. The floating-label variant only displays the field itself and the
   * supporting text below.
   *
   * The floating-label variant should only be used in specific cases, for example when the input field
   * is placed inside a table cell or in a space-constrained layout.
   *
   * A typical form should use the default variant.
   */
  @property({ type: String })
  variant: 'default' | 'floating-label' = 'default'

  @property({ type: String })
  size: 'large' | 'small' = 'large'

  @queryAsync('input')
  private elInputAsync!: Promise<HTMLInputElement>

  @query('input')
  private elInput!: HTMLInputElement

  /**
   * A reference to the clear button element. Returns null if there is no clear button.
   * Intended for use in integration tests.
   */
  test_getClearButton() {
    return this.shadowRoot?.querySelector<GdsButton>('#clear-button')
  }

  /**
   * A reference to the field element. This does not refer to the input element itself,
   * but the wrapper that makes up the visual field.
   * Intended for use in integration tests.
   */
  test_getFieldElement() {
    return this.shadowRoot?.querySelector('#field')
  }

  constructor() {
    super()
    this.value = ''
  }

  render() {
    return html`${choose(this.variant, [
      ['default', () => this.#renderDefault()],
      ['floating-label', () => this.#renderFloatingLabel()],
    ])}`
  }

  _getValidityAnchor() {
    return this.elInput
  }

  #renderDefault() {
    return html`
      <gds-form-control-header class="size-${this.size}">
        <label for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${this.#handleFieldClick}
        id="field"
      >
        ${this.#renderFieldContents()}
      </gds-field-base>
      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${this.#shouldShowRemainingChars &&
        this.maxlength - (this.value?.length || 0)}
        .validationMessage=${this.invalid &&
        (this.errorMessage || this.validationMessage)}
      ></gds-form-control-footer>
    `
  }

  // variant="floatingLabel"
  #renderFloatingLabel() {
    return nothing
  }

  // Any attribute name added here will get forwarded to the native <input> element.
  #forwardableAttrs = (attr: Attr) =>
    ['type', 'placeholder', 'required'].includes(attr.name)

  #handleOnInput = (e: Event) => {
    const element = e.target as HTMLInputElement
    this.value = element.value
  }

  #handleOnChange = (e: Event) => {
    const element = e.target as HTMLInputElement
    this.value = element.value
    this.dispatchEvent(
      new Event('change', {
        bubbles: true,
        composed: true,
      }),
    )
  }

  #handleFieldClick = () => {
    this.elInputAsync.then((el) => el.focus())
  }

  #handleClearBtnClick = () => {
    this.value = ''
    this.dispatchEvent(
      new Event('gds-input-cleared', {
        bubbles: true,
        composed: true,
      }),
    )
    this.dispatchEvent(
      new Event('input', {
        bubbles: true,
        composed: true,
      }),
    )
  }

  #renderFieldContents() {
    const elements = [
      this.#renderSlotLead(),
      this.#renderNativeInput(),
      this.#renderClearButton(),
      this.#renderSlotTrail(),
    ]

    return elements.map((element) => html`${element}`)
  }

  #renderSlotLead() {
    return html` <slot slot="lead" name="lead"></slot> `
  }

  #renderSlotTrail() {
    return html`<slot slot="trail" name="trail"></slot>`
  }

  #renderNativeInput() {
    return html`
      <input
        @input=${this.#handleOnInput}
        @change=${this.#handleOnChange}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${forwardAttributes(this.#forwardableAttrs)}
      />
    `
  }

  #renderClearButton() {
    if (this.clearable && (this.value?.length || 0) > 0)
      return html`<gds-button
        size="${this.size === 'small' ? 'xs' : 'small'}"
        rank="tertiary"
        variant="${this.invalid ? 'negative' : ''}"
        ?disabled="${this.disabled}"
        label="${msg('Clear input')}"
        @click=${this.#handleClearBtnClick}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small />
      </gds-button>`
    else return nothing
  }

  get #shouldShowRemainingChars() {
    return this.maxlength < Number.MAX_SAFE_INTEGER
  }
}
