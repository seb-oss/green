import { localized, msg } from '@lit/localize'
import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { IconChevronLeft } from '../icon/icons/chevron-left.component'
import BreadcrumbsStyles from './breadcrumbs.styles'

import type { GdsBreadcrumb } from './breadcrumb/breadcrumb.component'

/**
 * @element gds-breadcrumbs
 * @summary The `gds-breadcrumbs` component is a navigation element
 * It helps users understand their current * location within a hierarchical structure of a website or application.
 *
 */
@gdsCustomElement('gds-breadcrumbs', {
  dependsOn: [IconChevronLeft],
})
@localized()
export class GdsBreadcrumbs extends withLayoutChildProps(
  withSizeXProps(withMarginProps(GdsElement)),
) {
  static styles = [tokens, BreadcrumbsStyles]

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

  get breadcrumbItems(): GdsBreadcrumb[] {
    return Array.from(
      this.querySelectorAll('[gds-element=gds-breadcrumb]'),
    ) as GdsBreadcrumb[]
  }

  private handleSlotChange() {
    const items = this.breadcrumbItems

    items.forEach((item, index) => {
      if (index === items.length - 2) {
        item.setAttribute('return', '')
      } else {
        item.removeAttribute('return')
      }
    })
  }

  render() {
    return html`
      <nav
        role="navigation"
        aria-label=${this.label}
        class=${classMap({ 'size-small': this.size === 'small' })}
      >
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <div role="list" class="list">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </nav>
    `
  }
}
