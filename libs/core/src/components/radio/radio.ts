// radio.ts
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { styles } from './radio.styles'

import '../../primitives/selection-controls'

/**
 * @element gds-radio
 * @status beta
 */
@gdsCustomElement('gds-radio')
export class GdsRadio extends GdsElement {
  static styles = [tokens, styles]

  @property()
  label = ''

  @property({ attribute: 'supporting-text' })
  supportingText = ''

  @property()
  value = ''

  @property({ type: Boolean, reflect: true })
  checked = false

  @property({ type: Boolean, reflect: true })
  disabled = false

  @property()
  size: 'large' | 'small' = 'large'

  @state()
  private _isFocused = false

  connectedCallback() {
    super.connectedCallback()

    // Perhaps warn when not wrapped in a radio group
    // Or throw a validation error when not wrapped in a radio group

    this.setAttribute('role', 'radio')
  }

  private _handleClick() {
    if (this.disabled) return

    this.checked = true
    this.focus()
    this.dispatchEvent(new Event('change', { bubbles: true }))
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (this.disabled) return

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      this._handleClick()
    }
  }

  focus() {
    const radioElement = this.renderRoot?.querySelector('.radio')
    if (radioElement) {
      ;(radioElement as HTMLElement).focus()
    }
  }

  render() {
    const classes = {
      radio: true,
      checked: this.checked,
      disabled: this.disabled,
      focused: this._isFocused,
    }

    return html`
      <gds-selection-field-label
        supporting-text=${this.supportingText}
        label=${this.label}
        size=${this.size}
        @click=${this._handleClick}
        aria-disabled=${this.disabled}
        aria-checked=${this.checked}
        ?disabled=${this.disabled}
        type="radio"
      >
        <div
          class=${classMap(classes)}
          role="radio"
          tabindex="-1"
          aria-checked=${this.checked}
          aria-disabled=${this.disabled}
          @click=${this._handleClick}
          @keydown=${this._handleKeyDown}
          @focus=${() => (this._isFocused = true)}
          @blur=${() => (this._isFocused = false)}
        >
          <div class="dot"></div>
          <slot></slot>
        </div>
      </gds-selection-field-label>
    `
  }
}
