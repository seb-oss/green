import { property, query } from 'lit/decorators.js'

import { GdsToggleControlBase } from '../../primitives/toggle-controls-base/toggle-control-base.component'
import { gdsCustomElement, html } from '../../scoping'
import rbcbToggleStyles from '../../shared-styles/rbcb-toggle.style'
import { checkboxToggle } from '../../shared-styles/rbcb-toggle.template'
import { tokens } from '../../tokens.style'
import { watch } from '../../utils/decorators/watch'
import { GdsFormControlElement } from '../form/form-control'
import { IconCheckmark } from '../pure'
import { styles } from './checkbox.styles'

/**
 * @element gds-checkbox
 * @status beta
 *
 * @event gds-checkbox-change - Dispatched when the checkbox is checked.
 */
@gdsCustomElement('gds-checkbox', {
  dependsOn: [GdsToggleControlBase, IconCheckmark],
})
export class GdsCheckbox extends GdsFormControlElement {
  static styles = [tokens, rbcbToggleStyles, styles]

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

  @query('.rbcb')
  private _elCheckbox!: HTMLElement

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role', 'checkbox')
    this._updateAriaState()
    this.addEventListener('keydown', this.#handleKeyDown)
    this.addEventListener('click', this.#handleClick)
  }

  private _updateAriaState() {
    this.setAttribute(
      'aria-checked',
      this.indeterminate ? 'mixed' : this.checked.toString(),
    )
    this.setAttribute('aria-disabled', this.disabled.toString())
    this.setAttribute('tabindex', this.disabled ? '-1' : '0')
    this.toggleAttribute('aria-invalid', this.invalid)
  }

  @watch('indeterminate')
  private _handleIndeterminateChange() {
    if (this.indeterminate) {
      this.checked = false
    }
  }

  protected updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties)

    if (
      changedProperties.has('checked') ||
      changedProperties.has('indeterminate') ||
      changedProperties.has('disabled') ||
      changedProperties.has('invalid')
    ) {
      this._updateAriaState()
    }
  }

  render() {
    return html`
      <gds-toggle-control-base
        supporting-text=${this.supportingText}
        label=${this.label}
        type="checkbox"
      >
        ${checkboxToggle({
          checked: this.checked,
          indeterminate: this.indeterminate,
          disabled: this.disabled,
          invalid: this.invalid,
        })}
      </gds-toggle-control-base>
    `
  }

  #handleClick = (e: Event) => {
    this.focus()
    this.#toggleChecked()
  }

  #handleKeyDown = (e: KeyboardEvent) => {
    if (this.disabled) return

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      this.#toggleChecked()
    }
  }

  #toggleChecked() {
    if (this.indeterminate) {
      this.indeterminate = false
      this.checked = true
    } else {
      this.checked = !this.checked
    }
    this.dispatchEvent(
      new CustomEvent('gds-checkbox-change', { bubbles: true }),
    )
    this.dispatchEvent(
      new Event('input', {
        bubbles: true,
        composed: true,
      }),
    )
  }

  protected _getValidityAnchor(): HTMLElement {
    return this._elCheckbox || this
  }

  protected override formResetCallback() {
    this.checked = false
  }
}
