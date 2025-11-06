// table.checkbox.ts
import { css } from 'lit'
import { property, query } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import rbcbToggleStyles from '../../shared-styles/rbcb-toggle.style'
import { checkboxToggle } from '../../shared-styles/rbcb-toggle.template'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { IconCheckmark, IconMinusSmall } from '../icon/icons/pure'

@gdsCustomElement('gds-table-checkbox', {
  dependsOn: [IconCheckmark, IconMinusSmall],
})
export class GdsTableCheckbox extends GdsElement {
  static styles = [
    tokens,
    rbcbToggleStyles,
    css`
      :host {
        display: contents;
      }

      .table-row-selector {
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        margin: auto;
        cursor: pointer;
      }

      input[type='checkbox'] {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
        pointer-events: none;
      }
    `,
  ]

  @property({ type: Boolean })
  checked = false

  @property({ type: Boolean })
  indeterminate = false

  @property({ type: Boolean })
  disabled = false

  @property()
  ariaLabel = ''

  @query('input[type="checkbox"]')
  private _input!: HTMLInputElement

  focus(options?: FocusOptions): void {
    this._input?.focus(options)
  }

  render() {
    return html`
      <input
        type="checkbox"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        aria-label=${this.ariaLabel}
        @change=${this.handleChange}
        @keydown=${this.handleKeydown}
      />
      <div class="table-row-selector" @click=${this.handleClick}>
        ${checkboxToggle({
          checked: this.checked,
          indeterminate: this.indeterminate,
          disabled: this.disabled,
          invalid: false,
        })}
      </div>
    `
  }

  private handleClick(e: Event) {
    e.stopPropagation()
    if (this.disabled) return
    this._input.click()
  }

  private handleChange() {
    this.dispatchEvent(
      new CustomEvent('selector-change', {
        detail: { checked: this._input.checked },
        bubbles: true,
      }),
    )
  }

  private handleKeydown(e: KeyboardEvent) {
    if (e.key === ' ') {
      e.stopPropagation()
    }
  }
}
