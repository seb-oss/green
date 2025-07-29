import { property, state } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { GdsToggleControlBase } from '../../primitives/toggle-controls-base/toggle-control-base.component'
import { gdsCustomElement, html } from '../../scoping'
import rbcbToggleStyles from '../../shared-styles/rbcb-toggle.style'
import { radioToggle } from '../../shared-styles/rbcb-toggle.template'
import { styles } from './radio.styles'

/**
 * @element gds-radio
 * @status beta
 *
 * @event input - Dispatched when the radio button is checked.
 */
@gdsCustomElement('gds-radio', { dependsOn: [GdsToggleControlBase] })
export class GdsRadio extends GdsElement {
  static styles = [rbcbToggleStyles, styles]

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
   * Whether the radio button is invalid or not.
   */
  @property({ type: Boolean })
  invalid = false

  @state()
  private _isFocused = false

  constructor() {
    super()
    this.addEventListener('keydown', this.#handleKeyDown)
    this.addEventListener('focus', () => (this._isFocused = true))
    this.addEventListener('blur', () => (this._isFocused = false))
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role', 'radio')
    this._updateAriaState()
    this.addEventListener('click', this.#handleClick)
  }

  private _updateAriaState() {
    this.setAttribute('aria-checked', this.checked.toString())
    this.setAttribute('aria-disabled', this.disabled.toString())
    this.setAttribute('tabindex', this.disabled ? '-1' : '0')
    this.toggleAttribute('aria-invalid', this.invalid)
  }

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties)

    if (
      changedProperties.has('checked') ||
      changedProperties.has('disabled') ||
      changedProperties.has('invalid')
    ) {
      this._updateAriaState()
    }
  }

  #handleClick = (e: Event) => {
    if (this.disabled || !this.value || !this.label) return
    e.preventDefault()

    this.checked = true
    this.focus()
    this.dispatchStandardEvent('input', { bubbles: true })
  }

  #handleKeyDown = (e: KeyboardEvent) => {
    if (this.disabled) return

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      this.checked = true
      this.dispatchStandardEvent('input', { bubbles: true })
    }
  }

  render() {
    return html`
      <gds-toggle-control-base
        supporting-text=${this.supportingText}
        label=${this.label}
        type="radio"
      >
        ${radioToggle({
          checked: this.checked,
          disabled: this.disabled,
          indeterminate: false,
          invalid: this.invalid,
        })}
      </gds-toggle-control-base>
    `
  }
}
