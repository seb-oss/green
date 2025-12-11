import { html } from 'lit'
import { property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  forColorTokens,
  forSpaceTokensAndCustomValues,
  GdsColorLevel,
} from '../../utils/helpers'
import {
  withLayoutChildProps,
  withMarginProps,
} from '../../utils/mixins/declarative-layout-mixins'
import IconStyles from './icon.styles'

/**
 * @part icon - The icon SVG element.
 */
export class GdsIcon extends withMarginProps(withLayoutChildProps(GdsElement)) {
  static styles = [tokens, IconStyles]

  /**
   * This property allow you to set the size of the icon with the token and custom values.
   * If not provided, uses the icon's default size.
   *
   * The size is a shorthand for setting both width and height at once.
   */
  @styleExpressionProperty({
    ...forSpaceTokensAndCustomValues,
    property: 'height',
    selector: 'svg',
  })
  size?: string

  /**
   * When set to true, the solid version of the icon is displayed.
   * When set to false or not provided, the regular version of the icon is displayed.
   */
  @property({ type: Boolean })
  solid = false

  /**
   * When set to true, you can apply custom stroke width to the icon.
   */
  @property({ type: Number })
  stroke?: number

  /**
   * The level of the icon is used to resolve the color tokens from the corresponding level.
   * Check the [Color System documentation page](./?path=/docs/style-colors--docs) for more information.
   *
   * Default for `gds-icon-*` is level 2.
   *
   */
  @property()
  level: GdsColorLevel = '2'

  /**
   * Style Expression Property that controls the `color` property.
   * Only accepts color tokens and an optional transparency value, in the format tokenName/transparency.
   *
   * ```html
   * <gds-icon-ai color="neutral-01/0.2"></gds-icon-ai>
   * ```
   */
  @styleExpressionProperty(forColorTokens('content'))
  color?: string

  /**
   * This property allow you to set the accessible label of the icon.
   * If not provided, the icon will be presentational.
   */
  @property({ type: String })
  label = ''

  // Static properties
  protected static _name: string
  protected static _regularSVG?: string
  protected static _solidSVG?: string
  protected static _viewBox: string

  /**
   * Generates the SVG attributes for the icon
   * @private
   */
  private get svgAttributes() {
    const constructor = this.constructor as typeof GdsIcon
    const baseAttrs = {
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: constructor._viewBox,
      part: 'icon',
    }

    if (this.label) {
      return {
        ...baseAttrs,
        'aria-label': this.label,
      }
    } else {
      return {
        ...baseAttrs,
        role: 'presentation',
      }
    }
  }

  /**
   * Gets the appropriate SVG content based on the solid property
   * @private
   */
  private get svgContent() {
    const constructor = this.constructor as typeof GdsIcon
    return this.solid ? constructor._solidSVG : constructor._regularSVG
  }

  /**
   * Applies stroke width to SVG paths if stroke property is set
   * @private
   */
  private applyStroke(content: string): string {
    if (!this.stroke) return content

    return content.replace(
      /<(path|rect|circle|ellipse|line|polyline|polygon)/g,
      `<$1 stroke-width="${this.stroke}"`,
    )
  }

  /**
   * Generates the SVG attributes string
   * @private
   */
  private generateAttributesString(attrs: Record<string, any>): string {
    return Object.entries(attrs)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => `${key}="${value}"`)
      .join('\n      ')
  }

  render() {
    const attrs = this.svgAttributes
    let content = this.svgContent || ''

    if (this.stroke) {
      content = this.applyStroke(content)
    }

    const svg = `
      <svg ${this.generateAttributesString(attrs)}>
        ${content}
      </svg>
    `
    return html`${unsafeHTML(svg)}`
  }
}
