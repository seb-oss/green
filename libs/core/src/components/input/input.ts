import { LitElement, TemplateResult } from 'lit'
import { property, query, queryAsync, state } from 'lit/decorators.js'
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
import '../layout/flex'
import { tokens } from '../../tokens.style'
import { styles } from './input.styles'

// Local Components
import '../icon/icons/cross-small'
import '../icon/icons/circle-info'
import '../icon/icons/triangle-exclamation'
import '../layout/flex'
import '../layout/container'
import '../layout/card'
import '../content/text'
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
export class GdsInput extends GdsFormControlElement<string> {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    // TODO:
    // Consider setting `delegatesFocus: false` to fix the selection problem
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
  maxlength = Number.MAX_SAFE_INTEGER

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
  size: 'default' | 'small' = 'default'

  /**
   * Whether the input field should be textarea or not. Textarea fields will render a textarea
   * internally instead of an input.
   */
  @property({ type: Boolean })
  textarea = false

  @queryAsync('input, textarea')
  private elInputAsync!: Promise<HTMLInputElement | HTMLTextAreaElement>

  @query('input, textarea')
  private elInput!: HTMLInputElement | HTMLTextAreaElement

  @queryAsync('slot[name="extended-supporting-text"]')
  private elExtendedSupportingTextSlot!: Promise<HTMLSlotElement>

  @state()
  leadSlotOccupied = false

  constructor() {
    super()
    constrainSlots(this)
  }

