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
    const elements = Array.from(this.children)
    const separator = this.querySelector('[slot="separator"]')

    return html`
      ${elements.map((element, index) => {
        if (element.getAttribute('slot') === 'separator') return null

        return html`
          ${element}
          ${index < elements.length - 1 ? separator?.cloneNode(true) : null}
        `
      })}
    `
  }
}
