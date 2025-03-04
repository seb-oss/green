import { LitElement } from 'lit'
import { state } from 'lit/decorators.js'

import { DynamicStylesController } from './utils/controllers/dynamic-styles-controller'

// This nis needed to support legacy decorators. Once we upgrade to TC39 standard decorators across the lib, we can remove this.
// More info: https://lit.dev/Components/decorators/#decorator-versions
import 'reflect-metadata'

/**
 * Base class for Green Core elements.
 * This class sets up the base functionality that all Green Core elements share.
 *
 * @internal
 *
 * @fires gds-element-disconnected - When the element is disconnected from the DOM
 */
export class GdsElement extends LitElement {
  /**
   * The unscoped name of this element. This attribute is set automatically by the element and is inteded to be read-only.
   *
   * @attribute gds-element
   * @readonly
   */
  gdsElementName?: string

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

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('gds-element', this.gdsElementName?.toString() || '')
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.dispatchEvent(
      new CustomEvent('gds-element-disconnected', {
        bubbles: true,
        composed: false,
      }),
    )
  }
}
