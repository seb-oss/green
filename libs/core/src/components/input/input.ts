import { LitElement, TemplateResult } from 'lit'
import { property, query, queryAsync } from 'lit/decorators.js'
import { until } from 'lit/directives/until.js'
import { nothing } from 'lit/html.js'
import { when } from 'lit/directives/when.js'
import { choose } from 'lit/directives/choose.js'
import { msg } from '@lit/localize'

import { constrainSlots } from '../../utils/helpers'
import { watch } from '../../utils/decorators'
import { forwardAttributes } from '../../utils/directives'
import { GdsFormControlElement } from '../form/form-control'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { tokens } from '../../tokens.style'

import { styles } from './input.styles'

import '../icon/icons/cross-small'
import '../icon/icons/circle-info'

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
export class GdsInput extends GdsFormControlElement<string> {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  }
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
   * Whether the field should be clearable or not. Clearable fields will display a clear button when
   * the field has a value.
   */
  @property({ type: Boolean })
  clearable = false

  /**
   * The maximum number of characters allowed in the field.
   */
  @property({ type: Number })
  maxlength = Number.MAX_SAFE_INTEGER

  /**
   * The variant of the input field. The default variant displays a label, supporting text, and
   * extended supporting text. The simplified variant only displays the field itself and the
   * supporting text below.
   *
   * The simplified variant should only be used in specific cases, for example when the input field
   * is placed inside a table cell or in a space-constrained layout.
   *
   * A typical form should use the default variant.
   */
  @property({ type: String })
  variant: 'default' | 'simplified' = 'default'

  /**
   * Whether the input field should be multiline or not. Multiline fields will render a textarea
   * internally instead of an input.
   */
  @property({ type: Boolean })
  multiline = false

  @queryAsync('input, textarea')
  private elInputAsync!: Promise<HTMLInputElement | HTMLTextAreaElement>

  @query('input, textarea')
  private elInput!: HTMLInputElement | HTMLTextAreaElement

  @queryAsync('slot[name="extended-supporting-text"]')
  private elExtendedSupportingTextSlot!: Promise<HTMLSlotElement>

  constructor() {
    super()
    constrainSlots(this)
  }

  connectedCallback(): void {
    super.connectedCallback()
    this._setAutoHeight()
  }

  render() {
    return html`${choose(this.variant, [
      ['default', () => this.#renderDefault()],
      ['simplified', () => this.#renderSimplified()],
    ])}`
  }

  protected _getValidityAnchor() {
    return this.elInput
  }

  // variant="default"
  #renderDefault() {
    return html`
      <div class="head">
        <label for="input">${this.label}</label>
        ${until(this.#asyncRenderExtendedSupportingTextButton(), nothing)}
      </div>

      ${this.#renderSupportingText()} ${this.#renderExtendedSupportingText()}

      <div class="field" @click=${this.#handleFieldClick}>
        <slot name="lead"></slot>
        ${when(
          this.multiline,
          () => html`${this.#renderNativeTextarea()}`,
          () => html`${this.#renderNativeInput()}`,
        )}
        <slot name="trail" gds-allow="gds-badge"></slot>
        ${this.#renderClearButton()}
      </div>

      <div class="foot">
        <div>
          ${when(
            this.invalid,
            () =>
              html`<span class="error-text">${this.validationMessage}</span>`,
          )}
        </div>
        ${when(this.#shouldShowRemainingChars, () =>
          this.#renderRemainingCharsBadge(),
        )}
      </div>
    `
  }

  // variant="simplified"
  #renderSimplified() {
    return html`
      <div class="field" @click=${this.#handleFieldClick}>
        <slot name="lead"></slot>
        <label for="input">
          <div>${this.label}</div>
          ${when(
            this.multiline,
            () => html`${this.#renderNativeTextarea()}`,
            () => html`${this.#renderNativeInput()}`,
          )}
        </label>
        <slot name="trail" gds-allow="gds-badge"></slot>
        ${this.#renderClearButton()}
      </div>

      <div class="foot">
        ${this.#renderSupportingText()}
        ${when(this.#shouldShowRemainingChars, () =>
          this.#renderRemainingCharsBadge(),
        )}
        ${until(this.#asyncRenderExtendedSupportingTextButton(), nothing)}
      </div>

      ${this.#renderExtendedSupportingText()}
    `
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

  @watch('value')
  private _setAutoHeight() {
    if (!this.multiline) return
    this.elInputAsync.then((element) => {
      const lines = (element.value.split('\n').length || 1).toString()
      element?.style.setProperty('--_lines', lines.toString())
    })
  }

  #handleFieldClick = () => {
    this.elInputAsync.then((el) => el.focus())
  }

  #handleClearBtnClick = () => {
    this.value = ''
  }

  #handleSupportingTextBtnClick = () => {
    this.showExtendedSupportingText = !this.showExtendedSupportingText
    this.dispatchEvent(
      new CustomEvent('gds-ui-state', {
        bubbles: true,
        composed: true,
        detail: this.showExtendedSupportingText,
      }),
    )
  }

  #renderNativeInput() {
    return html`
      <input
        @input=${this.#handleOnInput}
        @change=${this.#handleOnChange}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${forwardAttributes(this.#forwardableAttrs)}
      />
    `
  }

  #renderNativeTextarea() {
    return html`
      <textarea
        @input=${this.#handleOnInput}
        @change=${this.#handleOnChange}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${forwardAttributes(this.#forwardableAttrs)}
      ></textarea>
    `
  }

  #renderSupportingText() {
    return html`
      <div class="supporting-text" id="supporting-text">
        ${this.supportingText}
      </div>
    `
  }

  #renderExtendedSupportingText() {
    return html`
      <div
        class="extended-supporting-text"
        aria-hidden="${!this.showExtendedSupportingText}"
        ?inert="${!this.showExtendedSupportingText}"
      >
        <div>
          <slot name="message" @slotchange=${() => this.requestUpdate()}></slot>
        </div>
      </div>
    `
  }

  #renderClearButton() {
    if (this.clearable && this.value.length > 0)
      return html`
        <gds-button
          size="small"
          variant="tertiary"
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

  #renderRemainingCharsBadge() {
    const remaining = this.maxlength - this.value.length
    let variant
    if (remaining < 0) {
      variant = 'error'
    } else if (remaining < 20) {
      variant = 'warning'
    } else {
      variant = 'success'
    }
    return html`<gds-badge variant="${variant}">${remaining}</gds-badge>`
  }

  /**
   * Returns a promise that resolves when the DOM query for the extended supporting text slot has resolved.
   * If the slot is empty, an empty template is returned, otherwise the support text toggle button is returned.
   */
  async #asyncRenderExtendedSupportingTextButton(): Promise<TemplateResult> {
    return this.elExtendedSupportingTextSlot.then((slot) => {
      if (slot && slot.assignedElements().length > 0)
        return html`
          <gds-button
            size="small"
            variant="tertiary"
            label="${msg('Show extended supporting text')}"
            @click=${this.#handleSupportingTextBtnClick}
          >
            <gds-icon-circle-info />
          </gds-button>
        `
      else return nothing
    })
  }
}
