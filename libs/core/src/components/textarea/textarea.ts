import { localized, msg } from '@lit/localize'
import { property, query, queryAsync } from 'lit/decorators.js'
import { choose } from 'lit/directives/choose.js'
import { nothing } from 'lit/html.js'

import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { watch } from '../../utils/decorators'
import { resizeObserver } from '../../utils/decorators/resize-observer'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { forwardAttributes } from '../../utils/directives'
import { GdsFormControlElement } from '../form/form-control'
import { styles } from './textarea.styles'

// Local Components
import '../../primitives/form-control-header'
import '../../primitives/form-control-footer'
import '../../primitives/field-base'
import '../icon/icons/cross-large'
import '../button'

import type { GdsFieldBase } from '../../primitives/field-base'
import type { GdsButton } from '../button'

/**
 * @summary A custom input element that can be used in forms.
 * @status beta
 *
 * @element gds-textarea
 *.
 * @slot lead - Accepts `gds-icon-[ICON_NAME]`. Use this to place an icon in the start of the field.
 * @slot trail - Accepts `gds-badge`. Use this to place a badge in the field, for displaying currency for example.
 * @slot extended-supporting-text - A longer supporting text can be placed here. It will be
 *       displayed in a panel when the user clicks the info button.
 * @event gds-input-cleared - Fired when the clear button is clicked.
 */
@gdsCustomElement('gds-textarea')
@localized()
export class GdsTextarea extends GdsFormControlElement<string> {
  static styles = [tokens, styles]

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

  /**
   * Controls the font-size of texts.
   */
  @property({ type: String })
  size: 'large' | 'small' = 'large'

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
    return html`${choose(this.variant, [
      ['default', () => this.#renderDefault()],
      ['floating-label', () => this.#renderFloatingLabel()],
    ])}`
  }

  protected _getValidityAnchor() {
    return this.elTextarea
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
        id="field"
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${this.#handleFieldClick}
        multiline
      >
        ${this.#renderFieldContents()}
      </gds-field-base>

      <gds-form-control-footer
        lass="size-${this.size}"
        .charCounter=${this.#shouldShowRemainingChars &&
        this.maxlength - (this.value?.length || 0)}
        .validationMessage=${this.invalid &&
        (this.errorMessage || this.validationMessage)}
      ></gds-form-control-footer>
    `
  }

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
        class="resize-${this.resizable}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        placeholder=" "
        ${forwardAttributes(this.#forwardableAttrs)}
      ></textarea>
    `
  }

  #renderClearButton() {
    if (this.clearable && (this.value?.length || 0) > 0)
      return html`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid ? 'negative' : ''}"
          ?disabled="${this.disabled}"
          label="${msg('Clear input')}"
          @click=${this.#handleClearBtnClick}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `
    else return nothing
  }

  get #shouldShowRemainingChars() {
    return this.maxlength < Number.MAX_SAFE_INTEGER
  }
}
