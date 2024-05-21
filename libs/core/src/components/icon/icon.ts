import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

@customElement('gds-icon')
export class GdsIcon extends LitElement {
  @property({ type: String }) width = 24
  @property({ type: String }) height = 24
  @property({ type: Boolean }) solid = false

  protected _regularSVG?: string
  protected _solidSVG?: string

  render() {
    const svgContent = `<svg
      width="${this.width}"
      height="${this.height}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      ${this.solid ? this._solidSVG : this._regularSVG}
    </svg>`

    return html`${unsafeHTML(svgContent)}`
  }
}
