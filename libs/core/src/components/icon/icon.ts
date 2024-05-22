import { html, LitElement } from 'lit'
import { property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

import IconCSS from './icon.style.css'

export abstract class GdsIcon extends LitElement {
  static styles = [IconCSS]

  @property({ type: String }) width = '24'
  @property({ type: String }) height = '24'
  @property({ type: Boolean }) solid = false
  @property({ type: String }) label = ''

  protected static _regularSVG?: string
  protected static _solidSVG?: string

  render() {
    const svgContent = `<svg
      width="${this.width}"
      height="${this.height}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="${this.label}"
    >
      ${this.solid ? (this.constructor as typeof GdsIcon)._solidSVG : (this.constructor as typeof GdsIcon)._regularSVG}
    </svg>`

    return html`${unsafeHTML(svgContent)}`
  }
}
