import { html } from 'lit'

import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { GdsFlex } from '../flex/'

@gdsCustomElement('gds-breadcrumb')
export class GdsBreadcrumb extends GdsFlex {
  constructor() {
    super()
    this['align-items'] = 'center'
    this.gap = '2xs'
  }

  render() {
    return html` <slot @slotchange=${this._handleSlotChange}></slot> `
  }

  private _handleSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement
    const elements = slot.assignedElements({ flatten: true })

    // Remove any existing separators
    this.querySelectorAll('[data-breadcrumb-separator]').forEach((sep) =>
      sep.remove(),
    )

    // Get the separator template
    const separatorSlot = this.querySelector('[slot="separator"]')
    if (!separatorSlot) return

    // Insert separator between items
    elements.forEach((element, index) => {
      if (index === elements.length - 1) return

      const separator = separatorSlot.cloneNode(true) as HTMLElement
      separator.setAttribute('data-breadcrumb-separator', '')
      element.after(separator)
    })
  }
}
