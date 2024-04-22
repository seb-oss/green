import { getUnscopedTagName } from '@sebgroup/green-core/utils/helpers/custom-element-scoping'
import { LitElement } from 'lit'

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