  connectedCallback(): void {
    super.connectedCallback()
    this._setAutoHeight()
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

  protected _getValidityAnchor() {
    return this.elInput
  }

  // variant="default"
  #renderDefault() {
    // TODO:

    // max-width="${this.size === 'small' ? '200px' : '343px'}"

    return html`
      <gds-flex
        flex-direction="column"
        width="100%"
        gap="${this.size === 'small' ? '2xs' : 'xs'}"
        user-select="${this.disabled ? 'none' : 'auto'}"
        pointer-events="${this.disabled ? 'none' : 'auto'}"
        color="${this.disabled
          ? 'l3-content-disabled'
          : this.invalid
            ? 'l3-content-negative'
            : 'l3-content-tertiary'}"
      >
        <gds-flex
          class="head"
          align-items="center"
          justify-content="space-between"
          padding="3xs 0 0 0"
        >
          <gds-flex flex-direction="column">
            <gds-text
              font-weight="book"
              font-size="${this.size === 'small' ? 'detail-s' : 'detail-m'}"
            >
              <label for="input"> ${this.label} </label>
            </gds-text>
            ${when(this.supportingText, () => this.#renderSupportingText())}
          </gds-flex>
          ${until(this.#asyncRenderExtendedSupportingTextButton(), nothing)}
        </gds-flex>

        ${when(this.showExtendedSupportingText, () =>
          this.#renderExtendedSupportingText(),
        )}

        <gds-flex
          position="relative"
          align-items="center"
          justify-content="center"
          gap="${this.size === 'small' ? '2xs' : 'xs'}"
          padding="${this.textarea
            ? 's s s m'
            : this.size === 'small'
              ? 'xs s'
              : 'xs m'}"
          min-height="${this.size === 'small'
            ? 'var(--gds-space-xl)'
            : 'var(--gds-space-3xl)'}"
          height="${this.textarea
            ? ''
            : this.size === 'small'
              ? 'var(--gds-space-xl)'
              : 'var(--gds-space-3xl)'}}"
          border-radius="xs"
          .background=${this.disabled
            ? 'l3-background-disabled'
            : this.invalid
              ? 'l3-background-negative-secondary'
              : 'l3-background-secondary'}
          .border=${this.disabled
            ? ''
            : this.invalid
              ? '4xs/l3-border-negative'
              : '4xs/l3-border-secondary'}
          class="field"
          @click=${this.#handleFieldClick}
          cursor="text"
        >
          ${!this.textarea ? this.#renderSlotLead() : nothing}
          ${when(
            this.textarea,
            () => html`${this.#renderNativeTextarea()}`,
            () => html`${this.#renderNativeInput()}`,
          )}
          <gds-flex gap="xs" align-items="center">
            ${this.#renderClearButton()}
            ${!this.textarea ? this.#renderSlotTrail() : nothing}
          </gds-flex>

          <gds-flex
            class="state"
            position="absolute"
            inset="0"
            border-radius="xs"
            .background="${this.invalid
              ? 'l3-states-negative-hover'
              : 'l3-states-light-hover'}"
            pointer-events="none"
            opacity="0"
            transition="all 368ms cubic-bezier(0.4, 0, 0.2, 1)"
          ></gds-flex>
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="center"
          justify-content="space-between"
          aria-live="polite"
        >
          ${when(
            this.invalid,
            () => html`
              <gds-flex
                align-items="flex-start"
                gap="${this.size === 'small' ? '2xs' : 'xs'}"
              >
                <gds-flex min-width="18px">
                  <gds-icon-triangle-exclamation width="18" height="18" solid>
                  </gds-icon-triangle-exclamation>
                </gds-flex>
                <gds-text
                  tag="span"
                  font-size="${this.size === 'small'
                    ? 'detail-xs'
                    : 'detail-s'}"
                  font-weight="book"
                  class="error-text"
                >
                  ${this.validationMessage}
                </gds-text>
              </gds-flex>
            `,
          )}
          <gds-flex margin="0 0 0 auto">
            ${when(this.#shouldShowRemainingChars, () =>
              this.#renderRemainingCharsBadge(),
            )}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `
  }

  // variant="floatingLabel"
  #renderFloatingLabel() {
    return html`
      <gds-flex flex-direction="column" gap="2xs">
        <gds-flex
          align-items="center"
          justify-content="center"
          gap="m"
          padding="xs m"
          background="l3-background-secondary"
          border="4xs/l3-border-secondary"
          border-radius="xs"
          class="field"
          @click=${this.#handleFieldClick}
        >
          <slot name="lead"></slot>
          <gds-text
            tag="label"
            font-weight="book"
            font-size="detail-m"
            for="input"
          >
            <gds-flex>${this.label}</gds-flex>
            ${when(
              this.textarea,
              () => html`${this.#renderNativeTextarea()}`,
              () => html`${this.#renderNativeInput()}`,
            )}
          </gds-text>
          <slot name="trail" gds-allow="gds-badge"></slot>
          ${this.#renderClearButton()}
        </gds-flex>

        <gds-flex class="foot">
          ${this.#renderSupportingText()}
          ${when(this.#shouldShowRemainingChars, () =>
            this.#renderRemainingCharsBadge(),
          )}
          ${until(this.#asyncRenderExtendedSupportingTextButton(), nothing)}
        </gds-flex>

        ${this.#renderExtendedSupportingText()}
      </gds-flex>
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
    if (!this.textarea) return
    this.elInputAsync.then((element) => {
      const lines = (element.value.split('\n').length || 1).toString()
      element?.style.setProperty('--_lines', lines.toString())

      // // Update the height based on the --_lines value
      // const lineHeight = parseFloat(getComputedStyle(element).lineHeight)
      // const numberOfLines = parseInt(lines, 10)
      // if (!isNaN(lineHeight) && !isNaN(numberOfLines)) {
      //   element.style.height = `${lineHeight * numberOfLines}px`
      // } else {
      //   // Reset to default height if --_lines value is not valid
      //   element.style.height = ''
      // }
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

  #renderSlotLead() {
    return html` <slot name="lead"></slot> `
  }

  #renderSlotTrail() {
    return html` <slot name="trail" gds-allow="gds-badge"></slot> `
  }

  #renderNativeInput() {
    return html`
      <input
        @input=${this.#handleOnInput}
        @change=${this.#handleOnChange}
        style="${this.invalid
          ? 'color: var(--gds-color-l3-content-negative);'
          : null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
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
        style="${this.invalid
          ? 'color: var(--gds-color-l3-content-negative);'
          : null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${forwardAttributes(this.#forwardableAttrs)}
      ></textarea>
    `
  }

  #renderSupportingText() {
    return html`
      <gds-text
        font-size="${this.size === 'small' ? 'detail-s' : 'detail-m'}"
        .color="${this.disabled
          ? 'l3-content-disabled'
          : this.invalid
            ? 'l3-content-negative'
            : 'l3-content-tertiary'}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `
  }

  #renderExtendedSupportingText() {
    // .display="${this.showExtendedSupportingText ? 'block' : 'none'}"
    return html`
      <gds-card
        class="extended-supporting-text"
        aria-hidden="${!this.showExtendedSupportingText}"
        ?inert="${!this.showExtendedSupportingText}"
        padding="s m"
        border-radius="xs"
        background="l3-background-secondary"
        color="l3-content-tertiary"
      >
        <gds-text font-size="body-s">
          <slot
            name="extended-supporting-text"
            @slotchange=${() => this.requestUpdate()}
          ></slot>
        </gds-text>
      </gds-card>
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

  #renderRemainingCharsBadge() {
    const remaining = this.maxlength - this.value.length
    let variant
    if (remaining < 0) {
      variant = 'negative'
    } else if (remaining < 20) {
      variant = 'warning'
    } else {
      variant = 'positive'
    }
    // return html`<gds-badge variant="${this.invalid ? 'negative' : variant}"
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
            rank="tertiary"
            label="${msg('Show extended supporting text')}"
            @click=${this.#handleSupportingTextBtnClick}
          >
            <!-- TODO: When is open it should be solid  -->
            <gds-icon-circle-info />
          </gds-button>
        `
      else return nothing
    })
  }
}
