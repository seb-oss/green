import { HTMLTemplateResult } from 'lit'
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './radio.styles'

import '../../primitives/field-label'

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

  @property({ type: Boolean })
  selected = false

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-radio')
  }

  render() {
    const classes = {
      radio: true,
      selected: this.selected,
      // invalid: this.invalid ?? false,
      // disabled: this.disabled,
      // small: this.size === 'small',
    }

    return html`
      <gds-field-label support-text=${this.supportingText} label=${this.label}>
        <div tabindex="0" class=${classMap(classes)}>
          <div class="dot"></div>
        </div>
      </gds-field-label>
    `
  }
}
