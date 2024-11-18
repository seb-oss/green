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
import '../icon/icons/cross-small'
import '../flex'
import '../button'

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
 */
@gdsCustomElement('gds-input')
@localized()
export class GdsInput extends GdsFormControlElement<string> {
  static styles = [tokens, styles]

  @property()
  value = ''

  /**
   * The label displayed above the field
   */
  @property()
  label = ''

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
   * If the input is Disabled
   */
  @property({
    attribute: 'disabled',
    type: Boolean,
    reflect: true,
  })
  disabled = false

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

  @state()
  trailSlotOccupied = false

  constructor() {
    super()
  }

  connectedCallback(): void {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
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
        <span slot="supporting-text" id="supporting-text"
          >${this.supportingText}</span
        >
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>

      <gds-flex
        level="3"
        position="relative"
        align-items="center"
        justify-content="center"
        gap="${this.size === 'small' ? '2xs' : 'xs'}"
        padding="${this.size === 'small'
          ? 'xs s'
          : !this.trailSlotOccupied
            ? 'xs xs xs m'
            : 'xs m'}"
        min-block-size="${this.size === 'small' ? 'xl' : '3xl'}"
        block-size="${this.size === 'small' ? 'xl' : '3xl'}"
        border-radius="xs"
        .background=${this.disabled
          ? 'disabled'
          : this.invalid
            ? 'negative-secondary'
            : 'secondary'}
        .border=${this.disabled
          ? ''
          : this.invalid
            ? '4xs/negative'
            : '4xs/secondary'}
        class="field ${this.invalid ? 'invalid' : ''}"
        @click=${this.#handleFieldClick}
        cursor="text"
        color="${this.disabled
          ? 'disabled'
          : this.invalid
            ? 'negative'
            : 'tertiary'}"
      >
        ${this.#renderSlotLead()} ${this.#renderNativeInput()}
        <gds-flex gap="xs" align-items="center">
          ${this.#renderClearButton()} ${this.#renderSlotTrail()}
        </gds-flex>
      </gds-flex>

      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${this.#shouldShowRemainingChars &&
        this.maxlength - this.value.length}
        .validationMessage=${this.invalid && this.validationMessage}
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
      new Event('input-cleared', {
        bubbles: true,
        composed: true,
      }),
    )
  }

  #renderSlotLead() {
    return html` <slot name="lead"></slot> `
  }

  #renderSlotTrail() {
    return html`
      <slot name="trail" @slotchange=${this.#handleSlotChange}></slot>
    `
  }

  #handleSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement
    const assignedNodes = slot.assignedNodes({ flatten: true })
    this.trailSlotOccupied =
      assignedNodes.length > 0 &&
      assignedNodes.some(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE ||
          (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() !== ''),
      )
  }

  #renderNativeInput() {
    return html`
      <input
        @input=${this.#handleOnInput}
        @change=${this.#handleOnChange}
        style="${this.invalid
          ? 'color: var(--gds-color-l3-content-negative);'
          : this.disabled
            ? 'color: currentColor;pointer-events:none;'
            : null}"
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
    if (this.clearable && this.value.length > 0)
      return html`
        <gds-button
          size="${this.size === 'small' ? 'xs' : 'small'}"
          rank="tertiary"
          variant="${this.invalid ? 'negative' : ''}"
          ?disabled="${this.disabled}"
          label="${msg('Clear input')}"
          @click=${this.#handleClearBtnClick}
        >
          <gds-icon-cross-small />
        </gds-button>
      `
    else return nothing
  }

  get #shouldShowRemainingChars() {
    return this.maxlength < Number.MAX_SAFE_INTEGER
  }
}
