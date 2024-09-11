import { html } from 'lit/static-html.js'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import BadgeCSS from './badge.style.css'

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
   * Supports all valid variants like information, notice, success, warning, error.
   * @property variant
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `${v}`,
    selector: '.badge',
    styleTemplate: (prop, values) => {
      const variant = values[0]
      const variantMapping: { [key: string]: { bg: string; color: string } } = {
        information: {
          bg: 'information',
          color: 'information',
        },
        notice: {
          bg: 'notice',
          color: 'notice',
        },
        success: {
          bg: 'positive',
          color: 'positive',
        },
        warning: {
          bg: 'warning',
          color: 'warning',
        },
        error: {
          bg: 'negative',
          color: 'negative',
        },
      }

      const tokens = variantMapping[variant] || {
        bg: 'default-bg',
        color: 'default-content',
      }
      const BG = `background-color: var(--gds-color-l3c-background-${tokens.bg}-secondary);`
      const CL = `color: var(--gds-color-l3c-content-${tokens.color});`
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
