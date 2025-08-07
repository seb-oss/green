import { property, query, queryAsync } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'

import { GdsToggleControlBase } from '../../primitives/toggle-controls-base/toggle-control-base.component'
import { gdsCustomElement, html } from '../../scoping'
import rbcbToggleStyles from '../../shared-styles/rbcb-toggle.style'
import { checkboxToggle } from '../../shared-styles/rbcb-toggle.template'
import { tokens } from '../../tokens.style'
import { watch } from '../../utils/decorators/watch'
import { GdsFormControlElement } from '../form/form-control'
import { IconCheckmark, IconMinusSmall } from '../pure'
import CheckboxStyles from './checkbox.styles'

/**
 * @element gds-checkbox
 * @status beta
 *
 * @event input - Dispatched when the checkbox is checked or unchecked.
 * @event change - Dispatched when the checkbox is checked or unchecked.
 */
@gdsCustomElement('gds-checkbox', {
  dependsOn: [GdsToggleControlBase, IconCheckmark, IconMinusSmall],
})
export class GdsCheckbox extends GdsFormControlElement {
  static styles = [tokens, rbcbToggleStyles, CheckboxStyles]

  /**
   * The label displayed next to the checkbox button.
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
   * Whether the checkbox button is checked or not.
   */
  @property({ type: Boolean })
  checked = false

  /**
   * Indicates the indeterminate state of the checkbox.
   * This state is used when the checkbox represents a group where some but not all
   * child options are selected, such as in hierarchical selections or "select all" scenarios.
   */
  @property({ type: Boolean, reflect: true })
  indeterminate = false

  /**
   * Whether the checkbox button is disabled or not.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false

  get value(): string {
    return this._internalValue || ''
  }

  set value(value: string) {
    this._internalValue = value
  }

  @query('input[type="checkbox"]')
  private _elCheckbox!: HTMLInputElement

  @watch('indeterminate')
  private _handleIndeterminateChange() {
    if (this.indeterminate) {
      this.checked = false
    }
  }

  render() {
    return html`
      <input
        type="checkbox"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        ?indeterminate=${this.indeterminate}
        aria-invalid=${this.invalid}
        aria-describedby=${ifDefined(
          this.supportingText ? 'supporting-text' : '',
        )}
        id="checkbox-input"
        @change=${() => {
          this.checked = this._elCheckbox.checked
          this.#dispatchChangeEvents()
        }}
      />
      <gds-toggle-control-base type="checkbox" @click=${this.#toggleChecked}>
        <label for="checkbox-input" slot="label"> ${this.label} </label>
        <span
          slot="supporting-text"
          class="supporting-text"
          id="supporting-text"
        >
          ${this.supportingText}
        </span>
        ${checkboxToggle({
          checked: this.checked,
          indeterminate: this.indeterminate,
          disabled: this.disabled,
          invalid: this.invalid,
        })}
      </gds-toggle-control-base>
    `
  }

  #toggleChecked(e: MouseEvent) {
    if (this.disabled || e.target instanceof HTMLLabelElement) return

    if (this.indeterminate) {
      this.indeterminate = false
    } else {
      this.checked = !this.checked
    }

    this.#dispatchChangeEvents()
  }

  #dispatchChangeEvents() {
    this.dispatchStandardEvent('change', {
      bubbles: true,
      composed: true,
    })
    this.dispatchStandardEvent('input', {
      bubbles: true,
      composed: true,
    })
  }

  protected _getValidityAnchor(): HTMLElement {
    return this._elCheckbox
  }

  protected override formResetCallback() {
    this.checked = false
  }
}
