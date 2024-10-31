import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { observeLightDOM } from '../../utils/decorators'
import { defaultStyles } from '../text/default-typography.styles'
import { styles } from './rich-text.styles'

/**
 * `gds-rich-text` can be used to wrap generic HTML content and apply typography styles.
 *
 * The wrapped content will get captured and transferred to the inner shadowRoot of the `gds-rich-text` element.
 *
 * @element gds-rich-text
 * @status beta
 *
 */
@gdsCustomElement('gds-rich-text')
export class GdsRichText extends GdsElement {
  static styles = [tokens, defaultStyles, styles]

  /**
   * Forwards the selector to the corresponding function on the inner shadowRoot.
   */
  querySelectorAll(selector: string): NodeList {
    if (!this.shadowRoot) return new NodeList()
    return this.shadowRoot.querySelectorAll(selector)
  }

  /**
   * Forwards the selector to the corresponding function on the inner shadowRoot.
   */
  querySelector(selector: string): Element | null {
    if (!this.shadowRoot) return null
    return this.shadowRoot.querySelector(selector)
  }

  /**
   * Forwards innerHTML from the inner shadowRoot.
   */
  get innerHTML(): string {
    return this.shadowRoot?.innerHTML || ''
  }

  set innerHTML(value: string) {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = value
  }

  connectedCallback(): void {
    super.connectedCallback()
    this._captureDOM()
  }

  @observeLightDOM()
  private _captureDOM() {
    if (!this.shadowRoot || this.childNodes.length === 0) return

    this.shadowRoot.replaceChildren(...Array.from(this.childNodes))
  }
}
