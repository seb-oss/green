import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { observeLightDOM } from '../../utils/decorators'
import {
  withLayoutChildProps,
  withMarginProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { defaultStyles } from '../text/default-typography.styles'
import { styles } from './rich-text.styles'

/**
 * `gds-rich-text` can be used to wrap generic HTML content and apply typography styles.
 *
 * The wrapped content will render inside the shadowRoot of the `gds-rich-text` element, thereby applying the
 * default typography styles and standard element styles defined in the Green Design System.
 *
 * @element gds-rich-text
 * @status beta
 *
 */
@gdsCustomElement('gds-rich-text')
export class GdsRichText extends withLayoutChildProps(
  withMarginProps(GdsElement),
) {
  static styles = [tokens, defaultStyles, styles]

  /**
   * Capture mode for the content.
   *
   * - `clone` (default): Clones the content to the shadowRoot.\
   *   This is the default and most compatible behaviour, since it leaves the original DOM untouched.
   *   the downside is that events added through `addEventListener` will not be retained in the cloned DOM.
   *
   * - `move`: Moves the content to the inner shadowRoot.\
   *   This mode moves the full original sub-tree into the shadowRoot, leaving everything, including event
   *   listeners, intact.
   *   This mode is less compatible with some libraries that rely on the original DOM structure, for example React
   */
  @property()
  captureMode: 'clone' | 'move' = 'clone'

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

  @observeLightDOM({
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  })
  private _captureDOM() {
    if (!this.shadowRoot || this.childNodes.length === 0) return

    if (this.captureMode === 'move') {
      this.shadowRoot.replaceChildren(...Array.from(this.childNodes))
      return
    }

    const cloned = Array.from(this.childNodes).map((node: Node) =>
      node.cloneNode(true),
    )

    this.shadowRoot.replaceChildren(...cloned)
  }
}
