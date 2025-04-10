import { html } from 'lit'
import { property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

import { GdsElement } from '../../gds-element'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { forSpaceTokensAndCustomValues } from '../../utils/helpers'
import {
  withLayoutChildProps,
  withMarginProps,
} from '../../utils/mixins/declarative-layout-mixins'
import IconCSS from './icon.style'

/**
 * @element gds-icon
 * @status stable
 *
 * @part icon - The icon SVG element.
 */

export class GdsIcon extends withMarginProps(withLayoutChildProps(GdsElement)) {
  static styles = [IconCSS]

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
   * This property allow you to set the accessible label of the icon.
   * If not provided, the icon will be presentational.
   */
  @property({ type: String })
  label = ''

  // Static properties
  protected static _name: string
  protected static _regularSVG?: string
  protected static _solidSVG?: string
  protected static _width: number
  protected static _height: number
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
      width: constructor._width,
      height: constructor._height,
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
