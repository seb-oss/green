import { html } from 'lit'
import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { IconChevronLeft } from '../icon/icons/chevron-left.component'
import BreadcrumbCSS from './breadcrumb.styles'

@gdsCustomElement('gds-breadcrumb', {
  dependsOn: [IconChevronLeft],
})
export class GdsBreadcrumb extends withLayoutChildProps(
  withSizeXProps(withMarginProps(GdsElement)),
) {
  static styles = [tokens, BreadcrumbCSS]

  /**
   * Controls the font-size of texts
   */
  @property({ type: String })
  size: 'large' | 'small' = 'large'

  constructor() {
    super()
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties)

    if (changedProperties.has('size')) {
      this.updateChildrenSize()
    }
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role', 'navigation')
    this.setAttribute('aria-label', 'Breadcrumb')
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
    const secondToLastIndex = elements.length - 2
    const CLASSES = {
      'size-small': this.size === 'small',
    }
    return html`
      <nav aria-label="Breadcrumb" class=${classMap(CLASSES)}>
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <ol>
          ${elements.map(
            (element, index) => html`
              <li
                class=${classMap({
                  'show-on-mobile': index === secondToLastIndex,
                })}
              >
                ${element}
              </li>
              ${index < elements.length - 1
                ? html`<span class="separator" aria-hidden="true">/</span>`
                : null}
            `,
          )}
        </ol>
      </nav>
    `
  }
}
