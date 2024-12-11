import { localized } from '@lit/localize'
import { property } from 'lit/decorators.js'

import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsFormControlElement } from '../form/form-control'
import { styles } from './select.styles'

import '../button/button'
import '../../primitives/field-base/field-base'
import '../icon/icons/chevron-bottom'

/**
 * @element gds-select
 * @status beta
 */
@gdsCustomElement('gds-select')
@localized()
export class GdsSelect extends GdsFormControlElement<string> {
  static styles = [styles]

  @property()
  placeholder = ''

  @property({ type: String })
  size: 'large' | 'small' = 'large'

  @property({
    attribute: 'disabled',
    type: Boolean,
    reflect: true,
  })
  disabled = false

  firstUpdated() {
    const labelElement = this.shadowRoot?.querySelector('label')
    const slotElement = this.shadowRoot?.querySelector('slot:not([name])')
    let selectElement: HTMLSelectElement | null = null

    if (slotElement) {
      const assignedNodes = slotElement.assignedNodes({ flatten: true })
      selectElement = assignedNodes.find(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'SELECT',
      ) as HTMLSelectElement
    }

    if (labelElement && selectElement) {
      slotElement.addEventListener('change', () => {
        const selectedOption = selectElement.selectedOptions[0]
        labelElement.textContent = selectedOption.textContent
      })
    }
  }

  protected _getValidityAnchor(): HTMLElement {
    return this.shadowRoot?.querySelector('select') as HTMLElement
  }

  render() {
    return html`
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
      >
        <slot name="lead" slot="lead"></slot>
        <label>${this.placeholder || 'Select'}</label>
        <slot></slot>
        <gds-button
          tabindex="-1"
          size="${this.size === 'small' ? 'small' : ''}"
          rank="tertiary"
          variant="${this.invalid ? 'negative' : ''}"
          ?disabled="${this.disabled}"
          slot="trail"
        >
          <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
        </gds-button>
      </gds-field-base>
    `
  }
}
