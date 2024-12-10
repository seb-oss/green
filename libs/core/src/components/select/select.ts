import { property, query, queryAsync, state } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './select.styles'

import '../button/button'
import '../../primitives/field-base/field-base'
import '../icon/icons/chevron-bottom'

/**
 * @element gds-select
 */
@gdsCustomElement('gds-select')
export class GdsSelect extends GdsElement {
  static styles = [styles]

  @property()
  placeholder = ''

  firstUpdated() {
    const spanElement = this.shadowRoot?.querySelector('label')
    const slotElement = this.shadowRoot?.querySelector('slot:not([name])')
    let selectElement: HTMLSelectElement | null = null

    if (slotElement) {
      const assignedNodes = slotElement.assignedNodes({ flatten: true })
      selectElement = assignedNodes.find(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'SELECT',
      ) as HTMLSelectElement
    }

    if (spanElement && selectElement) {
      slotElement.addEventListener('change', () => {
        const selectedOption = selectElement.selectedOptions[0]
        spanElement.textContent = selectedOption.textContent
        selectElement.blur()
      })

      selectElement.addEventListener('focus', () => {
        this.classList.add('select-focused')
      })

      selectElement.addEventListener('blur', () => {
        this.classList.remove('select-focused')
      })

      // New event listener to detect when the select is opened
      selectElement.addEventListener('mousedown', () => {
        this.classList.add('select-opened')
      })

      // Add a global click event to detect when the select is closed
      document.addEventListener('click', (event) => {
        if (selectElement && !selectElement.contains(event.target as Node)) {
          this.classList.remove('select-opened')
        }
      })
    }
  }

  render() {
    return html`
      <gds-field-base>
        <slot name="lead" slot="lead"></slot>
        <label>${this.placeholder || 'Select'}</label>
        <slot></slot>
        <gds-button rank="tertiary" size="small" slot="trail">
          <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
        </gds-button>
      </gds-field-base>
    `
  }
}
