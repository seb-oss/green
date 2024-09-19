import { html } from 'lit/static-html.js'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import BadgeCSS from './badge.style'

/**
 * `gds-badge`
 *
 * @element gds-badge
 * @status beta
 *
 */

@gdsCustomElement('gds-badge')
export class GdsBadge extends GdsElement {
  static styles = [tokens, BadgeCSS]

  /**
   * Controls the variant of the badge.
   * Supports all valid variants like information, notice, positive, warning, negative.
   * @property variant
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `${v}`,
    selector: '.badge',
    styleTemplate: (prop, values) => {
      const level = 'l3'
      const variant = values[0]
      const BG = `background-color: var(--gds-color-${level}-background-${variant}-secondary);`
      const CL = `color: var(--gds-color-${level}-content-${variant});`
      const style = `${BG} ${CL}`
      return style
    },
  })
  variant?: string

  render() {
    return html`<div class="badge">
      <slot name="lead"></slot>
      <slot></slot>
      <slot name="trail"></slot>
    </div>`
  }
}
