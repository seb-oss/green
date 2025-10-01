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
import BreadcrumbStyles from './breadcrumbs.styles'

import type { GdsBreadcrumbsItem } from './breadcrumbs-item/breadcrumbs-item.component'

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

  get breadcrumbItems(): GdsBreadcrumbsItem[] {
    return Array.from(
      this.querySelectorAll('[gds-element=gds-breadcrumbs-item]'),
    ) as GdsBreadcrumbsItem[]
  }

  private handleSlotChange() {
    const items = this.breadcrumbItems

    items.forEach((item, index) => {
      if (index === items.length - 2) {
        item.setAttribute('show-on-mobile', '')
      } else {
        item.removeAttribute('show-on-mobile')
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
        <ol>
          <slot @slotchange=${this.handleSlotChange}></slot>
        </ol>
      </nav>
    `
  }
}
