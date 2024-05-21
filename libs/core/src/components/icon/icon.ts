import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import IconCSS from './icon.style.css'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { IconArrow } from './icons/arrow'

@customElement('gds-icon')
export class GdsIcon extends LitElement {
  static styles = [IconCSS]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  @property({ type: String }) name = ''
  @property({ type: String }) width = 24
  @property({ type: String }) height = 24
  @property({ type: Boolean }) solid = false

  protected RegularSVG = IconArrow.RegularSVG
  protected SolidSVG = IconArrow.SolidSVG

  render() {
    const svgContent = `<svg
      width="${this.width}"
      height="${this.height}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      ${this.solid ? this.SolidSVG : this.RegularSVG}
    </svg>`

    return html`${unsafeHTML(svgContent)}`
  }
}
