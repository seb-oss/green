import { localized, msg } from '@lit/localize'
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
import BreadcrumbStyles from './breadcrumbs.styles'

/**
 * @element gds-breadcrumbs
 * @summary The `gds-breadcrumbs` component is a navigation element
 * It helps users understand their current * location within a hierarchical structure of a website or application.
 *
 * @status beta
 */
@gdsCustomElement('gds-breadcrumbs', {
  dependsOn: [IconChevronLeft],
})
@localized()
export class GdsBreadcrumbs extends withLayoutChildProps(
  withSizeXProps(withMarginProps(GdsElement)),
) {
  static styles = [tokens, BreadcrumbStyles]

  /**
   * Controls the font-size and spacing of separators and breadcrumbs items
   */
  @property({ type: String })
  size: 'large' | 'small' = 'large'

  /**
   * This property allow you to set the accessible label of the breadcrumbs.
   * If not provided, the default label is "breadcrumbs".
   */
  @property({ type: String })
  label: string = msg('Breadcrumbs')

  render() {
    const elements = Array.from(this.children)
    const secondToLastIndex = elements.length - 2

    return html`
      <nav
        role="navigation"
        aria-label=${this.label}
        class=${classMap({ 'size-small': this.size === 'small' })}
      >
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
