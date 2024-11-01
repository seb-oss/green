import { html } from 'lit'
import { property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

import { GdsElement } from '../../gds-element'
import IconCSS from './icon.style'

/**
 * @element gds-icon
 * @status stable
 */
export abstract class GdsIcon extends GdsElement {
  static styles = [IconCSS]

  /**
   * This property allow you to set the width of the icon. If not provided, the default width is 24px.
   */
  @property({ type: Number })
  width?: number

  /**
   * This property allow you to set the height of the icon. If not provided, the default height is 24px.
   */
  @property({ type: Number })
  height?: number

  /**
   * When set to true, the solid version of the icon is displayed. When set to false or not provided, the regular version of the icon is displayed.
   */
  @property({ type: Boolean })
  solid = false

  /**
   * When set to true, you can apply custom stroke width to the icon.
   */
  @property({ type: Number })
  stroke?: number

  /**
   * When viewbox is defined it will override the default viewbox of the icon.
   */
  @property({ type: String })
  box = false

  /**
   * This property allow you to set the accessible label of the icon. If not provided, the default label is the name of the icon.
   */
  @property({ type: String })
  label = ''

  protected static _name: string
  protected static _regularSVG?: string
  protected static _solidSVG?: string

  render() {
    const isSebIcon = (this.constructor as typeof GdsIcon)._name === 'brand-seb'

    const width = isSebIcon
      ? '55'
      : this.width !== undefined
        ? this.width.toString()
        : undefined
    const height = isSebIcon
      ? '24'
      : this.height !== undefined
        ? this.height.toString()
        : '1lh'
    const viewBox = isSebIcon ? '0 0 55 24' : this.box || '0 0 24 24'

    let svgContent = `<svg
      ${width ? `width="${width}"` : ''}
      height="${height}"
      viewBox="${viewBox}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label ? `aria-label="${this.label}"` : `aria-label="${(this.constructor as typeof GdsIcon)._name}"`}
      role="graphics-symbol"
      part="icon" 
    >
      ${this.solid ? (this.constructor as typeof GdsIcon)._solidSVG : (this.constructor as typeof GdsIcon)._regularSVG}
    </svg>`

    if (this.stroke) {
      svgContent = svgContent.replace(
        /<(path|rect|circle|ellipse|line|polyline|polygon)/g,
        `<$1 stroke-width="${this.stroke}"`,
      )
    }

    return html`${unsafeHTML(svgContent)}`
  }
}
