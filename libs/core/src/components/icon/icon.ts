import { html, LitElement } from 'lit'
import { property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

import IconCSS from './icon.style.css'

export abstract class GdsIcon extends LitElement {
  static styles = [IconCSS]

  /**
   * This property allow you to set the width of the icon. If not provided, the default width is 24px.
   */
  @property({ type: Number })
  width = 24

  /**
   * This property allow you to set the height of the icon. If not provided, the default height is 24px.
   */
  @property({ type: Number })
  height = 24

  /**
   * When set to true, the solid version of the icon is displayed. When set to false or not provided, the regular version of the icon is displayed.
   */
  @property({ type: Boolean })
  solid = false

  /**
   * This property allow you to set the accessible label of the icon. If not provided, the default label is the name of the icon.
   */
  @property({ type: String })
  label = ''

  protected static _name: string
  protected static _regularSVG?: string
  protected static _solidSVG?: string

  render() {
    const svgContent = `<svg
      width="${this.width}"
      height="${this.height}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label ? `aria-label="${this.label}"` : `aria-label="${(this.constructor as typeof GdsIcon)._name}"`}
      role="graphics-symbol"
    >
      ${this.solid ? (this.constructor as typeof GdsIcon)._solidSVG : (this.constructor as typeof GdsIcon)._regularSVG}
    </svg>`

    return html`${unsafeHTML(svgContent)}`
  }
}
