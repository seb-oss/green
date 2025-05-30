import { localized } from '@lit/localize'
import { property, query } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsFormControlFooter } from '../../../primitives/form-control-footer/form-control-footer.component'
import { GdsFormControlHeader } from '../../../primitives/form-control-header/form-control-header.component'
import { gdsCustomElement, html } from '../../../scoping'
import { tokens } from '../../../tokens.style'
import { watch } from '../../../utils/decorators/watch'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../../utils/mixins/declarative-layout-mixins'
import { GdsFormControlElement } from '../../form/form-control'
import { styles } from './radio-group.styles'

import type { GdsRadio } from '../radio'

@localized()
class RadioGroup extends GdsFormControlElement<string> {
  static styles = [tokens, styles]

  /**
   * Controls the font-size of label and supporting text on group form control header and single radio buttons respectively.
   */
  @property()
  size: 'large' | 'small' = 'large'

  /**
   * The direction in which radio buttons are displayed.
   */
  @property()
  direction: 'row' | 'column' = 'column'

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
   * Returns an array of `<gds-radio>` elements in the radio group.
   *
   * @readonly
   */
  get radios(): GdsRadio[] {
    return Array.from(
      this.querySelectorAll('[gds-element=gds-radio]'),
    ) as GdsRadio[]
  }

  @query('.content')
  private _contentElement!: HTMLElement

  private _isConnected = false

  connectedCallback() {
    super.connectedCallback()
    this._isConnected = true

    this.updateComplete.then(() => {
      this._syncRadioStates()
      this.#initializeFocusable()
    })

    this.addEventListener('invalid', this._syncRadioStates)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this._isConnected = false
    this.removeEventListener('invalid', this._syncRadioStates)
  }

  protected _getValidityAnchor(): HTMLElement {
    return this._contentElement
  }

  #initializeFocusable() {
    if (!this._contentElement || !this._isConnected) return

    const selectedRadio = this.radios.find((radio) => radio.checked)

    if (selectedRadio) {
      selectedRadio.setAttribute('tabindex', '0')
      this._contentElement.setAttribute('tabindex', '-1')
    } else {
      this._contentElement.setAttribute('tabindex', '0')
    }

    this.radios
      .filter((radio) => !radio.checked)
      .forEach((radio) => radio.setAttribute('tabindex', '-1'))
  }

  @watch('value')
  private _handleValueChange() {
    if (!this._isConnected) return

    this._syncRadioStates()
    this.updateComplete.then(() => {
      this.#initializeFocusable()
    })
  }

  @watch('invalid')
  private _syncRadioStates() {
    if (!this._isConnected) return

    this.radios.forEach((radio: any) => {
      radio.checked = radio.value === this.value
      radio.size = this.size
      radio.invalid = this.invalid
    })
  }

  #handleFocus() {
    if (!this._contentElement || !this._isConnected) return

    const selectedRadio = this.radios.find((radio: any) => radio.checked)
    const radioToFocus = selectedRadio || this.radios[0]

    if (radioToFocus) {
      radioToFocus.focus()
      if (!selectedRadio) {
        this.radios.forEach((radio) => radio.setAttribute('tabindex', '-1'))
        radioToFocus.setAttribute('tabindex', '0')
        this._contentElement.setAttribute('tabindex', '-1')
      }
    }
  }

  #dispatchChangeEvents() {
    this.updateComplete.then(() =>
      this.dispatchEvent(
        new Event('change', {
          composed: true,
          bubbles: true,
        }),
      ),
    )
    this.updateComplete.then(() =>
      this.dispatchEvent(
        new Event('input', {
          bubbles: true,
          composed: true,
        }),
      ),
    )
  }

  #handleRadioChange(e: Event) {
    e.stopPropagation()
    const radio = e.target as GdsRadio
    this.value = radio.value
    this._syncRadioStates()
    this.#dispatchChangeEvents()
  }

  #handleKeyDown(e: KeyboardEvent) {
    if (!this._isConnected) return

    const radios = this.radios.filter((radio) => !radio.disabled)
    if (radios.length === 0) return

    let currentIndex = radios.findIndex(
      (radio) => document.activeElement === radio,
    )
    if (currentIndex === -1) {
      currentIndex = radios.findIndex((radio) => radio.checked)
      if (currentIndex === -1) currentIndex = 0
    }

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault()
        const nextIndex = (currentIndex + 1) % radios.length
        this.#focusAndSelectRadio(radios[nextIndex])
        break
      }
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault()
        const nextIndex = (currentIndex - 1 + radios.length) % radios.length
        this.#focusAndSelectRadio(radios[nextIndex])
        break
      }
      default:
        return
    }
  }

  #focusAndSelectRadio(radio: GdsRadio) {
    if (!this._contentElement || !this._isConnected) return

    this.radios.forEach((r) => r.setAttribute('tabindex', '-1'))
    radio.setAttribute('tabindex', '0')
    this._contentElement.setAttribute('tabindex', '-1')

    radio.checked = true
    radio.focus()
    this.value = radio.value

    this._syncRadioStates()
    this.#dispatchChangeEvents()
  }

  render() {
    const classes = {
      'radio-group': true,
      'direction-row': this.direction === 'row',
      'direction-column': this.direction === 'column',
    }

    return html`<div
      role="radiogroup"
      id="radiogroup"
      class=${classMap(classes)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${this.#renderRadioGroupContents()}
    </div>`
  }

  #renderRadioGroupContents() {
    const elements = [
      this.#renderFieldControlHeader(),
      this.#renderRadios(),
      this.#renderFieldControlFooter(),
    ]

    return elements.map((element) => html`${element}`)
  }

  #renderFieldControlHeader() {
    if (this.label) {
      return html` <gds-form-control-header
        class="size-${this.size}"
        .showExtendedSupportingText="${this.showExtendedSupportingText}"
      >
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`
    }
  }

  #renderRadios() {
    return html` <div
      class="content"
      @keydown=${this.#handleKeyDown}
      @focus=${this.#handleFocus}
    >
      <slot @input=${this.#handleRadioChange}></slot>
    </div>`
  }

  #renderFieldControlFooter() {
    return html` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid ? this.errorMessage : undefined}
    >
    </gds-form-control-footer>`
  }
}

/**
 * @summary A form control component for grouping radio buttons.
 * @status beta
 *
 * @element gds-radio-group
 *
 * @slot - Default slot for radio buttons (accepts `gds-radio` elements)
 * @slot extended-supporting-text - A longer supporting text that will be displayed in a panel when the user clicks the info button
 *
 * @event change - Fired when a radio button selection changes
 * @event input - Fired when a radio button selection changes
 */
@gdsCustomElement('gds-radio-group', {
  dependsOn: [GdsFormControlHeader, GdsFormControlFooter],
})
export class GdsRadioGroup extends withLayoutChildProps(
  withMarginProps(withSizeXProps(RadioGroup)),
) {}
