import { localized } from '@lit/localize'
import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import { watch } from '../../utils/decorators/watch.js'
import { styles } from './field-label.styles'

/**
 * @element gds-field-label
 * @status beta
 * @internal
 *
 * gds-field-label is a primitive that provides a reusable base structure for the "label" part of form controls in Checkbox and Radio button.
 *
 */
@gdsCustomElement('gds-field-label')
@localized()
export class GdsFieldLabel extends GdsElement {
  static styles = [tokens, styles]

  /**
   * The label of the field.
   */
  @property()
  label = ''

  /**
   * The support text of the label.
   */
  @property()
  'support-text' = ''

  /**
   * The size of the label and support text.
   */
  @property()
  size: 'large' | 'small' = 'large'

  /**
   * Whether the field is disabled.
   */
  @property({
    type: Boolean,
    reflect: true,
  })
  disabled = false

  /**
   * Whether the field is invalid.
   */
  @property({ type: Boolean })
  invalid = false

  constructor() {
    super()
  }

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-field-label')
  }

  render() {
    const classes = {
      invalid: this.invalid ?? false,
      disabled: this.disabled,
      small: this.size === 'small',
    }

    return html`
      <div class="field-label-container">
        <slot></slot>
        <div class="field-label ${classMap(classes)}" part="_label">
          <label class="label" part="_label-text"> ${this.label} </label>
          <span class="support-text" part="_support-text">
            ${this['support-text']}
          </span>
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
