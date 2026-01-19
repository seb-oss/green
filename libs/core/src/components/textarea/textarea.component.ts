import { localized, msg } from '@lit/localize'
import { property, query, queryAsync } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import { nothing } from 'lit/html.js'

import { GdsFieldBase } from '../../primitives/field-base/field-base.component'
import { GdsFormControlFooter } from '../../primitives/form-control-footer/form-control-footer.component'
import { GdsFormControlHeader } from '../../primitives/form-control-header/form-control-header.component'
import { gdsCustomElement, html } from '../../scoping'
import formControlHostStyle from '../../shared-styles/form-control-host.style'
import { tokens } from '../../tokens.style'
import { watch } from '../../utils/decorators'
import { resizeObserver } from '../../utils/decorators/resize-observer'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { GdsButton } from '../button/button.component'
import { GdsFormControlElement } from '../form/form-control'
import { IconCrossSmall } from '../icon/icons/cross-small.component'
import TextareaStyles from './textarea.styles'

import type { GdsBadge } from '../../pure'

@localized()
class Textarea extends GdsFormControlElement<string> {
  static styles = [tokens, formControlHostStyle, TextareaStyles]

  private _initialRows?: number
  private _defaultRows = 4
  /**
   * Rows of the textarea
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
    selector: 'textarea',
    styleTemplate: (_prop, values) => {
      const ROWS = values[0]
      return `min-height: calc(1lh * ${ROWS});`
    },
  })
  rows = 4

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
   * The resizable attribute of the textarea. It can be set to 'auto', 'manual' or 'false'.
   * When set to 'auto', the textarea will be resizable in the vertical direction based on content.
   * When set to 'manual', the textarea will be resizable in both the vertical and horizontal directions.
   * When set to 'false', the textarea will not be resizable.
   */
  @property({ type: String })
  resizable: 'auto' | 'manual' | 'false' = 'auto'

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
   * The maximum number of characters allowed in the field.
   */
  @property({ type: Number })
  maxlength = Number.MAX_SAFE_INTEGER

  /**
   * Controls the font-size of texts.
   */
  @property({ type: String })
  size: 'large' | 'small' = 'large'

  /**
   * Hides the header and the footer, while still keeping the accessible label
   *
   * Always set the `label` attribute, and if you need to hide it, add this attribute and keep `label` set.
   */
  @property({ type: Boolean })
  plain = false

  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  @property()
  autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' =
    'off'

  /** Indicates whether the browser's autocorrect feature is on or off. */
  @property({ type: Boolean })
  autocorrect = false

  /**
   * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
   * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
   */
  @property()
  autocomplete?: string

  /** Indicates that the input should receive focus on page load. */
  @property({ type: Boolean })
  autofocus = false

