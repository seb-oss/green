import { localized } from '@lit/localize'
import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import ToggleControlBaseStyles from './toggle-control-base.styles'

/**
 * @element gds-toggle-control-base
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
 * <gds-toggle-control-base
 *   label="Choose an option"
 *   supporting-text="Additional information"
 * >
 *   <slot><!-- radio/checkbox element goes here --></slot>
 * </gds-toggle-control-base>
 * ```
 */
@gdsCustomElement('gds-toggle-control-base')
@localized()
export class GdsToggleControlBase extends GdsElement {
  static styles = [tokens, ToggleControlBaseStyles]

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

  constructor() {
    super()
  }

  render() {
    const classes = {
      label: true,
      'has-supporting-text': !!this.supportingText,
    }

    return html`
      <div class="container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${classMap(classes)}">
          <label class="primary-label"> ${this.label} </label>
          ${this.label
            ? html`
                <span class="supporting-text"> ${this.supportingText} </span>
              `
            : ''}
        </div>
      </div>
    `
  }
}
