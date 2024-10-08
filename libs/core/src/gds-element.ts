import { state } from 'lit/decorators.js'
import { DynamicStylesController } from './dynamic-styles'
import { getUnscopedTagName } from './scoping'
import { LitElement } from 'lit'

// This nis needed to support legacy decorators. Once we upgrade to TC39 standard decorators across the lib, we can remove this.
// More info: https://lit.dev/docs/components/decorators/#decorator-versions
import 'reflect-metadata'

export class GdsElement extends LitElement {
  /**
   * The unscoped name of this element. This attribute is set automatically by the element and is inteded to be read-only.
   *
   * @attribute gds-element
   * @readonly
   */
  gdsElementName = ''

  /**
   * Whether the element is using transitional styles.
   * @internal
   */
  @state()
  _isUsingTransitionalStyles = false

  /**
   * @private
   */
  _dynamicStylesController: DynamicStylesController

  constructor() {
    super()
    this._dynamicStylesController = new DynamicStylesController(this)
  }

  // TODO: This is slow. We need to find a more efficient way of setting the gds-element attribute.
  connectedCallback(): void {
    super.connectedCallback()
    this.gdsElementName =
      getUnscopedTagName(this.tagName.toLowerCase()) || this.gdsElementName
    this.setAttribute('gds-element', this.gdsElementName)
  }
}