  /** Enables spell checking on the input. */
  @property({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => (!value || value === 'false' ? false : true),
      toAttribute: (value) => (value ? 'true' : 'false'),
    },
  })
  spellcheck = true

  /**
   * Indicates how the control should wrap the value for form submission. Refer to
   * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea#wrap) for available values.
   */
  @property()
  wrap!: 'hard' | 'soft'

  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  @property()
  enterkeyhint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send'

  /**
   * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
   * keyboard on supportive devices.
   */
  @property()
  inputmode?:
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url'

  /**
   * This callback allows for customization of the character counter. It should return a tuple
   * with the first value being the number of remaining characters, and the second value being
   * the variant of the badge. If the second value is `false`, no badge will be shown.
   */
  @property({ attribute: false })
  charCounterCallback = charCounterCallbackDefault
  #charCounterComputed = this.charCounterCallback(this)

  @queryAsync('textarea')
  private elTextareaAsync!: Promise<HTMLTextAreaElement>

  @query('textarea')
  private elTextarea!: HTMLTextAreaElement

  @query('gds-field-base')
  private fieldBase!: GdsFieldBase

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

  focus(options?: FocusOptions): void {
    this._getValidityAnchor()?.focus(options)
  }

  /**
   * Selects all the text in the textarea element.
   */
  select(): void {
    this._getValidityAnchor()?.select()
  }

  /**
   * Sets the value of the textarea element, replacing a range of text.
   */
  setRangeText(...args: Parameters<HTMLTextAreaElement['setRangeText']>): void {
    this._getValidityAnchor()?.setRangeText(...args)
    this.value = this._getValidityAnchor()?.value || ''
  }

  /**
   * Sets the start and end positions of a selection in the textarea element.
   */
  setSelectionRange(
    ...args: Parameters<HTMLTextAreaElement['setSelectionRange']>
  ): void {
    this._getValidityAnchor()?.setSelectionRange(...args)
  }

  /** The position of the start of the current text selection in the textarea element. */
  get selectionStart() {
    return this._getValidityAnchor()?.selectionStart
  }

  /** Sets the position of the start of the current text selection in the textarea element. */
  set selectionStart(value) {
    const anchor = this._getValidityAnchor()
    if (anchor) {
      anchor.selectionStart = value
    }
  }

  /** The position of the end of the current text selection in the textarea element. */
  get selectionEnd() {
    return this._getValidityAnchor()?.selectionEnd
  }

  /** Sets the position of the end of the current text selection in the textarea element. */
  set selectionEnd(value) {
    const anchor = this._getValidityAnchor()
    if (anchor) {
      anchor.selectionEnd = value
    }
  }

  /** The direction of the current text selection in the textarea element. */
  get selectionDirection() {
    return this._getValidityAnchor()?.selectionDirection
  }

  /** Sets the direction of the current text selection in the textarea element. */
  set selectionDirection(value) {
    const anchor = this._getValidityAnchor()
    if (anchor) {
      anchor.selectionDirection = value
    }
  }

  @resizeObserver()
  private _handleResize() {
    if (!this.fieldBase) return

    // Wait for field-base to be ready and get its shadow root
    Promise.resolve().then(() => {
      const fieldBaseShadowRoot = this.fieldBase?.shadowRoot
      if (!fieldBaseShadowRoot) return

      const rightDiv = fieldBaseShadowRoot.querySelector(
        '.right',
      ) as HTMLElement
      if (rightDiv) {
        const boundingBox = rightDiv.getBoundingClientRect()
        this.elTextarea.style.setProperty(
          '--padding-inline-end',
          `${boundingBox.width}px`,
        )
      } else {
        this.elTextarea.style.removeProperty('--padding-inline-end')
      }
    })
  }

  private _handleSlotChange = () => {
    requestAnimationFrame(() => {
      this._handleResize()
    })
  }

  constructor() {
    super()
    this.value = ''
  }

  connectedCallback(): void {
    super.connectedCallback()

    if (this.hasAttribute('rows')) {
      this._initialRows = this.rows
    }

    this._setAutoHeight()
    this.addEventListener('slotchange', this._handleSlotChange)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.removeEventListener('slotchange', this._handleSlotChange)
  }

  render() {
    return html`
      ${when(
        !this.plain,
        () =>
          html`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label for="input" slot="label">${this.label}</label>
            <span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>`,
      )}

      <gds-field-base
        id="field"
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${this.#handleFieldClick}
        multiline
      >
        ${this.#renderFieldContents()}
      </gds-field-base>

      ${when(
        this.#shouldShowFooter(),
        () =>
          html`<gds-form-control-footer
            id="footer"
            class="size-${this.size}"
            .charCounter=${this.#charCounterComputed}
            .errorMessage=${this.invalid ? this.errorMessage : undefined}
          ></gds-form-control-footer>`,
      )}
    `
  }

  @watch('value')
  private _handleValueChange() {
    this.#charCounterComputed = this.charCounterCallback(this)
  }

  #shouldShowFooter() {
    return !this.plain
  }

  protected _getValidityAnchor() {
    return this.elTextarea
  }

  #handleOnInput = (e: Event) => {
    const element = e.target as HTMLInputElement
    this.value = element.value
  }

  #handleOnChange = (e: Event) => {
    const element = e.target as HTMLInputElement
    this.value = element.value
    this.dispatchStandardEvent('change', {
      bubbles: true,
      composed: true,
    })
  }

  #handleOnPaste = (e: ClipboardEvent) => {
    // Use requestAnimationFrame to guarantee that the pasted content is rendered.
    requestAnimationFrame(() => {
      this._setAutoHeight()
    })
  }

  @watch('value')
  private _setAutoHeight() {
    this.elTextareaAsync.then((element) => {
      // If resizable is false, maintain fixed height based on rows
      if (this.resizable === 'false') {
        const rowsToUse = this._initialRows ?? this._defaultRows
        this.rows = rowsToUse
        element.style.setProperty('--_lines', rowsToUse.toString())
        return
      }

      // If manual resize, don't auto-adjust height
      if (this.resizable === 'manual') {
        return
      }

      if (this.resizable === 'auto') {
        if (element.value === '') {
          // When clearing, use initial rows if set, otherwise use default
          const rowsToUse = this._initialRows ?? this._defaultRows
          this.rows = rowsToUse
          element.style.setProperty('--_lines', rowsToUse.toString())
        } else {
          // Calculate required height for content
          const computedStyle = getComputedStyle(element)
          const lineHeight = parseFloat(computedStyle.lineHeight)
          const contentHeight = element.scrollHeight
          const requiredRows = Math.ceil(contentHeight / lineHeight)

          // Use initial rows as minimum if available
          const minRows = this._initialRows ?? this._defaultRows
          this.rows = Math.max(minRows, requiredRows)
          element.style.setProperty('--_lines', this.rows.toString())
        }
      }
    })
  }

  #handleFieldClick = () => {
    this.elTextareaAsync.then((el) => el.focus())
  }

  #handleClearBtnClick = () => {
    this.value = ''

    // Handle clearing based on resizable mode
    this.elTextareaAsync.then((element) => {
      if (this.resizable === 'manual') {
        // For manual resize, just clear the value but maintain user-set height
        element.style.height = ''
      } else if (this.resizable === 'false') {
        // For non-resizable, maintain fixed height based on initial rows
        const rowsToUse = this._initialRows ?? this._defaultRows
        this.rows = rowsToUse
        element.style.setProperty('--_lines', rowsToUse.toString())
      } else {
        // For auto resize, reset to initial rows
        const rowsToUse = this._initialRows ?? this._defaultRows
        this.rows = rowsToUse
        element.style.setProperty('--_lines', rowsToUse.toString())
        element.style.height = ''
      }
    })

    this.dispatchCustomEvent('gds-input-cleared', {
      bubbles: true,
      composed: true,
    })
    this.dispatchStandardEvent('input', {
      bubbles: true,
      composed: true,
    })
  }

  @watch('rows')
  private _handleRowsChange() {
    // Store the new rows value as initial if manually set
    if (this.hasAttribute('rows')) {
      this._initialRows = this.rows
    }

    this.elTextareaAsync.then((element) => {
      if (this.resizable === 'false') {
        element.style.setProperty('--_lines', this.rows.toString())
      }
    })
  }

  #renderFieldContents() {
    const elements = [
      this.#renderSlotLead(),
      this.#renderNativeTextarea(),
      this.#renderClearButton(),
      this.#renderSlotTrail(),
    ]

    return elements.map((element) => html`${element}`)
  }

  #renderSlotLead() {
    return html`<slot slot="lead" name="lead"></slot>`
  }

  #renderSlotTrail() {
    return html`<slot slot="trail" name="trail"></slot>`
  }

  #renderNativeTextarea() {
    return html`
      <textarea
        @input=${this.#handleOnInput}
        @change=${this.#handleOnChange}
        @paste=${this.#handleOnPaste}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${(this.plain && this.label) || nothing}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-errormessage="footer"
        placeholder=" "
        autocapitalize=${ifDefined(this.autocapitalize)}
        autocomplete=${ifDefined(this.autocomplete)}
        autocorrect=${ifDefined(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${ifDefined(this.enterkeyhint)}
        inputmode=${ifDefined(this.inputmode)}
        wrap=${ifDefined(this.wrap)}
        ?required=${this.required}
      ></textarea>
    `
  }

  #renderClearButton() {
    if (this.clearable && (this.value?.length || 0) > 0)
      return html`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${ifDefined(this.invalid ? 'negative' : undefined)}"
          ?disabled="${this.disabled}"
          label="${msg('Clear input')}"
          @click=${this.#handleClearBtnClick}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
        </gds-button>
      `
    else return nothing
  }
}

