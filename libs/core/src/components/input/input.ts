import { TemplateResult, unsafeCSS } from 'lit'
import { property, query, queryAsync } from 'lit/decorators.js'
import { until } from 'lit/directives/until.js'
import { nothing } from 'lit/html.js'
import { when } from 'lit/directives/when.js'
import { choose } from 'lit/directives/choose.js'
import { msg } from '@lit/localize'

import { constrainSlots } from '../../utils/helpers'
import { forwardAttributes } from '../../utils/directives'
import { GdsFormControlElement } from '../form-control'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { tokens } from '../../tokens.style'

import styles from './input.styles.css'

/**
 * @summary A custom input element that can be used in forms.
 * @status beta
 *
 * @element gds-input
 *.
 * @slot lead - Accepts `gds-icon`. Use this to place an icon in the start of the field.
 * @slot trail - Accepts `gds-badge`. Use this to place a badge in the field, for displaying currency for example.
 * @slot extended-supporting-text - A longer supporting text can be placed here. It will be
 *       displayed in a panel when the user clicks the info button.
 */
@gdsCustomElement('gds-input')
export class GdsInput extends GdsFormControlElement<string> {
  static styles = [tokens, unsafeCSS(styles)]

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
  @property()
  variant: 'default' | 'simplified' = 'default'

  @query('input')
  private elInput!: HTMLInputElement

  @queryAsync('slot[name="extended-supporting-text"]')
  private elExtendedSupportingTextSlot!: Promise<HTMLSlotElement>

  constructor() {
    super()
    constrainSlots(this)
  }

  render() {
    return html`${choose(this.variant, [
      ['default', () => this.#renderDefault()],
      ['simplified', () => this.#renderSimplified()],
    ])}`
  }

  // variant="default"
  #renderDefault() {
    return html`
      <div class="head">
        <label for="input">${this.label}</label>
        ${until(this.#asyncRenderExtendedSupportingTextButton(), nothing)}
      </div>

      <div class="supporting-text" id="supporting-text">
        ${this.supportingText}
      </div>

      ${this.#renderExtendedSupportingText()}

      <div class="field" @click=${this.#handleFieldClick}>
        <slot name="lead" gds-allow="gds-icon"></slot>
        ${this.#renderNativeInput()}
        <slot name="trail" gds-allow="gds-badge"></slot>
        ${this.#renderClearButton()}
      </div>

      <div class="foot">
        <div>
          ${when(
            this.invalid,
            () => html`<span class="error-text">Error information</span>`
          )}
        </div>
        ${when(this.#shouldShowRemainingChars, () =>
          this.#renderRemainingCharsBadge()
        )}
      </div>
    `
  }

  // variant="simplified"
  #renderSimplified() {
    return html`
      <div class="field" @click=${this.#handleFieldClick}>
        <slot name="lead" gds-allow="gds-icon"></slot>
        <label for="input">
          <div>${this.label}</div>
          ${this.#renderNativeInput()}
        </label>
        <slot name="trail" gds-allow="gds-badge"></slot>
        ${this.#renderClearButton()}
      </div>

      <div class="foot">
        <div class="supporting-text">${this.supportingText}</div>
        ${when(this.#shouldShowRemainingChars, () =>
          this.#renderRemainingCharsBadge()
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
    this.value = (e.target as HTMLInputElement).value
  }

  #handleFieldClick = () => {
    this.elInput.focus()
  }

  #handleClearBtnClick = () => {
    this.value = ''
  }

  #handleSupportingTextBtnClick = () =>
    (this.showExtendedSupportingText = !this.showExtendedSupportingText)

  #renderNativeInput() {
    return html`
      <input
        @input=${this.#handleOnInput}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${forwardAttributes(this.#forwardableAttrs)}
      />
    `
  }

  #renderExtendedSupportingText() {
    return html`
      <div
        class="extended-supporting-text"
        aria-hidden="${!this.showExtendedSupportingText}"
      >
        <div>
          <slot
            name="extended-supporting-text"
            @slotchange=${() => this.requestUpdate()}
          ></slot>
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
          aria-label="${msg('Clear input')}"
          @click=${this.#handleClearBtnClick}
        >
          <gds-icon name="x"></gds-icon>
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
      if (slot.assignedElements().length > 0)
        return html`
          <gds-button
            size="small"
            variant="tertiary"
            aria-label="${msg('Show extended supporting text')}"
            @click=${this.#handleSupportingTextBtnClick}
          >
            <gds-icon name="info"></gds-icon>
          </gds-button>
        `
      else return nothing
    })
  }

  /**
   * Event handler for the form reset event.
   */
  override _handleFormReset = () => {
    this.value = ''
  }
}
