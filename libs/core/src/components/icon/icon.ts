import { unsafeCSS, html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './stem.styles.scss'

@customElement('gds-icon')
export class GdsIcon extends LitElement {
  static styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ]

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
        const module = await import(`../icons/${name}.svg`)
        this.svgContent = module.default.toString()
        console.log(`SVG imported: ${name}`)
        console.log(this.svgContent)
        this.requestUpdate() // Request an update after the SVG has loaded
      } catch (error) {
        console.log(`Failed to import SVG: ${error}`)
      }
    }
  }

  render() {
    return html`${this.svgContent}`
  }
}
