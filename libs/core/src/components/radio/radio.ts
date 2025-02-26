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

  @state()
  private _isFocused = false

  private _handleClick() {
    if (this.disabled) return

    this.checked = true
    this.dispatchEvent(new Event('change', { bubbles: true }))
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (this.disabled) return

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      this._handleClick()
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
        @click=${this._handleClick}
        aria-disabled=${this.disabled}
        aria-checked=${this.checked}
        type="radio"
      >
        <div
          tabindex="${this.disabled ? '-1' : '0'}"
          class=${classMap(classes)}
          role="radio"
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
