import { localized, msg } from '@lit/localize'
import { property, query, queryAsync } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import { nothing } from 'lit/html.js'

import { GdsFieldBase } from '../../primitives/field-base/field-base.component'
import { GdsFormControlFooter } from '../../primitives/form-control-footer/form-control-footer.component'
// Local Components
import { GdsFormControlHeader } from '../../primitives/form-control-header/form-control-header.component'
import { gdsCustomElement, html } from '../../scoping'
import formControlHostStyles from '../../shared-styles/form-control-host.style'
import { tokens } from '../../tokens.style'
import { watch } from '../../utils/decorators/watch'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { GdsButton } from '../button/button.component'
import { GdsFlex } from '../flex/flex.component'
import { GdsFormControlElement } from '../form/form-control'
import { IconCrossSmall } from '../icon/icons/cross-small.component'
import { charCounterCallbackDefault } from '../textarea/textarea.component'
import InputStyles from './input.styles'

@localized()
class Input extends GdsFormControlElement<string> {
  static styles = [tokens, formControlHostStyles, InputStyles]

  /**
   * The supporting text displayed between the label and the field.
   * This text provides additional context or information to the user.
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
   * Controls the font-size of texts and height of the field.
   */
  @property({ reflect: true })
  size: 'large' | 'small' = 'large'

  /**
   * Hides the header and the footer, while still keeping the accessible label
   *
   * Always set the `label` attribute, and if you need to hide it, add this attribute and keep `label` set.
   */
  @property({ type: Boolean })
  plain = false

  /**
   * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
   * to `text`.
   */
  @property({ reflect: true })
  type:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url' = 'text'

  /** The input's minimum value. Only applies to date and number input types. */
  @property()
  min?: number | string

  /** The input's maximum value. Only applies to date and number input types. */
  @property()
  max?: number | string

  /**
   * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
   * implied, allowing any numeric value. Only applies to date and number input types.
   */
  @property()
  step?: number | 'any'

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
   * the variant of the badge. If the second value is `false`, no badge will be displayed.
   */
  @property({ attribute: false })
  charCounterCallback = charCounterCallbackDefault
  #charCounterComputed = this.charCounterCallback(this)

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

  focus(options?: FocusOptions): void {
    this._getValidityAnchor()?.focus(options)
  }

  render() {
    return html`
      ${when(
        !this.plain,
        () =>
          html`<gds-form-control-header class="size-${this.size}">
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
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${this.#handleFieldClick}
        id="field"
      >
        ${this.#renderFieldContents()}
      </gds-field-base>
      ${when(
        this.#shouldShowFooter(),
        () =>
          html` <gds-form-control-footer
            id="message"
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

  _getValidityAnchor() {
    return this.elInput
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

  #handleFieldClick = () => {
    this.elInputAsync.then((el) => el.focus())
  }

  #handleClearBtnClick = () => {
    this.value = ''
    this.dispatchCustomEvent('gds-input-cleared', {
      bubbles: true,
      composed: true,
    })
    this.dispatchStandardEvent('input', {
      bubbles: true,
      composed: true,
    })
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
        class="native-control"
        @input=${this.#handleOnInput}
        @change=${this.#handleOnChange}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-errormessage="message"
        aria-label=${(this.plain && this.label) || nothing}
        placeholder=" "
        type=${this.type}
        min=${ifDefined(this.min)}
        max=${ifDefined(this.max)}
        step=${ifDefined(this.step as number)}
        autocapitalize=${ifDefined(this.autocapitalize)}
        autocomplete=${ifDefined(this.autocomplete)}
        autocorrect=${ifDefined(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${ifDefined(this.enterkeyhint)}
        inputmode=${ifDefined(this.inputmode)}
        ?required=${this.required}
      />
    `
  }

  #renderClearButton() {
    if (this.clearable && (this.value?.length || 0) > 0)
      return html`<gds-button
        size="${this.size === 'small' ? 'xs' : 'small'}"
        rank="tertiary"
        variant="${ifDefined(this.invalid ? 'negative' : undefined)}"
        ?disabled="${this.disabled}"
        label="${msg('Clear input')}"
        @click=${this.#handleClearBtnClick}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small></gds-icon-cross-small>
      </gds-button>`
    else return nothing
  }
}

/**
 * @summary A custom input element that can be used in forms.
 *
 * @element gds-input
 *.
 * @slot lead - Accepts `gds-icon-[ICON_NAME]`. Use this to place an icon in the start of the field.
 * @slot trail - Accepts `gds-badge`. Use this to place a badge in the field, for displaying currency for example.
 * @slot extended-supporting-text - A longer supporting text can be placed here. It will be
 *       displayed in a panel when the user clicks the info button.
 * @event gds-input-cleared - Fired when the clear button is clicked.
 */
@gdsCustomElement('gds-input', {
  dependsOn: [
    GdsFormControlHeader,
    GdsFormControlFooter,
    GdsFieldBase,
    GdsFlex,
    GdsButton,
    IconCrossSmall,
  ],
})
export class GdsInput extends withSizeXProps(
  withMarginProps(withLayoutChildProps(Input)),
) {}
