import { LitElement } from 'lit'
import { getUnscopedTagName } from './utils/helpers/custom-element-scoping'

export class GdsElement extends LitElement {
  /**
   * The unscoped name of this element.
   */
  gdsElementName = ''

  /**
   * Whether the element is using transitional styles.
   * @internal
   */
  _isUsingTransitionalStyles = false

  connectedCallback(): void {
    super.connectedCallback()
    this.gdsElementName =
      getUnscopedTagName(this.tagName.toLowerCase()) || this.gdsElementName
    this.setAttribute('gds-element', this.gdsElementName)
  }
}
