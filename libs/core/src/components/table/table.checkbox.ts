import { css } from 'lit'
import { property } from 'lit/decorators.js'

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
        outline: none;
        margin: auto;
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

  render() {
    return html`
      <div
        class="table-row-selector"
        @click=${this.handleClick}
        role="checkbox"
        .aria-checked=${this.indeterminate ? 'mixed' : this.checked.toString()}
        aria-label=${this.ariaLabel}
        tabindex="0"
        @keydown=${this.handleKeydown}
      >
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

    this.dispatchEvent(
      new CustomEvent('selector-change', {
        detail: { checked: !this.checked },
        bubbles: true,
      }),
    )
  }

  private handleKeydown(e: KeyboardEvent) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      this.handleClick(e)
    }
  }
}