/**
 * @summary A custom input element that can be used in forms.
 *
 * @element gds-textarea
 *.
 * @slot lead - Accepts `gds-icon-[ICON_NAME]`. Use this to place an icon in the start of the field.
 * @slot trail - Accepts `gds-badge`. Use this to place a badge in the field, for displaying currency for example.
 * @slot extended-supporting-text - A longer supporting text can be placed here. It will be
 *       displayed in a panel when the user clicks the info button.
 * @event gds-input-cleared - Fired when the clear button is clicked.
 */
@gdsCustomElement('gds-textarea', {
  dependsOn: [
    GdsFormControlHeader,
    GdsFormControlFooter,
    GdsButton,
    GdsFieldBase,
    IconCrossSmall,
  ],
})
export class GdsTextarea extends withLayoutChildProps(
  withSizeXProps(withMarginProps(Textarea)),
) {}

/**
 * Default character counter callback function.
 * Returns the number of remaining characters and the badge variant based on the current value length and maxlength.
 */
export const charCounterCallbackDefault = (
  self: GdsFormControlElement<string> & { maxlength: number },
) => {
  const badgeType: GdsBadge['variant'] =
    (self.value?.length || 0) >= self.maxlength ? 'negative' : 'positive'

  return [
    self.maxlength - (self.value?.length || 0),
    self.maxlength < Number.MAX_SAFE_INTEGER && badgeType,
  ] as const
}
