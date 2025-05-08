import { html } from 'lit'

import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { GdsFlex } from '../flex'

@gdsCustomElement('gds-breadcrumb')
export class GdsBreadcrumb extends GdsFlex {
  /**
   * Style Expression Property that controls the `font-size` property.
   * Supports all typography size tokens from the design system.
   */
  @styleExpressionProperty({
    styleTemplate: (_prop, values) => {
      const size = values[0]
      const styleSize = `font-size: var(--gds-sys-text-size-${size});`
      const styleLine = `line-height: var(--gds-sys-text-line-height-${size});`
      return styleSize + styleLine
    },
  })
  'font-size'?: string

  /**
   * Style Expression Property that controls the `font-weight` property.
   * Supports all typography weight tokens from the design system.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `var(--gds-sys-text-weight-${v})`,
  })
  'font-weight'?: string

  constructor() {
    super()
    this['align-items'] = 'center'
    this.gap = 's'
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role', 'navigation')
    this.setAttribute('aria-label', 'Breadcrumb')
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
