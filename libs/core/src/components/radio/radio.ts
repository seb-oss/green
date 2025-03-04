// radio.ts
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { watch } from '../../utils/decorators/watch'
import { styles } from './radio.styles'

import '../../primitives/selection-controls'

/**
 * @element gds-radio
 * @status beta
 */
@gdsCustomElement('gds-radio')
export class GdsRadio extends GdsElement {
  static styles = [tokens, styles]

  /**
   * The label displayed next to the radio button.
   */
  @property()
  label = ''

  /**
   * The supporting text displayed below the label.
   * This text provides additional context or information to the user.
   */
  @property({ attribute: 'supporting-text' })
  supportingText = ''

  /**
   * The value of the radio button.
   */
  @property()
  value = ''

  /**
   * Whether the radio button is checked or not.
   */
  @property({ type: Boolean, reflect: true })
  checked = false

  /**
   * Whether the radio button is disabled or not.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false

  /**
   * Controls the font-size of label and supporting text.
   */
  @property()
  size: 'large' | 'small' = 'large'

  /**
   * Whether the radio button is invalid or not.
   */
  @property({ type: Boolean })
  invalid = false

  @state()
  private _isFocused = false

  constructor() {
    super()
    this.addEventListener('keydown', this._handleKeyDown)
    this.addEventListener('focus', () => (this._isFocused = true))
    this.addEventListener('blur', () => (this._isFocused = false))
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role', 'radio')
    this.setAttribute('aria-checked', this.checked.toString())
    this.setAttribute('aria-disabled', this.disabled.toString())
    if (!this.disabled) {
      this.setAttribute('tabindex', '0')
    }
  }

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties)

    if (changedProperties.has('checked')) {
      this.setAttribute('aria-checked', this.checked.toString())
    }
    if (changedProperties.has('disabled')) {
      this.setAttribute('aria-disabled', this.disabled.toString())
      this.setAttribute('tabindex', this.disabled ? '-1' : '0')
    }
    if (changedProperties.has('label')) {
      this.setAttribute('aria-label', this.label)
    }
  }

  @watch('disabled')
  private _handleDisabledChange() {
    if (this.disabled) {
      this.setAttribute('inert', '')
    } else {
      this.removeAttribute('inert')
    }
  }

  private _handleClick(e: Event) {
    if (this.disabled) return
    e.preventDefault()

    this.checked = true
    this.focus()
    this.dispatchEvent(new Event('change', { bubbles: true }))
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (this.disabled) return

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      this.checked = true
      this.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }

  render() {
    const classes = {
      radio: true,
      checked: this.checked,
      disabled: this.disabled,
      focused: this._isFocused,
      invalid: this.invalid,
    }

    return html`
      <gds-selection-field-label
        supporting-text=${this.supportingText}
        label=${this.label}
        @click=${this._handleClick}
        type="radio"
      >
        <div class=${classMap(classes)}>
          <div class="dot"></div>
        </div>
      </gds-selection-field-label>
    `
  }
}
