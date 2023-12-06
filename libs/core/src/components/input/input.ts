import { TemplateResult, unsafeCSS } from 'lit'
import { property, query, queryAsync } from 'lit/decorators.js'
import { until } from 'lit/directives/until.js'
import { nothing } from 'lit/html.js'
import { when } from 'lit/directives/when.js'
import { constrainSlots } from '../../utils/helpers'
import { forwardAttributes } from '../../utils/directives'
import styles from './style/input.styles.css'
import sharedStyles from './style/input.shared.styles.css'
import { GdsFormControlElement } from '../form-control'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { tokens } from '../../tokens.style'

/**
 * @summary A custom input element that can be used in forms.
 * @status beta
 *
 * @element gds-input
 *.
 * @slot icon - Use this to place an icon in the start of the field.
 * @slot badge - Use this to place a badge in the field, for displaying currency for example.
 * @slot extended-supporting-text - A longer supporting text can be placed here. It will be
 *       displayed in a panel when the user clicks the info button.
 */

@gdsCustomElement('gds-input')
export class GdsInput extends GdsFormControlElement<string> {
  static styles = [tokens, unsafeCSS(sharedStyles), unsafeCSS(styles)]

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

  @query('input')
  private elInput!: HTMLInputElement

  @queryAsync('slot[name="extended-supporting-text"]')
  private elExtTextSlot!: Promise<HTMLSlotElement>

  constructor() {
    super()
    constrainSlots(this)
  }

  render() {
    return html`
      <div class="head">
        <label for="input">${this.label}</label>
        ${until(this.#extSupportingTextBtn, nothing)}
      </div>

      <div class="supporting-text">${this.supportingText}</div>

      <slot name="extended-supporting-text" hidden></slot>

      <div class="field" @click=${this.#handleFieldClick}>
        <slot name="icon" gds-allow="gds-icon"></slot>
        <input
          @input=${this.#handleOnInput}
          .value=${this.value}
          id="input"
          ${forwardAttributes((attr) =>
            ['type', 'placeholder'].includes(attr.name)
          )}
        />
        <slot name="badge" gds-allow="gds-badge"></slot>
        ${when(
          this.clearable && this.value.length > 0,
          () => html`
            <gds-button
              size="small"
              variant="tertiary"
              aria-label="Clear input"
              @click=${this.#handleClearBtnClick}
            >
              <gds-icon name="x"></gds-icon>
            </gds-button>
          `
        )}
      </div>

      <div class="foot">
        <div>
          ${when(
            this.invalid,
            () => html`<span class="error-text">Error information</span>`
          )}
        </div>
        ${when(this.#showRemainingChars, () => this.#remainingCharsBadge)}
      </div>
    `
  }

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
    this.elExtTextSlot.then((slot) => {
      slot.hidden = !slot.hidden
    })

  get #showRemainingChars() {
    return this.maxlength < Number.MAX_SAFE_INTEGER
  }

  get #remainingCharsBadge() {
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
  get #extSupportingTextBtn(): Promise<TemplateResult> {
    return this.elExtTextSlot.then((slot) => {
      if (slot.assignedElements().length === 0) {
        return html``
      }
      return html`
        <gds-button
          size="small"
          variant="tertiary"
          aria-label="Show extended supporting text"
          @click=${this.#handleSupportingTextBtnClick}
        >
          <gds-icon name="info"></gds-icon>
        </gds-button>
      `
    })
  }

  /**
   * Event handler for the form reset event.
   */
  override _handleFormReset = () => {
    this.value = ''
  }
}
