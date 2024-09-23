import { property } from 'lit/decorators.js'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { html } from '../../scoping'
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

  // Private property for level with default value 'l3'
  @property()
  private level: string = 'l3'

  /**
   * Controls the variant of the badge.
   * Supports all valid variants like information, notice, positive, warning, negative.
   * @property variant
   */
  @styleExpressionProperty({
    valueTemplate: (v: string) => `${v}`,
    selector: '.badge',
    styleTemplate: function (this: GdsBadge, prop: string, values: string[]) {
      const variant = values[0]
      return this.generateColorStyles(this.level, variant)
    },
  })
  variant = 'information'

  /**
   * Generates the color styles based on the level and variant.
   * @param level - The level of the badge.
   * @param variant - The variant of the badge.
   * @returns The CSS style string.
   */
  private generateColorStyles(level: string, variant: string): string {
    const BG = `background-color: var(--gds-color-${level}-background-${variant}-badge);`
    const CL = `color: var(--gds-color-${level}-content-${variant});`
    return `${BG} ${CL}`
  }

  render() {
    return html`<div class="badge">
      <slot name="lead"></slot>
      <slot></slot>
      <slot name="trail"></slot>
    </div>`
  }
}
