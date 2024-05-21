import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import IconCSS from './icon.style.css'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

@customElement('gds-icon')
export class GdsIcon extends LitElement {
  static styles = [IconCSS]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  @property({ type: String }) name = ''
  svgContent = ''

  async updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('name')) {
      const { name } = this
      if (!name) {
        console.log('Name property is not set.')
        return
      }

      try {
        const module = await import(`!!raw-loader!../icons/${name}.svg?raw`)

        /* 
        Might use this method 

        const response = await fetch(`../icons/${name}.svg`);
        this.svgContent = await response.text();
        */

        this.svgContent = module.default
        console.log(`SVG imported: ${name}`)
        this.requestUpdate() // Request an update after the SVG has loaded
      } catch (error) {
        console.log(`Failed to import SVG: ${error}`)
      }
    }
  }

  render() {
    return html`${unsafeHTML(this.svgContent)}`
  }
}
