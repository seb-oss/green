import { html } from 'lit'
import { property } from 'lit/decorators.js'

import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { GdsFlex } from '../flex'

@gdsCustomElement('gds-breadcrumb')
export class GdsBreadcrumb extends GdsFlex {
  /**
   * Controls the font-size of texts
   */
  @property({ type: String })
  size: 'large' | 'small' = 'large'

  constructor() {
    super()
    this['align-items'] = 'center'
    this.gap = 's'
    this['font-weight'] = 'medium'
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties)

    if (changedProperties.has('size')) {
      this['font-size'] = this.size === 'small' ? 'detail-s' : 'detail-m'
      this.updateChildrenSize()
    }
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role', 'navigation')
    this.setAttribute('aria-label', 'Breadcrumb')
    this['font-size'] = this.size === 'small' ? 'detail-s' : 'detail-m'
    this['font-weight'] = 'book'
    this.updateChildrenSize()
  }

  private updateChildrenSize() {
    Array.from(this.children).forEach((child) => {
      if ('size' in child) {
        ;(child as unknown as HTMLElement).setAttribute('size', this.size)
      }
    })
  }

  render() {
    const elements = Array.from(this.children)

    return html`
      ${elements.map(
        (element, index) => html`
          ${element} ${index < elements.length - 1 ? this.separator : null}
        `,
      )}
    `
  }

  private separator = html`<span>/</span>`
}
