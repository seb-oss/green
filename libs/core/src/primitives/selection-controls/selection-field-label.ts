import { localized } from '@lit/localize'
import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import { watch } from '../../utils/decorators/watch.js'
import { styles } from './selection-field-label.styles' // Renamed style file

/**
 * @element gds-selection-field-label
 * @status beta
 * @internal
 *
 * A specialized label component designed for selection-based form controls (radio buttons and checkboxes).
 * It provides a consistent structure for:
 * - The control element (radio/checkbox)
 * - Primary label text
 * - Optional supporting text
 *
 * Usage:
 * ```html
 * <gds-selection-field-label
 *   label="Choose an option"
 *   supporting-text="Additional information"
 *   type="radio"
 * >
 *   <slot><!-- radio/checkbox element goes here --></slot>
 * </gds-selection-field-label>
 * ```
 */
@gdsCustomElement('gds-selection-field-label')
@localized()
export class GdsSelectionFieldLabel extends GdsElement {
  static styles = [tokens, styles]

  /**
   * The main label text displayed next to the selection control
   */
  @property()
  label = ''

  /**
   * Additional descriptive text displayed below the main label
   */
  @property({ attribute: 'supporting-text' })
  supportingText = ''

  /**
   * Indicates the type of selection control this label is associated with
   */
  @property()
  type: 'radio' | 'checkbox' = 'radio'

  /**
   * Controls the size of the label and supporting text
   */
  @property()
  size: 'large' | 'small' = 'large'

  /**
   * Whether the associated control is disabled
   */
  @property({
    type: Boolean,
    reflect: true,
  })
  disabled = false

  /**
   * Whether the associated control is in an invalid state
   */
  @property({ type: Boolean })
  invalid = false

  constructor() {
    super()
  }

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-selection-field-label')
  }

  render() {
    const classes = {
      'selection-field-label': true,
      [`type-${this.type}`]: true,
      invalid: this.invalid,
      disabled: this.disabled,
      small: this.size === 'small',
    }

    return html`
      <div class="selection-field-container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="label-content ${classMap(classes)}" part="_label-content">
          <label class="primary-label" part="primary-label">
            ${this.label}
          </label>
          ${this.supportingText
            ? html`
                <span class="supporting-text" part="_supporting-text">
                  ${this.supportingText}
                </span>
              `
            : ''}
        </div>
      </div>
    `
  }

  @watch('disabled')
  private _handleDisabledChange() {
    if (this.disabled) {
      this.setAttribute('inert', '')
    } else {
      this.removeAttribute('inert')
    }
  }
}
