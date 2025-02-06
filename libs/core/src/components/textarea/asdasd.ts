import { localized, msg } from '@lit/localize'
import { property, query, queryAsync, state } from 'lit/decorators.js'
import { choose } from 'lit/directives/choose.js'
import { when } from 'lit/directives/when.js'
import { nothing } from 'lit/html.js'

import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { watch } from '../../utils/decorators'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { forwardAttributes } from '../../utils/directives'
import { GdsFormControlElement } from '../form/form-control'
import { styles } from './textarea.styles'

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
 * @element gds-textarea
 *
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
   * Whether the field should be resizeable or not. If set to `false`, the field will not be resizeable.
   *
   * When `auto` (default), the field will disaplay a resize handle and will be resizeable in the vertical direction.
   *
   * The textarea is resizeable based on the `rows` attribute and the content of the textarea by default.
   */
  @property()
  resize = 'auto'

  /**
   * The maximum number of characters allowed in the field.
   */
  @property({ type: Number })
  maxlength = Number.MAX_SAFE_INTEGER

  /**
   * The variant of the input field.
   */
  @property({ type: String })
  variant: 'default' | 'floating-label' = 'default'

  @queryAsync('textarea')
  private elTextareaAsync!: Promise<HTMLTextAreaElement>

  @query('textarea')
  private elTextarea!: HTMLTextAreaElement

  test_getClearButton() {
    return this.shadowRoot?.querySelector<GdsButton>('#clear-button')
  }

  test_getFieldElement() {
    return this.shadowRoot?.querySelector('#field')
  }

  constructor() {
    super()
    this.value = ''
  }

  connectedCallback(): void {
    super.connectedCallback()
    this._setAutoHeight()
    this.#addResizeHandleListener()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#stopDragging()
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
      <gds-form-control-header>
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
        ${when(
          this.resize === 'auto',
          () => this.#renderResizeHandle(),
          () => nothing,
        )}
      </gds-field-base>

      <gds-form-control-footer
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

  // Handle paste event without using setTimeout.
  #handleOnPaste = (e: ClipboardEvent) => {
    // Use requestAnimationFrame to guarantee that the pasted content is rendered.
    requestAnimationFrame(() => {
      this._setAutoHeight()
    })
  }

  @watch('value')
  private _setAutoHeight() {
    this.elTextareaAsync.then((element) => {
      if (element.value === '') {
        this.rows = this._defaultRows
      } else {
        this.rows = Math.max(this.rows, element.value.split('\n').length)
      }
      this.#resizeState.lines = Number(this.rows)
      element?.style.setProperty('--_lines', this.rows.toString())
    })
  }

  #handleFieldClick = () => {
    this.elTextareaAsync.then((el) => el.focus())
  }

  #handleClearBtnClick = () => {
    this.value = ''

    this.rows = this._defaultRows
    this.#resizeState.lines = this._defaultRows
    this.elTextareaAsync.then((element) => {
      element?.style.setProperty('--_lines', this._defaultRows.toString())
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

  #addResizeHandleListener() {
    const resizeHandle = this.querySelector('.resize-handle')
    if (resizeHandle) {
      resizeHandle.addEventListener(
        'mousedown',
        this.#startDragging as EventListener,
      )
    }
  }

  #resizeState = {
    isDragging: false,
    startMouseY: 0,
    lines: this.rows,
    deltaLines: 0,
    lineHeight: 0,
  }

  #startDragging = (event: MouseEvent) => {
    event.preventDefault()
    this.#resizeState.isDragging = true
    this.#resizeState.startMouseY = event.clientY
    this.#resizeState.lineHeight = parseFloat(
      getComputedStyle(this.elTextarea).lineHeight,
    )
    document.addEventListener('mousemove', this.#onDrag)
    document.addEventListener('mouseup', this.#stopDragging)
  }

  #onDrag = (event: MouseEvent) => {
    if (!this.#resizeState.isDragging) return
    const deltaY = event.clientY - this.#resizeState.startMouseY
    this.#resizeState.deltaLines = Math.round(
      deltaY / this.#resizeState.lineHeight,
    )
    this.elTextareaAsync.then((element) => {
      element?.style.setProperty(
        '--_lines',
        (this.#resizeState.lines + this.#resizeState.deltaLines).toString(),
      )
    })
  }

  #stopDragging = () => {
    this.#resizeState.isDragging = false
    this.#resizeState.lines += this.#resizeState.deltaLines
    this.rows = this.#resizeState.lines
    this.#resizeState.deltaLines = 0
    document.removeEventListener('mousemove', this.#onDrag)
    document.removeEventListener('mouseup', this.#stopDragging)
  }

  #renderResizeHandle() {
    return html`
      <div class="resize-handle" @mousedown=${this.#startDragging}></div>
    `
  }

  #renderNativeTextarea() {
    return html`
      <textarea
        @input=${this.#handleOnInput}
        @change=${this.#handleOnChange}
        @paste=${this.#handleOnPaste}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
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
          <gds-icon-cross-small />
        </gds-button>
      `
    else return nothing
  }

  get #shouldShowRemainingChars() {
    return this.maxlength < Number.MAX_SAFE_INTEGER
  }
}
